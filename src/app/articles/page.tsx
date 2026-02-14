"use client";
import { useState } from "react";
import { useArticles } from "@/src/hooks/useArticle";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ArrowRight, Clock, Calendar, Search, Newspaper } from "lucide-react";

export default function AllArticlesPage() {
  const router = useRouter();
  const { data: articles, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  // Navigasi ke detail
  const goToArticleDetail = (title: string) => {
    const formattedTitle = title.toLowerCase().replace(/ /g, '-');
    router.push(`/articles/${formattedTitle}`);
  };

  // Logika Pencarian
  const filteredArticles = (articles || []).filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', month: 'long', year: 'numeric' 
    });
  };

  const stripHtml = (html: string) => {
    if (typeof window === "undefined") return html;
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-40 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-px w-12 bg-cyan-500"></div>
                <span className="text-xs font-bold text-cyan-600 uppercase tracking-[0.3em]">
                  Our Library
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
                Semua Artikel
              </h1>
            </div>

            {/* Bar Pencarian */}
            <div className="relative w-full md:w-96">
              <input 
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-slate-600"
              />
              <Search className="absolute right-5 top-4.5 text-gray-400" size={20} />
            </div>
          </div>

          {/* Grid Artikel */}
          {isLoading ? (
            <div className="text-center py-20 font-bold text-slate-400 animate-pulse uppercase tracking-widest">
              Menghubungkan ke Server...
            </div>
          ) : filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredArticles.map((article: any) => (
                <article 
                  key={article.id}
                  onClick={() => goToArticleDetail(article.title)}
                  className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-50"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={`${IMG_URL}/${article.image}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={article.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-cyan-500" />
                        <span>{formatDate(article.createdAt)}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors line-clamp-2 italic">
                      {article.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {stripHtml(article.description)}
                    </p>

                    <div className="pt-2 flex items-center gap-2 text-cyan-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                      <span>Selengkapnya</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
              <Newspaper className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-bold text-slate-900">Artikel Tidak Ditemukan</h3>
              <p className="text-gray-500">Coba gunakan kata kunci pencarian yang lain.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}