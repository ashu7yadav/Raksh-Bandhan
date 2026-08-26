import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, BookOpen, Quote } from 'lucide-react';
import { content } from '../data/content';

export default function Timeline() {
  return (
    <section id="story" className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorative Diya Lights */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-burgundy-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-3">
            <BookOpen size={14} />
            <span>Memories Through The Years • बचपन से आज तक</span>
          </div>
          <h2 className="font-hindi text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            Our Little Story & Quotes 📖
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            Every chapter of our journey has been filled with laughter, tiny chaos, and infinite love.
          </p>
        </motion.div>

        {/* Vertical Timeline Spine */}
        <div className="relative">
          {/* Central Glowing Line (Left on mobile, Center on desktop) */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-gold-500 via-rose-500 to-gold-400 opacity-40 shadow-[0_0_10px_rgba(212,175,55,0.8)]" />

          <div className="flex flex-col gap-16 sm:gap-24">
            {content.timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.chapter}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Milestone Marker Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-plum-950 border-2 border-gold-400 flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.8)] z-20">
                    <span className="w-3 h-3 rounded-full bg-gold-400 animate-ping opacity-75" />
                    <span className="w-3 h-3 rounded-full bg-gold-400 absolute" />
                  </div>

                  {/* Content Card Side */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10">
                    <div className="glass-festive glass-festive-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden group border border-gold-500/25">
                      
                      {/* Chapter Pill */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-mono font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                          {item.chapter}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-amber-200/70">
                          <Calendar size={13} className="text-gold-400" />
                          <span>{item.year}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-hindi text-xl sm:text-2xl font-bold text-amber-100 mb-1 group-hover:text-gold-300 transition-colors">
                        {item.titleHindi || item.title}
                      </h3>
                      {item.titleHindi && (
                        <span className="text-xs text-gold-400/80 font-serif italic block mb-3">
                          {item.title}
                        </span>
                      )}

                      {/* Story Description */}
                      <p className="text-amber-100/80 text-sm sm:text-base leading-relaxed mb-5 font-light">
                        {item.description}
                      </p>

                      {/* Hindi & Hinglish Quotes Showcase */}
                      <div className="flex flex-col gap-2 bg-plum-950/75 border-l-2 border-gold-400 p-4 rounded-r-2xl shadow-inner">
                        {item.quoteHindi && (
                          <p className="font-hindi text-sm sm:text-base text-gold-200 font-medium leading-snug">
                            "{item.quoteHindi}"
                          </p>
                        )}
                        {item.quoteHinglish && (
                          <p className="text-xs text-amber-200/80 italic font-sans">
                            "{item.quoteHinglish}"
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Photo Side */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10 mt-6 md:mt-0">
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-500/30 group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-plum-950/80 via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute bottom-3 left-3 right-3 text-xs text-gold-200 font-hindi bg-plum-950/80 backdrop-blur-md py-1.5 px-3 rounded-lg border border-gold-500/30 truncate">
                        ✨ {item.titleHindi || item.title}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
