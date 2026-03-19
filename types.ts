export type Language = 'zh' | 'en';

export interface ProjectLink {
  label: string; 
  label_zh?: string;
  url: string;
  type: 'default' | 'kimi' | 'google' | 'manus' | 'download';
}

export interface Project {
  id: string;
  title: string;
  title_zh: string;
  description: string;
  description_zh: string;
  links: ProjectLink[];
  category: string;
  category_zh: string;
  techStack?: string[];
}

export interface TimelineItem {
  date: string;
  title: string;
  title_zh: string;
  role: string;
  role_zh: string;
  desc: string;
  desc_zh: string;
  isHighlight?: boolean;
}