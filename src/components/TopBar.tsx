import { Instagram, Star } from "lucide-react";

export function TopBar() {
  const links = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ohshirt.argentina/",
      color: "bg-neutral-900 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border-neutral-800",
    },
    {
      name: "Opiniones",
      icon: Star,
      url: "https://www.google.com/maps/place/OH+SHIRT+ARGENTINA/@-34.45242,-58.8680416,17z/data=!4m8!3m7!1s0x95bb61730a3b92bd:0x6d150247425ede3b!8m2!3d-34.45242!4d-58.865472!9m1!1b1!16s%2Fg%2F11vbzy3w5x?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D",
      color: "bg-neutral-900 text-white hover:bg-amber-400 hover:text-black border-neutral-800",
    },
  ];

  return (
    <div className="bg-black py-2 px-4 border-b border-neutral-800 flex justify-center items-center gap-3 relative z-50">
      <span className="text-xs text-neutral-400 hidden sm:inline font-sans mr-1">¡Seguinos y conocé más!</span>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-sans font-medium transition-all duration-300 shadow-sm cursor-pointer ${link.color}`}
          >
            <Icon className="w-3.5 h-3.5" />
            <span>{link.name}</span>
          </a>
        );
      })}
    </div>
  );
}
