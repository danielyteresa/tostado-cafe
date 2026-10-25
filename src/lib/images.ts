import type { ImageMetadata } from "astro";

// Carga las fotos de src/assets/images/ para que Astro las optimice.
// Solo los nombres que usa el sitio (hero, nosotros, galeria-N): otros archivos
// en la carpeta no se incluyen en el build.
// Si una foto todavía no existe, getImage devuelve undefined y la sección
// se muestra sin ella en lugar de romper el build.
const files = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/images/{hero,nosotros,galeria-*}.{jpg,jpeg,png,webp,avif}",
  { eager: true },
);

export function getImage(file: string): ImageMetadata | undefined {
  return files[`../assets/images/${file}`]?.default;
}
