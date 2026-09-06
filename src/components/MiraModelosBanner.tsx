import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function MiraModelosBanner() {
  const scrollToModels = () => {
    const el = document.getElementById("modelos");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-neutral-950 py-10 px-4 border-t border-neutral-900 flex justify-center">
      <motion.button
        onClick={scrollToModels}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="group relative w-full max-w-2xl bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-neutral-950 font-anton text-lg sm:text-xl md:text-2xl uppercase tracking-wider py-5 px-6 rounded-2xl shadow-[0_0_30px_rgba(234,179,8,0.3)] hover:shadow-[0_0_40px_rgba(234,179,8,0.5)] transition-all flex items-center justify-between cursor-pointer border border-yellow-300"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-neutral-950 animate-pulse" />
          <span>¡MIRA NUESTROS MODELOS!</span>
        </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full bg-neutral-950 text-yellow-400 flex items-center justify-center shadow-md group-hover:bg-neutral-900 transition-colors"
        >
          <ArrowDown className="w-6 h-6 stroke-[3]" />
        </motion.div>
      </motion.button>
    </div>
  );
}
