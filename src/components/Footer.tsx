import { BAR_INFO } from "../data";
import { Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-black/40 border-t border-white/5 py-12 relative overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
            <span className="font-serif text-lg font-medium tracking-widest text-white">
              ANNA
            </span>
            <span className="text-[9px] font-sans tracking-[0.25em] text-white/40 mt-1 uppercase">
              BAR & LOUNGE
            </span>
          </div>
          <p className="text-[10px] text-white/30 font-light font-sans tracking-wide">
            © 2026 ANNA BAR & COZY SPACE. ALL RIGHTS RESERVED.
          </p>
        </div>

        {/* Middle decorative */}
        <div className="hidden md:flex items-center gap-1.5 text-white/20 text-[9px] font-sans tracking-[0.3em] uppercase">
          <Sparkles size={10} />
          <span>TAKAMINOSATO BAR SOCIETY</span>
          <Sparkles size={10} />
        </div>

        {/* Right Side */}
        <button
          onClick={handleScrollTop}
          className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all shadow-md group"
          title="TOPへ戻る"
        >
          <ArrowUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
