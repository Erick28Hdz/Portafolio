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
      titulo: 'Sitio Web Oficial "SatCore Solutions"',
      descripcion: "Sitio web oficial y principal de SatCore Solutions, enfocado en ofrecer servicios profesionales de desarrollo de software a la medida, ingeniería web y soluciones tecnológicas avanzadas.",
      tipo: "Proyecto Empresarial propio - Sitio web oficial",
      enlace: "https://www.satcore.solutions/",
      imagen: "/images/Portadas/satcore.png",
    },
    {
      titulo: 'E-commerce "Taller Artesanal ArteGestión"',
      descripcion: "Tienda online oficial para la comercialización de artesanías, joyería tejida en macramé y productos tradicionales con un diseño moderno y funcional.",
      tipo: "Proyecto Empresarial - E-commerce de artesanías",
      enlace: "https://www.taller-artesanal-ag.shop/",
      imagen: "/images/Portadas/taller_artesanal.png",
    },
    {
      titulo: 'Sitio web "SatCore Solutions Presentation Card"',
      descripcion: "Plantilla tarjeta de presentación interactiva y sitio web para los servicios de una persona, industria o marca.",
      tipo: "Proyecto Empresarial - Tarjeta de presentación digital",
      enlace: "https://satcore-solutions-presentation-card.vercel.app/",
      imagen: "/images/Portadas/personal_card_template.png",
    },
    {
      titulo: 'Catálogo Comercial "SatCore Solutions"',
      descripcion: "Plantilla catálogo comercial interactivo y presentación de servicios tecnológicos avanzados de desarrollo web, software a la medida y soluciones digitales.",
      tipo: "Proyecto Empresarial - Catálogo comercial digital",
      enlace: "https://satcore-solutions-commercial-catalo.vercel.app/",
      imagen: "/images/Portadas/digital_catalog_template.png",
    },
    {
      titulo: 'Landing Page "Scaffold"',
      descripcion: "Plantilla de aterrizaje moderna y optimizada para la conversión, desarrollada para la presentación de productos digitales y servicios tecnológicos.",
      tipo: "Proyecto Comercial - Landing Page",
      enlace: "https://scaffoldlandingpage.vercel.app/",
      imagen: "/images/Portadas/commercial_landing_template.png",
    },
    {
      titulo: 'Sitio Web "SatCore Corporativo"',
      descripcion: "Sitio web corporativo y de presentación institucional enfocado en los servicios de desarrollo de software y consultoría tecnológica empresarial.",
      tipo: "Proyecto Empresarial - Sitio web corporativo",
      enlace: "https://satcore-corporative.vercel.app/",
      imagen: "/images/Portadas/premium_corporate_template.png",
    },
    {
      titulo: 'Plataforma Web "Pizzería D\'Sofy"',
      descripcion: "Sitio web comercial para pizzería con un diseño atractivo, optimizado para la presentación de menús, productos y la experiencia visual del cliente.",
      tipo: "Proyecto Comercial - Sitio web gastronómico",
      enlace: "https://pizzeria-dsofy.vercel.app/",
      imagen: "/images/Portadas/pizzeria_dsofy.png",
    },
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
      titulo: 'Plataforma Web "Wayra Tours"',
      descripcion: "Sitio web interactivo y optimizado para agencias de turismo y experiencias de viaje, diseñado con un enfoque visual atractivo y de fácil navegación.",
      tipo: "Proyecto Comercial - Plataforma de turismo",
      enlace: "https://wayra-tours-eight.vercel.app/",
      imagen: "/images/Portadas/wayra_tours_booking.png",
    },
    {
      titulo: 'Landing Page "Vanguardia"',
      descripcion: "Plantilla de aterrizaje de alto rendimiento con un enfoque estético moderno, diseñada para destacar propuestas de valor y captar clientes potenciales.",
      tipo: "Proyecto Comercial - Landing Page",
      enlace: "https://lp-vanguardia.vercel.app/",
      imagen: "/images/Portadas/lp_vanguardia.png",
    },
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