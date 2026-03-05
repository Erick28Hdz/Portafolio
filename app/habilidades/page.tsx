"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowCard from "@/components/ui/GlowCard";
import { skillsData } from "@/data/skills";
import Image from "next/image";

type Categoria = keyof typeof skillsData;

export default function HabilidadesPage() {
  const [categoria, setCategoria] = useState<Categoria>("Ofimatica");
  const [pagina, setPagina] = useState(0);

  const itemsPorPagina = 6;

  const skills = skillsData[categoria];

  const totalPaginas = Math.ceil(skills.length / itemsPorPagina);

  const inicio = pagina * itemsPorPagina;
  const fin = inicio + itemsPorPagina;

  const skillsPagina = skills.slice(inicio, fin);

  return (
    <main>
      <Navbar />

      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">
        Habilidades Profesionales
      </h2>

      {/* Botones de categoría */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {Object.keys(skillsData).map((key) => (
          <button
            key={key}
            onClick={() => {
              setCategoria(key as Categoria);
              setPagina(0);
            }}
            className={`px-6 py-3 rounded-full transition duration-300 ${
              categoria === key
                ? "bg-accent text-black"
                : "bg-secondary hover:bg-neutral-700"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* GRID DE HABILIDADES */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsPagina.map((skill) => (
          <GlowCard key={skill.name} className="text-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="mx-auto mb-3"
            />

            <h4 className="text-lg font-semibold mb-3 text-background">
              {skill.name}
            </h4>

            <p className="text-sm text-neutral-400">{skill.level}</p>
          </GlowCard>
        ))}
      </div>

      {/* CONTROLES DE PAGINACIÓN */}
      {totalPaginas > 1 && (
        <div className="flex justify-center items-center gap-4 mt-12">
          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: totalPaginas }).map((_, index) => {
              const maxVisible = 7;
              const start = Math.max(pagina - Math.floor(maxVisible / 2), 0);
              const end = Math.min(start + maxVisible, totalPaginas);

              if (index < start || index >= end) return null;

              return (
                <button
                  key={index}
                  onClick={() => setPagina(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    pagina === index ? "w-6 bg-background" : "w-2 bg-gray-400"
                  }`}
                />
              );
            })}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
