import { Project, SkillCategory, Achievement, SocialLink, Testimonial, Education, GitaQuote, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Atharva Jamdar",
  role: "Full Stack Developer",
  roleSecondary: "Gen AI",
  location: "Pune, India",
  email: "atharvajamdar1810@gmail.com",
  resume: "https://drive.google.com/file/d/12Nx9Imb5k6CWipLgnGrB4E6oFJOP8XeQ/view?usp=drive_link",
  terminalIntro: {
    cmd: "> npm run dev",
    response: "Initializing Project... Setup complete. Specializing in scalable full-stack architecture and AI integration.",
    tagline: "Building scalable applications and AI-powered solutions that turn ideas into reality.",
    latency_humor: "O(1) complexity preferred"
  },
  aboutJson: {
    current_focus: "Backend Development, RAG Systems, Agentic AI",
    core_stack: ["LangChain", "LangGraph", "Spring Boot", "VectorDB"],
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
      "LangChain", "LangGraph", "CrewAI", "Pydantic AI", "LLM APIs", "RAG Pipelines", "VectorDB",
      "Autonomous Agents", "Tool Integration", "Memory Management"
    ],
    icon: "Brain"
  },
  {
    name: "Frontend Interface",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Redux Toolkit", "HTML5", "CSS3"],
    icon: "Layout"
  },
  {
    name: "Backend Infrastructure",
    skills: ["Spring Boot", "FastAPI", "REST / gRPC / GraphQL", "Redis", "OAuth2 / JWT", "Microservice"],
    icon: "Server"
  },
  {
    name: "Data Persistence & State",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Vector Databases", "Pinecone"],
    icon: "Database"
  },
  {
    name: "System Ops & Ecosystem",
    skills: [
      "AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux", "Java 8", "Python"
    ],
    icon: "Cloud"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Enterprise POS System",
    date: "Feb 2025",
    description: [
      "A complete enterprise-grade Point of Sale system featuring multi-role dashboards, real-time analytics, and scalable architecture.",
      "Provided a unified platform with three role-based interfaces — cashier terminal, branch manager dashboard, and store admin panel — enabling smooth operations across single and multi-location stores.",
      "Enabled data-driven decision making through real-time analytics, sales trends, payment breakdowns, and KPI dashboards, while supporting secure multi-gateway digital payments."
    ],
    tech: ["React", "Spring Boot", "MySQL", "shadcn/ui", "Docker", "Razorpay & UPI"],
    links: {
      demo: "N/A",
      code: "N/A"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TechieBlog"
  },
  {
    title: "PasteVault",
    date: "Jan 2025",
    description: [
      "Built a secure, full-stack Pastebin-like application to solve safe temporary text sharing, allowing users to create shareable pastes with optional time-based expiration (TTL) and view count limits.",
      "Implemented strong backend security using Spring Security, XSS protection, and IP-based rate limiting to prevent abuse and mitigate DDoS-style attacks, along with concurrency-safe atomic view counting.",
      "Developed a modern, responsive frontend with server-side rendering, real-time form validation, and clipboard integration, ensuring fast, secure paste creation and viewing across devices."
    ],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Spring Security", "Docker"],
    links: {
      demo: "https://paste-vault-frontend.vercel.app/",
      code: "https://github.com/Atharva1479/PasteVault-Frontend"
    },
    featured: true,
    image: "/paste-vault.png"
  },
  {
    title: "AI-Enabled E-Commerce Platform",
    date: "Feb 2024",
    description: [
      "Built a full-stack AI-powered fashion e-commerce platform to solve the problem of generic shopping experiences by delivering personalized product recommendations and content-driven discovery.",
      "Implemented machine learning–based personalization and a smart bundling system that analyzes user behavior to recommend complementary products and generate AI-driven fashion blog content tailored to different generations.",
      "Developed a responsive, intuitive frontend and a scalable backend to ensure secure data handling, smooth user interactions, and efficient end-to-end shopping workflows."
    ],
    tech: ["Python", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap", "ML"],
    links: {
      demo: "N/A",
      code: "https://github.com/Atharva1479/AI-Ecommerce-Platform"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=TeaCoder+Agent"
  },
  {
    title: "TalkToGitHub",
    date: "Oct 2025",
    description: [
      "Built a GenAI-powered developer tool to solve the challenge of understanding large and unfamiliar GitHub codebases by enabling conversational interaction with any repository.",
      "Engineered Retrieval-Augmented Generation (RAG) pipelines using LangChain, vector search, and Gemini API to generate contextual code explanations, summaries, and architectural insights.",
      "Developed a high-performance frontend and backend that automates repository analysis, reducing developer onboarding time by approximately 50% through conversational code exploration."
    ],
    tech: ["React", "FastAPI", "LangChain", "RAG", "Vector DB", "Gemini API"],
    links: { 
      demo: "NA",
      code: "NA" 
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=AutoMission+Bot"
  },
  {
    title: "Hospital Management System",
    date: "Feb 2025",
    description: [
      "Built a full-stack Hospital Management System to solve operational inefficiencies in appointment scheduling, patient record management, and role-based access across hospital workflows.",
      "Implemented secure authentication and authorization using Spring Security and JWT, enforcing strict role-based access control for admins, doctors, and patients along with password reset functionality.",
      "Developed a responsive React-based frontend and a scalable Spring Boot backend enabling patient appointment booking, doctor schedule management, and administrative oversight of users and system activity."
    ],
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Spring Security", "Docker"],
    links: {
      demo: "NA",
      code: "https://github.com/HospitalManagemenSystem/CDAC_Hospital"
    },
    featured: true,
    image: "https://placehold.co/800x450/18181b/a1a1aa/png?text=Book+Review+Platform"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Second Runner-Up",
    description: "OSINT competition by Cybertronic Society",
  },
  {
    title: "Rank 6",
    description: "Start-Up Ideathon by Institution Innovation Council",
    image: "/Oken.png",
  },
  {
    title: "Hackathon Enthusiast",
    description: "Participated in 5+ national hackathons",
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
    image: "/Oken.png",
    text: "I want to highlight Yash, one of the key contributors to my React Blog open-source project. Yash made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was highly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Yash is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/"
  },
  {
    name: "Anwishta Ghosh",
    role: "Mentor (SWOC 2025)",
    company: "Social Winter of Code",
    image: "./Anwishta.jpeg",
    text: "I had the pleasure of mentoring Yash during SWOC 2025, and I was consistently impressed by his dedication, technical depth, and eagerness to learn. He quickly grasped complex concepts, contributed high-quality code, and showed strong problem-solving skills throughout the program. His proactive attitude, attention to detail, and ability to collaborate effectively make him stand out. I'm confident he will excel in any role he pursues, and I highly recommend him.",
    linkedin: "https://www.linkedin.com/in/anwishta-ghosh/"
  }
];

export const EDUCATION: Education[] = [
  {
    school: "Centre for Development of Advanced Computing",
    degree: "Post Graduate Diploma in Advance Computing",
    duration: "Aug 2024 — Feb 2025",
    location: "Pune, India",
    grades: "Percentage: 72%"
  },
  {
    school: "AISSMS College of Engineering",
    degree: "B.E. Computer Engineering",
    duration: "Aug 2020 - July 2024",
    location: "Pune, India",
    grades: "CGPA: 8.37"
  }
];

// Experience - Add your work experience here
export const EXPERIENCE: Experience[] = [
  {
    company: "IQ Innovation Hub LLP",
    role: "Software Engineer",
    duration: "May 2025 — Present",
    location: "Pune, India",
    type: "Full-time",
    current: true,
    logo: "/iq-logo.png", // Add your company logo to public folder
    links: {
      website: "https://www.iqinnovationhub.com/",
      linkedin: "https://linkedin.com/company/iqinnovationhub"
    },
    description: [
      "Designed and developed Spring Boot backend services for a large-scale insurance aggregation platform for a German client, integrating with 5+ external insurance provider APIs for real-time premium calculation and comparison.",
      "Implemented REST, gRPC, and GraphQL APIs supporting client-facing, inter-service, and aggregation communication patterns for faster and more flexible data access.",
      "Optimized backend architecture and request flow, reducing end-to-end API response time from 10,000 ms to 172 ms (98% latency reduction).",
      "Enforced rate limiting and fault-tolerance mechanisms, reducing downstream API failures by 70% during peak traffic.",
      "Integrated PostgreSQL, email notification services, and Azure cloud storage to reliably process thousands of policy-related transactions.",
      "Built reusable internal libraries reused across 3+ services and implemented Spring Profiles for deployments across Azure, AWS, and GCP.",
      "Contributed to a GenAI backend service using FastAPI, implementing scope-based authentication to secure 5+ API scopes consumed by internal services."
    ],
    tech: ["Spring Boot", "REST", "gRPC", "GraphQL", "PostgreSQL", "Azure", "AWS", "GCP", "FastAPI", "Docker"]
  }
  /*{
    company: "Upsurge Labs",
    role: "Backend Developer Intern",
    duration: "June 2025 — July 2025",
    location: "Bangalore, India (On-Site)",
    type: "Internship",
    current: false,
    logo: "/upsurge-logo.png", // Add your company logo to public folder
    links: {
      website: "https://upsurgelabs.com",
      twitter: "https://twitter.com/upsurgelabs",
      linkedin: "https://linkedin.com/company/upsurgelabs",
      github: "https://github.com/upsurgelabs"
    },
    description: [
      "Backend development for Bhindi.io, a flagship product of Upsurge Labs, focusing on core infrastructure and agent development.",
      "Engineered and deployed multiple high-performance agents, enhancing product capabilities and user experience.",
      "Testing agent functionality, authentication, automation, and system stability.",
      "Streamlined development workflows by optimizing internal tools and maintaining detailed technical documentation."
    ],
    tech: ["NestJS", "Postman", "TypeScript", "Express"]
  }*/
];

export const SOCIALS: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/Atharva1479", icon: "Github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/atharva-jamdar/", icon: "Linkedin" },
  { name: "Twitter", url: "https://x.com/its_atharva18", icon: "Twitter" },
  { name: "Email", url: "mailto:atharvajamdar1810@gmail.com", icon: "Mail" },
];

// Bhagavad Gita Quotes - Add more quotes here, one will be shown daily
export const GITA_QUOTES: GitaQuote[] = [
  {
    text: "You have the right to work, but never to the fruit of work.",
    chapter: 2,
    verse: 47
  },
  {
    text: "Change is the law of the universe. You can be a millionaire or a pauper in an instant.",
    chapter: 2,
    verse: 14
  },
  {
    text: "Do your duty without attachment, and you will attain peace.",
    chapter: 2,
    verse: 48
  },
  {
    text: "When meditation is mastered, the mind is unwavering like the flame of a candle in a windless place.",
    chapter: 6,
    verse: 19
  },
  {
    text: "A person can rise through the efforts of his own mind; he can also degrade himself. Because each person is his own friend or enemy.",
    chapter: 6,
    verse: 5
  },
  {
    text: "There is neither this world, nor the world beyond, nor happiness for the one who doubts.",
    chapter: 4,
    verse: 40
  },
  {
    text: "Set thy heart upon thy work, but never on its reward.",
    chapter: 2,
    verse: 47
  },
  {
    text: "The mind is restless and difficult to restrain, but it is subdued by practice.",
    chapter: 6,
    verse: 35
  },
  {
    text: "Man is made by his belief. As he believes, so he is.",
    chapter: 17,
    verse: 3
  },
  {
    text: "There is nothing lost or wasted in following one’s own dharma.",
    chapter: 2,
    verse: 40
  },
  {
    text: "Reshape yourself through the power of your will; never let yourself be degraded by self-will.",
    chapter: 6,
    verse: 5
  },
  {
    text: "Whatever action a great person performs, others follow.",
    chapter: 3,
    verse: 21
  }
];
