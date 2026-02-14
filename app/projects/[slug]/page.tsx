import { PROJECTS } from '@/lib/constants';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, ArrowRight } from 'lucide-react';
import Starfield from '@/components/Starfield';

// Tech logo mappings
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

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

function getStatusConfig(status?: string) {
  switch (status) {
    case 'live':
      return { label: 'live', dotClass: 'bg-emerald-500 animate-pulse', bgClass: 'bg-emerald-500/10 border-emerald-500/30', textClass: 'text-emerald-400' };
    case 'building':
      return { label: 'building', dotClass: 'bg-amber-500 animate-pulse', bgClass: 'bg-amber-500/10 border-amber-500/30', textClass: 'text-amber-400' };
    case 'completed':
    default:
      return { label: 'completed', dotClass: 'bg-emerald-500', bgClass: 'bg-emerald-500/10 border-emerald-500/30', textClass: 'text-emerald-400' };
  }
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const project = PROJECTS.find((p) => p.slug === slug);
    if (!project) return { title: 'Project Not Found' };
    return {
      title: `${project.title} | Atharva Jamdar`,
      description: project.description[0],
    };
  });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) notFound();

  const status = getStatusConfig(project.status);
  const hasDemo = project.links?.demo && project.links.demo !== 'N/A' && project.links.demo !== 'NA';
  const hasCode = project.links?.code && project.links.code !== 'N/A' && project.links.code !== 'NA';
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const details = project.details;

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100">
      <Starfield />
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">

        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Hero Image */}
        {project.image && (
          <div className="rounded-2xl overflow-hidden border border-zinc-800 mb-10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto md:h-80 md:object-cover"
            />
          </div>
        )}

        {/* Status badge */}
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-xs font-medium mb-5 ${status.bgClass} ${status.textClass}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${status.dotClass}`} />
          {status.label}
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          {project.title}
        </h1>

        {/* Tech icons row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {project.tech.map((t) => {
            const iconUrl = getTechIconUrl(t);
            return iconUrl ? (
              <div key={t} title={t} className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <img src={iconUrl} alt={t} className="w-5 h-5" />
              </div>
            ) : (
              <div key={t} title={t} className="h-8 px-2.5 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                <span className="text-[10px] font-mono text-zinc-400">{t}</span>
              </div>
            );
          })}
        </div>

        {/* Short description */}
        <p className="text-zinc-400 leading-relaxed text-lg mb-8">
          {project.description[0]}
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {hasDemo && (
            <a
              href={project.links!.demo!}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition-all"
            >
              Live <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {hasCode && (
            <a
              href={project.links!.code!}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium hover:bg-zinc-700 hover:text-white transition-all"
            >
              GitHub <GitHubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Separator */}
        <div className="h-px bg-zinc-800 mb-12" />

        {details && (
          <>
            {/* Overview */}
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-zinc-400 leading-relaxed">{details.overview}</p>
            </section>

            {/* Why I Built This */}
            {details.whyBuilt && details.whyBuilt.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-5">Why I Built This</h2>
                <ul className="space-y-3">
                  {details.whyBuilt.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                      <span className="text-zinc-600 mt-1.5 text-sm">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Features */}
            {details.features && details.features.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-5">Features</h2>
                <ul className="space-y-3">
                  {details.features.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                      <span className="text-zinc-600 mt-1.5 text-sm">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tech Stack (Categorized) */}
            {details.techCategories && details.techCategories.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
                <div className="space-y-5">
                  {details.techCategories.map((cat) => (
                    <div key={cat.name}>
                      <h3 className="text-sm font-semibold text-zinc-300 mb-2.5">{cat.name}</h3>
                      <div className="flex flex-wrap gap-2">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="px-3 py-1.5 text-sm rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges & Solutions */}
            {details.challenges && details.challenges.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-6">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {details.challenges.map((ch, i) => (
                    <div key={i}>
                      <h3 className="text-base font-semibold text-amber-500 mb-2">{ch.title}</h3>
                      <p className="text-zinc-400 leading-relaxed pl-4 border-l-2 border-zinc-800">{ch.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Impact & Achievements */}
            {details.impact && details.impact.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-5">Impact & Achievements</h2>
                <ul className="space-y-3">
                  {details.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                      <span className="text-zinc-600 mt-1.5 text-sm">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Future Plans */}
            {details.futurePlans && details.futurePlans.length > 0 && (
              <section className="mb-14">
                <h2 className="text-2xl font-bold text-white mb-5">Future Plans</h2>
                <ul className="space-y-3">
                  {details.futurePlans.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                      <span className="text-zinc-600 mt-1.5 text-sm">&#8226;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </>
        )}

        {/* Bottom separator */}
        <div className="h-px bg-zinc-800 mb-10" />

        {/* Next Project navigation */}
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block bg-zinc-900/30 border border-zinc-800 rounded-xl p-6 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all"
        >
          <div className="flex items-center justify-end gap-3">
            <div className="text-right">
              <p className="text-xs text-zinc-500 mb-1">Next Project</p>
              <p className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {nextProject.title}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </div>
        </Link>
      </div>
    </div>
  );
}
