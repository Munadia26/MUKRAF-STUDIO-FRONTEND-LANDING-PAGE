"use client";
import React from "react";
import { 
  Settings, 
  Tag, 
  Layers, 
  Star, 
  Zap, 
  ShieldCheck, 
  MessageSquare 
} from "lucide-react";

export default function WhyChooseUs() {
  // Konten diisi manual (Static Data)
  const features = [
    {
      title: "Promosi Ahli",
      desc: "Tim profesional kami berpengalaman dalam pembuatan website dan aplikasi mobile yang inovatif dan berorientasi pada hasil nyata bagi bisnis Anda.",
      icon: <Settings className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-600"
    },
    {
      title: "Harga Terbaik",
      desc: "Kami menawarkan harga yang kompetitif dengan kualitas pelayanan yang tetap terjaga, transparan, dan memberikan nilai lebih bagi investasi Anda.",
      icon: <Tag className="w-6 h-6 text-white" />,
      iconBg: "bg-cyan-500"
    },
    {
      title: "Desain Modern",
      desc: "Kami selalu mengikuti tren desain terbaru untuk memastikan tampilan website Anda menarik, fungsional, dan memberikan pengalaman pengguna yang luar biasa.",
      icon: <Layers className="w-6 h-6 text-white" />,
      iconBg: "bg-indigo-600"
    },
    {
      title: "Layanan Premium",
      desc: "Kami memberikan dukungan yang sangat responsif untuk menjawab segala kebutuhan dan pertanyaan Anda sepanjang perjalanan pengembangan proyek.",
      icon: <Star className="w-6 h-6 text-white" />,
      iconBg: "bg-blue-500"
    },
    {
      title: "Performa Handal",
      desc: "Setiap produk dikembangkan dengan standar performa tinggi, memastikan kecepatan akses yang optimal dan keamanan data yang terjamin.",
      icon: <Zap className="w-6 h-6 text-white" />,
      iconBg: "bg-cyan-600"
    },
    {
      title: "Garansi Kepuasan",
      desc: "Kepuasan Anda adalah prioritas kami. Kami memberikan jaminan hasil akhir yang sesuai dengan visi dan ekspektasi yang telah disepakati bersama.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      iconBg: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Mengikuti style AllArticlesPage */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter italic mb-4">
            Mengapa <span className="text-cyan-500">Memilih</span> Kami ?
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium">
            Alasan mengapa kami menjadi pilihan terbaik untuk kebutuhan pembuatan website dan aplikasi mobile Anda. Kami mengutamakan kualitas dan inovasi.
          </p>
        </div>

        {/* Grid Card Section - Mengikuti style Card Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              
              {/* Text Content */}
              <h4 className="text-xl font-black text-[#1e3a5f] mb-4 uppercase italic tracking-tight group-hover:text-cyan-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner Section - Selaras dengan tema Navy-Cyan */}
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-[#1e3a5f] to-blue-800 p-12 md:p-20 text-center text-white shadow-2xl">
          {/* Decorative Ornaments */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-6">
              Siap Memulai Proyek Website atau Aplikasi Anda?
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto text-sm md:text-base mb-10 font-medium">
              Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik yang disesuaikan dengan kebutuhan bisnis Anda.
            </p>
            
            <button className="group inline-flex items-center gap-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-[#1e3a5f] font-black uppercase tracking-[0.2em] text-xs px-12 py-5 rounded-2xl shadow-xl transition-all hover:scale-105">
              <MessageSquare className="w-4 h-4" />
              Hubungi Kami
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}