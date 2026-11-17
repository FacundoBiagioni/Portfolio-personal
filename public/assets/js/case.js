(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  requestAnimationFrame(() => document.body.classList.add('ready'));

  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal, #frame').forEach(el => io.observe(el));

  // Video: plays only while visible; the button pauses it for good
  const vid = document.getElementById('vid'), btn = document.getElementById('vbtn');
  let userPaused = reduce;
  const es = () => document.documentElement.lang === 'es';
  const sync = () => btn.textContent = vid.paused ? (es() ? 'Reproducir' : 'Play') : (es() ? 'Pausa' : 'Pause');
  addEventListener('langchange', sync);
  vid.addEventListener('play', sync); vid.addEventListener('pause', sync);
  btn.addEventListener('click', () => { if (vid.paused) { userPaused = false; vid.play(); } else { userPaused = true; vid.pause(); } });
  new IntersectionObserver(([e]) => { if (e.isIntersecting && !userPaused) vid.play().catch(() => {}); else vid.pause(); }, { threshold: 0.25 }).observe(vid);
  sync();

  // Count-up numbers
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.unobserve(e.target);
    if (reduce) return;
    const el = e.target, end = +el.dataset.count, pre = el.dataset.prefix || '', t0 = performance.now();
    const step = t => { const k = Math.min(1, (t - t0) / 1400); el.textContent = pre + Math.round(end * (1 - Math.pow(1 - k, 3))).toLocaleString(es() ? 'es-AR' : 'en-US'); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
  const fmtAll = () => document.querySelectorAll('[data-count]').forEach(el => el.textContent = (el.dataset.prefix || '') + (+el.dataset.count).toLocaleString(es() ? 'es-AR' : 'en-US'));
  addEventListener('langchange', fmtAll); fmtAll();

  // Touch: hover effects fire while an element crosses the middle of the screen
  if (matchMedia('(hover: none)').matches) {
    const band = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('inview', e.isIntersecting)), { rootMargin: '-42% 0px -42% 0px' });
    document.querySelectorAll('.verd li, .gal figure, .next .big').forEach(el => band.observe(el));
  }
})();
