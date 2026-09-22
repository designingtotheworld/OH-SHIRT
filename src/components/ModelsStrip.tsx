import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, ChevronLeft, ChevronRight, X, Image as ImageIcon, MessageCircle } from "lucide-react";

export interface ModelItem {
  id: string;
  url: string; // Frente (o frontUrl)
  backUrl?: string; // Espalda
  title?: string;
  subtitle?: string;
}

// Lista de modelos Base Lisa
export const sampleModelsLisas: ModelItem[] = [
  {
    id: "mod-24",
    url: "https://i.imgur.com/9lBwxPg.jpeg",
    backUrl: "https://i.imgur.com/GGXSEml.jpeg",
    title: "Modelo 24",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-23",
    url: "https://i.imgur.com/7XYyrN8.jpeg",
    backUrl: "https://i.imgur.com/HSEEONB.jpeg",
    title: "Modelo 23",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
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
  },
  {
    id: "mod-14",
    url: "https://i.imgur.com/ErTnuyI.jpeg",
    backUrl: "https://i.imgur.com/LOfCk9o.jpeg",
    title: "Modelo 14",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-15",
    url: "https://i.imgur.com/q6JBbdv.jpeg",
    backUrl: "https://i.imgur.com/G14Pjij.jpeg",
    title: "Modelo 15",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-16",
    url: "https://i.imgur.com/07npsi2.jpeg",
    backUrl: "https://i.imgur.com/K4QIz1W.jpeg",
    title: "Modelo 16",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-17",
    url: "https://i.imgur.com/t8mVaoH.jpeg",
    backUrl: "https://i.imgur.com/KpMa5f5.jpeg",
    title: "Modelo 17",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-18",
    url: "https://i.imgur.com/lmKkQrp.jpeg",
    backUrl: "https://i.imgur.com/YzKKs3b.jpeg",
    title: "Modelo 18",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-19",
    url: "https://i.imgur.com/Ko28LvO.jpeg",
    backUrl: "https://i.imgur.com/C9p9ezn.jpeg",
    title: "Modelo 19",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-20",
    url: "https://i.imgur.com/vD7psGf.jpeg",
    backUrl: "https://i.imgur.com/6FqksNq.jpeg",
    title: "Modelo 20",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-21",
    url: "https://i.imgur.com/tRv8Cgx.png",
    backUrl: "https://i.imgur.com/hRnk1Ji.png",
    title: "Modelo 21",
    subtitle: "Buzo Egresados (BASE LISA)"
  },
  {
    id: "mod-22",
    url: "https://i.imgur.com/HbbyPrr.png",
    backUrl: "https://i.imgur.com/BuuqEhK.png",
    title: "Modelo 22",
    subtitle: "Buzo Egresados (BASE LISA)"
  }
];

