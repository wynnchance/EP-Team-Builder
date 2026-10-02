/* E&P recommendation engine: per-copy strength, instance allocation, costumes,
 * troops, synergy and opponent matching. Pure functions, no network, no DOM.
 * Sources and the verified/assumed status of every number: ENGINE_NOTES.md. */
(function(root){
  'use strict';

  /* ------------------------------------------------------------------ */
  /* 1. Game data and its provenance (see ENGINE_NOTES.md)               */
  /* ------------------------------------------------------------------ */

  // Max level of each ascension tier by rarity (Fandom "Hero Information").
  const TIERS = {1:[10,20], 2:[20,30,40], 3:[30,40,50], 4:[40,50,60,70], 5:[50,60,70,80]};
  // Level-1 stats as a fraction of max-level stats, per rarity. Derived from
  // per-hero level-1 and max stats in Empuzzled's public catalog (spread < 0.1%).
  const L1_RATIO = {1:0.8033, 2:0.6064, 3:0.5760, 4:0.4709, 5:0.4857};
  // Stats after each fully levelled Limit Break tier, relative to max level.
  // Same derivation (966 five-star, 166 four-star, 147 three-star heroes).
  const LB_RATIO = {3:[1,1.1337,1.4010], 4:[1,1.0866,1.2600], 5:[1,1.0777,1.2331]};
  const LB_LEVELS = 5;          // each Limit Break adds 5 levels (5*: 80 -> 85 -> 90)
  const BASECP = {5:90, 4:50, 3:30, 2:10, 1:0};
  // Talent-grid stat totals at 20 nodes by path, and the node curve (existing app model; estimate).
  const EMTOTAL = {attack:{atk:140,def:40,hp:160}, balanced:{atk:80,def:80,hp:300}, defense:{atk:40,def:100,hp:440}};
  // Costume bonus when a costume is fully levelled (Fandom "Costumes"): S1 vs later seasons.
  const COSTUME_BONUS = {low:{atk:.03,def:.03,hp:.06,mana:1}, high:{atk:.05,def:.05,hp:.10,mana:5}};
  const SPEED = {"Very Fast":5,"Fast":4,"Charge":3.5,"Ninja":3.5,"Magic":3.5,"Styx":3.5,"Changing Tides":3.5,"Dancer":4,"Average":3,"Slow":2,"Very Slow":1};
  // Tiles that hit an enemy needed to charge, offense, no bonus (Fandom "Mana";
  // Empuzzled mana speed guide). Stored doubled to keep 6.5 and 13.5 exact.
  const BASE_TILES_X2 = {"Very Fast":13, "Fast":16, "Average":20, "Slow":24, "Very Slow":27};
  // 4* mana troop bonus by level (Old Cynic troop guide; matches the Fandom
  // breakpoint levels 5/11/17/23/29).
  const MANA4_STEPS = [[29,15],[23,13],[17,11],[11,9],[5,7],[1,5]];
  // Troop definition IDs: public Empuzzled asset names; NOT yet verified against
  // a real save's troop records. The five 4* mana troops:
  const MANA4_IDS = new Set(["blue_epic_barbarian","green_epic_rogue","purple_epic_female_cultist","red_epic_female_rogue","yellow_epic_female_mage"]);
  const TROOP_COLORS = {red:"Fire", blue:"Ice", green:"Nature", yellow:"Holy", purple:"Dark"};
  const TROOP_RARITY = {common:1, uncommon:2, rare:3, epic:4, legendary:5};
  // Costume-bonus passive IDs whose effect matches an engine tag (names only; amounts not modelled).
  const UCB_TAGS = {resist_insanity:"insimmune"};
  const CLASSES = ["barbarian","cleric","druid","fighter","monk","paladin","ranger","rogue","sorcerer","wizard"];
  const ELS = ["Fire","Ice","Nature","Holy","Dark"];
  const STRONG = {Fire:"Nature", Nature:"Ice", Ice:"Fire", Holy:"Dark", Dark:"Holy"};

  const isInt = v => Number.isSafeInteger(v);
  const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
  const validPower = p => Number.isFinite(+p) && +p >= 100 && +p <= 3000;
  const baseName = n => String(n).replace(/ \(\d+\)$/, "");

  /* ------------------------------------------------------------------ */
  /* 2. Extra skill tags derived from skill text at runtime              */
  /* ------------------------------------------------------------------ */
  // Runs in the browser so a template rebuild or wiki re-harvest keeps them.
  function retag(h){
    if(!h || h.__retagged) return h;
    const sp = String(h.skill || ""), pas = String(h.pas || "");
    const tags = new Set(Array.isArray(h.tags) ? h.tags : []);
    const eldef = new Set();
    const rx = /[-−]\d+% defense against (Fire|Ice|Nature|Holy|Dark)/gi;
    let m; while((m = rx.exec(sp))) eldef.add(m[1][0].toUpperCase() + m[1].slice(1).toLowerCase());
    if(eldef.size){
      tags.add("eldefdown");
      // Only a general (non-elemental) reduction counts as ordinary defense down.
      const rest = sp.replace(/[-−]\d+% defense against (Fire|Ice|Nature|Holy|Dark)[^.●]*/gi, "");
      if(!/(enemies|target)[^.]{0,80}[-−]\d+% defense(?! against)|[-−]\d+ defense/i.test(rest)) tags.delete("defdown");
    }
    if(/recovers? \d+% health|boosts? (the )?health of [^.]{0,50} by \d+|boosts? health of the caster by \d+|receives? \d+ boosted health/i.test(sp)) tags.add("directheal");
    if(/health cannot increase above (their )?max health|prevent boosted healing/i.test(pas + " " + sp)) tags.add("antioverheal");
    if(/destroys? [^.]{0,30}fiends?|fiends? [^.]{0,30}(are|is) destroyed/i.test(sp + " " + pas)) tags.add("fiendhate");
    h.tags = [...tags];
    if(eldef.size) h.eldef = [...eldef];
    Object.defineProperty(h, "__retagged", {value:true, enumerable:false});
    return h;
  }

  /* ------------------------------------------------------------------ */
  /* 3. Progression and per-copy strength                               */
  /* ------------------------------------------------------------------ */
  const rarityOf = h => (TIERS[h && h.r] ? h.r : 5);
  const totalSteps = r => TIERS[r].reduce((a, t) => a + t - 1, 0);

  /** Interpret level / ascension / limit break for one hero or costume copy.
   *  Returns {state:'max'|'partial'|'unknown', factor, label, notes[]}.
   *  factor multiplies max-level (no LB) base stats. */
  function progression(rarity, p){
    const r = TIERS[rarity] ? rarity : 5, tiers = TIERS[r], nA = tiers.length, finalMax = tiers[nA - 1];
    const notes = [];
    const level = p && p.level, asc = p && p.ascension, lb = (p && isInt(p.limitBreak)) ? p.limitBreak : 0;
    if(!isInt(level) || !isInt(asc)) return {state:"unknown", factor:L1_RATIO[r], label:"?", notes:["Level and ascension are not in the save; ranked at level-1 stats (the minimum) until you enter card Power."]};
    if(asc < 1 || asc > nA || level < 1 || lb < 0 || lb > 2){
      return {state:"unknown", factor:L1_RATIO[r], label:asc + "^" + level + (lb ? " LB" + lb : ""), notes:["Unrecognised progression values (kept as imported); ranked at the minimum."]};
    }
    const label = asc + "^" + level + (lb ? " LB" + lb : "");
    const partial = steps => {
      const frac = clamp(steps / totalSteps(r), 0, 1);
      notes.push("Below max level: stats estimated by straight-line interpolation between level-1 and max stats (exact per-level growth is not published).");
      return {state:"partial", factor:L1_RATIO[r] + (1 - L1_RATIO[r]) * frac, label, notes, frac};
    };
    if(asc < nA){
      if(level > tiers[asc - 1]) return {state:"unknown", factor:L1_RATIO[r], label, notes:["Level exceeds its ascension cap; ranked at the minimum."]};
      let steps = level - 1; for(let i = 0; i < asc - 1; i++) steps += tiers[i] - 1;
      return partial(steps);
    }
    if(lb === 0){
      if(level === finalMax) return {state:"max", factor:1, label, notes};
      if(level > finalMax) return {state:"unknown", factor:L1_RATIO[r], label, notes:["Level exceeds max without a Limit Break; ranked at the minimum."]};
      return partial(totalSteps(r) - (finalMax - level));
    }
    const ratios = LB_RATIO[r];
    if(!ratios) return {state:"unknown", factor:1, label, notes:["Limit Break data is not available for this rarity."]};
    const prevCap = finalMax + LB_LEVELS * (lb - 1), cap = finalMax + LB_LEVELS * lb;
    if(level === cap) return {state:"max", factor:ratios[lb], label, notes};
    notes.push("Limit Break levels interpreted as levels above " + finalMax + " (not yet confirmed against a real save).");
    if(level > prevCap && level < cap){
      notes.push("Partly levelled Limit Break: stats interpolated between tier endpoints.");
      return {state:"partial", factor:ratios[lb - 1] + (ratios[lb] - ratios[lb - 1]) * (level - prevCap) / LB_LEVELS, label, notes};
    }
    if(level <= prevCap){
      notes.push("Limit Break unlocked but not levelled.");
      return {state:"partial", factor:ratios[lb - 1], label, notes};
    }
    return {state:"unknown", factor:1, label, notes:["Level exceeds the Limit Break cap; kept as imported."]};
  }

  function emFrac(n){
    const pts = [[0,0],[5,.22],[10,.48],[15,.73],[20,1]];
    n = clamp(n, 0, 20);
    for(let i = 1; i < pts.length; i++) if(n <= pts[i][0]){ const a = pts[i-1], b = pts[i]; return a[1] + (b[1]-a[1]) * (n-a[0]) / (b[0]-a[0]); }
    return 1;
  }
  // Master nodes 21-25: 21/22/24 choice (+50 atk or +60 def), 23/25 +50 health.
  function masterAdd(n, path){
    const lv = clamp(n - 20, 0, 5), add = {atk:0, def:0, hp:0}; let c = 0;
    for(let l = 1; l <= lv; l++){
      if(l === 3 || l === 5){ add.hp += 50; continue; }
      c++;
      if(path === "attack") add.atk += 50; else if(path === "defense") add.def += 60;
      else { if(c === 2) add.def += 60; else add.atk += 50; }
    }
    return add;
  }

  /** Stats and power for a hero form at a progression.
   *  o: {factor, nodes, path, costume:'low'|'high'|null, statHero}
   *  statHero supplies atk/dfn/hp when the form itself has none (costumes). */
  function statsFor(h, o){
    const r = rarityOf(h), src = (h && +h.atk && +h.dfn && +h.hp) ? h : (o.statHero && +o.statHero.atk ? o.statHero : null);
    const nodes = clamp(isInt(o.nodes) ? o.nodes : 0, 0, 25), path = EMTOTAL[o.path] ? o.path : "balanced";
    const cb = o.costume ? COSTUME_BONUS[o.costume] : null;
    const em = EMTOTAL[path], f = emFrac(Math.min(nodes, 20)), ma = masterAdd(nodes, path);
    const mNodes = Math.max(0, nodes - 20), npow = Math.min(nodes, 20) * 5 + mNodes * 13;
    if(src){
      const bA = +src.atk * o.factor, bD = +src.dfn * o.factor, bH = +src.hp * o.factor;
      const cA = cb ? +src.atk * cb.atk : 0, cD = cb ? +src.dfn * cb.def : 0, cH = cb ? +src.hp * cb.hp : 0;
      const a = bA + cA, d = bD + cD, hp = bH + cH;
      return {atk:Math.round(a + em.atk * f + ma.atk), def:Math.round(d + em.def * f + ma.def), hp:Math.round(hp + em.hp * f + ma.hp),
        power:(BASECP[r] || 90) + Math.floor(a * 0.35 + d * 0.28 + hp * 0.14) + 35 + npow, statsKnown:true, borrowed:src !== h};
    }
    const p = +((h && h.power) || (o.statHero && o.statHero.power) || 1300);
    return {atk:null, def:null, hp:null, power:Math.round(p * o.factor) + npow + (cb ? 30 : 0), statsKnown:false, borrowed:false};
  }

  /** Calculator helper kept for the existing UI: max level + lb tier + nodes. */
  function heroStats(h, lb, nodes, path){
    const r = rarityOf(h), ratios = LB_RATIO[r] || [1,1,1];
    const s = statsFor(h, {factor:ratios[clamp(lb|0, 0, 2)] || 1, nodes, path});
    return {atk:s.atk || 0, def:s.def || 0, hp:s.hp || 0, power:s.power, estimated:!s.statsKnown};
  }

  /* ------------------------------------------------------------------ */
  /* 4. Units: one per owned copy, each with its usable forms            */
  /* ------------------------------------------------------------------ */
  function costumeMaxed(rarity, c){
    const tiers = TIERS[rarity] || TIERS[5];
    return !!c && isInt(c.level) && isInt(c.ascension) && c.ascension === tiers.length && c.level >= tiers[tiers.length - 1];
  }

  /** Build units from roster state.
   *  args: {heroes, own, selected:Iterable<name>, aliases} */
  function buildUnits(args){
    const heroes = args.heroes || [], own = args.own || {}, aliases = args.aliases || {};
    const byName = new Map(heroes.map(h => [h.name, h]));
    const units = [];
    for(const name of args.selected || Object.keys(own)){
      const cat = byName.get(name); if(!cat) continue;
      const o = own[name] || {n:1};
      const baseHero = cat.base && byName.get(cat.base) ? byName.get(cat.base) : cat;
      const n = clamp(isInt(o.n) ? o.n : (+o.n || 1), 1, 1000);
      const r = rarityOf(baseHero);
      for(let k = 1; k <= n; k++){
        const inst = Array.isArray(o.instances) ? o.instances[k - 1] || null : null;
        const cfg = (Array.isArray(o.copies) && o.copies[k - 1]) || {};
        const imported = !!(inst && inst.instanceId);
        const key = imported ? "i:" + inst.instanceId : "m:" + name + "#" + k;
        const display = k === 1 ? name : name + " (" + k + ")";
        let exact = null;
        if(Array.isArray(o.ps)){ if(validPower(o.ps[k - 1])) exact = Math.round(+o.ps[k - 1]); }
        else if(k === 1 && validPower(o.p)) exact = Math.round(+o.p);
        const path = EMTOTAL[cfg.path] ? cfg.path : (EMTOTAL[o.path] ? o.path : "balanced");
        let prog, nodes, nodesKnown, source;
        const notes = [];
        if(imported){
          source = "import";
          prog = progression(r, inst);
          // Recount from the raw t field so rosters imported before the t/f fix are corrected without re-importing.
          const tCount = isInt(inst.talentT) && inst.talentT >= 0 && (inst.talentT & 31) <= 25 ? inst.talentT & 31 : null;
          const count = tCount !== null ? tCount : inst.unlockedTalentNodes;
          nodesKnown = isInt(count) && count >= 0 && count <= 25;
          nodes = nodesKnown ? count : 0;
          if(!nodesKnown) notes.push("Talent node count not in the save; counted as 0.");
          else notes.push("Talent stats use the " + path + " path assumption; the exact path is not decoded from the save.");
          if(isInt(inst.specialSkillLevel) && inst.specialSkillLevel < 8) notes.push("Special skill level " + inst.specialSkillLevel + "/8: skill text shows max-level values.");
        } else {
          source = "manual";
          const lb = clamp(+(cfg.lb ?? o.lb ?? 2) || 0, 0, 2);
          const ratios = LB_RATIO[r] || [1,1,1];
          prog = {state:"assumed", factor:ratios[lb] || 1, label:"max" + (lb && LB_RATIO[r] ? " LB" + lb : ""), notes:["Manual roster entry: assumed fully levelled" + (lb && LB_RATIO[r] ? " with LB" + lb : "") + ". Set this copy's build or card Power for accuracy."]};
          nodes = clamp(+(cfg.em ?? o.em ?? 20) || 0, 0, 25); nodesKnown = false;
        }
        // Costume development: only a fully levelled costume grants the bonus.
        const cosRecords = imported && Array.isArray(inst.costumes) ? inst.costumes : [];
        const anyMaxed = cosRecords.some(c => costumeMaxed(r, c));
        const costumeBonus = imported ? (anyMaxed ? "low" : null) : (cfg.cosMax ? "low" : null);
        // ucb: unlocked costume-bonus passive IDs (field seen in a real v389 save; meaning inferred from the names).
        const ucb = imported && inst.raw && Array.isArray(inst.raw.ucb) ? inst.raw.ucb.filter(x => typeof x === "string") : [];
        const ucbTags = ucb.map(x => UCB_TAGS[x]).filter(Boolean);
        if(ucb.length) notes.push("Costume bonus passives unlocked: " + ucb.map(x => x.replace(/_/g, " ")).join(", ") + (ucbTags.length ? " (counted as " + ucbTags.join(", ") + ")" : "") + ".");
        if(costumeBonus) notes.push("Costume bonus counted once at the conservative +3% atk/def, +6% HP (Season 1 costumes give +5%/+10%); multiple costume bonuses are not stacked.");
        const unit = {key, name, display, copy:k, instanceId:imported ? String(inst.instanceId) : null, definitionId:inst ? inst.definitionId : (o.definitionId || null),
          source, rarity:r, base:baseHero.name, path, nodes, nodesKnown, prog, exact, cfg, forms:[], notes, costumeBonus, ucb, ucbTags, raw:inst};
        // Base form (or the selected costume entry when a costume was added manually).
        unit.forms.push(makeForm(unit, cat, cat === baseHero ? "base" : "costume:" + cat.name, prog, baseHero, exact));
        // Costume forms from this copy's own costume records.
        for(const c of cosRecords){
          const defId = (inst.definitionId || "") + "_costume_" + c.costumeId;
          const a = aliases[defId], cHero = a && byName.get(a.name);
          if(!cHero){ unit.notes.push("Costume '" + c.costumeId + "' is not in the catalog; kept in the backup only."); continue; }
          if(unit.forms.some(f => f.hero === cHero)) continue;
          const cp = progression(r, c);
          unit.forms.push(makeForm(unit, cHero, "costume:" + cHero.name, cp, baseHero, null));
        }
        // A manual copy can pin a catalog costume; its development is then assumed.
        if(!imported && typeof cfg.form === "string" && cfg.form.startsWith("costume:")){
          const cHero = byName.get(cfg.form.slice(8));
          if(cHero && cHero.base === baseHero.name && !unit.forms.some(f => f.hero === cHero)) unit.forms.push(makeForm(unit, cHero, cfg.form, prog, baseHero, null));
        }
        unit.pinned = typeof cfg.form === "string" && unit.forms.some(f => f.id === cfg.form) ? cfg.form : null;
        units.push(unit);
      }
    }
    return units;
  }

  function makeForm(unit, hero, id, prog, baseHero, exact){
    const s = statsFor(hero, {factor:prog.factor, nodes:unit.nodes, path:unit.path, costume:unit.costumeBonus, statHero:baseHero});
    const notes = prog.notes.slice();
    if(s.borrowed) notes.push("Costume stats are missing from the catalog; base-hero stats were used.");
    if(!s.statsKnown) notes.push("Base stats are missing from the catalog; power scaled from listed power.");
    let status = unit.source === "manual" ? "assumed" : (prog.state === "unknown" ? "unknown" : "estimate");
    if(exact) status = "exact";
    const strength = {power:exact || s.power, calcPower:s.power, atk:s.atk, def:s.def, hp:s.hp, status, progress:prog.state, label:prog.label, notes, partial:prog.state === "partial"};
    return {id, hero, prog, strength, isCostume:id !== "base" && hero !== baseHero};
  }

  /** Pool entries for recommendation code: one per usable (unit, form). */
  function poolFrom(units){
    const out = [];
    for(const u of units){
      const forms = u.pinned ? u.forms.filter(f => f.id === u.pinned) : u.forms;
      for(const f of forms){
        const name = f.isCostume ? (u.copy === 1 ? f.hero.name : f.hero.name + " (" + u.copy + ")") : u.display;
        const e = Object.assign({}, f.hero, {name, base:u.base, tags:[...new Set((f.hero.tags || []).concat(u.ucbTags || []))]});
        Object.defineProperties(e, {
          __unit:{value:u.key}, __copy:{value:u.copy}, __form:{value:f.id}, __str:{value:f.strength}, __u:{value:u}, __f:{value:f}
        });
        out.push(e);
      }
    }
    return out;
  }

  /* ------------------------------------------------------------------ */
  /* 5. Troops                                                          */
  /* ------------------------------------------------------------------ */
  /** Owned troops from an imported snapshot. Unknown shapes are kept raw. */
  function parseTroops(troopsState){
    const src = troopsState && troopsState.savedOwnedIdToTroopDefinitions;
    const out = [];
    if(!src || typeof src !== "object") return out;
    for(const [ownedId, rec] of Object.entries(src)){
      const td = rec && typeof rec === "object" ? rec.td : null;
      out.push({ownedId:String(ownedId), defId:td && typeof td.id === "string" ? td.id : null, level:td && isInt(td.lvl) ? td.lvl : null, raw:rec});
    }
    return out;
  }

  /** Recognise a troop definition. labels: user-supplied {defId:{kind,color}}. */
  function recognizeTroop(t, labels){
    const lab = labels && t.defId && labels[t.defId];
    if(lab && ELS.includes(lab.color) && ["mana","magic","styx","other"].includes(lab.kind)) return {color:lab.color, kind:lab.kind, rarity:lab.kind === "mana" ? 4 : null, source:"manual"};
    const m = /^(red|blue|green|yellow|purple)_(common|uncommon|rare|epic|legendary)_([a-z_]+)$/.exec(t.defId || "");
    if(!m) return {color:null, kind:"unknown", rarity:null, source:"unmatched"};
    let kind = "other";
    if(m[2] === "epic" && MANA4_IDS.has(t.defId)) kind = "mana";
    else if(m[2] === "epic" && ["magic","styx","ninja"].includes(m[3])) kind = m[3];
    else if(m[2] === "legendary") kind = "legendary";
    // Legendary troop IDs end in a class name for the plain class troops (e.g. yellow_legendary_cleric).
    const cls = kind === "legendary" && CLASSES.includes(m[3]) ? m[3][0].toUpperCase() + m[3].slice(1) : null;
    return {color:TROOP_COLORS[m[1]], kind, rarity:TROOP_RARITY[m[2]], cls, source:"pattern"};
  }

  /** Mana bonus % from a troop, or null when it cannot be verified. */
  function troopMana(kind, level){
    if(!isInt(level)) return null;
    if(kind === "mana"){ if(level < 1 || level > 30) return null; for(const [l, v] of MANA4_STEPS) if(level >= l) return v; }
    if((kind === "magic" || kind === "styx") && level === 30) return 20;
    if(kind === "legendary" && level === 30) return 11;   // Empuzzled mana guide: legendary troops +11% max
    return null;
  }

  /** Tiles that hit needed to charge on offense; null if the speed or bonus is unsupported. */
  function tilesNeeded(speed, bonus){
    const b2 = BASE_TILES_X2[speed];
    if(!b2 || !isInt(bonus) || bonus < 0) return null;
    const num = b2 * 100, den = 2 * (100 + bonus);
    return Math.floor((num + den - 1) / den);
  }

  function troopsFrom(snapshot, labels){
    return parseTroops(snapshot && snapshot.troops).map(t => {
      const rec = recognizeTroop(t, labels);
      return Object.assign(t, rec, {mana:troopMana(rec.kind, t.level)});
    });
  }

  const KIND_LABEL = {mana:"Mana 4★", magic:"Magic", styx:"Styx", ninja:"Ninja", legendary:"Legendary", other:"Other", unknown:"Unrecognised"};
  function troopLabel(t){ return (t.color ? t.color + " " : "") + (KIND_LABEL[t.kind] || t.kind) + (t.cls ? " " + t.cls : "") + (isInt(t.level) ? " lvl " + t.level : "") + (t.source === "pattern" ? "" : t.source === "manual" ? " (your label)" : ""); }

  /** Best troop per hero within one team (one troop per hero, colours must match). */
  function assignTroops(team, troops){
    const used = new Set(), out = new Map();
    const order = team.slice().sort((a, b) => (BASE_TILES_X2[b.speed] || 0) - (BASE_TILES_X2[a.speed] || 0));
    for(const h of order){
      const base = tilesNeeded(h.speed, 0);
      let best = null;
      for(const t of troops || []){
        if(used.has(t.ownedId) || t.color !== h.el) continue;
        const tiles = tilesNeeded(h.speed, t.mana);
        const gain = tiles === null || base === null ? -1 : base - tiles;
        const classMatch = t.cls && h.cls === t.cls ? 1 : 0;   // tie-breaker only; class passives are not modelled
        const rank = [gain, classMatch, t.mana === null ? -1 : t.mana, t.level || 0];
        if(!best || cmp(rank, best.rank) > 0) best = {troop:t, tiles, base, gain, rank};
      }
      if(best){ used.add(best.troop.ownedId); out.set(h, best); }
      else out.set(h, {troop:null, tiles:base, base, gain:0});
    }
    return out;
  }
  const cmp = (a, b) => { for(let i = 0; i < a.length; i++) if(a[i] !== b[i]) return a[i] - b[i]; return 0; };

  /* ------------------------------------------------------------------ */
  /* 6. Synergy, conflicts and opponent matching                        */
  /* ------------------------------------------------------------------ */
  const T = (h, t) => Array.isArray(h.tags) && h.tags.includes(t);
  const NUKE = ["sniper","aoe","hit3"];
  const speedOf = (h, ctx) => ctx && ctx.key === "rush" ? 5 : (SPEED[h.speed] || 3);

  // a = setup/provider, b = payoff. timing: setup should charge no slower than payoff.
  // k: tags whose battle-rule modifier scales the rule (0 disables it).
  const RULES = [
    {a:{tag:"manaboost"}, b:{speed:["Slow","Very Slow"], anyTag:["aoe","sniper","hit3","bigheal","defdown","eldefdown"]}, w:14, k:["manaboost"], why:"mana support speeds up the slow heavy hitter"},
    {a:{tag:"defdown"}, b:{anyTag:NUKE}, w:8, timing:true, k:["defdown"], why:"defense down raises the damage of the follow-up hit"},
    {a:{tag:"amp"}, b:{anyTag:NUKE}, w:8, timing:true, k:["amp"], why:"increased damage taken multiplies the follow-up hit"},
    {a:{tag:"atkbuff"}, b:{anyTag:NUKE.concat(["dot","counter"])}, w:6, timing:true, k:["atkbuff"], why:"the attack buff boosts the follow-up special"},
    {a:{tag:"taunt"}, b:{speed:["Slow","Very Slow"], anyTag:["aoe","sniper","bigheal","defdown"]}, w:8, k:["taunt"], why:"taunt buys the slow payload time to charge"},
    {a:{tag:"manactl"}, b:{tag:"healblock"}, w:10, k:["manactl","healblock"], why:"mana control stalls their healers while healing block stops the rest"},
    {a:{tag:"healblock"}, b:{anyTag:["dot","aoe"]}, w:8, k:["healblock"], why:"healing block makes spread and damage-over-time stick"},
    {a:{tag:"cc"}, b:{anyTag:["dot","fiends"]}, w:6, k:["cc"], why:"disabled enemies cannot fire the special that would clear the pressure"},
    {a:{tag:"counter"}, b:{tag:"healer"}, w:8, k:["counter","healer"], why:"healing keeps the counterattacker alive to punish hits"},
    {a:{tag:"healer"}, b:{tag:"overheal"}, w:5, k:["healer","overheal"], why:"healing restores health while boosted health adds a buffer above max"},
    {a:{tag:"cleanse"}, b:{anyTag:["healer","overheal"]}, w:3, k:["cleanse"], why:"cleanse removes the healing block or ailments that would waste the sustain"},
    {a:{tag:"antirevive"}, b:{anyTag:["sniper","aoe"]}, w:5, k:["antirevive"], why:"kills stay down with no revive comeback"},
    {a:{name:"Edwin"}, b:{tag:"dot"}, w:12, k:["dot"], why:"Edwin blocks cleansing, so the damage-over-time cannot be removed"},
    {a:{name:"Lyria"}, b:{name:"Merith"}, w:12, k:["antirevive"], why:"two revival reductions stack against Nine Lives and revivers"},
    {a:{tag:"insanity"}, b:{tag:"insanity"}, w:8, k:["insanity"], why:"two Insanity sources build it faster than it can be removed"},
    {a:{tag:"growth"}, b:{name:"Devyani"}, w:10, k:["growth"], why:"Growth feeds Devyani's Growth Boon"},
    {a:{tag:"growth"}, b:{anyTag:["sniper","hit3"]}, w:5, k:["growth"], why:"persistent Growth attack amplifies every hit"},
    // Conflicts and redundancy. Same-kind status effects generally replace each other.
    {a:{tag:"taunt"}, b:{tag:"taunt"}, w:-18, k:["taunt"], why:"two taunts compete; only one can be active"},
    // Weights roughly cancel the role credit the second hero earns for the same effect.
    {a:{tag:"atkbuff"}, b:{tag:"atkbuff"}, w:-18, k:["atkbuff"], why:"two attack buffs of the same kind replace rather than add"},
    {a:{tag:"defdown"}, b:{tag:"defdown"}, w:-11, k:["defdown"], why:"two ordinary defense-down effects replace rather than add"},
    {a:{tag:"manaboost"}, b:{tag:"manaboost"}, w:-6, k:["manaboost"], why:"overlapping mana support; one is usually enough"},
    {a:{tag:"bigheal"}, b:{tag:"bigheal"}, w:-10, k:["bigheal"], why:"two big healers trade damage for redundant sustain"}
  ];
  const ruleName = h => baseName(h.name);
  function matchH(h, m){
    if(!m) return false;
    if(m.name && ruleName(h) !== m.name) return false;
    if(m.tag && !T(h, m.tag)) return false;
    if(m.anyTag && !m.anyTag.some(x => T(h, x))) return false;
    if(m.speed && !m.speed.includes(h.speed)) return false;
    return true;
  }
  // Rule matching depends only on the hero, so cache it per hero object.
  const MATCH = new WeakMap();
  function matches(h){
    let m = MATCH.get(h);
    if(!m){ m = RULES.map(r => [matchH(h, r.a), matchH(h, r.b)]); MATCH.set(h, m); }
    return m;
  }
  const ruleMod = (r, ctx) => (r.k || []).reduce((a, t) => Math.min(a, ctx && ctx.mod ? ctx.mod(t) : 1), 1.6);

  /** Skill-combination analysis of a team (order-independent). */
  function synergy(team, ctx){
    const items = [];
    const ms = team.map(matches);
    RULES.forEach((r, ri) => {
      const mod = r.w > 0 ? Math.min(1.6, ruleMod(r, ctx)) : 1;
      if(r.w > 0 && mod <= 0) return;
      let best = null;
      for(let i = 0; i < team.length; i++) for(let j = 0; j < team.length; j++){
        const x = team[i], y = team[j];
        if(i === j || !ms[i][ri][0] || !ms[j][ri][1]) continue;
        let w = r.w * mod, late = false;
        if(r.timing && speedOf(x, ctx) < speedOf(y, ctx)){ w *= 0.5; late = true; }
        if(!best || w > best.w) best = {w, x, y, late};
      }
      if(best){
        const why = r.why + (best.late ? " (but " + best.x.name + " charges slower, so hold " + best.y.name + " until the setup lands)" : "");
        items.push({w:best.w, a:best.x.name, b:best.y.name, why, conflict:r.w < 0});
      }
    });
    // Elemental defense down: stacks with ordinary defense down and boosts that colour's tiles.
    for(const x of team){
      if(!Array.isArray(x.eldef)) continue;
      for(const col of x.eldef){
        const hitters = team.filter(y => y !== x && y.el === col);
        const nukes = hitters.filter(y => NUKE.some(t => T(y, t)));
        if(!hitters.length) continue;
        const w = (nukes.length ? 8 : 4) + (hitters.length >= 2 ? 4 : 0) + (team.some(y => T(y, "defdown")) ? 3 : 0);
        items.push({w:w * Math.min(1.6, ctx && ctx.mod ? ctx.mod("defdown") : 1), a:x.name, b:(nukes[0] || hitters[0]).name,
          why:"-defense against " + col + " boosts " + col + " specials and tiles" + (team.some(y => T(y, "defdown")) ? ", and it stacks with ordinary defense down" : ""), conflict:false});
      }
    }
    return {score:items.reduce((a, i) => a + i.w, 0), items:items.sort((a, b) => Math.abs(b.w) - Math.abs(a.w))};
  }

  /** What the enemy lineup demands. Each need lists answers in preference order. */
  function opponentNeeds(enemy){
    const any = t => enemy.some(h => T(h, t)), who = t => enemy.filter(h => T(h, t)).map(h => h.name);
    const needs = [];
    const add = (id, w, answers, why, src) => needs.push({id, w, answers, why, src});
    if(any("healer") || any("bigheal")) add("heal", 20, [["healblock",1],["manactl",.5],["fiends",.5]], "they heal", who("healer").concat(who("bigheal")));
    if(any("ninelives") || any("revive")) add("revive", 18, [["antirevive",1],["bypass",.3]], "they revive", who("ninelives").concat(who("revive")));
    if(any("counter")) add("counter", 16, [["bypass",1],["dispel",.7],["dot",.4]], "counterattack punishes specials", who("counter"));
    if(any("taunt")) add("taunt", 13, [["dispel",1],["aoe",.5],["dot",.4]], "taunt redirects your specials", who("taunt"));
    if(any("atkbuff") || any("teamimmune") || any("wall") || any("overheal")) add("buffs", 14, [["dispel",1],["bypass",.6]], "they rely on buffs", who("atkbuff").concat(who("wall"), who("teamimmune"), who("overheal")));
    if(any("minions")) add("minions", 14, [["minionhate",1],["aoe",.5]], "minions absorb damage", who("minions"));
    if(any("fiends")) add("fiends", 12, [["fiendhate",1],["healer",.7],["cleanse",.3]], "their fiends eat your healing", who("fiends"));
    if(any("dot") || any("healblock") || any("defdown") || any("eldefdown") || any("amp")) add("ailments", 12, [["cleanse",1],["teamimmune",.8]], "their ailments stack up", who("dot").concat(who("healblock"), who("defdown"), who("eldefdown"), who("amp")));
    if(any("cc") || any("insanity")) add("cc", 10, [["teamimmune",1],["cleanse",.8]], "crowd control or Insanity", who("cc").concat(who("insanity")));
    if(any("manactl")) add("mana", 10, [["manaboost",1],["teamimmune",.6]], "they cut your mana", who("manactl"));
    if(any("dodge")) add("dodge", 6, [["aoe",.6],["dot",.6]], "dodge wastes single hits", who("dodge"));
    for(const n of needs) n.src = [...new Set(n.src)];
    return needs;
  }

  /** Score how well a team answers needs, plus enemy effects that devalue its tools. */
  function matchup(team, enemy, ctx){
    if(!enemy || !enemy.length) return {score:0, answered:[], missing:[], penalties:[]};
    const needs = opponentNeeds(enemy), answered = [], missing = [], penalties = [];
    let score = 0;
    for(const n of needs){
      let best = null;
      for(const [tag, q] of n.answers){ const h = team.find(x => T(x, tag)); if(h && (!best || q > best.q)) best = {q, h, tag}; }
      const w = n.w * Math.min(1.6, ctx && ctx.mod ? ctx.mod(best ? best.tag : n.answers[0][0]) : 1);
      if(best){ score += w * best.q; answered.push({need:n, by:best.h.name, tag:best.tag, q:best.q}); }
      else { score -= w * 0.4; missing.push(n); }
    }
    const pen = (cond, w, text) => { if(cond){ score -= w; penalties.push(text); } };
    const anti = enemy.find(h => T(h, "antioverheal"));
    pen(anti && team.some(h => T(h, "overheal")), 6, (anti ? anti.name : "") + " prevents boosted health, so your boosted-health effects are wasted");
    const disp = enemy.find(h => T(h, "dispel"));
    pen(disp && team.filter(h => T(h, "atkbuff") || T(h, "wall")).length >= 2, 4, (disp ? disp.name : "") + " dispels, which strips the buffs this team relies on");
    const hb = enemy.find(h => T(h, "healblock"));
    pen(hb && team.some(h => T(h, "healer")) && !team.some(h => T(h, "cleanse")), 4, (hb ? hb.name : "") + " blocks healing and nothing here cleanses it");
    return {score, answered, missing, penalties};
  }

  /** Main weaknesses, most important first. */
  function weaknesses(team, ctx, mu, opts){
    const out = [];
    const bloody = ctx && ctx.key === "bloody";
    if(mu && mu.missing.length){ const m = mu.missing.slice().sort((a, b) => b.w - a.w)[0]; out.push("No answer to " + m.src.slice(0, 2).join(" and ") + ": " + m.why + "."); }
    if(mu && mu.penalties.length) out.push(mu.penalties[0] + ".");
    const sustain = team.some(h => T(h, "healer") || T(h, "overheal") || T(h, "wall") || T(h, "taunt") || T(h, "teamimmune"));
    if(!bloody && !sustain) out.push("No healing, boosted health, damage reduction or taunt; it must win fast.");
    const payload = team.filter(h => NUKE.some(t => T(h, t)) || T(h, "bigheal"));
    if(payload.length && payload.every(h => speedOf(h, ctx) <= 2) && !team.some(h => T(h, "manaboost"))) out.push("Its main specials are Slow or Very Slow and nothing speeds up mana.");
    const conflicts = (opts && opts.syn ? opts.syn.items : []).filter(i => i.conflict);
    if(conflicts.length) out.push(conflicts[0].a + " and " + conflicts[0].b + ": " + conflicts[0].why + ".");
    if(opts && opts.defense){
      let adj = 0; for(let i = 0; i < team.length - 1; i++) if(team[i].el === team[i + 1].el) adj++;
      if(adj) out.push(adj + " same-colour neighbour" + (adj > 1 ? "s" : "") + " on defense lets one colour of tiles hit two heroes.");
    }
    if(!payload.length && !team.some(h => T(h, "dot") || T(h, "fiends") || T(h, "minions"))) out.push("Little special-skill damage; it relies on tiles.");
    // General gaps, used when no enemy lineup is known.
    if(!(mu && mu.answered.length + mu.missing.length)){
      const has = t => team.some(h => T(h, t));
      if(!has("cleanse") && !has("teamimmune") && !bloody) out.push("Nothing cleanses or grants immunity, so enemy ailments (damage over time, defense down, healing block) stay on.");
      if(!has("dispel") && !has("bypass")) out.push("Nothing dispels or bypasses buffs, so taunt, counterattack and damage-reduction defenses slow it down.");
      if(!has("healblock") && !has("antirevive") && !bloody) out.push("No healing block or revive denial against sustain-heavy defenses.");
    }
    const weakCopies = team.filter(h => h.__str && (h.__str.status === "unknown" || h.__str.partial));
    if(weakCopies.length >= 2) out.push(weakCopies.length + " heroes are below max level or of unknown progression, so the team may be weaker than its skills suggest.");
    return out;
  }

  /** Development / data assumptions affecting a team. */
  function assumptions(team, troopPlan){
    const out = [], count = s => team.filter(h => h.__str && h.__str.status === s);
    const unk = count("unknown"), ass = count("assumed"), part = team.filter(h => h.__str && h.__str.partial && h.__str.status !== "exact");
    const exact = count("exact");
    if(unk.length) out.push(unk.map(h => h.name).join(", ") + ": progression unknown, ranked at level-1 stats; enter card Power to fix.");
    if(part.length) out.push(part.map(h => h.name + " (" + h.__str.label + ")").join(", ") + ": not max level, strength is a rough estimate.");
    if(ass.length) out.push(ass.map(h => h.name).join(", ") + ": manual entry assumed fully levelled.");
    const cos = team.filter(h => h.__f && h.__f.isCostume && h.__f.strength.progress !== "max");
    if(cos.length) out.push(cos.map(h => h.name + " (" + h.__f.strength.label + ")").join(", ") + ": costume not fully levelled.");
    const pw = team.length - exact.length;
    if(pw > 0 && team.some(h => h.__str)) out.push("Power for " + (exact.length ? pw + " hero" + (pw > 1 ? "es" : "") : "all heroes") + " is estimated (emblem path and power formula are approximations).");
    if(troopPlan){
      const unknownTroops = [...troopPlan.values()].filter(p => p.troop && p.troop.mana === null);
      if(unknownTroops.length) out.push("Mana bonus unknown for " + [...new Set(unknownTroops.map(p => troopLabel(p.troop)))].join(", ") + ".");
    }
    return out;
  }

  function explain(team, a){
    const pos = a.syn.items.filter(i => !i.conflict).slice(0, 2).map(i => i.a + " + " + i.b + ": " + i.why);
    const ans = a.mu ? a.mu.answered.filter(x => x.q >= 0.7).sort((x, y) => y.need.w - x.need.w).slice(0, 2).map(x => x.by + " answers " + x.need.src.slice(0, 2).join("/") + " (" + x.need.why + ")") : [];
    const why = pos.concat(ans);
    return {
      why:why.length ? why.join("; ") + "." : "No specific skill combination detected; the ranking comes from individual roles and estimated strength.",
      weakness:a.weak[0] || "No major gap detected by the rules; watch the board and the enemy's fastest special.",
      assumptions:a.assume
    };
  }

  /** Full evaluation used by the team search. roleScore(h, role) comes from the app. */
  function evaluate(team, opts){
    const ctx = opts.ctx, roles = opts.roles || team.map(() => "attack");
    let score = team.reduce((s, h, i) => s + (opts.roleScore ? opts.roleScore(h, roles[i]) : 0), 0);
    const syn = synergy(team, ctx);
    score += syn.score;
    const mu = matchup(team, opts.enemy, ctx);
    score += mu.score;
    if(!(ctx && ctx.key === "bloody")){ if(team.some(h => T(h, "healer"))) score += 8; else if(!team.some(h => T(h, "overheal") || T(h, "wall"))) score -= 12; }
    let troopPlan = null;
    if(opts.troops && opts.troops.length){
      troopPlan = assignTroops(team, opts.troops);
      for(const p of troopPlan.values()) if(p.gain > 0) score += 2 * p.gain;
    }
    if(opts.extra) score += opts.extra(team);
    const weak = weaknesses(team, ctx, mu, {syn, defense:opts.defense});
    return {score, syn, mu, weak, troopPlan, assume:assumptions(team, troopPlan)};
  }

  /* ------------------------------------------------------------------ */
  /* 7. Team search and war allocation                                  */
  /* ------------------------------------------------------------------ */
  function combos(arr, k, start, cur, out){
    if(cur.length === k){ out.push(cur.slice()); return out; }
    for(let i = start; i <= arr.length - (k - cur.length); i++){ cur.push(arr[i]); combos(arr, k, i + 1, cur, out); cur.pop(); }
    return out;
  }
  // A team may hold separate copies of the same hero (seen in a real saved team: two copies of one hero),
  // but never the same copy twice, so two forms of one copy cannot be fielded together.
  const keyOf = h => h.__unit || h.name;
  const uniqueUnits = team => new Set(team.map(keyOf)).size === team.length;
  // Keep the best few forms per base so costume alternatives can compete.
  function shortlist(list, score, n){
    const seen = new Map(), out = [];
    for(const h of list.slice().sort((a, b) => score(b) - score(a))){
      const b = h.base || baseName(h.name), c = seen.get(b) || 0;
      if(c >= 3) continue; seen.set(b, c + 1); out.push(h);
      if(out.length >= n) break;
    }
    return out;
  }

  /** Best attack team. opts: {pool, color (stack colour or null), stack (3 by default; 5 for mono),
   *  enemy, ctx, troops, usedUnits:Set, roleScore(h, role)} */
  function searchTeam(opts){
    const used = opts.usedUnits || new Set();
    const avail = opts.pool.filter(h => !used.has(h.__unit || h.name));
    const stackN = opts.stack == null ? 3 : opts.stack;
    const rs0 = opts.roleScore || (() => 0), memo = new Map();
    const rs = (h, role) => { const k = role === "support" ? 1 : 0; let m = memo.get(h); if(!m){ m = [null, null]; memo.set(h, m); } if(m[k] === null) m[k] = rs0(h, role); return m[k]; };
    const stackPool = opts.color ? avail.filter(h => h.el === opts.color) : avail;
    const sCand = shortlist(stackPool, h => rs(h, "attack"), stackN >= 5 ? 9 : 8);
    // With too few copies of the colour, use a smaller stack rather than none.
    const k = Math.min(stackN, new Set(sCand.map(keyOf)).size);
    if(k < 1) return null;
    let best = null;
    const stacks = combos(sCand, k, 0, [], []);
    for(const st of stacks){
      if(!uniqueUnits(st)) continue;
      const needSup = 5 - st.length;
      const stUnits = new Set(st.map(keyOf));
      const reserved = opts.reserved || new Set();
      const supPool = avail.filter(h => !stUnits.has(keyOf(h)) && !reserved.has(keyOf(h)));
      const sup = needSup ? shortlist(supPool, h => rs(h, "support"), 10) : [];
      const supCombos = needSup ? combos(sup, Math.min(needSup, sup.length), 0, [], []) : [[]];
      for(const sp of supCombos){
        const team = st.concat(sp);
        if(!uniqueUnits(team)) continue;
        const roles = st.map(() => "attack").concat(sp.map(() => "support"));
        const ev = evaluate(team, {ctx:opts.ctx, enemy:opts.enemy, troops:opts.troops, roleScore:rs, roles});
        if(!best || ev.score > best.ev.score) best = {team, stack:st, sup:sp, ev};
      }
    }
    if(!best) return null;
    best.explain = explain(best.team, best.ev);
    return best;
  }

  /** Six war teams; an owned instance (unit) is never used twice. Copies are independent units. */
  function buildWar(opts){
    const used = new Set(), teams = [];
    const order = opts.order || ["Holy","Dark","Fire","Ice","Nature"];
    const bring = tank => Object.keys(STRONG).find(a => STRONG[a] === tank);
    const rs = opts.roleScore || (() => 0);
    // Keep the best stack candidates of later teams' colours out of earlier teams' support slots.
    const reserveFor = colors => {
      const res = new Set();
      for(const c of colors){
        const cand = shortlist(opts.pool.filter(h => h.el === c && !used.has(h.__unit || h.name)), h => rs(h, "attack"), 6);
        const seen = new Set();
        for(const h of cand){ const k = keyOf(h); if(seen.has(k)) continue; seen.add(k); res.add(k); if(seen.size >= 3) break; }
      }
      return res;
    };
    order.forEach((tank, i) => {
      const color = bring(tank);
      const reserved = reserveFor(order.slice(i + 1).map(bring).filter(c => c !== color));
      let r = searchTeam(Object.assign({}, opts, {color, usedUnits:used, reserved}));
      if(!r || r.team.length < 5) r = searchTeam(Object.assign({}, opts, {color, usedUnits:used})) || r;
      if(r) r.team.forEach(h => used.add(h.__unit || h.name));
      teams.push({label:"vs " + tank + " tank", tank, color, result:r});
    });
    const flex = searchTeam(Object.assign({}, opts, {color:null, usedUnits:used}));
    if(flex) flex.team.forEach(h => used.add(h.__unit || h.name));
    teams.push({label:"Cleanup / flex", tank:null, color:null, result:flex});
    return {teams, used};
  }

  /** Check a set of teams for instance reuse; returns the duplicated unit keys. */
  function duplicateUnits(teams){
    const seen = new Set(), dup = new Set();
    for(const t of teams) for(const h of t){ const k = h.__unit || h.name; if(seen.has(k)) dup.add(k); seen.add(k); }
    return [...dup];
  }

  /* ------------------------------------------------------------------ */
  /* 8. Upgrade suggestions                                             */
  /* ------------------------------------------------------------------ */
  function suggestUpgrades(team, opts){
    const out = [];
    for(const h of team){
      const u = h.__u, f = h.__f; if(!u || !f) continue;
      const s = f.strength, r = u.rarity, tiers = TIERS[r], finalMax = tiers[tiers.length - 1];
      const at = (factor, nodes, costume) => statsFor(f.hero, {factor, nodes:nodes == null ? u.nodes : nodes, path:u.path, costume:costume === undefined ? u.costumeBonus : costume, statHero:u.forms[0].hero}).power;
      if(s.status === "unknown"){ out.push({hero:h.name, kind:"data", gain:0, verified:false, text:"Enter " + h.name + "'s card Power (or re-import after opening the hero) — its progression is not in the save."}); continue; }
      if(u.source === "manual") continue;
      const prog = f.prog, isBase = f === u.forms[0];
      const lb = isBase && u.raw && isInt(u.raw.limitBreak) ? u.raw.limitBreak : 0;
      if(prog.state === "partial"){
        const target = lb > 0 && LB_RATIO[r] ? LB_RATIO[r][lb] : 1;
        const g = at(target) - s.calcPower;
        const goal = lb > 0 ? "the end of its LB" + lb + " tier" : tiers.length + "^" + finalMax;
        if(g > 0) out.push({hero:h.name, kind:"level", gain:g, verified:false, text:"Level " + h.name + " from " + s.label + " to " + goal + ": about +" + g + " power (estimate; growth between known endpoints is interpolated)."});
      } else if(prog.state === "max" && isBase && LB_RATIO[r] && lb < 2){
        const g = at(LB_RATIO[r][lb + 1]) - s.calcPower;
        out.push({hero:h.name, kind:"lb", gain:g, verified:true, text:"Limit Break " + h.name + " to LB" + (lb + 1) + " and level it fully: base stats ×" + (LB_RATIO[r][lb + 1] / LB_RATIO[r][lb]).toFixed(3) + " (data-derived ratio); about +" + g + " power (the power formula itself is an estimate)."});
      }
      if(u.nodesKnown && u.nodes < 20){
        const g = at(prog.factor, 20) - s.calcPower;
        out.push({hero:h.name, kind:"talent", gain:g, verified:false, text:"Unlock " + (20 - u.nodes) + " more talent nodes on " + h.name + ": about +" + g + " power (estimate; depends on path)."});
      }
      if(!u.costumeBonus && Array.isArray(u.raw && u.raw.costumes) && u.raw.costumes.length){
        const g = at(prog.factor, null, "low") - s.calcPower;
        out.push({hero:h.name, kind:"costume", gain:g, verified:false, text:"Fully level one of " + h.name + "'s costumes for the costume bonus (+3–5% attack/defense, +6–10% health, +1–5% mana): about +" + g + " power (estimate)."});
      }
      // Troop levelling that reaches a better breakpoint. Verified: mana table, Magic/Styx/Legendary at 30,
      // the tile formula, and the troop ID naming (matches a real v389 save).
      if(BASE_TILES_X2[h.speed]){
        const tp = opts && opts.troopPlan && opts.troopPlan.get(h);
        const cur = tp && tp.troop && tp.troop.mana !== null ? tilesNeeded(h.speed, tp.troop.mana) : tilesNeeded(h.speed, 0);
        let best = null;
        for(const t of (opts && opts.troops) || []){
          if(t.color !== h.el || !isInt(t.level)) continue;
          const steps = t.kind === "mana" ? MANA4_STEPS.slice().reverse().filter(([l]) => l > t.level)
            : (["magic","styx","legendary"].includes(t.kind) && t.level < 30) ? [[30, troopMana(t.kind, 30)]] : [];
          for(const [lvl, v] of steps){
            const tl = tilesNeeded(h.speed, v);
            if(tl < cur){ if(!best || tl < best.tl || (tl === best.tl && lvl - t.level < best.lvl - best.t.level)) best = {t, lvl, v, tl}; break; }
          }
        }
        if(best){
          const other = opts && opts.troopPlan ? [...opts.troopPlan.entries()].find(([x, p]) => x !== h && p.troop === best.t) : null;
          out.push({hero:h.name, kind:"troop", troopId:best.t.ownedId, gain:(cur - best.tl) * 40, verified:true,
            text:"Level your " + troopLabel(best.t) + " to " + best.lvl + " (+" + best.v + "% mana): " + h.name + " charges in " + best.tl + " tiles instead of " + cur + " (" + h.speed + ", offense, tiles that hit" + (other ? "; that troop is on " + other[0].name + " in this plan" : "") + ")."});
        }
      }
    }
    // One suggestion per troop: keep its best use in this team.
    const seenTroop = new Set();
    return out.sort((a, b) => (b.verified - a.verified) || (b.gain - a.gain))
      .filter(u => !u.troopId || (!seenTroop.has(u.troopId) && seenTroop.add(u.troopId)))
      .slice(0, (opts && opts.limit) || 4);
  }

  /* ------------------------------------------------------------------ */
  /* 9. Saved game teams                                                */
  /* ------------------------------------------------------------------ */
  // Friendly names for the game's team keys. Unrecognised keys are shown as stored.
  function teamLabel(key){
    let m;
    if((m = /^main_(\d+)$/.exec(key))) return {label:"Team " + m[1], group:"main"};
    const fixed = {pvp_league_attack:"Raid attack", pvp_league_defense:"Raid defense", mercenary_war_defense:"Mercenary war defense", hexmap_attack:"Hex map attack", guest_ip:"Guest heroes"};
    if(fixed[key]) return {label:fixed[key], group:"main"};
    if((m = /^(legendary|epic|rare)(?:\|(no_\w+|all_elements))?(?:\|(attack|defense))?$/.exec(key))){
      const star = {legendary:"5★", epic:"4★", rare:"3★"}[m[1]];
      const col = m[2] ? (m[2] === "all_elements" ? "all colours" : "no " + (TROOP_COLORS[m[2].slice(3)] || m[2].slice(3))) : "";
      return {label:"Tournament " + star + (col ? ", " + col : "") + (m[3] ? ", " + m[3] : ""), group:"tournament"};
    }
    if(key.split("_").every(w => CLASSES.includes(w))) return {label:"Class team: " + key.split("_").map(w => w[0].toUpperCase() + w.slice(1)).join(" + "), group:"other"};
    return {label:key.replace(/[_|]+/g, " ").trim(), group:"other"};
  }

  /** Saved game teams resolved to owned copies. aliases maps definition IDs to catalog names,
   *  used for the member's worn costume (activeHeroDefinitionId, seen in a v389 save). */
  function gameTeams(snapshot, units, troops, aliases){
    const teams = snapshot && snapshot.teams, out = [];
    if(!teams || typeof teams !== "object") return out;
    const byInst = new Map(units.filter(u => u.instanceId).map(u => [u.instanceId, u]));
    const byTroop = new Map((troops || []).map(t => [t.ownedId, t]));
    for(const [key, t] of Object.entries(teams)){
      const tm = t && Array.isArray(t.tm) ? t.tm : null; if(!tm) continue;
      const members = tm.map((m, i) => {
        const hid = m && m.hid != null ? String(m.hid) : null;
        if(!hid || hid === "empty") return {slot:i, empty:true};
        const u = byInst.get(hid), tid = m.tid != null ? String(m.tid) : null;
        let form = null, formNote = null;
        const worn = m && typeof m.activeHeroDefinitionId === "string" ? m.activeHeroDefinitionId : null;
        if(u && worn){
          const a = aliases && aliases[worn];
          const f = a ? u.forms.find(x => x.hero.name === a.name) : null;
          if(worn === u.definitionId) form = "base";
          else if(f) form = f.id;
          else formNote = "worn costume " + worn + " is not among this copy's matched forms";
        } else if(u) form = "base";
        return {slot:i, instanceId:hid, unit:u || null, form, formNote, worn,
          troop:tid && tid !== "default" ? byTroop.get(tid) || {ownedId:tid, kind:"unknown", color:null, level:null, mana:null, source:"unmatched"} : null};
      });
      if(members.every(m => m.empty) || members.every(m => m.empty || !m.unit)) continue;   // e.g. guest heroes
      out.push(Object.assign({key, members, unresolved:members.filter(m => !m.empty && !m.unit).length}, teamLabel(key)));
    }
    const order = {main:0, tournament:1, other:2};
    return out.sort((a, b) => order[a.group] - order[b.group] || a.key.localeCompare(b.key, undefined, {numeric:true}));
  }

  const api = {TIERS, L1_RATIO, LB_RATIO, BASE_TILES_X2, MANA4_STEPS, MANA4_IDS, SPEED, COSTUME_BONUS, RULES,
    retag, progression, statsFor, heroStats, buildUnits, poolFrom, parseTroops, recognizeTroop, troopMana, tilesNeeded,
    troopsFrom, troopLabel, assignTroops, synergy, opponentNeeds, matchup, weaknesses, assumptions, explain, evaluate,
    searchTeam, buildWar, duplicateUnits, suggestUpgrades, gameTeams, teamLabel, baseName, validPower, costumeMaxed};
  if(typeof module === "object" && module.exports) module.exports = api; else root.EPEngine = api;
})(typeof globalThis !== "undefined" ? globalThis : this);
