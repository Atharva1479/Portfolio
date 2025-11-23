import React from 'react';
import { ACHIEVEMENTS, TESTIMONIALS } from '../lib/constants';
import { Trophy, BarChart3, Zap, Award, Quote, Linkedin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Achievements: React.FC = () => {
   return (
      <section id="achievements" className="py-16 md:py-20 relative z-10">
         <div className="max-w-6xl mx-auto px-6">

            {/* Section Header */}
            <div className="flex items-center gap-3 mb-12">
               <div className="h-px w-8 bg-emerald-500"></div>
               <span className="text-emerald-500 font-mono text-sm uppercase tracking-wider">
                  Impact & Recognition
               </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

               {/* Left Column: Featured Testimonial (Takes 3/5 width on large screens) */}
               <div className="lg:col-span-3 flex flex-col">
                  {TESTIMONIALS.map((testimonial, index) => (
                     <RevealOnScroll key={index} className="h-full" variant="blur-in">
                        <div className="relative h-full bg-zinc-900/20 border border-zinc-800 rounded-2xl p-8 overflow-hidden group hover:border-zinc-700 transition-all duration-500">
                           {/* Background Gradient Mesh */}
                           <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none"></div>

                           <div className="relative z-10 flex flex-col h-full">
                              <div className="mb-6">
                                 <Quote className="h-10 w-10 text-zinc-700 opacity-50" />
                              </div>

                              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed italic font-light flex-grow">
                                 "{testimonial.text}"
                              </p>

                              <div className="mt-10 pt-8 border-t border-zinc-800/60 flex items-center justify-between">
                                 <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-full border border-zinc-700 p-0.5 bg-zinc-800 shrink-0">
                                       <img
                                          src={testimonial.image}
                                          alt={testimonial.name}
                                          className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                                       />
                                    </div>
                                    <div>
                                       <div className="text-white font-bold text-lg">{testimonial.name}</div>
                                       <div className="text-xs font-mono text-emerald-500 uppercase tracking-tight">{testimonial.role}</div>
                                       <div className="text-xs text-zinc-500">{testimonial.company}</div>
                                    </div>
                                 </div>

                                 <a
                                    href={testimonial.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-500 hover:text-[#0a66c2] hover:border-[#0a66c2]/30 hover:bg-[#0a66c2]/5 transition-all duration-300 group/link"
                                    title="View on LinkedIn"
                                 >
                                    <Linkedin className="h-5 w-5 group-hover/link:scale-110 transition-transform" />
                                 </a>
                              </div>
                           </div>
                        </div>
                     </RevealOnScroll>
                  ))}
               </div>

               {/* Right Column: Achievements Grid (Takes 2/5 width on large screens) */}
               <div className="lg:col-span-2 grid grid-cols-1 gap-4">
                  <h3 className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider">Performance Metrics</h3>
                  {ACHIEVEMENTS.map((achievement, index) => (
                     <RevealOnScroll key={index} delay={index * 100} variant="slide-right">
                        <div className="group bg-zinc-950 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-900/50 transition-colors flex items-start gap-4">
                           <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shrink-0">
                              {index === 0 ? <Trophy className="h-5 w-5" /> :
                                 index === 1 ? <Award className="h-5 w-5" /> :
                                    index === 2 ? <Zap className="h-5 w-5" /> :
                                       <BarChart3 className="h-5 w-5" />}
                           </div>
                           <div>
                              <div className="text-sm font-bold text-zinc-200 group-hover:text-white">{achievement.title}</div>
                              <div className="text-xs text-zinc-500 mt-1 leading-snug">{achievement.description}</div>
                           </div>
                        </div>
                     </RevealOnScroll>
                  ))}
               </div>

            </div>
         </div>
      </section>
   );
};

export default Achievements;