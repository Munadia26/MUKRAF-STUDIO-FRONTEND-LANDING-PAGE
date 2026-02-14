"use client";
import { useState } from "react";
import { useProducts } from "@/src/hooks/useProduct"; 
import { Search, LayoutGrid, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ProductSidebar({ activeSlug }: { activeSlug: string }) {
  // 1. Ambil data dengan destructuring yang aman
  const { data: products, isLoading } = useProducts();
  const [search, setSearch] = useState("");
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  // 2. Tambahkan pengecekan array agar tidak error saat data masih loading/null
  const filtered = (products || []).filter((p: any) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="lg:sticky lg:top-32 space-y-8">
      {/* Search Input */}
      <div className="relative group">
        <input
          type="text"
          placeholder="CARI PROJECT..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-200 focus:border-cyan-500 rounded-2xl px-6 py-5 pl-14 text-[10px] font-black tracking-widest text-[#1e3a5f] outline-none transition-all shadow-sm"
        />
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors" size={18} />
      </div>

      {/* Project List */}
      <div className="bg-white rounded-[2.5rem] border border-gray-100 p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-[10px] font-black text-[#1e3a5f] uppercase tracking-[0.3em]">Project Lainnya</h3>
          <LayoutGrid size={14} className="text-cyan-500" />
        </div>

        <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
          {isLoading ? (
            <p className="text-[10px] font-bold text-gray-400 text-center animate-pulse">LOADING...</p>
          ) : (
            filtered.map((p: any) => (
              <Link 
                key={p.id} 
                href={`/products/${p.slug}`}
                className={`flex items-center gap-4 p-3 rounded-2xl transition-all border ${
                  activeSlug === p.slug 
                  ? "bg-gray-50 border-cyan-200 shadow-inner scale-[0.98]" 
                  : "bg-white border-transparent hover:bg-gray-50 hover:border-gray-100"
                }`}
              >
                <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                  <img 
                    src={`${IMG_URL}/${p.image}`} 
                    className="w-full h-full object-cover" 
                    alt={p.title} 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-[9px] font-black uppercase tracking-tight truncate ${activeSlug === p.slug ? "text-cyan-600" : "text-[#1e3a5f]"}`}>
                    {p.title}
                  </p>
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                    {p.category?.name || "Portfolio"}
                  </p>
                </div>
                <ArrowRight size={14} className={`${activeSlug === p.slug ? "text-cyan-500" : "text-gray-200"}`} />
              </Link>
            ))
          )}

          {!isLoading && filtered.length === 0 && (
            <p className="text-[10px] font-bold text-gray-400 text-center py-4">TIDAK DITEMUKAN</p>
          )}
        </div>
      </div>
    </div>
  );
}