import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface Translations {
  hero_badge: string;
  hero_title_prefix: string;
  hero_title_name: string;
  hero_role_1: string;
  hero_role_2: string;
  hero_role_3: string;
  hero_bio: string;
  hero_cta_projects: string;
  hero_cta_method: string;
  
  nav_about: string;
  nav_method: string;
  nav_growth: string;
  
  about_title: string;
  about_read_more: string;
  about_edu_title: string;
  about_edu_undergrad: string;
  about_edu_undergrad_desc: string;
  about_edu_grad: string;
  about_edu_grad_desc: string;
  about_edu_content: string;
  about_phil_title: string;
  about_phil_desc: string;
  about_phil_tag: string;
  about_phil_content: string;

  timeline_title: string;
  timeline_subtitle: string;

  growth_title: string;
  growth_subtitle: string;
  growth_read_more: string;
  growth_1_title: string;
  growth_1_date: string;
  growth_1_desc: string;
  growth_1_content: string;
  growth_2_title: string;
  growth_2_date: string;
  growth_2_desc: string;
  growth_2_content: string;
  growth_3_title: string;
  growth_3_date: string;
  growth_3_desc: string;
  growth_3_content: string;

  method_title: string;
  method_desc: string;
  step_1_title: string;
  step_1_desc: string;
  step_2_title: string;
  step_2_desc: string;
  step_3_title: string;
  step_3_desc: string;
  step_4_title: string;
  step_4_desc: string;

  gallery_title: string;
  gallery_subtitle: string;
  gallery_click_hint: string;
  gallery_contains_agents: string;

  testi_title: string;
  testi_quote: string;
  testi_badge: string;
  testi_img_placeholder: string;
  testi_img_subtitle: string;

  footer_built: string;
  
  modal_preview: string;
  modal_open_new: string;
  modal_close_hint: string;
  modal_download_hint: string;
}

