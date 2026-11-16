# Portfolio de Facundo Biagioni

Portfolio personal. Público principal: desarrolladores y reclutadores.

## Estado

Etapa de exploración: 3 versiones del diseño, una por referencia.

| Carpeta | Versión | Referencia |
|---|---|---|
| `v1/` | Señal: terminal, esfera ASCII interactiva, retrato ASCII | `referencias/DESIGN1.md` |
| `v2/` | Monumento: tipografía brutalista, índice con vista previa | `referencias/DESIGN2.md` |
| `v3/` | Escenario: cinematográfico, paneles en perspectiva, esfera de partículas | `referencias/DESIGN3.md` |

Cada versión es un solo archivo HTML con CSS y JS propios, sin dependencias ni build. Las fuentes vienen de Google Fonts.

## Idiomas

El sitio arranca en inglés y tiene un botón EN/ES. La elección se guarda en el navegador y se mantiene entre páginas (`assets/i18n.js`).

- Cada texto está dos veces en el HTML: `<span lang="en">…</span><span lang="es">…</span>`. El CSS muestra solo el idioma activo.
- Los atributos (alt, aria-label) usan `data-i18n-attr` con `data-en-*` y `data-es-*`.
- El CV se descarga según el idioma. Hoy solo existe `assets/cv/cv-facundo-biagioni-es.pdf`; cuando esté el inglés, guardarlo como `cv-facundo-biagioni-en.pdf` y completar `CV.en` en `assets/i18n.js`.

## Ver las versiones

Versión elegida: Monumento (`v2/`). La portada tiene 3 variantes en prueba: `v2/index.html?hero=a`, `?hero=b` y `?hero=c` (sin parámetro, la original con el nombre).

`404.html` y `assets/favicon.svg` están en la raíz: Cloudflare Pages sirve `404.html` para cualquier ruta que no exista, por eso usa rutas absolutas.

Abrí `index.html` en el navegador (doble clic) y elegí una.

## Siguiente paso

Elegir una versión (o mezclar partes), completar los textos y los proyectos con capturas reales, y pasarla al stack final para publicarla gratis en Cloudflare Pages.
