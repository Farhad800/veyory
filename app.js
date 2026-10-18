const rtl={ku:1,ar:1};
function setL(l){const d=T[l];document.documentElement.lang=l;document.documentElement.dir=rtl[l]?'rtl':'ltr';
document.querySelectorAll('[data-k]').forEach(e=>e.textContent=d[e.dataset.k]);
document.querySelectorAll('.lang button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l===l));
try{localStorage.setItem('vl',l)}catch(e){}}
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',()=>setL(b.dataset.l)));
let s='ku';try{s=localStorage.getItem('vl')||'ku'}catch(e){}setL(T[s]?s:'ku');
const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12}):null;
document.querySelectorAll('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
const iE=document.getElementById('inst'),iB=document.getElementById('ib'),iT=document.getElementById('itx');let dP=null;
const sa=matchMedia('(display-mode: standalone)').matches||navigator.standalone,ios=/iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
let seen=false;try{seen=localStorage.getItem('vi')==='1'}catch(e){}
function iTx(){const d=T[document.documentElement.lang]||T.ku;iT.textContent=ios?d.ia:d.iw}
function iShow(){if(sa||seen)return;iTx();iE.classList.add('on')}
document.getElementById('ix').onclick=()=>{iE.classList.remove('on');try{localStorage.setItem('vi','1')}catch(e){}};
addEventListener('beforeinstallprompt',e=>{e.preventDefault();dP=e;iB.hidden=false;setTimeout(iShow,2500)});
iB.onclick=async()=>{if(!dP)return;dP.prompt();await dP.userChoice;dP=null;iE.classList.remove('on')};
addEventListener('appinstalled',()=>iE.classList.remove('on'));
if(ios)setTimeout(iShow,2500);
document.querySelectorAll('.lang button').forEach(b=>b.addEventListener('click',iTx));
if('serviceWorker' in navigator)addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
