import Image from "next/image";
import React from "react";

interface CarouselImageProps {
  src: string;
  alt: string;
  category?: string;
  mode?: "carousel" | "modal"; // nuevo prop
}

export const CarouselImage: React.FC<CarouselImageProps> = ({
  src,
  alt,
  category,
  mode = "carousel",
}) => {
  // Estilos distintos según el modo
  const containerClass =
    mode === "carousel"
      ? "relative rounded-3xl overflow-hidden w-full h-100 md:h-100"
      : "relative w-full h-120"; // modal ocupa todo el contenedor

  return (
    <div className={containerClass}>
      <Image
        src={src}
        alt={alt}
        fill
        className={mode === "modal" ? "object-contain" : "object-cover"}
        sizes="(max-width: 768px) 100vw, 800px"
        priority={mode === "modal"} // solo el modal se carga con prioridad
        loading={mode === "carousel" ? "lazy" : "eager"} // lazy para carousel
        // placeholder="blur" // opcional si tienes thumbnail blur
      />

      {/* Overlay solo en carousel */}
      {category && mode === "carousel" && (
        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6">
          <h4 className="text-white text-xl font-semibold">{alt}</h4>
          <p className="text-white/80 text-sm">{category}</p>
        </div>
      )}
    </div>
  );
};
