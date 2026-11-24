// CURSO C — menú global ligero para todas las páginas
document.addEventListener('DOMContentLoaded',()=>{
  const bar=document.createElement('nav');
  bar.className='cc-global-nav';
  bar.innerHTML='<a href="index.html">⌂ Inicio</a><a href="cursoc.html">☷ Temario</a><a href="cursoc-buenas.html">✦ Buenas prácticas</a><a href="cursoc-instalar.html">⚙ Instalación</a>';
  Object.assign(bar.style,{position:'fixed',top:'70px',left:'0',right:'0',zIndex:'100',height:'34px',display:'flex',alignItems:'center',justifyContent:'center',gap:'clamp(12px,3vw,38px)',background:'#0d1c2df2',borderBottom:'1px solid rgba(148,181,211,.18)',font:'11px Manrope,Arial,sans-serif'});
  document.body.appendChild(bar);
  const prev=document.querySelector('.barranavegaciontop');
  if(prev) prev.style.marginTop='18px';
});
