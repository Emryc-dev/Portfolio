import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWorks from "./components/SelectedWorks";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import AllProjectsPage from "./components/AllProjectsPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [page, setPage] = useState(() =>
    window.location.hash === "#projects" ? "projects" : "portfolio",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash === "#projects" ? "projects" : "portfolio");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Track scroll position to update active navbar link
  useEffect(() => {
    if (isLoading || page !== "portfolio") return;

    const sections = ["home", "work", "journal", "explorations"];
    const handleScroll = () => {
      let currentSection = "home";
      for (const sect of sections) {
        const element = document.getElementById(sect);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section's top is scrolled above halfway up the viewport, list it active
          if (rect.top <= window.innerHeight * 0.4) {
            currentSection = sect;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once initially
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, page]);

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    if (page !== "portfolio") {
      window.location.hash = "";
      setPage("portfolio");
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
      }, 50);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div id="full-app-root" className="relative w-full min-h-screen bg-bg text-text-primary antialiased">
      {/* 1. Loading Screen Module */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* 2. Portfolio Main Elements */}
      {!isLoading && (
        <div id="portfolio-wrap" className="relative w-full">
          {/* Main Floating Floating Header Navbar */}
          <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

          {page === "projects" ? (
            <AllProjectsPage
              onBack={() => {
                window.location.hash = "";
                setPage("portfolio");
                window.setTimeout(() => {
                  document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
                  setActiveSection("work");
                }, 50);
              }}
            />
          ) : (
            <main id="portfolio-main-sections" className="w-full">
              <Hero />
              <SelectedWorks />
              <Journal />
              <Explorations />
              <Stats />
              <Footer />
            </main>
          )}
        </div>
      )}
    </div>
  );
}
