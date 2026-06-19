import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoReversed, setLogoReversed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300"
    >
      <div
        id="navbar-pill"
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface/85 backdrop-blur-md px-2 py-1.5 md:py-2 transition-all duration-300 ${
          isScrolled ? "shadow-lg shadow-black/40 scale-95 border-white/15 bg-surface/90" : ""
        }`}
      >
        <div className="flex items-center gap-1.5">
          <button
            id="navbar-logo"
            onClick={() => onNavigate("home")}
            onMouseEnter={() => setLogoReversed(true)}
            onMouseLeave={() => setLogoReversed(false)}
            className="group relative flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer ml-1 select-none"
          >
            <div
              className={`absolute inset-0 rounded-full transition-transform duration-[600ms] ${
                logoReversed ? "rotate-180" : ""
              }`}
              style={{
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
            />
            <div className="absolute inset-[1.5px] rounded-full bg-white flex items-center justify-center p-[3px]">
              <img
                src="/logo-emeryc-djomo.png"
                alt="Emeryc Djomo logo"
                className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </button>

          <div className="hidden md:block w-px h-5 bg-stroke mx-1 select-none" />

          <div className="flex items-center gap-0.5">
            {["Home", "Work", "Journal", "Explorations"].map((tab) => {
              const tabId = tab.toLowerCase();
              const isSectionActive = activeSection === tabId;
              return (
                <button
                  key={tab}
                  onClick={() => onNavigate(tabId)}
                  className={`text-[11px] sm:text-xs font-medium cursor-pointer rounded-full px-2.5 sm:px-4 py-1.5 md:py-2 transition-all duration-300 ${
                    isSectionActive
                      ? "text-text-primary bg-stroke"
                      : "text-muted hover:text-text-primary hover:bg-stroke/40"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <div className="w-px h-5 bg-stroke mx-1 select-none" />

          <a
            href="mailto:emrycdjomo.dev@gmail.com"
            id="navbar-say-hi"
            className="group relative inline-flex items-center justify-center text-[11px] sm:text-xs font-semibold rounded-full p-[1px] overflow-hidden select-none"
          >
            <span
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
              style={{
                background: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
            />
            <span className="relative flex items-center gap-1 bg-surface rounded-full px-3 py-1.5 md:py-2 border border-white/5 group-hover:border-transparent transition-colors duration-300">
              <span className="text-muted group-hover:text-text-primary transition-colors duration-300">
                Say hi
              </span>
              <ArrowUpRight
                className="size-3.5 text-text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
