import type { CSSProperties } from "react";
import { motion } from "motion/react";

const STATS = [
  {
    value: "3+",
    label: "Years Building",
    description: "Of continuous full stack exploration and development.",
  },
  {
    value: "20+",
    label: "Digital Projects",
    description: "Web platforms, custom SaaS apps, and API backends delivered.",
  },
  {
    value: "Endless",
    label: "Creative Ideas",
    description: "Translating complex functional logic into cinematic and responsive web interfaces.",
  },
];

const TECH_STACK = [
  {
    name: "React",
    type: "Frontend Library",
    icon: "https://cdn.simpleicons.org/react/61DAFB",
    color: "#61DAFB",
  },
  {
    name: "TypeScript",
    type: "Typed Language",
    icon: "https://cdn.simpleicons.org/typescript/3178C6",
    color: "#3178C6",
  },
  {
    name: "Tailwind CSS",
    type: "Styling Framework",
    icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    color: "#06B6D4",
  },
  {
    name: "PHP",
    type: "Backend Language",
    icon: "https://cdn.simpleicons.org/php/777BB4",
    color: "#777BB4",
  },
  {
    name: "Supabase",
    type: "Backend as a Service",
    icon: "https://cdn.simpleicons.org/supabase/3FCF8E",
    color: "#3FCF8E",
  },
  {
    name: "JavaScript",
    type: "Core Language",
    icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
    color: "#F7DF1E",
  },
  {
    name: "Node.js",
    type: "Server Runtime",
    icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    color: "#5FA04E",
  },
  {
    name: "Express.js",
    type: "Backend Framework",
    icon: "https://cdn.simpleicons.org/express/FFFFFF",
    color: "#FFFFFF",
  },
  {
    name: "Python",
    type: "Backend Language",
    icon: "https://cdn.simpleicons.org/python/3776AB",
    color: "#3776AB",
  },
  {
    name: "Framer Motion",
    type: "UI Animations",
    icon: "https://cdn.simpleicons.org/framer/0055FF",
    color: "#0055FF",
  },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-bg py-16 md:py-24 border-b border-stroke/50">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Core Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col p-6 rounded-2xl bg-surface/10 border border-stroke/75 hover:border-white/10 transition-all duration-300"
            >
              {/* Highlight bar inside card */}
              <div className="absolute top-0 left-6 right-6 h-[2px] accent-gradient scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500 rounded-full" />

              <div className="text-5xl sm:text-6xl font-display italic text-text-primary mb-2 select-none tracking-tight">
                {stat.value}
              </div>
              <h3 className="text-xs text-[#89AACC] uppercase tracking-[0.25em] font-mono font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-muted/80 leading-relaxed font-light">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Segment */}
        <div className="mt-16 md:mt-24 border-t border-stroke/40 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-10 items-start justify-between"
          >
            {/* Context Left Box */}
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-stroke block" />
                <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                  Tech Stack
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-light font-sans tracking-tight text-text-primary">
                Core <span className="font-display italic text-[#89AACC] ml-1">technologies</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted/80 leading-relaxed font-light">
                Leveraging a modern, scalable ecosystem to engineer high-performance frontend interfaces and secure backends.
              </p>
            </div>

            {/* Interactive Grid Right Box */}
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 gap-3 md:pl-12">
              {TECH_STACK.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative flex items-center gap-3.5 p-3 rounded-xl border border-stroke/50 bg-surface/5 hover:bg-surface/20 hover:border-white/10 transition-all duration-300 select-none"
                  style={{ "--tech-color": tech.color } as CSSProperties}
                >
                  {/* Subtle lower gradient slide highlighting core accent */}
                  <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[var(--tech-color)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                  
                  {/* Tech Icon Container */}
                  <div className="flex-shrink-0 p-1.5 rounded-lg bg-bg/50 border border-stroke/30 group-hover:border-white/10 transition-all duration-300 group-hover:shadow-[0_0_18px_color-mix(in_srgb,var(--tech-color)_28%,transparent)]">
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      className="w-4 h-4 object-contain"
                      loading="lazy"
                    />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-text-primary tracking-wide transition-colors duration-300 group-hover:text-white">
                      {tech.name}
                    </span>
                    <span className="text-[9px] text-muted/60 font-mono tracking-wider mt-0.5">
                      {tech.type}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
