"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { useProducts, useCategories } from "@/src/hooks/useProduct";
// Tambahkan ArrowRight untuk button selengkapnya
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function ProductSection() {
  const router = useRouter();
  const { data: products } = useProducts();
  const { data: categories } = useCategories();
  const [activeCat, setActiveCat] = useState("all");
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{[key: number]: number}>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const filtered = activeCat === "all" 
    ? products 
    : products?.filter((p: any) => p.categoryId === Number(activeCat));

  // Tetap menampilkan maksimal 6 produk terbaru
  const sortedProducts = filtered
    ? [...filtered]
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6)
    : [];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const getCurrentIndex = (productId: number) => currentImageIndexes[productId] || 0;

  const nextImage = (productId: number, images: string[], e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => ({
      ...prev,
      [productId]: (getCurrentIndex(productId) + 1) % images.length
    }));
  };

  const prevImage = (productId: number, images: string[], e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndexes(prev => ({
      ...prev,
      [productId]: (getCurrentIndex(productId) - 1 + images.length) % images.length
    }));
  };

  const getProductImages = (product: any) => product.images && Array.isArray(product.images) ? product.images : [product.image];

  const stripHtml = (html: string) => {
    if (typeof window === 'undefined') return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  };

  return (
    <>
      <section id="products" className="py-16 md:py-24 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
            <div className="space-y-1 md:space-y-2 w-full md:w-auto">
              <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] md:tracking-[0.4em]">Portfolio</h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">Produk Terbaru</h3>
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
              <button 
                onClick={() => setActiveCat("all")} 
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeCat === "all" ? "bg-[#1e3a5f] text-white shadow-lg shadow-blue-900/20" : "bg-white text-gray-500"}`}
              >
                All
              </button>
              {categories?.map((cat: any) => (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveCat(cat.id.toString())} 
                  className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 ${activeCat === cat.id.toString() ? "bg-[#1e3a5f] text-white" : "bg-white text-gray-500"}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Navigation Buttons - Desktop: outside, Mobile: on sides */}
            <>
              {/* Desktop Navigation */}
              <button 
                onClick={scrollLeft} 
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
              </button>
              <button 
                onClick={scrollRight} 
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-[#1e3a5f] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
              </button>

              {/* Mobile Navigation - On Sides */}
              <button
                onClick={scrollLeft}
                className="flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-[#1e3a5f] hover:text-white transition-all active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-[#1e3a5f] hover:text-white transition-all active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>

            <div ref={scrollContainerRef} className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 snap-x snap-mandatory">
              {sortedProducts.map((p: any, index: number) => {
                const images = getProductImages(p);
                const currentIndex = getCurrentIndex(p.id);
                return (
                  <div 
                    key={p.id} 
                    className="group cursor-pointer flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[calc(33.333%-1.5rem)] md:min-w-[320px] lg:min-w-[350px] snap-center first:ml-0 last:mr-0" 
                    onClick={() => router.push(`/products/${p.title.toLowerCase().replace(/ /g, '-')}`)}
                  >
                    <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                        <img src={`${IMG_URL}/${images[currentIndex]}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-cyan-500 text-white px-2.5 md:px-3 py-1 rounded-full text-[8px] md:text-[9px] font-black uppercase tracking-wider">{p.category?.name || "Project"}</div>
                        {images.length > 1 && (
                          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={(e) => prevImage(p.id, images, e)} className="bg-white/90 p-1.5 md:p-2 rounded-full shadow-lg"><ChevronLeft size={14} className="md:w-4 md:h-4 text-[#1e3a5f]" /></button>
                            <button onClick={(e) => nextImage(p.id, images, e)} className="bg-white/90 p-1.5 md:p-2 rounded-full shadow-lg"><ChevronRight size={14} className="md:w-4 md:h-4 text-[#1e3a5f]" /></button>
                          </div>
                        )}
                      </div>
                      <div className="p-4 md:p-6 space-y-2 md:space-y-3">
                        <h4 className="text-lg md:text-xl font-black text-[#1e3a5f] uppercase italic group-hover:text-cyan-600 transition-colors line-clamp-1">{p.title}</h4>
                        <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{p.description ? stripHtml(p.description) : "Solusi kreatif digital."}</p>
                        <div className="pt-1 md:pt-2 flex items-center gap-2 text-cyan-600 font-bold text-[10px] md:text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                          <span>Lihat Detail</span><ChevronRight size={14} className="md:w-4 md:h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Button Baru: Lihat Semua Produk (Selaras dengan Tema Artikel) */}
          <div className="mt-12 md:mt-16 flex justify-center px-4">
            <button 
              onClick={() => router.push('/products')}
              className="group flex items-center gap-3 md:gap-4 px-6 md:px-10 py-3.5 md:py-5 bg-[#1e3a5f] text-white rounded-full md:rounded-[2rem] text-[10px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl hover:bg-cyan-600 transition-all active:scale-95 w-full md:w-auto justify-center"
            >
              Lihat Semua Produk
              <ArrowRight size={14} className="md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>
      <style jsx>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </>
  );
}