"use client";
import { useState } from "react";
import { useArticles } from "@/src/hooks/useArticle";
import { useRouter } from "next/navigation";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ArrowRight, Calendar, Search, Newspaper, Tag } from "lucide-react";

export default function AllArticlesPage() {
  const router = useRouter();
  const { data: articles, isLoading } = useArticles();
  const [searchTerm, setSearchTerm] = useState("");
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628157642627";

  // Navigasi ke detail
  const goToArticleDetail = (title: string) => {
    const formattedTitle = title.toLowerCase().replace(/ /g, "-");
    router.push(`/articles/${formattedTitle}`);
  };

  // Logika Pencarian
  const filteredArticles = (articles || []).filter((article: any) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const stripHtml = (html: string) => {
    if (typeof window === "undefined") return html;
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION: NAVY PREMIUM (Sama dengan Halaman Produk) --- */}
        <section className="relative pt-48 pb-32 px-6 md:px-10 bg-[#0a1628] overflow-hidden">
          {/* Ornamen Latar Belakang */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 blur-[100px] opacity-50" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Sisi Kiri: Judul */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="h-px w-8 bg-cyan-500"></span>
                  <div className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">
                    <span>Insight</span>
                    <span className="text-white/20">/</span>
                    <span>Artikel & Berita</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                  Eksplorasi <span className="text-cyan-400">Insight</span>{" "}
                  <br />
                </h1>

                <p className="text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                  Temukan artikel edukatif, tren terbaru dalam dunia digital,
                  dan tips seputar pengembangan website serta aplikasi untuk
                  bisnis Anda.
                </p>
              </div>

              {/* Sisi Kanan: Call to Action & Search */}
              <div className="flex flex-col gap-6 items-center lg:items-end">
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
                  {/* Tombol Konsultasi Gratis Sekarang */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Mukraf! Saya tertarik untuk konsultasi tentang pembuatan website/aplikasi.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-5 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-400 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all text-center flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-cyan-400 group-hover:scale-110 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.15 11.891c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Konsultasi Gratis Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Transition ke Konten */}
          <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 pointer-events-none">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[60px] md:h-[100px]"
              fill="#ffffff"
            >
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z"></path>
            </svg>
          </div>
        </section>
        {/* Search Bar Terintegrasi */}
        <div className="flex justify-end mb-10">
          <div className="relative w-full lg:max-w-sm group">
            <input
              type="text"
              placeholder="Cari Artikel kami..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 pl-14 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all text-[#1e3a5f] font-bold text-sm placeholder:text-gray-400 shadow-sm"
            />
            <Search
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-cyan-500 transition-colors"
              size={20}
            />
          </div>
        </div>
        {/* --- CONTENT SECTION: GRID ARTIKEL --- */}
        <section className="pb-24 px-6 md:px-10 pt-20">
          <div className="max-w-7xl mx-auto">
            {isLoading ? (
              <div className="text-center py-20 font-black text-slate-300 animate-pulse uppercase tracking-[0.4em] text-xs">
                Sinkronisasi Data...
              </div>
            ) : filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredArticles.map((article: any) => (
                  <article
                    key={article.id}
                    onClick={() => goToArticleDetail(article.title)}
                    className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-50"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <img
                        src={`${IMG_URL}/${article.image}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={article.title}
                      />
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1e3a5f] shadow-sm flex items-center gap-2">
                          <Tag size={12} className="text-cyan-500" />
                          Insight
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-1.5">
                          <Calendar size={12} className="text-cyan-500" />
                          <span>{formatDate(article.createdAt)}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-black text-[#1e3a5f] leading-tight group-hover:text-cyan-600 transition-colors line-clamp-2 italic uppercase">
                        {article.title}
                      </h3>

                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 font-medium">
                        {stripHtml(article.description)}
                      </p>

                      <div className="pt-2 flex items-center gap-2 text-cyan-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                        <span>Baca Selengkapnya</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                <Newspaper className="mx-auto text-gray-200 mb-6" size={64} />
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
                  Artikel Tidak Ditemukan
                </h3>
                <p className="text-gray-500 mt-2">
                  Coba gunakan kata kunci pencarian yang lain.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
