import type { MenuCategory, NavLink, OpeningHours, SocialLink } from "./types";

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
    { label: "Menú", href: "/#menu" },
    { label: "Nosotros", href: "/#nosotros" },
    { label: "Ubicación", href: "/#ubicacion" },
    { label: "Contacto", href: "/#contacto" },
  ] satisfies NavLink[],

  /** Enlace a tu GitHub para el footer. */
  githubUrl: "https://github.com/danielyteresa/tostado-cafe",
  portfolioNotice: "Proyecto de portafolio – negocio ficticio",
} as const;

// Textos de cada sección de la página.
export const content = {
  header: {
    cta: { label: "Reservar", href: "/#contacto" },
    navLabel: "Principal",
    homeLabel: "Tostado, ir al inicio",
    skipLink: "Saltar al contenido",
    openMenuLabel: "Abrir menú",
    closeMenuLabel: "Cerrar menú",
  },
  hero: {
    eyebrow: "Café de especialidad · Tostado en casa",
    title: site.slogan,
    subtitle:
      "Tostamos en casa, molemos al momento y te lo servimos como te gusta.",
    primaryCta: { label: "Ver menú", href: "/#menu" },
    secondaryCta: { label: "Reservar mesa", href: "/#contacto" },
    // Las fotos van en src/assets/images/ con este nombre de archivo.
    image: {
      file: "hero.jpg",
      alt: "Barista preparando bebidas detrás de la barra de madera de la cafetería",
    },
  },
  about: {
    eyebrow: "Nosotros",
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
    image: {
      file: "nosotros.jpg",
      alt: "Interior del local con mesas de madera, lámparas colgantes y una ventana grande",
    },
  },
  menu: {
    eyebrow: "Menú",
    title: "Lo que más se pide",
    subtitle:
      "Un vistazo a nuestro menú. Pregunta en barra por el grano de la semana.",
    categories: [
      { id: "cafes", label: "Cafés" },
      { id: "frias", label: "Bebidas frías" },
      { id: "panaderia", label: "Panadería" },
    ] satisfies { id: MenuCategory; label: string }[],
  },
  gallery: {
    eyebrow: "Galería",
    title: "Un rato en Tostado",
    photos: [
      {
        file: "galeria-1.jpg",
        alt: "Máquina de espresso blanca en la barra, junto al molino",
      },
      {
        file: "galeria-2.jpg",
        alt: "Granos de café recién tostados, de cerca",
      },
      {
        file: "galeria-3.jpg",
        alt: "Barista dibujando una hoja con la leche en un latte",
      },
      {
        file: "galeria-4.jpg",
        alt: "Croissants dorados bajo una campana de vidrio",
      },
      {
        file: "galeria-5.jpg",
        alt: "Mesa de madera junto a la ventana con dos cafés y una libreta",
      },
      {
        file: "galeria-6.jpg",
        alt: "Barista vertiendo agua sobre un filtro de café de goteo",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonios",
    title: "Lo que dicen los vecinos",
    ratingLabel: (rating: number) => `${rating} de 5 estrellas`,
  },
  location: {
    eyebrow: "Ubicación",
    title: "Dónde estamos",
    intro: "A dos cuadras del parque, en la esquina con la panadería vieja.",
    addressTitle: "Dirección",
    hoursTitle: "Horario",
    directionsLabel: "Cómo llegar",
    mapTitle: "Mapa con la ubicación de Tostado",
    newTabNote: "(se abre en otra pestaña)",
  },
  contact: {
    eyebrow: "Contacto",
    title: "Reserva tu mesa",
    subtitle:
      "Déjanos tus datos y te confirmamos por correo. ¿Prefieres algo más rápido? Escríbenos por WhatsApp.",
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappMessage: "¡Hola! Quiero reservar una mesa en Tostado.",
    newTabNote: "(se abre en otra pestaña)",
    submitLabel: "Enviar reserva",
    requiredNote: "Los campos con * son obligatorios.",
    /** Nombre del formulario en Netlify (aparece en el panel de Netlify). */
    formName: "reservas",
    /** Página a la que Netlify lleva después de enviar. */
    successPath: "/gracias",
    people: { min: 1, max: 12, default: 2 },
    fields: {
      name: "Nombre",
      email: "Correo",
      date: "Fecha",
      people: "Número de personas",
      message: "Mensaje (opcional)",
    },
    placeholders: {
      name: "Tu nombre",
      email: "tu@correo.com",
      message: "¿Algo que debamos saber? Cumpleaños, silla para bebé…",
    },
    /** Campo trampa invisible: si un bot lo llena, Netlify descarta el envío. */
    honeypotLabel: "No llenes este campo si eres humano",
  },
  thanks: {
    pageTitle: "¡Reserva enviada! | Tostado · Café de barrio",
    title: "¡Listo, recibimos tu reserva!",
    message:
      "Te escribimos a tu correo en las próximas horas para confirmarla. Si es para hoy, mejor mándanos un WhatsApp.",
    backLabel: "Volver al inicio",
  },
  footer: {
    contactTitle: "Contacto",
    socialTitle: "Síguenos",
    hoursTitle: "Horario",
    githubLabel: "Ver el código en GitHub",
    whatsappLabel: "WhatsApp",
    newTabNote: "(se abre en otra pestaña)",
  },
} as const;
