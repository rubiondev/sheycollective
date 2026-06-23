"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; 
import { ArrowDown, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

// --- Data ---
const collections = [
  { id: 1, title: "", category: "Goddess Unveiled", year: "2025", src: "/images/C2-1.jpg" },
  { id: 2, title: "", category: "Goddess Unveiled", year: "2025", src: "/images/C2-2.jpg" },
  { id: 3, title: "", category: "Vailed Vitality", year: "2024", src: "/images/outfit3.jpg" },
  { id: 4, title: "", category: "Vailed Vitality", year: "2024", src: "/images/outfit1.jpg" },
];

export default function Home() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Toggle Sound Function
  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackText = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yVideo = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const ySignature = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <main className="min-h-screen bg-black text-neutral-200 selection:bg-red-900 selection:text-white font-sans overflow-x-hidden relative">
      
      {/* --- GLOBAL NOISE --- */}
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-50 contrast-200 z-0"></div>

      {/* --- HERO SECTION --- */}
      <section
        ref={containerRef}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black px-6"
      >
        {/* 1. ATMOSPHERE */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-red-900/40 blur-[180px] rounded-full z-0 opacity-60" />

        {/* 2. "SHEY" TITLE (BEHIND VIDEO) */}
        <motion.div 
          style={{ y: yBackText }}
          className="absolute z-10 w-full flex justify-center items-center select-none"
        >
          <h1 
              className="text-[32vw] md:text-[28vw] leading-none font-black text-neutral-900 tracking-tighter"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
              Shey
          </h1>
        </motion.div>

        {/* 3. THE VIDEO (BLENDED EDGES) */}
        <motion.div
          style={{ y: yVideo }}
          initial={{ height: "0vh", opacity: 0 }}
          animate={{ height: "80vh", opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
          className="relative z-20 w-full max-w-[340px] md:max-w-[450px] aspect-[9/16] overflow-hidden"
        >
          {/* MASKING FOR SMOOTH BLEND: 
             This creates the "fade to black" effect on the edges 
          */}
          <div className="relative w-full h-full [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted} // Controlled by state
                playsInline
                className="w-full h-full object-contain"
              >
                <source src="/homefinal.mp4" type="video/mp4" />
              </video>
          </div>

          {/* Audio Control Button (Luxury Style) */}
          <button 
            onClick={toggleAudio}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-xs uppercase tracking-widest text-white hover:bg-red-900/80 transition-colors duration-300 group"
          >
             {isMuted ? (
                <>
                  <VolumeX className="w-3 h-3" /> 
                </>
             ) : (
                <>
                  <Volume2 className="w-3 h-3 text-red-500 animate-pulse" /> 
                </>
             )}
          </button>

        </motion.div>


        {/* 4. "COLLECTIVE" SIGNATURE */}
        <motion.div 
          style={{ y: ySignature }}
          className="hidden lg:block absolute z-30 bottom-[10%] right-[5%] md:right-[10%] pointer-events-none"
        >
           <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="block text-[4rem] md:text-[7rem] text-red-900 font-light drop-shadow-2xl"
              style={{ 
                  fontFamily: 'var(--font-pinyon), cursive',
                  textShadow: "0px 0px 30px rgba(220, 38, 38, 0.4)" 
              }}
           >
              collective
           </motion.span>
        </motion.div>

        {/* Bottom Left Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="absolute bottom-8 left-6 md:left-12 z-40 max-w-[200px]"
        >
          <p className="text-[10px] uppercase tracking-widest text-neutral-500 leading-relaxed border-l border-red-900 pl-3">
              Redefining modern luxury <br /> Est  2024 <br/>BY Shehara Madurawala.
              
          </p>
        </motion.div>

      </section>

      {/* --- STATEMENT / PHILOSOPHY --- */}
      {/* --- STATEMENT / PHILOSOPHY --- */}
      <section className="py-24 md:py-40 px-6 max-w-5xl mx-auto relative z-10">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-900 to-transparent mb-20 opacity-50"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Label: Kept Mono for contrast, but made it cleaner */}
          <div className="text-red-600 font-mono text-sm md:text-md uppercase tracking-[0.2em] mb-4 md:mb-0 pt-2">
            /// Founder's vision
          </div>

          {/* Text: Switched to Serif (Playfair) for luxury feel */}
          <div>
            <p 
                className="text-3xl md:text-3xl font-medium leading-tight text-neutral-200"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              Shey Collective was founded with a vision to redifine modern luxury through{" "}
              <span className="text-red-600 italic pr-2">bold,</span>
              custom-made fashion that celebrates individuality and refined craftsmanship. Rooted in innovation and artistic expression, the brand creates statement pieces that empower women, balance avant-garde design with timeless elegance, and transform fashion into a powerful form of self-expression.
            </p>
          </div>
        </div>
      </section>

      {/* --- COLLECTIONS GALLERY --- */}
      <section className="py-20 px-4 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 px-2 gap-6 md:gap-0">
          <h3
            className="text-6xl md:text-8xl font-black text-neutral-900 uppercase tracking-tighter stroke-text"
            style={{ WebkitTextStroke: "1px #333" }}
          >
            Works
          </h3>
          
          <Link 
            href="/collections"
            className="text-red-600 text-xs tracking-widest uppercase border border-red-900 px-6 py-3 rounded-full cursor-pointer hover:bg-red-900 hover:text-white transition-colors"
          >
            View All Lookbooks
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {collections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden ${
                index % 2 === 1 ? "md:mt-24" : ""
              }`}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900">
                <div className="absolute inset-0  mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />

                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out">
                   <Image 
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:grayscale-0 transition-all duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                   />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex justify-between items-center text-white">
                    <div>
                      <p className="text-xs text-red-400 uppercase tracking-widest mb-1">
                        {item.category}
                      </p>
                      <h4 className="text-3xl font-bold uppercase">{item.title}</h4>
                    </div>
                    <ArrowUpRight className="text-white w-8 h-8 rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <section className="py-20 overflow-hidden bg-red-700 text-black">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="text-[10vw] font-black uppercase tracking-tighter mx-8"
            >
              SHEY COLLECTIVE — WEAR YOUR BLOOD —
            </span>
          ))}
        </motion.div>
      </section>
    </main>
  );
}