import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#1d1d1f] mb-16">{t.testi_title}</h2>
        
        <div className="relative p-10 md:p-14 glass-panel rounded-[2.5rem]">
          <Quote className="absolute top-10 left-10 text-blue-500/10 transform -scale-x-100" size={64} />
          
          <div className="flex flex-col items-center gap-10">
            {/* Image Placeholder - Apple style card */}
            <div className="w-full h-64 md:h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center group overflow-hidden relative shadow-inner">
               <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:text-gray-500 transition-colors">
                 <div className="text-center p-6">
                   <p className="font-mono text-sm mb-2 opacity-50">{t.testi_img_placeholder}</p>
                   <p className="text-xs font-medium tracking-wide uppercase text-gray-400">"{t.testi_img_subtitle}"</p>
                 </div>
               </div>
               
               {/* Simulating image overlay */}
               <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent flex items-end justify-center pb-6">
               </div>
            </div>

            <div className="max-w-2xl">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 font-medium leading-relaxed">
                "{t.testi_quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="h-0.5 w-8 bg-blue-500/30 rounded-full"></div>
                <span className="text-xs font-bold text-blue-600 tracking-widest uppercase">{t.testi_badge}</span>
                <div className="h-0.5 w-8 bg-blue-500/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;