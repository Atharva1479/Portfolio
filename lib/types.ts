export interface Project {
  title: string;
  slug: string;
  date: string;
  description: string[];
  tech: string[];
  links?: {
    demo?: string;
    code?: string;
  };
  featured?: boolean;
  image?: string;
  status?: 'live' | 'building' | 'completed';
  details?: {
    overview: string;
    whyBuilt?: string[];
    features?: string[];
    techCategories?: { name: string; items: string[] }[];
    challenges?: { title: string; description: string }[];
    impact?: string[];
    futurePlans?: string[];
  };
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  image: string;
  text: string;
  linkedin: string;
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  location?: string;
  grades?: string;
}

export interface GitaQuote {
  text: string;
  chapter: number;
  verse: number;
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance' | 'Contract';
  description: string[];
  tech?: string[];
  logo?: string;
  current?: boolean;
  links?: {
    website?: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}