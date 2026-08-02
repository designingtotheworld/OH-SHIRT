import { ImageCarousel } from "./ImageCarousel";

// Lista de imágenes proporcionadas por el usuario para el primer carrusel
const unicolorImages: { url: string; title?: string }[] = [
  { url: "https://i.imgur.com/LEWSHD0.png" },
  { url: "https://i.imgur.com/so6u3o7.png" },
  { url: "https://i.imgur.com/9DttrdT.png" },
  { url: "https://i.imgur.com/cYPI0Bh.png" },
];

const combinadasImages: { url: string; title?: string }[] = [
  { url: "https://i.imgur.com/jRz2OxX.png" },
  { url: "https://i.imgur.com/IGIEAlQ.png" },
  { url: "https://i.imgur.com/pUysV2Z.png" },
];

export function Gallery() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-base sm:text-lg md:text-xl font-anton text-white uppercase tracking-wider whitespace-nowrap relative inline-block pb-2">
            TENEMOS 2 TIPOS DE PRENDAS BASE
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-yellow-400 rounded-full"></span>
          </h2>
          <span className="mt-3 font-anton text-3xl sm:text-4xl md:text-5xl text-yellow-400 tracking-wider font-bold">
            1.
          </span>
        </div>

        {/* Categoria 1 */}
        <div className="mb-16">
          <div className="mb-6 flex justify-center">
            <img
              src="https://i.imgur.com/FNCw7Fu.png"
              alt="1. Base de prenda tela lisa de un solo color"
              className="max-w-md sm:max-w-lg md:max-w-xl w-full h-auto object-contain"
            />
          </div>
          <ImageCarousel
            images={unicolorImages}
            autoPlayInterval={3000}
            placeholderText="Espacio reservado para fotos de prenda lisa de un solo color"
          />
        </div>

        {/* Categoria 2 */}
        <div>
          <div className="mb-6 flex flex-col items-center justify-center">
            <span className="mb-3 font-anton text-3xl sm:text-4xl md:text-5xl text-yellow-400 tracking-wider font-bold">
              2.
            </span>
            <img
              src="https://i.imgur.com/tkAgK9m.png"
              alt="2. Base de prenda telas combinadas"
              className="max-w-md sm:max-w-lg md:max-w-xl w-full h-auto object-contain"
            />
          </div>
          <ImageCarousel
            images={combinadasImages}
            autoPlayInterval={3000}
            placeholderText="Espacio reservado para fotos de prendas combinadas"
          />
        </div>
      </div>
    </section>
  );
}



