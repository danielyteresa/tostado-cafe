import { site } from "../data/site";

// Enlaces que se arman a partir de los datos del negocio.

/** "tel:+525555550123": al tocarlo en el celular, abre la llamada. */
export const phoneHref = `tel:${site.contact.phone.replace(/\s/g, "")}`;

/** Abre WhatsApp con el mensaje ya escrito (opcional). */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

const { lat, lng } = site.geo;

/** Indicaciones en Google Maps hasta el local. */
export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

/** Mapa de OpenStreetMap para el iframe, centrado en el local y con marcador. */
export const mapEmbedUrl = (() => {
  const d = 0.004; // cuánto alrededor del local se ve
  const bbox = [lng - d, lat - d / 2, lng + d, lat + d / 2]
    .map((n) => n.toFixed(4))
    .join(",");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`;
})();
