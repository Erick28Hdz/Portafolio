// /data/services.ts

export interface ServiceCategory {
  id: number;
  name: string;
  icon: string;
  services: {
    title: string;
    description: string;
  }[];
}

export const serviceTabs: ServiceCategory[] = [
  {
    id: 1,
    name: "Full Stack Development",
    icon: "⚙️",
    services: [
      {
        title: "🌐 Desarrollo de Aplicaciones Web Modernas",
        description:
          "Construcción de aplicaciones web escalables utilizando tecnologías modernas, priorizando rendimiento, arquitectura limpia y experiencia de usuario.",
      },
      {
        title: "📦 Diseño e Implementación de APIs Seguras",
        description:
          "Creación de APIs robustas con autenticación, validación avanzada y control de acceso, garantizando integridad y seguridad en cada endpoint.",
      },
      {
        title: "⚡ Optimización y Performance",
        description:
          "Mejora del rendimiento en frontend y backend mediante técnicas de optimización, reducción de carga y análisis de eficiencia.",
      },
    ],
  },
  {
    id: 2,
    name: "Ciberseguridad",
    icon: "🔐",
    services: [
      {
        title: "🛰️ Análisis de Superficie de Ataque",
        description:
          "Identificación de activos expuestos y evaluación de vulnerabilidades para reducir riesgos en entornos digitales.",
      },
      {
        title: "🛡️ Protección y Gestión de Datos",
        description:
          "Implementación de controles de seguridad, cifrado y buenas prácticas para la protección de información sensible.",
      },
      {
        title: "📋 Auditorías y Buenas Prácticas de Seguridad",
        description:
          "Evaluación de políticas de seguridad y fortalecimiento de estrategias de gestión de riesgos organizacionales.",
      },
    ],
  },
  {
    id: 3,
    name: "Arquitectura & Backend",
    icon: "🧱",
    services: [
      {
        title: "🗄️ Diseño de Bases de Datos Optimizadas",
        description:
          "Modelado estructurado de bases de datos relacionales y no relacionales con enfoque en eficiencia y escalabilidad.",
      },
      {
        title: "🔄 Arquitectura Escalable",
        description:
          "Estructuración de proyectos bajo principios de arquitectura limpia, separación de responsabilidades y mantenibilidad.",
      },
      {
        title: "🔑 Autenticación y Control de Acceso",
        description:
          "Implementación de sistemas seguros de autenticación con gestión de roles y permisos.",
      },
    ],
  },
  {
    id: 4,
    name: "Gestión & Branding Digital",
    icon: "📈",
    services: [
      {
        title: "📊 Gestión de Proyectos Tecnológicos",
        description:
          "Planificación estratégica y coordinación eficiente de proyectos digitales asegurando cumplimiento de objetivos.",
      },
      {
        title: "🎨 Desarrollo de Identidad Digital",
        description:
          "Construcción de identidad visual y narrativa alineada con los objetivos estratégicos del emprendimiento.",
      },
      {
        title: "🚀 Acompañamiento en emprendimientos",
        description:
          "Participación en la estructuración y crecimiento de productos digitales con enfoque sostenible.",
      },
    ],
  },
  {
    id: 5,
    name: "Educación & Investigación",
    icon: "📚",
    services: [
      {
        title: "👨‍🏫 Formación en Desarrollo Web",
        description:
          "Capacitación en fundamentos técnicos, buenas prácticas y construcción de proyectos reales.",
      },
      {
        title: "🔍 Investigación en Seguridad Digital",
        description:
          "Análisis técnico de amenazas, vulnerabilidades y tendencias actuales en ciberseguridad.",
      },
      {
        title: "📖 Documentación Técnica Profesional",
        description:
          "Elaboración de documentación clara y estructurada para proyectos tecnológicos y académicos.",
      },
    ],
  },
];