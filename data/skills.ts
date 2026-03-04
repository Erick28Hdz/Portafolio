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
  ofimatica: Skill[];
  diseno: Skill[];
  programacion: Skill[];
  proyectos: Skill[];
  ciberseguridad: Skill[];
  idiomas: Skill[];
  habilidadesSociales: Skill[];
}

export const skillsData: SkillsData = {
  ofimatica: [
    { name: "Microsoft Word", icon: "/icons/word.png", level: "Avanzado 🥇" },
    { name: "Google Docs", icon: "/icons/docs.png", level: "Avanzado 🥇" },
    {
      name: "Microsoft PowerPoint",
      icon: "/icons/powerpoint.png",
      level: "Intermedio 🥈",
    },
    {
      name: "Google Diapositivas",
      icon: "/icons/slides.png",
      level: "Intermedio 🥈",
    },
    { name: "Microsoft Excel", icon: "/icons/excel.png", level: "Avanzado 🥇" },
    {
      name: "Google Sheets",
      icon: "/icons/sheets.png",
      level: "Intermedio 🥈",
    },
    { name: "Microsoft Teams", icon: "/icons/teams.png", level: "Experto 🏆" },
    {
      name: "Microsoft OneNote",
      icon: "/icons/onenote.png",
      level: "Básico 🏅",
    },
    {
      name: "Microsoft Outlook",
      icon: "/icons/outlook.png",
      level: "Avanzado 🥇",
    },
    { name: "Gmail", icon: "/icons/gmail.png", level: "Avanzado 🥇" },
    {
      name: "Microsoft OneDrive",
      icon: "/icons/onedrive.png",
      level: "Avanzado 🥇",
    },
    { name: "Google Drive", icon: "/icons/drive.png", level: "Experto 🏆" },
  ],

  diseno: [
    { name: "Filmora X", icon: "/icons/filmora.png", level: "Avanzado 🥇" },
    { name: "Canva", icon: "/icons/canva.png", level: "Intermedio 🥈" },
    { name: "Figma", icon: "/icons/figma.png", level: "Básico 🏅" },
    {
      name: "Microsoft Publisher",
      icon: "/icons/publisher.png",
      level: "Básico 🏅",
    },
    {
      name: "Adobe Illustrator",
      icon: "/icons/illustrator.png",
      level: "Intermedio 🥈",
    },
    {
      name: "Adobe Photoshop",
      icon: "/icons/photoshop.png",
      level: "Básico 🏅",
    },
    {
      name: "Clip Studio Paint",
      icon: "/icons/clipstudio.png",
      level: "Intermedio 🥈",
    },
    { name: "Audacity", icon: "/icons/audacity.png", level: "Intermedio 🥈" },
    { name: "FL Studio", icon: "/icons/flstudio.png", level: "Básico 🏅" },
  ],

  programacion: [
    { name: "HTML", icon: "/icons/html.png", level: "Intermedio 🥈" },
    { name: "CSS", icon: "/icons/css.png", level: "Intermedio 🥈" },
    { name: "Bootstrap", icon: "/icons/bootstrap.png", level: "Intermedio 🥈" },
    { name: "Node.js", icon: "/icons/node.png", level: "Básico 🏅" },
    {
      name: "JavaScript",
      icon: "/icons/javascript.png",
      level: "Intermedio 🥈",
    },
    { name: "React", icon: "/icons/react.png", level: "Básico 🏅" },
    {
      name: "React Bootstrap",
      icon: "/icons/react-bootstrap.png",
      level: "Básico 🏅",
    },
    { name: "TypeScript", icon: "/icons/typescript.png", level: "Básico 🏅" },
    { name: "Python", icon: "/icons/python.png", level: "Básico 🏅" },
    { name: "PHP", icon: "/icons/php.png", level: "Intermedio 🥈" },
    { name: "Java", icon: "/icons/java.png", level: "Básico 🏅" },
    { name: "SQL", icon: "/icons/sql.png", level: "Básico 🏅" },
    { name: "Microsoft Access", icon: "/icons/access.png", level: "Básico 🏅" },
    { name: "Git", icon: "/icons/git.png", level: "Básico 🏅" },
    { name: "GitHub", icon: "/icons/github.png", level: "Intermedio 🥈" },
    { name: "Docker", icon: "/icons/docker.png", level: "Básico 🏅" },
    { name: "Kubernetes", icon: "/icons/kubernetes.png", level: "Básico 🏅" },
  ],

  proyectos: [
    {
      name: "Meta para negocios",
      icon: "/icons/meta.png",
      level: "Avanzado 🥇",
    },
    {
      name: "Microsoft Project",
      icon: "/icons/proyecto.png",
      level: "Básico 🏅",
    },
    { name: "Google Ads", icon: "/icons/adwords.png", level: "Avanzado 🥇" },
    {
      name: "Google Analytics",
      icon: "/icons/data-analytics.png",
      level: "Básico 🏅",
    },
    { name: "Notion", icon: "/icons/notion.png", level: "Básico 🏅" },
    { name: "Trello", icon: "/icons/trello.png", level: "Intermedio 🥈" },
  ],

  ciberseguridad: [
    {
      name: "Kali Linux",
      icon: "/icons/kali-linux.png",
      level: "Intermedio 🥈",
    },
    { name: "Wireshark", icon: "/icons/wireshark.png", level: "Intermedio 🥈" },
    { name: "Nmap", icon: "/icons/nmap.png", level: "Intermedio 🥈" },
    { name: "OpenVAS", icon: "/icons/openvas.png", level: "Básico 🏅" },
    { name: "Metasploit", icon: "/icons/metasploit.png", level: "Básico 🏅" },
    { name: "Nessus", icon: "/icons/nessus.png", level: "Básico 🏅" },
    { name: "Snort", icon: "/icons/snort.png", level: "Básico 🏅" },
    { name: "Burp Suite", icon: "/icons/burp-suite.png", level: "Básico 🏅" },
    { name: "Fortinet", icon: "/icons/fortinet.png", level: "Intermedio 🥈" },
    { name: "Nutanix", icon: "/icons/nutanix.png", level: "Básico 🏅" },
  ],

  idiomas: [
    { name: "Español", icon: "/icons/espana.png", level: "Avanzado 🥇" },
    {
      name: "Inglés",
      icon: "/icons/estados-unidos.png",
      level: "Intermedio 🥈",
    },
    { name: "Portugués", icon: "/icons/brasil.png", level: "Básico 🏅" },
  ],

  habilidadesSociales: [
    {
      name: "Comunicación verbal",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Comunicación no verbal",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Habilidades de empatía",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Resolución de conflictos",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Trabajo en equipo",
      level: "Intermedio 🥈",
      icon: "",
    },
    {
      name: "Asertividad",
      level: "Intermedio 🥈",
      icon: "",
    },
    {
      name: "Manejo de relaciones",
      level: "Intermedio 🥈",
      icon: "",
    },
    {
      name: "Negociación",
      level: "Intermedio 🥈",
      icon: "",
    },
    {
      name: "Persuasión",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Escucha activa",
      level: "Avanzado 🥇",
      icon: "",
    },
    {
      name: "Autocontrol emocional",
      level: "Intermedio 🥈",
      icon: "",
    },
    {
      name: "Adaptabilidad",
      level: "Experto 🏆",
      icon: "",
    },
  ],
};
