import { Instagram, Globe, Star } from "lucide-react";

export function Footer() {
  const links = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ohshirt.argentina/",
      color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white border-neutral-700",
    },
    {
      name: "Sitio Web",
      icon: Globe,
      url: "https://www.ohshirt.com.ar",
      color: "hover:bg-yellow-400 hover:text-black border-neutral-700",
    },
    {
      name: "Opiniones",
      icon: Star,
      url: "https://www.google.com/maps/place/OH+SHIRT+ARGENTINA/@-34.45242,-58.8680416,17z/data=!4m8!3m7!1s0x95bb61730a3b92bd:0x6d150247425ede3b!8m2!3d-34.45242!4d-58.865472!9m1!1b1!16s%2Fg%2F11vbzy3w5x?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
      color: "hover:bg-amber-400 hover:text-black border-neutral-700",
    },
  ];

  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-6">
        <div className="flex flex-wrap justify-center gap-4">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border bg-neutral-900 text-neutral-200 font-sans font-medium text-sm transition-all duration-300 ${link.color} shadow-sm cursor-pointer`}
              >
                <Icon className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
        <p className="text-neutral-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Buzos de Egresados
        </p>
      </div>
    </footer>
  );
}