// Lista de modelos Base Combinada
export const sampleModelsCombinadas: ModelItem[] = [
  {
    id: "comb-11",
    url: "https://i.imgur.com/4Bln1br.jpeg",
    backUrl: "https://i.imgur.com/hoHXvDj.jpeg",
    title: "Modelo 11 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-10",
    url: "https://i.imgur.com/YX1sSuS.jpeg",
    title: "Modelo 10 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-9",
    url: "https://i.imgur.com/EF0THZT.jpeg",
    title: "Modelo 9 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-8",
    url: "https://i.imgur.com/ZYbXaEl.jpeg",
    backUrl: "https://i.imgur.com/PomUSVk.jpeg",
    title: "Modelo 8 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
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
    title: "Modelo 5 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-6",
    url: "https://i.imgur.com/Soda9rr.png",
    title: "Modelo 6 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  },
  {
    id: "comb-7",
    url: "https://i.imgur.com/p4OufZR.jpeg",
    backUrl: "https://i.imgur.com/qi6PvXv.jpeg",
    title: "Modelo 7 (Combinado)",
    subtitle: "Buzo Egresados (BASE COMBINADA)"
  }
];

// Lista de modelos Remeras
const sampleModelsRemeras: ModelItem[] = [
  {
    id: "rem-1",
    url: "https://i.imgur.com/6bLfvNj.jpeg",
    title: "Modelo 1 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-2",
    url: "https://i.imgur.com/9XkHLCY.jpeg",
    title: "Modelo 2 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-3",
    url: "https://i.imgur.com/LmkNqgm.jpeg",
    title: "Modelo 3 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-4",
    url: "https://i.imgur.com/lDES2py.jpeg",
    title: "Modelo 4 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-5",
    url: "https://i.imgur.com/L6JdimQ.jpeg",
    title: "Modelo 5 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-6",
    url: "https://i.imgur.com/eqvwNiZ.jpeg",
    title: "Modelo 6 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-7",
    url: "https://i.imgur.com/DwkZNvJ.jpeg",
    title: "Modelo 7 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-8",
    url: "https://i.imgur.com/xQjVLwn.jpeg",
    title: "Modelo 8 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-9",
    url: "https://i.imgur.com/7Z2OIpi.png",
    title: "Modelo 9 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-10",
    url: "https://i.imgur.com/nUq5Z4E.png",
    title: "Modelo 10 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-11",
    url: "https://i.imgur.com/QwVFo6I.png",
    title: "Modelo 11 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-12",
    url: "https://i.imgur.com/rehLgVC.png",
    title: "Modelo 12 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-13",
    url: "https://i.imgur.com/ywaUJFK.png",
    title: "Modelo 13 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-14",
    url: "https://i.imgur.com/YDMyaaN.png",
    title: "Modelo 14 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-15",
    url: "https://i.imgur.com/uybNydp.png",
    title: "Modelo 15 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-16",
    url: "https://i.imgur.com/SmWrt7G.png",
    title: "Modelo 16 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-17",
    url: "https://i.imgur.com/9CIQEjm.png",
    title: "Modelo 17 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-18",
    url: "https://i.imgur.com/opPyJdC.png",
    title: "Modelo 18 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-19",
    url: "https://i.imgur.com/kAZWggw.png",
    title: "Modelo 19 (Remera)",
    subtitle: "Remera Egresados"
  },
  {
    id: "rem-20",
    url: "https://i.imgur.com/sKNcDC0.jpeg",
    title: "Modelo 20 (Remera)",
    subtitle: "Remera Egresados"
  }
];

// Lista de modelos Remeritas Jardín
const sampleModelsJardin: ModelItem[] = [
  {
    id: "jar-1",
    url: "https://i.imgur.com/04lTSZx.jpeg",
    title: "Modelo 1 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-2",
    url: "https://i.imgur.com/Y8cqOts.jpeg",
    title: "Modelo 2 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-3",
    url: "https://i.imgur.com/jsflfQY.jpeg",
    title: "Modelo 3 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-4",
    url: "https://i.imgur.com/kyiHXTG.jpeg",
    title: "Modelo 4 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-5",
    url: "https://i.imgur.com/jxHqwud.jpeg",
    title: "Modelo 5 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-6",
    url: "https://i.imgur.com/OfkE6Y3.jpeg",
    title: "Modelo 6 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-7",
    url: "https://i.imgur.com/nafxCOS.jpeg",
    title: "Modelo 7 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-8",
    url: "https://i.imgur.com/rj6TF8C.jpeg",
    title: "Modelo 8 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-9",
    url: "https://i.imgur.com/CUBkC5h.jpeg",
    title: "Modelo 9 (Jardín)",
    subtitle: "Remerita Jardín"
  },
  {
    id: "jar-10",
    url: "https://i.imgur.com/0S3jVy1.jpeg",
    backUrl: "https://i.imgur.com/BadfcNT.jpeg",
    title: "Modelo 10 (Jardín)",
    subtitle: "Remerita Jardín"
  }
];

// Lista de modelos Buzos y Camperas Jardín
const sampleModelsBuzosJardin: ModelItem[] = [
  {
    id: "bj-1",
    url: "https://i.imgur.com/ycXEBKr.jpeg",
    backUrl: "https://i.imgur.com/Jx0SllB.jpeg",
    title: "Modelo 1",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-2",
    url: "https://i.imgur.com/L8RGO90.jpeg",
    backUrl: "https://i.imgur.com/YKSIX6G.jpeg",
    title: "Modelo 2",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-3",
    url: "https://i.imgur.com/4NuMQMr.jpeg",
    backUrl: "https://i.imgur.com/8Km8ZIT.jpeg",
    title: "Modelo 3",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-4",
    url: "https://i.imgur.com/LESznu2.jpeg",
    backUrl: "https://i.imgur.com/qQ20ZAp.jpeg",
    title: "Modelo 4",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-5",
    url: "https://i.imgur.com/mynozys.jpeg",
    backUrl: "https://i.imgur.com/b8vDFUy.jpeg",
    title: "Modelo 5",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-6",
    url: "https://i.imgur.com/rT5JM6v.png",
    backUrl: "https://i.imgur.com/dDhRJrY.png",
    title: "Modelo 6",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-7",
    url: "https://i.imgur.com/xBhcTqy.jpeg",
    backUrl: "https://i.imgur.com/2g93Ty2.jpeg",
    title: "Modelo 7",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-8",
    url: "https://i.imgur.com/Cd0LBfV.jpeg",
    backUrl: "https://i.imgur.com/BjSJfUB.jpeg",
    title: "Modelo 8",
    subtitle: "Buzo o Campera Jardín"
  },
  {
    id: "bj-9",
    url: "https://i.imgur.com/jDtPLza.jpeg",
    backUrl: "https://i.imgur.com/1ArkKmq.jpeg",
    title: "Modelo 9",
    subtitle: "Buzo o Campera Jardín"
  }
];

interface ModelStripSectionProps {
  id?: string;
  badgeTitle: string;
  subtitle: string;
  models: ModelItem[];
  onOpenLightbox: (models: ModelItem[], index: number) => void;
  placeholderText: string;
  placeholderDesc?: string;
  placeholderWide?: boolean;
  badgeWhite?: boolean;
}

function ModelStripSection({
  id,
  badgeTitle,
  subtitle,
  models,
  onOpenLightbox,
  placeholderText,
  placeholderDesc,
  placeholderWide = false,
  badgeWhite = false
}: ModelStripSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      updateScrollState();
      el.addEventListener("scroll", updateScrollState, { passive: true });
      window.addEventListener("resize", updateScrollState);
      return () => {
        el.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [models]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.75;
    const targetLeft =
      direction === "left"
        ? scrollRef.current.scrollLeft - scrollAmount
        : scrollRef.current.scrollLeft + scrollAmount;

    scrollRef.current.scrollTo({
      left: targetLeft,
      behavior: "smooth"
    });
  };

  return (
    <div id={id} className="pt-8 border-t border-neutral-900 first:border-0 first:pt-0">
      {/* Encabezado con Insignia Estilizada */}
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className={`${badgeWhite ? "bg-white text-black border-neutral-300" : "bg-yellow-400 text-black border-yellow-300"} text-sm sm:text-base font-anton px-4 py-2 rounded-lg tracking-wider uppercase shadow-md border`}>
          {badgeTitle}
        </span>
        <span className="text-neutral-300 text-xs sm:text-sm font-sans tracking-wide">
          {subtitle}
        </span>
      </div>

      <div className="relative group/carousel">
        {/* Flecha Flotante Izquierda sobre la Galería */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-yellow-400 text-yellow-400 hover:text-black p-3 rounded-full border border-yellow-400/50 shadow-2xl backdrop-blur-md transition-all active:scale-90 hidden sm:flex items-center justify-center cursor-pointer"
            title="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Flecha Flotante Derecha sobre la Galería */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 bg-neutral-900/90 hover:bg-yellow-400 text-yellow-400 hover:text-black p-3 rounded-full border border-yellow-400/50 shadow-2xl backdrop-blur-md transition-all active:scale-90 hidden sm:flex items-center justify-center cursor-pointer"
            title="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Tira / Tira Horizontal de Fotos */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-2 snap-x snap-mandatory yellow-scrollbar transition-all"
        >
          {models.map((model, idx) => (
            <motion.div
              key={model.id}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={() => onOpenLightbox(models, idx)}
              className="flex-none w-32 sm:w-40 md:w-48 aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-yellow-400/80 shadow-md cursor-pointer relative group/card snap-start"
            >
              <img
                src={model.url}
                alt={model.title || `Modelo ${idx + 1}`}
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
                <div className="absolute top-2 left-2 bg-black/70 px-2 py-0.5 rounded-full text-[9px] font-mono text-yellow-400 border border-yellow-400/30 backdrop-blur-xs z-10">
                  <span className="group-hover/card:hidden">FRENTE</span>
                  <span className="hidden group-hover/card:inline">ESPALDA</span>
                </div>
              )}

              <div className="absolute top-2 right-2 bg-black/60 p-1.5 rounded-full text-white backdrop-blur-xs opacity-0 group-hover/card:opacity-100 transition-opacity z-10">
                <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
              </div>
            </motion.div>
          ))}

          {/* Tarjeta Informativa / Placeholder al final de la tira */}
          <div
            className={`flex-none ${
              placeholderWide ? "w-56 sm:w-64" : "w-44 sm:w-52 md:w-56"
            } aspect-[3/4] rounded-xl border-2 border-dashed border-yellow-400/50 bg-neutral-900/80 flex flex-col items-center justify-center p-4 text-center text-neutral-300 snap-start hover:border-yellow-400 transition-colors shadow-lg`}
          >
            <div className="w-10 h-10 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs sm:text-sm font-anton uppercase text-yellow-400 tracking-wide leading-tight">
              {placeholderText || "¿YA TENÉS UN MODELO?"}
            </span>
            <p className="text-[11px] sm:text-xs text-neutral-200 mt-2 font-sans leading-snug">
              {placeholderDesc || "Si ya tenés un modelo diseñado, envianos la foto al WhatsApp y lo hacemos."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

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
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Header General */}
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-anton text-white uppercase tracking-wide max-w-2xl mx-auto leading-snug">
            ALGUNOS DE NUESTROS MODELOS
          </h2>
          <p className="mt-2 text-neutral-400 font-sans text-xs sm:text-sm max-w-md mx-auto">
            Pasá el mouse por encima de la foto para ver el dorso (espalda) o hacé clic para ampliar.
          </p>
        </div>

        {/* TIRA 1: BASE LISA */}
        <ModelStripSection
          badgeTitle="CAMPERA/ BUZO BASE LISA"
          subtitle="Modelos de color liso en el cuerpo principal"
          models={sampleModelsLisas}
          onOpenLightbox={openLightbox}
          placeholderText="¿YA TENÉS TU MODELO?"
          placeholderDesc="Si ya tenés un modelo diseñado, envianos la foto al WhatsApp y lo hacemos."
        />

        {/* TIRA 2: BASE COMBINADA */}
        <ModelStripSection
          badgeTitle="CAMPERA/BUZO BASE COMBINADA"
          subtitle="MODELOS COMBINADOS CON RECORTES O RAYAS/VIVOS"
          models={sampleModelsCombinadas}
          onOpenLightbox={openLightbox}
          placeholderText="¿YA TENÉS TU MODELO?"
          placeholderDesc="Si ya tenés un modelo diseñado, envianos la foto al WhatsApp y lo hacemos."
          placeholderWide={true}
        />

        {/* TIRA 3: MODELOS REMERAS */}
        <ModelStripSection
          badgeTitle="MODELOS REMERAS"
          subtitle="REMERAS DE EGRESADOS, OPCIÓN ESTAMPA ADELANTE Y OPCIÓN ESTAMPA DOBLE (ADELANTE Y ATRÁS)"
          models={sampleModelsRemeras}
          onOpenLightbox={openLightbox}
          placeholderText="¿YA TENÉS TU MODELO?"
          placeholderDesc="Si ya tenés un modelo diseñado, envianos la foto al WhatsApp y lo hacemos."
        />

        {/* TIRA 4: MODELOS REMERITAS JARDIN */}
        <ModelStripSection
          id="modelos-jardin"
          badgeTitle="MODELOS REMERITAS JARDIN"
          subtitle="PRENDAS Y DISEÑOS ESPECIALES PARA JARDÍN DE INFANTES"
          models={sampleModelsJardin}
          onOpenLightbox={openLightbox}
          placeholderText="¿YA TENÉS TU MODELO?"
          placeholderDesc="Envianos la foto al WhatsApp y lo hacemos."
          badgeWhite={true}
        />

        {/* TIRA 5: BUZOS Y CAMPERAS JARDIN */}
        <ModelStripSection
          badgeTitle="BUZOS Y CAMPERAS JARDIN"
          subtitle="ABRIGOS Y DISEÑOS ESPECIALES PARA JARDÍN DE INFANTES"
          models={sampleModelsBuzosJardin}
          onOpenLightbox={openLightbox}
          placeholderText="¿YA TENÉS TU MODELO?"
          placeholderDesc="Envianos la foto al WhatsApp y lo hacemos."
          badgeWhite={true}
        />
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
              <div className="relative w-full max-h-[60vh] aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-2xl flex items-center justify-center">
                <img
                  src={
                    activeSide === "back" && currentItem.backUrl
                      ? currentItem.backUrl
                      : currentItem.url
                  }
                  alt={currentItem.title || "Modelo ampliado"}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Título y selector Frente/Espalda fuera de la imagen */}
              <div className="mt-4 flex flex-col items-center text-center gap-2">
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
                  <div className="flex gap-2 bg-neutral-900 p-1.5 rounded-full border border-neutral-700 shadow-md">
                    <button
                      onClick={() => setActiveSide("front")}
                      className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-colors cursor-pointer ${
                        activeSide === "front"
                          ? "bg-yellow-400 text-black font-semibold"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      Ver Frente
                    </button>
                    <button
                      onClick={() => setActiveSide("back")}
                      className={`px-4 py-1.5 rounded-full text-xs font-sans font-medium transition-colors cursor-pointer ${
                        activeSide === "back"
                          ? "bg-yellow-400 text-black font-semibold"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      Ver Espalda
                    </button>
                  </div>
                )}
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
