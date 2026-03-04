"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Estudios", href: "/estudios" },
  { name: "Experiencia", href: "/experiencia" },
  { name: "Habilidades", href: "/habilidades" },
  { name: "Proyectos", href: "/proyectos" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-8 flex justify-center">
      <div className="flex flex-wrap justify-center gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <div key={link.name} className="relative group">
              {/* Glow efecto */}
              <div
                className={`
                  absolute -inset-1 rounded-full
                  bg-linear-to-r from-fuchsia-500 to-cyan-400
                  blur-md opacity-60
                  transition duration-500
                  ${isActive ? "opacity-100" : "group-hover:opacity-100"}
                `}
              ></div>

              {/* Botón */}
              <Link
                href={link.href}
                className={`
                  relative
                  px-8
                  py-3
                  bg-secondary
                  text-primary
                  font-medium
                  rounded-full
                  transition duration-300
                  ${
                    isActive
                      ? "text-background"
                      : "hover:text-accent"
                  }
                `}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}