/* VocabFlow — UI enhancement layer. Read-only: it never changes words, progress or any stored learning data.
   Adds: answer sounds (+ settings toggle) and level dots in the word list. */
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