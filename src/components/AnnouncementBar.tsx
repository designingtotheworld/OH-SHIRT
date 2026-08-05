import { MapPin, Truck, Sparkles } from "lucide-react";

export function AnnouncementBar() {
  const items = [
    {
      icon: MapPin,
      text: "ESTAMOS EN ZONA NORTE, BUENOS AIRES",
    },
    {
      icon: Truck,
      text: "HACEMOS ENVIOS A TODO EL PAÍS",
    },
    {
      icon: Sparkles,
      text: "DISEÑOS ÚNICOS & EXCLUSIVOS",
    },
  ];

  // Repeat the items list to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-400 text-black py-2.5 sm:py-3 overflow-hidden border-b border-yellow-500/60 shadow-md relative z-40 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 mx-6 text-xs sm:text-sm font-extrabold tracking-wider uppercase font-sans shrink-0"
            >
              <Icon className="w-4 h-4 text-black stroke-[2.5]" />
              <span>{item.text}</span>
              <span className="ml-6 text-amber-600/70 font-bold">•</span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
