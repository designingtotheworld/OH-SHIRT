import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Scissors,
  Clock,
  ShoppingBag,
  CreditCard,
  ChevronDown,
  HelpCircle,
  Calculator,
  CheckCircle2,
} from "lucide-react";
import { faqCategories, FAQCategory, FAQItem } from "../data";

const iconMap: Record<string, any> = {
  Sparkles,
  Scissors,
  Clock,
  ShoppingBag,
  CreditCard,
};

export function FAQ() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "mat-1": true,
  });

  const allItems = faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, categoryName: cat.category, catId: cat.id }))
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 md:py-20 bg-black border-t border-neutral-900 text-white" id="faq">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-anton text-white uppercase tracking-wide">
            PREGUNTAS FRECUENTES
          </h2>
          <HelpCircle className="w-16 h-16 md:w-20 md:h-20 text-white mt-4 stroke-[1.75]" />
        </div>

        {/* Single Unified Accordion Container */}
        <div className="bg-neutral-900 rounded-2xl shadow-xl border border-neutral-800 divide-y divide-neutral-800/80 overflow-hidden">
          {allItems.map((item) => {
            const isOpen = !!openItems[item.id];

            return (
              <div key={item.id} className="transition-colors hover:bg-neutral-800/40">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 group focus:outline-none cursor-pointer"
                >
                  <div className="pr-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-yellow-400 block mb-1 font-sans">
                      {item.categoryName}
                    </span>
                    <span className="font-anton text-lg md:text-xl text-white group-hover:text-yellow-400 transition-colors tracking-wide leading-snug block">
                      {item.question}
                    </span>
                  </div>
                  <span
                    className={`p-2 rounded-full bg-neutral-800 group-hover:bg-yellow-950 text-neutral-400 group-hover:text-yellow-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 bg-yellow-500/20 text-yellow-300" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden bg-neutral-950/70 border-t border-neutral-800/60"
                    >
                      <div className="p-5 md:p-6 text-neutral-300 font-sans text-sm md:text-base leading-relaxed space-y-3">
                        <p>{item.answer}</p>

                        {item.bullets && item.bullets.length > 0 && (
                          <ul className="space-y-2 mt-2 pl-1">
                            {item.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-1" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {item.exampleBox && (
                          <div className="mt-4 p-4 bg-neutral-900 border border-yellow-700/50 rounded-xl space-y-2 text-neutral-200">
                            <div className="flex items-center gap-2 font-anton text-yellow-300 text-base uppercase tracking-wide">
                              <Calculator className="w-4 h-4 text-yellow-400" />
                              {item.exampleBox.title}
                            </div>
                            <p className="text-xs md:text-sm font-medium text-neutral-300">
                              {item.exampleBox.description}
                            </p>
                            <ul className="space-y-1 pt-1 pl-1 text-xs md:text-sm">
                              {item.exampleBox.bullets.map((b, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="font-bold text-yellow-400">•</span>
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
