import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import Hls from "hls.js";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emeryc-djomo-02a343326",
  },
  { label: "GitHub", href: "https://github.com/Emryc-dev" },
  { label: "Portfolio", href: "https://portfolio-me-steel.vercel.app" },
  { label: "Email", href: "mailto:emerycdjomo@gmail.com" },
  { label: "CV", href: "/CV_Emeryc_Djomo_2026.docx" },
];

const WHATSAPP_URL = "https://wa.me/237672170259";
const FOOTER_VIDEO_URL =
  "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
const FOOTER_POSTER_URL =
  "https://image.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g/thumbnail.jpg?time=1";

export default function Footer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;
    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
      hls.loadSource(FOOTER_VIDEO_URL);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => undefined);
      });
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.warn("Footer background video failed to load.", data);
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = FOOTER_VIDEO_URL;
      video.addEventListener(
        "loadedmetadata",
        () => {
          video.play().catch(() => undefined);
        },
        { once: true },
      );
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const anim = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-20 md:pt-32 pb-8 md:pb-12 overflow-hidden select-none"
    >
      <div
        id="footer-video-wrapper"
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={FOOTER_POSTER_URL}
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2 scale-y-[-1] opacity-35"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between">
        <div
          id="footer-marquee-container"
          className="overflow-hidden w-full border-t border-b border-stroke/40 py-5 bg-surface/5 mb-16 md:mb-24"
        >
          <div
            ref={marqueeRef}
            className="flex whitespace-nowrap gap-4 w-max text-4xl sm:text-5xl md:text-7xl font-display italic uppercase tracking-wider text-muted/20"
          >
            <span className="flex-shrink-0">
              {Array(10).fill("BUILDING DIGITAL EXPERIENCES • ").join("")}
            </span>
            <span className="flex-shrink-0 font-display italic">
              {Array(10).fill("BUILDING DIGITAL EXPERIENCES • ").join("")}
            </span>
          </div>
        </div>

        <div
          id="footer-cta-container"
          className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-28 w-full flex flex-col items-center"
        >
          <div className="mb-8 rounded-[2rem] border border-white/10 bg-white/[0.96] px-6 py-4 shadow-2xl shadow-black/40">
            <img
              src="/logo-emeryc-djomo.png"
              alt="Emeryc Djomo logo"
              className="h-20 w-auto object-contain sm:h-24"
            />
          </div>
          <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium mb-4">
            Have a project in mind?
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-sans font-light tracking-tight text-white mb-4">
            Let's build something{" "}
            <span className="font-display italic text-[#89AACC]">
              powerful together
            </span>
            .
          </h2>
          <p className="text-sm md:text-base text-muted/70 max-w-xl mb-8 leading-relaxed font-light">
            Available for freelance work, collaborations, startup projects, and
            creative development opportunities.
          </p>

          <a
            href={WHATSAPP_URL}
            id="footer-email-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer shadow-xl shadow-black/80"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#89AACC] to-[#4E85BF]" />
            <span className="absolute inset-[1.5px] bg-bg rounded-full" />
            <span className="relative flex items-center gap-3 bg-surface hover:bg-surface/50 rounded-full px-8 py-4 sm:px-12 sm:py-5 border border-stroke text-base sm:text-lg font-medium text-text-primary group-hover:text-white transition-colors duration-300">
              <span>Contact Me</span>
              <ArrowUpRight
                className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>

        <div
          id="footer-bottom-bar"
          className="max-w-[1240px] w-full mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div
            id="footer-availability-dot"
            className="flex items-center gap-3 bg-surface/30 border border-stroke rounded-full px-4 py-2 hover:bg-surface/60 transition-colors duration-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-muted/95 tracking-wide font-light">
              Available for projects
            </span>
          </div>

          <div id="footer-social-wrapper" className="flex items-center gap-4 sm:gap-6">
            {SOCIALS.map((soc) => (
              <a
                key={soc.label}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="text-xs sm:text-sm text-muted hover:text-text-primary transition-colors duration-300"
              >
                {soc.label}
              </a>
            ))}
          </div>

          <div className="text-xs text-muted/60 font-mono tracking-widest">
            ©2026 DJOMO. ALL RIGHTS RESERVED.
          </div>
        </div>
      </div>
    </footer>
  );
}
