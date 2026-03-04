export interface Proyecto {
  titulo: string;
  descripcion: string;
  tipo: string;
  enlace: string;
  imagen: string;
}

export interface ProyectosData {
  terminados: Proyecto[];
  enProceso: Proyecto[];
  investigacion: Proyecto[];
}

export const proyectosData: ProyectosData = {
  terminados: [
    {
      titulo: 'Landing Page "Rumbo"',
      descripcion:
        "Plantilla para agencias de viajes desarrollada en HTML y CSS.",
      tipo: "Proyecto Comercial",
      enlace: "https://erick28hdz.github.io/PaginaRumbo/",
      imagen: "/images/Portadas/rumbo.jpg",
    },
  ],

  enProceso: [
    {
      titulo: 'Página Web "Inmobiliaria"',
      descripcion: "Proyecto educativo en mejora continua.",
      tipo: "Proyecto Académico",
      enlace: "https://erick28hdz.github.io/PaginaWeb/",
      imagen: "/images/Portadas/inmobiliaria.jpg",
    },
  ],

  investigacion: [
    {
      titulo: 'Plataforma "ArteGestión"',
      descripcion: "Proyecto comunitario enfocado en gestión cultural.",
      tipo: "Proyecto Independiente",
      enlace: "https://www.facebook.com/4rteGestion",
      imagen: "/images/Portadas/ArteGestión.png",
    },
  ],
};