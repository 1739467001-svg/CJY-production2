import React from 'react';
import { ArrowUpRight, Layers, Sparkles, Box, Database, Gamepad2, GraduationCap } from 'lucide-react';
import { projects } from '../data/projects';
import { Project } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectGalleryProps {
  onProjectClick: (project: Project) => void;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onProjectClick }) => {
  const { t, language } = useLanguage();

  // Define the display order of categories
  const categories = [
    { key: "AI Study Platform", key_zh: "AI 研学平台", icon: Sparkles, color: "text-blue-500", bg: "bg-blue-100" },
    { key: "Academic Exploration", key_zh: "学院课程探索", icon: GraduationCap, color: "text-purple-500", bg: "bg-purple-100" },
    { key: "Agent Lab", key_zh: "智能体实验室", icon: Database, color: "text-emerald-500", bg: "bg-emerald-100" },
    { key: "Industrial Visualization", key_zh: "工业可视化", icon: Box, color: "text-amber-500", bg: "bg-amber-100" },
    { key: "Entry-level Apps", key_zh: "入门级娱乐作品", icon: Gamepad2, color: "text-pink-500", bg: "bg-pink-100" },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Large Glass Container for Section Distinction */}
      <div className="max-w-7xl mx-auto bg-white/30 backdrop-blur-2xl border border-white/50 rounded-[3rem] p-6 md:p-12 shadow-sm">
        
        {/* Main Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-gray-200/50 pb-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">{t.gallery_title}</h2>
            <p className="text-gray-600 text-lg max-w-xl leading-relaxed">{t.gallery_subtitle}</p>
          </div>
          <div className="text-sm font-semibold text-blue-600 bg-white/80 border border-blue-100 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm whitespace-nowrap">
            {t.gallery_click_hint}
          </div>
        </div>

        {/* Iterate through categories */}
        <div className="space-y-16">
          {categories.map((category) => {
            // Filter projects for this category
            const categoryProjects = projects.filter(p => p.category === category.key);
            
            if (categoryProjects.length === 0) return null;

            return (
              <div key={category.key} className="animate-fade-in">
                {/* Category Title */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-2 rounded-lg ${category.bg} ${category.color}`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {language === 'zh' ? category.key_zh : category.key}
                  </h3>
                  <div className="h-px bg-gray-200 flex-grow ml-4"></div>
                </div>

                {/* Projects Grid for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryProjects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => onProjectClick(project)}
                      className="bg-white rounded-[2rem] p-6 cursor-pointer flex flex-col justify-between h-[340px] 
                      shadow-[0_4px_20px_rgba(0,0,0,0.03)] 
                      hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] 
                      hover:-translate-y-2 hover:scale-[1.02] 
                      transition-all duration-300 ease-out group border border-gray-100 relative overflow-hidden"
                    >
                      {/* Top Content */}
                      <div className="relative z-10">
                        <div className="flex justify-between items-start mb-4">
                          <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md">
                             <ArrowUpRight size={18} />
                          </div>
                        </div>
                        
                        <h4 className="text-xl font-bold text-[#1d1d1f] mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                          {language === 'zh' ? project.title_zh : project.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                          {language === 'zh' ? project.description_zh : project.description}
                        </p>
                      </div>

                      {/* Bottom Tags */}
                      <div className="mt-4 pt-4 border-t border-gray-100 relative z-10">
                        <div className="flex flex-wrap gap-2">
                            {project.techStack?.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-[10px] font-semibold text-gray-500 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded-md">
                                {tech}
                              </span>
                            ))}
                        </div>
                      </div>
                      
                      {/* Subtle gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;