import { useState } from "react";
import { MenuItem } from "../types";
import { CURATED_MENU } from "../data";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "drink" | "food">("all");

  const filteredMenu = CURATED_MENU.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(price);
  };

  return (
    <section id="menu" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/[0.02] via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] text-white/40 uppercase mb-3">
            CHEF'S SPECIAL SELECTION
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tighter text-[#f2f2f2] mb-4">
            Curated Menu
          </h2>
          <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
            シンプルながら洗練された、お酒とフードのセレクション。<br />
            まずは基本の5〜6品。どれも丁寧に厳選した一皿とお酒です。
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-16">
          {(["all", "drink", "food"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-[10px] tracking-[0.2em] px-6 py-2.5 rounded-full border transition-all duration-300 uppercase ${
                activeCategory === cat
                  ? "bg-white text-black border-white font-semibold"
                  : "bg-white/5 text-white/60 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {cat === "all" ? "ALL SELECTION" : cat === "drink" ? "DRINKS" : "FOOD & SWEETS"}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 group shadow-xl relative overflow-hidden"
                >
                  <div>
                    {/* Item Image (if exists) */}
                    {item.image && (
                      <div className="h-44 w-full rounded-xl overflow-hidden mb-5 border border-white/10 group-hover:border-white/20 transition-all duration-300">
                        <img
                          src={item.image}
                          alt={item.japaneseName}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-sans tracking-widest text-white/40 uppercase">
                            {item.category}
                          </span>
                          {item.subText && (
                            <span className="text-[9px] font-sans tracking-wide text-white/60 bg-white/10 px-2 py-0.5 rounded">
                              {item.subText}
                            </span>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-medium text-[#f2f2f2] group-hover:text-white transition-colors mt-1">
                          {item.japaneseName}
                        </h3>
                        <p className="font-sans text-[11px] text-white/40 italic">
                          {item.name}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-light leading-relaxed mt-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="border-t border-white/5 mt-6 pt-4 flex justify-between items-center">
                    <span className="text-[9px] font-sans text-white/40 uppercase tracking-widest">
                      Price
                    </span>
                    <span className="font-serif text-base font-medium text-white">
                      {formatPrice(item.price)}
                      {item.id === "special-cocktail" || item.id === "ajillo" ? " 〜" : ""}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Notice Info */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-5 flex items-start gap-3 max-w-2xl mx-auto backdrop-blur-sm shadow-lg">
          <Info size={16} className="text-white/70 shrink-0 mt-0.5" />
          <p className="text-[11px] text-white/50 font-light leading-relaxed">
            ※ お席とおつまみを純粋に楽しんでいただく居心地の良い空間を提供しております。<br />
            ※ 席数に限りがございますので、カウンターをご希望の場合はお早めのご来店をおすすめいたします。
          </p>
        </div>

      </div>
    </section>
  );
}
