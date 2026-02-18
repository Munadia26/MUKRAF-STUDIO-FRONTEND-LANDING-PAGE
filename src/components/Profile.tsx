"use client";
import { useProfile } from "@/src/hooks/useProfile";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Profile() {
  const { data } = useProfile();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.03) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Left Side - Logo & Visual */}
          <div className="relative group order-2 md:order-1">
            {/* Main Logo Container */}
            <div className="relative aspect-square bg-gradient-to-br from-white to-gray-50 rounded-[3rem] p-16 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-8 left-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Logo */}
              <div className="relative z-10 flex items-center justify-center h-full">
                {data?.logo ? (
                  <img 
                    src={`${IMG_URL}/${data.logo}`} 
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700" 
                    alt={data?.name || "Company Logo"} 
                  />
                ) : (
                  <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-600">
                    {data?.name?.charAt(0) || "C"}
                  </div>
                )}
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-cyan-500 rounded-tl-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-blue-600 rounded-br-3xl opacity-50"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 order-1 md:order-2">
            {/* Header */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-[0.3em] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Us
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">
                {data?.name || "Your Company"}
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light">
                {data?.description || "We are a creative digital agency dedicated to transforming brands through innovative design and strategic solutions. Our team combines creativity with technical expertise to deliver exceptional results."}
              </p>
            </div>

            {/* Mission & Vision (if available) */}
            {(data?.mission || data?.vision) && (
              <div className="space-y-5 pt-4">
                {data?.mission && (
                  <div className="relative pl-6 border-l-4 border-cyan-500">
                    <h4 className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2">
                      Our Mission
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {data.mission}
                    </p>
                  </div>
                )}
                
                {data?.vision && (
                  <div className="relative pl-6 border-l-4 border-blue-500">
                    <h4 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">
                      Our Vision
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {data.vision}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Values Pills (if available) */}
            {data?.values && Array.isArray(data.values) && data.values.length > 0 && (
              <div className="space-y-4 pt-4">
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest">
                  Core Values
                </h4>
                <div className="flex flex-wrap gap-3">
                  {data.values.map((value: string, index: number) => (
                    <span 
                      key={index}
                      className="px-5 py-2.5 bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 rounded-full text-sm font-semibold border border-cyan-200/50 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            )}

           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}