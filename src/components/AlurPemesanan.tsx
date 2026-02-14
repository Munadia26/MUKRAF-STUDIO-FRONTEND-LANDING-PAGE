"use client";
import React from "react";
import { 
  MessageSquare, 
  FileText, 
  CreditCard, 
  UploadCloud, 
  Code2, 
  Rocket,
  ChevronRight 
} from "lucide-react";

export default function OrderingProcess() {
  const steps = [
    {
      id: "01",
      title: "Konsultasi Kebutuhan",
      desc: "Diskusikan tujuan dan fitur website Anda melalui WhatsApp untuk estimasi biaya gratis.",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      color: "bg-blue-600"
    },
    {
      id: "02",
      title: "Pengajuan Penawaran",
      desc: "Kami kirimkan proposal harga sesuai skala kerumitan proyek sebelum pengerjaan dimulai.",
      icon: <FileText className="w-6 h-6 text-white" />,
      color: "bg-cyan-500"
    },
    {
      id: "03",
      title: "Pembayaran DP",
      desc: "Lakukan pembayaran uang muka sesuai kesepakatan agar tim segera menjadwalkan proyek.",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      color: "bg-indigo-600"
    },
    {
      id: "04",
      title: "Pengiriman Materi",
      desc: "Kirimkan konten seperti logo, foto, dan profil perusahaan yang ingin ditampilkan di website.",
      icon: <UploadCloud className="w-6 h-6 text-white" />,
      color: "bg-blue-500"
    },
    {
      id: "05",
      title: "Proses & Revisi",
      desc: "Tim mulai membangun website. Anda dapat meninjau dan mengajukan revisi draf pertama.",
      icon: <Code2 className="w-6 h-6 text-white" />,
      color: "bg-cyan-600"
    },
    {
      id: "06",
      title: "Peluncuran",
      desc: "Website dipublikasikan secara resmi setelah pelunasan dan serah terima akses login.",
      icon: <Rocket className="w-6 h-6 text-white" />,
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">
            Cara  <span className="text-cyan-500 underline decoration-gray-200">Pemesanan</span> <br />
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Desktop Connection Line (Hidden on Mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-24"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300 z-10 relative`}>
                    {step.icon}
                  </div>
                  
                  {/* ID Badge */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white text-[#1e3a5f] px-3 py-0.5 rounded-full text-[10px] font-black shadow-md border border-gray-100">
                    {step.id}
                  </div>

                  {/* Arrow for Desktop */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 text-gray-300">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-[#1e3a5f] uppercase tracking-tight italic min-h-[40px] flex items-center justify-center">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-4">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decorative Line (Mobile/Tablet) */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent md:hidden"></div>
      </div>
    </section>
  );
}