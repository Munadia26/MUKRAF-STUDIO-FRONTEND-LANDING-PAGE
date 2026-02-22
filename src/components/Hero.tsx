"use client";
import { useProfile } from "@/src/hooks/useProfile";
import Link from "next/link";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

export default function Hero() {
  const { data } = useProfile();
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  // WhatsApp configuration
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "628157642627";
  const whatsappMessage = encodeURIComponent(
    "Halo Mukraf! Saya tertarik untuk konsultasi tentang pembuatan website/aplikasi.",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Generate particles
  const particles = useMemo(
    () =>
      [...Array(20)].map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        delay: Math.random() * 5,
      })),
    [],
  );

  // Typing effect for tagline
  const phrases = [
    "Website Profesional",
    "Aplikasi Mobile",
    "Sistem Custom",
    "E-Commerce",
  ];

  useEffect(() => {
    setMounted(true);
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;

    const type = () => {
      const phrase = phrases[currentPhrase];

      if (!isDeleting && currentChar < phrase.length) {
        setTypedText(phrase.substring(0, currentChar + 1));
        currentChar++;
        setTimeout(type, 100);
      } else if (isDeleting && currentChar > 0) {
        setTypedText(phrase.substring(0, currentChar - 1));
        currentChar--;
        setTimeout(type, 50);
      } else if (!isDeleting && currentChar === phrase.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
      } else if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentPhrase = (currentPhrase + 1) % phrases.length;
        setTimeout(type, 500);
      }
    };

    type();
  }, []);

  // Rotating statistics

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a1628]"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            animation: "grid-flow 20s linear infinite",
          }}
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />

        {/* Floating Particles - Client Side Only */}
        {mounted && (
          <div className="absolute inset-0">
            {particles.map((particle, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animation: `float ${particle.duration}s ease-in-out infinite`,
                  animationDelay: `${particle.delay}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      {/* Ubah z-10 menjadi z-30 dan tambahkan pb-44 md:pb-60 */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-10 w-full pb-28 md:pb-48">
        {/* Text Background Besar (Watermark) - Teknik ini sering dipakai Agency Custom */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 select-none pointer-events-none opacity-[0.02]">
          <h2 className="text-[20vw] font-black text-white leading-none">
            MUKRAF
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <br></br>
            <br></br>

            {/* Main Heading */}
            <div className="space-y-4">
              <br></br>
              <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                {data?.name || "MUKRAF"}
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>

            {/* Typing Animation Tagline */}
            <div className="space-y-2">
              <p className="text-2xl md:text-3xl text-gray-300 font-light">
                Transformasi Digital
              </p>
              <div className="flex items-center gap-2 min-h-[48px]">
                <span className="text-3xl md:text-4xl text-cyan-400 font-black">
                  {typedText}
                </span>
                <span className="w-1 h-10 bg-cyan-400 animate-pulse"></span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Solusi kreatif untuk menghadirkan website dan aplikasi mobile yang
              inovatif, modern, dan berorientasi pada hasil bisnis Anda.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center gap-3">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm uppercase tracking-wider">
                    Konsultasi Gratis
                  </span>
                </div>
              </a>

              <Link
                href="#products"
                className="group px-8 py-5 bg-white/5 border-2 border-white/10 rounded-2xl font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20"
              >
                <div className="flex items-center justify-center gap-3">
                  <span className="text-sm uppercase tracking-wider">
                    Lihat Portfolio
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10"></div>
          </div>
          {/* Floating Badge (Aksen Kecil yang Berpengaruh) */}
          {/* Right Visual */}
          <div className="relative hidden md:block">
            {/* 3D Card Effect */}
            <div className="relative group">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform rotate-3 group-hover:rotate-0 transition-all duration-700">
                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-blue-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Content */}
                <div className="relative space-y-6">
                  {/* Code Window Mockup */}

                  <div className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-xl">
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-white/10">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-400 ml-2 font-mono">
                        index.tsx
                      </span>
                    </div>
                    <div className="p-6 font-mono text-sm space-y-2">
                      <div className="text-cyan-400">
                        const <span className="text-white">website</span> ={" "}
                        {`{`}
                      </div>
                      <div className="text-gray-400 ml-4">
                        design:{" "}
                        <span className="text-green-400">
                          &quot;premium&quot;
                        </span>
                        ,
                      </div>
                      <div className="text-gray-400 ml-4">
                        performance:{" "}
                        <span className="text-green-400">
                          &quot;blazing-fast&quot;
                        </span>
                        ,
                      </div>
                      <div className="text-gray-400 ml-4">
                        responsive:{" "}
                        <span className="text-yellow-400">true</span>,
                      </div>
                      <div className="text-cyan-400">{`}`};</div>
                    </div>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "TypeScript", "Tailwind", "API"].map(
                      (tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-gray-300 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[110] flex items-center gap-3 cursor-pointer group"
      >
        {/* Label Teks - Sekarang tampil langsung (opacity-100) */}
        <div className="bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-100 opacity-100 transition-all duration-300 transform group-hover:-translate-y-1">
          <p className="text-sm font-bold text-gray-700 whitespace-nowrap">
            Konsultasi disini <span className="text-green-600">yuk!</span>
          </p>
          {/* Segitiga kecil (speech bubble tail) */}
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-white border-b-[6px] border-b-transparent"></div>
        </div>
        {/* Tombol WhatsApp */}
        <div className="relative">
          {/* Efek Glow & Pulse */}
          <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-40 group-hover:opacity-70 transition-opacity animate-pulse" />

          {/* Icon Container dengan Animasi Floating */}
          <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.148-.67-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.434 5.628 1.434h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>
        </div>
      </a>
      {/* --- BAGIAN WAVE (TRANSISI) --- */}
      {/* Tambahkan pointer-events-none agar tombol di belakangnya bisa diklik */}
      <div className="absolute bottom-0 left-0 w-full leading-[0] z-10 pointer-events-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px] md:h-[120px]"
          fill="#ffffff"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z"></path>
        </svg>
      </div>
      <style jsx>{`
        @keyframes grid-flow {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(60px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(20px);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
