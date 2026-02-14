"use client";
import { useArticles } from "@/src/hooks/useArticle";
import { useRouter } from "next/navigation";
import { ArrowRight, Clock, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function ArticleSection() {
  const router = useRouter();
  const { data: articles, isLoading } = useArticles();
  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (isLoading) return null;

  const goToArticleDetail = (title: string) => {
    const formattedTitle = title.toLowerCase().replace(/ /g, '-');
    router.push(`/articles/${formattedTitle}`);
  };

  const goToAllArticles = () => {
    router.push('/articles');
  };

  // Scroll functions
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  // Strip HTML tags for preview
  const stripHtml = (html: string) => {
    if (typeof window === 'undefined') return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    const text = tmp.textContent || tmp.innerText || '';
    return text.replace(/\s+/g, ' ').trim();
  };

  // Urutkan artikel berdasarkan tanggal terbaru dan ambil max 6
  const sortedArticles = articles
    ? [...articles]
        .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 6)
    : [];

  const showNavigation = sortedArticles && sortedArticles.length > 3;

  return (
    <section id="articles" className="py-16 md:py-32 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4 w-full md:w-auto">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
              <span className="text-[10px] md:text-xs font-bold text-cyan-600 uppercase tracking-[0.2em] md:tracking-[0.3em]">
                Insights & Stories
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1e3a5f] uppercase tracking-tighter italic">
              Artikel Terbaru
            </h2>
          </div>
          
          <button 
            onClick={goToAllArticles}
            className="group flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-wider shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 w-full md:w-auto justify-center"
          >
            Lihat Semua Artikel
            <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop: outside, Mobile: on sides */}
          {showNavigation && (
            <>
              {/* Desktop Navigation */}
              <button
                onClick={scrollLeft}
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
              </button>
              <button
                onClick={scrollRight}
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-cyan-600 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
              </button>

              {/* Mobile Navigation - On Sides */}
              <button
                onClick={scrollLeft}
                className="flex md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-cyan-600 hover:text-white transition-all active:scale-95"
                aria-label="Previous article"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollRight}
                className="flex md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full shadow-xl items-center justify-center text-slate-900 hover:bg-cyan-600 hover:text-white transition-all active:scale-95"
                aria-label="Next article"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Scrollable Articles */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 md:gap-8 overflow-x-auto scroll-smooth scrollbar-hide pb-4 snap-x snap-mandatory"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {sortedArticles.map((article: any, index: number) => (
              <article 
                key={article.id}
                onClick={() => goToArticleDetail(article.title)}
                className="group cursor-pointer flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[calc(33.333%-1.5rem)] md:min-w-[320px] lg:min-w-[350px] snap-center first:ml-0 last:mr-0"
              >
                {/* Card Container */}
                <div className="h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                    <img 
                      src={`${IMG_URL}/${article.image}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      alt={article.title}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* New Badge untuk artikel terbaru (index 0) */}
                    {index === 0 && (
                      <div className="absolute top-3 md:top-5 right-3 md:right-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Terbaru</span>
                      </div>
                    )}
                    
                    {/* Category Badge */}
                    {article.category && (
                      <div className="absolute top-3 md:top-5 left-3 md:left-5 bg-white/95 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
                        <span className="text-[10px] md:text-xs font-bold text-cyan-600 uppercase tracking-wider">
                          {article.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-7 space-y-3 md:space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 md:gap-4 text-[10px] md:text-xs text-gray-500">
                      {article.createdAt && (
                        <div className="flex items-center gap-1 md:gap-1.5">
                          <Calendar className="w-3 md:w-3.5 h-3 md:h-3.5" />
                          <span className="hidden sm:inline">{formatDate(article.createdAt)}</span>
                          <span className="sm:hidden">{new Date(article.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}</span>
                        </div>
                      )}
                      {article.readTime && (
                        <div className="flex items-center gap-1 md:gap-1.5">
                          <Clock className="w-3 md:w-3.5 h-3 md:h-3.5" />
                          <span>{article.readTime} min</span>
                        </div>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2 md:line-clamp-3">
                      {stripHtml(article.description)}
                    </p>

                    {/* Read More Link */}
                    <div className="pt-2 md:pt-3 flex items-center gap-2 text-cyan-600 font-semibold text-xs md:text-sm group-hover:gap-3 transition-all duration-300">
                      <span>Baca Artikel</span>
                      <ArrowRight className="w-3.5 md:w-4 h-3.5 md:h-4" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {(!sortedArticles || sortedArticles.length === 0) && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Belum Ada Artikel</h3>
            <p className="text-gray-500">Artikel baru akan segera hadir</p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        article {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}