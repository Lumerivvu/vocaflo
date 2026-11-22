/* VocabFlow — Grammar mode (German). Topics live in grammar-data.js.
   Flow per topic: Theory → Text (grammar highlighted) → Practice (choose / type / build the sentence).
   Progress is stored in S.gram = { topicId: {n, best, last, done, t} }; answers also count towards the daily goal / streak. */
(()=>{'use strict';
const GD=typeof LANG!=='undefined'&&LANG==='en'?window.GRAM_EN:window.GRAM;
if(typeof V==='undefined'||typeof S==='undefined'||!GD)return;
const G=GD,GS={id:null,tab:'theory',q:null};window.gState=GS;
const st=()=>S.gram||(S.gram={}),stat=g=>st()[g.id]||{},topic=()=>G.find(g=>g.id===GS.id);
const fmt=s=>String(s).replace(/\{([mfnph]):([^}]*)\}/g,(_,k,t)=>'<b class="c'+k+'">'+t+'</b>');
const plain=s=>String(s).replace(/\[\[|\]\]/g,'');
const textHtml=de=>de.split(/\[\[(.+?)\]\]/).map((p,i)=>i%2?'<span class="gm">'+exHtml(p)+'</span>':exHtml(p)).join('');
const clean=s=>s.replace(/\s*\([^)]*\)\s*$/,'');
const DY=864e5,GIV=[0,1,3,7,14,30],MN={review:'Review',master:'Test until perfect',weak:'Weak spots'};
/* S.gx = per-exercise memory { 'topic:hash': {n, ok, err, st(0-5), due} } -> spaced repetition across all topics */
const gx=()=>S.gx||(S.gx={});
const hk=(g,x)=>{let h=0;const s=x[0]+String(x[1]);for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return g.id+':'+(h>>>0).toString(36)};
const rec=(q,ok)=>{const r=gx()[q.key]||(gx()[q.key]={n:0,ok:0,err:0,st:0,due:0}),t=Date.now();r.n++;r.last=t;
 if(ok){r.ok++;if(q.rq)r.due=t+DY;else{r.st=Math.min(r.st+1,5);r.due=t+GIV[r.st]*DY}}
 else{r.err++;r.st=Math.max(0,r.st-2);r.due=t+6e5}};
const learned=()=>G.filter(g=>stat(g).n);
const items=(gs,f)=>{const r=[],t=Date.now();gs.forEach(g=>g.ex.forEach(x=>{const s=gx()[hk(g,x)];if(!f||f(s,t))r.push({x,g,s})}));return r};
const isDue=(s,t)=>!!(s&&s.n&&s.due<=t),isWeak=s=>!!(s&&s.err>0&&s.st<=2);
const sents=t=>t.match(/[^.!?]+[.!?]+/g)||[t];

function note(msg){$('#main').innerHTML='<h1>Grammar</h1><div class="card empty">'+msg+'</div>'}
V.grammar=()=>{if(GS.q&&GS.q.mix)return GS.q.sum?summary():question();
 if(GS.view==='master'&&!GS.id)return viewMaster();
 GS.id&&topic()?viewTopic():(GS.id=null,viewList())};

/* ---------- topic list ---------- */
function card(g){const s=stat(g),d=items([g],isDue).length;
 return`<button class="gc${s.done?' done':''}" onclick="gOpen('${g.id}')"><b>${e(g.t)}</b><small>${e(g.ru)}</small><div class="bar"><i style="width:${s.best||0}%"></i></div><span class="gs2">${s.n?(s.done?'✓ ':'')+'Best '+s.best+'% · '+s.n+(s.n>1?' attempts':' attempt'):'Not started'}${d?' · <b class="gdue">↻ '+d+' due</b>':''}</span></button>`}
