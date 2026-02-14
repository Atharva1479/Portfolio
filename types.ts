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