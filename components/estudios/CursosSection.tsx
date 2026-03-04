"use client";

import { useState, useEffect } from "react";
import Carousel from "../ui/Carousel";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Curso {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface Props {
  cursos: Curso[];
}

export default function CursosSection({ cursos }: Props) {
  const [selectedImage, setSelectedImage] = useState<Curso | null>(null);

  // cerrar con ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <Carousel
        items={cursos}
        autoplay
        autoplayDelay={3500}
        renderItem={(curso) => (
          <div
            className="relative w-full h-100 rounded-3xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(curso)}
          >
            <Image
              src={curso.src}
              alt={curso.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        )}
      />

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative w-[90%] max-w-5xl h-[85vh]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}