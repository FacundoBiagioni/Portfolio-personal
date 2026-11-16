// Language switch: English by default, Spanish on request, remembered across pages.
// Text lives in the HTML twice (<span lang="en"> / <span lang="es">); CSS hides the other one.
(() => {
  const KEY = 'fb-lang';
  const here = document.currentScript.src;
  // shortcut: there is no English CV yet, so English falls back to the Spanish file; set `en` when it exists
  const CV = {
    es: { href: new URL('cv/cv-facundo-biagioni-es.pdf', here).href, name: 'CV-Facundo-Biagioni-ES.pdf' },
    en: null,
  };
  const root = document.documentElement;
  const current = () => (root.lang === 'es' ? 'es' : 'en');

  function apply(lang) {
    root.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) { /* private mode: the choice just isn't remembered */ }

    // Attributes that need both versions: data-i18n-attr="alt aria-label" + data-en-alt, data-es-alt, ...
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(' ').forEach(attr => {
        const v = el.getAttribute(`data-${lang}-${attr}`);
        if (v !== null) el.setAttribute(attr, v);
      });
    });
    const title = document.querySelector('title');
    if (title && title.dataset[lang]) document.title = title.dataset[lang];

    const cv = CV[lang] || CV.es;
    document.querySelectorAll('[data-cv]').forEach(a => { a.href = cv.href; a.setAttribute('download', cv.name); });

    document.querySelectorAll('[data-lang-toggle]').forEach(b => {
      b.setAttribute('aria-label', lang === 'en' ? 'Ver el sitio en español' : 'View the site in English');
    });
    dispatchEvent(new CustomEvent('langchange', { detail: lang }));
  }

  document.addEventListener('click', e => {
    if (e.target.closest('[data-lang-toggle]')) apply(current() === 'en' ? 'es' : 'en');
  });
  apply(current());
})();
