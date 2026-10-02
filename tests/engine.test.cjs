// Engine tests with synthetic fixtures only. Run: node tests/engine.test.cjs
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const E=require('../ep-engine.js');
const {decode,snapshot,prepare}=require('../eva1-import.js');
const aliases=require('../eva1-hero-ids.js');
const {encode,rosterData}=require('./synthetic-save.cjs');
let n=0;const test=(name,fn)=>{fn();n++;};

// Invented catalog heroes (stats chosen for round numbers).
const hero=(name,el,speed,tags,extra)=>Object.assign({name,el,speed,cls:'Fighter',fam:'',r:5,power:1300,atk:1400,dfn:1300,hp:2400,tags,skill:'',pas:''},extra||{});
const CAT=[
  hero('Setter','Ice','Fast',['defdown']), hero('Nuker','Ice','Slow',['sniper']), hero('Healer','Holy','Average',['healer']),
  hero('Taunter','Dark','Average',['taunt']), hero('Taunter2','Dark','Average',['taunt']), hero('Booster','Nature','Fast',['manaboost']),
  hero('Blocker','Fire','Fast',['healblock']), hero('Cleanser','Holy','Fast',['cleanse']),
  hero('Nuker (Toon)','Ice','Fast',['aoe','dispel'],{base:'Nuker',costume:'Toon',atk:'',dfn:'',hp:'',power:0}),
];
const units=(own,extra)=>E.buildUnits(Object.assign({heroes:CAT,own,selected:Object.keys(own),aliases:{}},extra||{}));
const inst=(id,s,extra)=>Object.assign({instanceId:String(id),definitionId:'nuker',level:null,ascension:null,limitBreak:null,unlockedTalentNodes:20,costumes:[]},s,extra||{});

test('max-level stats reproduce the documented power formula and LB ratios',()=>{
  const he={name:'X',r:5,atk:1390,dfn:1363,hp:2393};
  assert.equal(E.heroStats(he,0,0).power,1328);
  assert.equal(E.heroStats(he,1,0).atk,Math.round(1390*1.0777));
  assert.equal(E.heroStats(he,2,0).atk,Math.round(1390*1.2331)); // LB2 is cumulative, not 1.1405 from base
});

test('partial progression is an estimate, never treated as maxed',()=>{
  const p=E.progression(5,{level:60,ascension:3,limitBreak:0});
  assert.equal(p.state,'partial');assert(p.factor>E.L1_RATIO[5]&&p.factor<1);
  const [u]=units({Nuker:{n:1,instances:[inst(1,{level:60,ascension:3,limitBreak:0})]}});
  const s=u.forms[0].strength;
  assert.equal(s.status,'estimate');assert.equal(s.partial,true);
  const max=units({Nuker:{n:1,instances:[inst(1,{level:80,ascension:4,limitBreak:0})]}})[0].forms[0].strength;
  assert(s.power<max.power);assert.equal(max.partial,false);
  assert(s.notes.some(x=>/estimated/.test(x)));
});

test('unknown progression is ranked at the level-1 floor and flagged',()=>{
  const [u]=units({Nuker:{n:1,instances:[inst(7,{})]}});
  const s=u.forms[0].strength;
  assert.equal(s.status,'unknown');assert.equal(s.label,'?');
  const floor=E.statsFor(CAT[1],{factor:E.L1_RATIO[5],nodes:20}).power;assert.equal(s.power,floor);
  for(const bad of [{level:99,ascension:1},{level:5,ascension:9},{level:50,ascension:2,limitBreak:7}])
    assert.equal(E.progression(5,bad).state,'unknown');
  const noNodes=units({Nuker:{n:1,instances:[inst(8,{level:80,ascension:4,limitBreak:0},{unlockedTalentNodes:null})]}})[0];
  assert.equal(noNodes.nodes,0);assert(noNodes.notes.some(x=>/not in the save/.test(x)));
});

