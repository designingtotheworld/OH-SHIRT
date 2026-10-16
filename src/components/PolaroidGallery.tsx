import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, Sparkles } from "lucide-react";

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
    subtitle: "Foto Real"
  },
  {
    id: "pol-2",
    url: "https://i.imgur.com/ELRNJHB.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-3",
    url: "https://i.imgur.com/lnmPziv.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-4",
    url: "https://i.imgur.com/gxItLZA.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-5",
    url: "https://i.imgur.com/d9txAsy.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-6",
    url: "https://i.imgur.com/59mqskZ.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-7",
    url: "https://i.imgur.com/BQDeNLC.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-8",
    url: "https://i.imgur.com/RmkzIvc.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-9",
    url: "https://i.imgur.com/VY8TEnV.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-10",
    url: "https://i.imgur.com/4KcCVWh.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-11",
    url: "https://i.imgur.com/SeorMqR.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-12",
    url: "https://i.imgur.com/KZdJWWe.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-13",
    url: "https://i.imgur.com/3wXppTR.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-14",
    url: "https://i.imgur.com/4uL0JW2.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-15",
    url: "https://i.imgur.com/ARoJIUM.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  },
  {
    id: "pol-16",
    url: "https://i.imgur.com/IaVAYws.jpeg",
    title: "Egresados 2026",
    subtitle: "Foto Real"
  }
];

export function PolaroidGallery() {
  const [selectedImage, setSelectedImage] = useState<PolaroidItem | null>(null);

  return (
    <section className="py-16 bg-neutral-950 border-t border-neutral-900 text-white relative overflow-hidden" id="fotos-reales">
      <div className="max-w-7xl mx-auto px-4">


        {/* Header de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-anton text-white uppercase tracking-wide">
            EGRESADOS DE OH SHIRT ARGENTINA
          </h2>
        </div>

        {/* Cuadrícula de fotos Polaroid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {samplePolaroids.map((item, index) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.06, y: -6, rotate: 0, zIndex: 30 }}
              initial={{ rotate: (index % 2 === 0 ? 1 : -1) * ((index % 3) + 1) }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onClick={() => setSelectedImage(item)}
              className="bg-white text-neutral-900 p-3 rounded-sm shadow-xl cursor-pointer relative group border border-neutral-200"
            >
              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden shadow-inner border border-neutral-200">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-6 h-6 text-yellow-400 drop-shadow-md" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal al hacer clic */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-white text-neutral-900 p-5 pb-14 rounded-sm shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 bg-neutral-900/80 hover:bg-neutral-800 text-yellow-400 p-2 rounded-full cursor-pointer border border-neutral-700"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[4/5] bg-neutral-100 overflow-hidden border border-neutral-200">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between font-sans">
                <span className="font-bold text-sm text-neutral-900">
                  {selectedImage.title}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  Trabajo Real Terminado
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
