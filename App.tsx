import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Admin from './components/Admin';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px -50px -50px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

  // Admin page
  if (currentPage === '#/admin') {
    return <Admin />;
  }

  // Main portfolio page
  return (
    <div className="min-h-screen transition-colors duration-300 dark:bg-dark bg-slate-50 dark:text-slate-200 text-slate-800 selection:bg-primary-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
