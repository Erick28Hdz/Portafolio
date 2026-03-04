"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
/* ---------------- ICON ---------------- */

const DotIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);

/* ---------------- MAIN HERO ---------------- */

export default function HeroCode() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Light */}
      <div className="absolute inset-0 -z-10 dark:hidden bg-linear-to-b from-primary to-backgroundCustom/40" />

      {/* Background Dark */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-linear-to-b from-secondary to-accent/40" />

      <div className="max-w-7xl w-full py-5 grid lg:grid-cols-2 gap-10 items-center">
        {/* TEXT SIDE */}
        <div className="space-y-5 pl-10 animate-fade-in-up max-w-2xl mx-auto lg:mx-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-background/90 dark:bg-primary/10 border rounded-full text-xs text-secondary dark:text-primary">
            <DotIcon />
            Welcome to my universe
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary dark:text-primary">
            Hello <br />
            I’m{" "}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Erick Hernández
            </span>
          </h1>

          <p className="text-primary dark:text-gray-300 text-lg leading-relaxed max-w-xl">
            Full Stack Developer con enfoque en ciberseguridad y desarrollo
            autónomo. Diseño y construyo aplicaciones web modernas, seguras y
            escalables, aplicando buenas prácticas de arquitectura, optimización
            y protección de datos en cada proyecto.
          </p>
          <div className="flex flex-wrap gap-3 text-lg text-background dark:text-gray-300 pt-4">
            <span>⚙️ Full Stack</span>
            <span>🔐 Ciberseguridad</span>
            <span>🚀 Desarrollo Autónomo</span>
            <span>🧱 Arquitectura Escalable</span>
            <span>🛡️ Protección de Datos</span>
            <span>⚡ Optimización</span>
            <span>📦 APIs Seguras</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-evenly gap-10 py-5">
            {/* Imagen del emprendimiento */}
            <div>
              <a
                href="https://erick-sat.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Logos/logo personal/logo-no-background.svg"
                  alt="Software Screenshot"
                  width={210}
                  height={150}
                  className="w-40 h-auto"
                  priority
                />
              </a>
            </div>

            {/* Contenido + Botones */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="flex gap-8 justify-center lg:justify-center pt-2">
                <Button variant="secondary">Ver más</Button>

                <Button variant="outlineGray">Contactarse</Button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex 
                  justify-center 
                  items-center"
        >
          <Image
            src="/images/perfil/imagen.png"
            alt="Erick Hernandez - Full Stack Developer"
            width={320}
            height={300}
            priority
            className="object-contain 
           drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]"
          />
        </div>

        {/* CODE SIDE */}
        <div className="animate-fade-in-up"></div>
      </div>
    </section>
  );
}
