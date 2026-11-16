# Portfolio de Facundo Biagioni

Portfolio personal. Público principal: desarrolladores y reclutadores.

## Estado

Versión elegida: Monumento (tipografía brutalista, índice de trabajos con vista previa; referencia `referencias/DESIGN2.md`). Las otras dos exploraciones (Señal y Escenario) se borraron; quedan en el historial de git.

| Archivo | Qué es |
|---|---|
| `index.html` | Inicio: portada, trabajos, sobre mí, contacto |
| `can-i-100-it.html` | Caso de estudio de Can i 100% it? |
| `estudio-bg.html` | Caso de estudio de Estudio B+G |
| `404.html` | Página de error (Cloudflare Pages la sirve para cualquier ruta que no existe; por eso usa rutas absolutas) |

Cada página es un solo archivo HTML con CSS y JS propios, sin dependencias ni build. Las fuentes vienen de Google Fonts. Los recursos de cada proyecto van en `assets/proyectos/<proyecto>/`.

## Idiomas

El sitio arranca en inglés y tiene un botón EN/ES. La elección se guarda en el navegador y se mantiene entre páginas (`assets/i18n.js`).

- Cada texto está dos veces en el HTML: `<span lang="en">…</span><span lang="es">…</span>`. El CSS muestra solo el idioma activo.
- Los atributos (alt, aria-label) usan `data-i18n-attr` con `data-en-*` y `data-es-*`.
- El CV se descarga según el idioma. Hoy solo existe `assets/cv/cv-facundo-biagioni-es.pdf`; cuando esté el inglés, guardarlo como `cv-facundo-biagioni-en.pdf` y completar `CV.en` en `assets/i18n.js`.

## Verlo

Abrí `index.html` en el navegador (doble clic). La página 404 solo funciona bien con el sitio publicado.

## Siguiente paso

Casos de Agent Village y Alejandra Filgueira, sección de certificados y de tecnologías, y publicarla gratis en Cloudflare Pages.
