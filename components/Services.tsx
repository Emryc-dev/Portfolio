
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Des solutions sur mesure pour propulser votre activité sur le web.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="reveal glass p-10 rounded-3xl relative overflow-hidden group hover:bg-primary-600/10 transition-colors border border-white/5" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center text-3xl mb-6 text-primary-500 transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.description}</p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500/5 blur-2xl rounded-full group-hover:bg-primary-500/20 transition-all"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