const translations: Record<Language, Translations> = {
  zh: {
    hero_badge: "AI 驱动的极速开发",
    hero_title_prefix: "我是",
    hero_title_name: "陈俊烨",
    hero_role_1: "Vibe Coder",
    hero_role_2: "AI 多模态创作者",
    hero_role_3: "全栈开发 (Java/Web)",
    hero_bio: "浙江工商大学人工智能学院研究生。我正在将本科深厚的软件工程（后端+大数据）背景与前沿 AI 技术融合。专注于 AI 多模态（图/音/视/3D/游戏）全链路开发，践行 Vibe Coding 理念。",
    hero_cta_projects: "探索项目",
    hero_cta_method: "我的经历",
    
    nav_about: "个人背景",
    nav_method: "工作流",
    nav_growth: "成长心路",
    
    about_title: "背景与理念",
    about_read_more: "查看详情",
    about_edu_title: "教育背景",
    about_edu_undergrad: "本科：软件工程",
    about_edu_undergrad_desc: "后端开发 + 大数据方向 (Java 生态)",
    about_edu_grad: "研究生：人工智能",
    about_edu_grad_desc: "AI 应用创新，Web 与小程序全栈开发",
    about_edu_content: `我是来自于浙江工商大学人工智能学院的研究生。

自九月份开学以来，我积极全方位接入 AI，推进我本科软件工程（网站编程前后端 + 大数据方向）与 AI 的全面接轨。

积极跟进 AI 技术最新进展，同时也接触到 AI 多模态，即 AI 音频、图片、视频、3D 建模、游戏开发等的全链路最新进展与发展情况。`,
    about_phil_title: "社区学习法",
    about_phil_desc: "我坚信要从单纯的“技术层”走向“应用层”。通过活跃于“杭州五小凤”等开源生态圈，我将开源资源学习、实战项目与开发者交流融为一体，在实战中快速迭代。",
    about_phil_tag: "实战驱动",
    about_phil_content: `自十一月底，学校课程到了结课时期，在与老师的深入交流下我明白我需要把最近所学付诸实践。

诸葛老师转换了我的观念想法，十分建议我要从“技术层”走出来，前往“应用层”找到更多的实战机会，去寻找更多落地项目。在蒋老师的帮助下，完成了很多具有实际社会价值的平台以及微信小程序，进一步丰富实战经验。

于是我开始了杭州＋上海两地 AI 展会参展，参加了五次黑客松项目，两次参赛者，三次志愿者。认识了我们当下中国的最新环境，接触到了中国目前最强的六大开源生态圈，其中包含我们的“杭州五小凤”。

我自己称之为“社区学习”，这种开源社区融合了“开源资源学习 + 实战项目 + 成品介绍与开发者交流”一整套的流程，让人产生不仅学到了而且认识了同行业的精英人士的感觉。`,

    timeline_title: "黑客松与社区之旅",
    timeline_subtitle: "从志愿者到组织者，我的 AGI 探索之路",

    growth_title: "个人成长与思路转换",
    growth_subtitle: "从技术思维到产品思维，从单打独斗到人机共生",
    growth_read_more: "阅读详情",
    growth_1_title: "思维觉醒：拥抱应用层",
    growth_1_date: "2025.11",
    growth_1_desc: "在导师指引下，从“技术自嗨”转向“社会价值”，深入黑客松与开源社区。",
    growth_1_content: `2025.11月底，学校课程到了结课时期，在与老师的深入交流下我明白我需要把最近所学付诸实践。

诸葛老师转换了我的观念想法，十分建议我要从“技术层”走出来，前往“应用层”找到更多的实战机会，去寻找更多落地项目，因为未来“市场为王！”。在蒋老师的帮助下，完成了很多具有实际社会价值的平台以及微信小程序，进一步丰富实战经验。

于是我开始了杭州＋上海两地 AI 展会参展，参加了 AI 黑客松项目。认识了我们当下中国的最新环境，接触到了中国目前最强的六大开源生态圈，其中包含我们的“杭州五小凤”。

我自己称之为“社区学习”，这种开源社区融合了“开源资源学习 + 实战项目 + 成品介绍与开发者交流”一整套的流程，让人产生不仅学到了而且认识了同行业的精英人士的感觉。`,
    growth_2_title: "工作流进化：AI 员工",
    growth_2_date: "2025.12",
    growth_2_desc: "构建 Gemini、Claude、Manus 协作的 Vibe Coding 流水线。",
    growth_2_content: `2025.12月，受到诸葛老师建立自己 AI 员工的启发，我引入了自己的一套工作流：

AI 员工——流水线——集合百家所长——工作流。想要“打理”好自己的员工，那必须清楚每位员工的优势与长处：

🔹 前端审美：Gemini 3 Pro —— 世界第一审美，负责 UI 设计
🔹 后端编程：Claude 4.5 Opus —— 世界第一编程，负责架构设计
🔹 自动化：Antigravity + Supabase —— 半自动化编程【正在研究】
🔹 中华文化：通义千问 —— 理解力更强，适合中国语境
🔹 学术引用：DeepSeek —— 引用来源学术广泛
🔹 中文前端：Kimi k2.5 —— 中国第一审美
🔹 总控：Manus —— 项目需求文档 (PRD) 与事务整合

开发过程中的个人价值——比别人多做了一步——记录开发网站的过程——为教育素材做准备。`,
    growth_3_title: "市场洞察：以赛促产",
    growth_3_date: "2026.02",
    growth_3_desc: "放下个人偏见，利用 AI 矩阵快速验证市场需求。",
    growth_3_content: `2026.2.01 与杭州独立开发者张三的深夜长谈让我明白，做软件可以不是以自己的所见所闻、想法、思路做软件，而是全部交给 AI。

因为个人对这个市场的理解可能有所偏颇。一个 AI 是不够的，两个中一个是 Claude 就够了。

交给两个 AI，让 AI 与 AI 进行对话，快速产出，以 App 的形式交付市场（如 Apple AppStore），最后以下载量来验证——即“市场检验”。`,

    method_title: "Vibe Coding 之道",
    method_desc: "我的工作流不只是写代码，更是编排智能。通过将 AI 视为结对程序员，我极大地加速了从灵感到软件落地的全生命周期。",
    step_1_title: "构思",
    step_1_desc: "快速概念生成",
    step_2_title: "AI 智能体",
    step_2_desc: "Kimi, Manus, Gemini 编排逻辑",
    step_3_title: "Vibe Coding",
    step_3_desc: "人机协作优化",
    step_4_title: "部署",
    step_4_desc: "即刻发布上线",

    gallery_title: "精选作品",
    gallery_subtitle: "由 Zeabur, Kimi & Manus 驱动的交互式演示",
    gallery_click_hint: "点击卡片预览",
    gallery_contains_agents: "包含 3 个智能体版本",

    testi_title: "导师评价 & 认可",
    testi_quote: "陈俊烨展现了将复杂 AI 工具综合为实用软件解决方案的非凡能力。他对‘项目制学习’的理解不仅在于构建，更在于理解开发者意图与 AI 执行之间的共生关系。",
    testi_badge: "导师反馈",
    testi_img_placeholder: "[图片占位符]",
    testi_img_subtitle: "项目制学习与智能体效能",

    footer_built: "构建于",
    
    modal_preview: "交互式预览",
    modal_open_new: "新窗口打开",
    modal_close_hint: "如果内容无法加载，请使用'新窗口打开'按钮。",
    modal_download_hint: "下载数据并上传至系统体验。",
  },
  en: {
    hero_badge: "Powering Development with AI",
    hero_title_prefix: "",
    hero_title_name: "Chen Junye",
    hero_role_1: "Vibe Coder",
    hero_role_2: "Multimodal AI Creator",
    hero_role_3: "Full Stack (Java/Web)",
    hero_bio: "Graduate student at ZJSU AI Institute. Merging a strong Software Engineering (Backend + Big Data) foundation with cutting-edge AI. Specializing in Multimodal AI (Image/Audio/Video/3D) and Vibe Coding.",
    hero_cta_projects: "Explore Projects",
    hero_cta_method: "My Journey",

    nav_about: "About Me",
    nav_method: "Workflow",
    nav_growth: "Growth",

    about_title: "Background & Philosophy",
    about_read_more: "Read Details",
    about_edu_title: "Education",
    about_edu_undergrad: "Undergraduate: Software Engineering",
    about_edu_undergrad_desc: "Backend + Big Data (Java Ecosystem)",
    about_edu_grad: "Graduate: AI Institute",
    about_edu_grad_desc: "AI Application Innovation, Web & Mini-programs",
    about_edu_content: "I am a graduate student at the School of Artificial Intelligence, Zhejiang Gongshang University.\n\nSince the start of the semester in September, I have actively integrated AI into all aspects of my work, pushing for a comprehensive convergence of my undergraduate software engineering background (frontend + backend + big data) with AI.\n\nI actively follow the latest AI advancements, specifically in multimodal AI—spanning AI audio, images, video, 3D modeling, and game development.",
    about_phil_title: "Community Learning",
    about_phil_desc: "I believe in shifting from the 'Technical Layer' to the 'Application Layer'. By engaging with open-source ecosystems (like Hangzhou's communities), I combine resource learning, practical projects, and networking.",
    about_phil_tag: "Action Oriented",
    about_phil_content: "Since late November, as school courses wrapped up, I realized through deep discussions with my teachers that I needed to put my recent learning into practice.\n\nTeacher Zhuge transformed my mindset, strongly suggesting I step out of the 'Technical Layer' and move towards the 'Application Layer' to find more practical opportunities and landing projects. With Teacher Jiang's help, I completed many platforms and WeChat mini-programs with actual social value, further enriching my practical experience.\n\nConsequently, I began participating in AI exhibitions in Hangzhou and Shanghai and participated in five hackathons (twice as a participant, three times as a volunteer). I got to know China's current environment and contacted the top six open-source ecosystems, including our 'Hangzhou Five Phoenixes.'\n\nI call this 'Community Learning'—a process that integrates 'open-source resource learning + practical projects + product presentation & developer exchange,' giving a sense of not only learning but also meeting elite professionals in the industry.",

    timeline_title: "Hackathon Journey",
    timeline_subtitle: "From Volunteer to Organizer: My Path in the AGI Era",

    growth_title: "Growth & Mindset Shift",
    growth_subtitle: "From Tech-Centric to Product-Centric, From Solo to Human-AI Symbiosis",
    growth_read_more: "Read Details",
    growth_1_title: "The Awakening",
    growth_1_date: "Nov 2025",
    growth_1_desc: "Shifting focus to 'Application Layer' and social value through hackathons.",
    growth_1_content: "In late November 2025, after deep discussions with my mentors, I realized the need to shift from the 'Technical Layer' to the 'Application Layer' to find real-world scenarios with social value. 'The Market is King.' I started participating in AI exhibitions and Hackathons in Hangzhou and Shanghai, immersing myself in China's top open-source ecosystems. I call this 'Community Learning'—integrating resource learning, practical projects, and networking.",
    growth_2_title: "Workflow Evolution",
    growth_2_date: "Dec 2025",
    growth_2_desc: "Orchestrating Gemini, Claude, and Manus into a Vibe Coding pipeline.",
    growth_2_content: "In December 2025, inspired by the 'AI Employee' concept, I built my own workflow. To manage these employees, one must know their strengths:\n\n🔹 Frontend Aesthetics: Gemini 3 Pro (UI)\n🔹 Backend Coding: Claude 4.5 Opus (Architecture)\n🔹 Chinese Context: Qwen (Cultural Nuance)\n🔹 Academic: DeepSeek\n🔹 Project Management: Manus (PRD Integration)\n\nI treat AI as a pipeline, combining the best of each model to accelerate development.",
    growth_3_title: "Market Insight",
    growth_3_date: "Feb 2026",
    growth_3_desc: "Letting AI drive production to validate market needs rapidly.",
    growth_3_content: "Feb 1, 2026: A late-night conversation with an independent developer taught me to set aside personal biases. Instead of building based on my own assumptions, I now leverage AI-to-AI dialogue (e.g., Claude pairs) to rapidly produce and ship apps to the AppStore. The download count is the only validation that matters.",

    method_title: "The Vibe Coding Way",
    method_desc: "My workflow isn't just about writing code; it's about orchestrating intelligence. By treating AI as a pair programmer, I accelerate the lifecycle from spark to software.",
    step_1_title: "Ideation",
    step_1_desc: "Rapid concept generation",
    step_2_title: "AI Agents",
    step_2_desc: "Kimi, Manus, Gemini orchestrate logic",
    step_3_title: "Vibe Coding",
    step_3_desc: "Human-AI collaborative refinement",
    step_4_title: "Deployment",
    step_4_desc: "Instant shipping to production",

    gallery_title: "Selected Works",
    gallery_subtitle: "Interactive demos powered by Zeabur, Kimi & Manus",
    gallery_click_hint: "Click cards to preview",
    gallery_contains_agents: "Contains 3 Agent Variations",

    testi_title: "Mentorship & Recognition",
    testi_quote: "Chen Junye demonstrates an exceptional ability to synthesize complex AI tools into practical software solutions. His approach to 'Project-based Learning' is not just about building, but about understanding the symbiotic relationship between developer intent and AI execution.",
    testi_badge: "Mentor Feedback",
    testi_img_placeholder: "[Image Placeholder]",
    testi_img_subtitle: "Project-based Learning & Agent Efficacy",

    footer_built: "Built with",
    
    modal_preview: "Interactive Preview",
    modal_open_new: "Open in New Window",
    modal_close_hint: "If content fails to load, use the 'Open in New Window' button.",
    modal_download_hint: "Download & Upload to System to experience.",
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'zh' ? 'en' : 'zh');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};