function hub(){const L=learned(),d=items(L,isDue).length,w=items(L,isWeak).length;
 return`<div class="card ghub"><h2>Review &amp; tests</h2><p class="lbl">Practise what you have already studied. Review brings exercises back when they are due; the mastery test repeats every mistake until all answers are correct.</p>${L.length?`<div class="row"><button class="${d?'pri':''}" onclick="gReview()">↻ Review${d?' ('+d+')':''}</button><button class="${d?'':'pri'}" onclick="gMasterSetup()">🎯 Test until perfect</button><button onclick="gWeak()"${w?'':' disabled'}>⚠ Weak spots${w?' ('+w+')':''}</button></div>`:'<p class="lbl">Finish practice in at least one topic to unlock these.</p>'}</div>`}
function viewMaster(){const L=learned();if(!GS.sel)GS.sel=new Set(L.map(g=>g.id));const sz=GS.size==null?20:GS.size,n=items(L.filter(g=>GS.sel.has(g.id))).length;
 $('#main').innerHTML=`<button class="gback" onclick="gBack()">← All topics</button><h1>Test until perfect</h1><p class="sub">Questions come from the topics you have already practised. A mistake returns a few questions later, and the test ends only when every question has been answered correctly.</p>
 <div class="card" style="margin-bottom:14px"><h2>Topics</h2><div class="gpills">${L.map(g=>`<button class="gpill${GS.sel.has(g.id)?' on':''}" onclick="gTog('${g.id}')">${e(g.t)}</button>`).join('')}</div><div class="row" style="margin-top:12px"><button onclick="gAll(1)">Select all</button><button onclick="gAll(0)">None</button></div></div>
 <div class="card"><h2>Questions</h2><div class="gpills">${[20,40,0].map(k=>`<button class="gpill${sz===k?' on':''}" onclick="gSize(${k})">${k||'All ('+n+')'}</button>`).join('')}</div><p class="lbl">Weakest exercises are picked first when the test is shorter than the pool.</p><p><button class="pri" onclick="gMaster()"${n?'':' disabled'}>Start</button></p></div>`}
function viewList(){const done=G.filter(g=>stat(g).done).length,lv=[...new Set(G.map(g=>g.lv))];
 $('#main').innerHTML=`<h1>Grammar</h1><p class="sub">Each topic has a short theory, a text with the grammar highlighted, and practice with explanations. Topics go roughly from A1 to B2. 80% or more marks a topic as done.</p>
 <div class="card"><div class="lbl">Topics done: ${done} / ${G.length}</div><div class="bar" style="margin-top:8px"><i style="width:${done/G.length*100}%"></i></div></div>
 ${hub()}
 ${lv.map(l=>`<div class="glv">${l}</div><div class="gg">${G.filter(g=>g.lv===l).map(card).join('')}</div>`).join('')}`}

/* ---------- topic view ---------- */
function viewTopic(){const g=topic();
 if(GS.tab==='practice'&&GS.q&&GS.q.id===g.id)return GS.q.sum?summary():question();
 const i=G.indexOf(g),tabs=[['theory','Theory'],['text','Text'],['practice','Practice']];let body='';
 if(GS.tab==='text'){const[de,ru]=g.tx;
  body=`<div class="card"><p class="lbl" style="margin:0 0 12px">The grammar of this topic is highlighted. Hover or tap any word for a translation.</p><div class="gtext">${textHtml(de)}</div><div class="row" style="margin-top:16px"><button class="qb" onclick="gSay()"><i>🔊</i>Listen</button></div><details class="gdet"><summary>Show translation</summary><div class="gtr">${e(ru)}</div></details></div><div class="gnav"><button onclick="gTab('theory')">← Theory</button><button class="pri" onclick="gTab('practice')">Practice →</button></div>`}
 else if(GS.tab==='practice'){const s=stat(g);
  body=`<div class="card glass"><h2>${g.ex.length} exercises</h2><p class="lbl">Choose the right form, type the missing word, or build the sentence. After each answer you see the rule behind it. Mistakes are listed at the end and you can retry them.</p>${s.n?`<p class="lbl">Best result: ${s.best}% · attempts: ${s.n}</p>`:''}<p><button class="pri" onclick="gStart()">Start (Enter)</button></p></div>`}
 else body=`<div class="card th">${fmt(g.th)}</div><div class="gnav"><button class="pri" onclick="gTab('text')">Read the text →</button><button onclick="gTab('practice')">Skip to practice</button></div>`;
 $('#main').innerHTML=`<button class="gback" onclick="gBack()">← All topics</button><h1>${e(g.t)}</h1><p class="sub" style="margin-bottom:0">Level ${g.lv} · ${e(g.ru)}</p><div class="gtabs">${tabs.map(([k,l])=>`<button class="${GS.tab===k?'on':''}" onclick="gTab('${k}')">${l}</button>`).join('')}</div>${body}`}

