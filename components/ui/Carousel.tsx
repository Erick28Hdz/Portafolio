"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, PanInfo, AnimatePresence } from "framer-motion";
import { CarouselImage } from "./CarouselImage";

export interface CarouselItem {
  src: string;
  alt: string;
  category?: string;
}

interface CarouselProps<T extends CarouselItem> {
  items: T[];
  renderItem?: (item: T, index: number) => React.ReactNode; // opcional si usas CarouselImage
  autoplay?: boolean;
  autoplayDelay?: number;
}

export default function Carousel<T extends CarouselItem>({
  items,
  renderItem,
  autoplay = true,
  autoplayDelay = 3000,
}: CarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(Math.floor(items.length / 2));
  const [isPaused, setIsPaused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!autoplay || isPaused) return;

    autoplayRef.current = setInterval(goToNext, autoplayDelay);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, isPaused, autoplayDelay, goToNext]);

  const changeSlide = (newIndex: number) => {
    const safeIndex = (newIndex + items.length) % items.length;
    setActiveIndex(safeIndex);
  };

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const threshold = 75;
    if (info.offset.x > threshold) changeSlide(activeIndex - 1);
    else if (info.offset.x < -threshold) changeSlide(activeIndex + 1);
  };

  return (
    <section className="w-full flex justify-center overflow-hidden">
      <div
        className="relative w-full max-w-5xl h-112.5 flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="w-full h-full flex items-center justify-center"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={onDragEnd}
        >
          {items.map((item, index) => {
            let offset = index - activeIndex;
            if (offset > items.length / 2) offset -= items.length;
            if (offset < -items.length / 2) offset += items.length;
            const isVisible = Math.abs(offset) <= 1;

            return (
              <motion.div
                key={index}
                className="absolute w-1/2 md:w-1/3 cursor-pointer"
                onClick={() => setSelectedIndex(index)}
                animate={{
                  x: `${offset * 60}%`,
                  scale: offset === 0 ? 1 : 0.8,
                  opacity: isVisible ? 1 : 0,
                  zIndex: items.length - Math.abs(offset),
                }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                {renderItem ? (
                  renderItem(item, index)
                ) : (
                  <CarouselImage
                    src={item.src}
                    alt={item.alt}
                    category={item.category}
                    mode="carousel"
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedIndex !== null && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
            >
              <motion.div
                className="relative max-w-6xl w-full px-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-white text-3xl"
                  onClick={() => setSelectedIndex(null)}
                >
                  ✕
                </button>

                <div className="w-full h-[90vh] flex items-center justify-center">
                  <CarouselImage
                    src={items[selectedIndex].src}
                    alt={items[selectedIndex].alt}
                    category={items[selectedIndex].category}
                    mode="modal" // importante: imagen completa
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CONTROLES */}
        <div className="absolute bottom-2 flex gap-2 justify-center w-full">
          {items.map((_, index) => {
            const maxVisible = 7;
            const start = Math.max(activeIndex - Math.floor(maxVisible / 2), 0);
            const end = Math.min(start + maxVisible, items.length);
            if (index < start || index >= end) return null;

            return (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-background"
                    : "w-2 bg-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
