
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-mono tracking-tighter dark:text-white text-dark">
          <span className="text-primary-500">&lt;</span>
          EMERYC
          <span className="text-secondary"> /</span>
          <span className="text-primary-500">&gt;</span>
        </a>

        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium dark:text-slate-300 dark:hover:text-primary-500 text-slate-600 hover:text-primary-600 transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl glass hover:bg-primary-500/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <i className="fa-solid fa-sun text-yellow-400"></i>
            ) : (
              <i className="fa-solid fa-moon text-slate-700"></i>
            )}
          </button>

          <a 
            href="#contact" 
            className="px-5 py-2 rounded-full bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold transition-all shadow-lg shadow-primary-500/20 active:scale-95"
          >
            Hire Me
          </a>
        </div>

        <div className="md:hidden flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-lg glass">
                {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <button className="dark:text-slate-200 text-slate-800">
                <i className="fa-solid fa-bars text-xl"></i>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
