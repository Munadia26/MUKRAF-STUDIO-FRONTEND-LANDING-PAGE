"use client";
import React from "react";
import { useMembers } from "@/src/hooks/useMember";

export default function ClientSection() {
  // 1. Ambil data member dari hook
  const { data: members, isLoading } = useMembers();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Teks Heading sesuai gambar referensi */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium text-slate-500">
            Yang Telah <span className="font-black text-[#1e3a5f] uppercase italic">Percaya Kami</span>
          </h2>
        </div>

        {/* 2. Container Marquee untuk animasi bergerak satu baris */}
        <div className="relative flex overflow-hidden">
          {/* Efek Fade di kiri dan kanan */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-12 md:gap-16 marquee-track items-center py-6">
            {/* 3. Render data member dari API */}
            {isLoading ? (
              <p className="text-gray-400 font-bold tracking-widest animate-pulse">LOADING CLIENTS...</p>
            ) : (
              <>
                {/* First set */}
                {(members || []).map((member: any, index: number) => (
                  <div 
                    key={`first-${index}`} 
                    className="shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <img 
                      src={`${IMG_URL}/${member.image}`} 
                      alt={member.name || "Client Logo"}
                      className="w-32 md:w-40 lg:w-48 h-auto object-contain"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {(members || []).map((member: any, index: number) => (
                  <div 
                    key={`second-${index}`} 
                    className="shrink-0 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                    aria-hidden="true"
                  >
                    <img 
                      src={`${IMG_URL}/${member.image}`} 
                      alt={member.name || "Client Logo"}
                      className="w-32 md:w-40 lg:w-48 h-auto object-contain"
                    />
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style jsx>{`
        .marquee-track {
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}