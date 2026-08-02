import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, ChevronLeft, ChevronRight, X, Sparkles, Image as ImageIcon } from "lucide-react";

export interface ModelItem {
  id: string;
  url: string; // Frente (o frontUrl)
  backUrl?: string; // Espalda
  title?: string;
  subtitle?: string;
}

// Lista de modelos Base Lisa
const sampleModelsLisas: ModelItem[] = [
  {
    id: "mod-13",
    url: "https://i.imgur.com/n7WnaYp.png",
    backUrl: "https://i.imgur.com/Da40dDt.png",
    title: "Modelo 13",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-12",
    url: "https://i.imgur.com/DfTmh3G.png",
    backUrl: "https://i.imgur.com/mRGnlka.png",
    title: "Modelo 12",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-1",
    url: "https://i.imgur.com/qBCjENY.png",
    backUrl: "https://i.imgur.com/gPZ7JFx.png",
    title: "Modelo 1",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-2",
    url: "https://i.imgur.com/1LfjaX7.png",
    backUrl: "https://i.imgur.com/7GQ8RGl.png",
    title: "Modelo 2",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-3",
    url: "https://i.imgur.com/AwnC1cG.png",
    backUrl: "https://i.imgur.com/x850h9K.png",
    title: "Modelo 3",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-4",
    url: "https://i.imgur.com/KqyzKei.png",
    backUrl: "https://i.imgur.com/2GBxL2H.png",
    title: "Modelo 4",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-5",
    url: "https://i.imgur.com/pm7BJpU.png",
    backUrl: "https://i.imgur.com/0vMvLv4.png",
    title: "Modelo 5",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-6",
    url: "https://i.imgur.com/PXskTiZ.png",
    backUrl: "https://i.imgur.com/v7Usidx.png",
    title: "Modelo 6",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-7",
    url: "https://i.imgur.com/doWT5Si.png",
    backUrl: "https://i.imgur.com/N7exWbz.png",
    title: "Modelo 7",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-8",
    url: "https://i.imgur.com/loTht4o.png",
    backUrl: "https://i.imgur.com/ELgVqq0.png",
    title: "Modelo 8",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-9",
    url: "https://i.imgur.com/ffshHWB.png",
    backUrl: "https://i.imgur.com/saeiiBO.png",
    title: "Modelo 9",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-10",
    url: "https://i.imgur.com/Q8Kzmf1.png",
    title: "Modelo 10",
    subtitle: "Buzo Egresados (BASE LISA)"
  }
];

