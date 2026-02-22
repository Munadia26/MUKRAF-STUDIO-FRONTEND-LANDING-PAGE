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
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default function ArticleDetailPage() {
  const { title } = useParams();
  const { data: articles, isLoading } = useArticles();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  const article = (articles || []).find(
    (a: any) => createSlug(a.title) === decodeURIComponent(title as string),
  );

  const decodeHtml = (html: string) => {
    if (typeof document === "undefined" || !html) return html;
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value.replace(/\u00A0/g, " ");
  };

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center font-black bg-[#0a1628] text-white tracking-[0.4em] text-xs">
        SINKRONISASI DATA...
      </div>
    );

  if (!article)
    return (
      <div className="min-h-screen flex items-center justify-center font-black text-red-500 bg-[#0a1628]">
        ARTIKEL TIDAK DITEMUKAN
      </div>
    );

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* ================= HERO ================= */}
        <section className="relative pt-48 pb-16 px-6 md:px-10 bg-[#0a1628] overflow-hidden">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-2xl pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight italic leading-tight">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-cyan-500" />
                  <span>
                    {new Date(article.createdAt).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-cyan-500" />
                  <span>Mukraf Insight</span>
                </div>
              </div>
            </div>

            {/* Tombol Konsultasi */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4 w-full">
              <a
                href={`https://wa.me/628157642627?text=${encodeURIComponent(`Halo Mukraf`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-400 text-white rounded-full font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 text-center flex items-center justify-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-cyan-400 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.15 11.891c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="relative z-10">
                  Konsultasi Gratis Sekarang!
                </span>
              </a>
            </div>
          </div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
            <svg
              viewBox="0 0 1440 90"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-24"
            >
              <path
                d="M0,30 C240,90 480,0 720,45 C960,90 1200,10 1440,50 L1440,90 L0,90 Z"
                fill="white"
                opacity="0.3"
              />
              <path
                d="M0,50 C200,10 440,80 720,35 C1000,0 1240,70 1440,40 L1440,90 L0,90 Z"
                fill="white"
                opacity="0.6"
              />
              <path
                d="M0,65 C180,30 400,75 660,55 C900,35 1200,75 1440,60 L1440,90 L0,90 Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="pb-24 px-6 md:px-10 pt-14">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* MAIN CONTENT */}
            <div className="w-full lg:w-2/3 min-w-0">
              {/* IMAGE */}
              <div className="w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-2xl border border-gray-100 bg-gray-50 mb-10 md:mb-12">
                <img
                  src={`${IMG_URL}/${article.image}`}
                  alt={article.title}
                  className="w-full h-auto object-cover max-h-[400px] md:max-h-[600px]"
                />
              </div>

              {/* DESCRIPTION */}
              <div
                className="prose prose-sm md:prose-base max-w-none prose-cyan prose-img:rounded-xl text-gray-600 prose-p:leading-loose prose-p:mb-6 text-justify"
                dangerouslySetInnerHTML={{
                  __html: decodeHtml(article.description || ""),
                }}
              />

              {/* BACK BUTTON */}
              <div className="w-full mt-12 md:mt-16 pt-8 border-t border-gray-100">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1e3a5f] hover:text-cyan-500 transition-all"
                >
                  <ChevronLeft size={18} />
                  Kembali ke Katalog Artikel
                </Link>
              </div>
            </div>

            {/* SIDEBAR */}
            <aside className="w-full lg:w-1/3 min-w-0">
              <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
                <ArticleSidebar activeTitle={article.title} />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
