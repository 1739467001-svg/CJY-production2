import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Growth from './components/Growth';
import Methodology from './components/Methodology';
import ProjectGallery from './components/ProjectGallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Languages } from 'lucide-react';

const AppContent: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const { toggleLanguage, language } = useLanguage();

  const openModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen text-[#1d1d1f] selection:bg-blue-200">
      
      {/* Floating Language Switcher */}
      <button 
        onClick={toggleLanguage}
        className="fixed top-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-sm font-semibold text-gray-700 hover:text-black hover:scale-105 transition-all shadow-md"
      >
        <Languages size={16} />
        <span className="w-4">{language === 'zh' ? 'EN' : '中'}</span>
      </button>

      <main>
        <Hero />
        <About />
        <Methodology />
        <Growth />
        <Timeline />
        <ProjectGallery onProjectClick={openModal} />
        <Testimonials />
      </main>
      <Footer />
      
      {activeProject && (
        <ProjectModal 
          project={activeProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;