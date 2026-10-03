import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface PolaroidItem {
  id: string;
  url: string;
  title: string;
  subtitle?: string;
}

const samplePolaroids: PolaroidItem[] = [
  {
    id: "pol-1",
    url: "https://i.imgur.com/jguIoLv.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-2",
    url: "https://i.imgur.com/ELRNJHB.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-3",
    url: "https://i.imgur.com/lnmPziv.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-4",
    url: "https://i.imgur.com/gxItLZA.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-5",
    url: "https://i.imgur.com/d9txAsy.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-6",
    url: "https://i.imgur.com/59mqskZ.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-7",
    url: "https://i.imgur.com/BQDeNLC.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-8",
    url: "https://i.imgur.com/RmkzIvc.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-9",
    url: "https://i.imgur.com/VY8TEnV.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-10",
    url: "https://i.imgur.com/4KcCVWh.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-11",
    url: "https://i.imgur.com/SeorMqR.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-12",
    url: "https://i.imgur.com/KZdJWWe.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-13",
    url: "https://i.imgur.com/3wXppTR.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-14",
    url: "https://i.imgur.com/4uL0JW2.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-15",
    url: "https://i.imgur.com/ARoJIUM.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  },
  {
    id: "pol-16",
    url: "https://i.imgur.com/IaVAYws.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real de Producción"
  }
];

export function PolaroidGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? samplePolaroids.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === samplePolaroids.length - 1 ? 0 : prev + 1));
  };

  const current = samplePolaroids[currentIndex];

  return (
    <section className="py-16 bg-neutral-950 border-t border-neutral-900 text-white relative overflow-hidden" id="fotos-reales">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header de la sección */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 text-xs font-mono uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Galería Exclusiva</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-anton text-white uppercase tracking-wide">
            POLAROID FOTOS REALES
          </h2>
          <p className="mt-2 text-neutral-400 font-sans text-xs sm:text-sm max-w-md mx-auto">
            Mirá los trabajos reales terminados. Navegá entre las fotos manteniendo el marco Polaroid intacto.
          </p>
        </div>

        {/* Contenedor principal Polaroid centrado */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md bg-white text-neutral-900 p-4 sm:p-5 pb-12 sm:pb-16 rounded-sm shadow-[0_25px_60px_-15px_rgba(255,255,255,0.15)] transform rotate-1 hover:rotate-0 transition-transform duration-300">
            {/* Foto interior cambiante */}
            <div className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden shadow-inner border border-neutral-200">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.url}
                  alt={current.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            {/* Texto inferior estilo firma Polaroid */}
            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-neutral-800 font-sans">
              <span className="font-handwriting font-bold text-sm sm:text-base tracking-wide text-neutral-900">
                {current.title}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono">
                {currentIndex + 1} / {samplePolaroids.length}
              </span>
            </div>
          </div>

          {/* Controles de flecha externos para cambiar la foto interior */}
          {samplePolaroids.length > 1 && (
            <div className="flex items-center gap-6 mt-8">
              <button
                onClick={handlePrev}
                className="bg-neutral-900 hover:bg-yellow-400 text-yellow-400 hover:text-black p-3.5 rounded-full border border-yellow-400/50 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                title="Foto Anterior"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <span className="text-neutral-400 font-mono text-xs tracking-wider">
                USÁ LAS FLECHAS
              </span>
              <button
                onClick={handleNext}
                className="bg-neutral-900 hover:bg-yellow-400 text-yellow-400 hover:text-black p-3.5 rounded-full border border-yellow-400/50 shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                title="Foto Siguiente"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
