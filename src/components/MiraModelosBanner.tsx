import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function MiraModelosBanner() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-950 py-6 px-4 border-t border-neutral-900">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Botón Primaria / Secundaria */}
        <motion.button
          onClick={() => scrollToSection("modelos")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-neutral-950 font-anton text-sm sm:text-base uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all flex items-center justify-between cursor-pointer border border-yellow-300"
        >
          <div className="flex items-center gap-2.5 text-left">
            <Sparkles className="w-5 h-5 text-neutral-950 shrink-0 animate-pulse" />
            <span>MIRA NUESTROS MODELOS DE PRIMARIA/SECUNDARIA</span>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-9 h-9 rounded-full bg-neutral-950 text-yellow-400 flex items-center justify-center shrink-0 shadow-md group-hover:bg-neutral-900 transition-colors"
          >
            <ArrowDown className="w-4 h-4 stroke-[3]" />
          </motion.div>
        </motion.button>

        {/* Botón Jardín (Blanco) */}
        <motion.button
          onClick={() => scrollToSection("modelos-jardin")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative w-full bg-white text-neutral-950 font-anton text-sm sm:text-base uppercase tracking-wider py-3.5 px-5 rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all flex items-center justify-between cursor-pointer border border-neutral-200"
        >
          <div className="flex items-center gap-2.5 text-left">
            <Sparkles className="w-5 h-5 text-neutral-900 shrink-0 animate-pulse" />
            <span>MIRA NUESTROS MODELOS DE JARDIN</span>
          </div>

          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-9 h-9 rounded-full bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-md group-hover:bg-neutral-800 transition-colors"
          >
            <ArrowDown className="w-4 h-4 stroke-[3]" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