/* ---------- practice ---------- */
function mk(x,g){const o={t:x[0],key:hk(g,x),g:g.id,gt:g.t};
 if(x[0]==='c'){o.q=x[1];o.opts=shuf(x[2].map((t,i)=>({t,ok:i===x[3]})));o.ans=x[2][x[3]];o.ru=x[4];o.why=x[5]}
 else if(x[0]==='t'){o.q=x[1];o.acc=x[2].map(a=>nrm(a).replace(/\s+/g,' ').trim());o.ans=x[2][0];o.ru=x[3];o.why=x[4]}
 else{const keep=x[1][0]==='!',s=x[1].replace(/^!/,'').trim(),raw=s.split(/\s+/),end=(raw[raw.length-1].match(/[.!?…]+$/)||[''])[0];
  const toks=raw.map((w,i)=>{w=w.replace(/[.!?…]+$/,'');return{t:i===0&&!keep?w.charAt(0).toLowerCase()+w.slice(1):w,i}});
  let sh=shuf(toks),n=0;while(n++<8&&sh.every((y,k)=>y.i===k))sh=shuf(toks);
  o.toks=sh;o.sel=[];o.end=end;o.ru=x[2];o.why=x[3];o.ans=s;o.acc=[s,...(x[4]||[])].map(a=>nrm(a).replace(/\s+/g,' ').trim())}
 o.full=o.t==='o'?o.ans:o.q.includes('___')?clean(o.q).replace('___',o.ans):o.ans;
 return o}
const ordUI=q=>{const used=new Set(q.sel);
 return`<div class="ordA" id="oa">${q.sel.map((k,j)=>`<button class="chip" onclick="gUn(${j})">${e(q.toks[k].t)}</button>`).join('')}${q.sel.length?`<span class="ordp">${e(q.end)}</span>`:'<span class="lbl">Tap the words below in the right order…</span>'}</div><div class="ordB">${q.toks.map((o,k)=>used.has(k)?`<span class="chip ghost">${e(o.t)}</span>`:`<button class="chip" onclick="gAdd(${k})">${e(o.t)}</button>`).join('')}</div><div class="row" style="justify-content:center;margin-top:14px"><button onclick="gClr()">Reset</button><button class="pri" onclick="gCheck()" ${q.sel.length===q.toks.length?'':'disabled'}>Check (Enter)</button></div>`};
