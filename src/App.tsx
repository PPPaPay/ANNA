import Header from "./components/Header";
import Hero from "./components/Hero";
import ConceptSection from "./components/ConceptSection";
import MenuSection from "./components/MenuSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] text-[#f2f2f2] font-sans selection:bg-white/10 selection:text-white antialiased overflow-x-hidden scroll-smooth relative">
      {/* Frosted Glass Theme Ambient Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-orange-950/25 blur-[120px]" />
        <div className="absolute bottom-[30%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-950/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[-15%] w-[45%] h-[45%] rounded-full bg-amber-950/15 blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[55%] h-[55%] rounded-full bg-orange-950/20 blur-[130px]" />
      </div>

      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Header */}
        <Header />

        {/* Main Sections */}
        <main className="w-full flex flex-col">
          {/* 1. Hero Landing */}
          <Hero />

          {/* 2. Concept / Atmosphere */}
          <ConceptSection />

          {/* 3. Curated Menu (6 Items) */}
          <MenuSection />

          {/* 4. Access & Operating hours */}
          <InfoSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
