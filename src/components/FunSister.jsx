import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Laugh } from 'lucide-react';
import { content } from '../data/content';

export default function FunSister() {
  return (
    <section id="fun" className="py-24 px-4 relative">
      {/* Soft Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Laugh size={14} />
            <span>Sibling Shenanigans • मीठी तकरार</span>
          </div>
          <h2 className="font-hindi text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            Why You're Impossible… But Amazing 😂
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            A scientifically accurate breakdown of your most iconic personality traits.
          </p>
        </motion.div>

        {/* Playful Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.funTraits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-festive p-7 rounded-3xl relative overflow-hidden group cursor-pointer transition-all duration-300 border border-gold-500/20 hover:border-gold-400/50 hover:shadow-[0_15px_35px_rgba(212,175,55,0.15)]"
            >
              {/* Top Row: Emoji & Pin */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl filter drop-shadow-md group-hover:scale-125 transition-transform duration-300">
                  {trait.emoji}
                </span>
                <span className="text-xs font-mono font-semibold text-gold-400/80 bg-gold-500/10 px-2.5 py-1 rounded-full">
                  Trait #0{index + 1}
                </span>
              </div>

              {/* Title Hindi / English */}
              <h3 className="font-hindi text-xl font-bold text-gold-200 mb-1 group-hover:text-gold-300 transition-colors">
                {trait.titleHindi || trait.title}
              </h3>
              <span className="text-xs text-amber-200/70 font-serif italic block mb-3">
                {trait.title}
              </span>

              {/* Description Hindi & English */}
              {trait.descHindi && (
                <p className="font-hindi text-sm text-amber-100/90 leading-relaxed mb-2 font-medium">
                  "{trait.descHindi}"
                </p>
              )}
              <p className="text-amber-100/70 text-xs leading-relaxed font-sans italic border-l border-gold-500/30 pl-2">
                {trait.desc}
              </p>

              {/* Corner decorative shimmer */}
              <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-gold-500/10 rounded-full blur-xl group-hover:bg-gold-500/20 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
