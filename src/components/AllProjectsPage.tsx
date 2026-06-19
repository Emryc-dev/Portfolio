import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { allProjects } from "../data";

interface AllProjectsPageProps {
  onBack: () => void;
}

export default function AllProjectsPage({ onBack }: AllProjectsPageProps) {
  return (
    <main className="min-h-screen bg-bg text-text-primary">
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_8%,rgba(137,170,204,0.16),transparent_34%),radial-gradient(circle_at_84%_0%,rgba(78,133,191,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-[1240px]">
          <button
            type="button"
            onClick={onBack}
            className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/50 px-4 py-2 text-xs font-semibold text-muted transition duration-300 hover:border-white/20 hover:text-text-primary"
          >
            <ArrowLeft
              className="size-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden="true"
            />
            Back to portfolio
          </button>

          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-stroke" />
                <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
                  All Projects
                </span>
              </div>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-7xl">
                Project <span className="font-display italic">archive</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted/80 md:text-base">
                A wider view of the products, platforms, and digital experiences
                I have designed or developed, from SaaS tools and agriculture
                platforms to cybersecurity and enterprise interfaces.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-surface/35 p-5 text-sm text-muted/80 backdrop-blur-md md:max-w-sm">
              <div className="mb-3 flex items-center gap-2 text-white">
                <ShieldCheck className="size-4 text-[#89AACC]" aria-hidden="true" />
                <span className="font-semibold">New project included</span>
              </div>
              The Shield Corporation appears here only, keeping the homepage
              focused on selected work while still giving recruiters access to
              the full project list.
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {allProjects.map((project) => (
              <a
                key={project.id}
                href={project.link && project.link !== "#" ? project.link : undefined}
                target={project.link && project.link !== "#" ? "_blank" : undefined}
                rel={project.link && project.link !== "#" ? "noopener noreferrer" : undefined}
                aria-disabled={!project.link || project.link === "#"}
                className={`group relative flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-stroke bg-surface transition duration-500 hover:border-white/20 ${
                  project.link && project.link !== "#" ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${
                      project.imageFit === "contain"
                        ? "object-contain bg-[#eef4e8] p-2"
                        : "object-cover"
                    }`}
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.22em] text-white/70 backdrop-blur-md">
                    {project.year}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-[#89AACC]">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-display italic font-light text-white">
                    {project.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted/80">
                    {project.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-white/80">
                    <span>{project.linkLabel ?? "View project"}</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
