"use client";
import { useParams } from "next/navigation";
import { useProducts } from "@/src/hooks/useProduct";
import ProductSidebar from "@/src/components/ProductSidebar";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ChevronLeft, Calendar, Tag, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { data: products, isLoading } = useProducts();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const product = (products || []).find((p: any) => p.slug === slug);

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center font-black text-[#1e3a5f] tracking-widest uppercase">
      Loading Project...
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center font-black text-red-500 tracking-widest uppercase">
      Project Not Found
    </div>
  );

  return (
    <>
      <Navbar />
      
      <main className="bg-white">
        {/* Hero Section - Terang & Elegan */}
        <section className="pt-40 pb-16 px-6 md:px-10 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em]">
                <span>Project Showcase</span>
                <span className="text-gray-300">/</span>
                <span className="text-gray-400">{product.category?.name}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-[#1e3a5f] uppercase tracking-tighter italic leading-none">
                {product.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="pb-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
            
            {/* Main Content (Kiri) - Lebar 2/3 */}
            <div className="lg:w-2/3 space-y-10">
              
              {/* Featured Image - Dibuat Standar (tidak terlalu besar) */}
              <div className="relative max-w-3xl overflow-hidden rounded-[2rem] shadow-xl border border-gray-100 bg-gray-50 flex justify-center items-center">
                <img 
                  src={`${IMG_URL}/${product.image}`}
                  alt={product.title}
                  className="w-full h-auto object-contain max-h-[600px] block" 
                />
              </div>

              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Kategori Pekerjaan</span>
                  <p className="text-sm font-bold text-[#1e3a5f]">{product.category?.name || "Creative Service"}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Link Project</span>
                  {product.link ? (
                    <a href={product.link} target="_blank" className="text-sm font-bold text-cyan-600 flex items-center gap-2 hover:underline">
                      Visit Website <ExternalLink size={14} />
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-gray-400 italic">No external link</p>
                  )}
                </div>
              </div>

              {/* Info & Description */}
              <div className="space-y-8 max-w-3xl">
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-cyan-600 mb-6">Tentang Project</h3>
                  
                  {/* DESKRIPSI: Menampilkan konten Quill dengan styling rapi */}
                  <div className="w-full overflow-hidden">
                    <div 
                      className="ql-editor-display"
                      dangerouslySetInnerHTML={{ 
                        __html: product.description || "Deskripsi produk belum tersedia." 
                      }} 
                    />
                  </div>
                </div>

                <Link href="/#products" className="group inline-flex items-center gap-3 text-[#1e3a5f] font-black uppercase tracking-widest text-[10px] hover:text-cyan-500 transition-all">
                  <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Kembali ke Portfolio
                </Link>
              </div>
            </div>

            {/* Sidebar (Kanan) - Lebar 1/3 */}
            <aside className="lg:w-1/3">
              <ProductSidebar activeSlug={slug as string} />
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