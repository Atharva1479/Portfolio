import { Project, SkillCategory, Achievement, SocialLink, Testimonial, Education, GitaQuote, Experience, Stat } from './types';

export const PERSONAL_INFO = {
  name: "Atharva Jamdar",
  role: "Full Stack Developer",
  roleSecondary: "AI Engineer",
  location: "Pune, India",
  email: "atharvajamdar1810@gmail.com",
  resume: "https://drive.google.com/file/d/12Nx9Imb5k6CWipLgnGrB4E6oFJOP8XeQ/view?usp=drive_link",
  terminalIntro: {
    cmd: "> npm run dev",
    response: "Initializing Project... Setup complete. Specializing in scalable full-stack architecture and AI integration.",
    tagline: "Building scalable applications and AI-powered solutions that turn complex problems into production-ready products. ",
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
    "I enjoy designing end-to-end systems from concept to implementation that integrate *LLMs*, *automation*, and *modern* *web* *architectures* to create meaningful impact."
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
    slug: "enterprise-pos-system",
    date: "Feb 2025",
    description: [
      "A complete enterprise-grade Point of Sale system featuring multi-role dashboards, real-time analytics, and scalable architecture.",
      "Provided a unified platform with three role-based interfaces — cashier terminal, branch manager dashboard, and store admin panel — enabling smooth operations across single and multi-location stores.",
      "Enabled data-driven decision making through real-time analytics, sales trends, payment breakdowns, and KPI dashboards, while supporting secure multi-gateway digital payments."
    ],
    tech: ["React", "Spring Boot", "MySQL", "shadcn/ui", "Docker", "Razorpay"],
    links: {
      demo: "N/A",
      code: "N/A"
    },
    featured: true,
    status: "building",
    image: "/pos-system.png",
    details: {
      overview: "Enterprise POS System is a complete, production-grade Point of Sale platform designed for retail businesses of all sizes. It provides a unified system with three role-based interfaces — cashier terminal, branch manager dashboard, and store admin panel — enabling smooth operations across single and multi-location stores. The system supports real-time analytics, multi-gateway digital payments, and scalable architecture.",
      whyBuilt: [
        "Most POS solutions are either too expensive or lack multi-role support for growing businesses.",
        "Wanted to build an end-to-end system that handles billing, inventory, and analytics in one place.",
        "Needed hands-on experience with enterprise patterns — role-based access, real-time dashboards, and payment integration.",
        "Saw an opportunity to apply Spring Boot microservice patterns at scale."
      ],
      features: [
        "Multi-role dashboards: Cashier, Branch Manager, Store Admin — each with tailored interfaces",
        "Real-time analytics with sales trends, payment breakdowns, and KPI dashboards",
        "Secure multi-gateway digital payments via Razorpay and UPI",
        "Inventory management with low-stock alerts and batch operations",
        "Receipt generation and transaction history",
        "Multi-location store support with branch-level reporting"
      ],
      techCategories: [
        { name: "Frontend", items: ["React", "shadcn/ui", "Tailwind CSS"] },
        { name: "Backend", items: ["Spring Boot", "Spring Security", "REST APIs"] },
        { name: "Database", items: ["MySQL"] },
        { name: "Tools & Services", items: ["Docker", "Razorpay", "UPI Integration"] }
      ],
      challenges: [
        {
          title: "Challenge: Multi-role Access Control",
          description: "Implementing granular role-based access across three different user types while maintaining a clean, shared codebase. Solved using Spring Security with custom role hierarchies and React context-based route guards."
        },
        {
          title: "Challenge: Real-time Dashboard Updates",
          description: "Keeping analytics dashboards updated in real-time without overwhelming the database. Implemented efficient polling with caching strategies and optimized SQL queries for aggregation."
        }
      ],
      impact: [
        "Designed a scalable system capable of handling multi-location retail operations",
        "Reduced manual reporting effort by automating sales and inventory analytics",
        "Implemented secure payment processing with Razorpay and UPI gateway integration",
        "Applied enterprise-grade security with JWT-based auth and role-based access control"
      ],
      futurePlans: [
        "Add barcode/QR scanning support for faster billing",
        "Integrate AI-based demand forecasting for inventory",
        "Build mobile companion app for branch managers"
      ]
    }
  },{
    title: "GitTalk AI",
    slug: "gitTalk-ai",
    date: "Oct 2025",
    description: [
      "Engineered a GenAI-powered tool using FastAPI and LangChain that allows users to chat with any GitHub repository and understand its codebase.",
      "Constructed RAG pipelines combining vector search and LLMs to generate contextual code insights, summaries, and architectural explanations.",
      "Reduced onboarding time for developers by 50% through automated repo analysis and conversational code exploration."
    ],
    tech: ["React", "TypeScript", "FastAPI", "LangChain", "Pinecone", "Gemini API", "SQLite"],
    links: {
      demo: "https://git-talk-ai.vercel.app/",
      code: "https://github.com/Atharva1479/GitTalk-AI"
    },
    featured: true,
    status: "live",
    image: "/talk-to-github.png",
    details: {
      overview: "GitTalk AI transforms how developers understand codebases. Paste any GitHub repo URL and instantly start chatting with its code — ask about architecture, find bugs, get security reviews, or understand how any part works. It uses a RAG (Retrieval-Augmented Generation) pipeline to ingest repositories, chunk and index the code, and provide accurate, context-aware answers grounded in the actual source code — not hallucinations.",
      whyBuilt: [
        "Every developer has faced the pain of onboarding onto a new codebase — scrolling through hundreds of files, trying to piece together how things connect.",
        "Documentation is often outdated or missing.",
        "I wanted a tool where you could simply ask 'how does authentication work in this repo?' and get an answer that references the actual files, functions, and architecture — like having a senior engineer who's already read every line of code."
      ],
      features: [
        "Chat with any GitHub repo: public repos instantly, private repos via GitHub App OAuth",
        "Streaming responses: tokens appear in real-time as the AI generates answers, not after a long wait",
        "5 specialized analysis modes: Explain, Find Bugs, Refactor, Security Audit, and Document",
        "Hybrid search (Vector + BM25): combines semantic understanding with exact keyword matching using Reciprocal Rank Fusion",
        "Conversation-aware retrieval: follow-up questions like 'how does it work?' correctly reference prior context",
        "Smart query classification: broad questions retrieve more chunks than specific ones for comprehensive answers",
        "Mermaid diagram rendering: architecture and flow diagrams rendered inline with pan/zoom",
        "GitHub App integration: OAuth + GitHub App installation flow for private repo access with granular repo selection"
      ],
      techCategories: [
        { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Vite"] },
        { name: "Backend", items: ["Python", "FastAPI", "WebSockets"] },
        { name: "LLM", items: ["Google Gemini 2.5 Flash", "Gemini Embedding-001"] },
        { name: "Vector DB", items: ["Pinecone (serverless)"] },
        { name: "Search", items: ["FlashRank (ms-marco-MiniLM-L-12-v2)", "BM25 (rank-bm25)"] },
        { name: "Deployment", items: ["Render (backend Docker)", "Vercel (frontend)", "SQLite"] }
      ],
      challenges: [
        {
          title: "Challenge: GitHub API rate limiting on shared hosting",
          description: "Render's shared IPs get 403'd by GitHub's API almost immediately. My initial accessibility check treated any non-200 as 'repo not found,' breaking all repos. Solution: Implemented a three-state check (True/False/None) — None (rate-limited) skips the pre-check and tries ingesting directly, rather than failing."
        },
        {
          title: "Challenge: Memory constraints (512MB free tier)",
          description: "FlashRank's ONNX model (~150MB) + storing all document chunks per connection in RAM for BM25 search exceeded the 512MB limit. Solution: Lazy-load the reranker model, load BM25 chunks from disk cache per query instead of keeping them in memory, and cap concurrent connections at 8."
        },
        {
          title: "Challenge: Broad queries returning narrow results",
          description: "\"What is this repo about?\" only retrieved a few README chunks, giving shallow answers. Solution: Built a query classifier that detects broad/overview queries and retrieves 100+ chunks (vs 30 for specific queries), then caps by token budget to prevent context window overflow."
        }
      ],
      impact: [
        "Full-stack AI product built end-to-end — from RAG pipeline design to production deployment",
        "Sub-5-second response for most queries on indexed repos with streaming output",
        "Hybrid retrieval outperforms pure vector search — exact function names and error messages that semantic search misses are caught by BM25",
        "Production-deployed on free-tier infrastructure (Render + Vercel) with memory-optimized architecture fitting within 512MB",
        "Secure by design — GitHub App with granular repo permissions, rate limiting on all endpoints, SVG sanitization for rendered diagrams, input validation and XSS prevention"
      ],
      futurePlans: [
        "Support for larger repositories — incremental ingestion and smarter chunking to handle monorepos beyond the current 750K token limit",
        "Multi-repo conversations — chat across multiple related repos simultaneously (e.g., frontend + backend)",
        "Code generation mode — generate PRs and patches directly from chat suggestions",
        "Self-hosted option — Docker Compose setup for teams who want to run it on their own infrastructure with their own API keys"
      ]
    }
  },
  {
    title: "PasteVault",
    slug: "paste-vault",
    date: "Jan 2025",
    description: [
      "Built a secure, full-stack Pastebin-like application to solve safe temporary text sharing, allowing users to create shareable pastes with optional time-based expiration (TTL) and view count limits.",
      "Implemented strong backend security using Spring Security, XSS protection, and IP-based rate limiting to prevent abuse and mitigate DDoS-style attacks, along with concurrency-safe atomic view counting.",
      "Developed a modern, responsive frontend with server-side rendering, real-time form validation, and clipboard integration, ensuring fast, secure paste creation and viewing across devices."
    ],
    tech: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS", "Bucket4j", "Docker"],
    links: {
      demo: "https://paste-vault-frontend.vercel.app/",
      code: "https://github.com/Atharva1479/PasteVault-Frontend"
    },
    featured: true,
    status: "live",
    image: "/paste-vault.png",
    details: {
      overview: "PasteVault is a secure, full-stack Pastebin alternative built for developers who need safe temporary text sharing. It supports optional TTL-based expiration, view count limits, and syntax highlighting. The backend enforces enterprise-grade security with XSS protection, IP-based rate limiting, and concurrency-safe atomic view counting.",
      whyBuilt: [
        "Existing pastebin services lack proper security and are vulnerable to abuse.",
        "Wanted a tool with built-in expiration and view limits for sharing sensitive snippets.",
        "Needed to practice building secure full-stack applications with Spring Security.",
        "Wanted server-side rendering with Next.js for fast, SEO-friendly paste viewing."
      ],
      features: [
        "Shareable pastes with optional time-based expiration (TTL)",
        "View count limits — paste auto-deletes after N views",
        "Syntax highlighting for multiple languages",
        "Clipboard integration for one-click copy",
        "Real-time form validation with error feedback",
        "IP-based rate limiting to prevent abuse and DDoS attacks"
      ],
      techCategories: [
        { name: "Frontend", items: ["Next.js", "Tailwind CSS", "Server-Side Rendering"] },
        { name: "Backend", items: ["Spring Boot", "Spring Security", "REST APIs"] },
        { name: "Database", items: ["PostgreSQL"] },
        { name: "Tools & Services", items: ["Docker", "Vercel", "XSS Protection"] }
      ],
      challenges: [
        {
          title: "Challenge: Concurrency-Safe View Counting",
          description: "Multiple users could view a paste simultaneously, causing race conditions on the view counter. Implemented atomic database operations with PostgreSQL to ensure accurate counting under concurrent load."
        },
        {
          title: "Challenge: Rate Limiting Without Blocking Legitimate Users",
          description: "Needed to prevent abuse while allowing normal usage. Built an IP-based rate limiter with configurable thresholds and exponential backoff for repeated violations."
        }
      ],
      impact: [
        "Deployed and live on Vercel with real users",
        "Implemented enterprise-grade security in a personal project",
        "Achieved fast page loads with Next.js SSR and optimized API calls",
        "Built a reusable rate-limiting module applicable to other projects"
      ],
      futurePlans: [
        "Add password-protected pastes for additional security",
        "Implement user accounts for paste management",
        "Add API endpoint for programmatic paste creation"
      ]
    }
  },
  {
    title: "AI-Enabled E-Commerce Platform",
    slug: "ai-ecommerce-platform",
    date: "Feb 2024",
    description: [
      "Built a full-stack AI-powered fashion e-commerce platform to solve the problem of generic shopping experiences by delivering personalized product recommendations and content-driven discovery.",
      "Implemented machine learning–based personalization and a smart bundling system that analyzes user behavior to recommend complementary products and generate AI-driven fashion blog content tailored to different generations.",
      "Developed a responsive, intuitive frontend and a scalable backend to ensure secure data handling, smooth user interactions, and efficient end-to-end shopping workflows."
    ],
    tech: ["Python", "Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
    links: {
      demo: "N/A",
      code: "https://github.com/Atharva1479/AI-Ecommerce-Platform"
    },
    featured: true,
    status: "completed",
    image: "/ecom.png",
    details: {
      overview: "An AI-powered fashion e-commerce platform that goes beyond generic shopping experiences. The system uses machine learning to deliver personalized product recommendations, smart product bundling based on user behavior, and AI-generated fashion blog content tailored to different demographics. It provides a complete shopping workflow from discovery to checkout.",
      whyBuilt: [
        "Most e-commerce platforms offer generic, one-size-fits-all product recommendations.",
        "Wanted to explore how ML can personalize the shopping experience at scale.",
        "Saw an opportunity to combine content marketing (AI-generated blogs) with product discovery.",
        "Needed to build a full-stack project demonstrating ML integration with web applications."
      ],
      features: [
        "ML-based personalized product recommendations using collaborative filtering",
        "Smart bundling system that suggests complementary products",
        "AI-generated fashion blog content tailored to different generations",
        "Full shopping workflow: browse, cart, checkout, order tracking",
        "Responsive product catalog with search and filtering",
        "User behavior analytics for improving recommendations"
      ],
      techCategories: [
        { name: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap"] },
        { name: "Backend", items: ["Python", "Django"] },
        { name: "Database", items: ["SQLite"] },
        { name: "AI/ML", items: ["Scikit-learn", "Collaborative Filtering", "NLP"] }
      ],
      challenges: [
        {
          title: "Challenge: Cold Start Problem in Recommendations",
          description: "New users had no behavior data for personalization. Solved by implementing a hybrid approach — combining content-based filtering (product attributes) with collaborative filtering (user behavior) and falling back to popularity-based recommendations for new users."
        }
      ],
      impact: [
        "Successfully demonstrated ML-powered personalization in a full-stack web app",
        "Built an end-to-end recommendation pipeline from data collection to serving",
        "Learned practical challenges of deploying ML models in production web apps",
        "Generated realistic product content using NLP techniques"
      ],
      futurePlans: [
        "Migrate to a modern React frontend with better UX",
        "Implement deep learning-based recommendations for improved accuracy",
        "Add real-time A/B testing for recommendation strategies"
      ]
    }
  },
  {
    title: "Hospital Management System",
    slug: "hospital-management-system",
    date: "Feb 2025",
    description: [
      "Built a full-stack Hospital Management System to solve operational inefficiencies in appointment scheduling, patient record management, and role-based access across hospital workflows.",
      "Implemented secure authentication and authorization using Spring Security and JWT, enforcing strict role-based access control for admins, doctors, and patients along with password reset functionality.",
      "Developed a responsive React-based frontend and a scalable Spring Boot backend enabling patient appointment booking, doctor schedule management, and administrative oversight of users and system activity."
    ],
    tech: ["React", "Spring Boot", "MySQL", "Tailwind CSS", "Docker"],
    links: {
      demo: "NA",
      code: "https://github.com/HospitalManagemenSystem/CDAC_Hospital"
    },
    featured: true,
    status: "completed",
    image: "/hms.png",
    details: {
      overview: "A full-stack Hospital Management System designed to digitize and streamline hospital workflows. The system provides appointment scheduling, patient record management, and administrative oversight — all secured with JWT-based authentication and role-based access control for admins, doctors, and patients.",
      whyBuilt: [
        "Hospitals still rely on manual processes for scheduling and record management.",
        "CDAC capstone project — wanted to build something impactful with real-world applicability.",
        "Needed to implement complex role-based access patterns with Spring Security and JWT.",
        "Wanted to demonstrate full-stack capabilities with React and Spring Boot."
      ],
      features: [
        "Patient appointment booking with doctor schedule management",
        "Role-based access control for Admins, Doctors, and Patients",
        "JWT-based secure authentication with password reset functionality",
        "Admin dashboard for user and system activity oversight",
        "Doctor schedule management with availability tracking",
        "Patient medical history and record management"
      ],
      techCategories: [
        { name: "Frontend", items: ["React", "Tailwind CSS"] },
        { name: "Backend", items: ["Spring Boot", "Spring Security", "JWT", "REST APIs"] },
        { name: "Database", items: ["MySQL"] },
        { name: "Tools & Services", items: ["Docker"] }
      ],
      challenges: [
        {
          title: "Challenge: Complex Role-Based Access Control",
          description: "Three user roles (Admin, Doctor, Patient) each with different permissions and views. Implemented a layered security approach with Spring Security method-level annotations and React route guards to ensure proper access isolation."
        },
        {
          title: "Challenge: Appointment Conflict Resolution",
          description: "Multiple patients could attempt to book the same time slot simultaneously. Implemented optimistic locking in the database and real-time availability checking to prevent double bookings."
        }
      ],
      impact: [
        "Successfully delivered as CDAC capstone project with full marks",
        "Implemented enterprise-grade security patterns in a healthcare context",
        "Built a scalable architecture that can handle real hospital workflows",
        "Team collaboration with proper Git workflow and code review practices"
      ],
      futurePlans: [
        "Add telemedicine video consultation support",
        "Integrate prescription and pharmacy management",
        "Deploy as a cloud-hosted SaaS for small clinics"
      ]
    }
  }
];

export const STATS: Stat[] = [
  { value: 5, suffix: '+', label: 'Projects Built' },
  { value: 40, suffix: '+', label: 'Open Source Contributions' },
  { value: 98, suffix: '%', label: 'Latency Reduction' },
  { value: 50, suffix: '%', label: 'Onboarding Time Saved' },
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
    text: "I want to highlight Atharva, one of the key contributors to my React Blog open-source project. Atharva made more than 40+ meaningful contributions, ranging from adding significant features to improving existing functionality and addressing important issues. Throughout the process, he was highly professional, reliable, and always easy to communicate with. His dedication and technical expertise played a major role in the growth of the project. Atharva is an excellent developer with a strong sense of collaboration, and I'm confident he will continue to grow and achieve even greater milestones in his career.",
    linkedin: "https://www.linkedin.com/in/okenk/"
  },
  {
    name: "Anwishta Ghosh",
    role: "Mentor (SWOC 2025)",
    company: "Social Winter of Code",
    image: "./Anwishta.jpeg",
    text: "I had the pleasure of mentoring Atharva during SWOC 2025, and I was consistently impressed by his dedication, technical depth, and eagerness to learn. He quickly grasped complex concepts, contributed high-quality code, and showed strong problem-solving skills throughout the program. His proactive attitude, attention to detail, and ability to collaborate effectively make him stand out. I'm confident he will excel in any role he pursues, and I highly recommend him.",
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
    logo: "/iq-logo.png", 
    links: {
      website: "https://www.iqinnovationhub.com/",
      linkedin: "https://linkedin.com/company/iqinnovationhub"
    },
    description: [
      "Designed and developed Spring Boot backend services for a large-scale insurance aggregation platform for a German client, integrating with 10+ external insurance provider APIs for real-time premium calculation and comparison.",
      "Implemented REST, gRPC, and GraphQL APIs supporting client-facing, inter-service, and aggregation communication patterns for faster and more flexible data access.",
      "Optimized backend architecture and request flow, reducing end-to-end API response time from 10,000 ms to 172 ms (98% latency reduction).",
      "Enforced rate limiting and fault-tolerance mechanisms, reducing downstream API failures by 70% during peak traffic.",
      "Integrated PostgreSQL, email notification services, and Azure cloud storage to reliably process thousands of policy-related transactions.",
      "Built reusable internal libraries reused across 3+ services and implemented Spring Profiles for deployments across Azure, AWS, and GCP.",
      "Contributed to a GenAI backend service using FastAPI, implementing scope-based authentication to secure 5+ API scopes consumed by internal services."
    ],
    tech: ["Spring Boot", "FastAPI", "Python", "PostgreSQL", "Redis", "Langchain", "LangGraph", "CrewAI", "Azure"]
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
