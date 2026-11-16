(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => document.body.classList.add('ready'));

  // La Plata local time
  const clock = document.getElementById('clock');
  const tick = () => clock.textContent = new Intl.DateTimeFormat(document.documentElement.lang === 'es' ? 'es-AR' : 'en-US', { hour: '2-digit', minute: '2-digit', timeZone: 'America/Argentina/Buenos_Aires' }).format(new Date()) + ' ART';
  tick(); setInterval(tick, 30000); addEventListener('langchange', tick);

  // Hero name: weight follows scroll, thinning as it leaves
  const h1 = document.querySelector('.hero h1');
  if (!reduce) addEventListener('scroll', () => {
    const p = Math.min(1, scrollY / innerHeight);
    h1.style.fontWeight = Math.round(800 - p * 650);
  }, { passive: true });

  // Reveal
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Cursor-follow preview over the work index (pointer devices only)
  const pv = document.querySelector('.preview');
  if (matchMedia('(hover: hover)').matches) {
    let x = 0, y = 0, tx = 0, ty = 0;
    const loop = () => { x += (tx - x) * 0.14; y += (ty - y) * 0.14; pv.style.left = x + 'px'; pv.style.top = y + 'px'; requestAnimationFrame(loop); };
    loop();
    document.querySelectorAll('.work a').forEach(a => {
      a.addEventListener('pointerenter', e => {
        // a hidden preview appears right at the cursor instead of gliding in from its last spot (or the corner)
        tx = e.clientX + 200; ty = e.clientY;
        if (!pv.classList.contains('on')) { x = tx; y = ty; }
        pv.querySelectorAll('.card').forEach(c => { const on = c.classList.contains(a.dataset.card); c.classList.toggle('show', on); const v = c.querySelector('video'); if (v) on ? v.play().catch(() => {}) : v.pause(); });
        pv.classList.add('on');
      });
      a.addEventListener('pointerleave', () => pv.classList.remove('on'));
      a.addEventListener('pointermove', e => { tx = e.clientX + 200; ty = e.clientY; });
    });
  }
})();
