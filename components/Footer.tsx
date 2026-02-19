
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold font-mono">
            <span className="text-primary-500">&lt;</span>
            EMERYC
            <span className="text-secondary"> /</span>
            <span className="text-primary-500">&gt;</span>
          </div>
          
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Emeryc Djomo. Tous droits réservés.
          </div>
          
          <div className="flex space-x-6 text-slate-500 text-xs font-mono uppercase">
            <a href="#" className="hover:text-primary-500 transition-colors underline decoration-primary-500/30">Privacy</a>
            <a href="#" className="hover:text-primary-500 transition-colors underline decoration-primary-500/30">Terms</a>
            <a href="mailto:contact@emerycdjomo.dev" className="hover:text-primary-500 transition-colors underline decoration-primary-500/30">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
