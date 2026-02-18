"use client";
import { 
  Settings, 
  Tag, 
  Layers, 
  Star, 
  Zap, 
  ShieldCheck 
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Tim Profesional",
      desc: "Developer dan designer berpengalaman 8+ tahun dalam membangun solusi digital custom yang inovatif dan berorientasi hasil.",
      icon: <Settings className="w-7 h-7" />,
      color: "from-cyan-500 to-blue-500",
      stats: "PROFESIONAL"
    },
    {
      title: "Harga Kompetitif",
      desc: "Investasi yang sepadan dengan kualitas premium. Transparansi harga tanpa biaya tersembunyi.",
      icon: <Tag className="w-7 h-7" />,
      color: "from-blue-500 to-indigo-500",
      stats: "Best Value"
    },
    {
      title: "Desain Modern",
      desc: "Mengikuti tren UI/UX terkini dengan pendekatan mobile-first dan user-centered design untuk pengalaman optimal.",
      icon: <Layers className="w-7 h-7" />,
      color: "from-indigo-500 to-purple-500",
      stats: "Trendy"
    },
    {
      title: "Support 24/7",
      desc: "Tim support yang responsif siap membantu Anda kapan saja untuk memastikan website Anda selalu running smooth.",
      icon: <Star className="w-7 h-7" />,
      color: "from-purple-500 to-pink-500",
      stats: "24/7"
    },
    {
      title: "Performa Tinggi",
      desc: "Website dibangun dengan teknologi terkini, optimasi kecepatan loading, dan infrastructure yang scalable.",
      icon: <Zap className="w-7 h-7" />,
      color: "from-pink-500 to-red-500",
      stats: "99.9% Uptime"
    },
    {
      title: "Garansi Kepuasan",
      desc: "Revisi unlimited hingga Anda puas. Kami berkomitmen deliver hasil sesuai ekspektasi dan timeline yang disepakati.",
      icon: <ShieldCheck className="w-7 h-7" />,
      color: "from-red-500 to-orange-500",
      stats: "100% Satisfied"
    }
  ];

  return (
    <section id ="WhyChooseUs" className="relative py-24 px-6 md:px-10 bg-white overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,1) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }} 
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-10" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">
            Keunggulan Kami
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">
            Mengapa <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Memilih</span> Kami?
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kami tidak hanya membuat website, tapi membangun solusi digital yang menggerakkan bisnis Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-3xl p-8 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />
              <div className="absolute inset-[2px] bg-white rounded-3xl -z-10" />
              
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${item.color} rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {item.icon}
                  
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                </div>
                
                {/* Stats Badge */}
                <div className={`absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r ${item.color} text-white text-xs font-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {item.stats}
                </div>
              </div>
              
              {/* Text Content */}
              <h4 className="text-xl font-black text-[#1e3a5f] mb-3 uppercase italic tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom Accent Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </div>
          ))}
        </div>

        

        {/* CTA Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] p-12 md:p-16 text-center text-white shadow-2xl">
          
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse-slow" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10 space-y-6">
            <h3 className="text-3xl md:text-5xl font-black uppercase italic tracking-tight">
              Siap Memulai Proyek Anda?
            </h3>
            <p className="text-cyan-100 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
              Konsultasi gratis untuk diskusi kebutuhan dan estimasi biaya. Tim kami siap membantu mewujudkan visi digital Anda.
            </p>
            
            <a
              href="https://wa.me/6285786675395"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-[#1e3a5f] font-black uppercase tracking-wider text-sm px-10 py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
            >
              <span>Hubungi Kami Sekarang</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
