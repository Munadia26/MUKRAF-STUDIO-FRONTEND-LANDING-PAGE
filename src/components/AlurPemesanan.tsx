"use client";
import { 
  MessageSquare, 
  FileText, 
  CreditCard, 
  UploadCloud, 
  Code2, 
  Rocket,
  ArrowRight 
} from "lucide-react";

export default function OrderingProcess() {
  const steps = [
    {
      id: "01",
      title: "Konsultasi Kebutuhan",
      desc: "Diskusikan tujuan dan fitur website Anda melalui WhatsApp untuk estimasi biaya gratis.",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: "02",
      title: "Pengajuan Penawaran",
      desc: "Kami kirimkan proposal harga sesuai skala kerumitan proyek sebelum pengerjaan dimulai.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: "03",
      title: "Pembayaran",
      desc: "Lakukan pembayaran sesuai kesepakatan agar tim segera menjadwalkan proyek.",
      icon: <CreditCard className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "04",
      title: "Pengiriman Materi",
      desc: "Kirimkan konten seperti logo, foto, dan profil perusahaan yang ingin ditampilkan di website.",
      icon: <UploadCloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "05",
      title: "Proses & Revisi",
      desc: "Tim mulai membangun website. Anda dapat meninjau dan mengajukan revisi draf pertama.",
      icon: <Code2 className="w-8 h-8" />,
      color: "from-pink-500 to-red-500"
    },
    {
      id: "06",
      title: "Peluncuran",
      desc: "Website dipublikasikan secara resmi setelah pelunasan dan serah terima akses login.",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section id="carapemesanan" className="relative py-20 px-6 md:px-10 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">
            Cara Pemesanan
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">
            Mudah & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Transparan</span>
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Proses pemesanan yang jelas dari awal hingga peluncuran website Anda
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-[72px] left-0 right-0 mx-auto w-[calc(100%-160px)] h-1 bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 rounded-full" 
               style={{ left: '80px', right: '80px' }} 
          />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* Number Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 bg-white px-3 py-1 rounded-full border-2 border-gray-200 shadow-sm">
                  <span className="text-xs font-black text-gray-400">{step.id}</span>
                </div>

                {/* Icon Circle */}
                <div className="relative mb-6 mt-4">
                  <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 z-10`}>
                    <div className="text-white">
                      {step.icon}
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  </div>
                  
                  {/* Arrow - Desktop Only */}
                  {index !== steps.length - 1 && (
                    <div className="hidden xl:block absolute top-1/2 -right-8 -translate-y-1/2 text-gray-300 group-hover:text-cyan-500 transition-colors">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3 px-2">
                  <h4 className="text-base md:text-lg font-black text-[#1e3a5f] uppercase tracking-tight italic min-h-[48px] flex items-center justify-center group-hover:text-cyan-600 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Dot Indicator */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                  <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <a
            href="https://wa.me/6285786675395"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-2xl font-black uppercase tracking-wider shadow-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Mulai Konsultasi Gratis</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}
