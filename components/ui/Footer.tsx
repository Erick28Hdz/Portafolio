"use client";

import React from "react";
import Image from "next/image";

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
        <div className="flex justify-center gap-8 mb-12 flex-wrap">
          <a
            href="https://www.facebook.com/sapereaude.jsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/facebook1.png"
              alt="Facebook"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.instagram.com/sapereaude.jsh/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/instagram1.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://wa.me/573022016072"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/whatsapp1.png"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/erick-hernandez-sapere-aude/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/linkedin1.png"
              alt="LinkedIn"
              width={30}
              height={30}
            />
          </a>

          <a
            href="https://github.com/Erick28Hdz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/github.png"
              alt="GitHub"
              width={30}
              height={30}
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsLfpjRFLdRpNPPBcFlCxFMdxhlfbWlshWCfLkhcmVxXVJBKtBkBSVhkJGgvBzcDpVBZL"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <Image
              src="/images/Iconos/redes-sociales/gmail.png"
              alt="Gmail"
              width={30}
              height={30}
            />
          </a>
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
