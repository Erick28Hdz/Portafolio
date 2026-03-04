# 🎨 Erick Hernández – Personal Brand System

## 🔷 Brand Identity

Portafolio enfocado en:

- Full Stack Development
- Ciberseguridad
- Arquitectura Escalable
- Profesionalismo técnico
- Estética moderna y tecnológica
- Experiencias de viaje y proyectos personales

---

# 🌈 Color System

## Light Mode

| Token               | Variable                  | Hex       | Uso |
|--------------------|---------------------------|-----------|-----|
| Primary             | --color-primary           | #eeeeee   | Texto principal claro |
| Secondary           | --color-secondary         | #000000   | Texto oscuro |
| Accent              | --color-accent            | #4e4feb   | Botones, highlights, hover |
| Background          | --color-background        | #068fff   | Fondo principal |
| Card                | --card                     | #ffffff   | Fondo de cards y modales |
| Card Foreground     | --card-foreground          | #000000   | Texto dentro de cards y modales |
| Input               | --input                    | #e5e5e5   | Campos de formularios |
| Border              | --border                   | #e5e5e5   | Bordes de cards, inputs, contenedores |
| Ring                | --ring                     | #2563eb   | Focus states / outlines |
| Primary Foreground  | --primary-foreground       | #000000   | Texto general sobre backgrounds claros |
| Secondary Foreground| --secondary-foreground     | #ffffff   | Texto sobre backgrounds oscuros |
| Accent Foreground   | --accent-foreground        | #ffffff   | Texto sobre botones / highlights |
| Background Foreground | --background-foreground  | #000000   | Texto sobre fondos principales claros |

---

## Dark Mode

| Token               | Variable                  | Hex       | Uso |
|--------------------|---------------------------|-----------|-----|
| Primary             | --color-primary           | #f8fafc   | Texto principal claro |
| Secondary           | --color-secondary         | #000000   | Texto oscuro |
| Accent              | --color-accent            | #4e4feb   | Botones, highlights, hover |
| Background          | --color-background        | #0f172a   | Fondo principal oscuro |
| Card                | --card                     | #1e293b   | Fondo de cards y modales |
| Card Foreground     | --card-foreground          | #f8fafc   | Texto dentro de cards y modales |
| Input               | --input                    | #334155   | Campos de formularios |
| Border              | --border                   | #334155   | Bordes de cards, inputs, contenedores |
| Ring                | --ring                     | #2563eb   | Focus states / outlines |
| Primary Foreground  | --primary-foreground       | #0f172a   | Texto general sobre backgrounds oscuros |
| Secondary Foreground| --secondary-foreground     | #f8fafc   | Texto sobre fondos secundarios |
| Accent Foreground   | --accent-foreground        | #ffffff   | Texto sobre botones / highlights |
| Background Foreground | --background-foreground  | #f8fafc   | Texto sobre fondos oscuros |

---

# 🔤 Typography

## Fonts

- **Hero / Title (H1)** → New Rocker, cursive  
- **Section Titles (H2/H3)** → Roboto, sans-serif  
- **Subtitles (H4-H6)** → Raleway, sans-serif  
- **Body / Paragraphs** → Montserrat, sans-serif  
- **Buttons** → Black Ops One, cursive  
- **Small / Info / Anuncios** → Titillium Web, sans-serif  
- **Links / Navegación** → Exo 2, sans-serif  

## Fluid Scale

| Element           | Variable / Tamaño                   | Uso |
|------------------|------------------------------------|-----|
| Hero Title        | --titulos → clamp(2.5rem, 5vw,4rem) | H1 principal / hero |
| Section Title     | --subtitulos → clamp(1.8rem,3vw,2.5rem) | H2 / H3 |
| Paragraph         | --parrafos → clamp(1rem,1.5vw,1.125rem) | Texto general |
| Small / Info      | --Textos → 14px                     | Notas, labels, subtítulos menores |
| Buttons           | --botones → 18px                     | Botones |
| Anuncios          | --anuncios → 16px                    | Textos informativos secundarios |

---

# 🧩 Design Principles

- Clean & Minimal  
- Technical & Modern SaaS inspired  
- Strong accent usage (glow, hover, buttons)  
- High contrast readability  
- Component-driven (cards, modals, GlowCard)  
- Fluid typography y responsive design  

---

# ✨ UI Components / Standard Elements

- **Cards**: usan `--card` y `--card-foreground`, con border-radius `--radius` y glow opcional  
- **Buttons**: `--color-accent` y `--accent-foreground`, hover / focus con glow y transición  
- **Inputs / Forms**: `--input` y `--border`, enfoque (`--ring`)  
- **Modals / Tooltip**: fondo de cards, texto con foregrounds, interacción hover y click  
- **Glow / Hover States**: aplicables a títulos, botones y cards usando accent y background colors  

---

# 🌀 Spacing / Layout

- --radius: 0.625rem (bordes redondeados)  
- Variables de espaciado sugeridas:  
  - --spacing-xs: 0.25rem  
  - --spacing-sm: 0.5rem  
  - --spacing-md: 1rem  
  - --spacing-lg: 2rem  
  - --spacing-xl: 4rem  

---

# 🔄 How to Update Colors / Typography

1. Modificar variables dentro de `globals.css`  
2. Actualizar este archivo `BRAND.md`  
3. Commit & push  

Todas las variables de color y tipografía se controlan vía `:root` y `.dark` para asegurar consistencia en todo el portafolio.  

---

# 🖌 Summary

Este Brand System sirve como **guía centralizada** de colores, tipografía, componentes y principios de diseño para todo el portafolio personal de **Erick Hernández**.  

Incluye soporte completo para **modo claro / oscuro**, estados hover y focus, tipografía fluida, componentes UI reutilizables y paleta de colores consistente para toda la web.