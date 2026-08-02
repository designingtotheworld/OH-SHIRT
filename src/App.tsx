import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { FAQ } from "./components/FAQ";
import { ModelsStrip } from "./components/ModelsStrip";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Gallery />
      <FAQ />
      <ModelsStrip />
      <Footer />
    </div>
  );
}
