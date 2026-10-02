// Synthetic EVA1 saves for tests. Values are invented; no real account data.
const text=s=>{const b=Buffer.from(s);return Buffer.concat([Buffer.from([b.length]),b]);};
const value=x=>{if(Array.isArray(x))return Buffer.concat([Buffer.from([10]),...x.map(value),Buffer.from([255])]);if(x&&typeof x==='object')return Buffer.concat([Buffer.from([11]),map(x)]);if(typeof x==='string')return Buffer.concat([Buffer.from([8]),text(x)]);if(Number.isInteger(x)){if(x>=0&&x<=255)return Buffer.from([3,x]);const b=Buffer.alloc(5);b[0]=5;b.writeInt32LE(x,1);return b;}if(typeof x==='boolean')return Buffer.from([x?2:1]);return Buffer.from([0]);};
const map=x=>Buffer.concat([...Object.entries(x).flatMap(([k,v])=>[text(k),value(v)]),Buffer.from([255])]);
const encode=(data,operations=[])=>{const root=map(data),len=Buffer.alloc(4);len.writeUInt32LE(root.length);return Buffer.concat([Buffer.from([3,1]),value('v389.0'),map({operations}),len,root]);};

// A mid-size roster across all colours: duplicates, partial progression, compact
// records, limit breaks, costumes (maxed and partial), troops and saved teams.
function rosterData(){
  let id=100;
  const a=(s,extra)=>Object.assign({id:++id,s,t:20,f:0xFFFFF},extra||{});
  const max5='l80,a4,s8,b0';
  const g={
    ice_god_eskimo:{a:[a(max5),a('l60,a3,s6,b0',{t:5,f:31})]},           // Alasie x2: max and partial
    kalevala_aino:{a:[a('l85,a4,s8,b1')]},                                  // Aino LB1
    ice_god_alexandrine:{a:[a(max5)]},
    wonderland_alice:{a:[a('l90,a4,s8,b2')]},                               // LB2
    ice_god_october:{b:[201]},                                              // compact: unknown progression
    monster_hunter_sigyn:{a:[a(max5)]},
    lunar_new_year_xiaoqing:{a:[a(max5)]},
    vegetable_auberguy:{a:[a(max5)]},
    slayer_senan:{a:[a(max5)]},
    s5_sneferu:{a:[a('l1,a1,s1,b0',{t:0,f:0})]},
    slime_achillea:{a:[a(max5)]},
    s5_ahmose:{a:[a(max5)]},
    forest_god_oberon:{a:[a(max5)]},
    garrison_archibald:{a:[a(max5)]},
    easter_archie:{a:[a(max5)]},
    goblin_acidfire:{a:[a(max5)]},
    elemental_aconia:{a:[a(max5)]},
    dark_god_aeron:{a:[a(max5)]},
    magic_carpet_agadh:{a:[a(max5)]},
    shadow_abigail:{a:[a(max5)]},
    titan_hunter_adelitza:{a:[a(max5)]},
    halloween_alucard:{a:[a(max5)]},
    forsaken_amarosa:{a:[a(max5)]},
    tales2_aethslegaur:{a:[a(max5)]},
    nordic_chained_werewolf:{a:[a('l50,a3,s8,b0',{c:[{id:'cute',s:'l50,a3,s8'},{id:'glass',s:'l10,a1,s1'}]})]}, // 3* Graymane: maxed + partial costume
    royal_knight:{a:[a('l50,a3,s8,b0')]}
  };
  return {
    profileState:{name:'Synthetic account'},
    heroesState:{ownedHeroesCollection:{heroIdToOwnedData:g,guestOriginToOwnedInfos:{}},
      teams:{main_1:{tm:[{hid:'101',tid:'1'},{hid:'103',tid:'2'},{hid:'201',tid:'default'},{hid:'999999',tid:'3'},{hid:'empty',tid:'default'}]}}},
    troopsState:{savedOwnedIdToTroopDefinitions:{
      1:{td:{id:'blue_epic_barbarian',lvl:17}},       // Ice 4* mana
      2:{td:{id:'blue_epic_barbarian',lvl:23}},
      3:{td:{id:'green_epic_rogue',lvl:29}},          // Nature 4* mana
      4:{td:{id:'red_epic_magic',lvl:30}},            // Fire Magic max
      5:{td:{id:'purple_epic_styx',lvl:12}},          // Dark Styx not max: unknown
      6:{td:{id:'mystery_troop_x',lvl:9}}             // unrecognised
    }},
    inventoryState:{inventory:{item_nordic_chained_werewolf_costume_cute:1,item_royal_knight_costume_blacksmith:1}}
  };
}
module.exports={encode,rosterData};
