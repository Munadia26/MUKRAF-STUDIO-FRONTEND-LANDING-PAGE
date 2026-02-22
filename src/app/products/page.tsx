"use client";
import { useState } from "react";
import { useProducts, useCategories } from "@/src/hooks/useProduct";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { ArrowRight, Search, Box, Tag, MessageCircle } from "lucide-react";

export default function AllProductsPage() {
  const router = useRouter();
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: categories } = useCategories();

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("all");

  const IMG_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628157642627";

  // Logika Filter: Berdasarkan Pencarian Nama DAN Kategori
  const filteredProducts = (products || []).filter((p: any) => {
    const matchesSearch = p.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCat === "all" || p.categoryId === Number(activeCat);
    return matchesSearch && matchesCategory;
  });

  const stripHtml = (html: string) => {
    if (typeof document === "undefined" || !html) return "";
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    const decoded = txt.value;

    const tmp = document.createElement("div");
    tmp.innerHTML = decoded;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* --- HERO SECTION: NAVY PREMIUM --- */}
        <section className="relative pt-48 pb-32 px-6 md:px-10 bg-[#0a1628] overflow-hidden">
          {/* Ornamen Latar Belakang Konsisten dengan Hero.tsx */}
          <div className="absolute top-0 right-0 w-[40%] h-full bg-cyan-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-600/10 blur-[100px] opacity-50" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Sisi Kiri: Judul */}
              <div className="space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="h-px w-8 bg-cyan-500"></span>
                  <div className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">
                    <span>Katalog</span>
                    <span className="text-white/20">/</span>
                    <span>Portofolio</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter italic leading-none">
                  Portofolio <span className="text-cyan-400">Project</span>{" "}
                  <br />
                  MUKRAF STUDIO
                </h1>

                <p className="text-gray-400 font-medium max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed">
                  Jelajahi berbagai solusi inovatif yang telah kami bangun untuk
                  membantu transformasi digital berbagai skala bisnis.
                </p>
              </div>

              {/* Sisi Kanan: Call to Action & Search */}
              <div className="flex flex-col gap-6 items-center lg:items-end">
                <div className="flex flex-col sm:flex-row gap-4 w-full justify-end">
                  {/* Tombol Konsultasi Gratis Sekarang dengan Icon WhatsApp */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Halo Mukraf, saya ingin konsultasi mengenai project di katalog.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-5 bg-cyan-500/10 hover:bg-cyan-500/20 border-2 border-cyan-500/30 hover:border-cyan-400 text-white rounded-full font-black text-[10px] uppercase tracking-widest transition-all text-center flex items-center justify-center gap-3 group relative overflow-hidden"
                  >
                    {/* Efek kilauan saat hover */}
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

          {/* Wave Transition */}
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

        {/* --- CONTENT SECTION --- */}
        <section className="pb-24 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* FILTER & SEARCH CONTAINER */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 pt-10">
              {/* SISI KIRI: CATEGORY FILTER */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 order-2 lg:order-1">
                <button
                  onClick={() => setActiveCat("all")}
                  className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    activeCat === "all"
                      ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xl scale-105"
                      : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                  }`}
                >
                  Semua Produk
                </button>

                {categories?.map((cat: any) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCat(cat.id.toString())}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                      activeCat === cat.id.toString()
                        ? "bg-[#0a1628] text-white border-[#0a1628] shadow-xl scale-105"
                        : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* SISI KANAN: SEARCH BAR */}
              <div className="relative w-full lg:max-w-sm order-1 lg:order-2 group">
                <input
                  type="text"
                  placeholder="Cari project kami..."
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
            {/* PRODUCTS GRID */}
            {productsLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <div
                    key={n}
                    className="h-[450px] bg-gray-50 animate-pulse rounded-[2.5rem]"
                  />
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredProducts.map((p: any) => (
                  <article
                    key={p.id}
                    onClick={() =>
                      router.push(
                        `/products/${p.title?.toLowerCase().replace(/ /g, "-")}`,
                      )
                    }
                    className="group cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-50"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                      <img
                        src={`${IMG_URL}/${p.image}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={p.title}
                      />
                      <div className="absolute top-5 left-5">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-[#1e3a5f] shadow-sm flex items-center gap-2">
                          <Tag size={12} className="text-cyan-500" />
                          {p.category?.name || "Uncategorized"}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 space-y-4">
                      <h3 className="text-2xl font-black text-[#1e3a5f] leading-tight group-hover:text-cyan-600 transition-colors italic uppercase">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                        {p.description
                          ? stripHtml(p.description)
                          : "Solusi inovatif untuk kebutuhan bisnis Anda."}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-cyan-600 font-black text-[10px] uppercase tracking-widest group-hover:gap-5 transition-all">
                        <span>Lihat Detail</span>
                        <ArrowRight size={14} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-100">
                <Box className="mx-auto text-gray-200 mb-6" size={64} />
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest">
                  Produk Tidak Ditemukan
                </h3>
                <p className="text-gray-500 mt-2">
                  Tidak ada produk dalam kategori ini atau pencarian tersebut.
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
