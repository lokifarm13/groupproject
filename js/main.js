const d=document,$=s=>d.querySelector(s),$$=s=>[...d.querySelectorAll(s)];
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(t.h);t.h=setTimeout(()=>t.classList.remove('on'),2200)};
d.addEventListener('DOMContentLoaded',()=>{
 $('#theme').onclick=()=>{const r=d.documentElement,n=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=n;try{localStorage.theme=n}catch(e){}};
 $('#burger').onclick=()=>$('#nav').classList.toggle('open');
 let n=0;try{n=+localStorage.cart||0}catch(e){}
 const cart=$('#cart');cart.textContent=n;
 $$('.buy').forEach(b=>b.onclick=()=>{n++;cart.textContent=n;try{localStorage.cart=n}catch(e){}
  const c=cart.parentNode;c.classList.remove('bump');void c.offsetWidth;c.classList.add('bump');toast('Добавлено: '+b.closest('.card').querySelector('h3').textContent)});
 $$('.f').forEach(b=>b.onclick=()=>{$$('.f').forEach(x=>x.classList.toggle('on',x===b));
  $$('.p').forEach(p=>{p.classList.toggle('hide',b.dataset.f!=='all'&&p.dataset.c!==b.dataset.f)})});
 const run=e=>{const to=+e.dataset.count,t0=performance.now();(function s(t){const k=Math.min((t-t0)/1500,1);e.textContent=Math.round(to*(1-Math.pow(1-k,3))).toLocaleString('ru-RU');if(k<1)requestAnimationFrame(s)})(t0)};
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');const c=x.target.querySelector('[data-count]')||(x.target.dataset.count?x.target:null);if(c)run(c);io.unobserve(x.target)}}),{threshold:.2});
 $$('.rv').forEach(e=>io.observe(e));
 const f=$('#form');if(f)f.onsubmit=e=>{e.preventDefault();const er=$('#err');
  if(!f.checkValidity()){er.textContent='Проверьте поля: имя от 2 букв, корректный email, сообщение от 10 символов.';return}
  er.textContent='';f.reset();toast('Сообщение отправлено. Мы ответим в течение 10 минут.')};
});