test('Limit Break levels: tier endpoints use data ratios, partial tiers interpolate',()=>{
  assert.equal(E.progression(5,{level:85,ascension:4,limitBreak:1}).factor,1.0777);
  assert.equal(E.progression(5,{level:90,ascension:4,limitBreak:2}).state,'max');
  const mid=E.progression(5,{level:87,ascension:4,limitBreak:2});
  assert.equal(mid.state,'partial');assert(mid.factor>1.0777&&mid.factor<1.2331);
  assert.equal(E.progression(5,{level:80,ascension:4,limitBreak:1}).factor,1); // unlocked, not levelled
});

test('card Power overrides only its own copy; legacy single value belongs to copy 1',()=>{
  const us=units({Nuker:{n:3,ps:[null,1500,null]}});
  assert.equal(us[1].forms[0].strength.status,'exact');assert.equal(us[1].forms[0].strength.power,1500);
  assert.notEqual(us[0].forms[0].strength.status,'exact');assert.notEqual(us[2].forms[0].strength.status,'exact');
  const legacy=units({Nuker:{n:2,p:1600}});
  assert.equal(legacy[0].forms[0].strength.power,1600);assert.equal(legacy[1].forms[0].strength.status,'assumed');
  assert.equal(units({Nuker:{n:1,ps:[5000]}})[0].forms[0].strength.status,'assumed'); // out-of-range ignored
});

test('old manual backups keep working and are labelled as assumptions',()=>{
  const us=units({Nuker:{n:2,c:3,lb:1,em:15,path:'attack'}});
  assert.equal(us.length,2);assert.equal(us[0].key,'m:Nuker#1');assert.equal(us[1].display,'Nuker (2)');
  assert.equal(us[0].forms[0].strength.status,'assumed');assert.equal(us[0].nodes,15);assert.equal(us[0].path,'attack');
  assert.equal(us[0].costumeBonus,null); // owned costumes are not assumed developed
  const withCos=units({Nuker:{n:1,copies:[{cosMax:true,lb:2}]}})[0];
  assert.equal(withCos.costumeBonus,'low');assert(withCos.forms[0].strength.power>us[0].forms[0].strength.power);
});

test('costumes are alternate forms of the same copy, from that copy\'s own records',()=>{
  const al={nuker_costume_toon:{name:'Nuker (Toon)',baseDefinitionId:'nuker'}};
  const own={Nuker:{n:2,instances:[
    inst(1,{level:80,ascension:4,limitBreak:0},{costumes:[{costumeId:'toon',level:10,ascension:1,limitBreak:0}]}),
    inst(2,{level:80,ascension:4,limitBreak:0})]}};
  const us=units(own,{aliases:al});
  assert.equal(us[0].forms.length,2);assert.equal(us[1].forms.length,1);
  const toon=us[0].forms[1];assert(toon.isCostume);assert.equal(toon.strength.partial,true);
  assert.equal(us[0].costumeBonus,null); // costume at 1^10 is not developed
  assert(toon.strength.notes.some(x=>/base-hero stats/.test(x)));
  const pool=E.poolFrom(us);
  assert.equal(pool.length,3);assert.equal(new Set(pool.map(h=>h.__unit)).size,2);
  assert.deepEqual(pool.map(h=>h.name),['Nuker','Nuker (Toon)','Nuker (2)']);
  // A maxed costume grants the (single) costume bonus to every form of that copy.
  own.Nuker.instances[0].costumes[0]=Object.assign({},own.Nuker.instances[0].costumes[0],{level:80,ascension:4});
  const maxed=units(own,{aliases:al})[0];assert.equal(maxed.costumeBonus,'low');
  assert(maxed.forms[0].strength.power>us[0].forms[0].strength.power);
  // Pinning a form leaves only that form in the pool.
  own.Nuker.copies=[{form:'costume:Nuker (Toon)'}];
  const pinned=E.poolFrom(units(own,{aliases:al}));
  assert.deepEqual(pinned.filter(h=>h.__unit==='i:1').map(h=>h.__form),['costume:Nuker (Toon)']);
});