function question(){const Q=GS.q,q=Q.list[Q.i];
 const tag={c:'Choose',t:'Type the missing word',o:'Build the sentence'}[q.t];let big,hint,inp;
 if(q.t==='o'){big=e(q.ru);hint='Tap the words in the right order';inp=`<div id="ow">${ordUI(q)}</div>`}
 else{big=e(q.q).replace('___','<span class="gap">_____</span>');hint=e(q.ru||'');
  inp=q.t==='c'?`<div class="opts">${q.opts.map((o,i)=>`<button onclick="gPick(${i})"><span class="lbl">${i+1}</span> &nbsp;${e(o.t)}</button>`).join('')}</div>`
   :`<div class="row" style="justify-content:center"><input type="text" id="gi" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="font-size:18px;min-width:0;flex:1 1 200px"><button class="pri" onclick="gSubmit()">Check</button></div>`}
 $('#main').innerHTML=`<div class="row" style="justify-content:space-between"><span class="lbl">${e(Q.mix?MN[Q.mode]+' · '+q.gt:topic().t)} · ${Q.i+1} / ${Q.list.length}${Q.mode==='master'?' · mistakes '+Q.miss.length:''}</span><button onclick="gEnd()">End</button></div><div class="bar" style="margin:8px 0 14px"><i style="width:${Q.i/Q.list.length*100}%"></i></div>
 <div class="card glass q" id="qc"><span class="tg">${tag}</span><div class="qw sm">${big}</div><div class="qh">${hint}</div>${inp}<div id="fb"><div class="qa"><button class="qb" onclick="gIdk()"><i>🤔</i>I don’t know</button></div></div></div>`;
 const t=$('#gi');if(t)t.focus()}
function ordRender(){const Q=GS.q,q=Q&&Q.list[Q.i],b=$('#ow');if(q&&b)b.innerHTML=ordUI(q)}
function finish(ok,shown){const Q=GS.q,q=Q.list[Q.i];if(Q.done)return;Q.done=true;if(!q.rq){Q.ok+=ok?1:0;if(!ok)Q.miss.push(q)}rec(q,ok);if(!ok&&Q.mode==='master')Q.list.splice(Math.min(Q.list.length,Q.i+4),0,Object.assign(fresh(q),{rq:1}));
 const d=S.log[today()]||(S.log[today()]={n:0,ok:0});d.n++;if(ok)d.ok++;save();
 $('#qc').classList.add(ok?'ok':'bad');
 if(q.opts)[...document.querySelectorAll('.opts button')].forEach((b,j)=>{if(q.opts[j].ok)b.classList.add('ok');else if(j===shown)b.classList.add('bad')});
 const ti=$('#gi');if(ti)ti.disabled=true;const oa=$('#oa');if(oa)oa.classList.add(ok?'ok':'bad');
 const yours=!ok&&Q.mine?`<div class="lbl">${q.t==='o'?'Your order':'You typed'}: ${e(Q.mine)}${Q.near?' — almost, check the spelling':''}</div>`:'',last=Q.i>=Q.list.length-1;
 $('#fb').innerHTML=`<div class="fb"><b class="${ok?'okc':'er'}">${ok?'Correct ✓':'Not quite ✗'}</b>${ok?'':` — <b>${e(q.ans)}</b>`}${yours}<div class="ex">${exHtml(q.full)}${q.t!=='o'&&q.ru?`<div class="exr">${e(q.ru)}</div>`:''}</div><div class="gwhy">💡 ${fmt(q.why)}</div><div class="qa fa"><button class="qb" onclick="gSay1()"><i>🔊</i>Listen</button></div></div><p><button class="pri" onclick="gNext()">${last?'Finish':'Next'} (Enter)</button></p>`;
 if(S.say!==0)say(q.full)}
