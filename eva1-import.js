/* Browser-local EVA1 reader and roster adapter. No network requests. */
(function(root){
  'use strict';
  class Reader {
    constructor(bytes){this.bytes=bytes;this.view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);this.offset=0;this.nodes=0;this.decoder=new TextDecoder('utf-8',{fatal:true});}
    need(n){if(n<0||this.offset+n>this.bytes.length)throw Error('The save file is incomplete (byte '+this.offset+').');}
    byte(){this.need(1);return this.bytes[this.offset++];}
    number(size,method){this.need(size);const n=this.view[method](this.offset,true);this.offset+=size;return n;}
    string(long){const n=long?this.number(2,'getUint16'):this.byte();this.need(n);const s=this.decoder.decode(this.bytes.subarray(this.offset,this.offset+n));this.offset+=n;return s;}
    map(depth){const o=Object.create(null);for(;;){this.need(1);if(this.bytes[this.offset]===255){this.offset++;return o;}const k=this.string();if(Object.hasOwn(o,k))throw Error('Duplicate save field: '+k);o[k]=this.value((depth||0)+1);}}
    value(depth){if((depth||0)>128||++this.nodes>1000000)throw Error('The save is too complex to import.');const t=this.byte();switch(t){
      case 0:return null;case 1:return false;case 2:return true;case 3:return this.byte();case 4:return this.number(2,'getInt16');case 5:return this.number(4,'getInt32');
      case 6:{const n=this.number(8,'getBigInt64');return n>=BigInt(Number.MIN_SAFE_INTEGER)&&n<=BigInt(Number.MAX_SAFE_INTEGER)?Number(n):String(n);}
      case 7:return this.number(4,'getFloat32');case 8:return this.string();case 9:return this.string(true);
      case 10:{const a=[];for(;;){this.need(1);if(this.bytes[this.offset]===255){this.offset++;return a;}a.push(this.value((depth||0)+1));}}
      case 11:return this.map(depth);default:throw Error('Unsupported save value at byte '+(this.offset-1)+'.');
    }}
  }
  function decode(buffer){
    const bytes=buffer instanceof Uint8Array?buffer:new Uint8Array(buffer);
    if(bytes.length>20*1024*1024)throw Error('Choose a save smaller than 20 MB.');
    const r=new Reader(bytes);if(r.byte()!==3||r.byte()!==1)throw Error('This is not a supported EVA1 save.');
    const clientVersion=r.value(),header=r.map();const length=r.number(4,'getUint32');
    if(length!==bytes.length-r.offset)throw Error('The save length does not match its header. Please copy the file again.');
    if(!Array.isArray(header.operations)||header.operations.length)throw Error('This save contains pending operations that are not yet supported. Open the game, let it sync, close it, then copy a fresh save.');
    const data=r.map();if(r.offset!==bytes.length)throw Error('Unexpected extra data in the save.');
    return {clientVersion,data};
  }
  function stats(s){
    const x=Object.create(null);if(typeof s==='string')for(const t of s.split(',')){const m=/^([lasbx])(\d+)$/.exec(t);if(m)x[m[1]]=Number(m[2]);}
    return {level:x.l??null,ascension:x.a??null,specialSkillLevel:x.s??null,limitBreak:x.b??(typeof s==='string'?0:null),xp:x.x??null,rawStats:s??null};
  }
  function talent(h){
    const vt=Number.isSafeInteger(h.t)&&h.t>=0&&(h.t&31)<=25,vf=Number.isSafeInteger(h.f)&&h.f>=0&&h.f<2**25;
    // Count = t & 31. In a real v389 save, f appears on only some records and its set bits always run
    // up to bit 24 (e.g. 20-24 on maxed 25-node heroes), so its population count is not the node count.
    // f is kept raw; its meaning is unverified.
    let fBits=null;if(vf){let f=BigInt(h.f);fBits=0;while(f){fBits+=Number(f&1n);f>>=1n;}}
    const count=vt?h.t&31:null;
    return {unlockedTalentNodes:count,talentT:h.t??null,talentF:h.f??null,talentCountConflict:vf&&vt&&fBits!==count};
  }
  function snapshot(decoded){
    const d=decoded.data,groups=d.heroesState?.ownedHeroesCollection?.heroIdToOwnedData;
    if(!groups||typeof groups!=='object'||Array.isArray(groups))throw Error('No owned hero roster was found in this save.');
    const heroes=[],ids=new Set;
    function add(definitionId,h,compact){const instanceId=String(h.id);if(!/^\d+$/.test(instanceId)||ids.has(instanceId))throw Error('Invalid or repeated hero instance ID.');ids.add(instanceId);heroes.push({instanceId,definitionId,compact:!!compact,...stats(h.s),...talent(h),costumes:(h.c||[]).map(c=>({costumeId:c.id,...stats(c.s),...talent(c)})),raw:h});}
    for(const [definitionId,g]of Object.entries(groups)){for(const h of g.a||[])add(definitionId,h,false);for(const id of g.b||[])add(definitionId,{id},true);}
    if(!heroes.length)throw Error('This save has no owned heroes to import.');
    const inventory=d.inventoryState?.inventory||{};
    const costumeItems=Object.entries(inventory).filter(([id,n])=>id.startsWith('item_')&&id.includes('_costume_')&&Number.isFinite(n)&&n>0).map(([id])=>id.slice(5));
    // Keep only roster-related state; account balances, shop and consent data are discarded.
    return {version:1,accountName:String(d.profileState?.name||'Imported roster'),accountLevel:d.progressionState?.xpLevel??null,clientVersion:decoded.clientVersion,heroes,costumeItems,teams:d.heroesState.teams||{},guestHeroes:d.heroesState.ownedHeroesCollection.guestOriginToOwnedInfos||{},troops:d.troopsState||{},dragons:d.dragonsState||{},favorites:d.heroesState.favoriteHeroes||[],pinned:d.heroesState.pinnedHeroes||[]};
  }
  function prepare(snap,catalog,aliases,existing={},overrides={}){
    const byName=new Map(catalog.map(h=>[h.name,h])),groups=new Map,unmatched=new Map;
    const mapping=Object.assign(Object.create(null),aliases);
    for(const [id,name]of Object.entries(overrides)){if(!byName.has(name)||byName.get(name).base)throw Error('Choose a base hero from the catalog.');mapping[id]={name,baseDefinitionId:id};}
    for(const h of snap.heroes){const a=mapping[h.definitionId],cat=a&&byName.get(a.name);if(!cat||cat.base){unmatched.set(h.definitionId,(unmatched.get(h.definitionId)||0)+1);continue;}if(!groups.has(cat.name))groups.set(cat.name,[]);groups.get(cat.name).push(h);}
    const own=Object.create(null),costumeCount=new Map;
    const remember=(base,costume)=>{if(!costumeCount.has(base))costumeCount.set(base,new Set);costumeCount.get(base).add(costume);};
    for(const id of snap.costumeItems||[]){const a=mapping[id];if(a&&byName.has(a.name))remember(a.baseDefinitionId,id);else{const base=snap.heroes.find(h=>id.startsWith(h.definitionId+'_costume_'));if(base)remember(base.definitionId,id);}}
    for(const h of snap.heroes)for(const c of h.costumes)remember(h.definitionId,h.definitionId+'_costume_'+c.costumeId);
    for(const [name,rows]of groups){
      const old=existing[name]||{},oldInstances=old.instances||[];
      const prior=rows.map(h=>oldInstances.findIndex(o=>o.instanceId===h.instanceId));
      const ps=prior.map(i=>i>=0?(Array.isArray(old.ps)?old.ps[i]??null:(i===0?old.p??null:null)):null);
      // Per-copy choices (form, path) follow the same owned instance across refreshes.
      const copies=prior.map(i=>i>=0&&Array.isArray(old.copies)?old.copies[i]??null:null);
      const first=rows[0],entry={...old,n:rows.length,c:Math.min(5,costumeCount.get(first.definitionId)?.size||0),definitionId:first.definitionId,instances:rows.map(h=>({...h}))};
      delete entry.copies;if(copies.some(Boolean))entry.copies=copies;
      // Exact powers can survive a refresh only when tied to the same owned instance.
      delete entry.p;delete entry.ps;if(ps.some(p=>Number.isFinite(p)&&p>=100&&p<=3000))entry.ps=ps;
      if(first.limitBreak!==null)entry.lb=first.limitBreak;
      if(first.unlockedTalentNodes!==null)entry.em=first.unlockedTalentNodes;
      own[name]=entry;
    }
    return {own,unmatched:[...unmatched].map(([definitionId,copies])=>({definitionId,copies})),matchedDefinitions:groups.size,matchedInstances:[...groups.values()].reduce((n,x)=>n+x.length,0),totalInstances:snap.heroes.length,costumeRecords:snap.heroes.reduce((n,h)=>n+h.costumes.length,0),teams:Object.keys(snap.teams||{}).length,talentConflicts:snap.heroes.filter(h=>h.talentCountConflict).length,unknownProgression:snap.heroes.filter(h=>h.level===null).length};
  }
  const api={Reader,decode,snapshot,prepare};if(typeof module==='object'&&module.exports)module.exports=api;else root.EVA1=api;
})(typeof globalThis!=='undefined'?globalThis:this);
