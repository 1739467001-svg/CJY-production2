import React from 'react';
import { Terminal, Zap, Cpu, Gamepad2, Layers, User, TrendingUp, Code2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden pt-20">
      
      {/* Badge - Glass Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-blue-600 text-sm font-semibold mb-8 animate-fade-in shadow-sm">
        <Zap size={16} className="fill-current" />
        <span>{t.hero_badge}</span>
      </div>

      {/* Main Title - Clean Typography */}
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-[#1d1d1f] mb-6 animate-fade-in [animation-delay:100ms]">
        {t.hero_title_prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500">{t.hero_title_name}</span>
      </h1>

      {/* Subtitle - Glass Effect Row */}
      <div className="flex flex-col md:flex-row items-center gap-3 text-lg md:text-xl text-gray-600 font-medium mb-10 animate-fade-in [animation-delay:200ms]">
        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 backdrop-blur-sm"><Cpu size={18} className="text-blue-500" /> {t.hero_role_1}</span>
        <span className="hidden md:block text-gray-400">•</span>
        <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/40 backdrop-blur-sm text-[#1d1d1f]"><Gamepad2 size={18} className="text-purple-500" /> {t.hero_role_2}</span>
        <span className="hidden md:block text-gray-400">•</span>
        <span className="px-4 py-2 rounded-xl bg-white/40 backdrop-blur-sm flex items-center gap-2"><Layers size={18} className="text-gray-500"/> {t.hero_role_3}</span>
      </div>

      {/* Bio - Readable Text */}
      <p className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed mb-10 animate-fade-in [animation-delay:300ms]">
        {t.hero_bio}
      </p>

      {/* CTA - Apple Style Buttons & Multi-Colored Navigation */}
      <div className="flex flex-col items-center gap-6 w-full max-w-4xl animate-fade-in [animation-delay:400ms]">
        
        {/* Primary Row */}
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <a 
            href="#projects"
            onClick={(e) => handleScroll(e, 'projects')}
            className="px-8 py-3.5 bg-[#1d1d1f] text-white font-medium rounded-full hover:bg-black/80 hover:scale-105 transition-all shadow-lg hover:shadow-xl cursor-pointer flex items-center justify-center min-w-[160px]"
            >
            {t.hero_cta_projects}
            </a>
            <a 
            href="#timeline"
            onClick={(e) => handleScroll(e, 'timeline')}
            className="px-8 py-3.5 bg-white text-[#1d1d1f] font-medium rounded-full hover:bg-gray-50 hover:scale-105 transition-all shadow-md hover:shadow-lg border border-white/60 cursor-pointer flex items-center justify-center min-w-[160px]"
            >
            {t.hero_cta_method}
            </a>
        </div>

        {/* Secondary Row - Colored Pills - Enhanced Visibility */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
             <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="px-6 py-2.5 rounded-full bg-blue-50/80 text-blue-600 font-semibold text-sm hover:bg-blue-100 hover:scale-105 transition-all flex items-center gap-2 border border-blue-100 backdrop-blur-sm shadow-sm"
            >
                <User size={16} /> {t.nav_about}
            </a>
            <a 
              href="#methodology" 
              onClick={(e) => handleScroll(e, 'methodology')}
              className="px-6 py-2.5 rounded-full bg-purple-50/80 text-purple-600 font-semibold text-sm hover:bg-purple-100 hover:scale-105 transition-all flex items-center gap-2 border border-purple-100 backdrop-blur-sm shadow-sm"
            >
                <Code2 size={16} /> {t.nav_method}
            </a>
            <a 
              href="#growth" 
              onClick={(e) => handleScroll(e, 'growth')}
              className="px-6 py-2.5 rounded-full bg-emerald-50/80 text-emerald-600 font-semibold text-sm hover:bg-emerald-100 hover:scale-105 transition-all flex items-center gap-2 border border-emerald-100 backdrop-blur-sm shadow-sm"
            >
                <TrendingUp size={16} /> {t.nav_growth}
            </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;