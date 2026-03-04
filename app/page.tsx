"use client";

import Hero from "@/components/inicio/Hero";
import TabsViewFancy from "@/components/inicio/TabsViewFancy";
import Footer from "@/components/ui/Footer";
import { serviceTabs } from "@/data/services";
import Navbar from "@/components/ui/Navbar";
import GlowCard from "@/components/ui/GlowCard";
import MapaSudamerica from "@/components/inicio/MapaSudamerica";
import { JSX } from "react";

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-secondary text-primary">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="py-10">
        <Hero />
      </section>

      {/* Sobre mí / Descripción */}
      <section className="w-full mx-auto max-w-[90%] py-10 flex justify-center items-center">
        <GlowCard title="Perfil Profesional" className="max-w-4xl">
          <p className="mt-4">
            Me considero un apasionado autodidacta que busca constantemente la
            mejora de habilidades y la excelencia en diversos aspectos
            profesionales dentro de una empresa.
          </p>

          <p className="mt-4">
            Mi viaje como mochilero por Suramérica me brindó la invaluable
            oportunidad de adquirir una amplia gama de habilidades y
            experiencias. Durante este tiempo, aprendí a sobrevivir con un
            modesto salario diario, asumiendo una variedad de roles y desafíos.
          </p>

          <p className=" mt-4">
            Lo que me define como profesional es mi inquebrantable compromiso y
            energía en cada tarea que emprendo. Soy conocido por ser altamente
            responsable y organizado, incluso en las situaciones más complejas.
            Mi búsqueda constante de la perfección me impulsa a entregar
            resultados excepcionales. Además, valoro enormemente el trabajo en
            equipo y la colaboración efectiva, creyendo que el éxito se logra
            mejor cuando se trabaja en conjunto.
          </p>
        </GlowCard>
        <section id="mapa" className="py-10">
          <h2 className="text-center text-primary">
            Mi viaje por Sudamérica
          </h2>
          <MapaSudamerica />
        </section>
      </section>

      {/* Servicios */}
      <section id="services" className="py-20">
        <h2 className="text-h2 mb-10 text-center text-background">
          Servicios ofrecidos
        </h2>
        <TabsViewFancy tabs={serviceTabs} />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
