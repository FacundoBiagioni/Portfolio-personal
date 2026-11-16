# Portfolio personal: instrucciones para Claude Code

Portfolio de Facundo Biagioni. Público: desarrolladores y reclutadores. Tiene que mostrar un frontend de muy alto nivel y ser original.

- **Presupuesto:** gratis. Hosting y dominio gratuitos (Cloudflare Pages, `*.pages.dev`). Nada que pida tarjeta.
- **Idioma:** textos en español rioplatense; código en inglés.
- **Diseño:** usá la skill `ui-ux-pro-max`.
- **Calidad mínima:** primero celular, sin scroll horizontal, contraste 4.5:1, foco visible, `prefers-reduced-motion` respetado y puntaje de Lighthouse de 95 o más.
- **Estado:** versión única, Monumento. Todo lo publicable está en `public/` (ver README). Cada caso de estudio es un HTML propio, bilingüe (inglés por defecto). Los textos los ajusta el usuario.
- **Seguridad:** nada de scripts en línea ni recursos de terceros (la CSP de `public/_headers` los bloquea). Si cambia el script del idioma en el `<head>`, actualizar su hash en `_headers`.
- Sin líneas de atribución en commits ni PRs.
