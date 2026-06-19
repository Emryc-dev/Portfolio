import { motion } from "motion/react";
import { journalEntries } from "../data";

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-20 md:py-28 border-b border-stroke/50">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header pattern modeled after SelectedWorks */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-6"
        >
          <div className="space-y-4 max-w-lg">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-stroke block" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                Developer Journal
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-light font-sans tracking-tight text-text-primary">
              Recent <span className="font-display italic text-text-primary/95 ml-1">thoughts</span>
            </h2>
            {/* Subtext */}
            <p className="text-sm md:text-base text-muted/80 leading-relaxed font-light">
              Thoughts on full stack development, digital product design, modern interfaces, and creative engineering.
            </p>
          </div>

          {/* Desktop "View all thoughts" Button */}
          <div className="hidden md:inline-flex">
            <a
              href="#journal"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("journal")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center rounded-full text-xs font-semibold p-[1.5px] overflow-hidden select-none cursor-pointer"
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full accent-gradient animate-gradient-shift" />
              <span className="absolute inset-[1.5px] bg-bg rounded-full" />
              <span className="relative flex items-center gap-2 bg-surface hover:bg-surface/60 rounded-full px-5 py-2.5 text-muted hover:text-text-primary border border-white/5 group-hover:border-transparent transition-all duration-300">
                <span>View all articles</span>
                <span className="font-sans group-hover:translate-x-1 transition-transform duration-300">⟶</span>
              </span>
            </a>
          </div>
        </motion.div>

        {/* Horizontal Journal Pills List */}
        <div id="journal-list" className="space-y-4 sm:space-y-5">
          {journalEntries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 p-5 sm:p-5 sm:px-8 border border-stroke rounded-[24px] bg-surface/20 hover:bg-surface/65 hover:border-white/10 transition-all duration-300 pointer-events-auto cursor-pointer"
            >
              <div className="flex items-center gap-6 w-full md:w-auto">
                {/* 1. Thumbnail image wrapper inside pill */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-full overflow-hidden flex-shrink-0 border border-stroke">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                </div>

                {/* 2. Text layout inside card */}
                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-[#89AACC] uppercase tracking-wider font-mono font-medium">
                      {entry.category}
                    </span>
                    <span className="text-[10px] text-muted/60 font-mono">•</span>
                    <span className="text-[10px] text-muted/60 font-mono">{entry.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base md:text-lg font-light text-text-primary tracking-tight transition-colors duration-300 group-hover:text-white">
                    {entry.title}
                  </h3>
                </div>
              </div>

              {/* 3. Right status read time label */}
              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto border-t border-stroke/45 md:border-0 pt-3 md:pt-0">
                <span className="text-xs text-muted font-light max-w-xs md:max-w-md hidden lg:block pr-6 truncate">
                  {entry.summary}
                </span>
                <span className="text-xs text-muted/60 font-mono italic flex-shrink-0 ml-auto md:ml-0 bg-stroke/30 md:bg-transparent rounded-full px-3 py-1 md:p-0">
                  {entry.readTime}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
