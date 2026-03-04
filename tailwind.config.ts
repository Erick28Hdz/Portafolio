import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },

    extend: {
      screens: {
        xs: "480px",
      },

      fontFamily: {
        title: ["var(--font-titulos)", "sans-serif"],
        subtitle: ["var(--font-subtitulos)", "sans-serif"],
        body: ["var(--font-textos)", "sans-serif"],
        anuncios: ["var(--font-anuncios)", "sans-serif"],
        botones: ["var(--font-botones)", "cursive"],
      },

      // 🔥 Escala tipográfica fluida
      fontSize: {
        h1: ["var(--size-titulos)", { lineHeight: "1.2", fontWeight: "700" }],
        h2: [
          "var(--size-subtitulos)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        p: ["var(--size-parrafos)", { lineHeight: "1.6" }],
        text: ["var(--size-textos)", { lineHeight: "1.5" }],
        button: [
          "var(--size-botones)",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
      },

      spacing: {
        section: "6rem",
      },

      boxShadow: {
        custom: "0 10px 40px rgba(0,0,0,0.1)",
      },
    },
  },

  plugins: [],
};

export default config;
