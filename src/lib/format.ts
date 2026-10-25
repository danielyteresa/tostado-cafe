import { site } from "../data/site";

// "es_MX" (formato Open Graph) → "es-MX" (formato que entiende Intl).
const locale = site.locale.replace("_", "-");

const priceFormatter = new Intl.NumberFormat(locale, {
  style: "currency",
  currency: site.currency,
  maximumFractionDigits: 0,
});

/** Convierte 45 en "$45" según la moneda del sitio. */
export function formatPrice(price: number): string {
  return priceFormatter.format(price);
}
