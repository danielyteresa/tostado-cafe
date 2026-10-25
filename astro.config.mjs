// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio: la usan el sitemap, robots.txt y las etiquetas para redes.
  // Si cambias el nombre del sitio en Netlify, actualízala aquí.
  site: "https://tostadocafe.netlify.app",
  // La página de gracias no se incluye en el sitemap.
  integrations: [sitemap({ filter: (page) => !page.includes("/gracias") })],
  // Astro descarga las fuentes de Google y las sirve desde tu propio sitio,
  // con font-display: swap y una fuente de respaldo ajustada para evitar saltos.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fraunces",
      cssVariable: "--font-fraunces",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["Georgia", "serif"],
      display: "swap",
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["400 700"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
      display: "swap",
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
