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
        "Plantilla para agencias de viajes desarrollada en HTML, CSS y JavaScript.",
      tipo: "Proyecto Comercial - landing page de agencia de viajes",
      enlace: "https://erick28hdz.github.io/PaginaRumbo/",
      imagen: "/images/Portadas/rumbo.jpg",
    },
     {
      titulo: 'Landing Page "Inmobiliaria EleganciaHabitat"',
      descripcion: "Plantilla comercial para inmobiliaria, desarrollado en HTML, CSS y JavaScript.",
      tipo: "Proyecto Comercial - landing page de una inmobiliaria",
      enlace: "https://erick28hdz.github.io/Inmobiliaria-EleganciaHabitat/",
      imagen: "/images/Portadas/inmobiliaria.jpg",
    },
    {
      titulo: 'Sitio web "Portafolio Personal básico"',
      descripcion: "Proyecto personal desarrollado en HTML, CSS y JavaScript.",
      tipo: "Proyecto Personal - Portafolio personal",
      enlace: "https://erick28hdz.github.io/PortafolioWeb/",
      imagen: "/images/Portadas/portafolio-uno.png",
    },
    {
      titulo: 'Aplicación "Gestor de contraseñas"',
      descripcion: "Aplicación para gestionar contraseñas de forma segura con datos encriptados y configuración en Google drive creado con JavaScript.",
      tipo: "Proyecto comercial - Aplicación de gestión de contraseñas",
      enlace: "https://generador-contrasenas-pro.onrender.com/",
      imagen: "/images/Portadas/Generador-contrasenas.png",
    },
    {
      titulo: 'Sitio web "ERICK-SAT | Software and Technology"',
      descripcion: "Proyecto empresarial propio, sitio web para servicios de desarrollo web y blog tecnológico, desarrollado en React, tailwind CSS, typescript.",
      tipo: "Proyecto Empresarial - Sitio web empresarial",
      enlace: "https://tienda-artesanal-ag.vercel.app/",
      imagen: "/images/Portadas/erick-sat.png",
    },
    {
      titulo: 'Sitio web "Portafolio Personal avanzado"',
      descripcion: "Proyecto portafolio personal desarrollado en Next.js, tailwind CSS, typescript.",
      tipo: "Proyecto Personal - Portafolio personal avanzado",
      enlace: "https://portafolio-erickhdz.vercel.app/",
      imagen: "/images/Portadas/portafolio-dos.png",
    }
  ],

  enProceso: [
    {
      titulo: 'Plataforma "Gym - fitness"',
      descripcion: "Proyecto comercial para un gimnasio, desarrollado en HTML, CSS y JavaScript con backend y bases de datos.",
      tipo: "Proyecto comercial - Plataforma gymnasio",
      enlace: "https://erick28hdz.github.io/Recuperacion/",
      imagen: "/images/Portadas/gimnasio.png",
    },
    {
      titulo: 'Plataforma e-commerce "Fruver""',
      descripcion: "Proyecto comercial para una tienda de frutas y verduras, desarrollado en Next.js, tailwind CSS, typescript.",
      tipo: "Proyecto comercial - Plataforma e-commerce",
      enlace: "https://erick28hdz.github.io/e-commerce-fisico/",
      imagen: "/images/Portadas/fruver.jpg",
    },
    {
      titulo: 'Plataforma "Tienda Artesanal ArteGestión"',
      descripcion: "Proyecto empresarial propio, tienda de artesanías y ropa, desarrollado en Vite, tailwind CSS, typescript.",
      tipo: "Proyecto Empresarial - Plataforma e-commerce",
      enlace: "https://tienda-artesanal-ag.vercel.app/",
      imagen: "/images/Portadas/tienda-ag.png",
    },
    {
      titulo: 'Sitio web"Fruver"',
      descripcion: "Proyecto empresarial, sitio web para una tienda de frutas y verduras, desarrollado en Next.js, tailwind CSS, typescript.",
      tipo: "Proyecto Empresarial - Sitio web empresarial",
      enlace: "https://erick28hdz.github.io/BootstrapJavascript/",
      imagen: "/images/Portadas/fruver.jpg",
    }
  ],

  investigacion: [
    {
      titulo: 'Plataforma "ArteGestión"',
      descripcion: "Proyecto comunitario enfocado en gestión cultural.",
      tipo: "Proyecto Independiente",
      enlace: "https://www.facebook.com/4rteGestion",
      imagen: "/images/Portadas/ArteGestión.png",
    },
    {
      titulo: 'Plataforma "Futbolero"',
      descripcion: "Proyecto personal desarrollado en Angular, tailwind CSS, typescript.",
      tipo: "Proyecto Grupal - Plataforma de noticias deportivas e historias de futbol",
      enlace: "https://erick28hdz.github.io/Futbolero/",
      imagen: "/images/Portadas/futbolero.png",
    }
  ],
};