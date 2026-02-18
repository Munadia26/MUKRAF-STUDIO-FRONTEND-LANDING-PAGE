"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import { useProfile } from "@/src/hooks/useProfile";

export default function Navbar() {
  const { data } = useProfile();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const isHomePage = pathname === "/";

  // WhatsApp configuration
  const whatsappNumber = "628157642627"; 
  const whatsappMessage = encodeURIComponent("Halo Mukraf! Saya tertarik untuk konsultasi.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (target: string) => {
    return isHomePage ? target : `/${target}`;
  };

  const navLinks = [
    { name: "Produk", href: getHref("#products") },
    { name: "Mengapa Mukraf", href: getHref("#WhyChooseUs")},
    { name: "Cara Pemesanan", href: getHref("#carapemesanan")},
    { name: "Tentang", href: getHref("#profile") },
    { name: "Blog", href: getHref("#articles") }, 
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled || !isHomePage 
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100" 
          : "bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between items-center h-20 md:h-24">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 group">
              {data?.logo ? (
                <img 
                  src={`${IMG_URL}/${data.logo}`} 
                  alt="Logo" 
                  /* TRIK LOGO: Menambahkan filter invert/brightness saat bg transparan agar logo gelap jadi putih/terang */
                  className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
                    !isScrolled && isHomePage ? "brightness-0 invert" : ""
                  }`} 
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-xl">M</span>
                  </div>
                  <span className={`text-2xl md:text-3xl font-black tracking-tight ${isScrolled || !isHomePage ? 'text-[#0a1628]' : 'text-white'}`}>
                    MUKRAF
                  </span>
                </div>
              )}
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`relative text-sm font-bold uppercase tracking-wider transition-colors group ${
                    isScrolled || !isHomePage ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2 text-white">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Konsultasi</span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 rounded-xl transition-colors ${
                isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t shadow-2xl md:hidden">
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-bold uppercase tracking-wider text-gray-700 hover:text-cyan-600 transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl text-white font-bold uppercase tracking-wider shadow-lg mt-4"
              >
                <MessageCircle className="w-5 h-5" />
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <div className="fixed bottom-6 right-6 z-[110] group flex items-center gap-3">
        {/* Label Teks */}
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
          <p className="text-sm font-bold text-gray-700 whitespace-nowrap">
            Konsultasi disini <span className="text-green-600">yuk!</span>
          </p>
          {/* Segitiga kecil (speech bubble tail) */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
        </div>

        {/* Button Icon */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block"
        >
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />
          <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </a>
      </div>
    </>
  );
}