
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 space-y-6">
            <h2 className="reveal text-3xl md:text-4xl font-bold flex items-center">
              <span className="w-12 h-1 bg-primary-500 mr-4"></span>
              À propos de moi
            </h2>
            <p className="reveal text-lg text-slate-400 leading-relaxed [transition-delay:100ms]">
              Développeur Full Stack Junior avec une soif insatiable d'apprendre et de relever des défis techniques. Mon approche repose sur la création de solutions <span className="text-white">propres, performantes et scalables</span>. 
            </p>
            <p className="reveal text-lg text-slate-400 leading-relaxed [transition-delay:200ms]">
              Que ce soit pour une startup en pleine croissance ou un projet freelance ambitieux, je m'engage à fournir un code de qualité respectant les standards modernes comme l'architecture MVC et les principes SOLID.
            </p>
            <div className="reveal grid grid-cols-2 gap-4 pt-4 [transition-delay:300ms]">
              <div className="glass p-4 rounded-xl">
                <p className="text-2xl font-bold text-primary-400">Junior++</p>
                <p className="text-xs uppercase tracking-tighter text-slate-500">Expérience</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-2xl font-bold text-secondary">Full Stack</p>
                <p className="text-xs uppercase tracking-tighter text-slate-500">Profil</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="reveal glass p-6 rounded-2xl border-l-4 border-primary-500 transform transition hover:scale-105 [transition-delay:100ms]">
                <h3 className="text-xl font-bold mb-2">Passion</h3>
                <p className="text-sm text-slate-400">Le code n'est pas qu'un métier, c'est une manière de construire le futur.</p>
              </div>
              <div className="reveal glass p-6 rounded-2xl border-l-4 border-secondary transform transition hover:scale-105 [transition-delay:200ms]">
                <h3 className="text-xl font-bold mb-2">Curiosité</h3>
                <p className="text-sm text-slate-400">Toujours en veille sur les dernières technos (Next.js, AI, DevOps).</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="reveal glass p-6 rounded-2xl border-l-4 border-primary-500 transform transition hover:scale-105 [transition-delay:300ms]">
                <h3 className="text-xl font-bold mb-2">Rigueur</h3>
                <p className="text-sm text-slate-400">Un code propre est un code qui dure. Je privilégie la maintenabilité.</p>
              </div>
              <div className="reveal glass p-6 rounded-2xl border-l-4 border-secondary transform transition hover:scale-105 [transition-delay:400ms]">
                <h3 className="text-xl font-bold mb-2">Client-Centric</h3>
                <p className="text-sm text-slate-400">Comprendre le besoin métier avant de taper la première ligne de code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
