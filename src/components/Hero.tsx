import { BAR_INFO } from "../data";
import { ChevronDown, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src={BAR_INFO.galleryImages[0].url}
          alt="ANNA Bar Interior"
          className="w-full h-full object-cover opacity-20 scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-radial-gradient" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Subtle Tag / Accent */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-inner"
        >
          <Sparkles size={11} className="text-white/60 animate-pulse" />
          <span className="text-[10px] font-sans tracking-[0.3em] text-white/70 uppercase">
            TAKAMINOSATO • OSAKA
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="font-serif text-8xl md:text-9xl font-semibold text-[#f2f2f2] tracking-tighter mb-2 relative leading-none"
        >
          ANNA
        </motion.h1>

        {/* Line divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "64px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[1px] bg-white/20 mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-sans text-xs md:text-sm tracking-[0.4em] text-white/60 uppercase font-light mb-8"
        >
          {BAR_INFO.tagline}
        </motion.p>

        {/* Description / Welcome */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl font-sans font-light"
        >
          近鉄南大阪線「高見ノ里」から徒歩5分。<br />
          シックなカウンターと温かい灯りに包まれる、
          心地よい音楽と上質なお酒を楽しむ隠れ家バー。
        </motion.p>

        {/* Action button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12 flex gap-4"
        >
          <a
            href="#menu"
            className="border border-white/20 text-white/95 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all font-sans text-xs tracking-widest py-3.5 px-8 rounded-full shadow-lg"
          >
            DISCOVER MENU
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => {
          document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase">
          SCROLL
        </span>
        <ChevronDown size={16} className="text-stone-500 animate-bounce" />
      </motion.div>
    </section>
  );
}
