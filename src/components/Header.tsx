import { useState, useEffect } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "CONCEPT", href: "#concept" },
    { label: "GALLERY", href: "#gallery" },
    { label: "MENU", href: "#menu" },
    { label: "ACCESS", href: "#access" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/40 backdrop-blur-md border-b border-white/10 py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Name */}
        <a href="#" className="flex flex-col text-left group">
          <span className="font-serif text-2xl font-semibold tracking-tighter text-[#f2f2f2] group-hover:text-amber-200 transition-colors">
            ANNA
          </span>
          <span className="text-[8px] tracking-[0.4em] text-white/50 font-sans uppercase -mt-0.5 group-hover:text-white/70 transition-colors">
            Bar & Cozy Space
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[10px] font-sans tracking-[0.3em] text-white/70 hover:text-white hover:opacity-100 transition-all py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white/40 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-stone-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-sans tracking-[0.2em] text-white/70 hover:text-white transition-colors py-2 border-b border-white/5 uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
