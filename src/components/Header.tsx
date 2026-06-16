import { motion } from "motion/react";

export function Header() {
  return (
    <header className="bg-white text-center">
      <motion.img
        src="https://i.imgur.com/h4JNGKZ.png"
        alt="Buzos de Egresados"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full h-auto object-cover"
      />
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-xl text-gray-600"
      >
        Diseñamos el recuerdo que va a durar toda la vida.
      </motion.p>
    </header>
  );
}
