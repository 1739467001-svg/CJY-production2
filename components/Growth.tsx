import React, { useState } from 'react';
import { Sparkles, Cpu, TrendingUp, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Growth: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      icon: Sparkles,
      date: t.growth_1_date,
      title: t.growth_1_title,
      desc: t.growth_1_desc,
      content: t.growth_1_content,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      id: 2,
      icon: Cpu,
      date: t.growth_2_date,
      title: t.growth_2_title,
      desc: t.growth_2_desc,
      content: t.growth_2_content,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      id: 3,
      icon: TrendingUp,
      date: t.growth_3_date,
      title: t.growth_3_title,
      desc: t.growth_3_desc,
      content: t.growth_3_content,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    }
  ];

  const openModal = (id: number) => {
    setActiveModal(id);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="growth" className="py-24 px-4 bg-white/40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">{t.growth_title}</h2>
          <p className="text-gray-500 text-lg">{t.growth_subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.id}
              onClick={() => openModal(card.id)}
              className="glass-card p-8 rounded-[2rem] cursor-pointer group hover:border-blue-300/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500`}>
                <card.icon size={100} />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6 shadow-sm`}>
                  <card.icon size={24} />
                </div>
                
                <span className="text-sm font-mono font-bold text-gray-400 mb-2 block">{card.date}</span>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3 leading-tight">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {card.desc}
                </p>

                <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  {t.growth_read_more} →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-md animate-fade-in" onClick={closeModal}></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12 animate-blob">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>

            {cards.filter(c => c.id === activeModal).map(card => (
              <div key={card.id}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center shadow-sm`}>
                    <card.icon size={28} />
                  </div>
                  <div>
                     <span className="text-sm font-mono font-bold text-gray-400 block">{card.date}</span>
                     <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f]">{card.title}</h3>
                  </div>
                </div>
                
                <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {card.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Growth;