import json, re, unicodedata

def has(rx, s): return re.search(rx, s, re.I) is not None
def rules(sp, pas):
    t, allt = [], sp + " " + pas
    if has(r"(gets?|gains?|receives?)[^.]{0,30}\btaunt\b|taunt that prevents|gives? (its owner|the caster) taunt", sp): t.append("taunt")  # blocking enemy Taunt doesn't count
    if has(r"recovers \d+% health for (all allies|the caster and nearby)", sp) or has(r"boosts? (the )?health of (all allies|caster and nearby)", sp) or has(r"regenerate \d+ (boosted )?(hp|health) over", sp): t.append("healer")
    if has(r"recovers [4-9]\d% health for all allies", sp): t.append("bigheal")
    if has(r"chance to be revived|revived with \d+%|revives? (all |the |a |each |defeated)|is revived|resurrect", sp): t.append("revive")  # anti-revive text doesn't count
    if has(r"cleanse", re.sub(r"Each attempt to dispel, cleanse or reallocate[^.]*\.", "", sp, flags=re.I)): t.append("cleanse")  # Stubborn explainer doesn't count
    if has(r"dispels? (all )?buffs|steals? .{0,30}buff|harvests? buffs|ransack|transforms? (all )?(the )?buffs", sp): t.append("dispel")
    if has(r"mana generation of all enemies|stops mana|[-−]\d+% mana gen|lose \d+% mana|steals? \d+% (of generated |)mana|reduces? .{0,20}mana|mana. (is |)(stolen|reduced)|silenc", sp) or has(r"hinder mana", pas): t.append("manactl")
    if has(r"resist healing|[-−]\d+% (for all |)healing|healing received is reduced|absorbs? healing|steals? \d+% of (any |all |)healing|can.t (get |be |)healed", sp): t.append("healblock")
    if has(r"deals \d+% damage to all enemies", sp): t.append("aoe")
    m = re.search(r"deals (\d+)% damage to the target(?! and)", sp, re.I)
    if m and int(m.group(1)) >= 400: t.append("sniper")
    if has(r"target and (nearby|minor)", sp) or has(r"and (minor damage to |)nearby enemies", sp): t.append("hit3")
    if has(r"summons? [^.]{0,60}minion", allt): t.append("minions")
    if has(r"fiend", allt): t.append("fiends")
    if has(r"damage over \d+ turns|burn damage|poison damage|bleed damage|frost damage|water damage|toxin|curse damage", sp): t.append("dot")
    if has(r"(enemies|target)[^.]{0,80}[-−]\d+% defense|defense (of all enemies|reduction)|[-−]\d+ defense", sp): t.append("defdown")
    if has(r"all(ies| allies)[^.]{0,60}\+\d+% (normal |)attack|\+\d+% attack (power |)for (the next|all)", sp): t.append("atkbuff")
    if has(r"critical chance", sp): t.append("crit")
    if has(r"nine lives", pas): t.append("ninelives")
    if has(r"counterattack(s|ing)?[^.]{0,50}\bwith \d+%", sp): t.append("counter")  # "bypasses counterattacks" doesn't count
    if has(r"all allies (are |get |become |)(immune|resist)", sp): t.append("teamimmune")
    if has(r"insanity|insane", allt): t.append("insanity")
    if has(r"damage all enemies receive is increased|receive \+\d+% increased damage|increased damage taken", sp): t.append("amp")
    if has(r"at the (start|end) of each turn|every turn|at all times|applies to all enemies", pas): t.append("engine")
    if has(r"stoneskin|reduces? all received damage by|drops? (all |the |)(direct |)damage", sp): t.append("wall")
    if has(r"paralyz|deep sleep|mesmeriz|falls? asleep|silenced|can.t attack", sp): t.append("cc")
    if has(r"bypass(es)? defensive buffs|attack bypasses", allt): t.append("bypass")
    if has(r"boosts? (the )?health|boosted health|can exceed max", sp): t.append("overheal")
    if has(r"prevents? reviv|can.t reviv|revival (chance|health) reduction", allt): t.append("antirevive")
    if has(r"dodge", allt): t.append("dodge")
    if has(r"destroys? (all )?(minions|fiends)|damages? (all )?mega (minions|fiends)|extra damage to minions|\+\d+% damage to (minions|mega)", allt): t.append("minionhate")
    if has(r"all(ies| allies)[^.]{0,50}(gain|receive|get)s? [^.]{0,15}% mana|increases? the mana of", sp): t.append("manaboost")
    if has(r"immune to insanity|insanity immunity|resist insanity", allt): t.append("insimmune")
    if has(r"titan", allt): t.append("titanspec")
    if re.search(r"Growth(:| Boon)", sp): t.append("growth")      # persists through Equalizer
    if re.search(r"Wither:", sp): t.append("wither")               # persists through Equalizer
    return sorted(set(t))

