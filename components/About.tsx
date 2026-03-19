import React, { useState } from 'react';
import { GraduationCap, BookOpen, Users, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState<'education' | 'philosophy' | null>(null);

  const openModal = (type: 'education' | 'philosophy') => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setActiveModal(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight">{t.about_title}</h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div 
            onClick={() => openModal('education')}
            className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group cursor-pointer hover:border-blue-300/50 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={120} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-8 flex items-center gap-3">
              <span className="p-2 bg-blue-100 text-blue-600 rounded-lg"><GraduationCap size={24} /></span>
              {t.about_edu_title}
            </h3>

            <div className="space-y-8 relative z-10">
              <div className="pl-4 border-l-2 border-blue-200">
                <h4 className="font-bold text-lg text-gray-800">{t.about_edu_grad}</h4>
                <p className="text-gray-500 mt-1">{t.about_edu_grad_desc}</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Web</span>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">Mini Program</span>
                    <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">AI</span>
                </div>
              </div>

              <div className="pl-4 border-l-2 border-gray-200">
                <h4 className="font-bold text-lg text-gray-800">{t.about_edu_undergrad}</h4>
                <p className="text-gray-500 mt-1">{t.about_edu_undergrad_desc}</p>
                <div className="flex gap-2 mt-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Java</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Backend</span>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">Big Data</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex items-center text-blue-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                {t.about_read_more} →
            </div>
          </div>

          {/* Philosophy Card */}
          <div 
             onClick={() => openModal('philosophy')}
             className="glass-card p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden bg-gradient-to-br from-white/40 to-purple-50/40 cursor-pointer hover:border-purple-300/50 transition-all duration-300 group"
          >
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-15 transition-opacity">
              <Users size={120} />
            </div>

            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-8 flex items-center gap-3">
              <span className="p-2 bg-purple-100 text-purple-600 rounded-lg"><BookOpen size={24} /></span>
              {t.about_phil_title}
            </h3>

            <div className="relative z-10">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t.about_phil_desc}
              </p>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium shadow-lg shadow-purple-200">
                <Users size={16} />
                {t.about_phil_tag}
              </div>

              <div className="mt-8 flex items-center text-purple-600 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                {t.about_read_more} →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-gray-900/30 backdrop-blur-md animate-fade-in" onClick={() => closeModal()}></div>
          
          <div className="relative bg-white/90 backdrop-blur-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-[2rem] shadow-2xl p-8 md:p-12 animate-blob">
            <button 
              onClick={(e) => closeModal(e)}
              className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-4 mb-6">
               <div className={`w-14 h-14 rounded-2xl ${activeModal === 'education' ? 'bg-blue-100 text-blue-600' : 'bg-purple-100 text-purple-600'} flex items-center justify-center shadow-sm`}>
                 {activeModal === 'education' ? <GraduationCap size={28} /> : <BookOpen size={28} />}
               </div>
               <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f]">
                 {activeModal === 'education' ? t.about_edu_title : t.about_phil_title}
               </h3>
            </div>
            
            <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-wrap">
              {activeModal === 'education' ? t.about_edu_content : t.about_phil_content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;