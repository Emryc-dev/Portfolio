
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Database', 'Tools'];

  return (
    <section id="skills" className="py-24 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences Techniques</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Un arsenal technologique moderne pour répondre à tous les besoins digitaux.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, catIdx) => (
            <div key={cat} className="space-y-6">
              <h3 className="reveal text-lg font-bold text-primary-400 flex items-center uppercase tracking-widest px-2" style={{ transitionDelay: `${catIdx * 100}ms` }}>
                <span className="w-2 h-2 rounded-full bg-primary-500 mr-2"></span>
                {cat}
              </h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === cat).map((skill, skillIdx) => (
                  <div key={skill.name} className="reveal glass p-4 rounded-xl hover:bg-white/5 transition-all group" style={{ transitionDelay: `${(catIdx * 100) + (skillIdx * 50)}ms` }}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <i className={`${skill.icon} mr-3 text-xl dark:text-slate-300 text-slate-600 transition-colors group-hover:text-primary-500`}></i>
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-xs font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary-600 to-secondary transition-all duration-1000 group-hover:opacity-80" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
