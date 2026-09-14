import { TopBar } from "./components/TopBar";
import { AnnouncementBar } from "./components/AnnouncementBar";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { MiraModelosBanner } from "./components/MiraModelosBanner";
import { FAQ } from "./components/FAQ";
import { ModelsStrip } from "./components/ModelsStrip";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <AnnouncementBar />
      <Header />
      <Gallery />
      <MiraModelosBanner />
      <FAQ />
      <ModelsStrip />
      <Footer />
    </div>
  );
}