function summary(){const Q=GS.q,g=Q.mix?null:topic(),i=g?G.indexOf(g):-1,n=Q.n0||Q.list.length,pct=n?Math.round(Q.ok/n*100):0,nx=g&&G[i+1];
 if(!Q.saved){Q.saved=1;if(!Q.retry&&!Q.mix){const s=st()[g.id]||(st()[g.id]={});s.n=(s.n||0)+1;s.best=Math.max(s.best||0,pct);s.last=pct;s.t=Date.now();if(pct>=80)s.done=1;save()}}
 const ttl=Q.mix?(Q.mode==='master'?'All questions mastered 🎯':'Session complete'):Q.retry?'Retry complete':'Topic complete',sub=Q.mix?MN[Q.mode]:e(g.t)+' · '+e(g.ru),
  stt=Q.mix?(Q.mode==='master'?(pct===100?'Flawless ✓':'Mastered ✓'):'Done ✓'):stat(g).done?'Done ✓':'Keep going',
  again=Q.mix?{master:'gMaster()',weak:'gWeak()',review:'gReview()'}[Q.mode]:'gStart()',canRetry=Q.miss.length&&Q.mode!=='master';
 $('#main').innerHTML=`<h1>${ttl}</h1><p class="sub">${sub}</p><div class="g"><div class="card"><div class="lbl">${Q.mode==='master'?'First try':'Correct'}</div><div class="big">${Q.ok}/${n}</div></div><div class="card"><div class="lbl">Score</div><div class="big">${pct}%</div></div><div class="card"><div class="lbl">Status</div><div class="big" style="font-size:20px;padding-top:6px">${stt}</div></div></div>
 ${Q.miss.length?`<div class="card" style="margin-bottom:14px"><h2>${Q.mode==='master'?'Mistakes along the way':'To review'}</h2>${Q.miss.map(q=>`<div class="gx">${exHtml(q.full)}<small>${fmt(q.why)}</small></div>`).join('')}</div>`:'<div class="card" style="margin-bottom:14px"><h2>No mistakes 🎉</h2></div>'}
 <p class="row">${canRetry?`<button class="pri" onclick="gRetry()">Retry mistakes (${Q.miss.length})</button>`:''}<button class="${canRetry?'':'pri'}" onclick="${again}">${Q.mix?'Again':'Practice again'}</button>${nx?`<button onclick="gOpen('${nx.id}')">Next: ${e(nx.t)} →</button>`:''}<button onclick="gBack()">All topics</button></p>`;Q.sum=1}

/* ---------- actions (global: used by inline onclick) ---------- */
const go=()=>{render();scrollTo(0,0)};
window.gOpen=(id,tab)=>{if(GS.q&&GS.q.id!==id)GS.q=null;GS.view=null;GS.id=id;GS.tab=tab||'theory';go()};
window.gBack=()=>{GS.id=null;GS.view=null;GS.q=null;go()};
window.gTab=k=>{GS.tab=k;go()};
window.gStart=()=>{const g=topic();if(!g)return;GS.tab='practice';GS.q={id:g.id,list:shuf(g.ex).map(x=>mk(x,g)),i:0,ok:0,miss:[],done:false,mine:'',near:0};go()};
window.gRetry=()=>{const Q=GS.q;if(!Q||!Q.miss.length)return;GS.q={id:Q.id,mix:Q.mix,mode:Q.mode,list:Q.miss.map(q=>fresh(q)),i:0,ok:0,miss:[],done:false,mine:'',near:0,retry:1};go()};
function mix(mode,a){if(!a.length)return false;GS.id=null;GS.view=null;GS.q={mix:1,mode,list:a.map(o=>mk(o.x,o.g)),n0:a.length,i:0,ok:0,miss:[],done:false,mine:'',near:0};go();return true}
window.gReview=()=>{const a=items(learned(),isDue).sort((p,q)=>p.s.due-q.s.due).slice(0,15);if(!mix('review',shuf(a)))toast('Nothing is due for review. Try “Test until perfect”')};
window.gWeak=()=>{const a=items(learned(),isWeak).sort((p,q)=>q.s.err-p.s.err).slice(0,15);if(!mix('weak',shuf(a)))toast('No weak spots yet')};
window.gMasterSetup=()=>{GS.q=null;GS.id=null;GS.view='master';GS.sel=null;go()};
window.gTog=id=>{if(!GS.sel)return;GS.sel.has(id)?GS.sel.delete(id):GS.sel.add(id);render()};
window.gAll=f=>{GS.sel=new Set(f?learned().map(g=>g.id):[]);render()};
window.gSize=k=>{GS.size=k;render()};
window.gMaster=()=>{if(!GS.sel)GS.sel=new Set(learned().map(g=>g.id));let a=shuf(items(learned().filter(g=>GS.sel.has(g.id)))),k=GS.size==null?20:GS.size;if(k&&a.length>k)a=a.sort((p,q)=>(p.s?p.s.st:-1)-(q.s?q.s.st:-1)).slice(0,k);if(!mix('master',shuf(a)))toast('Select at least one topic')};
function fresh(q){const o=Object.assign({},q);if(o.t==='c')o.opts=shuf(o.opts.map(x=>({t:x.t,ok:x.ok})));if(o.t==='o'){o.sel=[];o.toks=shuf(o.toks.map(x=>({t:x.t,i:x.i})))}return o}
window.gEnd=()=>{stopSpeech();GS.q=null;go()};
window.gNext=()=>{const Q=GS.q;if(!Q||!Q.done)return;stopSpeech();Q.i++;Q.done=false;Q.mine='';Q.near=0;if(Q.i>=Q.list.length)Q.sum=1;V.grammar();scrollTo(0,0)};
window.gPick=i=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(!q||Q.done||q.t!=='c')return;Q.mine='';finish(q.opts[i].ok,i)};
window.gIdk=()=>{const Q=GS.q;if(!Q||Q.done)return;Q.mine='';Q.near=0;finish(false,null)};
window.gSubmit=()=>{const Q=GS.q,q=Q&&Q.list[Q.i],ti=$('#gi');if(!q||Q.done||q.t!=='t'||!ti)return;const v=nrm(ti.value).replace(/\s+/g,' ').trim();if(!v)return;
 Q.mine=ti.value.trim();const ok=q.acc.includes(v);Q.near=!ok&&q.acc.some(a=>a.length>3&&lev(a,v)<=1);finish(ok)};
