"use client";
import { useParams } from "next/navigation";
import { useArticles } from "@/src/hooks/useArticle";
import ArticleSidebar from "@/src/components/ArticleSidebar";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ChevronLeft, Calendar } from "lucide-react";
import Link from "next/link";

export default function ArticleDetailPage() {
  const { title } = useParams();
  const { data: articles, isLoading } = useArticles();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  // Mencari artikel berdasarkan slug title dari URL
  const article = (articles || []).find(
    (a: any) => a.title.toLowerCase().replace(/ /g, "-") === title
  );

  if (isLoading) return <div className="min-h-screen flex items-center justify-center font-black">MEMUAT...</div>;
  if (!article) return <div className="min-h-screen flex items-center justify-center font-black text-red-500">ARTIKEL TIDAK DITEMUKAN</div>;

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* HERO HEADER - Meniru style Product Detail */}
        <section className="pt-40 pb-12 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">
                <span>Insights & Stories</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">News</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-[#1e3a5f] uppercase tracking-tighter italic leading-none">
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        <section className="pb-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* KONTEN UTAMA (Kiri) */}
            <div className="lg:w-2/3 w-full">
              {/* GAMBAR: Menggunakan object-contain agar tidak nge-zoom */}
              <div className="relative overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-gray-50 flex justify-center items-center mb-10">
                <img 
                  src={`${IMG_URL}/${article.image}`} 
                  alt={article.title}
                  className="w-full h-auto object-contain max-h-[500px] block" 
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 mb-8 text-[#1e3a5f] font-bold text-[10px] uppercase border-b border-gray-100 pb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-cyan-500" />
                  <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              {/* DESKRIPSI: Menampilkan konten Quill dengan styling rapi */}
              <div className="mt-8 w-full overflow-hidden">
                <div 
                  className="ql-editor-display"
                  dangerouslySetInnerHTML={{ __html: article.description }} 
                />
              </div>

              <div className="mt-12">
                <Link href="/#articles" className="group inline-flex items-center gap-2 text-[10px] font-black uppercase text-[#1e3a5f] hover:text-cyan-500 transition-all">
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> 
                  Kembali ke Artikel
                </Link>
              </div>
            </div>

            {/* SIDEBAR (Kanan) */}
            <aside className="lg:w-1/3 w-full">
              <ArticleSidebar activeTitle={article.title} />
            </aside>

          </div>
        </section>
      </main>
      <Footer />

      {/* Styling untuk menampilkan konten Quill dengan rapi */}
      <style jsx global>{`
        .ql-editor-display {
          font-size: 16px;
          line-height: 1.8;
          color: #475569;
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }
        
        .ql-editor-display * {
          max-width: 100%;
        }
        
        .ql-editor-display h1 {
          font-size: 2em;
          font-weight: 700;
          margin-top: 1.2em;
          margin-bottom: 0.6em;
          color: #1e3a5f;
          line-height: 1.3;
          word-wrap: break-word;
        }
        
        .ql-editor-display h2 {
          font-size: 1.5em;
          font-weight: 700;
          margin-top: 1.2em;
          margin-bottom: 0.6em;
          color: #1e3a5f;
          line-height: 1.3;
          word-wrap: break-word;
        }
        
        .ql-editor-display h3 {
          font-size: 1.25em;
          font-weight: 600;
          margin-top: 1em;
          margin-bottom: 0.5em;
          color: #334155;
          line-height: 1.4;
          word-wrap: break-word;
        }
        
        .ql-editor-display h4 {
          font-size: 1.1em;
          font-weight: 600;
          margin-top: 0.9em;
          margin-bottom: 0.4em;
          color: #334155;
          line-height: 1.4;
          word-wrap: break-word;
        }
        
        .ql-editor-display h5 {
          font-size: 1em;
          font-weight: 600;
          margin-top: 0.8em;
          margin-bottom: 0.4em;
          color: #475569;
          line-height: 1.4;
          word-wrap: break-word;
        }
        
        .ql-editor-display h6 {
          font-size: 0.9em;
          font-weight: 600;
          margin-top: 0.7em;
          margin-bottom: 0.3em;
          color: #475569;
          line-height: 1.4;
          word-wrap: break-word;
        }
        
        .ql-editor-display p {
          margin-bottom: 1.2em;
          line-height: 1.8;
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        .ql-editor-display strong {
          font-weight: 700;
          color: #1e293b;
        }
        
        .ql-editor-display em {
          font-style: italic;
        }
        
        .ql-editor-display u {
          text-decoration: underline;
        }
        
        .ql-editor-display s {
          text-decoration: line-through;
        }
        
        .ql-editor-display ol,
        .ql-editor-display ul {
          padding-left: 2em;
          margin-bottom: 1.2em;
          margin-top: 0.5em;
        }
        
        .ql-editor-display li {
          margin-bottom: 0.6em;
          line-height: 1.7;
          word-wrap: break-word;
        }
        
        .ql-editor-display blockquote {
          border-left: 4px solid #06b6d4;
          padding-left: 1.2em;
          padding-top: 0.5em;
          padding-bottom: 0.5em;
          margin: 1.5em 0;
          color: #475569;
          font-style: italic;
          background: #f8fafc;
          border-radius: 0 0.5rem 0.5rem 0;
        }
        
        .ql-editor-display pre {
          background: #f1f5f9;
          padding: 1.2em;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin: 1.5em 0;
          border: 1px solid #e2e8f0;
          font-size: 0.9em;
        }
        
        .ql-editor-display code {
          background: #f1f5f9;
          padding: 0.2em 0.5em;
          border-radius: 0.3rem;
          font-family: 'Courier New', monospace;
          font-size: 0.9em;
          color: #0f172a;
        }
        
        .ql-editor-display pre code {
          background: transparent;
          padding: 0;
        }
        
        .ql-editor-display a {
          color: #06b6d4;
          text-decoration: underline;
          word-wrap: break-word;
          overflow-wrap: break-word;
        }
        
        .ql-editor-display a:hover {
          color: #0891b2;
        }
        
        .ql-editor-display img {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          margin: 1.5em auto;
          display: block;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .ql-editor-display .ql-align-left {
          text-align: left;
        }
        
        .ql-editor-display .ql-align-center {
          text-align: center;
        }
        
        .ql-editor-display .ql-align-right {
          text-align: right;
        }
        
        .ql-editor-display .ql-align-justify {
          text-align: justify;
        }
        
        .ql-editor-display .ql-indent-1 {
          padding-left: 3em;
        }
        
        .ql-editor-display .ql-indent-2 {
          padding-left: 6em;
        }
        
        .ql-editor-display .ql-indent-3 {
          padding-left: 9em;
        }
        
        .ql-editor-display .ql-indent-4 {
          padding-left: 12em;
        }
        
        .ql-editor-display .ql-video {
          width: 100%;
          max-width: 100%;
          aspect-ratio: 16/9;
          border-radius: 1rem;
          margin: 1.5em 0;
        }
        
        .ql-editor-display iframe {
          max-width: 100%;
          border-radius: 1rem;
        }
        
        .ql-editor-display sub {
          vertical-align: sub;
          font-size: 0.75em;
        }
        
        .ql-editor-display sup {
          vertical-align: super;
          font-size: 0.75em;
        }
        
        .ql-editor-display .ql-font-serif {
          font-family: Georgia, 'Times New Roman', serif;
        }
        
        .ql-editor-display .ql-font-monospace {
          font-family: 'Courier New', Monaco, monospace;
        }
        
        .ql-editor-display .ql-size-small {
          font-size: 0.75em;
        }
        
        .ql-editor-display .ql-size-large {
          font-size: 1.5em;
        }
        
        .ql-editor-display .ql-size-huge {
          font-size: 2em;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .ql-editor-display {
            font-size: 15px;
          }
          
          .ql-editor-display h1 {
            font-size: 1.75em;
          }
          
          .ql-editor-display h2 {
            font-size: 1.4em;
          }
          
          .ql-editor-display h3 {
            font-size: 1.2em;
          }
          
          .ql-editor-display pre {
            font-size: 0.85em;
            padding: 1em;
          }
        }
      `}</style>
    </>
  );
}