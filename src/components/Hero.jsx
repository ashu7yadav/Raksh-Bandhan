import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { content } from '../data/content';

export default function Hero() {
  const handleStartJourney = () => {
    // Gentle golden confetti burst
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#f472b6', '#eedf8a', '#ffffff', '#e11d48'],
    });

    const nextSection = document.getElementById('intro');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden"
    >
      {/* Soft Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-burgundy-900/30 via-gold-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Festive Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-plum-900/60 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-medium tracking-wide shadow-lg mb-6 backdrop-blur-md"
        >
          <Sparkles size={14} className="text-gold-400 animate-spin-slow" />
          <span>{content.hero.badge}</span>
          <Sparkles size={14} className="text-gold-400 animate-spin-slow" />
        </motion.div>

        {/* Animated Rakhi Centerpiece Graphic */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.35, delay: 0.2 }}
          className="relative w-28 h-28 sm:w-36 sm:h-36 mb-6 flex items-center justify-center"
        >
          {/* Pulsing Aura */}
          <div className="absolute inset-0 rounded-full bg-gold-500/20 blur-xl animate-pulse" />
          
          {/* Ornate SVG Rakhi */}
          <svg className="w-full h-full filter drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]" viewBox="0 0 200 200">
            {/* Silk Threads Left & Right */}
            <path d="M 0 100 Q 50 85 80 100" stroke="#d4af37" strokeWidth="4" fill="none" strokeDasharray="3 3" />
            <path d="M 120 100 Q 150 115 200 100" stroke="#d4af37" strokeWidth="4" fill="none" strokeDasharray="3 3" />
            <path d="M 0 100 Q 50 115 80 100" stroke="#e11d48" strokeWidth="3" fill="none" />
            <path d="M 120 100 Q 150 85 200 100" stroke="#e11d48" strokeWidth="3" fill="none" />

            {/* Outer Petals Ring */}
            <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <circle
                  key={i}
                  cx="100"
                  cy="60"
                  r="10"
                  fill={i % 2 === 0 ? "#e11d48" : "#d4af37"}
                  transform={`rotate(${angle} 100 100)`}
                  opacity="0.9"
                />
              ))}
            </g>

            {/* Center Gold Medallion */}
            <circle cx="100" cy="100" r="32" fill="url(#goldGrad)" stroke="#faeedd" strokeWidth="2.5" />
            <circle cx="100" cy="100" r="24" fill="#570a2b" stroke="#d4af37" strokeWidth="2" />
            
            {/* Center Heart / Sparkle Motif */}
            <circle cx="100" cy="100" r="8" fill="#d4af37" />
            <circle cx="100" cy="100" r="4" fill="#ffffff" />

            <defs>
              <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fff7d6" />
                <stop offset="50%" stopColor="#d4af37" />
                <stop offset="100%" stopColor="#916d1a" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Sequential Reveals */}
        {/* 1. "Hey Sis… ❤️" */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-cursive text-5xl sm:text-7xl md:text-8xl text-rose-300 filter drop-shadow-[0_0_20px_rgba(244,114,182,0.4)] mb-2"
        >
          {content.hero.greeting}
        </motion.h1>

        {/* 2. "This Raksha Bandhan…" */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight gold-gradient-text mb-4"
        >
          {content.hero.subGreeting}
        </motion.h2>

        {/* 3. "I made something special just for you." */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="text-base sm:text-xl text-amber-100/90 font-light max-w-xl mx-auto leading-relaxed mb-10"
        >
          {content.hero.tagline}
        </motion.p>

        {/* CTA Button with Glow & Scale */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={handleStartJourney}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-plum-950 font-bold text-lg tracking-wide shadow-[0_0_30px_rgba(212,175,55,0.5)] hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 w-full h-full bg-shimmer animate-shimmer pointer-events-none" />
            
            <Sparkles size={20} className="text-plum-950 group-hover:rotate-45 transition-transform" />
            <span>{content.hero.ctaText}</span>
            <Heart size={18} className="fill-plum-950 text-plum-950 animate-pulse" />
          </button>

          {/* Subtle scroll down indicator */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="text-gold-400/60 mt-4 flex flex-col items-center gap-1 text-xs cursor-pointer"
            onClick={handleStartJourney}
          >
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