window.gAdd=k=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(!q||Q.done||q.t!=='o'||q.sel.includes(k))return;q.sel.push(k);ordRender()};
window.gUn=j=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(!q||Q.done||q.t!=='o'||j<0||j>=q.sel.length)return;q.sel.splice(j,1);ordRender()};
window.gClr=()=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(!q||Q.done||q.t!=='o')return;q.sel=[];ordRender()};
window.gCheck=()=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(!q||Q.done||q.t!=='o'||q.sel.length!==q.toks.length)return;
 const raw=q.sel.map(k=>q.toks[k].t).join(' ')+q.end;Q.mine=raw;Q.near=0;finish(q.acc.includes(nrm(raw).replace(/\s+/g,' ').trim()))};
window.gSay=()=>{const g=topic();if(g)sents(plain(g.tx[0])).forEach((s,i)=>say(s.trim(),i?1:0))};
window.gSay1=()=>{const Q=GS.q,q=Q&&Q.list[Q.i];if(q)say(q.full)};

/* keyboard: capture phase, so the main app's shortcuts (which may hold a stale session) never fire on this page */
document.addEventListener('keydown',ev=>{if(location.hash!=='#grammar')return;ev.stopImmediatePropagation();const tp=$('#tip');if(tp)tp.style.display='none';
 const Q=GS.q,q=Q&&!Q.sum&&Q.list[Q.i],inp=ev.target&&ev.target.tagName==='INPUT';
 if(ev.key==='Enter'){
  if(q){ev.preventDefault();if(Q.done)gNext();else if(q.t==='t')gSubmit();else if(q.t==='o')gCheck();return}
  if(GS.id&&GS.tab==='practice'&&!Q&&!(ev.target&&ev.target.tagName==='BUTTON')){ev.preventDefault();gStart()}
  return}
 if(!q||Q.done||inp)return;
 if(q.t==='c'&&/^[1-4]$/.test(ev.key)&&q.opts[ev.key-1])gPick(ev.key-1);
 else if(q.t==='o'&&ev.key==='Backspace'){ev.preventDefault();gUn(q.sel.length-1)}
 else if(ev.key==='0')gIdk()},true);

if(location.hash==='#grammar')render();
})();