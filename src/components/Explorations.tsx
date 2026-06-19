import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explorations } from "../data";
import { Exploration } from "../types";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const [activeItem, setActiveItem] = useState<Exploration | null>(null);

  useEffect(() => {
    // Only execute GSAP trigger scroll logic on screens larger than mobile md:768px
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Pin Layer 1 - Center introductory text block
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: pinnedRef.current,
        pinSpacing: false,
        scrub: true,
      });

      // Layer 2 Parallax Column animations (offset vertical sliding)
      gsap.fromTo(
        leftColRef.current,
        { y: 150 },
        {
          y: -180,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        rightColRef.current,
        { y: -100 },
        {
          y: 200,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Split explorations array into 2 columns for parallax
  const leftItems = explorations.filter((_, idx) => idx % 2 === 0);
  const rightItems = explorations.filter((_, idx) => idx % 2 !== 0);

  return (
    <section
      id="explorations"
      ref={containerRef}
      className="relative w-full min-h-[140vh] md:min-h-[200vh] bg-bg py-20 overflow-hidden border-b border-stroke/50"
    >
      {/* LAYER 1: Pinned Center Title Element */}
      <div
        ref={pinnedRef}
        className="pointer-events-none md:absolute md:inset-0 w-full h-[50vh] md:h-screen flex items-center justify-center z-10 px-6"
      >
        <div className="max-w-md text-center flex flex-col items-center">
          <span className="text-xs text-[#89AACC] uppercase tracking-[0.35em] font-semibold mb-4 bg-stroke px-4 py-1.5 rounded-full backdrop-blur-sm pointer-events-auto">
            Creative Experiments
          </span>
          <h2 className="text-4xl md:text-6xl font-light font-sans text-text-primary tracking-tight leading-none mt-2 select-none">
            Visual <span className="font-display italic">playground</span>
          </h2>
          <p className="text-sm text-muted mt-4 mb-6 leading-relaxed select-none max-w-sm">
            A collection of experimental concepts, motion explorations, futuristic interfaces, and immersive UI systems.
          </p>
          <a
            href="#explorations"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("explorations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="pointer-events-auto group relative inline-flex items-center justify-center rounded-full text-xs font-semibold p-[1.5px] overflow-hidden select-none"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full accent-gradient" />
            <span className="absolute inset-[1.5px] bg-bg rounded-full" />
            <span className="relative flex items-center gap-1.5 bg-surface/80 rounded-full px-5 py-2.5 text-muted hover:text-white border border-stroke group-hover:border-transparent transition-all duration-300">
              <span>View Experiments</span>
              <span>⟶</span>
            </span>
          </a>
        </div>
      </div>

      {/* LAYER 2: Parallax Columns */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16 mt-12 md:mt-24">
        {/* Parallax structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 md:gap-40">
          {/* Column 1 (Sliding Upward) */}
          <div
            ref={leftColRef}
            className="flex flex-col gap-12 md:gap-32 md:pt-40"
          >
            {leftItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group flex flex-col items-center justify-center cursor-pointer select-none"
              >
                <div
                  className={`relative aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl shadow-black/60 hover:border-white/20 transition-all duration-500 hover:scale-[1.03] ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-bg/85 backdrop-blur-md rounded-2xl border border-stroke p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#89AACC]">
                      Sandbox
                    </span>
                    <h4 className="font-display italic text-sm text-text-primary">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 (Sliding Downward) */}
          <div
            ref={rightColRef}
            className="flex flex-col gap-12 md:gap-32 md:pb-40"
          >
            {rightItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group flex flex-col items-center justify-center cursor-pointer select-none"
              >
                <div
                  className={`relative aspect-square w-full max-w-[320px] rounded-3xl overflow-hidden border border-stroke bg-surface shadow-2xl shadow-black/60 hover:border-white/20 transition-all duration-500 hover:scale-[1.03] ${item.rotation}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-bg/85 backdrop-blur-md rounded-2xl border border-stroke p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#89AACC]">
                      Sandbox
                    </span>
                    <h4 className="font-display italic text-sm text-text-primary">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialog / Modal Lightbox on Click */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            id="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setActiveItem(null)}
          >
            {/* Close trigger on background click */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-lg w-full bg-surface border border-white/10 rounded-[32px] overflow-hidden shadow-2xl shadow-black cursor-default p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modern Close button */}
              <button
                id="lightbox-close"
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 z-30 w-8 h-8 rounded-full bg-bg border border-stroke text-muted hover:text-white flex items-center justify-center transition-transform hover:rotate-90 duration-300"
              >
                ✕
              </button>

              {/* Landscape modal photo display */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-stroke relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
              </div>

              {/* Explanatory text card details inside Modal */}
              <div id="lightbox-details" className="pt-5 pb-2 px-3 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#89AACC] uppercase tracking-widest bg-stroke px-2.5 py-1 rounded-full">
                    Exploration Grid
                  </span>
                  <span className="font-mono text-[10px] text-muted/60">
                    EST. 2026
                  </span>
                </div>
                <h3 className="text-xl font-display italic text-text-primary font-medium tracking-wide">
                  {activeItem.title}
                </h3>
                <p className="text-xs text-muted/80 leading-relaxed font-light">
                  {activeItem.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