test('team search never fields two forms or two copies of one hero together',()=>{
  const al={nuker_costume_toon:{name:'Nuker (Toon)',baseDefinitionId:'nuker'}};
  const own={};for(const h of CAT.filter(h=>!h.base))own[h.name]={n:1};
  own.Nuker={n:2,instances:[inst(1,{level:80,ascension:4,limitBreak:0},{costumes:[{costumeId:'toon',level:80,ascension:4}]}),inst(2,{level:80,ascension:4,limitBreak:0})]};
  const pool=E.poolFrom(units(own,{aliases:al}));
  const r=E.searchTeam({pool,color:'Ice',stack:3,roleScore:h=>h.__str.power/10});
  assert(r);assert.equal(new Set(r.team.map(h=>h.base||h.name)).size,r.team.length);
});

test('war allocation never reuses an instance; copies are independent',()=>{
  const cat=[];const own={};
  for(const el of ['Fire','Ice','Nature','Holy','Dark'])for(let i=0;i<6;i++){const h=hero(el+i,el,'Average',i%2?['healer']:['sniper']);cat.push(h);own[h.name]={n:i===0?3:1};}
  const us=E.buildUnits({heroes:cat,own,selected:Object.keys(own),aliases:{}});
  const pool=E.poolFrom(us);
  const war=E.buildWar({pool,roleScore:h=>h.__str.power/10});
  const teams=war.teams.filter(t=>t.result).map(t=>t.result.team);
  assert.equal(teams.length,6);assert.deepEqual(E.duplicateUnits(teams),[]);
  for(const t of teams)assert.equal(new Set(t.map(h=>h.base||h.name)).size,5);
  const fire0=teams.flat().filter(h=>h.base==='Fire0');assert(fire0.length>=2,'separate copies can fill separate teams');
  assert.equal(new Set(fire0.map(h=>h.__unit)).size,fire0.length);
  assert.deepEqual(E.duplicateUnits([[pool[0]],[pool[0]]]),[pool[0].__unit]);
});

test('repeated imports keep stable instance keys, powers and per-copy choices',()=>{
  const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'../heroes_full.json')));
  const snap=snapshot(decode(encode(rosterData())));
  const first=prepare(snap,cat,aliases);
  const own=first.own;own.Alasie.ps=[null,1234];own.Alasie.copies=[null,{form:'base',path:'attack'}];
  // Same save, copies reversed: choices follow the instance ID, not the position.
  const data=rosterData();data.heroesState.ownedHeroesCollection.heroIdToOwnedData.ice_god_eskimo.a.reverse();
  const again=prepare(snapshot(decode(encode(data))),cat,aliases,own);
  const a=again.own.Alasie;assert.equal(a.n,2);
  const i102=a.instances.findIndex(x=>x.instanceId==='102');
  assert.equal(a.ps[i102],1234);assert.equal(a.copies[i102].path,'attack');
  const sel=Object.keys(again.own);
  const k1=E.buildUnits({heroes:cat,own:first.own,selected:sel,aliases}).map(u=>u.key).sort();
  const k2=E.buildUnits({heroes:cat,own:again.own,selected:sel,aliases}).map(u=>u.key).sort();
  assert.deepEqual(k1,k2);
  assert.equal(E.buildUnits({heroes:cat,own:again.own,selected:['Alasie'],aliases}).find(u=>u.instanceId==='102').forms[0].strength.power,1234);
});

test('imported roster: compact records unknown, costumes per copy, LB copies',()=>{
  const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'../heroes_full.json')));
  const snap=snapshot(decode(encode(rosterData())));
  const own=prepare(snap,cat,aliases).own;
  const us=E.buildUnits({heroes:cat,own,selected:Object.keys(own),aliases});
  assert.equal(us.find(u=>u.name==='Aegir').forms[0].strength.status,'unknown');
  assert.equal(us.find(u=>u.name==='Alice').forms[0].strength.label,'4^90 LB2');
  const gm=us.find(u=>u.name==='Graymane');
  assert.equal(gm.forms.length,3);assert.equal(gm.costumeBonus,'low');
  assert.equal(us.find(u=>u.name==='Gunnar').forms.length,1,'inventory-only costume is owned, not a developed form');
});

