import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-mesh">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="reveal inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 text-sm font-semibold tracking-wide animate-pulse">
            Disponible pour de nouveaux projets <i className="fa-solid fa-rocket ml-1"></i>
          </div>
          
          <h1 className="reveal text-5xl md:text-7xl font-extrabold leading-tight [transition-delay:100ms]">
            Je conçois des <br />
            <span className="text-gradient">applications web</span> <br />
            modernes.
          </h1>
          
          <p className="reveal text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed [transition-delay:200ms]">
            Moi c'est <span className="text-white font-semibold">Emeryc Djomo</span>, développeur Full Stack Junior passionné par la création de solutions digitales performantes et scalables.
          </p>
          
          <div className="reveal flex flex-wrap gap-4 [transition-delay:300ms]">
            <a 
              href="#projects" 
              className="px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-primary-500/25 flex items-center"
            >
              Voir mes projets
              <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
            </a>
            <a 
              href="https://wa.me/237672170259" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-bold transition-all border border-white/10 flex items-center"
            >
              <i className="fa-brands fa-whatsapp mr-2 text-green-500 text-lg"></i>
              WhatsApp
            </a>
          </div>

          <div className="reveal pt-10 flex items-center space-x-6 text-slate-500 [transition-delay:400ms]">
            <span className="text-xs font-bold uppercase tracking-widest">Stack préférée :</span>
            <div className="flex space-x-4">
              <span className="hover:text-primary-500 transition-colors cursor-default">React</span>
              <span className="hover:text-primary-500 transition-colors cursor-default">Node.js</span>
              <span className="hover:text-primary-500 transition-colors cursor-default">Supabase</span>
              <span className="hover:text-primary-500 transition-colors cursor-default">PHP</span>
            </div>
          </div>
        </div>

        <div className="reveal hidden md:flex justify-center relative [transition-delay:200ms]">
          <div className="w-80 h-80 rounded-3xl bg-gradient-to-tr from-primary-600 to-secondary transform rotate-6 animate-float relative overflow-hidden shadow-2xl">
            <img 
              src="/images/profil.png" 
              alt="Emeryc Djomo" 
              className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay scale-110" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-3xl"></div>
          </div>
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary-500/20 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
