const LANG=(()=>{try{return localStorage.getItem('vocabflow.lang')==='en'?'en':'de'}catch(e){return'de'}})(),LN=LANG==='en'?'English':'German',LRX=new RegExp('^'+LANG,'i'),K=LANG==='en'?'vocabflow.en.v1':'vocabflow.v1',$=s=>document.querySelector(s),DAY=864e5,IV=[.007,.04,1,3,7,14,30];
let S;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}
const migrate=d=>{d.v=2;d.log=d.log||{};d.types=d.types||{};d.conf=d.conf||{};d.goal=d.goal||20;d.hist=d.hist||[];d.words.forEach(w=>{w.s=w.s||{};w.err=w.err||0;Object.values(w.s).forEach(x=>{x.n=x.n||0;x.ok=Math.min(x.ok||0,x.n);x.st=x.st||0;x.ease=x.ease||2.5;x.int=x.int||0;x.due=x.due||0})});return d};
if(!S||![1,2].includes(S.v)||!Array.isArray(S.words))S={v:2,words:[],log:{},types:{},conf:{},goal:20,hist:[]};S=migrate(S);
let IX=null,SV=null;const save=()=>{IX=null;SV=null;try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const e=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const NI={overview:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 11.5 12 4l9 7.5"/><path d="M5.5 10v9.5h4.5v-5h4v5h4.5V10"/></svg>',learn:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 13l9 5 9-5"/></svg>',review:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 11a8 8 0 0 0-14.5-3.5M4 4v4h4"/><path d="M4 13a8 8 0 0 0 14.5 3.5M20 20v-4h-4"/></svg>',grammar:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z"/><path d="M8.5 7h7"/></svg>',vocab:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13"/><path d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',settings:'<svg class="ni" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/></svg>'};
const LOGO='<svg viewBox="0 0 32 32" role="img" aria-label="VocabFlow"><rect width="32" height="32" rx="9" fill="#8957FF"/><polygon class="b" points="6,11 12,11 16,20 16,25" fill="#fff" fill-opacity=".55"/><polygon class="a" points="26,11 20,11 16,20 16,25" fill="#fff"/><polygon class="g" points="16,2.5 19.5,6 16,9.5 12.5,6" fill="#FFD166"/></svg>';
const today=()=>new Date().toISOString().slice(0,10);
const TN={dr:LN+' → Russian',rd:'Russian → '+LN,art:'Articles',pl:'Plurals',mis:'Missing word',man:'Typing: '+LN+' → Russian',rev:'Typing: Russian → '+LN,mist:'Typing: missing word',ord:'Build the sentence',aud:'Listening'};
const POS={noun:'noun',verb:'verb',adjective:'adjective',adverb:'adverb',preposition:'preposition',conjunction:'conjunction',expression:'expression',collocation:'collocation'};
function toast(m){const t=document.createElement('div');t.className='toast';t.textContent=m;document.body.append(t);setTimeout(()=>t.remove(),2600)}
function ask(msg,fn){$('#ov').innerHTML=`<div class="modal"><div class="card glass" role="dialog"><p>${e(msg)}</p><div class="row"><button class="pri" id="y">Confirm</button><button id="n">Cancel</button></div></div></div>`;$('#n').onclick=()=>$('#ov').innerHTML='';$('#y').onclick=()=>{$('#ov').innerHTML='';fn()}}
// ---------- vocabulary ----------
function parse(line){const p=line.split('|').map(x=>x.trim());let de=p[0],ru=p[1];if(!de||!ru)return{err:'Needs at least: '+LN+' | Russian'};
 let pos=(p[2]||'').toLowerCase();const m=LANG==='de'&&de.match(/^(der|die|das)\s+(.+)$/i);if(!pos)pos=m?'noun':'expression';if(!POS[pos])return{err:'Unknown part of speech “'+p[2]+'”'};
 const w={id:Date.now().toString(36)+Math.random().toString(36).slice(2,7),de,ru,pos,pl:p[3]||'',ex:p[4]||'',exRu:p[5]||'',cat:p[6]||'',s:{},err:0};
 if(pos==='noun'&&m){w.art=m[1].toLowerCase();w.base=m[2]}else w.base=de;return{w}}
const nd=s=>s.toLowerCase().trim();const line=w=>[w.de,w.ru,w.pos,w.pl,w.ex,w.exRu,w.cat].join(' | ').replace(/( \| )+$/,'');
let P=null,editId=null;
function preview(txt){const have=new Set(S.words.map(w=>nd(w.de))),seen=new Set(),r=[];
 txt.split(/\r?\n/).forEach((l,i)=>{if(!l.trim())return;const o=parse(l);o.line=l;o.n=i+1;if(o.w){const k=nd(o.w.de);o.dup=have.has(k)||seen.has(k);seen.add(k)}r.push(o)});P=r;vocab()}
function doImport(dups){let n=0;P.forEach(o=>{if(o.w&&(!o.dup||dups)){S.words.push(o.w);n++}});const bad=P.filter(o=>!o.w).length,d=P.filter(o=>o.dup).length;P=null;save();toast(`Imported ${n} words · ${bad} invalid · ${d} duplicates`);vocab()}
function dl(name,txt,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([txt],{type}));a.download=name;a.click()}
const SAMPLE_EN='apple | яблоко | noun | apples\nchallenge | вызов, трудность | noun | challenges | This task is a real challenge. | Это задание — настоящий вызов. | Daily life\nlearn | учить, изучать | verb | | I want to learn something new every day. | Я хочу учиться чему-то новому каждый день.\nalthough | хотя | conjunction\nreliable | надёжный | adjective | | He is a reliable friend. | Он надёжный друг.\nmake a decision | принять решение | expression\navoid | избегать | verb | | We should avoid mistakes. | Нам следует избегать ошибок.\nprevent | предотвращать | verb | | We want to prevent an accident. | Мы хотим предотвратить аварию.\nhouse | дом | noun | houses\nstreet | улица | noun | streets',SAMPLE_DE='der Apfel | яблоко | noun | Äpfel\ndie Herausforderung | вызов, трудность | noun | Herausforderungen | Diese Aufgabe ist eine große Herausforderung. | Это задание — большая трудность. | Alltag\nlernen | учить, изучать | verb | | Ich möchte jeden Tag Deutsch lernen. | Я хочу учить немецкий каждый день.\nobwohl | хотя | conjunction\nzuverlässig | надежный | adjective | | Er ist ein zuverlässiger Freund.\neine Entscheidung treffen | принять решение | expression\nvermeiden | избегать | verb | | Wir sollten Fehler vermeiden.\nverhindern | предотвращать | verb | | Wir wollen einen Unfall verhindern.\ndas Haus | дом | noun | Häuser\ndie Straße | улица | noun | Straßen',SAMPLE=LANG==='en'?SAMPLE_EN:SAMPLE_DE;
// ---------- skills / SRS ----------
const isSeen=w=>!!w.seen||Object.values(w.s).some(x=>x.n>0);
const SEED={man:'dr',rev:'rd',mist:'mis',ord:'rd',aud:'rd'},TYP={man:1,rev:1,mist:1,ord:1},seen=w=>Object.values(w.s).some(x=>x.n>0);
const sk=(w,k)=>w.s[k]||(w.s[k]={n:0,ok:0,st:Math.max(0,Math.min(3,(w.s[SEED[k]]||{st:0}).st)-1),ease:2.5,int:0,due:0});
const SL={new:'New',learning:'Learning',fresh:'Just learned',review:'Needs review',known:'Known',ign:'Already known'},SC={new:'#6b6585',learning:'#ffb02e',fresh:'#38d9e6',review:'#ff5478',known:'#45d6a3',ign:'#8f8aa8'},SH={new:'not seen yet',learning:'still in short repeats',fresh:'learned, interval under 7 days',review:'time to repeat',known:'interval 7+ days',ign:'marked as known, never asked'};
const status=w=>{if(w.ign)return'ign';const k=Object.values(w.s).filter(x=>x.n>0);if(!k.length)return'new';if(k.some(x=>x.st<3))return'learning';if(k.some(x=>x.due<=Date.now()))return'review';return k.every(x=>x.int>=7)?'known':'fresh'};
const nxt=w=>{if(w.ign)return'';const k=Object.values(w.s).filter(x=>x.n>0);if(!k.length)return'';const m=Math.min(...k.map(x=>x.due))-Date.now();if(m<=0)return'due now';const h=m/36e5;return'next: '+(h<1?Math.max(1,Math.round(m/6e4))+' min':h<24?Math.round(h)+' h':Math.round(h/24)+' d')};
const isDue=w=>{if(w.ign)return false;const k=Object.values(w.s).filter(x=>x.n>0);return k.some(x=>x.due<=Date.now())};
function apply(w,m,ok){const s=sk(w,m),t=S.types[m]||(S.types[m]={n:0,ok:0}),d=S.log[today()]||(S.log[today()]={n:0,ok:0}),early=ok&&s.st>0&&s.due>Date.now();
 s.n++;s.last=Date.now();t.n++;d.n++;if(ok){s.ok++;t.ok++;d.ok++;if(!early){s.st++;s.int=s.st<=IV.length?IV[s.st-1]:Math.round(s.int*s.ease);s.ease=Math.min(3,s.ease+.05);s.due=Date.now()+s.int*DAY}}
 else{s.st=0;s.int=0;s.ease=Math.max(1.3,s.ease-.2);s.due=Date.now()+600000;w.err=(w.err||0)+1;w.lastErr=Date.now()}save()}
const streak=()=>{let n=0,d=new Date();if(!(S.log[today()]||{}).n)d=new Date(Date.now()-DAY);for(;;){const k=d.toISOString().slice(0,10);if((S.log[k]||{}).n){n++;d=new Date(d-DAY)}else return n}};
// ---------- question engine ----------
const norm=s=>s.toLowerCase().replace(/[.,!?;:"'’()]/g,'').replace(/\s+/g,' ').trim();
const nrm=s=>norm(String(s).replace(/[\u00a0\u2009\u200b]/g,' ').replace(/[\u2010-\u2015]/g,'-')).replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').replace(/ё/g,'е');
const lev=(a,b)=>{const d=Array.from({length:a.length+1},(_,i)=>[i]);for(let j=1;j<=b.length;j++)d[0][j]=j;for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+(a[i-1]===b[j-1]?0:1));return d[a.length][b.length]};
const gap=w=>w.ex.replace(new RegExp(w.base.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i'),'_____');
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
const applicable=(w,m)=>TYP[m]&&!seen(w)?false:m==='art'?!!w.art:m==='ord'?ordOk(w):m==='pl'?(w.pos==='noun'&&!!w.pl):(m==='mis'||m==='mist')?(!!w.ex&&w.ex.toLowerCase().includes(w.base.toLowerCase())):m==='aud'?(S.words.length>=4&&typeof speechSynthesis!=='undefined'):['dr','rd'].includes(m)?S.words.length>=4:true;
// distractors: same part of speech / article / category, similar length, ending and spelling, plus words the user has confused before
function lure(w,key,pool){const a=String(w[key]).toLowerCase(),ln=a.length,wc=a.split(/\s+/).length;
 return pool.map(x=>{const t=String(x[key]).toLowerCase();let sc=Math.random()*1.5;
  if(x.pos===w.pos)sc+=6;if(w.art&&x.art===w.art)sc+=2.5;if(w.cat&&x.cat===w.cat)sc+=1.5;
  sc-=Math.abs(t.length-ln)/4;if(t.split(/\s+/).length===wc)sc+=1;if(t.slice(-2)===a.slice(-2))sc+=2;if(t[0]===a[0])sc+=1;
  if(t.length<20&&a.length<20)sc+=Math.max(0,3-lev(a,t)/3);
  sc+=Math.min(6,((S.conf[w.id+'|'+x.id]||0)+(S.conf[x.id+'|'+w.id]||0))*3);return[x,sc]}).sort((p,q)=>q[1]-p[1]).map(p=>p[0])}
// meanings of a word = set of normalized Russian translations (split by , ; /, parentheses removed)
const mean=w=>new Set(String(w.ru||'').replace(/\([^)]*\)/g,' ').split(/[,;\/]/).map(x=>nrm(x).trim()).filter(Boolean));
// two different words are 'the same' if they share at least one Russian meaning (synonyms)
const same=(a,b)=>{const A=mean(a);for(const t of mean(b))if(A.has(t))return true;return false};
// ---- typed-answer checking & exercise weights ----
// BIAS = relative weight of each exercise type in Blitz. Higher rd / rev = more Russian→German. Tweak freely.
const BIAS={dr:3.5,rd:8.2,aud:1.5,mis:1.3,rev:3,man:.9,mist:.5,ord:2.8,art:3.6,pl:3.2}; // ord = sentence building (also capped at ~15% of a session)
const fold=s=>s.replace(/ae/g,'a').replace(/oe/g,'o').replace(/ue/g,'u');
const strip=s=>String(s).replace(/\([^)]*\)/g,' ').replace(/\b(etw|jdn|jdm|jmdn|jmd)\./gi,' ');
// every accepted spelling of a string: with/without (optional parts), etw./jdn. placeholders, "sich", leading article; Russian: each comma/;-separated meaning
function vars(s,rus){const out=new Set(),add=x=>{x=nrm(x).replace(/\s+/g,' ').trim();if(x)out.add(x)};s=String(s||'');
 add(s);add(strip(s));
 if(rus)strip(s).split(/[,;\/]/).forEach(add);
 else[s,strip(s)].forEach(b=>{add(b.replace(/^sich\s+/i,''));add(b.replace(/^(der|die|das)\s+/i,''))});
 return[...out]}
const altOf=(w,m)=>(w.alt&&w.alt[m])||[];
const strictOther=(w,v)=>S.words.some(x=>x.id!==w.id&&[x.de,x.base].some(t=>t&&nrm(t)===v));
// ---- sentence building (word order) ----
const ordWords=w=>String(w.ex||'').trim().split(/\s+/).filter(Boolean);
const ordOk=w=>{const n=ordWords(w).length;return n>=3&&n<=16};
// blocks sentence building after it was used in the previous question or took ~15% of the session
const ordBlocked=()=>!!ses&&(ses.lastM==='ord'||(ses.ordN||0)>=Math.max(1,Math.round((ses.qs.length||0)*.2)));
function ordTok(w){const raw=ordWords(w),m=(raw[raw.length-1]||'').match(/[.!?…]+$/),end=m?m[0]:'';
 const disp=raw.map((t,i)=>{let d=t.replace(/[.!?…]+$/,'');if(i===0&&d&&!S.words.some(x=>x.art&&nd(x.base)===nd(d.replace(/[,;:]+$/,''))))d=d.charAt(0).toLowerCase()+d.slice(1);return d});return{disp,end}}
function ordUI(q){const used=new Set(q.sel);
 return`<div class="ordA" id="oa">${q.sel.map((k,j)=>`<button class="chip" onclick="ordUn(${j})">${e(q.toks[k].t)}</button>`).join('')}${q.sel.length?`<span class="ordp">${e(q.end)}</span>`:'<span class="lbl">Tap the words below in the right order…</span>'}</div><div class="ordB">${q.toks.map((o,k)=>used.has(k)?`<span class="chip ghost">${e(o.t)}</span>`:`<button class="chip" onclick="ordAdd(${k})">${e(o.t)}</button>`).join('')}</div><div class="row" style="justify-content:center;margin-top:14px"><button onclick="ordClear()">Reset</button><button class="pri" onclick="ordCheck()" ${q.sel.length===q.toks.length?'':'disabled'}>Check (Enter)</button></div>`}
function ordRender(){const q=ses.qs[ses.i],b=$('#ow');if(q&&b)b.innerHTML=ordUI(q)}
function ordAdd(k){const q=ses.qs[ses.i];if(!q||!q.ord||ses.done||q.sel.includes(k))return;q.sel.push(k);ordRender()}
function ordUn(j){const q=ses.qs[ses.i];if(!q||!q.ord||ses.done||j<0||j>=q.sel.length)return;q.sel.splice(j,1);ordRender()}
function ordClear(){const q=ses.qs[ses.i];if(!q||!q.ord||ses.done)return;q.sel=[];ordRender()}
function ordCheck(){const q=ses.qs[ses.i];if(!q||!q.ord||ses.done||q.sel.length!==q.toks.length)return;
 const raw=q.sel.map(k=>q.toks[k].t).join(' ')+q.end,v=nrm(raw).replace(/\s+/g,' ').trim();ses.last=raw;ses.near=0;ses.artw=0;ses.note='';
 const ok=q.acc.includes(v);if(ok&&v!==q.acc[0])ses.note='A different valid word order — also accepted';
 finish(ok);const a=$('#oa');if(a)a.classList.add(ok?'ok':'bad')}
function build(w,m){const o={w,m};const others=shuf(S.words.filter(x=>x.id!==w.id));
 const choice=(key,hint,pool)=>{const seen=new Set([nd(w[key])]),d=[];for(const x of lure(w,key,(pool||others).filter(y=>y[key]&&!same(w,y)))){if(!seen.has(nd(x[key]))&&d.length<3){seen.add(nd(x[key]));d.push(x)}}if(d.length<3)return null;
  o.opts=shuf([w,...d]).map(x=>({t:x[key],id:x.id}));o.ans=w[key];o.hint=hint;return o};
 if(m==='dr'){o.big=w.de;return choice('ru','What does this word mean?')}
 if(m==='aud'){o.big='🔊';return choice('de','Listen and choose the word you hear')}
 if(m==='rd'){o.big=w.ru;return choice('de','Choose the '+LN+' equivalent')}
 if(m==='art'){o.big=w.base;o.opts=['der','die','das'].map(t=>({t}));o.ans=w.art;o.hint='Which article? Look at the colour';return o}
 if(m==='man'){o.big=w.de;o.typed=1;o.hint='Type the Russian translation';o.acc=[...new Set([...vars(w.ru,1),...altOf(w,'man')])];o.ans=w.ru;return o}
 if(m==='rev'){o.big=w.ru;o.typed=1;o.hint='Type the '+LN+' word';o.acc=[...new Set([w,...S.words.filter(x=>x.id!==w.id&&same(w,x))].flatMap(x=>[...vars(x.de),...vars(x.base)]).concat(altOf(w,'rev')))];o.ans=w.de;return o}
 if(m==='ord'){const T=ordTok(w),toks=T.disp.map((t,i)=>({t,i})).filter(x=>x.t);if(toks.length<3)return null;let sh=shuf(toks),n=0;while(n++<6&&sh.every((x,k)=>x.i===toks[k].i))sh=shuf(toks);
  o.ord=1;o.toks=sh;o.sel=[];o.end=T.end;o.big=w.exRu||'« '+w.ru+' »';o.hint=w.exRu?'Build the '+LN+' sentence · key word: '+w.ru:'Arrange the words into a sentence';o.acc=[...new Set([nrm(w.ex),...altOf(w,'ord')])];o.ans=w.ex;return o}
 if(m==='mist'){o.big=gap(w);o.typed=1;o.hint='Type the missing word · meaning: '+w.ru;o.acc=[...new Set([...vars(w.base),...altOf(w,'mist')])];o.ans=w.base;return o}
 if(m==='pl'){o.big=(w.art?w.art+' ':'')+w.base;return choice('pl','Pick the plural form',others.filter(x=>x.pos==='noun'))}
 if(m==='mis'){const re=new RegExp(w.base.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'i');o.big=w.ex.replace(re,'_____');return choice('base','Fill the gap · meaning: '+w.ru)}}
const PAIR={dr:'rd',man:'rev'}; // after German→Russian prefer Russian→German; not the other way round
function makeSession(c){const now=Date.now();
 const cand=S.words.filter(w=>!w.ign&&(!c.only||c.only.includes(w.id))&&c.types.some(m=>applicable(w,m))).map(w=>{const a=Object.values(w.s).filter(x=>x.n),nw=!a.length,due=a.some(x=>x.due<=now),er=a.length?1-a.reduce((p,x)=>p+x.ok,0)/a.reduce((p,x)=>p+x.n,0):0;
  const lr=a.some(x=>x.st<3),sl=a.some(x=>now-(x.last||now)>14*DAY);let wt=1+(sl?1.5:0)+(nw?2:0)+(due?4:0)+(lr?2:0)+er*3;if(!nw&&!due&&!lr)wt=.3+er*2;if(c.src==='new'&&!nw)wt=0;if(c.src==='seen'&&!isSeen(w))wt=0;if(c.src==='seen'&&wt>0&&wt<1)wt=1+er*2;if(c.src==='due'&&!due&&!nw)wt=.2;return{w,wt:wt>0&&c.types.includes('ord')&&ordOk(w)&&isSeen(w)?wt*1.4:wt,nw}}).filter(x=>x.wt>0);
 const qs=[];let nn=0;while(qs.length<c.n&&cand.length){let r=Math.random()*cand.reduce((p,x)=>p+x.wt,0),i=0;for(;i<cand.length-1;i++){r-=cand[i].wt;if(r<=0)break}{const c0=cand.splice(i,1)[0];if(c0.nw&&nn>=8)continue;if(c0.nw)nn++;qs.push({w:c0.w})}}
 return{qs,i:0,ok:0,tot:0,miss:[],done:false,types:c.types,rq:{},rep:{},intro:{}}}
// picks the exercise type when the question is shown; prefers the opposite direction to the last one used for this word
const tw=(w,m)=>(m==='rev'?1.2:.5)+Math.min(3,(w.s[SEED[m]]||{st:0}).st)*1.3;
function order(w,ts){const ok=ts.filter(m=>applicable(w,m)&&!(m==='ord'&&ts.length>1&&ordBlocked())).map(m=>[m,Math.random()**(1/(TYP[m]&&m!=='ord'?tw(w,m)*(BIAS[m]||1):(BIAS[m]||1)))]).sort((a,b)=>b[1]-a[1]).map(x=>x[0]),p=PAIR[w.lm];if(p&&ok.includes(p)&&Math.random()<.7)ok.unshift(p);else ok.sort((a,b)=>(a===w.lm)-(b===w.lm));if(w.art&&ok.includes('art')&&w.lm!=='art'&&Math.random()<.08)ok.unshift('art');return ok}
function sayAll(w,m){if((m==='mis'||m==='ord')&&w.ex)say(w.ex);else{say(w.de);if(w.ex)say(w.ex,1)}}
// speech queue: AU = utterances still playing; SQ = actions waiting until speech has finished
const AU=new Set(),SQ=[];
const speaking=()=>AU.size>0;
const spoken=()=>{if(AU.size)return;SQ.splice(0).forEach(f=>f())};
function say(t,add,rate){try{const vs=speechSynthesis.getVoices(),u=new SpeechSynthesisUtterance(t),v=vs.find(x=>S.voice&&x.voiceURI===S.voice)||vs.find(x=>LRX.test(x.lang));u.lang=v?v.lang:(LANG==='en'?'en-US':'de-DE');if(v)u.voice=v;u.rate=rate||.85;if(!add){AU.forEach(x=>x.cut=1);speechSynthesis.cancel();AU.clear()}
 AU.add(u);const d=()=>{clearTimeout(u.tm);if(AU.delete(u))spoken()};u.onstart=()=>{u.t0=performance.now()};u.onboundary=ev=>{if(!ev.name||ev.name==='word'){u.ci=ev.charIndex;u.tb=performance.now()}};u.onend=()=>{learnCps(u);d()};u.onerror=d;u.tm=setTimeout(d,15000); // failsafe if the browser never fires onend
 speechSynthesis.speak(u)}catch(x){AU.clear();spoken()}}
// German voices available in this browser, for the voice picker in Settings
const voiceOpts=()=>{let vs=[];try{vs=speechSynthesis.getVoices().filter(x=>LRX.test(x.lang))}catch(x){}
 return'<option value="">Automatic</option>'+vs.map(x=>`<option value="${e(x.voiceURI)}" ${S.voice===x.voiceURI?'selected':''}>${e(x.name)} (${e(x.lang)})</option>`).join('')+(vs.length?'':'<option disabled>No '+LN+' voices found</option>')};
try{speechSynthesis.addEventListener('voiceschanged',()=>{const s=$('#vs');if(s)s.innerHTML=voiceOpts()})}catch(x){}
// runs fn right away if nothing is playing, otherwise after the current speech has finished
// How long the speech has left, estimated from the text length, the measured speaking speed and (where the browser reports them) word boundaries
let CPS=15;try{CPS=Math.min(30,Math.max(6,+localStorage.getItem('vocabflow.cps')||15))}catch(x){}
const TAIL=1500; // ms: "Next" / "Got it" go ahead when this much (or less) of the audio is left, instead of waiting for the very end
const estMs=(n,r)=>n/(CPS*r)*1000;
function left(){const n=performance.now();let r=0;AU.forEach(u=>{const L=u.text.length,p=u.rate||1;r+=u.t0==null?estMs(L,p):u.ci!=null?Math.max(0,estMs(L-u.ci,p)-(n-u.tb)):Math.max(0,estMs(L,p)-(n-u.t0))});return r}
function learnCps(u){if(u.cut||u.t0==null||u.text.length<6)return;const t=(performance.now()-u.t0)/1e3;if(t<.3)return;const c=u.text.length/t/(u.rate||1);if(c>5&&c<40){CPS=CPS*.7+c*.3;try{localStorage.setItem('vocabflow.cps',CPS.toFixed(2))}catch(x){}}}
let GT=0;
// runs fn right away if nothing is playing, otherwise as soon as only the last TAIL ms of the speech are left
function go(fn){if(!speaking())return fn();if(!ses||ses.pend)return;const s=ses,i=s.i,m=$('#main');s.pend=1;if(m)m.classList.add('wt');
 let fin=0;const run=()=>{if(fin)return;fin=1;clearInterval(GT);const k=SQ.indexOf(run);if(k>=0)SQ.splice(k,1);s.pend=0;if(m)m.classList.remove('wt');if(ses===s&&s.i===i)fn()};
 SQ.push(run);clearInterval(GT);GT=setInterval(()=>{if(!speaking()||left()<=TAIL)run()},80)}
function stopSpeech(){clearInterval(GT);try{AU.forEach(x=>x.cut=1);speechSynthesis.cancel()}catch(x){}AU.clear();SQ.length=0;if(ses)ses.pend=0;const m=$('#main');if(m)m.classList.remove('wt')}
// ---------- "I already know this word" ----------
function toastU(msg,fn){document.querySelectorAll('.toast.u').forEach(x=>x.remove());const t=document.createElement('div');t.className='toast u';const a=document.createElement('span');a.textContent=msg;const b=document.createElement('button');b.textContent='↺ Undo';b.onclick=()=>{t.remove();fn()};t.append(a,b);document.body.append(t);setTimeout(()=>t.remove(),7000)}
// from a question / intro / feedback screen: the word is never asked again (progress is kept), the session moves on
function knowIt(){const q=ses&&ses.qs[ses.i];if(!q)return;const w=q.w;w.ign=Date.now();save();stopSpeech();
 ses.qs=ses.qs.filter((x,j)=>j<=ses.i||x.w!==w);ses.show=0;ses.i++;ses.done=false;ses.rated=0;
 toastU('“'+w.de+'” — marked as known',()=>unknow(w.id));quiz()}
// undo from the session toast: back to the learning list and back into this session in a few questions
function unknow(id){const w=S.words.find(x=>x.id===id);if(!w)return;delete w.ign;save();toast('Back in the learning list');if(ses&&ses.on&&ses.qs[ses.i]&&!ses.qs.slice(ses.i).some(x=>x.w===w))later({w},2,4);if($('#lst'))lst()}
// from the word list: toggle known / unknown
function setKnown(id,on){const w=S.words.find(x=>x.id===id);if(!w)return;if(on)w.ign=Date.now();else delete w.ign;save();if($('#lst'))lst();
 if(on)toastU('“'+w.de+'” — marked as known',()=>setKnown(id,0));else toast('Back in the learning list')}
const ho=t=>e(t).replace(/^(der|die|das)\b/,m=>`<span class="${m}">${m}</span>`);
function prep(it){if(it.big)return it;for(const m of it.m?[it.m]:(ses.mode==='learn'?learnOrder(it.w):order(it.w,ses.types))){const q=build(it.w,m);if(q){Object.assign(it,q);it.m=m;it.w.lm=m;ses.lastM=m;if(m==='ord'&&!it.retry)ses.ordN=(ses.ordN||0)+1;return it}}return null}
function later(it,min,max){ses.qs.splice(Math.min(ses.i+1+min+(Math.random()*(max-min+1)|0),ses.qs.length),0,it)}
// ---------- views ----------
const V={};let ses=null,cfg={n:20,types:Object.keys(TN),src:'mixed'};
function startSession(c){c.mode=c.mode||(c.src==='due'?'review':'learn');Object.assign(cfg,c);cfg.only=c.only||null;if(S.words.length<2){toast('Add at least a few words first');location.hash='vocab';return}
 ses=cfg.mode==='review'?makeReview(cfg):makeSession(cfg);if(!ses.qs.length){ses=null;toast(cfg.mode==='review'?'Nothing is due for review':'No suitable questions. Typing is only for words you have already practiced');return}ses.mode=cfg.mode;ses.ev=[];ses.t0=Date.now();ses.snap=snapshot();location.hash=cfg.mode;ses.on=1;render()}
function render(){const h=(location.hash||'#overview').slice(1);let DUE=0;try{DUE=S.words.filter(isDue).length}catch(x){}const v=(V[h]||V.overview);
 $('#nav').innerHTML=`<div class="logo">${LOGO}</div>`+[['overview','Home'],['learn','Learn'],['review','Review'],['grammar','Grammar'],['vocab','Words'],['settings','Settings']].map(([k,l])=>`<a href="#${k}" class="${h===k?'on':''}"><span>${NI[k]}</span>${l}${k==='review'&&DUE?`<b class="nb">${DUE>99?'99+':DUE}</b>`:''}</a>`).join('')+`<div class="me">● Guest learner</div>`;
 const tp=$('#top');if(tp)tp.innerHTML=LOGO;const m=$('#main');m.style.animation='none';m.offsetWidth;m.style.animation='';v()}
function empty(){return`<div class="card empty">Your library is empty.<br><br><button class="pri" onclick="location.hash='vocab'">Import vocabulary</button></div>`}
V.overview=()=>{const W=S.words,D=W.filter(isDue),c={};Object.keys(SL).forEach(k=>c[k]=0);W.forEach(w=>c[status(w)]++);const td=S.log[today()]||{n:0},pc=Math.min(100,td.n/S.goal*100),h=new Date().getHours(),hard=W.filter(w=>!w.ign&&(w.err||0)>=2&&status(w)!=='known').sort((a,b)=>b.err-a.err).slice(0,5);
 $('#main').innerHTML=`<h1>${(LANG==='en'?['Good morning','Good afternoon','Good evening']:['Guten Morgen','Guten Tag','Guten Abend'])[h<12?0:h<18?1:2]}</h1><p class="sub">${W.length} words · ${D.length} due for review · ${W.filter(w=>!w.ign&&isSeen(w)).length} seen</p>
 <div class="card" style="margin-bottom:14px"><div class="lbl">Today: ${td.n} / ${S.goal}</div><div class="bar" style="margin:8px 0 16px"><i style="width:${pc}%"></i></div><div class="row hero"><button class="${D.length?'':'pri'}" onclick="startSession({n:20,src:'mixed',mode:'learn',types:Object.keys(TN)})">Start learning</button><button class="${D.length?'pri':''}" onclick="startSession({n:20,src:'due',mode:'review'})">Review${D.length?' · '+D.length+' due':''}</button></div><div class="qa fa"><button class="qb" onclick="startSession({n:20,src:'seen',mode:'learn',types:Object.keys(TN)})"><i>↻</i>Repeat seen (${W.filter(w=>!w.ign&&isSeen(w)).length})</button><button class="qb" onclick="location.hash='vocab'"><i>+</i>Add words</button><button class="qb" onclick="location.hash='grammar'"><i>¶</i>Grammar</button></div></div>
 <div class="card" style="margin-bottom:14px"><h2>Your words</h2><div class="seg">${Object.keys(SL).map(k=>c[k]?`<i style="width:${c[k]/W.length*100}%;background:${SC[k]}"></i>`:'').join('')}</div><div class="row" style="gap:6px;margin-top:12px">${Object.keys(SL).map(k=>`<button class="sp" style="margin:0" title="${SH[k]}" onclick="fs='${k}';location.hash='vocab'"><b style="color:${SC[k]}">●</b> ${SL[k]} ${c[k]}</button>`).join('')}</div></div>
 ${statCards()}${skillCard()}${hard.length?`<div class="card"><h2>Hardest words</h2><table>${hard.map(w=>`<tr><td>${wd(w)}</td><td>${e(w.ru)}</td><td class="lbl">${w.err}× wrong</td></tr>`).join('')}</table></div>`:''}`};
function look(t){t=t.toLowerCase();if(!IX)IX=S.words.map(w=>{const b=nd(w.base);return{w,k:[nd(w.de),b,...(w.pl?w.pl.split(/[,;\/]/).map(nd):[])],st:w.pos==='verb'?b.replace(LANG==='en'?/e$/:/e?n$/,''):b}});
 const h=IX.find(x=>x.k.includes(t))||IX.find(x=>x.st.length>=4&&!x.st.includes(' ')&&t.startsWith(x.st)&&t.length<=x.st.length+3);return h&&h.w}
const PFX='zusammen,zurück,heraus,herein,hinaus,hinein,vorbei,weiter,entgegen,auseinander,dabei,empor,kennen,bereit,statt,teil,fest,fern,frei,weg,hoch,nieder,vor,nach,mit,auf,aus,ein,bei,ab,an,zu,um,los,her,hin,rein,raus,dar'.split(',');
function exHtml(txt,w){const parts=String(txt).split(/(\p{L}+(?:[-'’]\p{L}+)*)/u),tk=[],g={};parts.forEach((p,i)=>{if(i%2)tk.push(i)});const lo=i=>parts[i].toLowerCase();
 if(!SV)SV=LANG==='en'?[]:S.words.filter(x=>x.pos==='verb').map(x=>{const b=x.base.toLowerCase(),p=PFX.find(q=>b.startsWith(q)&&b.length-q.length>=3);return p&&{w:x,p,st:b.slice(p.length).replace(/e?n$/,'')}}).filter(Boolean);
 // separable verbs: particle stands alone at the end of the clause, the finite verb is earlier in the sentence
 SV.forEach(v=>{const pi=tk.filter(i=>lo(i)===v.p&&/^\s*([.,!?;:]|$)/.test(parts[i+1]||'')).pop();if(pi==null)return;
  let fi=null,best=9;tk.forEach(i=>{if(i>=pi||g[i])return;const t=lo(i);if(t.length<3||t[0]!==v.st[0])return;const d=lev(t,v.st);if(d<=3&&d<best){best=d;fi=i}});if(fi!=null)g[fi]=g[pi]=v});
 return parts.map((p,i)=>{if(i%2===0)return e(p);const v=g[i];if(v)return`<span class="tr sep${v.w===w?' hl':''}" data-tr="${e(v.w.de+' — '+v.w.ru)}">${e(p)}</span>`;
  const h=look(p);if(h)return`<span class="${h===w?'tr hl':'tr'}" data-tr="${e(h.ru)}">${e(p)}</span>`;
  return p.length>1?`<span class="tr" data-w="${e(p)}">${e(p)}</span>`:e(p)}).join('')}
const wd=w=>w.art?`<span class="${w.art}">${w.art}</span> ${e(w.base)}`:e(w.de);
let LASTMISS=[];const fmtD=ms=>{const t=Math.round(ms/1000);return Math.floor(t/60)+':'+String(t%60).padStart(2,'0')};
const SG={Recognition:['dr'],'Reverse recognition':['rd'],'Active recall':['man','rev'],Spelling:['rev','mist'],Article:['art'],Plural:['pl'],Context:['mis','mist'],Listening:['aud'],'Sentence building':['ord']},SIMP={aud:'dr',rev:'rd',man:'dr',mist:'mis',rd:'dr'},RT=['Again','Hard','Good','Easy'];
const LO=['dr','rd','aud','rev','ord','art','pl','mis','mist'],PRE={aud:'dr',rd:'dr',rev:'rd',art:'dr',pl:'dr',mis:'dr',mist:'mis',ord:'rd'};
const snapshot=()=>{const o={};S.words.forEach(w=>Object.entries(w.s).forEach(([m,x])=>o[w.id+'|'+m]=x.st));return o};
// Learn: weak skills first, then the next unmastered stage; mastered skills (2 in a row) are skipped
function learnOrder(w){const A=LO.filter(m=>ses.types.includes(m)&&applicable(w,m)&&!(m==='ord'&&ordBlocked())),X=m=>w.s[m]||{n:0,ok:0,st:0,due:0},ms=m=>X(m).st>=2,pre=m=>!PRE[m]||X(PRE[m]).n>0;
 const weak=A.filter(m=>X(m).n>0&&!ms(m)).sort((p,q)=>X(p).st-X(q).st||(X(q).n-X(q).ok)-(X(p).n-X(p).ok)),
 nxt=A.filter(m=>!weak.includes(m)&&!ms(m)&&pre(m)),done=A.filter(m=>ms(m)&&X(m).n>0).sort((p,q)=>X(p).due-X(q).due),L=[...weak,...nxt,...done];
 if(L.length>1&&L[0]===w.lm&&Math.random()<.6)L.push(L.shift());if(A.includes('rev')&&X('rd').n>0&&w.lm!=='rev'&&Math.random()<.3){const i=L.indexOf('rev');if(i>0)L.unshift(L.splice(i,1)[0])}if(A.includes('ord')&&X('rd').n>0&&w.lm!=='ord'&&Math.random()<.3){const i=L.indexOf('ord');if(i>0)L.unshift(L.splice(i,1)[0])}return L.length?L:order(w,ses.types)}
function makeReview(c){const now=Date.now(),eod=new Date().setHours(23,59,59,999),L=[];
 S.words.forEach(w=>w.ign||Object.entries(w.s).forEach(([m,x])=>{if(x.n>0&&x.due<=eod&&applicable(w,m))L.push({w,m,due:x.due,lap:x.n-x.ok})}));
 L.sort((a,b)=>(a.due<=now?0:1)-(b.due<=now?0:1)||a.due-b.due||b.lap-a.lap);const ex=shuf(S.words.filter(w=>!w.ign&&ordOk(w)&&(w.s.rd||{}).n>0&&!(w.s.ord||{}).n&&!L.some(x=>x.w===w&&x.m==='ord'))).slice(0,Math.max(1,Math.round(c.n*.15))),pool=L.slice(0,Math.max(0,c.n-ex.length)),qs=[];
 while(pool.length){let i=pool.findIndex(x=>!qs.length||x.w.id!==qs[qs.length-1].w.id);if(i<0)i=0;const x=pool.splice(i,1)[0];qs.push({w:x.w,m:x.m})}
 ex.forEach(w=>qs.splice(Math.random()*(qs.length+1)|0,0,{w,m:'ord'}));
 return{qs,i:0,ok:0,tot:0,miss:[],done:false,types:Object.keys(TN),rq:{},rep:{},intro:{}}}
// SM-2-inspired grading: 0 Again, 1 Hard, 2 Good, 3 Easy
function applyG(w,m,g){const s=sk(w,m),t=S.types[m]||(S.types[m]={n:0,ok:0}),d=S.log[today()]||(S.log[today()]={n:0,ok:0}),now=Date.now();s.n++;s.last=now;t.n++;d.n++;
 if(g===0){s.st=0;s.int=0;s.ease=Math.max(1.3,s.ease-.2);s.due=now+6e5;w.err=(w.err||0)+1;w.lastErr=now}
 else{s.ok++;t.ok++;d.ok++;s.st++;s.int=s.int<1?[0,1,3,7][g]:Math.max(1,Math.round(s.int*(g===1?1.2:s.ease*(g===3?1.3:1))));s.ease=Math.min(3.2,Math.max(1.3,s.ease+[0,-.15,0,.15][g]));s.due=now+s.int*DAY}save()}
const rateHtml=ok=>`<div class="lbl" style="margin:10px 0 6px">How well did you remember it?</div><div class="row rt">${RT.map((n,g)=>`<button class="${(ok?g===2:g===0)?'pri':''}" ${!ok&&g>0?'disabled':''} onclick="rate(${g})">${g+1} · ${n}</button>`).join('')}</div>`;
function rate(g){const q=ses.qs[ses.i],w=q.w;if(!ses.done||ses.rated)return;ses.rated=1;if(!q.retry){applyG(w,q.m,g);ses.tot++;if(g>0)ses.ok++;else ses.miss.push(q);ses.ev.push({id:w.id,m:q.m,g})}
 if(g===0&&(ses.rq[w.id]=(ses.rq[w.id]||0)+1)<=2)later({w,m:q.m,retry:1},3,5);next()}
function practiceMistakes(){startSession({n:30,src:'mixed',mode:'learn',types:Object.keys(TN),only:LASTMISS})}
function statCards(){const W=S.words,cn=k=>W.filter(w=>status(w)===k).length,T=Object.values(S.types).reduce((p,x)=>({n:p.n+x.n,ok:p.ok+x.ok}),{n:0,ok:0}),
 days=[...Array(7)].map((_,i)=>{const d=new Date(Date.now()-(6-i)*DAY),k=d.toISOString().slice(0,10);return{l:d.toLocaleDateString('en',{weekday:'short'}),n:(S.log[k]||{}).n||0}}),mx=Math.max(1,...days.map(x=>x.n)),
 C=(l,v)=>`<div class="card"><div class="lbl">${l}</div><div class="big">${v}</div></div>`;
 return`<div class="g">${C('Total words',W.length)}${C('Mastered',cn('known'))}${C('Learning',cn('learning'))}${C('Due for review',W.filter(isDue).length)}${C('Accuracy',T.n?Math.round(T.ok/T.n*100)+'%':'—')}${C('Streak',streak()+' d')}</div><div class="card" style="margin-bottom:14px"><h2>This week</h2><div class="wk">${days.map(x=>`<div><i style="height:${Math.round(x.n/mx*80)}px"></i>${x.l}<br>${x.n}</div>`).join('')}</div></div>`}
function skillCard(){const r=Object.entries(SG).map(([n,ks])=>{let a=0,o=0,m=0,c=0;S.words.forEach(w=>ks.forEach(k=>{const x=w.s[k];if(x&&x.n){a+=x.n;o+=x.ok;c++;if(x.st>=3)m++}}));const p=a?Math.round(o/a*100):0;return`<tr><td>${n}</td><td style="width:38%"><div class="bar"><i style="width:${p}%"></i></div></td><td class="lbl">${a?p+'% · '+m+'/'+c+' mastered':'—'}</td></tr>`}).join('');return`<div class="card" style="margin-bottom:14px"><h2>Progress by skill</h2><table>${r}</table></div>`}
V.learn=()=>{if(ses&&ses.on&&ses.mode==='learn')return quiz();if(!S.words.length)return $('#main').innerHTML='<h1>Learn</h1>'+empty();
 const all=Object.keys(TN).every(k=>cfg.types.includes(k)),src=['mixed','new','seen'].includes(cfg.src)?cfg.src:'mixed';
 $('#main').innerHTML=`<h1>Learn</h1><p class="sub">New words first, weak skills come back sooner, mastered ones are skipped.</p><div class="card glass"><div class="row"><label>Questions <select id="cn">${[10,20,30,50].map(n=>`<option ${n==cfg.n?'selected':''}>${n}</option>`).join('')}</select></label><label>Words <select id="cs"><option value="mixed">Mixed</option><option value="new">New only</option><option value="seen">Seen before only</option></select></label></div><details style="margin-top:14px"${all?'':' open'}><summary class="lbl" style="cursor:pointer">Exercise types (all by default)</summary><div class="row" style="margin-top:8px">${Object.entries(TN).map(([k,v])=>`<label><input type="checkbox" class="ct" value="${k}" ${cfg.types.includes(k)?'checked':''}> ${v}</label>`).join('')}</div><p class="lbl">Typing and sentence building only appear for words you have already seen; sentence building also needs an example sentence (3–16 words). Words with a usable example now: ${S.words.filter(ordOk).length}.</p></details><p><button class="pri" id="go">Start (Enter)</button></p></div>`;
 $('#cs').value=src;$('#go').onclick=()=>{const t=[...document.querySelectorAll('.ct:checked')].map(x=>x.value);if(!t.length)return toast('Pick at least one type');startSession({n:+$('#cn').value,src:$('#cs').value,mode:'learn',types:t})}};
V.review=()=>{if(ses&&ses.on&&ses.mode==='review')return quiz();const eod=new Date().setHours(23,59,59,999);let od=0,td=0;S.words.forEach(w=>w.ign||Object.values(w.s).forEach(x=>{if(x.n>0){if(x.due<=Date.now())od++;else if(x.due<=eod)td++}}));
 $('#main').innerHTML=`<h1>Review</h1><p class="sub">Spaced repetition: answer, then rate your recall. Every skill of every word has its own schedule.</p><div class="g"><div class="card"><div class="lbl">Overdue</div><div class="big">${od}</div></div><div class="card"><div class="lbl">Due later today</div><div class="big">${td}</div></div></div><div class="card glass"><div class="row"><label>Items <select id="cn">${[10,20,30,50].map(n=>`<option ${n==cfg.n?'selected':''}>${n}</option>`).join('')}</select></label></div><p><button class="pri" id="go" ${od+td?'':'disabled'}>Start review (Enter)</button></p>${od+td?'':'<p class="lbl">Nothing is due yet. Practice in Learn to build your review schedule.</p>'}</div>`;
 $('#go').onclick=()=>startSession({n:+$('#cn').value,src:'due',mode:'review'})};
V.blitz=()=>{location.hash='learn'}; // old bookmarks
function quiz(){while(ses.qs[ses.i]&&(ses.qs[ses.i].w.ign||!prep(ses.qs[ses.i])))ses.qs.splice(ses.i,1);const q=ses.qs[ses.i];if(!q)return summary();if(!q.w.seen){q.w.seen=Date.now();save()}if(ses.mode==='learn'&&S.intro!==0&&!q.retry&&!seen(q.w)&&!ses.intro[q.w.id]){ses.intro[q.w.id]=1;return intro(q.w)}
 $('#main').innerHTML=`<div class="row" style="justify-content:space-between"><span class="lbl">${ses.i+1} / ${ses.qs.length}</span><button onclick="ses=null;render()">End</button></div><div class="bar" style="margin:8px 0 14px"><i style="width:${ses.i/ses.qs.length*100}%"></i></div>
 <div class="card glass q" id="qc"><span class="tg">${q.retry?'Again':TN[q.m]}</span><div class="qw${q.ord?' sm':''}">${['dr','pl','man'].includes(q.m)?wd(q.w):e(q.big)}</div><div class="qh">${e(q.hint)}</div>${['dr','pl','art','man'].includes(q.m)?`<button class="sp" onclick="say(ses.qs[ses.i].w.de)">🔊</button>`:''}<br>
 ${q.ord?`<div id="ow">${ordUI(q)}</div>`:q.typed?`<div class="row" style="justify-content:center"><input type="text" id="ti" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" style="font-size:18px;min-width:0;flex:1 1 200px"><button class="pri" onclick="submit()">Check</button></div>`:`<div class="opts">${q.opts.map((o,i)=>`<button class="${/^(der|die|das)$/.test(o.t)?'a-'+o.t:''}" onclick="pick(${i})"><span class="lbl">${i+1}</span> &nbsp;${ho(o.t)}</button>`).join('')}</div>`}<div id="fb"><div class="qa"><button class="qb" onclick="idk()"><i>🤔</i>I don’t know</button><button class="qb kn" onclick="knowIt()"><i>✓</i>I already know this word</button></div></div></div>`;
 const t=$('#ti');if(t)t.focus();if(q.m==='aud'){$('.qw').innerHTML='<button class="pri" onclick="say(ses.qs[ses.i].w.de)">🔊 Play</button> <button onclick="say(ses.qs[ses.i].w.de,0,.55)">🐢 Slow</button>';say(q.w.de,speaking())}}
function intro(w){$('#main').innerHTML=`<div class="row" style="justify-content:space-between"><span class="lbl">${ses.i+1} / ${ses.qs.length}</span><button onclick="ses=null;render()">End</button></div><div class="card glass q"><span class="tg">New word</span><div class="qw">${wd(w)}</div><div class="mem">${e(w.ru)}${w.pl?`<small>pl. ${e(w.pl)}</small>`:''}</div>${w.ex?`<div class="ex" data-ru="${e(w.exRu||'')}">${exHtml(w.ex,w)}${w.exRu?`<div class="exr">${e(w.exRu)}</div>`:''}</div>`:''}<p class="row" style="justify-content:center"><button class="qb" onclick="sayAll(ses.qs[ses.i].w,'')"><i>🔊</i>Listen</button><button class="qb kn" onclick="knowIt()"><i>✓</i>I already know it</button><button class="pri" onclick="go(()=>{ses.show=0;quiz()})">Got it, test me (Enter)</button></p></div>`;ses.show=1;if(S.say!==0)say(w.de,speaking())}
function pick(i){if(ses.done)return;const q=ses.qs[ses.i];finish(q.opts[i].t===q.ans,i)}
function submit(){if(ses.done)return;const q=ses.qs[ses.i],raw=$('#ti').value,v=nrm(raw).replace(/\s+/g,' ').trim();if(!v)return;ses.last=raw;ses.near=0;ses.artw=0;ses.note='';
 const A=q.acc;let ok=A.includes(v);
 if(!ok&&q.m!=='man'){const fv=fold(v);if(A.some(a=>fold(a)===fv)&&!strictOther(q.w,v)){ok=true;ses.note='Correct — but mind the umlauts / ß: '+q.ans}}
 if(!ok&&q.m==='man'&&A.some(a=>a.length>5&&lev(a,v)<=1)){ok=true;ses.note='Small typo — counted as correct'}
 if(!ok){ses.near=A.some(a=>a.length>4&&lev(a,v)<=1);const m=v.match(/^(der|die|das)\s+(.+)$/);if(m&&q.w.art&&m[1]!==q.w.art&&A.includes(m[2]))ses.artw=1}
 finish(ok)}
// "My answer was correct": undoes the miss, scores it as correct and remembers the answer as an accepted alternative
function override(){const q=ses&&ses.qs[ses.i];if(!q||!ses.done||q.ov||(!q.typed&&!q.ord)||!ses.last||ses.lastOk)return;const w=q.w;q.ov=1;
 const a=nrm(ses.last).replace(/\s+/g,' ').trim();w.alt=w.alt||{};const L=w.alt[q.m]=w.alt[q.m]||[];if(!L.includes(a))L.push(a);
 if(q.snap){const sn=q.snap;w.s[q.m]=JSON.parse(sn.s);if(sn.t)S.types[q.m]=JSON.parse(sn.t);else delete S.types[q.m];if(sn.d)S.log[sn.day]=JSON.parse(sn.d);else delete S.log[sn.day];w.err=sn.err;if(sn.le===undefined)delete w.lastErr;else w.lastErr=sn.le;
  apply(w,q.m,true);ses.ok++;const k=ses.miss.indexOf(q);if(k>=0)ses.miss.splice(k,1);const ev=[...ses.ev].reverse().find(x=>x.id===w.id&&x.m===q.m);if(ev)ev.g=2;
  for(let j=ses.i+1;j<ses.qs.length;j++){const x=ses.qs[j];if(x.retry&&x.w===w){ses.qs.splice(j,1);if(ses.rq[w.id])ses.rq[w.id]--;break}}}
 else save();
 ses.lastOk=true;const c=$('#qc');if(c){c.classList.remove('bad');c.classList.add('ok')}
 const h=document.querySelector('#fb .fb>b');if(h){h.className='okc';h.textContent='Correct ✓'}
 const ag=$('#agm');if(ag)ag.remove();const oa=$('#oa');if(oa){oa.classList.remove('bad');oa.classList.add('ok')}const b=$('#ovb');if(b)b.outerHTML='<div class="lbl okc">Accepted — this spelling will be recognised from now on</div>';
 const r=document.querySelector('.rt');if(r){if(r.previousElementSibling)r.previousElementSibling.remove();r.outerHTML=rateHtml(true)}}
function idk(){if(ses.done)return;ses.last='';ses.near=0;ses.note='';ses.artw=0;finish(false,null,true)}
function finish(ok,i,dk){const q=ses.qs[ses.i],w=q.w;ses.done=true;let again=false;{const t=$('#ti');if(t)t.disabled=true}
 ses.lastOk=ok;if((q.typed||q.ord)&&!q.retry&&ses.mode!=='review'){const s0=sk(w,q.m),t0=S.types[q.m],d0=S.log[today()];q.snap={s:JSON.stringify(s0),t:t0&&JSON.stringify(t0),d:d0&&JSON.stringify(d0),day:today(),err:w.err,le:w.lastErr}}
 if(!q.retry&&ses.mode!=='review'){apply(w,q.m,ok);ses.tot++;if(ok)ses.ok++;else ses.miss.push(q);ses.ev.push({id:w.id,m:q.m,g:ok?2:0})}
 if(!ok){if(!dk&&q.opts&&i!=null&&q.opts[i].id){const k=w.id+'|'+q.opts[i].id;S.conf[k]=(S.conf[k]||0)+1;(ses.cf=ses.cf||[]).push(k);save()}
  if(ses.mode!=='review'&&(ses.rq[w.id]=(ses.rq[w.id]||0)+1)<=2){again=true;later({w,m:ses.mode==='learn'?SIMP[q.m]||q.m:q.m,retry:1},3,4)}}
 else if(ses.mode!=='review'&&!q.retry&&!ses.rep[w.id]&&status(w)!=='known'&&(status(w)==='learning'||Math.random()<.2)){ses.rep[w.id]=1;later({w},5,8)}
 if(!dk)$('#qc').classList.add(ok?'ok':'bad');if(q.opts)[...document.querySelectorAll('.opts button')].forEach((b,j)=>{const x=S.words.find(y=>y.id===q.opts[j].id);if(x)b.dataset.tr=q.m==='dr'?x.de:x.ru;if(q.opts[j].t===q.ans)b.classList.add('ok');else if(j===i)b.classList.add('bad')});
 {const qw=$('.qw');if(qw&&q.m==='aud')qw.innerHTML=wd(w);if(qw&&q.m!=='mis'&&q.m!=='mist'&&q.m!=='ord'){qw.dataset.tr=['rd','rev'].includes(q.m)?w.de:w.ru;qw.classList.add('tr')}}$('#fb').innerHTML=`<div class="fb"><b class="${ok?'okc':'er'}">${ok?'Correct ✓':dk?'No problem — remember it':'Not quite ✗'}</b> — <b>${e(q.ans)}</b>${(q.typed||q.ord)&&!ok&&ses.last?`<div class="lbl">${q.ord?'Your order':'You typed'}: ${e(ses.last)}${ses.near?' — almost, check the spelling':''}${ses.artw?' — check the article':''}</div><button class="sp" id="ovb" onclick="override()">${q.ord?'✓ My order is also correct':'✓ My answer was correct'}</button>`:''}${(q.typed||q.ord)&&ok&&ses.note?`<div class="lbl">${e(ses.note)}</div>`:''}${!ok||w.art?`<div class="mem">${wd(w)} = ${e(w.ru)}${w.art?`<small>${w.art==='der'?'masculine':w.art==='die'?'feminine':'neuter'}</small>`:''}</div>`:''}${again?'<div class="lbl" id="agm">You’ll see this word again in a few questions.</div>':''}${w.ex?`<div class="ex" data-ru="${e(w.exRu||'')}">${exHtml(w.ex,w)}${w.exRu?`<div class="exr">${e(w.exRu)}</div>`:''}<button class="sp" style="margin:0;padding:2px 10px;min-height:32px" onclick="say(ses.qs[ses.i].w.ex)">🔊</button></div>`:''}${q.m==='art'?`<div class="lbl">${e(w.de)} (${e(w.pl||'')})</div>`:''}<div class="qa fa"><button class="qb" onclick="sayAll(ses.qs[ses.i].w,ses.qs[ses.i].m)"><i>🔊</i>Listen</button><button class="qb kn" onclick="knowIt()"><i>✓</i>I already know this word</button></div></div>${ses.mode==='review'?rateHtml(ok):`<p><button class="pri" onclick="next()">Next (Enter)</button></p>`}`;if(S.say!==0)sayAll(w,q.m)}
function next(){go(()=>{ses.i++;ses.done=false;ses.rated=0;quiz()})}
function summary(){const n=ses.tot||1,a=Math.round(ses.ok/n*100),dur=Date.now()-ses.t0,F=id=>S.words.find(w=>w.id===id),
 W=[...new Set(ses.ev.map(x=>x.id))].map(F).filter(w=>w&&!w.ign),miss=[...new Set(ses.miss.map(q=>q.w.id))].map(F).filter(w=>w&&!w.ign);LASTMISS=miss.map(w=>w.id);
 const learned=W.filter(w=>['fresh','known'].includes(status(w))&&!miss.includes(w)),need=W.filter(w=>status(w)==='learning'||miss.includes(w)),
 norec=W.filter(w=>w.s.dr&&w.s.dr.st>=2&&!['rev','man'].some(m=>w.s[m]&&w.s[m].st>=2)),weakG=W.filter(w=>['art','pl'].some(m=>w.s[m]&&w.s[m].n>w.s[m].ok&&w.s[m].st<2)),
 cf=Object.entries((ses.cf||[]).reduce((o,k)=>(o[k]=(o[k]||0)+1,o),{})).sort((x,y)=>y[1]-x[1]).slice(0,3).map(([k])=>{const[p,q]=k.split('|').map(F);return p&&q?`${wd(p)} ↔ ${wd(q)}`:''}).filter(Boolean),imp={},sk0={};
 ses.ev.forEach(v=>{const k=v.id+'|'+v.m,w=F(v.id);if(sk0[k]||!w||!w.s[v.m])return;sk0[k]=1;if(w.s[v.m].st>(ses.snap[k]||0)){const g=Object.keys(SG).find(x=>SG[x].includes(v.m));imp[g]=(imp[g]||0)+1}});
 const L=(t,a)=>a.length?`<div class="card" style="margin-bottom:14px"><h2>${t}</h2><table>${a.map(w=>`<tr><td>${wd(w)}</td><td>${e(w.ru)}</td></tr>`).join('')}</table></div>`:'';
 if(!ses.saved){ses.saved=1;S.hist=(S.hist||[]).concat({t:Date.now(),mode:ses.mode,n:ses.tot,ok:ses.ok,dur}).slice(-100);save()}
 $('#main').innerHTML=`<h1>Session complete</h1><div class="g"><div class="card"><div class="lbl">Correct</div><div class="big">${ses.ok}/${ses.tot}</div></div><div class="card"><div class="lbl">Accuracy</div><div class="big">${a}%</div></div><div class="card"><div class="lbl">Duration</div><div class="big">${fmtD(dur)}</div></div></div>
 ${Object.keys(imp).length?`<div class="card" style="margin-bottom:14px"><h2>Skills that improved</h2>${Object.entries(imp).map(([k,v])=>`<span class="tg">${k} +${v}</span> `).join('')}</div>`:''}
 ${L('Learned',learned)}${L('Still need practice',need)}${cf.length?`<div class="card" style="margin-bottom:14px"><h2>Most confused</h2>${cf.map(x=>`<div>${x}</div>`).join('')}</div>`:''}${L('Recognized but not recalled yet',norec)}${L('Weak articles / plurals',weakG)}
 <p class="row">${miss.length?`<button class="pri" onclick="practiceMistakes()">Practice mistakes (${miss.length})</button>`:''}<button onclick="startSession({mode:'${ses.mode}',only:null})">Again</button><button onclick="ses=null;location.hash='overview'">Home</button></p>`;ses.on=0}
document.addEventListener('keydown',ev=>{if(ev.key==='Enter'&&/^#(learn|review)$/.test(location.hash)&&!(ses&&ses.on)){const g=$('#go');if(g)g.click();return}
 if(!ses||!ses.on||!ses.qs[ses.i])return;if(ses.show){if(ev.key==='Enter'){ev.preventDefault();go(()=>{ses.show=0;quiz()})}return}const q=ses.qs[ses.i];if(ev.key==='Enter'){ev.preventDefault();ses.done?(ses.mode==='review'?rate(ses.lastOk?2:0):next()):(q.typed?submit():q.ord&&ordCheck())}
 else if(!ses.done&&!q.typed){if(ev.key==='0')idk();else if(ev.key==='Backspace'&&q.ord)ordUn(q.sel.length-1);else if(ev.key.toLowerCase()==='r'&&q.m==='aud')say(q.w.de);else if(/^[1-4]$/.test(ev.key)&&q.opts&&q.opts[ev.key-1])pick(ev.key-1)}else if(ses.done&&ses.mode==='review'&&/^[1-4]$/.test(ev.key)){const g=ev.key-1;if(ses.lastOk||!g)rate(g)}});
V.vocab=()=>{const q=(window.fq||'').toLowerCase(),fp=window.fp||'',fs=window.fs||'';
 const L=S.words.filter(w=>(!q||(w.de+w.ru+w.cat).toLowerCase().includes(q))&&(!fp||w.pos===fp)&&(!fs||status(w)===fs)&&(!window.fv||(window.fv==='seen')===isSeen(w)));
 let pv='';if(P){const ok=P.filter(o=>o.w&&!o.dup).length,bad=P.filter(o=>!o.w),dp=P.filter(o=>o.dup);
  pv=`<div class="card glass" style="margin:14px 0"><h2>Import preview</h2><p><b class="okc">${ok} valid</b> · <b class="er">${bad.length} invalid</b> · ${dp.length} duplicates (skipped unless allowed)</p>${bad.length?`<div class="er tw">${bad.slice(0,30).map(o=>`<div>Line ${o.n}: ${e(o.line)} — ${e(o.err)}</div>`).join('')}<div class="lbl">Fix these lines in the box above and press Preview again.</div></div>`:''}
  <div class="row" style="margin-top:10px"><label><input type="checkbox" id="idp"> Import duplicates too</label><button class="pri" onclick="doImport($('#idp').checked)" ${ok||dp.length?'':'disabled'}>Confirm import</button><button onclick="P=null;vocab()">Cancel</button></div></div>`}
 $('#main').innerHTML=`<h1>Vocabulary</h1><p class="sub">Format: <code>${LANG==='en'?'apple | яблоко | noun | apples':'der Apfel | яблоко | noun | Äpfel'} | example | translation | category</code> — only the first two fields are required.</p>
 <details class="card fold"${P?' open':''}><summary>Import words</summary><textarea id="it" placeholder="Paste vocabulary here, one entry per line">${P?e(P.map(o=>o.line).join('\n')):''}</textarea><div class="row" style="margin-top:8px"><button class="pri" onclick="preview($('#it').value)">Preview</button><label class="btn">Upload .txt<input type="file" accept=".txt,text/plain" hidden onchange="rf(this)"></label><button onclick="dl('vocabflow-template.txt',SAMPLE,'text/plain')">Download template</button><button onclick="$('#it').value=SAMPLE">Insert sample</button></div>${pv}</details>
 <details class="card fold" style="margin-top:10px"${editId?' open':''}><summary>${editId?'Edit word':'Add a word'}</summary><div class="row"><input type="text" id="aw" style="flex:1" placeholder="${LANG==='en'?'street | улица | noun | streets':'die Straße | улица | noun | Straßen'}" value="${editId?e(line(S.words.find(w=>w.id===editId))):''}"><button class="pri" onclick="addW()">${editId?'Save':'Add'}</button></div></details>
 <div class="row filt"><input type="text" placeholder="Search…" value="${e(window.fq||'')}" oninput="fq=this.value;lst()"><select onchange="fp=this.value;lst()"><option value="">All types</option>${Object.keys(POS).map(p=>`<option ${fp===p?'selected':''}>${p}</option>`).join('')}</select><select onchange="fs=this.value;lst()"><option value="">All status</option>${Object.keys(SL).map(p=>`<option value="${p}" ${fs===p?'selected':''}>${SL[p]}</option>`).join('')}</select><select onchange="fv=this.value;lst()"><option value="">Seen &amp; new</option><option value="seen" ${window.fv==='seen'?'selected':''}>Seen before</option><option value="new" ${window.fv==='new'?'selected':''}>Not seen yet</option></select></div><div id="lst"></div>`;lst()};
function lst(){const q=(window.fq||'').toLowerCase(),fp=window.fp||'',fs=window.fs||'';const L=S.words.filter(w=>(!q||(w.de+w.ru+w.cat).toLowerCase().includes(q))&&(!fp||w.pos===fp)&&(!fs||status(w)===fs)&&(!window.fv||(window.fv==='seen')===isSeen(w)));
 $('#lst').innerHTML=!L.length?`<div class="card empty">No words found.</div>`:`<div class="card tw"><table><tr><th>${LN}</th><th>Translation</th><th>Type</th><th>Status</th><th></th></tr>${L.slice(0,200).map(w=>`<tr${w.ign?' class="ign"':''}><td>${wd(w)}${w.pl?`<div class="lbl">pl. ${e(w.pl)}</div>`:''}</td><td>${e(w.ru)}${w.ex?`<div class="ex s" data-ru="${e(w.exRu||'')}">${exHtml(w.ex,w)}${w.exRu?`<div class="exr">${e(w.exRu)}</div>`:''} <button class="sp" style="margin:0;padding:2px 10px;min-height:32px" onclick="say(S.words.find(x=>x.id==='${w.id}').ex)">🔊</button></div>`:''}</td><td><span class="tg">${w.pos}</span></td><td>${SL[status(w)]}<div class="lbl">${nxt(w)}</div></td><td style="white-space:nowrap"><button onclick="say(S.words.find(x=>x.id==='${w.id}').de)">🔊</button> <button onclick="setKnown('${w.id}',${w.ign?0:1})" title="${w.ign?'Return to the learning list':'I already know this word'}">${w.ign?'↺ Learn':'✓ Know'}</button> <button onclick="editId='${w.id}';vocab();scrollTo(0,0)">Edit</button> <button onclick="delW('${w.id}')">✕</button></td></tr>`).join('')}</table>${L.length>200?`<div class="lbl">Showing 200 of ${L.length}. Use search to narrow.</div>`:''}</div>`}
const vocab=()=>V.vocab();
function rf(i){const f=i.files[0];if(!f)return;const r=new FileReader();r.onload=()=>preview(String(r.result));r.readAsText(f)}
function addW(){const o=parse($('#aw').value);if(!o.w)return toast(o.err);if(editId){const w=S.words.find(x=>x.id===editId);Object.assign(w,o.w,{id:w.id,s:w.s,err:w.err});editId=null}else{if(S.words.some(x=>nd(x.de)===nd(o.w.de)))return toast('This word is already in your library');S.words.push(o.w)}save();toast('Saved');vocab()}
function delW(id){ask('Delete this word and its progress?',()=>{S.words=S.words.filter(w=>w.id!==id);save();vocab()})}
V.settings=()=>{$('#main').innerHTML=`<h1>Settings</h1><div class="card" style="margin-bottom:14px"><h2>Pronunciation</h2><label><input type="checkbox" ${S.say===0?'':'checked'} onchange="S.say=this.checked?1:0;save()"> Auto-play ${LN} after each answer</label><br><label><input type="checkbox" ${S.intro===0?'':'checked'} onchange="S.intro=this.checked?1:0;save()"> Show new words before their first test</label></div><div class="card" style="margin-bottom:14px"><h2>Voice</h2><div class="row"><select id="vs" onchange="S.voice=this.value;save();say('${LANG==='en'?'Hello! This is my voice.':'Guten Tag! Das ist meine Stimme.'}')">${voiceOpts()}</select><button onclick="say('${LANG==='en'?'Hello! This is my voice.':'Guten Tag! Das ist meine Stimme.'}')">🔊 Test</button></div><p class="lbl">The list shows the ${LN} voices installed on this device/browser. “Automatic” picks the first one.</p></div><div class="card" style="margin-bottom:14px"><h2>Daily goal</h2><input type="number" id="gl" min="5" max="500" value="${S.goal}"> <button onclick="S.goal=Math.max(5,+$('#gl').value||20);save();toast('Saved')">Save</button></div>
 <div class="card"><h2>Data</h2><div class="row"><button onclick="dl('vocabflow-backup${LANG==='en'?'-en':''}.json',JSON.stringify(S),'application/json')">Export all data (JSON)</button><button onclick="dl('vocabflow-words${LANG==='en'?'-en':''}.txt',S.words.map(line).join('\\n'),'text/plain')">Export vocabulary (TXT)</button><label class="btn">Import JSON<input type="file" accept=".json" hidden onchange="ij(this)"></label><button onclick="ask('Erase ALL ${LN} vocabulary and progress?',()=>{S={v:1,words:[],log:{},types:{},conf:{},goal:20};save();render()})" class="er">Reset</button></div><p class="lbl">JSON import merges: existing words and progress are never deleted.</p></div>`}
function ij(i){const f=i.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const d=JSON.parse(r.result);if(![1,2].includes(d.v)||!Array.isArray(d.words))throw 0;migrate(d);const have=new Set(S.words.map(w=>nd(w.de)));let n=0;d.words.forEach(w=>{if(w&&w.de&&w.ru&&!have.has(nd(w.de))){w.s=w.s||{};w.id=w.id||Math.random().toString(36).slice(2);w.base=w.base||w.de;S.words.push(w);n++}});save();toast(n+' words added');render()}catch(x){toast('Invalid backup file')}};r.readAsText(f)}
addEventListener('hashchange',()=>{if(location.hash!=='#blitz'&&ses&&ses.on===1&&0)ses=null;render()});render();
const DK='vocabflow.dict2';let DC={};try{DC=JSON.parse(localStorage.getItem(DK))||{}}catch(x){}
const saveDC=()=>{try{localStorage.setItem(DK,JSON.stringify(DC))}catch(x){}};
const uniq=a=>[...new Set(a.map(x=>String(x).toLowerCase().trim()).filter(Boolean))];
// dictionary-style lookup (several candidate meanings); falls back to MyMemory
const fetchTr=w=>fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=de&tl=ru&dt=t&dt=bd&q='+encodeURIComponent(w)).then(r=>r.json()).then(d=>uniq([(d[0]||[]).map(x=>x[0]).join(''),...(d[1]||[]).flatMap(b=>b[1]||[])]).slice(0,6))
 .catch(()=>fetch('https://api.mymemory.translated.net/get?langpair=de|ru&q='+encodeURIComponent(w)).then(r=>r.json()).then(d=>{const t=d&&d.responseData&&d.responseData.translatedText;return t&&!/MYMEMORY|QUERY LENGTH|INVALID/i.test(t)?[t.toLowerCase()]:[]})).catch(()=>[]).then(L=>{if(L.length){DC[w]=L;saveDC()}return L});
// context: prefer the meaning that appears in the example's own Russian translation
const best=(L,ru)=>{const rw=(ru||'').toLowerCase().split(/[^а-яёa-z]+/).filter(Boolean),hit=L.find(a=>a.split(/\s+/).some(x=>x.length>2&&rw.some(y=>y.startsWith(x.slice(0,Math.max(3,Math.min(5,x.length-2)))))));return hit?[hit,...L.filter(x=>x!==hit)]:L};
const tip=document.createElement('div');tip.id='tip';document.body.append(tip);
const showTip=ev=>{const t=ev.target.closest&&ev.target.closest('[data-tr],[data-w]');if(!t){tip.style.display='none';return}
 const set=x=>{tip.textContent=x;tip.style.display='block';const r=t.getBoundingClientRect(),w=tip.offsetWidth,h=tip.offsetHeight;tip.style.left=Math.max(8,Math.min(innerWidth-w-8,r.left+r.width/2-w/2))+'px';tip.style.top=(r.top-h-8<8?r.bottom+8:r.top-h-8)+'px'};
 if(t.dataset.tr)return set(t.dataset.tr);const w=t.dataset.w,ru=(t.closest('.ex')||{dataset:{}}).dataset.ru,show=L=>set(best(L,ru).slice(0,4).join(' · '));
 if(DC[w])return show(DC[w]);set('…');tip.dataset.for=w;
 fetchTr(w).then(L=>{if(tip.dataset.for===w&&tip.style.display==='block')L.length?show(L):set('no translation (check internet)')})};
document.addEventListener('mouseover',showTip);document.addEventListener('click',showTip);document.addEventListener('keydown',()=>tip.style.display='none');addEventListener('scroll',()=>tip.style.display='none',true);
// double-click a word to set your own translation
document.addEventListener('dblclick',ev=>{const t=ev.target.closest&&ev.target.closest('[data-w]');if(!t)return;const w=t.dataset.w,v=prompt('Your translation for “'+w+'”:',(DC[w]||[])[0]||'');if(v&&v.trim()){DC[w]=[v.trim()];saveDC();tip.style.display='none'}});
;
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
;
/* VocabFlow — UI enhancement layer. Read-only: it never changes words, progress or any stored learning data.
   Adds: DE/EN dictionary switcher, answer sounds (+ settings toggle) and level dots in the word list. */
(()=>{'use strict';
const PK='vocabflow.ui';
const pref=()=>{try{return Object.assign({snd:1},JSON.parse(localStorage.getItem(PK)))}catch(e){return{snd:1}}};
const setPref=p=>{try{localStorage.setItem(PK,JSON.stringify(Object.assign(pref(),p)))}catch(e){}};

/* ---- sounds (Web Audio, no files) ---- */
let ac;
function note(f,t,d,type,g,f2){const o=ac.createOscillator(),a=ac.createGain();o.type=type;o.frequency.setValueAtTime(f,t);if(f2)o.frequency.exponentialRampToValueAtTime(f2,t+d);a.gain.setValueAtTime(.0001,t);a.gain.exponentialRampToValueAtTime(g,t+.015);a.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(a);a.connect(ac.destination);o.start(t);o.stop(t+d+.03)}
function sound(kind){if(!pref().snd)return;try{ac=ac||new(window.AudioContext||window.webkitAudioContext)();if(ac.state==='suspended')ac.resume();const n=ac.currentTime;
  if(kind==='ok'){note(659.25,n,.16,'sine',.09);note(987.77,n+.09,.24,'sine',.08)}
  else note(196,n,.24,'triangle',.11,128)}catch(e){}}

/* ---- level dots (1–5) from the average stage of the skills a word has practised ---- */
const level=w=>{const k=Object.values(w.s||{}).filter(x=>x.n>0);if(!k.length)return 0;const a=k.reduce((s,x)=>s+(x.st||0),0)/k.length;return Math.max(1,Math.min(5,Math.floor(a)+1))};
function dots(){if(!document.getElementById('lst'))return;
  document.querySelectorAll('#lst tr').forEach(tr=>{if(tr.dataset.dots)return;
    const b=tr.querySelector('button[onclick^="editId="]');if(!b)return;
    const m=b.getAttribute('onclick').match(/editId='([^']+)'/);if(!m)return;
    let w;try{w=S.words.find(x=>x.id===m[1])}catch(e){}if(!w)return;
    const c=tr.children[3];if(!c)return;tr.dataset.dots=1;
    const n=level(w),d=document.createElement('span');d.className='dots';
    try{d.dataset.s=status(w)}catch(e){}
    d.setAttribute('role','img');d.setAttribute('aria-label','Level '+n+' of 5');d.title='Level '+n+' / 5';
    for(let i=0;i<5;i++){const e=document.createElement('i');if(i<n)e.className='f';d.append(e)}
    c.insertBefore(d,c.querySelector('.lbl'))})}

/* ---- settings toggle ---- */
function settings(){const m=document.getElementById('main'),h=m&&m.querySelector('h1');
  if(!h||h.textContent!=='Settings'||document.getElementById('sndc'))return;
  const first=m.querySelector('h1+.card');if(!first)return;
  const c=document.createElement('div');c.className='card';c.id='sndc';c.style.marginBottom='14px';
  c.innerHTML='<h2>Sounds</h2><label><input type="checkbox" id="snd"> Play a soft sound after each answer</label>';
  const i=c.querySelector('input');i.checked=!!pref().snd;i.onchange=()=>{setPref({snd:i.checked?1:0});if(i.checked)sound('ok')};
  first.after(c)}


/* ---- dictionary switcher (DE / EN). Each language has its own stored dictionary; script.js reads the choice on load ---- */
(()=>{const cur=(()=>{try{return localStorage.getItem('vocabflow.lang')==='en'?'en':'de'}catch(e){return'de'}})();
  document.title='VocabFlow · '+(cur==='en'?'English':'Deutsch');
  if(document.getElementById('langsw'))return;
  const box=document.createElement('div');box.id='langsw';box.setAttribute('role','group');box.setAttribute('aria-label','Dictionary language');
  [['de','DE','Deutsch'],['en','EN','English']].forEach(([k,t,n])=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.title=n;
    b.className=k===cur?'on':'';b.setAttribute('aria-pressed',k===cur?'true':'false');
    b.onclick=()=>{if(k===cur)return;try{localStorage.setItem('vocabflow.lang',k)}catch(e){}location.reload()};box.append(b)});
  document.body.append(box)})();

/* ---- watch the DOM: answer result -> sound; re-renders -> dots / settings ---- */
const main=document.getElementById('main');if(!main)return;
let raf=0;const pass=()=>{raf=0;dots();settings()};
new MutationObserver(ms=>{
  for(const m of ms){if(m.type!=='attributes'||m.target.id!=='qc')continue;
    const was=m.oldValue||'',now=m.target.className;
    if(/\bok\b/.test(now)&&!/\bok\b/.test(was))sound('ok');
    else if(/\bbad\b/.test(now)&&!/\bbad\b/.test(was))sound('bad')}
  if(!raf)raf=requestAnimationFrame(pass)
}).observe(main,{childList:true,subtree:true,attributes:true,attributeFilter:['class'],attributeOldValue:true});
pass();
})();
;
