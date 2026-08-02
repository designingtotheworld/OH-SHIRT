import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

interface ImageCarouselProps {
  images?: { url: string; title?: string }[];
  autoPlayInterval?: number;
  placeholderText?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 1,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 1,
  }),
};

export function ImageCarousel({
  images = [],
  autoPlayInterval = 3500,
  placeholderText = "Espacio para imágenes",
}: ImageCarouselProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const currentIndex = images.length > 0 ? ((page % images.length) + images.length) % images.length : 0;

  const paginate = (newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      paginate(1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images, autoPlayInterval]);

  if (!images || images.length === 0) {
    return (
      <div className="max-w-md md:max-w-lg mx-auto aspect-[3/4] rounded-2xl border-2 border-dashed border-neutral-800 bg-neutral-900/80 flex flex-col items-center justify-center text-neutral-400 p-6 text-center">
        <ImageIcon className="w-16 h-16 mb-4 opacity-40 text-neutral-500" />
        <p className="font-anton text-xl md:text-2xl tracking-wide uppercase text-neutral-300">
          {placeholderText}
        </p>
        <p className="text-sm font-sans mt-2 text-neutral-500">
          (A la espera de imágenes de ejemplo)
        </p>
      </div>
    );
  }

  return (
    <div className="relative max-w-lg w-full mx-auto aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 border border-neutral-800 group flex items-center justify-center touch-pan-y">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[currentIndex].url}
          alt={images[currentIndex].title || `Imagen ${currentIndex + 1}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.8}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -10000 || offset.x < -100) {
              paginate(1);
            } else if (swipe > 10000 || offset.x > 100) {
              paginate(-1);
            }
          }}
          className="absolute inset-0 w-full h-full object-cover select-none cursor-grab active:cursor-grabbing"
        />
      </AnimatePresence>

      {/* Title if provided */}
      {images[currentIndex]?.title && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white z-10 pointer-events-none">
          <p className="font-anton text-xl md:text-2xl tracking-wide">
            {images[currentIndex].title}
          </p>
        </div>
      )}

      {/* Controls */}
      {images.length > 1 && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:outline-none z-20 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:outline-none z-20 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-4 right-6 flex space-x-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const newDir = idx > currentIndex ? 1 : -1;
                  setPage([idx, newDir]);
                }}
                className={`h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? "bg-yellow-400 w-7" : "bg-white/70 hover:bg-white w-3"
                }`}
                aria-label={`Ir a la imagen ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


