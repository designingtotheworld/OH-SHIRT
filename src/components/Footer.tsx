import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">© 2026 Buzos de Egresados</p>
        <div className="flex gap-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-pink-400"><Instagram /></a>
          <a href="#" className="hover:text-green-400"><MessageCircle /></a>
          <a href="#" className="hover:text-blue-400"><Mail /></a>
        </div>
      </div>
    </footer>
  );
}
