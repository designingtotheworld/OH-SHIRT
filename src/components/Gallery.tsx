import { motion } from "motion/react";

const images = [
  "https://picsum.photos/400/500?random=1",
  "https://picsum.photos/400/500?random=2",
  "https://picsum.photos/400/500?random=3",
  "https://picsum.photos/400/500?random=4",
  "https://picsum.photos/400/500?random=5",
  "https://picsum.photos/400/500?random=6",
];

export function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Nuestros Diseños</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={img} alt="Buzo Egresados" className="w-full h-80 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
