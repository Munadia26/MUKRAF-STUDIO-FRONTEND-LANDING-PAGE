"use client";
import { useProfile } from "@/src/hooks/useProfile";
import Link from "next/link";

export default function Hero() {
  const { data } = useProfile();

  // Gambar latar belakang profesional dengan nuansa terang
  const bgImage = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 scale-110"
        style={{
          backgroundImage: `url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // Brightness diatur ke 0.9 (hanya sedikit redup) dan Blur 8px agar estetik
          filter: 'blur(8px) brightness(0.9)', 
        }}
      />

      {/* Overlay Layer Putih Transparan (Agar Menu Navy Tetap Terlihat Jelas) */}
      <div className="absolute inset-0 z-10 bg-white/40" />

      {/* Content Layer */}
      <div className="relative z-20 max-w-5xl space-y-8">
        <div className="inline-block px-5 py-1.5 mb-4 border border-[#1e3a5f]/20 bg-white/20 backdrop-blur-md rounded-full">
          <p className="text-[10px] font-black text-[#1e3a5f] uppercase tracking-[0.6em]">
            Since 2026
          </p>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-7xl md:text-[130px] font-black text-[#1e3a5f] uppercase tracking-tighter leading-none">
            {data?.name || "MUKRAF"} 
          </h1>
          
          <p className="text-cyan-600 text-xl md:text-2xl font-black tracking-[0.4em] uppercase italic">
            Creative Digital Studio
          </p>
        </div>

        <div className="pt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
          <Link href="#products">
            <button className="bg-[#1e3a5f] text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-cyan-500 transition-all shadow-xl active:scale-95">
              Explore Work
            </button>
          </Link>

          <Link href="#profile">
            <button className="bg-transparent border-2 border-[#1e3a5f]/30 text-[#1e3a5f] px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs backdrop-blur-md hover:bg-[#1e3a5f]/5 transition-all active:scale-95">
              About Us
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#1e3a5f] to-transparent opacity-40" />
      </div>
    </section>
  );
}