// Lista de modelos Base Combinada (lista para que me envíes fotos)
const sampleModelsCombinadas: ModelItem[] = [
  {
    id: "comb-1",
    url: "https://i.imgur.com/FSovYhc.png",
    backUrl: "https://i.imgur.com/3mzo9SK.png",
    title: "Modelo 1 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-2",
    url: "https://i.imgur.com/l3b8xbL.png",
    backUrl: "https://i.imgur.com/StEXdde.png",
    title: "Modelo 2 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-3",
    url: "https://i.imgur.com/qXHMlYY.png",
    backUrl: "https://i.imgur.com/CB3wmbz.png",
    title: "Modelo 3 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-4",
    url: "https://i.imgur.com/JbE1aU4.png",
    backUrl: "https://i.imgur.com/3L11rBm.png",
    title: "Modelo 4 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-5",
    url: "https://i.imgur.com/I9jaTtU.png",
    backUrl: "https://i.imgur.com/h0JRRpi.png",
    title: "Modelo 5 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  }
];

export function ModelsStrip() {
  const [activeLightbox, setActiveLightbox] = useState<{
    list: ModelItem[];
    index: number;
  } | null>(null);
  const [activeSide, setActiveSide] = useState<"front" | "back">("front");

  const openLightbox = (list: ModelItem[], index: number) => {
    setActiveLightbox({ list, index });
    setActiveSide("front");
  };

  const closeLightbox = () => {
    setActiveLightbox(null);
  };

  const nextImage = () => {
    if (!activeLightbox) return;
    const nextIdx = (activeLightbox.index + 1) % activeLightbox.list.length;
    setActiveLightbox({ ...activeLightbox, index: nextIdx });
    setActiveSide("front");
  };

  const prevImage = () => {
    if (!activeLightbox) return;
    const prevIdx =
      (activeLightbox.index - 1 + activeLightbox.list.length) %
      activeLightbox.list.length;
    setActiveLightbox({ ...activeLightbox, index: prevIdx });
    setActiveSide("front");
  };

  const currentItem = activeLightbox
    ? activeLightbox.list[activeLightbox.index]
    : null;

  return (
    <section className="py-16 bg-neutral-950 border-t border-neutral-900 text-white relative overflow-hidden" id="modelos">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header General */}
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-anton text-white uppercase tracking-wide max-w-2xl mx-auto leading-snug">
            ALGUNOS DE NUESTROS MODELOS
          </h2>
          <p className="mt-2 text-neutral-400 font-sans text-xs sm:text-sm max-w-md mx-auto">
            Pasá el mouse por encima de la foto para ver el dorso (espalda) o hacé clic para ampliar.
          </p>
        </div>

        {/* ================= TIRA 1: BASE LISA ================= */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-400 text-black text-xs font-anton px-2.5 py-1 rounded tracking-wider uppercase">
              MODELOS BASE LISA
            </span>
            <span className="text-neutral-400 text-xs font-sans">
              Modelos de color liso en el cuerpo principal
            </span>
          </div>

          <div className="relative group">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory yellow-scrollbar">
              {sampleModelsLisas.map((model, idx) => (
                <motion.div
                  key={model.id}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onClick={() => openLightbox(sampleModelsLisas, idx)}
                  className="flex-none w-32 sm:w-40 md:w-48 aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-yellow-400/80 shadow-md cursor-pointer relative group/card snap-start"
                >
                  {/* Imagen del Frente */}
                  <img
                    src={model.url}
                    alt={model.title || `Modelo ${idx + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      model.backUrl ? "group-hover/card:opacity-0" : ""
                    }`}
                    loading="lazy"
                  />

                  {/* Imagen de la Espalda (al pasar el mouse) */}
                  {model.backUrl && (
                    <img
                      src={model.backUrl}
                      alt={`${model.title} - Espalda`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  )}

                  {/* Badge indicando "Frente / Espalda" */}
                  {model.backUrl && (
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 rounded-full text-[9px] font-mono text-yellow-400 border border-yellow-400/30 backdrop-blur-xs">
                      <span className="group-hover/card:hidden">FRENTE</span>
                      <span className="hidden group-hover/card:inline">ESPALDA</span>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-left">
                    <span className="text-xs font-anton text-yellow-400 tracking-wider uppercase truncate">
                      {model.title || `Modelo ${idx + 1}`}
                    </span>
                    {model.subtitle && (
                      <span className="text-[9px] text-neutral-300 font-sans truncate leading-tight">
                        {model.subtitle}
                      </span>
                    )}
                    <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Tarjeta para avisar que se pueden cargar más fotos */}
              <div className="flex-none w-32 sm:w-40 md:w-48 aspect-[3/4] rounded-xl border-2 border-dashed border-neutral-800 bg-neutral-900/50 flex flex-col items-center justify-center p-3 text-center text-neutral-500 hover:border-neutral-700 transition-colors snap-start">
                <ImageIcon className="w-8 h-8 mb-2 opacity-50 text-yellow-400" />
                <span className="text-xs font-anton uppercase text-neutral-300 tracking-wide">
                  ¡Envíanos tus fotos!
                </span>
                <span className="text-[10px] text-neutral-500 mt-1 font-sans">
                  Base Lisa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TIRA 2: BASE COMBINADA ================= */}
        <div className="pt-8 border-t border-neutral-900">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-yellow-400 text-black text-xs font-anton px-2.5 py-1 rounded tracking-wider uppercase">
              BASE COMBINADA
            </span>
            <span className="text-neutral-400 text-xs font-sans">
              MODELOS COMBINADOS CON RECORTES O RAYAS/VIVOS
            </span>
          </div>

          <div className="relative group">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 snap-x snap-mandatory yellow-scrollbar">
              {sampleModelsCombinadas.map((model, idx) => (
                <motion.div
                  key={model.id}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  onClick={() => openLightbox(sampleModelsCombinadas, idx)}
                  className="flex-none w-32 sm:w-40 md:w-48 aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-yellow-400/80 shadow-md cursor-pointer relative group/card snap-start"
                >
                  <img
                    src={model.url}
                    alt={model.title || `Modelo Combinado ${idx + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-500 ${
                      model.backUrl ? "group-hover/card:opacity-0" : ""
                    }`}
                    loading="lazy"
                  />

                  {model.backUrl && (
                    <img
                      src={model.backUrl}
                      alt={`${model.title} - Espalda`}
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                      loading="lazy"
                    />
                  )}

                  {model.backUrl && (
                    <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 rounded-full text-[9px] font-mono text-yellow-400 border border-yellow-400/30 backdrop-blur-xs">
                      <span className="group-hover/card:hidden">FRENTE</span>
                      <span className="hidden group-hover/card:inline">ESPALDA</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2.5 text-left">
                    <span className="text-xs font-anton text-yellow-400 tracking-wider uppercase truncate">
                      {model.title || `Modelo ${idx + 1}`}
                    </span>
                    {model.subtitle && (
                      <span className="text-[9px] text-neutral-300 font-sans truncate leading-tight">
                        {model.subtitle}
                      </span>
                    )}
                    <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Tarjeta informando que la tira de Base Combinada está lista */}
              <div className="flex-none w-56 sm:w-64 aspect-[3/4] rounded-xl border-2 border-dashed border-yellow-400/40 bg-neutral-900/60 flex flex-col items-center justify-center p-4 text-center text-neutral-400 snap-start">
                <ImageIcon className="w-10 h-10 mb-2 text-yellow-400 animate-pulse" />
                <span className="text-sm font-anton uppercase text-yellow-400 tracking-wide">
                  Tira Base Combinada
                </span>
                <p className="text-xs text-neutral-300 mt-1.5 font-sans leading-relaxed">
                  Envíanos las fotos de tus modelos de <strong className="text-white">Base Combinada</strong> (frente y espalda) y los agregaremos aquí inmediatamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Modal desplegable al hacer clic */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            >
              {/* Botón cerrar */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 sm:top-2 sm:right-2 bg-neutral-900/80 hover:bg-neutral-800 text-white p-2 rounded-full z-20 cursor-pointer border border-neutral-700"
                aria-label="Cerrar"
              >
                <X className="w-5 h-5 text-yellow-400" />
              </button>

              {/* Imagen ampliada */}
              <div className="relative w-full max-h-[70vh] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center">
                <img
                  src={
                    activeSide === "back" && currentItem.backUrl
                      ? currentItem.backUrl
                      : currentItem.url
                  }
                  alt={currentItem.title || "Modelo ampliado"}
                  className="w-full h-full object-contain"
                />

                {/* Título y selector Frente/Espalda en lightbox */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 flex flex-col items-center text-center gap-2">
                  <div>
                    <p className="font-anton text-lg sm:text-xl text-yellow-400 tracking-wide">
                      {currentItem.title}
                    </p>
                    {currentItem.subtitle && (
                      <p className="text-xs text-neutral-300 font-sans">
                        {currentItem.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Toggle Frente / Espalda si tiene foto trasera */}
                  {currentItem.backUrl && (
                    <div className="flex gap-2 bg-neutral-900/80 p-1 rounded-full border border-neutral-700">
                      <button
                        onClick={() => setActiveSide("front")}
                        className={`px-4 py-1 rounded-full text-xs font-sans font-medium transition-colors ${
                          activeSide === "front"
                            ? "bg-yellow-400 text-black font-semibold"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Ver Frente
                      </button>
                      <button
                        onClick={() => setActiveSide("back")}
                        className={`px-4 py-1 rounded-full text-xs font-sans font-medium transition-colors ${
                          activeSide === "back"
                            ? "bg-yellow-400 text-black font-semibold"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        Ver Espalda
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Botones de navegación previa / siguiente */}
              {activeLightbox && activeLightbox.list.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-neutral-800 text-white p-2.5 rounded-full border border-neutral-700 cursor-pointer transition-transform hover:scale-110"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-yellow-400" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-neutral-800 text-white p-2.5 rounded-full border border-neutral-700 cursor-pointer transition-transform hover:scale-110"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-6 h-6 text-yellow-400" />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
