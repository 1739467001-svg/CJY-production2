import { Project } from '../types';

export const projects: Project[] = [
  // 1. AI Study Platform (AI 研学平台) - Split into 3
  {
    id: 'p1-kimi',
    title: "Kaiyan Study Platform (Kimi)",
    title_zh: "开堰研学平台 (Kimi版)",
    category: "AI Study Platform",
    category_zh: "AI 研学平台",
    description: "Built purely by Kimi. A baseline implementation of the study platform demonstrating rapid prototyping capabilities.",
    description_zh: "由 Kimi 独立构建。展示了快速原型设计能力的学习平台基准实现。",
    techStack: ["Kimi", "React", "Zeabur"],
    links: [
      { label: "Kimi Ver.", label_zh: "Kimi 版", url: "https://wu5dpeypjtjvw.ok.kimi.link", type: 'kimi' }
    ]
  },
  {
    id: 'p1-google',
    title: "Kaiyan Study Platform (Google)",
    title_zh: "开堰研学平台 (Google版)",
    category: "AI Study Platform",
    category_zh: "AI 研学平台",
    description: "Refined by Gemini 3 Pro. Features enhanced UI aesthetics and optimized component architecture.",
    description_zh: "由 Gemini 3 Pro 优化。具备增强的 UI 美学设计和优化的组件架构。",
    techStack: ["Gemini", "React", "Zeabur"],
    links: [
      { label: "Google Ver.", label_zh: "Google 版", url: "https://kaiyan-google.zeabur.app", type: 'google' }
    ]
  },
  {
    id: 'p1-manus',
    title: "Kaiyan Study Platform (Manus)",
    title_zh: "开堰研学平台 (Manus版)",
    category: "AI Study Platform",
    category_zh: "AI 研学平台",
    description: "Orchestrated by Manus. Demonstrates fully autonomous agent development with complex logic handling.",
    description_zh: "由 Manus 编排。展示了具有复杂逻辑处理能力的全自主智能体开发。",
    techStack: ["Manus", "React", "Zeabur"],
    links: [
      { label: "Manus Ver.", label_zh: "Manus 版", url: "https://kaiyan-manus.zeabur.app", type: 'manus' }
    ]
  },

  // 2. Academic Course Exploration (学院课程探索)
  {
    id: 'p3',
    title: "Animal Intelligence Guide",
    title_zh: "动物智能复习指南",
    category: "Academic Exploration",
    category_zh: "学院课程探索",
    description: "An interactive revision guide focusing on animal intelligence, featuring quizzes and dynamic content for better engagement.",
    description_zh: "关注动物智力的交互式复习指南，包含测验和动态内容，提供沉浸式学习体验。",
    techStack: ["React", "Education", "PWA"],
    links: [
      { label: "Live Demo", label_zh: "在线演示", url: "https://animalintelligence-study.zeabur.app/", type: 'default' }
    ]
  },
  {
    id: 'p9',
    title: "Heart Light Prayer",
    title_zh: "心光祈愿",
    category: "Academic Exploration",
    category_zh: "学院课程探索",
    description: "A digital prayer platform where wishes transform into golden fruits on a virtual Bodhi tree, blending tradition with technology.",
    description_zh: "一个数字祈愿平台，愿望化为金果在虚拟菩提树上生长，将传统文化与现代技术相结合。",
    techStack: ["Miaoda", "Digital Ritual", "Cultural Tech"],
    links: [
      { label: "Visit App", label_zh: "访问应用", url: "https://app-8ewx9e06r6kh.appmiaoda.com", type: 'default' }
    ]
  },

  // 3. Agent Lab (智能体实验室)
  {
    id: 'p4',
    title: "Teen Mental Health Agent",
    title_zh: "青少年心理智能体",
    category: "Agent Lab",
    category_zh: "智能体实验室",
    description: "A mental wellness sanctuary agent providing support and resources through conversational AI for teenagers.",
    description_zh: "青少年心理健康庇护所智能体，通过对话式 AI 提供支持和资源。",
    techStack: ["LLM", "Prompt Engineering", "TBox"],
    links: [
      { label: "Interact", label_zh: "立即交互", url: "https://www.tbox.cn/share/202511APt1Dm00566805?platform=WebService", type: 'default' }
    ]
  },
  {
    id: 'p5',
    title: "LLM Fine-tuning - Multi-Agent Collaboration",
    title_zh: "大模型微调-多智能体协同",
    category: "Agent Lab",
    category_zh: "智能体实验室",
    description: "Multi-agent collaborative optimization platform for fine-tuning Large Language Models.",
    description_zh: "用于微调大型语言模型的多智能体协作优化平台。",
    techStack: ["LLM Ops", "Multi-Agent", "Python"],
    links: [
      { label: "View Platform", label_zh: "查看平台", url: "https://appbuilder.baidu.com/s/srPSzqHn", type: 'default' }
    ]
  },

  // 4. Industrial Visualization (工业可视化)
  {
    id: 'p2',
    title: "3D Container Loading Visualization & Stacking Optimization System",
    title_zh: "3D集装箱装载可视化与堆叠优化系统",
    category: "Industrial Visualization",
    category_zh: "工业可视化",
    description: "Interactive 3D visualization tool for optimizing container loading strategies using advanced algorithms.",
    description_zh: "交互式 3D 可视化工具，使用高级算法优化集装箱装载策略，直观展示装箱方案。",
    techStack: ["Three.js", "React", "Optimization"],
    links: [
      { label: "Live Demo", label_zh: "在线演示", url: "https://smart-container.zeabur.app/", type: 'default' },
      { label: "Sample Data", label_zh: "样本数据", url: "/sample_data.csv", type: 'download' }
    ]
  },

  // 5. Entry-level Apps (入门级娱乐作品)
  {
    id: 'p6',
    title: "Pixar Gallery & AI",
    title_zh: "皮克斯展馆+百炼AI",
    category: "Entry-level Apps",
    category_zh: "入门级娱乐作品",
    description: "A virtual immersive gallery showcasing Pixar animation art, integrated with Bailian AI assistant for guided tours.",
    description_zh: "展示皮克斯动画艺术的虚拟沉浸式展馆，集成百炼 AI 助手提供导览服务。",
    techStack: ["Miaoda", "AI Assistant", "No-Code"],
    links: [
      { label: "Visit App", label_zh: "访问应用", url: "https://app-7wopwmdzk2dd.appmiaoda.com", type: 'default' }
    ]
  },
  {
    id: 'p7',
    title: "Creative Space",
    title_zh: "创意协作空间",
    category: "Entry-level Apps",
    category_zh: "入门级娱乐作品",
    description: "A collaborative digital workspace designed for creative brainstorming, idea sharing, and team synchronization.",
    description_zh: "专为创意头脑风暴、灵感分享和团队同步设计的协作数字空间。",
    techStack: ["Miaoda", "Collaboration", "Real-time"],
    links: [
      { label: "Visit App", label_zh: "访问应用", url: "https://app-7xtjhhrg15vl.appmiaoda.com", type: 'default' }
    ]
  },
  {
    id: 'p8',
    title: "Viral Video Detector",
    title_zh: "爆款文案视频探测器",
    category: "Entry-level Apps",
    category_zh: "入门级娱乐作品",
    description: "An AI-powered tool that analyzes video scripts and content to predict viral potential and suggest improvements.",
    description_zh: "一款 AI 驱动的工具，分析视频脚本和内容，预测爆款潜力并提供改进建议。",
    techStack: ["Miaoda", "Content Analysis", "AI"],
    links: [
      { label: "Visit App", label_zh: "访问应用", url: "https://app-8d3qvlz16igx.appmiaoda.com", type: 'default' }
    ]
  }
];