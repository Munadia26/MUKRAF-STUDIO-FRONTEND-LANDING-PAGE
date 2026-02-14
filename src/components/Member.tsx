"use client";
import { useMembers } from "@/src/hooks/useMember";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function TeamSection() {
  const { data: members, isLoading } = useMembers();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  if (isLoading) {
    return (
      <div className="py-32 text-center">
        <div className="inline-block w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 font-black text-[#1e3a5f] uppercase tracking-widest text-xs">Loading Team...</p>
      </div>
    );
  }

  return (
    <section id="member" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header Section - Selaras dengan AllArticlesPage */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">
              <span>Behind the Scenes</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-[#1e3a5f] uppercase tracking-tighter italic leading-none">
              Meet Our <br /> <span className="text-gray-200">Creative Team</span>
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members?.map((member: any, index: number) => (
            <div 
              key={member.id} 
              className="group relative"
              style={{ animation: `slideUp 0.6s ease-out ${index * 0.1}s both` }}
            >
              {/* Card Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img 
                    src={`${IMG_URL}/${member.image}`} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Info Container - Bottom of Card */}
                <div className="relative bg-white p-6 space-y-3">
                  {/* Name */}
                  <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-cyan-600">
                    {member.name}
                  </h3>
                  
                  {/* Position */}
                  <p className="text-sm text-gray-600 font-medium">
                    {member.position || "Team Member"}
                  </p>

                  {/* Divider Line */}
                  <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent"></div>

                  {/* Social Icons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a 
                      href="#" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Mail size={16} />
                    </a>
                    <a 
                      href="#" 
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>

                {/* Decorative Corner Accent - Top Right */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-transparent" 
                       style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }}>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Decoration */}
        
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}