import { motion } from "motion/react";

export function Header() {
  return (
    <header className="bg-white text-center">
      <motion.img
        src="https://i.imgur.com/9WWgDsG.png"
        alt="Buzos de Egresados"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-auto object-cover"
      />
    </header>
  );
}
