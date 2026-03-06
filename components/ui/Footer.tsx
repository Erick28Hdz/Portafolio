"use client";

import React from "react";
import Image from "next/image";
import SocialButtons from "./SocialButtons";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary py-20 px-6 mt-32 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* 🔹 Logo / Marca */}
        <div className="flex flex-col items-center space-y-4 mb-10">
          <div className="flex justify-center w-full">
            <a
              href="https://erick-sat.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Logos/logo personal/logo-no-background.png"
                alt="Logo Erick SAT"
                width={200}
                height={70}
                className="object-contain"
                priority={true} // opcional: carga rápida
              />
            </a>
          </div>

          <p className="text-sm tracking-wider opacity-70 max-w-md">
            ERICK SAT · Software and Technology | Desarrollo de Software,
            Soluciones Tecnológicas y Consultoría en TI.
          </p>
        </div>

        {/* 🔹 Redes Sociales */}
        <div className="mb-5">
          <div className="flex justify-center gap-6">
            <SocialButtons />
          </div>
        </div>

        {/* 🔹 Firma y Copyright */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xs opacity-60 tracking-wide">
            © {new Date().getFullYear()} Erick Hernandez · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
