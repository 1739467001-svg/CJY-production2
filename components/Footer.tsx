import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-12 bg-transparent text-center relative z-10">
      <div className="flex justify-center gap-6 mb-8">
        <a href="#" className="p-3 bg-white/40 backdrop-blur-md rounded-full hover:bg-white hover:text-black text-gray-500 transition-all shadow-sm border border-white/50">
          <Github size={20} />
        </a>
        <a href="#" className="p-3 bg-white/40 backdrop-blur-md rounded-full hover:bg-blue-50 hover:text-blue-500 text-gray-500 transition-all shadow-sm border border-white/50">
          <Twitter size={20} />
        </a>
        <a href="mailto:contact@example.com" className="p-3 bg-white/40 backdrop-blur-md rounded-full hover:bg-green-50 hover:text-green-500 text-gray-500 transition-all shadow-sm border border-white/50">
          <Mail size={20} />
        </a>
      </div>
      <p className="text-gray-500 text-sm font-medium">
        © {new Date().getFullYear()} Chen Junye. {t.footer_built} <span className="text-blue-600">React</span> & <span className="text-purple-600">Vibe Coding</span>.
      </p>
    </footer>
  );
};

export default Footer;