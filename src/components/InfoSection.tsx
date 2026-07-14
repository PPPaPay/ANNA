import { BAR_INFO } from "../data";
import { MapPin, Clock, Calendar, Phone, Compass, Info, Train } from "lucide-react";
import { motion } from "motion/react";

export default function InfoSection() {
  return (
    <section id="access" className="py-24 bg-transparent border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="font-sans text-[10px] tracking-[0.4em] text-white/40 uppercase mb-3">
            LOCATION • WORKING HOURS
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-semibold tracking-tighter text-[#f2f2f2] mb-4">
            Access & Info
          </h2>
          <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
            松原市の静かな高見の里エリアに佇む「ANNA」。<br />
            日常から抜け出して、自分だけの極上の時間をお過ごしください。
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Text Info */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-left">
            <div className="flex flex-col gap-6">
              
              {/* Address */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 transition-colors duration-300 hover:bg-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-white/50 uppercase block mb-1">
                    ADDRESS (住所)
                  </h4>
                  <p className="font-serif text-base text-[#f2f2f2] font-semibold leading-relaxed">
                    〒580-0021<br />
                    大阪府松原市高見の里４－５－３１ー３０３
                  </p>
                </div>
              </div>

              {/* Station Access */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 transition-colors duration-300 hover:bg-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <Train size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-white/50 uppercase block mb-1">
                    ACCESS (アクセス)
                  </h4>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
                    近鉄南大阪線「高見ノ里駅」から徒歩約5分。<br />
                    駅を降りて南東方面、静かな路地裏にございます。
                  </p>
                </div>
              </div>

              {/* Hours & Closed */}
              <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-4 transition-colors duration-300 hover:bg-white/10">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/80 shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-sans text-[9px] tracking-[0.2em] text-white/50 uppercase block mb-1">
                    BUSINESS HOURS (営業時間)
                  </h4>
                  <p className="text-sm text-white font-medium">
                    {BAR_INFO.hours}
                  </p>
                  <p className="text-xs text-white/50 font-light mt-1 flex items-center gap-1.5 font-sans">
                    <Calendar size={12} />
                    <span>定休日：{BAR_INFO.closed}</span>
                  </p>
                </div>
              </div>

            </div>

            {/* Note Panel */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-3 backdrop-blur-sm">
              <Info size={16} className="text-white/70 shrink-0 mt-0.5" />
              <p className="text-[11px] text-white/50 font-light leading-relaxed">
                ※ カウンター席中心のため、週末などは混み合うことがございます。ご来店の際はお早めにお越しいただくか、事前にお問い合わせをいただけますとスムーズです。
              </p>
            </div>

          </div>

          {/* Styled Beautiful Map Container */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-3xl p-4 flex flex-col justify-between overflow-hidden shadow-2xl relative min-h-[400px]">
            {/* Visual Styled Map Background */}
            <div className="absolute inset-0 bg-transparent flex items-center justify-center opacity-40 select-none">
              <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,20 L100,50 M0,70 L100,30 M30,0 L40,100 M70,0 L60,100" stroke="#ffffff" strokeWidth="0.1" fill="none" />
                <circle cx="55" cy="45" r="1.5" fill="#ffffff" className="animate-ping" />
                <circle cx="55" cy="45" r="0.8" fill="#ffffff" />
                {/* Station */}
                <circle cx="20" cy="25" r="0.6" fill="#ffffff" opacity="0.4" />
              </svg>
            </div>

            {/* Simulated Premium Dark Map UI */}
            <div className="relative z-10 backdrop-blur-xl bg-black/60 border border-white/10 p-6 rounded-2xl shadow-xl max-w-sm m-4 text-left">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold font-serif shrink-0 shadow-md">
                  A
                </div>
                <div>
                  <h5 className="text-sm font-serif text-white font-medium">
                    ANNA
                  </h5>
                  <p className="text-[11px] text-white/60 font-light mt-1 leading-normal">
                    大阪府松原市高見の里４－５－３１ー３０３
                  </p>
                  <p className="text-[10px] text-white/50 font-sans mt-1">
                    3F, Room 303
                  </p>
                </div>
              </div>

              <div className="border-t border-white/5 mt-4 pt-3 flex justify-between items-center text-[10px] font-sans text-white/40">
                <span>駅からの距離</span>
                <span className="text-white/70 font-medium">高見ノ里駅より徒歩5分</span>
              </div>
            </div>

            {/* Google Maps Button Link */}
            <div className="relative z-10 m-4 flex justify-end">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("大阪府松原市高見の里4-5-31-303")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-sans text-[10px] tracking-[0.2em] font-semibold py-3 px-6 rounded-full shadow-lg border border-white/10 backdrop-blur-md transition-all duration-300"
              >
                <Compass size={14} className="animate-spin-slow" />
                <span>OPEN GOOGLE MAPS</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
