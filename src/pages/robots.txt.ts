import type { APIRoute } from "astro";

// robots.txt generado con la URL de astro.config.mjs (site), para no repetirla.
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL("sitemap-index.xml", site).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`);
};
