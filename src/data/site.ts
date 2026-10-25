import type { NavLink, OpeningHours, SocialLink } from "./types";

// Datos generales del negocio. Todo es ficticio.
export const site = {
  name: "Tostado",
  fullName: "Tostado · Café de barrio",
  slogan: "Café recién tostado, a la vuelta de tu casa",
  description:
    "Cafetería de especialidad que tuesta su propio café cada semana. Ven por un espresso, quédate por el pan recién horneado.",
  lang: "es",
  locale: "es_MX",
  currency: "MXN",
  priceRange: "$$",
  foundingYear: 2019,

  contact: {
    phone: "+52 55 5555 0123",
    /** Solo dígitos, con código de país: lo usa el enlace de WhatsApp. */
    whatsapp: "525555550123",
    email: "hola@tostado-cafe.example",
  },

  address: {
    street: "Calle de los Cafetos 123",
    neighborhood: "Barrio Ejemplo",
    city: "Ciudad Ficticia",
    region: "CDMX",
    postalCode: "00000",
    country: "MX",
  },

  /** Coordenadas del pin del mapa (fase 6). */
  geo: { lat: 19.4326, lng: -99.1332 },

  hours: [
    {
      label: "Lunes a viernes",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "20:00",
    },
    {
      label: "Sábado y domingo",
      days: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ] satisfies OpeningHours[],

  social: [
    { name: "Instagram", href: "https://instagram.com/" },
    { name: "Facebook", href: "https://facebook.com/" },
    { name: "TikTok", href: "https://tiktok.com/" },
  ] satisfies SocialLink[],

  nav: [
    { label: "Menú", href: "#menu" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contacto" },
  ] satisfies NavLink[],

  /** Enlace a tu GitHub para el footer. */
  githubUrl: "https://github.com/",
  portfolioNotice: "Proyecto de portafolio – negocio ficticio",
} as const;

// Textos de cada sección de la página.
export const content = {
  header: {
    cta: { label: "Reservar", href: "#contacto" },
    openMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
  },
  hero: {
    title: site.slogan,
    subtitle:
      "Tostamos en casa, molemos al momento y te lo servimos como te gusta.",
    primaryCta: { label: "Ver menú", href: "#menu" },
    secondaryCta: { label: "Reservar mesa", href: "#contacto" },
  },
  about: {
    title: "Somos tu café de la esquina",
    paragraphs: [
      "Tostado nació en 2019 con una idea simple: que el buen café no tiene que quedar lejos. Abrimos en un local pequeño del barrio, con un tostador en el fondo y muchas ganas de conocer a los vecinos.",
      "Cada semana tostamos lotes chicos de granos que compramos directo a productores. Así el café que tomas siempre está fresco y sabemos de dónde viene.",
      "Ven a trabajar, a platicar o solo por un pan de la mañana. Aquí te recordamos por tu nombre (y por tu pedido).",
    ],
    highlights: [
      { value: "Cada semana", label: "Tostamos en casa" },
      { value: "4 regiones", label: "De donde vienen nuestros granos" },
      { value: "Desde 2019", label: "En el barrio" },
    ],
  },
  menu: {
    title: "Lo que más se pide",
    subtitle:
      "Un vistazo a nuestro menú. Pregunta en barra por el grano de la semana.",
    tabs: [
      { id: "cafes", label: "Cafés" },
      { id: "frias", label: "Bebidas frías" },
      { id: "panaderia", label: "Panadería" },
    ],
  },
  gallery: {
    title: "Un rato en Tostado",
  },
  testimonials: {
    title: "Lo que dicen los vecinos",
  },
  location: {
    title: "Dónde estamos",
    hoursTitle: "Horario",
    directionsLabel: "Cómo llegar",
  },
  contact: {
    title: "Reserva tu mesa",
    subtitle:
      "Déjanos tus datos y te confirmamos por correo. ¿Prefieres algo más rápido? Escríbenos por WhatsApp.",
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappMessage: "¡Hola! Quiero reservar una mesa en Tostado.",
    submitLabel: "Enviar reserva",
    successMessage: "¡Listo! Recibimos tu reserva y te escribimos pronto.",
    fields: {
      name: "Nombre",
      email: "Correo",
      date: "Fecha",
      people: "Número de personas",
      message: "Mensaje (opcional)",
    },
  },
  footer: {
    contactTitle: "Contacto",
    socialTitle: "Síguenos",
    githubLabel: "Ver el código en GitHub",
  },
} as const;
