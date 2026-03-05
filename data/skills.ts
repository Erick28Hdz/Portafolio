// data/skills.ts

export type SkillLevel =
  | "Básico 🏅"
  | "Intermedio 🥈"
  | "Avanzado 🥇"
  | "Experto 🏆";

export interface Skill {
  name: string;
  icon: string;
  level: SkillLevel;
}

export interface SkillsData {
  Ofimatica: Skill[];
  Diseno: Skill[];
  Programacion: Skill[];
  Proyectos: Skill[];
  Ciberseguridad: Skill[];
  Idiomas: Skill[];
  "Habilidades Sociales": Skill[];
}

export const skillsData: SkillsData = {
  Ofimatica: [
    { name: "Microsoft Word", icon: "/images/Iconos/ofimatica/palabra.png", level: "Avanzado 🥇" },
    { name: "Google Docs", icon: "/images/Iconos/ofimatica/docs.png", level: "Avanzado 🥇" },
    {
      name: "Microsoft PowerPoint",
      icon: "/images/Iconos/ofimatica/powerpoint.png",
      level: "Intermedio 🥈",
    },
    {
      name: "Google Diapositivas",
      icon: "/images/Iconos/ofimatica/Diapositivas.png",
      level: "Intermedio 🥈",
    },
    { name: "Microsoft Excel", icon: "/images/Iconos/ofimatica/excel.png", level: "Avanzado 🥇" },
    {
      name: "Google Sheets",
      icon: "/images/Iconos/ofimatica/sheets.png",
      level: "Intermedio 🥈",
    },
    { name: "Microsoft Teams", icon: "/images/Iconos/ofimatica/equipos.png", level: "Experto 🏆" },
    {
      name: "Microsoft OneNote",
      icon: "/images/Iconos/ofimatica/una-nota.png",
      level: "Básico 🏅",
    },
    {
      name: "Microsoft Outlook",
      icon: "/images/Iconos/ofimatica/panorama.png",
      level: "Avanzado 🥇",
    },
    { name: "Gmail", icon: "/images/Iconos/redes-sociales/gmail.png", level: "Avanzado 🥇" },
    {
      name: "Microsoft OneDrive",
      icon: "/images/Iconos/ofimatica/una-unidad.png",
      level: "Avanzado 🥇",
    },
    { name: "Google Drive", icon: "/images/Iconos/ofimatica/google-drive.png", level: "Experto 🏆" },
    { name: "Discord", icon: "/images/Iconos/ofimatica/discord.png", level: "Intermedio 🥈" },
  ],

  Diseno: [
    { name: "Filmora X", icon: "/images/Iconos/diseño/filmora.png", level: "Avanzado 🥇" },
    { name: "Canva", icon: "/images/Iconos/diseño/canva.png", level: "Intermedio 🥈" },
    { name: "Figma", icon: "/images/Iconos/diseño/figma.png", level: "Básico 🏅" },
    {
      name: "Microsoft Publisher",
      icon: "/images/Iconos/diseño/editor.png",
      level: "Básico 🏅",
    },
    {
      name: "Adobe Illustrator",
      icon: "/images/Iconos/diseño/ilustrador.png",
      level: "Intermedio 🥈",
    },
    {
      name: "Adobe Photoshop",
      icon: "/images/Iconos/diseño/photoshop.png",
      level: "Básico 🏅",
    },
    {
      name: "Clip Studio Paint",
      icon: "/images/Iconos/diseño/Clip_Studio_Paint.png",
      level: "Intermedio 🥈",
    },
    { name: "Audacity", icon: "/images/Iconos/diseño/Audacity.png", level: "Intermedio 🥈" },
    { name: "FL Studio", icon: "/images/Iconos/diseño/fl-studio.png", level: "Básico 🏅" },
  ],

  Programacion: [
    { name: "HTML", icon: "/images/Iconos/programacion/html.png", level: "Intermedio 🥈" },
    { name: "CSS", icon: "/images/Iconos/programacion/css.png", level: "Intermedio 🥈" },
    { name: "Bootstrap", icon: "/images/Iconos/programacion/bootstrap.png", level: "Intermedio 🥈" },
    { name: "Node.js", icon: "/images/Iconos/programacion/node-js.png", level: "Básico 🏅" },
    {
      name: "JavaScript",
      icon: "/images/Iconos/programacion/js.png",
      level: "Intermedio 🥈",
    },
    { name: "React", icon: "/images/Iconos/programacion/react.png", level: "Básico 🏅" },
    {
      name: "React Bootstrap",
      icon: "/images/Iconos/programacion/bootstrap-react.png",
      level: "Básico 🏅",
    },
    { name: "TypeScript", icon: "/images/Iconos/programacion/Typescript_logo.png", level: "Básico 🏅" },
    { name: "Python", icon: "/images/Iconos/programacion/piton.png", level: "Básico 🏅" },
    { name: "PHP", icon: "/images/Iconos/programacion/php.png", level: "Intermedio 🥈" },
    { name: "Java", icon: "/images/Iconos/programacion/java.png", level: "Básico 🏅" },
    { name: "SQL", icon: "/images/Iconos/programacion/servidor-sql.png", level: "Básico 🏅" },
    { name: "Microsoft Access", icon: "/images/Iconos/programacion/acceso.png", level: "Básico 🏅" },
    { name: "Git", icon: "/images/Iconos/programacion/git.png", level: "Básico 🏅" },
    { name: "GitHub", icon: "/images/Iconos/redes-sociales/github.png", level: "Intermedio 🥈" },
    { name: "Docker", icon: "/images/Iconos/programacion/docker.png", level: "Básico 🏅" },
    { name: "Kubernetes", icon: "/images/Iconos/programacion/Kubernetes.png", level: "Básico 🏅" },
  ],

  Proyectos: [
    {
      name: "Meta para negocios",
      icon: "/images/Iconos/proyectos/meta.png",
      level: "Avanzado 🥇",
    },
    {
      name: "Microsoft Project",
      icon: "/images/Iconos/proyectos/proyecto.png",
      level: "Básico 🏅",
    },
    { name: "Google Ads", icon: "/images/Iconos/proyectos/adwords.png", level: "Avanzado 🥇" },
    {
      name: "Google Analytics",
      icon: "/images/Iconos/proyectos/data-analytics.png",
      level: "Básico 🏅",
    },
    { name: "Notion", icon: "/images/Iconos/proyectos/Notion.png", level: "Básico 🏅" },
    { name: "Trello", icon: "/images/Iconos/proyectos/trello.png", level: "Intermedio 🥈" },
  ],

  Ciberseguridad: [
    {
      name: "Kali Linux",
      icon: "/images/Iconos/ciberseguridad/kali-linux.png",
      level: "Intermedio 🥈",
    },
    { name: "Wireshark", icon: "/images/Iconos/ciberseguridad/Wireshark.png", level: "Intermedio 🥈" },
    { name: "Nmap", icon: "/images/Iconos/ciberseguridad/nmap.png", level: "Intermedio 🥈" },
    { name: "OpenVAS", icon: "/images/Iconos/ciberseguridad/openvas.png", level: "Básico 🏅" },
    { name: "Metasploit", icon: "/images/Iconos/ciberseguridad/metasploit.png", level: "Básico 🏅" },
    { name: "Nessus", icon: "/images/Iconos/ciberseguridad/nessus.png", level: "Básico 🏅" },
    { name: "Snort", icon: "/images/Iconos/ciberseguridad/snort.png", level: "Básico 🏅" },
    { name: "Burp Suite", icon: "/images/Iconos/ciberseguridad/burp-suite.png", level: "Básico 🏅" },
    { name: "Fortinet", icon: "/images/Iconos/ciberseguridad/Fortinet.png", level: "Intermedio 🥈" },
    { name: "Nutanix", icon: "/images/Iconos/ciberseguridad/nutanix.png", level: "Básico 🏅" },
  ],

  Idiomas: [
    { name: "Español", icon: "/images/Iconos/idiomas/espana.png", level: "Avanzado 🥇" },
    {
      name: "Inglés",
      icon: "/images/Iconos/idiomas/estados-unidos.png",
      level: "Intermedio 🥈",
    },
    { name: "Portugués", icon: "/images/Iconos/idiomas/brasil.png", level: "Básico 🏅" },
  ],

  "Habilidades Sociales": [
    {
      name: "Comunicación verbal",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/comunicacion.png",
    },
    {
      name: "Comunicación no verbal",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/donacion.png",
    },
    {
      name: "Habilidades de empatía",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/empatia.png",
    },
    {
      name: "Resolución de conflictos",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/conflicto.png",
    },
    {
      name: "Trabajo en equipo",
      level: "Intermedio 🥈",
      icon: "/images/Iconos/habilidades-sociales/reunion.png",
    },
    {
      name: "Asertividad",
      level: "Intermedio 🥈",
      icon: "/images/Iconos/habilidades-sociales/asertividad.png",
    },
    {
      name: "Manejo de relaciones",
      level: "Intermedio 🥈",
      icon: "/images/Iconos/habilidades-sociales/resolucion.png",
    },
    {
      name: "Negociación",
      level: "Intermedio 🥈",
      icon: "/images/Iconos/habilidades-sociales/negociacion.png",
    },
    {
      name: "Persuasión",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/chat.png",
    },
    {
      name: "Escucha activa",
      level: "Avanzado 🥇",
      icon: "/images/Iconos/habilidades-sociales/escucha-activa.png",
    },
    {
      name: "Autocontrol emocional",
      level: "Intermedio 🥈",
      icon: "/images/Iconos/habilidades-sociales/autocontrol.png",
    },
    {
      name: "Adaptabilidad",
      level: "Experto 🏆",
      icon: "/images/Iconos/habilidades-sociales/adaptarse.png",
    },
  ],
};