test('mana breakpoints match the published 4* mana troop breakpoints',()=>{
  const cases=[['Very Fast',11,6],['Slow',17,11],['Average',23,9],['Fast',29,7],['Very Slow',23,12],['Average',17,10],['Fast',23,8]];
  for(const [sp,l,tiles] of cases)assert.equal(E.tilesNeeded(sp,E.troopMana('mana',l)),tiles,sp+' '+l);
  assert.equal(E.tilesNeeded('Slow',20),10);assert.equal(E.tilesNeeded('Average',25),8); // exact boundary, no float drift
  assert.equal(E.tilesNeeded('Average',0),10);assert.equal(E.tilesNeeded('Very Fast',0),7);assert.equal(E.tilesNeeded('Very Slow',0),14);
  assert.equal(E.tilesNeeded('Charge',15),null);assert.equal(E.tilesNeeded('Average',null),null);
  assert.equal(E.troopMana('mana',4),5);assert.equal(E.troopMana('mana',5),7);assert.equal(E.troopMana('mana',31),null);
  assert.equal(E.troopMana('magic',30),20);assert.equal(E.troopMana('styx',29),null);assert.equal(E.troopMana('other',30),null);
});

test('troops: recognition, unknown IDs, labels, one per hero, colour must match',()=>{
  const snap=snapshot(decode(encode(rosterData())));
  const ts=E.troopsFrom(snap,{});
  assert.equal(ts.length,6);
  assert.deepEqual(ts.find(t=>t.ownedId==='1'),Object.assign({},ts.find(t=>t.ownedId==='1'),{color:'Ice',kind:'mana',mana:11,source:'pattern'}));
  const odd=ts.find(t=>t.defId==='mystery_troop_x');assert.equal(odd.kind,'unknown');assert.equal(odd.mana,null);assert(odd.raw);
  const lab=E.troopsFrom(snap,{mystery_troop_x:{kind:'mana',color:'Holy'}}).find(t=>t.defId==='mystery_troop_x');
  assert.equal(lab.mana,7);assert.equal(lab.color,'Holy');assert.equal(lab.source,'manual');
  const a=hero('A','Ice','Average',[]),b=hero('B','Ice','Fast',[]),c=hero('C','Fire','Average',[]);
  const plan=E.assignTroops([a,b,c],ts);
  const used=[...plan.values()].filter(p=>p.troop).map(p=>p.troop.ownedId);
  assert.equal(new Set(used).size,used.length);
  assert.equal(plan.get(a).troop.level,23);assert.equal(plan.get(a).tiles,9);
  assert.equal(plan.get(c).troop.kind,'magic');assert.equal(plan.get(c).tiles,9);
  assert.equal(E.troopsFrom({troops:{unexpected:true}},{}).length,0);
});

test('synergy: timing, conflicts, elemental defense down, battle rules',()=>{
  const setter=hero('S','Ice','Fast',['defdown']),nuke=hero('N','Ice','Slow',['sniper']),slowSet=hero('Z','Ice','Very Slow',['defdown']);
  const fast=E.synergy([setter,nuke]).items.find(i=>/defense down/.test(i.why));
  const late=E.synergy([slowSet,hero('Q','Ice','Fast',['sniper'])]).items.find(i=>/defense down/.test(i.why));
  assert.equal(late.w,fast.w/2);assert(/charges slower/.test(late.why));
  assert(E.synergy([hero('T1','Dark','Average',['taunt']),hero('T2','Dark','Average',['taunt'])]).items.some(i=>i.conflict&&i.w<0));
  const el=E.retag({name:'E',el:'Fire',skill:'All enemies get -40% defense against Fire for 4 turns.',tags:['defdown']});
  assert(el.tags.includes('eldefdown'));assert(!el.tags.includes('defdown'));assert.deepEqual(el.eldef,['Fire']);
  const both=E.retag({name:'B',skill:'The target gets -30% defense for 3 turns. All enemies get -20% defense against Ice.',tags:['defdown']});
  assert(both.tags.includes('defdown')&&both.tags.includes('eldefdown'));
  const elItems=E.synergy([el,hero('F1','Fire','Fast',['aoe']),hero('F2','Fire','Fast',[]),hero('D','Ice','Fast',['defdown'])]).items;
  assert(elItems.some(i=>/stacks with ordinary defense down/.test(i.why)));
  const bloody={key:'bloody',mod:t=>({healer:0}[t]??1)};
  assert(!E.synergy([hero('H','Holy','Fast',['healer']),hero('O','Holy','Fast',['overheal'])],bloody).items.some(i=>/boosted health/.test(i.why)));
  assert(!E.RULES.some(r=>r.a.tag==='cleanse'&&r.b.tag==='dot'),'own cleanse does not remove own damage-over-time');
});

