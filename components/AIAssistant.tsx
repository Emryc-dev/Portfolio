
import React, { useState, useRef, useEffect } from 'react';
import { generateAIResponse } from '../services/geminiService';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant d'Emeryc. Comment puis-je vous aider aujourd'hui ? Posez-moi une question sur ses projets ou ses compétences !" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const aiResponse = await generateAIResponse(input, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-700 rotate-90' : 'bg-gradient-to-tr from-primary-600 to-secondary shadow-primary-500/40'}`}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark text-xl"></i>
        ) : (
          <i className="fa-solid fa-comment-dots text-xl"></i>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] glass rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-white/10 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="p-5 bg-gradient-to-r from-primary-600 to-secondary flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                 <i className="fa-solid fa-robot text-white"></i>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Assistant Emeryc</h3>
                <p className="text-white/70 text-[10px] uppercase tracking-widest font-bold">En ligne • Powered by Gemini</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-900/40">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-primary-600 text-white rounded-tr-none' 
                    : 'glass text-slate-200 rounded-tl-none border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass p-4 rounded-2xl rounded-tl-none border-white/5 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-900/60 border-t border-white/5">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez une question..."
                className="w-full bg-slate-800/50 border border-slate-700 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-primary-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim()}
                className="absolute right-2 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center hover:bg-primary-500 transition-colors disabled:opacity-50"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
