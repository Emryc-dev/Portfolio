import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const ROLES = ["Full Stack", "Frontend", "Backend", "Creative"];
const WHATSAPP_URL = "https://wa.me/237672170259";
const SPLINE_SCENE =
  "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cursorCloudRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const roleInterval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % ROLES.length);
    }, 2000);

    return () => window.clearInterval(roleInterval);
  }, []);

  useEffect(() => {
    const card = cardRef.current;
    const cursorCloud = cursorCloudRef.current;
    if (!card || !cursorCloud) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      gsap.to(cursorCloud, {
        x,
        y,
        opacity: 1,
        duration: 0.45,
        ease: "power3.out",
      });
    };

    const handlePointerLeave = () => {
      gsap.to(cursorCloud, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    card.addEventListener("pointermove", handlePointerMove, { passive: true });
    card.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      gsap.set(".hero-reveal", { opacity: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 28, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }, containerRef);

    return () => context.revert();
  }, []);

  const handleSeeWorks = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-[100dvh] w-full items-center overflow-hidden bg-black px-4 pb-12 pt-28 text-text-primary sm:px-6 lg:px-10"
    >
      <Card
        ref={cardRef}
        className="relative mx-auto min-h-[620px] w-full max-w-[1440px] overflow-hidden border-0 bg-[#111111] shadow-none"
      >
        <Spotlight
          className="-left-[44rem] -top-[40rem] sm:-left-[34rem] md:-left-[24rem] md:-top-[34rem]"
          fill="#dcecff"
        />

        <div
          ref={cursorCloudRef}
          className="pointer-events-none absolute left-0 top-0 z-[1] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-3xl sm:h-96 sm:w-96"
          style={{
            background:
              "radial-gradient(circle, rgba(137,170,204,0.28) 0%, rgba(78,133,191,0.16) 34%, rgba(255,255,255,0.06) 58%, transparent 72%)",
            willChange: "transform, opacity",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_24%_45%,rgba(137,170,204,0.08),transparent_32%),linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.52)_38%,rgba(0,0,0,0.08)_66%,rgba(0,0,0,0)_100%)]" />

        <div className="relative z-10 min-h-[780px] sm:min-h-[820px] lg:min-h-[620px]">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-5 top-5 z-[3] flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2 text-[9px] uppercase tracking-[0.22em] text-white/45 backdrop-blur-md">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#89AACC] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[#89AACC]" />
              </span>
              Interactive 3D
            </div>
            <div className="absolute inset-x-[-18%] bottom-[-10%] h-[58%] sm:h-[62%] lg:inset-y-[-4%] lg:left-[32%] lg:right-[-10%] lg:h-auto">
              <SplineScene
                scene={SPLINE_SCENE}
                className="h-full min-h-[430px] w-full lg:min-h-[680px]"
                followCursor
              />
            </div>
          </div>

          <div className="relative z-[2] flex min-h-[620px] max-w-3xl flex-col justify-start px-6 py-12 sm:px-10 sm:pt-16 lg:justify-center lg:px-14 lg:py-16 xl:px-20">
            <div className="hero-reveal mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50">
              <span className="h-px w-8 bg-[#89AACC]" />
              Full stack developer · 2026
            </div>

            <h1 className="hero-reveal max-w-3xl text-balance text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl xl:text-[5.6rem]">
              I build digital
              <span className="block bg-gradient-to-b from-white to-white/35 bg-clip-text font-display font-normal italic text-transparent">
                experiences.
              </span>
            </h1>

            <div className="hero-reveal mt-7 flex min-h-7 flex-wrap items-center gap-x-2 text-sm text-white/55 sm:text-base">
              <span>I'm Emeryc Djomo, a</span>
              <span
                key={roleIndex}
                className="animate-role-fade-in font-medium text-white"
              >
                {ROLES[roleIndex]}
              </span>
              <span>developer.</span>
            </div>

            <p className="hero-reveal mt-5 max-w-xl text-pretty text-sm font-light leading-7 text-white/50 sm:text-base">
              I create modern web applications, scalable backend systems, and
              cinematic interfaces focused on performance and user experience.
            </p>

            <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleSeeWorks}
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black transition duration-300 hover:bg-neutral-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]"
              >
                View projects
                <ArrowDownRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </button>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 text-sm font-semibold text-white transition duration-300 hover:border-white/30 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#89AACC] active:scale-[0.98]"
              >
                Let's connect
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="hero-reveal mt-12 flex items-center gap-4 text-[10px] uppercase tracking-[0.22em] text-white/30">
              <span>Based in Cameroon</span>
              <span className="size-1 rounded-full bg-[#89AACC]" />
              <span>Available worldwide</span>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
}
