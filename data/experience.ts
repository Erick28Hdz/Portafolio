// data/experience.ts

export interface Experience {
  title: string;
  role: string;
  description: string;
  date: string;
  duration: string;
  location: string;
}

export interface ExperienceData {
  contratos: Experience[];
  freelance: Experience[];
  independiente: Experience[];
}

export const experienceData: ExperienceData = {
  contratos: [
    {
      title: "Desarrollador Odoo",
      role: "Desarrollador Odoo junior",
      description:
        "Programación y mantenimiento de módulos Odoo personalizados.",
      date: "Septiembre 2025 - Febrero 2026",
      duration: "6 meses",
      location: "Colombia - Bogotá",
    },
    {
      title: "Aprendiz Sena",
      role: "Aprendiz Cloud",
      description:
        "Estudio de tecnologías de nube y desarrollo de aplicaciones en entornos cloud.",
      date: "Julio 2024 - Enero 2025",
      duration: "7 meses",
      location: "Colombia - Bogotá",
    },
    {
      title: "Campaña 106 - Cámara por Bogotá",
      role: "Gerente campaña",
      description:
        "Encargado del manejo de personal y redes sociales, publicidad y organización de eventos sociales.",
      date: "Diciembre 2021 - Marzo 2022",
      duration: "4 meses",
      location: "Colombia - Bogotá",
    },
    {
      title: "Camping Illuchi",
      role: "Administrador",
      description:
        "Gestión de hospedaje, recaudo de dinero y coordinación de personal voluntario.",
      date: "Agosto 2019 - Febrero 2020",
      duration: "7 meses",
      location: "Ecuador - Baños de Agua Santa",
    },
    {
      title: "Ingelmac",
      role: "Auxiliar eléctrico",
      description:
        "Auxiliar en obras eléctricas y mantenimiento de instalaciones.",
      date: "Septiembre 2017 - Junio 2018",
      duration: "8 meses",
      location: "Colombia - Bogotá",
    },
    {
      title: "Instalar Security",
      role: "Auxiliar de seguridad y mantenimiento",
      description:
        "Auxiliar en instalaciones de seguridad y mantenimiento de equipos de seguridad.",
      date: "Septiembre 2016 - Diciembre 2016",
      duration: "4 meses",
      location: "Colombia - Bogotá",
    },
  ],

  freelance: [
    {
      title: "Proyectos Freelance",
      role: "Desarrollador en formación",
      description:
        "Desarrollo de aplicaciones web modernas con Next.js y Tailwind.",
      date: "2024 - Actualidad",
      duration: "En curso",
      location: "Remoto",
    },
  ],

  independiente: [
    {
      title: "Artista Callejero",
      role: "Artesano y Malabarista",
      description:
        "Venta de artesanías y espectáculos callejeros durante viajes por Colombia y Ecuador.",
      date: "Septiembre 2018 - Octubre 2020",
      duration: "2 años",
      location: "Colombia - Ecuador",
    },
  ],
};