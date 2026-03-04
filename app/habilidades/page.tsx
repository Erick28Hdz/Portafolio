"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowCard from "@/components/ui/GlowCard";
import { skillsData } from "@/data/skills";

type Categoria = keyof typeof skillsData;

export default function HabilidadesPage() {
  const [categoria, setCategoria] = useState<Categoria>("ofimatica");

  return (
    <main className="bg-secondary text-white min-h-screen px-6 md:px-10 py-10">
      <Navbar />
      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">
        Habilidades Profesionales
      </h2>

      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {Object.keys(skillsData).map((key) => (
          <button
            key={key}
            onClick={() => setCategoria(key as Categoria)}
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

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData[categoria].map((skill) => (
          <GlowCard key={skill.name} className="text-center">
            <h4 className="text-lg font-semibold mb-3 text-background">
              {skill.name}
            </h4>
            <p className="text-sm text-neutral-400">{skill.level}</p>
          </GlowCard>
        ))}
      </div>

      <Footer />
    </main>
  );
}
