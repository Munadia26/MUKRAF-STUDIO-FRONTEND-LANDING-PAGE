"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import ini
import { Menu, X } from "lucide-react";
import { useProfile } from "@/src/hooks/useProfile";

export default function Navbar() {
  const { data } = useProfile();
  const pathname = usePathname(); // Ambil path saat ini
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi helper untuk menentukan link
  const getHref = (target: string) => {
    return isHomePage ? target : `/${target}`;
  };

  const navLinks = [
    { name: "Produk", href: getHref("#products") },
    { name: "Artikel", href: getHref("#articles") }, 
    { name: "Tentang Kami", href: getHref("#profile") },
    { name: "Team", href: getHref("#member") },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 px-6 py-4 ${
      isScrolled || !isHomePage ? "bg-white/70 backdrop-blur-xl shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          {data?.logo ? (
            <img 
              src={`${IMG_URL}/${data.logo}`} 
              alt="Logo" 
              className="h-14 md:h-16 w-auto object-contain transition-all duration-300" 
            />
          ) : (
            <span className="text-3xl font-black tracking-tighter text-[#1e3a5f]">
              MUKRAF<span className="text-cyan-500">.</span>
            </span>
          )}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1e3a5f] hover:text-cyan-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href={getHref("#contact")}>
            <button className="bg-[#1e3a5f] text-white px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-cyan-500 transition-all active:scale-95 shadow-xl">
              Kontak Kami
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#1e3a5f]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-6 md:hidden shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-bold uppercase tracking-widest text-[#1e3a5f]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}