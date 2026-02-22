"use client";
import React from "react";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";

export default function SectionDivider() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628157642627";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo, saya ingin tanya jasa pembuatan website.")}`;

  return (
    <div className="relative">
      {/* 1. KONTEN NAVY (Menyatu dengan Hero) */}
      <div className="bg-[#0a1628] pt-16 pb-32 md:pb-48 px-6 relative overflow-hidden">
        {/* Dekorasi Cahaya Cyan */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Sisi Kiri: Narasi */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.3em]">
                  Top Rated Agency
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white italic leading-tight">
                MENGAPA BISNIS ANDA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  BUTUH KAMI?
                </span>
              </h2>

              <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
                Kami menggabungkan keahlian teknis tingkat tinggi dengan
                strategi bisnis untuk menciptakan platform digital yang
                menghasilkan profit.
              </p>

              <div className="flex justify-center lg:justify-start">
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="group flex items-center gap-4 bg-white text-[#0a1628] px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all duration-300 shadow-2xl"
                >
                  Hubungi Kami
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Kartu yang Menyeberang ke Bawah */}
            <div className="relative mt-8 lg:mt-0 h-auto">
              <div className="relative lg:absolute top-0 right-0 lg:right-10 mx-auto lg:mx-0 w-full max-w-[400px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-8 border border-gray-100 transform lg:rotate-3 z-30">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-[#0a1628] italic uppercase text-sm">
                      Terpercaya & Aman
                    </h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                      Enterprise Security
                    </p>
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  Setiap baris kode yang kami tulis melewati standar audit
                  keamanan ketat untuk menjaga data bisnis Anda tetap aman 24/7.
                </p>
                <div className="flex gap-2">
                  <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-cyan-500" />
                  </div>
                  <span className="text-[10px] font-black text-cyan-600">
                    95%
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-10 left-0 lg:left-0 bg-orange-500 text-white p-5 rounded-3xl shadow-xl z-40 hidden md:block -rotate-6">
                <Zap size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PEMISAH OMBAK (Transition to WhyChooseUs) */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[100px] md:h-[180px]"
          fill="#f8fafc" /* Sesuaikan dengan bg WhyChooseUs (slate-50) */
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z"></path>
        </svg>
      </div>
    </div>
  );
}
