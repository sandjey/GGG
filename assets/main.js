(function(){
  const nav=document.getElementById('nav');const s=document.createElement('div');s.style.cssText='position:absolute;top:60px;height:1px;width:1px';document.body.prepend(s);
  new IntersectionObserver(([e])=>nav.classList.toggle('is-scrolled',!e.isIntersecting)).observe(s);
  const burger=document.getElementById('burger'),sheet=document.getElementById('sheet');
  const toggle=o=>{burger.classList.toggle('is-open',o);sheet.classList.toggle('is-open',o);burger.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''};
  burger.addEventListener('click',()=>toggle(!sheet.classList.contains('is-open')));
  sheet.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.rv,.stagger,.flow,.tl').forEach(el=>io.observe(el));
  /* counters */
  const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;cio.unobserve(e.target);const el=e.target,end=parseFloat(el.dataset.count),dec=+(el.dataset.dec||0),pre=el.dataset.prefix||'',suf=el.dataset.suffix||'';const t0=performance.now();
    (function f(t){const p=Math.min(1,(t-t0)/1600),k=1-Math.pow(1-p,3);el.firstChild.nodeValue=pre+(end*k).toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(p<1)requestAnimationFrame(f)})(t0)}),{threshold:.6});
  document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
  /* focus tabs */
  const tabs=[...document.querySelectorAll('#tabs .tab')],figs=[...document.querySelectorAll('#panel figure')],prog=[...document.querySelectorAll('#panel .prog i')];
  if(tabs.length){let cur=0,tm=null;const go=i=>{tabs[cur].classList.remove('is-active');figs[cur].classList.remove('is-active');cur=i;tabs[cur].classList.add('is-active');figs[cur].classList.add('is-active');
    prog.forEach((p,k)=>{p.classList.toggle('is-done',k<cur);p.classList.remove('is-active');void p.offsetWidth});prog[cur].classList.add('is-active');clearTimeout(tm);tm=setTimeout(()=>go((cur+1)%tabs.length),7000)};
    tabs.forEach(t=>t.addEventListener('click',()=>go(+t.dataset.i)));tm=setTimeout(()=>go(1),7000)}
  const f=document.getElementById('teaserForm');if(f)f.addEventListener('submit',e=>{e.preventDefault();f.classList.add('is-sent')});
  const g=document.getElementById('gate');if(g)g.addEventListener('submit',e=>{e.preventDefault();if(g.code.value.trim().toUpperCase()==='GGG2030'){document.body.classList.remove('is-locked');g.remove()}else{g.code.style.borderColor='#B3413F'}});
})();