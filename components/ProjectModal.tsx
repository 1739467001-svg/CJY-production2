import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Download } from 'lucide-react';
import { Project, ProjectLink } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeLink, setActiveLink] = useState<ProjectLink | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();

  // Separate app links from download links
  const appLinks = project ? project.links.filter(l => l.type !== 'download') : [];
  const downloadLinks = project ? project.links.filter(l => l.type === 'download') : [];

  // Set initial active link when project opens
  useEffect(() => {
    if (project && appLinks.length > 0) {
      setActiveLink(appLinks[0]);
      setIsLoading(true);
    }
  }, [project]);

  // Reset loading when switching links inside the modal
  const handleLinkSwitch = (link: ProjectLink) => {
    if (activeLink?.url !== link.url) {
      setIsLoading(true);
      setActiveLink(link);
    }
  };

  if (!project || !activeLink) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/30 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      ></div>

      {/* Window Container - ~3/4 size on Desktop */}
      <div className="relative w-full h-full md:w-[75vw] md:h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-scale-up border border-white/50 z-10">
        
        {/* Modal Header / Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-50/80 backdrop-blur-md border-b border-gray-200 gap-4 select-none">
          
          {/* Left: Window Controls & Title */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
            {/* Fake Mac Traffic Lights */}
            <div className="hidden md:flex gap-2 mr-2">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors shadow-sm"></button>
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"></div>
              <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
            </div>

            <div className="flex flex-col">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-bold text-[#1d1d1f] tracking-tight flex items-center gap-2">
                  {language === 'zh' ? project.title_zh : project.title}
                  </h3>
                  <span className="text-[10px] text-gray-400 hidden lg:inline-block whitespace-nowrap">
                    {t.modal_close_hint}
                  </span>
                </div>
            </div>

            {/* Version Switcher (Only if multiple app links exist) */}
            {appLinks.length > 1 && (
              <div className="flex p-1 bg-gray-200/50 rounded-lg border border-white/50 overflow-x-auto max-w-full no-scrollbar">
                {appLinks.map((link) => (
                  <button
                    key={link.url}
                    onClick={() => handleLinkSwitch(link)}
                    className={`px-3 py-1 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                      activeLink.url === link.url
                        ? 'bg-white text-black shadow-sm'
                        : 'text-gray-500 hover:text-black hover:bg-white/50'
                    }`}
                  >
                    {language === 'zh' && link.label_zh ? link.label_zh : link.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            
            {/* Download Links - Highlighted */}
            {downloadLinks.map((link) => (
               <div key={link.url} className="flex flex-col md:flex-row items-end md:items-center gap-2 mr-2">
                   <a
                      href={link.url}
                      download
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:shadow-lg hover:scale-105 transition-all shadow-md border border-white/20"
                    >
                      <Download size={14} />
                      <span>{language === 'zh' && link.label_zh ? link.label_zh : link.label}</span>
                    </a>
               </div>
            ))}

            <a
              href={activeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-blue-600 bg-blue-50/50 rounded-full hover:bg-blue-100/50 hover:text-blue-700 transition-colors border border-blue-100 whitespace-nowrap"
            >
              <span>{t.modal_open_new}</span>
              <ExternalLink size={12} />
            </a>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-black hover:bg-gray-200/50 rounded-full transition-all md:hidden"
              aria-label="Close Preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Content Area (Iframe) */}
        <div className="flex-1 relative w-full h-full bg-white overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-white/80 backdrop-blur-sm">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                <p className="text-sm text-gray-500 animate-pulse">Establishing Connection...</p>
              </div>
            </div>
          )}
          
          <iframe
            src={activeLink.url}
            className="w-full h-full border-0"
            title={`Preview of ${project.title}`}
            onLoad={() => setIsLoading(false)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;