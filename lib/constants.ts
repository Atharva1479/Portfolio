
import { Project, SkillCategory, Achievement, SocialLink, Testimonial } from './types';

export const PERSONAL_INFO = {
  name: "Yash Pandav",
  role: "AI Engineer",
  location: "Surat, Gujarat, India",
  email: "pandavyash076@gmail.com",
  terminalIntro: {
    cmd: "> npx create-next-app@latest",
    response: "Initializing Project... Setup complete. Specializing in scalable full-stack architecture and AI integration.",
    tagline: "Building scalable applications and AI-powered solutions that turn ideas into reality.",
    latency_humor: "O(1) complexity preferred"
  },
  aboutJson: {
    current_focus: "Agentic AI, RAG Systems, Backend Development",
    core_stack: ["LangChain", "LangGraph", "Next.js", "VectorDB"],
    mission_objective: "Building scalable, user-centric applications.",
    latency_tolerance: "Optimized for High Performance"
  }
};

export const ABOUT = {
  imageUrl: "/MyImage.png",
  bioParagraphs: [
    "I'm a *Full-Stack* *Developer* and *AI* *Engineer* passionate about creating scalable, intelligent applications that solve real-world problems.",
    "My expertise lies in combining modern web technologies with *Generative* *AI* and *Agentic* *AI* to build intelligent, reliable, and user-focused solutions.",
    "I enjoy designing end-to-end systems — from concept to implementation — that integrate *LLMs*, *automation*, and *modern* *web* *architectures* to create meaningful impact."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Generative AI & Agents",
    skills: [
      "LangChain", "LangGraph", "LangSmith", "Vercel AI SDK", "LLM APIs", "Mastra", "Neo4j", "RAG Pipelines", "VectorDB",
      "Autonomous Agents", "Tool Integration", "Memory Management", "n8n"
    ],
    icon: "Brain"
  },
  {
    name: "Frontend Interface",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Redux Toolkit", "shadcn/ui"],
    icon: "Layout"
  },
  {
    name: "Backend Infrastructure",
    skills: ["Node.js", "Express.js", "FastAPI", "WebSockets", "BullMQ", "Redis", "OAuth2 / JWT / Authentication"],
    icon: "Server"
  },
  {
    name: "Data Persistence & State",
    skills: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Vector Databases", "Neo4j", "SQL"],
    icon: "Database"
  },
  {
    name: "System Ops & Ecosystem",
    skills: [
      "AWS (EC2, S3, Lambda)", "Nginx", "Linux", "Git", "GitHub", "Java", "C", "Python", "DSA (Problem Solving)"
    ],
    icon: "Cloud"
  }
];

