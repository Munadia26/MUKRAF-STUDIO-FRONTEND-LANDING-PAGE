"use client";
import { useParams } from "next/navigation";
import { useArticles } from "@/src/hooks/useArticle";
import ArticleSidebar from "@/src/components/ArticleSidebar";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ChevronLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";

const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
};

// Fungsi untuk membersihkan HTML dari Quill sebelum ditampilkan
function sanitizeQuillHtml(html: string): string {
  if (!html) return "";
  return html
    // Hapus semua class ql-align-justify (penyebab spacing renggang)
    .replace(/class="([^"]*?)ql-align-justify([^"]*?)"/g, (_, before, after) => {
      const remaining = (before + after).trim();
      return remaining ? `class="${remaining}"` : '';
    })
    // Hapus style text-align: justify yang mungkin ada
    .replace(/text-align:\s*justify;?/gi, '')
    // Bersihkan spasi berlebih di dalam tag
    .replace(/\s{2,}/g, ' ');
}

export default function ArticleDetailPage() {
  const { title } = useParams();
  const { data: articles, isLoading } = useArticles();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const whatsappNumber = "628157642627";

  const article = (articles || []).find(
    (a: any) => createSlug(a.title) === title
  );

  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-black bg-[#0a1628] text-white tracking-[0.4em] text-xs">SINKRONISASI DATA...</div>;
  if (!article) return <div className="min-h-screen flex items-center justify-center font-black text-red-500 bg-[#0a1628]">ARTIKEL TIDAK DITEMUKAN</div>;

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Halo Mukraf, saya tertarik berkonsultasi setelah membaca artikel: ${article.title}`)}`;
  const cleanDescription = sanitizeQuillHtml(article.description);

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        
        {/* --- HERO HEADER --- */}
        <section className="relative pt-48 pb-32 px-6 md:px-10 bg-[#0a1628] overflow-hidden">
          <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 blur-[100px] opacity-50" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-500"></span>
                  <div className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">
                    <span>Insights</span>
                    <span className="text-white/20">/</span>
                    <span>Article Detail</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                  {article.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-400 font-bold text-[10px] uppercase tracking-widest pt-2">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} className="text-cyan-500" />
                    <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={14} className="text-cyan-500" />
                    <span>Mukraf Insight</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start lg:justify-end">
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-5 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-400 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all flex items-center gap-3 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-cyan-400 group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.15 11.891c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Konsultasi Gratis Sekarang
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 pointer-events-none">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]" fill="#ffffff">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z"></path>
            </svg>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="pb-24 px-6 md:px-10 pt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16 items-start">
            
            <div className="min-w-0">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100 bg-gray-50 mb-12">
                <img 
                  src={`${IMG_URL}/${article.image}`} 
                  alt={article.title}
                  className="w-full h-auto object-cover max-h-[600px] block" 
                />
              </div>

              {/* Gunakan cleanDescription yang sudah di-sanitize */}
              <div
                className="article-body"
                dangerouslySetInnerHTML={{ __html: cleanDescription }}
              />

              <div className="mt-16 pt-8 border-t border-gray-100">
                <Link href="/articles" className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1e3a5f] hover:text-cyan-500 transition-all">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-cyan-50 transition-colors">
                    <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
                  </div>
                  Kembali ke Katalog Artikel
                </Link>
              </div>
            </div>

            <aside className="min-w-0">
              <ArticleSidebar activeTitle={article.title} />
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx global>{`
  /* 1. Reset Kontainer Konten */
  .article-body, 
  .article-description {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    /* FIX TERPOTONG: Pastikan kata tidak diputus di tengah huruf */
    word-break: keep-all !important; 
    overflow-wrap: break-word !important; 
    word-wrap: break-word !important;
    white-space: normal !important;
    text-align: left !important;
    line-height: 1.8;
    color: #475569;
  }

  /* 2. Fix Numbering & Bullets agar Muncul & Tidak Terpotong */
  .article-body ol, .article-description ol,
  .article-body ul, .article-description ul {
    display: block !important;
    /* Padding kiri wajib ada agar angka 1, 2, 3 tidak hilang/terpotong */
    padding-left: 2.5rem !important; 
    margin-bottom: 1.5rem !important;
    list-style-position: outside !important;
  }

  .article-body ul, .article-description ul { list-style-type: disc !important; }
  .article-body ol, .article-description ol { list-style-type: decimal !important; }

  .article-body li, .article-description li {
    display: list-item !important;
    margin-bottom: 0.6rem !important;
    /* Menghindari teks di dalam list item ikut terpotong */
    word-break: normal !important;
  }

  /* 3. Mencegah Teks "Jalan Terus" ke Sidebar */
  .article-body p, .article-description p {
    margin-bottom: 1.5rem !important;
    display: block !important;
    width: 100% !important;
    /* Kata hanya boleh putus di spasi */
    word-break: normal !important;
  }

  /* 4. Fix Media & Gambar */
  .article-body img, .article-description img {
    max-width: 100% !important;
    height: auto !important;
    border-radius: 0.75rem;
    margin: 2rem 0;
  }

  /* 5. Fix Tabel & Code (Penyebab utama horizontal lebar) */
  .article-body pre, .article-description pre,
  .article-body table {
    max-width: 100% !important;
    overflow-x: auto !important;
    white-space: pre-wrap !important;
    word-break: break-all !important; /* Khusus code/tabel boleh break-all agar tidak tembus sidebar */
  }
`}</style>
    </>
  );
}
