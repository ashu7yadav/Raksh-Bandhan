import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile, Shield, Infinity as InfinityIcon, Eye, CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

export default function UnsaidWords() {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Heart': return <Heart className="text-rose-400 fill-rose-400" size={26} />;
      case 'Sparkles': return <Sparkles className="text-gold-400 fill-gold-400" size={26} />;
      case 'Smile': return <Smile className="text-amber-300" size={26} />;
      case 'Shield': return <Shield className="text-cyan-400" size={26} />;
      case 'Infinity': return <InfinityIcon className="text-purple-400" size={26} />;
      default: return <Heart className="text-gold-400" size={26} />;
    }
  };

  return (
    <section id="unsaid" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
            <Heart size={14} />
            <span>Straight From The Heart</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold rose-gold-gradient mb-4">
            Things I Don't Say Often… ❤️
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            Sometimes we get too busy teasing each other to say what truly matters. Tap each envelope to reveal a confession.
          </p>
        </motion.div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.unsaidWords.map((item, index) => {
            const isFlipped = !!flippedCards[item.id];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-64 sm:h-72 perspective-1000 cursor-pointer"
                onClick={() => toggleFlip(item.id)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform rounded-3xl ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE (Mystery Envelope / Teaser) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-3xl p-7 flex flex-col justify-between glass-festive glass-festive-hover border border-gold-500/30 bg-gradient-to-br from-plum-900/80 via-plum-950/90 to-burgundy-950/80">
                    <div className="flex justify-between items-start">
                      <span className="text-xs font-mono font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                        Secret #0{item.id}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-plum-900/60 border border-gold-500/20 flex items-center justify-center">
                        {getIcon(item.icon)}
                      </div>
                    </div>

                    <div className="my-auto">
                      <p className="font-serif text-lg text-amber-100/90 font-medium">
                        "{item.teaser}"
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold group-hover:bg-gold-500/20 transition-colors">
                      <Eye size={14} className="animate-pulse" />
                      <span>Tap to reveal ✨</span>
                    </div>
                  </div>

                  {/* BACK SIDE (Heartfelt Revealed Truth) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-3xl p-7 flex flex-col justify-between bg-gradient-to-br from-burgundy-900 via-plum-900 to-rose-950/90 border-2 border-gold-400 shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono font-bold text-rose-300 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
                        From My Heart 💌
                      </span>
                      <CheckCircle2 size={20} className="text-gold-400" />
                    </div>

                    <div className="my-auto">
                      <p className="font-serif text-base sm:text-lg text-amber-50 font-medium leading-relaxed italic">
                        "{item.secret}"
                      </p>
                    </div>

                    <div className="text-center text-xs text-gold-300/80 font-cursive text-xl">
                      Forever true ❤️
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
