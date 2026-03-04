"use client";

import Image from "next/image";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowCard from "@/components/ui/GlowCard";

import { Proyecto, proyectosData } from "@/data/proyectos";

export default function ProyectosPage() {
  return (
    <main className="bg-secondary text-white min-h-screen px-6 md:px-10 py-10">
      <Navbar />

      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">
        Proyectos personales y colaborativos
      </h2>

      <Section titulo="Terminados" proyectos={proyectosData.terminados} />
      <Section titulo="En Proceso" proyectos={proyectosData.enProceso} />
      <Section titulo="De Investigación" proyectos={proyectosData.investigacion} />

      <Footer />
    </main>
  );
}
function Section({
  titulo,
  proyectos,
}: {
  titulo: string;
  proyectos: Proyecto[];
}) {
  return (
    <section className="mb-24">
      <h3 className="text-subtitulo font-titulos text-primary mb-6 drop-shadow-[2px_4px_3px_#068fff] text-center">
        {titulo}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {proyectos.map((proyecto) => (
          <GlowCard
            key={proyecto.titulo}
            className="overflow-hidden p-0"
          >
            <ProyectoContent {...proyecto} />
          </GlowCard>
        ))}
      </div>
    </section>
  );
}
function ProyectoContent({
  titulo,
  descripcion,
  tipo,
  enlace,
  imagen,
}: Proyecto) {
  return (
    <>
      <div className="relative w-full h-48">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-6 space-y-4">
        <h4 className="text-lg font-semibold text-accent">
          {titulo}
        </h4>

        <p className="text-sm text-neutral-400">
          {tipo}
        </p>

        <p className="text-sm text-neutral-300">
          {descripcion}
        </p>

        <a
          href={enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 text-sm bg-accent text-black px-4 py-2 rounded-full hover:scale-105 transition"
        >
          Ver Proyecto
        </a>
      </div>
    </>
  );
}