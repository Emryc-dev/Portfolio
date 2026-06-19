import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { projects } from "../data";

export default function SelectedWorks() {
  return (
    <section
      id="work"
      className="bg-bg py-20 md:py-28 overflow-hidden border-b border-stroke/50"
    >
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div className="space-y-4 max-w-lg">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-stroke block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Selected Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-light font-sans tracking-tight text-text-primary">
              Featured{" "}
              <span className="font-display italic text-text-primary/95 ml-1">
                projects
              </span>
            </h2>
            <p className="text-sm md:text-base text-muted/80 leading-relaxed font-light">
              A collection of ambitious digital products, modern platforms, and
              full stack experiences I've designed and developed.
            </p>
          </div>

          <div className="hidden md:inline-flex">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center rounded-full text-xs font-semibold p-[1.5px] overflow-hidden select-none cursor-pointer"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full accent-gradient animate-gradient-shift" />
              <span className="absolute inset-[1.5px] bg-bg rounded-full" />
              <span className="relative flex items-center gap-2 bg-surface hover:bg-surface/60 rounded-full px-5 py-2.5 text-muted hover:text-text-primary border border-white/5 group-hover:border-transparent transition-all duration-300">
                <span>Explore all projects</span>
                <ArrowRight
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7" id="works-grid">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link && project.link !== "#" ? project.link : undefined}
              target={project.link && project.link !== "#" ? "_blank" : undefined}
              rel={project.link && project.link !== "#" ? "noopener noreferrer" : undefined}
              aria-disabled={!project.link || project.link === "#"}
              className={`group relative overflow-hidden rounded-3xl border border-stroke bg-surface hover:border-white/20 transition-all duration-500 h-[350px] sm:h-[400px] md:h-[480px] ${
                project.link && project.link !== "#" ? "cursor-pointer" : "cursor-default"
              } ${project.spanClass}`}
            >
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.04] ${
                  project.imageFit === "contain"
                    ? "object-contain bg-[#eef4e8] p-3"
                    : "object-cover"
                }`}
                style={{ objectPosition: project.imagePosition ?? "center" }}
              />

              <div className="absolute inset-0 halftone-overlay opacity-[0.16] mix-blend-multiply pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />

              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-10 transition-all duration-500 group-hover:translate-y-6 group-hover:opacity-0">
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#89AACC]">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display italic font-light text-text-primary leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="text-xs text-muted/80 font-mono tracking-widest border border-stroke rounded-full px-3 py-1 bg-bg/60 backdrop-blur-sm">
                  {project.year}
                </div>
              </div>

              <div className="absolute inset-0 bg-bg/55 opacity-0 group-hover:opacity-100 backdrop-blur-md flex items-center justify-center transition-all duration-500 z-20">
                <div className="relative p-[2px] rounded-full overflow-hidden scale-90 group-hover:scale-100 transition-all duration-500 delay-75 shadow-20xl shadow-black/80">
                  <span className="absolute inset-0 accent-gradient animate-gradient-shift" />
                  <div className="relative bg-white text-black px-6 py-3 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 select-none">
                    <span>{project.linkLabel ?? "View"}</span>
                    <span className="font-display italic text-sm font-bold text-black/90 tracking-normal">
                      {project.title}
                    </span>
                    <ArrowRight
                      className="ml-1 size-4 rounded-full bg-black/10 p-0.5 text-black"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
