import React from 'react';
import { ACHIEVEMENTS } from '../lib/constants';
import { Trophy, BarChart3, Zap, Award } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const Achievements: React.FC = () => {
   return (
      <section id="achievements" className="py-16 md:py-20 relative z-10">
         <div className="max-w-6xl mx-auto px-6">

            {/* Recognition Grid */}
            <div>
               <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-emerald-500"></div>
                  <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-wider">Recognition</h3>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {ACHIEVEMENTS.map((achievement, index) => (
                     <RevealOnScroll key={index} delay={index * 100} variant="scale-up">
                        <div className="group h-full bg-zinc-950 border border-zinc-800 p-5 rounded-xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300 flex flex-col gap-3">
                           <div className="p-2 w-fit rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all">
                              {index === 0 ? <Trophy className="h-5 w-5" /> :
                                 index === 1 ? <Award className="h-5 w-5" /> :
                                    index === 2 ? <Zap className="h-5 w-5" /> :
                                       <BarChart3 className="h-5 w-5" />}
                           </div>
                           <div>
                              <div className="text-sm font-bold text-zinc-200 group-hover:text-white mb-1">{achievement.title}</div>
                              <div className="text-xs text-zinc-500 leading-snug">{achievement.description}</div>
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