export const PROJECTS: Project[] = [

  {
    title: "TechieBlog",
    date: "March 2025",
    description: [
      "Open-source contribution to a blogging platform built with React and Appwrite backend.",
      "Implemented features like user authentication, posts CRUD, media uploads, responsive UI and Docker setup."
    ],
    tech: ["Next.js", "Express.js", "Tailwind CSS", "Appwrite", "Docker", "JavaScript"],
    links: {
      demo: "https://techie-blogs.vercel.app/",
      code: "https://github.com/yashpandav/TechieBlog/tree/main"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TechieBlog"
  },
  {
    title: "AI-SafeQuery",
    date: "September 2025",
    description: [
      "MVP of a secure natural-language + SQL query interface with role-based access and immutable audit logs (blockchain style).",
      "Built using FastAPI backend, React frontend, AI guardrails for safety, PostgreSQL, and blockchain logging for query tracking."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "FastAPI", "PostgreSQL", "LangChain", "Mastra"],
    links: {
      demo: "https://safequeryai.devinit.in/",
      code: "https://github.com/yashpandav/HackOdisha/tree/main"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AI-SafeQuery"
  },
  {
    title: "TeaCoder Agent - AI Coding Assistant",
    date: "May 2025",
    description: [
      "Terminal-based AI coding assistant that analyzes project files, generates/modifies code and executes shell commands.",
      "Built with Python, uses Google Gemini API for code generation and a tool-chain for file/command operations."
    ],
    tech: ["Python", "Google Gemini API", "Terminal UI", "Code Generation", "Shell Automation"],
    links: {
      demo: "https://www.youtube.com/playlist?list=PLm3PPaAhVA-YfZdyG9lDjgPAoo1CP5bqK",
      code: "https://github.com/yashpandav/TeaCoder"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TeaCoder+Agent"
  },
  {
    title: "AutoMission Bot - HR Assistant",
    date: "June 2025",
    description: [
      "RAG-based HR assistant automating 80% of manual queries using vector retrieval.",
      "Ranked Top 8 globally in Langflow Challenge."
    ],
    tech: ["LangFlow", "LangChain", "RAG", "Vector DB", "Gemini API"],
    links: { demo: "https://youtu.be/k9CrXuwjglw" },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AutoMission+Bot"
  },
  {
    title: "Book Review Platform",
    date: "September 2025",
    description: [
      "Full-stack MERN book review system with user signup/login, book CRUD, review system and rating visualization.",
      "Features search, filter, pagination, dynamic rating charts (Recharts), responsive UI and RESTful API."
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Tailwind CSS", "JWT Authentication"],
    links: {
      demo: "https://book-review-platform-sigma.vercel.app/",
      code: "https://github.com/yashpandav/Book-Review-Platform"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Book+Review+Platform"
  },
  {
    title: "Portfolio",
    date: "November 2025",
    description: [
      "A high-performance personal portfolio built with React, Tailwind CSS, and Google Gemini.",
      "Features a custom AI Chat Agent for interactive queries, a cinematic system-boot preloader, and a premium Vercel-inspired aesthetic.",
      "Optimized for performance with custom cursors, reveal animations, and responsive design."
    ],
    tech: ["Next Js", "Tailwind CSS", "Google Gemini API", "Framer Motion", "TypeScript"],
    links: {
      code: "https://github.com/yashpandav",
      demo: "#"
    },
    featured: true,
    image: ""
  },
  {
    title: "Circle LMS",
    date: "November 2024",
    description: [
      "Classroom management system inspired by Google Classroom: supports assignments, grading logic, role-based dashboards for teachers/students.",
      "Full-stack build using React, Node.js and MongoDB, with roles/permissions, submission workflows and scalable architecture."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Role-based Access"],
    links: {
      code: "https://github.com/yashpandav/Circle"
    },
    featured: false,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Circle+LMS"
  }
];


export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Global Rank 8",
    description: "Langflow Challenge 2025 (Top 8 among 7,000+ participants)",
  },
  {
    title: "Open Source Winner",
    description: "Winner of Social Winter of Code (Season 5) & Innogeeks Winter of Code",
  },
  {
    title: "Hackathon Victor",
    description: "Consistent winner across 5+ National and International Hackathons",
  },
  {
    title: "Algorithmic Proficiency",
    description: "Data Structures & Algorithms problems solver",
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Oken Keithellakpam",
    role: "Project Maintainer",
    company: "React Blog (SWOC/IWOC)",
    image: "https://media.licdn.com/dms/image/v2/D5603AQGEdrMNR_9wBQ/profile-displayphoto-scale_200_200/B56ZfU9UQ4GoAY-/0/1751624535238?e=1765411200&v=beta&t=vzGW44i9TQl7j_cvrO3roWgz1Fu90ESFhAGQ9TxMXBc",
    text: "I want to highlight Yash, one of the key contributors to my React Blog open-source project. Yash made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was hig hly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Yash is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/"
  }
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/yashpandav", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yash-pandav/", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/YashPandav22959", icon: "Twitter" },
  { name: "Discord", url: "https://discord.com/users/yashpandav", icon: "Discord" },
  { name: "Dev.to", url: "https://dev.to/yashpandav", icon: "Code2" },
  { name: "Hashnode", url: "https://hashnode.com/@yashpandav", icon: "Hash" },
  { name: "Peerlist", url: "https://peerlist.io/yashpandav", icon: "Globe" },
  { name: "Email", url: "mailto:pandavyash076@gmail.com", icon: "Mail" },
];
