import React from 'react';
import { EDUCATION } from '../lib/constants';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-emerald-500"></div>
          <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
            Education
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATION.map((edu, index) => (
            <RevealOnScroll key={index} delay={index * 100} variant="scale-up">
              <div className="group h-full bg-zinc-950 border border-zinc-800 p-6 rounded-xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shrink-0">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-zinc-200 group-hover:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-500 font-mono text-sm mb-3">
                      {edu.school}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    {edu.grades && (
                      <div className="mt-3 inline-block px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                        <span className="text-xs font-mono text-emerald-400">{edu.grades}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
