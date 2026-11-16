# Portfolio de Facundo Biagioni

Portfolio personal. Público principal: desarrolladores y reclutadores. Sitio publicado: https://facundobiagioni.pages.dev (Cloudflare Pages).

## Estructura

Todo lo que se publica está en `public/`. Lo demás (este README y `CLAUDE.md`) queda solo en el repositorio.

| Archivo | Qué es |
|---|---|
| `public/index.html` | Inicio: portada, trabajos, sobre mí, stack, educación y contacto |
| `public/agent-village.html` | Caso de Agent Village (enlaza al prototipo público: agent-village-prototipo.vercel.app) |
| `public/estudio-bg.html` | Caso de Estudio B+G |
| `public/alejandra-filgueira.html` | Caso de Alejandra Filgueira |
| `public/can-i-100-it.html` | Caso de Can i 100% it? |
| `public/legal.html` | Aviso legal y privacidad (Ley 25.326) |
| `public/404.html` | Página de error; Cloudflare la sirve para cualquier ruta que no existe, por eso usa rutas absolutas |
| `public/_headers` | Cabeceras de seguridad (CSP, HSTS, etc.) y caché, que lee Cloudflare Pages |
| `public/robots.txt`, `sitemap.xml`, `.well-known/security.txt` | Buscadores y contacto de seguridad |
| `public/assets/` | Tipografías propias, scripts, íconos, imágenes para compartir, CV, certificados y material de cada proyecto |

Cada página es un HTML con su CSS; el JS va en `assets/js/` (`home.js`, `case.js`) e `assets/i18n.js`. Sin dependencias ni build.

## Idiomas

El sitio arranca en inglés y tiene un botón EN/ES; la elección se guarda en el navegador (`fb-lang`) y se mantiene entre páginas.

- Cada texto está dos veces: `<span lang="en">…</span><span lang="es">…</span>`. El CSS muestra solo el idioma activo.
- Los atributos (alt, aria-label) usan `data-i18n-attr` con `data-en-*` y `data-es-*`.
- El CV se abre en una pestaña nueva, según el idioma. Hoy solo existe `assets/cv/cv-facundo-biagioni-es.pdf`; cuando esté el inglés, guardarlo como `cv-facundo-biagioni-en.pdf` y completar `CV.en` en `assets/i18n.js`.

## Seguridad

- La política de contenido (CSP) solo permite scripts del propio sitio, más un único script en línea (el que fija el idioma antes de pintar), autorizado por su hash en `_headers`. **Si se cambia esa línea, hay que actualizar el hash** o el idioma deja de funcionar.
- Sin cookies, analíticas ni recursos de terceros: las tipografías (licencia SIL OFL, en `assets/fonts/`) se sirven desde el propio sitio.

## Videos

Cada proyecto tiene `hero.webm` (VP9) y `poster.webp`; si un navegador no reproduce WebM, se ve la portada. Los videos originales sin comprimir no van en el repo. Para sumar MP4 hace falta ffmpeg (el MP4 que graba el navegador sale con la duración mal escrita).

## Verlo en la computadora

Desde `public/`: `python -m http.server 8765` y abrir http://127.0.0.1:8765 (las tipografías y la página 404 necesitan un servidor).

## Publicar

Cloudflare Pages conectado a este repositorio: sin framework, sin comando de build y con `public` como directorio de salida. Cada `git push` a `main` publica solo.
