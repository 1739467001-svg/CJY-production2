import React from 'react';
import { Calendar, Award, User, Briefcase } from 'lucide-react';
import { timelineData } from '../data/timeline';
import { useLanguage } from '../contexts/LanguageContext';

const Timeline: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="timeline" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">{t.timeline_title}</h2>
          <p className="text-gray-500 text-lg">{t.timeline_subtitle}</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-transparent"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center group`}>
                
                {/* Dot on Line */}
                <div className={`absolute left-[11px] md:left-1/2 top-0 md:top-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 md:-translate-y-1/2 transition-colors duration-300 ${item.isHighlight ? 'bg-amber-400' : 'bg-blue-400 group-hover:bg-purple-500'}`}></div>

                {/* Date (Desktop) */}
                <div className={`hidden md:block w-1/2 text-right ${index % 2 === 0 ? 'text-left pl-12' : 'pr-12'}`}>
                  <span className="font-mono text-sm font-bold text-gray-400 tracking-wider">{item.date}</span>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`relative glass-card p-6 rounded-2xl border ${item.isHighlight ? 'border-amber-200/50 bg-amber-50/30' : 'border-white/50'} hover:shadow-lg transition-all md:mx-12`}>
                    {/* Date (Mobile) */}
                    <div className="md:hidden font-mono text-xs font-bold text-gray-400 mb-2">{item.date}</div>
                    
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-bold text-[#1d1d1f] text-lg leading-tight">
                            {language === 'zh' ? item.title_zh : item.title}
                        </h3>
                        {item.isHighlight && <Award size={20} className="text-amber-500 shrink-0" />}
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${item.isHighlight ? 'bg-amber-100 text-amber-700' : 'bg-blue-50 text-blue-600'}`}>
                            {language === 'zh' ? item.role_zh : item.role}
                        </span>
                    </div>

                    {(language === 'zh' ? item.desc_zh : item.desc) && (
                      <p className="text-sm text-gray-600 leading-relaxed">
                          {language === 'zh' ? item.desc_zh : item.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;