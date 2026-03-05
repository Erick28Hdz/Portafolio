"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ExperienceCard from "@/components/experiencia/ExperienceCard";
import { experienceData, Experience } from "@/data/experience";

export default function ExperienciaPage() {
  return (
    <main>
      <Navbar />

      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">
        Experiencia Laboral
      </h2>

      {/* ===== CONTRATOS ===== */}
      <Section title="Contratos" data={experienceData.contratos} />

      {/* ===== FREELANCE ===== */}
      <Section title="Freelance" data={experienceData.freelance} />

      {/* ===== INDEPENDIENTE ===== */}
      <Section title="Independiente" data={experienceData.independiente} />

      <Footer />
    </main>
  );
}

/* =====================================================
   COMPONENTE SECTION
===================================================== */

function Section({ title, data }: { title: string; data: Experience[] }) {
  return (
    <section className="mb-24">
      <h3 className="text-subtitulo font-titulos text-primary mb-6 drop-shadow-[2px_4px_3px_#068fff] text-center">
        {title}
      </h3>

      <div
        className={`
      grid gap-12
      ${
        data.length === 1
          ? "grid-cols-1 justify-items-center"
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      }
    `}
      >
        {data.map((item, index) => (
          <div
            key={index}
            className={data.length === 1 ? "w-full max-w-md" : ""}
          >
            <ExperienceCard {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
