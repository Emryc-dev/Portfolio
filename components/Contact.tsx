import React, { useState } from 'react';
import { ContactMessage } from '../types';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new message object
    const newMessage: ContactMessage = {
      id: Date.now().toString(),
      name: formData.name,
      email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    // Get existing messages from localStorage
    const existingMessages = localStorage.getItem('contact_messages');
    const messages: ContactMessage[] = existingMessages ? JSON.parse(existingMessages) : [];
    
    // Add new message
    messages.push(newMessage);
    
    // Save to localStorage
    localStorage.setItem('contact_messages', JSON.stringify(messages));

    // Show success message
    setStatus('Merci ! Votre message a été envoyé avec succès.');
    setTimeout(() => setStatus(null), 5000);
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 space-y-8">
            <div className="reveal">
              <h2 className="text-4xl font-bold mb-6 text-gradient">Parlons de votre projet</h2>
              <p className="text-slate-400 leading-relaxed">
                Vous avez une idée, un besoin spécifique ou vous souhaitez simplement discuter opportunités tech ? N'hésitez pas !
              </p>
            </div>

            <div className="space-y-4">
              <a 
                href="https://wa.me/237672170259"
                target="_blank"
                rel="noopener noreferrer"
                className="reveal flex items-center space-x-4 glass p-4 rounded-2xl hover:bg-green-500/5 transition-all group [transition-delay:100ms]"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 text-xl group-hover:scale-110 transition-transform">
                  <i className="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">WhatsApp Direct</p>
                  <p className="font-semibold text-green-500">+237 672 170 259</p>
                </div>
              </a>

              <div className="reveal flex items-center space-x-4 glass p-4 rounded-2xl [transition-delay:200ms]">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 text-xl">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">Email Professional</p>
                  <p className="font-semibold">emerycdjomo@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="reveal flex space-x-4 pt-4 [transition-delay:300ms]">
               <a href="https://www.linkedin.com/in/emeryc-djomo-02a343326" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110">
                  <i className="fa-brands fa-linkedin text-xl"></i>
               </a>
               <a href="https://github.com/Emeryc-dev" className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-primary-600 transition-all hover:scale-110">
                  <i className="fa-brands fa-github text-xl"></i>
               </a>
            </div>
          </div>

          <div className="reveal lg:w-2/3 [transition-delay:150ms]">
            <div className="glass p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Nom complet</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" 
                      placeholder="Votre nom" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" 
                      placeholder="votre@email.com" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                  <textarea 
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 h-32 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" 
                    placeholder="Décrivez votre projet..." 
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-bold transition-all shadow-xl shadow-primary-500/20 active:scale-95 flex items-center justify-center">
                  Envoyer le message <i className="fa-solid fa-paper-plane ml-2"></i>
                </button>
              </form>

              {status && (
                <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center font-medium animate-bounce">
                  {status}
                </div>
              )}
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-primary-600/10 blur-[80px] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
