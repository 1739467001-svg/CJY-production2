import React from 'react';
import { Lightbulb, Bot, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Methodology: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Lightbulb,
      title: t.step_1_title,
      desc: t.step_1_desc,
      color: "text-amber-500",
      bg: "bg-amber-100",
    },
    {
      icon: Bot,
      title: t.step_2_title,
      desc: t.step_2_desc,
      color: "text-purple-500",
      bg: "bg-purple-100",
    },
    {
      icon: Code2,
      title: t.step_3_title,
      desc: t.step_3_desc,
      color: "text-blue-500",
      bg: "bg-blue-100",
    },
    {
      icon: Rocket,
      title: t.step_4_title,
      desc: t.step_4_desc,
      color: "text-emerald-500",
      bg: "bg-emerald-100",
    }
  ];

  return (
    <section id="methodology" className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight">{t.method_title}</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            {t.method_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="glass-card h-full p-8 rounded-3xl flex flex-col items-center text-center group">
                <div className={`w-16 h-16 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon size={30} />
                </div>
                <h3 className="text-xl font-bold text-[#1d1d1f] mb-3">{step.title}</h3>
                <p className="text-sm text-gray-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
              
              {/* Mobile Arrow */}
              {index < steps.length - 1 && (
                <div className="flex md:hidden justify-center py-6 text-gray-300">
                  <ArrowRight size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;