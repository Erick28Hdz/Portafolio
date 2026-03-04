// src/components/CategoriasNavbar.tsx
import React, { useState } from "react";

interface Subcategory {
  name: string;
}

interface Category {
  name: string;
  subcategories: Subcategory[];
}

interface CategoriasNavbarProps {
  categories: Category[];
  onSelectSubcategory?: (category: string, subcategory: string) => void;
}

export const CategoriasNavbar: React.FC<CategoriasNavbarProps> = ({
  categories,
  onSelectSubcategory,
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name);

  return (
    <div className="w-full flex flex-col items-center mb-12">
      {/* Nivel 1: Categorías principales */}
      <div className="flex flex-wrap justify-center gap-6 mb-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              activeCategory === cat.name
                ? "bg-linear-to-r from-fuchsia-500 to-cyan-400 text-white"
                : "bg-neutral-800 text-gray-300 hover:bg-indigo-600"
            }`}
            onClick={() => setActiveCategory(cat.name)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Nivel 2: Subcategorías de la categoría activa */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories
          .find((cat) => cat.name === activeCategory)
          ?.subcategories.map((sub) => (
            <button
              key={sub.name}
              className="px-6 py-3 bg-neutral-800 rounded-full hover:bg-indigo-600 text-white transition"
              onClick={() =>
                onSelectSubcategory?.(activeCategory, sub.name)
              }
            >
              {sub.name}
            </button>
          ))}
      </div>
    </div>
  );
};