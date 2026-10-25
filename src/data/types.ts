// Tipos compartidos por los archivos de datos. Si cambias de negocio,
// estos tipos te avisan si te falta algún campo.

export interface NavLink {
  label: string;
  href: string;
}

export interface OpeningHours {
  /** Texto que se muestra, ej. "Lunes a viernes". */
  label: string;
  /** Días en formato schema.org para el JSON-LD, ej. ["Monday", "Tuesday"]. */
  days: string[];
  /** Hora en formato 24 h, ej. "07:30". */
  opens: string;
  closes: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export type MenuCategory = "cafes" | "frias" | "panaderia";

export interface MenuItem {
  name: string;
  description: string;
  /** Precio en la moneda definida en site.currency. */
  price: number;
  category: MenuCategory;
}

export interface Testimonial {
  name: string;
  quote: string;
  /** De 1 a 5. */
  rating: 1 | 2 | 3 | 4 | 5;
}
