"use client";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import GlowCard from "@/components/ui/GlowCard";
import Carousel from "@/components/ui/Carousel";
import { cursosCortos } from "@/data/cursos";
import { diplomados } from "@/data/diplomados";
import { creditosUniversitarios } from "@/data/creditosUniversitarios";
import { seminarios } from "@/data/seminarios";
import { CarouselImage } from "@/components/ui/CarouselImage";
import { CategoriasNavbar } from "@/components/ui/CategoriasNavbar";
import { useState } from "react";

export interface Subcategory {
  name: string;
}

export interface Category {
  name: string;
  subcategories: Subcategory[];
}

export default function EstudiosPage() {
  const [activeSection, setActiveSection] = useState<string>("Cursos Cortos");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );

  const categoriesData: Category[] = [
    {
      name: "Cursos Cortos",
      subcategories: [
        { name: "COMUNICACIÓN" },
        { name: "LIDERAZGO" },
        { name: "NEGOCIOS" },
        { name: "SOCIEDAD" },
        { name: "TECNOLOGÍA" },
      ],
    },
    {
      name: "Diplomados",
      subcategories: [
        { name: "DERECHOS HUMANOS" },
        { name: "CIENCIA Y TECNOLOGÍA" },
        { name: "POLÍTICAS PÚBLICAS" },
      ],
    },
    {
      name: "Seminarios",
      subcategories: [{ name: "DERECHOS HUMANOS" }],
    },
    {
      name: "Créditos Universitarios",
      subcategories: [
        { name: "EXCEL" },
        { name: "LECTURA CRÍTICA" },
        { name: "MATEMÁTICAS" },
        { name: "INTELIGENCIA EMOCIONAL" },
      ],
    },
  ];

  // Función para obtener los cursos/ítems según la sección activa y subcategoría
  const getFilteredItems = () => {
    let items: { src: string; alt: string; category: string }[] = [];

    switch (activeSection) {
      case "Cursos Cortos":
        items = cursosCortos;
        break;
      case "Diplomados":
        items = diplomados;
        break;
      case "Seminarios":
        items = seminarios;
        break;
      case "Créditos Universitarios":
        items = creditosUniversitarios;
        break;
    }

    if (selectedSubcategory) {
      items = items.filter((item) => item.category === selectedSubcategory);
    }

    return items;
  };

  const filteredItems = getFilteredItems();

  return (
    <main className="bg-secondary text-white min-h-screen px-6 md:px-10 py-10">
      <Navbar/>

      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">Estudios Profesionales</h2>

      {/* ===== Pregrado / Posgrado ===== */}
      <section className="mb-24 flex justify-center">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl w-full items-start">
          <GlowCard title="Pregrado">
            <p className="text-primary font-textos mb-4">
              Bachiller académico con orientación en gestión empresarial <br />
              I.E.D Marco Fidel Suárez <br />
              Promoción 2015 Bogotá D.C
            </p>

            <p className="text-primary font-textos mb-4">
              Tecnólogo profesional en Análisis y Desarrollo de Software <br />
              SENA <br />
              2025 Bogotá D.C
            </p>

            <p className="text-primary font-textos">
              Ingeniería en sistemas <br />
              CUN <br />
              2027 Bogotá D.C
            </p>
          </GlowCard>

          <GlowCard title="Posgrado">
            <p className="text-primary font-textos">(Próximamente...)</p>
          </GlowCard>
        </div>
      </section>

      {/* Título principal */}
      <h2 className="text-h2 m-10 pb-5 text-center text-background">Estudios secundarios</h2>
      {/* ===== Secciones con Navbar y Carousel ===== */}
      <section className="w-[90%] mx-auto flex flex-col items-center">
        {/* Navbar de categorías / subcategorías */}
        <CategoriasNavbar
          categories={categoriesData}
          onSelectSubcategory={(section, subcategory) => {
            setActiveSection(section);
            setSelectedSubcategory(subcategory);
          }}
        />

        {/* Carousel filtrado */}
        <div className="w-full max-w-5xl mt-2">
          <Carousel
            items={filteredItems}
            autoplay
            autoplayDelay={3500}
            renderItem={(item) => (
              <CarouselImage
                src={item.src}
                alt={item.alt}
                category={item.category}
                mode="carousel"
              />
            )}
          />
        </div>
      </section>
       <Footer />
    </main>
  );
}
