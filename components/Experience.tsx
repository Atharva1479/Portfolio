import React from 'react';
import { EXPERIENCE } from '../lib/constants';
import { Globe, Briefcase } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

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

// Custom social icons to avoid deprecated lucide icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
            Experience
          </span>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-800" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <RevealOnScroll key={index} delay={index * 100} variant="blur-in">
                <div className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-[19px] -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full border-2 ${exp.current ? 'border-emerald-500/30' : 'border-zinc-700'} bg-zinc-950 flex items-center justify-center`}>
                      <div className={`w-3 h-3 rounded-full ${exp.current ? 'bg-emerald-500 animate-pulse shadow-[0_0_12px_rgba(16,185,129,0.6)]' : 'bg-emerald-500'}`} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="w-full pl-14">
                    <div className="group bg-zinc-900/20 border border-zinc-800 rounded-xl p-6 md:p-8 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300">
                      {/* Header: Logo, Company Info, and Date */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          {/* Company Logo */}
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden shrink-0">
                            {exp.logo ? (
                              <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                            ) : (
                              <Briefcase className="w-6 h-6 text-zinc-500" />
                            )}
                          </div>

                          {/* Company Info */}
                          <div>
                            <div className="flex flex-wrap items-center gap-3 mb-1">
                              <h3 className="text-lg font-bold text-white">{exp.company}</h3>

                              {/* Social Links */}
                              <div className="flex items-center gap-2">
                                {exp.links?.website && (
                                  <a href={exp.links.website} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <Globe className="w-4 h-4" />
                                  </a>
                                )}
                                {exp.links?.twitter && (
                                  <a href={exp.links.twitter} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <TwitterIcon className="w-4 h-4" />
                                  </a>
                                )}
                                {exp.links?.linkedin && (
                                  <a href={exp.links.linkedin} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-[#0A66C2] transition-colors">
                                    <LinkedInIcon className="w-4 h-4" />
                                  </a>
                                )}
                                {exp.links?.github && (
                                  <a href={exp.links.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                                    <GitHubIcon className="w-4 h-4" />
                                  </a>
                                )}
                              </div>

                              {/* Working Badge */}
                              {exp.current && (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                  <span className="text-xs font-medium text-emerald-400">Working</span>
                                </span>
                              )}
                            </div>
                            <p className="text-zinc-400 text-sm">{exp.role}</p>
                          </div>
                        </div>

                        {/* Duration and Location */}
                        <div className="text-right md:text-right text-sm">
                          <p className="text-zinc-300 font-medium">{exp.duration}</p>
                          <p className="text-zinc-500">{exp.location}</p>
                        </div>
                      </div>

                      {/* Technologies & Tools */}
                      {exp.tech && exp.tech.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider mb-3">
                            Technologies & Tools
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.tech.map((tech, i) => {
                              const iconUrl = getTechIconUrl(tech);
                              return (
                                <span
                                  key={i}
                                  className="cursor-default inline-flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 transition-all duration-200 hover:bg-zinc-700 hover:text-white hover:border-zinc-500"
                                >
                                  {iconUrl && <img src={iconUrl} alt={tech} className="w-4 h-4" />}
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Description */}
                      <ul className="space-y-2">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                            <span className="text-zinc-600 mt-1">&#8226;</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Fade out at bottom */}
          <div className="absolute left-[19px] -translate-x-px bottom-0 w-[2px] h-12 bg-gradient-to-t from-zinc-950 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
