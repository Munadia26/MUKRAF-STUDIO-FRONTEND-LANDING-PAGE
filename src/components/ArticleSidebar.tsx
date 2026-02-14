"use client";
import { useState } from "react";
import { useArticles } from "@/src/hooks/useArticle"; //
import { Search, Calendar } from "lucide-react";
import Link from "next/link";

export default function ArticleSidebar({ activeTitle }: { activeTitle: string }) {
  const { data: articles } = useArticles(); //
  const [searchTerm, setSearchTerm] = useState("");
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  // Filter artikel berdasarkan input pencarian & sembunyikan artikel yang sedang dibuka
  const filteredArticles = (articles || []).filter((a: any) => 
    a.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
    a.title !== activeTitle
  ).slice(0, 5);

  return (
    <div className="space-y-10 sticky top-32">
      {/* Search Widget */}
      <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
        <h4 className="text-[10px] font-black uppercase text-[#1e3a5f] mb-4 tracking-widest">Cari Artikel</h4>
        <div className="relative">
          <input 
            type="text"
            placeholder="Ketik judul..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
          />
          <Search className="absolute right-4 top-3.5 text-gray-400" size={16} />
        </div>
      </div>

      {/* Berita Lainnya Widget */}
      <div className="space-y-6">
        <h4 className="text-[10px] font-black uppercase text-[#1e3a5f] px-2 tracking-widest">Artikel Lainnya</h4>
        <div className="grid gap-6">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((item: any) => (
              <Link 
                key={item.id}
                href={`/articles/${item.title.toLowerCase().replace(/ /g, "-")}`}
                className="group flex gap-4 items-center"
              >
                <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-gray-100">
                  <img 
                    src={`${IMG_URL}/${item.image}`} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="space-y-1">
                  <h5 className="text-[11px] font-black text-[#1e3a5f] uppercase italic line-clamp-2 leading-tight group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h5>
                  <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400">
                    <Calendar size={10} className="text-cyan-500" />
                    <span>{new Date(item.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-[10px] italic text-gray-400 px-2">Tidak ada artikel lain ditemukan.</p>
          )}
        </div>
      </div>
    </div>
  );
}