test('opponent matching: answered and missing needs, devalued tools',()=>{
  const enemy=[hero('EH','Holy','Average',['healer']),hero('EA','Holy','Average',['antioverheal']),hero('EM','Ice','Fast',['manactl'])];
  const team=[hero('Blk','Fire','Fast',['healblock']),hero('Ov','Fire','Fast',['overheal'])];
  const mu=E.matchup(team,enemy);
  assert(mu.answered.some(a=>a.need.id==='heal'&&a.by==='Blk'));
  assert(mu.missing.some(n=>n.id==='mana'));
  assert(mu.penalties.some(p=>/boosted health/.test(p)));
  const weak=E.weaknesses(team,null,mu,{syn:E.synergy(team)});
  assert(/No answer to EM/.test(weak[0]));
});

test('explanations are plain language with no invented confidence or win rates',()=>{
  const team=[hero('A','Ice','Fast',[]),hero('B','Ice','Fast',[])];
  const ev=E.evaluate(team,{});
  const ex=E.explain(team,ev);
  assert(/No specific skill combination detected/.test(ex.why));
  assert(!/win rate|confidence|\d+% chance/i.test(JSON.stringify(ex)));
  const real=E.evaluate([hero('S','Ice','Fast',['defdown']),hero('N','Ice','Slow',['sniper'])],{});
  assert(/defense down/.test(E.explain([],real).why));
});

test('upgrade suggestions separate verified from estimated benefits',()=>{
  const own={Nuker:{n:2,instances:[inst(1,{level:80,ascension:4,limitBreak:0},{unlockedTalentNodes:10}),inst(2,{level:60,ascension:3,limitBreak:0})]}};
  const pool=E.poolFrom(units(own));
  const avg=E.poolFrom(units({Healer:{n:1,instances:[inst(3,{level:80,ascension:4,limitBreak:0},{definitionId:'healer'})]}}))[0];
  const ts=[{ownedId:'9',defId:'yellow_epic_female_mage',level:17,color:'Holy',kind:'mana',mana:11,source:'pattern'}];
  const plan=E.assignTroops([avg],ts);
  const ups=E.suggestUpgrades(pool.concat([avg]),{troopPlan:plan,limit:10});
  const lb=ups.find(u=>u.kind==='lb');assert(lb&&lb.verified);
  assert(ups.find(u=>u.kind==='level'&&!u.verified));
  assert(ups.find(u=>u.kind==='talent'&&!u.verified));
  const tr=ups.find(u=>u.kind==='troop');assert(tr&&tr.verified&&/to 23/.test(tr.text)&&/9 tiles instead of 10/.test(tr.text));
  const unk=E.suggestUpgrades(E.poolFrom(units({Nuker:{n:1,instances:[inst(5,{})]}})),{});
  assert.equal(unk[0].kind,'data');
});

test('saved game teams resolve instance IDs and keep unknowns explicit',()=>{
  const cat=JSON.parse(fs.readFileSync(path.join(__dirname,'../heroes_full.json')));
  const snap=snapshot(decode(encode(rosterData())));
  const own=prepare(snap,cat,aliases).own;
  const us=E.buildUnits({heroes:cat,own,selected:Object.keys(own),aliases});
  const gt=E.gameTeams(snap,us,E.troopsFrom(snap,{}));
  assert.equal(gt.length,1);const m=gt[0].members;
  assert.equal(m[0].unit.name,'Alasie');assert.equal(m[0].troop.kind,'mana');
  assert.equal(m[2].unit.name,'Aegir');assert.equal(m[2].troop,null);
  assert.equal(m[3].unit,null);assert.equal(gt[0].unresolved,1);assert(m[4].empty);
});

console.log('Engine tests passed: '+n+' groups (per-copy strength, overrides, costumes, allocation, repeat imports, troops, breakpoints, synergy, explanations, upgrades, game teams).');
