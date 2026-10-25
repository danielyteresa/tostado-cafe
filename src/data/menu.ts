import type { MenuItem } from "./types";

// Productos y precios del menú destacado (en la moneda de site.currency).
export const menu: MenuItem[] = [
  {
    name: "Espresso de la casa",
    description: "Corto e intenso, con notas a cacao y nuez.",
    price: 45,
    category: "cafes",
  },
  {
    name: "Flat white",
    description: "Doble espresso con leche texturizada y sedosa.",
    price: 65,
    category: "cafes",
  },
  {
    name: "Método V60",
    description: "Filtrado a mano con el grano de la semana.",
    price: 70,
    category: "cafes",
  },
  {
    name: "Cold brew",
    description: "Infusionado en frío por 18 horas. Suave y refrescante.",
    price: 70,
    category: "frias",
  },
  {
    name: "Espresso tonic",
    description:
      "Agua tónica, hielo y un shot de espresso con cáscara de naranja.",
    price: 75,
    category: "frias",
  },
  {
    name: "Horchata latte",
    description: "Horchata de la casa con espresso y canela.",
    price: 72,
    category: "frias",
  },
  {
    name: "Croissant de mantequilla",
    description: "Hojaldrado y dorado, horneado cada mañana.",
    price: 48,
    category: "panaderia",
  },
  {
    name: "Concha de cardamomo",
    description: "La clásica concha con un toque especiado.",
    price: 35,
    category: "panaderia",
  },
];
