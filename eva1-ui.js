/* Runs after the app's inline script; shares its existing roster state. */
(function(){
  'use strict';
  const input=document.getElementById('eva1Import'),dialog=document.getElementById('eva1Preview');
  const el=(tag,text,parent)=>{const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(parent)parent.appendChild(e);return e;};
  let pending=null;
  function showStatus(){const s=store.get('epEvaRoster'),box=document.getElementById('eva1Status');if(!s){box.textContent='';return;}box.textContent='Imported '+s.accountName+': '+s.heroes.length+' owned copies. Each copy is ranked from its own progression; saved game teams appear in the Team Builder and troops below.';}
  function close(){pending=null;dialog.close();input.value='';}
  function preview(){
    const result=EVA1.prepare(pending.snapshot,HEROES,EVA1_HERO_IDS,OWN,pending.overrides);
    pending.result=result;dialog.replaceChildren();
    el('h2','Import '+pending.snapshot.accountName,dialog);
    el('p',result.matchedInstances+' of '+result.totalInstances+' owned copies matched to '+result.matchedDefinitions+' heroes. '+result.costumeRecords+' costume builds and '+result.teams+' saved teams found.',dialog);
    el('p','Your file is read on this device. Full account balances and shop data are not stored or sent anywhere.',dialog);
    if(result.talentConflicts)el('p',result.talentConflicts+' talent records also carry a second talent field whose meaning is not verified. The node count from the main field is used; both raw values are kept.',dialog);
    if(result.unknownProgression)el('p',result.unknownProgression+' copies have no explicit level data; their progression stays unknown.',dialog);
    el('p','Each copy is ranked from its own level, ascension, limit break and talent count. Copies below max level are labelled estimates; copies without progression data are ranked at the minimum until you enter card Power. Costumes count as alternate forms of the same copy, and their bonus only when fully levelled. Exact talent paths are not inferred.',dialog);
    const prev=store.get('epEvaRoster');if(prev&&prev.accountName!==pending.snapshot.accountName)el('p','Your last import was for '+prev.accountName+'. Choose whether to merge this roster or replace the current roster.',dialog);
    const label=el('label',undefined,dialog),mode=el('select',undefined,label);mode.id='eva1Mode';
    for(const [value,text]of [['merge','Merge: update matching heroes, keep other heroes'],['replace','Replace current roster with matched heroes']]){const o=el('option',text,mode);o.value=value;}
    mode.value=pending.mode;mode.onchange=()=>pending.mode=mode.value;
    el('p','Matching hero counts are refreshed, not added again. Matching costume selections become one base-hero entry so the same copies are not counted twice. Existing battle logs and saved builder teams stay in place.',dialog);
    if(result.unmatched.length){
      el('h3','Match missing hero IDs',dialog);el('p','Choose a catalog hero, or leave blank. Unmatched records stay in the backup and are excluded from suggestions.',dialog);
      const list=el('datalist',undefined,dialog);list.id='eva1CatalogNames';for(const h of HEROES.filter(h=>!h.base)){const o=el('option',undefined,list);o.value=h.name;}
      for(const row of result.unmatched){const line=el('label',row.definitionId+' ('+row.copies+' copies) ',dialog);line.style.display='block';const field=el('input',undefined,line);field.setAttribute('list',list.id);field.placeholder='Choose hero name';field.value=pending.overrides[row.definitionId]||'';field.onchange=()=>{if(field.value&&!HEROES.some(h=>h.name===field.value&&!h.base)){field.setCustomValidity('Choose a base hero from the catalog.');field.reportValidity();return;}field.setCustomValidity('');if(field.value)pending.overrides[row.definitionId]=field.value;else delete pending.overrides[row.definitionId];preview();};}
    }
    const buttons=el('div',undefined,dialog);buttons.className='bar';const apply=el('button','Import roster',buttons);apply.className='chipbtn';apply.disabled=!result.matchedInstances;apply.onclick=commit;
    const cancel=el('button','Cancel',buttons);cancel.className='chipbtn';cancel.onclick=close;
    if(!dialog.open)dialog.showModal();
  }
  function commit(){
    const {snapshot:snap,result,mode,overrides}=pending;
    const next=Object.assign({},mode==='replace'?{}:OWN,result.own);
    // The base owns the copies; separately selected variants would double-count them.
    for(const h of HEROES)if(h.base&&Object.hasOwn(result.own,h.base))delete next[h.name];
    const selected=new Set(Object.keys(next).filter(n=>HEROES.some(h=>h.name===n)));
    const values={epOwn:next,epSel:[...selected],epEvaRoster:snap,epEvaAliases:overrides};
    const before=Object.fromEntries(Object.keys(values).map(k=>[k,localStorage.getItem(k)]));
    try{for(const [k,v]of Object.entries(values))localStorage.setItem(k,JSON.stringify(v));}
    catch(e){for(const [k,v]of Object.entries(before)){try{if(v===null)localStorage.removeItem(k);else localStorage.setItem(k,v);}catch{}}alert('Your browser could not save the import. Your current roster has been kept. Free some browser storage and try again.');return;}
    OWN=next;sel=selected;RV='mine';renderGrid();showStatus();close();
  }
  input.onchange=async()=>{
    const f=input.files?.[0];if(!f)return;
    try{if(!/\.eva1$/i.test(f.name))throw Error('Choose a .eva1 file.');if(f.size>20*1024*1024)throw Error('Choose a save smaller than 20 MB.');pending={snapshot:EVA1.snapshot(EVA1.decode(await f.arrayBuffer())),overrides:store.get('epEvaAliases')||{},mode:'merge'};preview();}
    catch(e){pending=null;input.value='';alert('Import could not be completed: '+e.message);}
  };
  dialog.addEventListener('cancel',()=>{pending=null;input.value='';});
  showStatus();
})();
