# Tostado · Café de barrio — landing page

Proyecto de portafolio: landing de una página para una cafetería ficticia.

## Stack

- Astro (última estable) + TypeScript estricto
- Tailwind CSS v4 vía @tailwindcss/vite, tema definido en src/styles/global.css con @theme
- Node 22+. Despliegue en Netlify.

## Reglas

- Cada sección es un componente en src/components/; index.astro solo los ensambla.
- Ningún texto, precio o dato de contacto dentro de componentes: todo en src/data/*.ts.
- Mobile-first, HTML semántico, accesibilidad AA, imágenes con <Image />.
- JavaScript solo donde sea imprescindible (menú móvil).
- Textos en español, tono cercano (tuteo).
- Explícame brevemente cada cambio importante: estoy aprendiendo.
- Trabajamos por fases (ver plan del proyecto); no avances a la siguiente fase sin que te lo pida.

## Paleta

espresso #3B2416 · crema #F5EBDD · terracota #C8553D · salvia #7A8B69
Fuentes: Fraunces (títulos), Inter (texto).

- Clases de Tailwind: `espresso`, `crema`, `terracota`, `terracota-oscuro`, `salvia`; fuentes `font-display` y `font-sans`.
- Para texto, enlaces y botones usa `terracota-oscuro` (#A8432F): `terracota` no pasa contraste AA en texto normal.
- `salvia` es solo decorativo (bordes, íconos, fondos), nunca para texto sobre crema.
- Las fuentes se configuran en astro.config.mjs (API de fuentes de Astro), no con enlaces a Google Fonts.

## Comandos

- `npm run dev` — servidor local en http://localhost:4321
- `npm run build` — compila a dist/
- `npm run format` — formatea con Prettier

@AGENTS.md