def key(n):
    n = re.sub(r" \(2\)$", "", n)
    n = unicodedata.normalize("NFKD", n).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", n.lower())

catalog = json.load(open("catalog_parsed.json"))   # from wiki
try:
    curated = json.load(open("heroes.json"))           # worksheet list (incl dups)
except Exception:
    # no worksheet file: derive from previous build - keep copy entries ("X (2)")
    # and heroes the wiki doesn't know (toon variants etc.); everything else re-derives from wiki
    try: _prev_list = json.load(open("heroes_full.json"))
    except Exception: _prev_list = []
    _cat_keys = set()
    import re as _re
    for _h in catalog: _cat_keys.add(key(_h["name"]))
    curated = [h for h in _prev_list
               if _re.search(r" \(2\)$", h["name"]) or key(h["name"]) not in _cat_keys]
    curated = [dict(h) for h in curated if not h.get("costume")]
    print("no heroes.json - derived", len(curated), "curated entries from previous build")
try: cimgs = json.load(open("catalog_imgs.json"))
except Exception: cimgs = {}
try: prev = {h["name"]: h for h in json.load(open("heroes_full.json"))}
except Exception: prev = {}

# manual alias fixes (worksheet spelling -> wiki spelling differences beyond accents)
ALIAS = {key("Dunner Hart"): key("Dunnar Hart")}

catalog_by_key = {}
for h in catalog:
    catalog_by_key.setdefault(key(h["name"]), h)

curated_keys = set()
refreshed = 0
for h in curated:
    h["r"] = 5
    k = ALIAS.get(key(h["name"]), key(h["name"]))
    curated_keys.add(k)
    # refresh curated entries from the wiki (worksheet data fossilizes errors otherwise);
    # keep curated img/power as fallback when wiki lacks them
    c = catalog_by_key.get(k)
    if c:
        for fld in ["el","speed","fam","cls","skill","pas","atk","dfn","hp","r"]:
            if c.get(fld): h[fld] = c[fld]
        if c.get("power"): h["power"] = c["power"]
        h["tags"] = rules(h.get("skill",""), h.get("pas",""))
        refreshed += 1
print("curated entries refreshed from wiki:", refreshed, "/", len(curated))

merged = list(curated)
added = 0
EXCLUDE_FAMS = {"world wrestling superstars"}  # one-time collab, no longer obtainable
for h in catalog:
    if key(h["name"]) in curated_keys: continue
    if (h.get("fam","") or "").lower() in EXCLUDE_FAMS: continue
    h["tags"] = rules(h.get("skill",""), h.get("pas",""))
    if h["name"] in cimgs: h["img"] = cimgs[h["name"]]
    h.pop("imgfile", None)
    merged.append(h)
    added += 1


# ---- append released costume variants as separate heroes ----
try: costumes = json.load(open("costumes_parsed.json"))
except Exception: costumes = []
try: cimgs = json.load(open("costume_imgs.json"))
except Exception: cimgs = {}
existing_names = {h["name"] for h in merged}
cadded = 0
for c in costumes:
    if (c.get("fam","") or "").lower() in EXCLUDE_FAMS: continue
    if c["name"] in existing_names: continue
    if key(c["base"]) in curated_keys and False: pass  # keep costumes even if base is curated
    c["tags"] = rules(c.get("skill",""), c.get("pas",""))
    if c["name"] in cimgs: c["img"] = cimgs[c["name"]]
    c.pop("imgfile", None)
    merged.append(c)
    existing_names.add(c["name"])
    cadded += 1
print("costumes added:", cadded)

# NORMALIZE_POWER: every hero displays base-max power; keep raw stats for the calculator
for h in merged:
    if h.get("basepower"): h["power"] = h["basepower"]
    h.pop("basepower", None)
# backfill portraits from the previous build so a run without image resolution loses nothing
backfilled = 0
for h in merged:
    if not h.get("img") and h["name"] in prev and prev[h["name"]].get("img"):
        h["img"] = prev[h["name"]]["img"]; backfilled += 1
print("portraits backfilled from previous build:", backfilled)
json.dump(merged, open("heroes_full.json","w"), separators=(",",":"))
import os
print("curated:", len(curated), "| catalog added:", added, "| total:", len(merged))
print("size:", os.path.getsize("heroes_full.json")//1024, "KB")
from collections import Counter
print("rarity:", dict(Counter(h.get("r",5) for h in merged)))
print("with portrait:", sum(1 for h in merged if h.get("img")))
