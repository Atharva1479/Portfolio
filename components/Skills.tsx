import React from 'react';
import { SKILLS } from '../lib/constants';
import { Brain, Layout, Server, Database, Cloud } from 'lucide-react';
import { CardSpotlight } from './CardSpotlight';
import { RevealOnScroll } from './RevealOnScroll';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="h-6 w-6 text-zinc-100" />,
  Layout: <Layout className="h-6 w-6 text-zinc-100" />,
  Server: <Server className="h-6 w-6 text-zinc-100" />,
  Database: <Database className="h-6 w-6 text-zinc-100" />,
  Cloud: <Cloud className="h-6 w-6 text-zinc-100" />,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-emerald-500"></div>
            <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">Core Competencies</span>
          </div>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-4">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => (
            <RevealOnScroll
              key={idx}
              delay={idx * 50}
              variant="scale-up"
              className={`h-full ${idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
            >
              <CardSpotlight
                className="p-8 h-full flex flex-col bg-zinc-900/20 border-zinc-800"
                color="rgba(255, 255, 255, 0.15)"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-zinc-900/80 border border-zinc-700/50 rounded-xl shadow-sm backdrop-blur-sm">
                    {iconMap[category.icon]}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2 mt-auto content-start">
                  {category.skills.map(skill => (
                    <span
                      key={skill}
                      className="
                        relative z-20
                        cursor-default
                        px-3 py-1.5 
                        rounded-md 
                        bg-zinc-900
                        border border-zinc-700
                        text-xs font-mono text-zinc-300
                        transition-all duration-200
                        hover:bg-zinc-800
                        hover:text-white
                        hover:border-zinc-500
                        shadow-sm
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;