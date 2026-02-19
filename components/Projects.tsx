import React, { useState } from 'react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  const filteredProjects = filter === 'Tous' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  const renderButtons = (project: typeof PROJECTS[0]) => {
    // Special case for CreatorOS - Coming Soon
    if (project.id === 'creatoros') {
      return (
        <div className="flex gap-4 pt-4">
          <button 
            className="flex-1 flex justify-center items-center px-4 py-2.5 rounded-xl bg-slate-400 dark:bg-slate-600 text-white dark:text-slate-200 font-bold text-sm cursor-not-allowed opacity-60"
            title="Coming Soon"
          >
            Coming Soon
          </button>
          <button 
            className="p-2.5 rounded-xl glass text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-40 border dark:border-slate-600 border-slate-300"
            title="Coming Soon"
            disabled
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </button>
        </div>
      );
    }

    return (
      <div className="flex gap-4 pt-4">
        <a 
          href={project.liveUrl} 
          className="flex-1 flex justify-center items-center px-4 py-2.5 rounded-xl bg-primary-600 dark:bg-white text-white dark:text-dark font-bold text-sm hover:bg-primary-700 dark:hover:bg-primary-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-primary-500/40"
        >
          Voir le site
        </a>
        <a 
          href={project.githubUrl} 
          className="p-2.5 rounded-xl glass dark:hover:bg-white/10 hover:bg-slate-200 text-slate-700 dark:text-white transition-all duration-300 transform hover:rotate-12 border dark:border-white/5 border-slate-200"
          title="Voir le code"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </a>
      </div>
    );
  };

  return (
    <section id="projects" className="py-24 transition-colors duration-300 dark:bg-dark bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-dark">Projets Récents</h2>
            <p className="dark:text-slate-400 text-slate-600 max-w-xl">Sélection de réalisations mettant en avant mes capacités d'analyse et de développement Full Stack.</p>
          </div>
          <div className="reveal flex space-x-2 bg-slate-200/50 dark:bg-slate-800/50 p-1.5 rounded-xl glass border-none [transition-delay:100ms]">
            {['Tous', 'FullStack', 'Frontend'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${filter === cat ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105' : 'dark:text-slate-400 text-slate-500 hover:text-primary-500 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div 
              key={project.id} 
              className="reveal group relative glass rounded-3xl overflow-hidden transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary-500/20 dark:hover:shadow-primary-500/10"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container with Placeholder */}
              <div className="aspect-video overflow-hidden relative img-placeholder">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-0 transition-opacity duration-500" 
                  onLoad={(e) => (e.currentTarget.classList.remove('opacity-0'), e.currentTarget.parentElement?.classList.remove('img-placeholder'))}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-60 dark:opacity-80 transition-opacity group-hover:opacity-40"></div>
                <div className="absolute top-4 right-4 transform transition-transform group-hover:scale-110 duration-300">
                  <span className="px-3 py-1 rounded-full bg-primary-600/90 text-white text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold dark:text-white text-dark group-hover:text-primary-500 transition-colors duration-300">{project.title}</h3>
                <p className="dark:text-slate-400 text-slate-600 text-sm line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map(tag => (
                    <span key={tag} className="text-[10px] font-mono dark:text-slate-500 text-slate-600 dark:bg-slate-800 bg-slate-200 px-2 py-0.5 rounded border dark:border-slate-700 border-slate-300 transition-colors group-hover:border-primary-500/30">
                      #{tag}
                    </span>
                  ))}
                </div>

                {renderButtons(project)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
