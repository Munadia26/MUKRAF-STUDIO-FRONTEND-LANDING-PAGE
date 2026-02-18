"use client";
import Link from "next/link";
import { Instagram, Mail, MapPin } from "lucide-react";
import { useProfile } from "@/src/hooks/useProfile"; // Ambil hook profile

export default function Footer() {
  const { data } = useProfile(); // Ambil data dari backend
  const currentYear = new Date().getFullYear();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 pb-8 rounded-t-[3rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            {/* Logo Dinamis sesuai Profile */}
            <Link href="/" className="flex items-center">
              {data?.logo ? (
                <img 
                  src={`${IMG_URL}/${data.logo}`} 
                  alt="Logo" 
                  className="h-10 w-auto object-contain" 
                />
              ) : (
                <h2 className="text-2xl font-black tracking-tighter">
                  {data?.name || "MUKRAF"}<span className="text-cyan-400">.</span>
                </h2>
              )}
            </Link>
            
            <p className="text-gray-400 text-xs leading-relaxed max-w-xs font-medium">
              {data?.description || "Digital creative studio yang berdedikasi untuk mentransformasi ide Anda menjadi mahakarya visual."}
            </p>
            <div className="flex gap-3">
              <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-cyan-500 transition-colors">
                <Instagram size={16} />
              </Link>
              <Link href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-cyan-500 transition-colors">
                <Mail size={16} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-6">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Beranda", slug: "hero" },
                { name: "Tentang Kami", slug: "profile" },
                { name: "Product", slug: "products" },
                { name: "Artikel", slug: "articles" },
                
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={`#${item.slug}`} 
                    className="text-xs font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-cyan-400 mb-6">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-cyan-400 shrink-0" size={16} />
                <p className="text-xs text-gray-400 font-medium">Jl. Creative Mukraf No. 26, Indonesia</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-cyan-400 shrink-0" size={16} />
                <p className="text-xs text-gray-400 font-medium">hello@mukraf.studio</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold text-gray-500 uppercase tracking-[0.3em]">
            © {currentYear} {data?.name?.toUpperCase() || "MUKRAF"} STUDIO • ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6 text-[8px] font-black uppercase tracking-widest text-gray-500">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}