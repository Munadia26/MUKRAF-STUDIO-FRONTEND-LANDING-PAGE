"use client";
import { useState } from "react";
import { useProducts, useCategories } from "@/src/hooks/useProduct";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ArrowRight, Search, Box, Tag, Layout } from "lucide-react";

export default function AllProductsPage() {
  const router = useRouter();
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories, isLoading: categoriesLoading } = useCategories();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  // Logika Filter: Berdasarkan Pencarian Nama DAN Kategori
  const filteredProducts = (products || []).filter((p: any) => {
    const matchesSearch = p.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCat === "all" || p.categoryId === Number(activeCat);
    return matchesSearch && matchesCategory;
  });

  const stripHtml = (html: string) => {
    if (typeof window === "undefined" || !html) return "";
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* HEADER SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-px w-12 bg-cyan-500"></div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-[0.3em]">Produk Kami</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight italic uppercase">
                Katalog <span className="text-gray-200">Produk</span>
              </h1>
            </div>

            {/* SEARCH BAR */}
            <div className="relative w-full md:w-96">
              <input 
                type="text"
                placeholder="Cari produk kami..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-slate-600 font-medium"
              />
              <Search className="absolute right-5 top-4 text-gray-400" size={20} />
            </div>
          </div>

          {/* CATEGORY FILTER (Sama seperti gaya di ProductSection) */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-16">
            <button 
              onClick={() => setActiveCat("all")}
              className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCat === "all" ? 'bg-[#1e3a5f] text-white shadow-xl shadow-blue-900/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
            >
              Semua Produk
            </button>
            {categories?.map((cat: any) => (
              <button 
                key={cat.id}
                onClick={() => setActiveCat(cat.id.toString())}
                className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeCat === cat.id.toString() ? 'bg-[#1e3a5f] text-white shadow-xl shadow-blue-900/20' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* PRODUCTS GRID */}
          {productsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-[450px] bg-gray-50 animate-pulse rounded-[2.5rem]" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((p: any) => (
                <article 
                  key={p.id}
                  onClick={() => router.push(`/products/${p.title?.toLowerCase().replace(/ /g, '-')}`)}
                  className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-50"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img 
                      src={`${IMG_URL}/${p.image}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={p.title} 
                    />
                    <div className="absolute top-5 left-5">
                      <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1e3a5f] shadow-sm flex items-center gap-2">
                        <Tag size={12} className="text-cyan-500" />
                        {p.category?.name || "Uncategorized"}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-black text-[#1e3a5f] leading-tight group-hover:text-cyan-600 transition-colors italic uppercase">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {p.description ? stripHtml(p.description) : "Solusi inovatif untuk kebutuhan bisnis Anda."}
                    </p>
                    <div className="pt-2 flex items-center gap-2 text-cyan-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                      <span>Lihat Detail</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
              <Box className="mx-auto text-gray-200 mb-6" size={64} />
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">Produk Tidak Ditemukan</h3>
              <p className="text-gray-500 mt-2">Tidak ada produk dalam kategori ini atau pencarian tersebut.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}