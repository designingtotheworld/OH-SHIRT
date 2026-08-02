import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-neutral-400">© 2026 Buzos de Egresados</p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-pink-400 transition-colors"><Instagram /></a>
          <a href="#" className="hover:text-green-400 transition-colors"><MessageCircle /></a>
          <a href="#" className="hover:text-blue-400 transition-colors"><Mail /></a>
        </div>
      </div>
    </footer>
  );
}
