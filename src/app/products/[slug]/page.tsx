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
      <>
      <Navbar />
      
      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION --- */}
        <section className="relative pt-48 pb-32 px-6 md:px-10 bg-[#0a1628] overflow-hidden">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 blur-[100px] opacity-50" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
              
              {/* Sisi Kiri: Judul & Kategori */}
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-cyan-500"></span>
                  <div className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">
                    <span>Portofolio</span>
                    <span className="text-white/20">/</span>
                    <span>{product.category?.name}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
                  {product.title}
                </h1>
                
                <p className="text-gray-400 font-medium max-w-xl text-sm md:text-base leading-relaxed">
                  Kami menghadirkan solusi digital yang tepat guna untuk setiap tantangan bisnis Anda.
                </p>
              </div>

              {/* Sisi Kanan: Tombol Aksi */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4 mb-2 w-full">
                {/* Tombol Pesan Sekarang */}

                {/* Tombol Konsultasi Gratis (WhatsApp Direct) */}
                <a 
                  href={`https://wa.me/628157642627?text=${encodeURIComponent(`Halo Mukraf, saya ingin konsultasi mengenai project: ${product.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-400 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 text-center flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
                >
                  {/* Efek kilauan saat hover */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* Ikon WhatsApp SVG dengan warna yang lebih terang */}
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-5 h-5 fill-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.15 11.891c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
  
                    <span className="relative z-10">Konsultasi Gratis Sekarang!</span>
                  </a>
              </div>

            </div>
          </div>
        </section>

        {/* --- CONTENT SECTION --- */}
        <section className="pb-24 px-6 md:px-10 relative">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
            
            {/* Main Content (Kiri) */}
            <div className="lg:w-2/3 -mt-20 relative z-20">
              
              {/* Gambar Utama: Borderless & High Shadow */}
              <div className="relative group overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] bg-gray-50 border border-white/5">
                <img 
                  src={`${IMG_URL}/${product.image}`}
                  alt={product.title}
                  className="w-full h-auto object-contain block" 
                />
              </div>

              {/* Info Project */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10 mt-6 border-b border-gray-100">
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Client Service</span>
                  <p className="text-sm font-bold text-[#1e3a5f] uppercase italic">{product.category?.name}</p>
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Project Link</span>
                  {product.link ? (
                    <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-cyan-600 flex items-center gap-2 hover:underline">
                      Live Preview <ExternalLink size={14} />
                    </a>
                  ) : (
                    <p className="text-sm font-bold text-gray-300 italic">Private Access</p>
                  )}
                </div>
              </div>

              {/* Deskripsi */}
              <div className="py-12">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#0a1628] mb-8">Detail Project</h3>
                <div className="prose prose-slate max-w-none">
                  <div 
                    className="ql-editor-display text-[#1e3a5f]"
                    dangerouslySetInnerHTML={{ __html: product.description || "" }} 
                  />
                </div>
                
                <Link href="/#products" className="group inline-flex items-center gap-3 text-[#1e3a5f] font-black uppercase tracking-widest text-[10px] mt-12 hover:text-cyan-500 transition-all">
                  <ChevronLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                  Kembali ke Portofolio
                </Link>
              </div>
            </div>

            {/* Sidebar (Kanan) */}
            <aside className="lg:w-1/3 pt-10">
              <ProductSidebar activeSlug={slug as string} />
            </aside>

          </div>
        </section>
      </main>
    </>

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