export function PrendasInfo() {
  return (
    <section className="py-16 bg-black text-white border-t border-neutral-900">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-anton text-white mb-8 uppercase tracking-wide">
          tenemos dos tipos de prendas:
        </h2>
        <ul className="space-y-4 text-xl md:text-2xl font-anton text-gray-200 tracking-wide">
          <li className="flex items-start">
            <span className="mr-3 text-yellow-400">•</span>
            <span>Unicolor (tela de un solo color de base)</span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-yellow-400">•</span>
            <span>Dos o más colores de telas, o detalles como rayas o franjas de tela de otro color</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
