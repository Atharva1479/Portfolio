'use client';

import React, { useRef, useCallback } from 'react';
import Link from 'next/link';
import { PROJECTS } from '../lib/constants';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

// Custom SVG icons matching reference image style
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Tech logo mapping — devicon slugs
const DEVICON_MAP: Record<string, string> = {
  'React': 'react', 'React.js': 'react', 'Next.js': 'nextjs',
  'Spring Boot': 'spring', 'MySQL': 'mysql', 'PostgreSQL': 'postgresql',
  'Docker': 'docker', 'Tailwind CSS': 'tailwindcss', 'TypeScript': 'typescript',
  'JavaScript': 'javascript', 'Python': 'python', 'HTML5': 'html5',
  'CSS3': 'css3', 'Bootstrap': 'bootstrap', 'MongoDB': 'mongodb',
  'Redis': 'redis', 'Node.js': 'nodejs', 'FastAPI': 'fastapi', 'SQLite': 'sqlite',
  'GraphQL': 'graphql', 'AWS': 'amazonwebservices', 'Azure': 'azure',
  'GCP': 'googlecloud', 'Kubernetes': 'kubernetes', 'Jenkins': 'jenkins',
};

// Direct URLs for techs not in devicon
const DIRECT_ICON_MAP: Record<string, string> = {
  'LangChain': 'https://cdn.simpleicons.org/langchain',
  'Langchain': 'https://cdn.simpleicons.org/langchain',
  'LangGraph': 'https://cdn.simpleicons.org/langchain',
  'Pinecone': 'https://cdn.simpleicons.org/pinecone/FFFFFF',
  'Supabase': 'https://cdn.simpleicons.org/supabase/FFFFFF',
  'CrewAI': 'https://cdn.simpleicons.org/crewai',
  'Pydantic AI': 'https://cdn.simpleicons.org/pydantic/FFFFFF',
  'Razorpay': 'https://cdn.simpleicons.org/razorpay',
  'Razorpay & UPI': 'https://cdn.simpleicons.org/razorpay',
  'shadcn/ui': 'https://cdn.simpleicons.org/shadcnui',
  'Gemini API': 'https://cdn.simpleicons.org/googlegemini',
  'Django': 'https://cdn.simpleicons.org/django/FFFFFF',
  'Bucket4j': 'https://cdn.simpleicons.org/spring/FFFFFF',
};

function getTechIconUrl(tech: string): string | null {
  if (DIRECT_ICON_MAP[tech]) return DIRECT_ICON_MAP[tech];
  const slug = DEVICON_MAP[tech];
  if (!slug) return null;
  return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${slug}/${slug}-original.svg`;
}

// Status config
function getStatusConfig(status?: string) {
  switch (status) {
    case 'live':
      return {
        label: 'Live',
        dotClass: 'bg-emerald-500 animate-pulse',
        bgClass: 'bg-emerald-500/10 border-emerald-500/30',
        textClass: 'text-emerald-400',
      };
    case 'building':
      return {
        label: 'Building',
        dotClass: 'bg-amber-500 animate-pulse',
        bgClass: 'bg-amber-500/10 border-amber-500/30',
        textClass: 'text-amber-400',
      };
    case 'completed':
    default:
      return {
        label: 'Completed',
        dotClass: 'bg-emerald-500',
        bgClass: 'bg-emerald-500/10 border-emerald-500/30',
        textClass: 'text-emerald-400',
      };
  }
}

// 3D Tilt Card wrapper
const TiltCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateY = ((x - centerX) / centerX) * 8;
    const rotateX = ((centerY - y) / centerY) * 8;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    el.style.transition = 'transform 0.05s ease-out';
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg)';
    el.style.transition = 'transform 0.4s ease-out';
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      className="h-full"
    >
      {children}
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-emerald-500"></div>
              <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">Selected Work</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Featured Projects</h2>
            <p className="text-zinc-400 max-w-xl mt-4 leading-relaxed">
              Full-stack applications and autonomous agents.
              Architected for scalability, performance, and intelligent automation.
            </p>
          </div>
          <a href="https://github.com/Atharva1479?tab=repositories" target="_blank" rel="noreferrer" className="hidden md:flex font-mono text-xs text-zinc-400 hover:text-white items-center gap-2 transition-colors border border-zinc-800 px-4 py-2 rounded-full bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 group">
            <GitHubIcon className="h-3 w-3 group-hover:text-emerald-500 transition-colors" /> view_all_repositories
          </a>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <RevealOnScroll key={index} variant="fade-up" delay={index * 80}>
              <TiltCard>
                <ProjectCard project={project} />
              </TiltCard>
            </RevealOnScroll>
          ))}
        </div>

        <div className="md:hidden mt-12 text-center">
          <a href="https://github.com/Atharva1479?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex font-mono text-xs text-zinc-400 hover:text-white items-center gap-2 transition-colors border border-zinc-800 px-6 py-3 rounded-full bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-600 group">
            <GitHubIcon className="h-3 w-3 group-hover:text-emerald-500 transition-colors" /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasDemo = project.links?.demo && project.links.demo !== 'N/A' && project.links.demo !== 'NA';
  const hasCode = project.links?.code && project.links.code !== 'N/A' && project.links.code !== 'NA';
  const status = getStatusConfig(project.status);

  return (
    <div className="group h-full bg-zinc-900/20 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 flex flex-col">
      {/* Project Image */}
      {project.image && (
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 sm:h-48 object-contain sm:object-cover bg-zinc-900 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/80 to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title + Link Icons */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">
            {project.title}
          </h3>
          <div className="flex items-center gap-2.5 shrink-0 mt-0.5">
            {hasDemo && (
              <a href={project.links!.demo!} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <GlobeIcon className="w-[18px] h-[18px]" />
              </a>
            )}
            {hasCode && (
              <a href={project.links!.code!} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                <GitHubIcon className="w-[18px] h-[18px]" />
              </a>
            )}
          </div>
        </div>

        {/* Description (truncated) */}
        <p className="text-sm text-zinc-400 leading-relaxed mb-5 line-clamp-3">
          {project.description[0]}
        </p>

        {/* Technologies */}
        <div className="mb-5">
          <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-2.5">Technologies</p>
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((t) => {
              const iconUrl = getTechIconUrl(t);
              return iconUrl ? (
                <div
                  key={t}
                  title={t}
                  className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition-colors cursor-default"
                >
                  <img src={iconUrl} alt={t} className="w-5 h-5" />
                </div>
              ) : (
                <div
                  key={t}
                  title={t}
                  className="h-8 px-2.5 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center hover:border-zinc-500 transition-colors cursor-default"
                >
                  <span className="text-[10px] font-mono text-zinc-400">{t}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer: Status Badge + View Details */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-800/50">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border ${status.bgClass}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
            <span className={`text-xs font-medium ${status.textClass}`}>
              {status.label}
            </span>
          </span>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
