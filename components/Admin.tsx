import React, { useState, useEffect } from 'react';
import { ContactMessage } from '../types';

const Admin: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedMessages = localStorage.getItem('contact_messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
    setLoading(false);
  }, []);

  const deleteMessage = (id: string) => {
    const updatedMessages = messages.filter(m => m.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contact_messages', JSON.stringify(updatedMessages));
  };

  const clearAllMessages = () => {
    if (confirm('Êtes-vous sûr de vouloir supprimer tous les messages ?')) {
      setMessages([]);
      localStorage.removeItem('contact_messages');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white text-xl">Chargement...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark text-slate-200 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Admin - Messages</h1>
          <div className="flex gap-4">
            <a href="/" className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              ← Retour au site
            </a>
            {messages.length > 0 && (
              <button 
                onClick={clearAllMessages}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Tout supprimer
              </button>
            )}
          </div>
        </div>

        {messages.length === 0 ? (
          <div className="glass p-12 rounded-2xl text-center">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-white mb-2">Aucun message</h2>
            <p className="text-slate-400">Les messages des utilisateurs apparaîtront ici.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="glass p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{msg.name}</h3>
                    <p className="text-primary-400 text-sm">{msg.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-500 text-sm">{msg.date}</span>
                    <button
                      onClick={() => deleteMessage(msg.id)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                      title="Supprimer"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
                <p className="text-slate-300 whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
