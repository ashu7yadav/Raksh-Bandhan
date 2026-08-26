import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { content } from '../data/content';

export default function InteractiveRakhi() {
  const [isTied, setIsTied] = useState(false);

  const handleTieRakhi = () => {
    setIsTied(true);

    // Multi-stage celebratory confetti explosion
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#e11d48', '#f472b6', '#ffffff', '#fbbf24'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 70,
        origin: { x: 0 },
        colors: ['#d4af37', '#f472b6'],
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 70,
        origin: { x: 1 },
        colors: ['#d4af37', '#f472b6'],
      });
    }, 300);
  };

  return (
    <section id="rakhi" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-rose-900/30 via-gold-500/20 to-burgundy-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-3">
            <Sparkles size={14} />
            <span>The Sacred Thread</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            {content.rakhi.title}
          </h2>
          <p className="text-amber-100/80 max-w-xl mx-auto text-sm sm:text-base font-light italic leading-relaxed">
            "{content.rakhi.quote}"
          </p>
        </motion.div>

        {/* Central Ornate Rakhi Display */}
        <div className="relative py-8 flex flex-col items-center justify-center">
          
          <motion.div
            animate={
              isTied
                ? { scale: [1, 1.25, 1.15], rotate: [0, 10, -10, 0] }
                : { scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }
            }
            transition={{ duration: isTied ? 0.8 : 4, repeat: isTied ? 0 : Infinity, ease: 'easeInOut' }}
            className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center"
          >
            {/* Glowing Aura Ring */}
            <div
              className={`absolute inset-0 rounded-full transition-all duration-700 ${
                isTied
                  ? 'bg-gold-400/40 blur-2xl scale-125 shadow-[0_0_80px_rgba(212,175,55,0.9)]'
                  : 'bg-gold-500/20 blur-xl scale-100'
              }`}
            />

            {/* High-Def Ornate SVG Rakhi */}
            <svg className="w-full h-full filter drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]" viewBox="0 0 240 240">
              {/* Extended Golden Tying Silk Thread */}
              <motion.path
                initial={{ pathLength: 0.6 }}
                animate={{ pathLength: isTied ? 1 : 0.8 }}
                transition={{ duration: 1 }}
                d="M 10 120 C 60 90, 80 150, 120 120 C 160 90, 180 150, 230 120"
                stroke="#d4af37"
                strokeWidth="4"
                fill="none"
              />
              <motion.path
                initial={{ pathLength: 0.6 }}
                animate={{ pathLength: isTied ? 1 : 0.8 }}
                transition={{ duration: 1 }}
                d="M 10 120 C 60 140, 80 100, 120 120 C 160 140, 180 100, 230 120"
                stroke="#e11d48"
                strokeWidth="3"
                fill="none"
              />

              {/* Rotating Outer Sacred Mandala Petals */}
              <g className={isTied ? "animate-spin" : "animate-spin-slow"} style={{ transformOrigin: '120px 120px' }}>
                {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
                  <ellipse
                    key={i}
                    cx="120"
                    cy="72"
                    rx="8"
                    ry="18"
                    fill={i % 2 === 0 ? "#e11d48" : "#d4af37"}
                    stroke="#faeedd"
                    strokeWidth="1"
                    transform={`rotate(${angle} 120 120)`}
                    opacity="0.9"
                  />
                ))}
              </g>

              {/* Golden Beaded Inner Circle */}
              <circle cx="120" cy="120" r="42" fill="url(#rakhiGrad)" stroke="#faeedd" strokeWidth="3" />
              <circle cx="120" cy="120" r="32" fill="#570a2b" stroke="#d4af37" strokeWidth="2.5" />
              
              {/* Sacred Center Jewel */}
              <circle cx="120" cy="120" r="14" fill="#d4af37" />
              <circle cx="120" cy="120" r="8" fill="#ffffff" />

              <defs>
                <linearGradient id="rakhiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff7d6" />
                  <stop offset="50%" stopColor="#d4af37" />
                  <stop offset="100%" stopColor="#b78f24" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Interactive Button / Success State */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              {!isTied ? (
                <motion.button
                  key="tie-btn"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={handleTieRakhi}
                  className="px-10 py-4 rounded-full bg-gradient-to-r from-rose-600 via-burgundy-600 to-gold-600 text-white font-bold text-lg shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:shadow-[0_0_50px_rgba(212,175,55,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 mx-auto"
                >
                  <Sparkles size={20} className="text-gold-300 animate-spin-slow" />
                  <span>{content.rakhi.buttonText}</span>
                  <Heart size={20} className="fill-rose-300 text-rose-300" />
                </motion.button>
              ) : (
                <motion.div
                  key="tied-card"
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  className="glass-festive p-6 sm:p-8 rounded-3xl border border-gold-400 max-w-lg mx-auto shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400 text-gold-300 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gold-300 mb-2">
                    {content.rakhi.successHeading}
                  </h3>
                  <p className="text-amber-100/90 text-sm leading-relaxed font-light">
                    {content.rakhi.successSub}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
