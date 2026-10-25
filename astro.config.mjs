// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // URL pública del sitio. Cámbiala cuando tengas la definitiva (fase 8).
  site: "https://tostado-cafe.netlify.app",
  integrations: [sitemap()],
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
