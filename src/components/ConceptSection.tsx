import { BAR_INFO } from "../data";
import { Compass, GlassWater, Utensils } from "lucide-react";
import { motion } from "motion/react";

export default function ConceptSection() {
  const features = [
    {
      icon: Compass,
      title: "Cozy Space",
      subtitle: "隠れ家的な安らぎ",
      desc: "高見の里にひっそりと佇むシックな内装と心地よい音楽。お一人でも肩肘張らずに憩える上質な時間を提供します。"
    },
    {
      icon: GlassWater,
      title: "Craft Drinks",
      subtitle: "多彩なボトルの世界",
      desc: "人気の山崎・白州をはじめとした厳選ウイスキーや、気分に合わせたおまかせカクテルなど豊富に取り揃えております。"
    },
    {
      icon: Utensils,
      title: "Simple Bites",
      subtitle: "お酒に寄り添うおつまみ",
      desc: "手作りアヒージョや自家製ガトーショコラなど、どれもお酒の個性を際立たせるこだわりのフードメニューです。"
    }
  ];

  return (
    <section id="concept" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="font-sans text-[10px] tracking-[0.4em] text-white/40 uppercase mb-3">
            WELCOME TO ANNA
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tighter text-[#f2f2f2] mb-6">
            Our Concept
          </h2>
          <p className="text-white/70 text-sm md:text-base font-light leading-relaxed">
            「誰もがフラリと立ち寄って上質なお酒と静寂、あるいは楽しい会話を楽しめる居心地の良いバー。」<br />
            それがANNAです。気品がありつつもフレンドリーな、高見の里の隠れた名店として愛されています。
          </p>
        </div>

        {/* 3 Pillars / Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                key={feat.title}
                className="backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 p-8 rounded-2xl transition-all duration-500 group relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 mb-6 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <Icon size={18} />
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-1">
                  {feat.title}
                </h3>
                <span className="font-sans text-[9px] tracking-[0.2em] text-white/50 uppercase block mb-3">
                  {feat.subtitle}
                </span>
                <p className="text-xs text-white/60 font-light leading-relaxed">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div id="gallery" className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-serif text-2xl text-[#f2f2f2] tracking-tight font-medium mb-2">
              Atmosphere
            </h3>
            <p className="text-xs text-white/50 font-light">
              お写真から店内の落ち着いた空気感を感じてみてください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BAR_INFO.galleryImages.map((image, index) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                key={image.id}
                className="group relative h-80 overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <div className="backdrop-blur-xl bg-black/50 rounded-xl border border-white/5 p-4 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                    <h4 className="font-serif text-sm text-[#f2f2f2] font-medium tracking-tight mb-1">
                      {image.title}
                    </h4>
                    <p className="text-[11px] text-white/60 font-light leading-relaxed">
                      {image.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
