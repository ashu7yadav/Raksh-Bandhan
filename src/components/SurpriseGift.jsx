import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Heart, Sparkles, Star, Quote } from 'lucide-react';
import confetti from 'canvas-confetti';
import { content } from '../data/content';

export default function SurpriseGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleOpenGift = () => {
    setIsShaking(true);

    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);

      // Grand Multi-stage Confetti Shower
      const end = Date.now() + 3.5 * 1000;
      const colors = ['#d4af37', '#e11d48', '#f472b6', '#ffffff', '#fbbf24', '#a855f7'];

      (function frame() {
        confetti({
          particleCount: 7,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });
        confetti({
          particleCount: 7,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      })();
    }, 900);
  };

  return (
    <section id="surprise" className="py-28 px-4 relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Aura */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isOpen ? 'bg-plum-950/95 opacity-100' : 'bg-transparent opacity-50'
        }`}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-3">
            <Gift size={14} />
            <span>The Grand Finale</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-6xl font-bold gold-gradient-text mb-4">
            {content.surprise.title}
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            {content.surprise.subtitle}
          </p>
        </motion.div>

        {/* 3D Gift Box Opening Interaction */}
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="gift-box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="flex flex-col items-center justify-center py-6"
            >
              <motion.div
                animate={
                  isShaking
                    ? {
                        x: [-10, 10, -10, 10, -5, 5, 0],
                        rotate: [-5, 5, -5, 5, -2, 2, 0],
                        scale: [1, 1.1, 1.15, 1.2],
                      }
                    : {
                        y: [0, -12, 0],
                        rotate: [0, 1.5, 0],
                      }
                }
                transition={{
                  duration: isShaking ? 0.9 : 3.5,
                  repeat: isShaking ? 0 : Infinity,
                  ease: 'easeInOut',
                }}
                className="relative w-48 h-48 sm:w-60 sm:h-60 mb-10 cursor-pointer group"
                onClick={!isShaking ? handleOpenGift : undefined}
              >
                {/* Gift Box Glow Halo */}
                <div className="absolute inset-0 rounded-3xl bg-gold-400/30 blur-2xl group-hover:bg-gold-400/50 transition-all" />

                {/* 3D Styled SVG Gift Box with Ribbon */}
                <svg className="w-full h-full filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]" viewBox="0 0 200 200">
                  <defs>
                    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#94144c" />
                      <stop offset="50%" stopColor="#570a2b" />
                      <stop offset="100%" stopColor="#2b0928" />
                    </linearGradient>
                    <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fff7d6" />
                      <stop offset="50%" stopColor="#d4af37" />
                      <stop offset="100%" stopColor="#916d1a" />
                    </linearGradient>
                  </defs>

                  {/* Box Body */}
                  <rect x="35" y="80" width="130" height="95" rx="14" fill="url(#boxGrad)" stroke="#eedf8a" strokeWidth="2.5" />
                  
                  {/* Vertical Ribbon */}
                  <rect x="88" y="80" width="24" height="95" fill="url(#ribbonGrad)" />
                  
                  {/* Horizontal Ribbon */}
                  <rect x="35" y="115" width="130" height="22" fill="url(#ribbonGrad)" />

                  {/* Box Lid */}
                  <rect x="25" y="60" width="150" height="28" rx="8" fill="#750e3b" stroke="#faeedd" strokeWidth="2.5" />
                  <rect x="88" y="60" width="24" height="28" fill="url(#ribbonGrad)" />

                  {/* Ribbon Bow on Top */}
                  <path d="M 100 60 C 80 30, 40 40, 80 60 Z" fill="url(#ribbonGrad)" stroke="#faeedd" strokeWidth="1.5" />
                  <path d="M 100 60 C 120 30, 160 40, 120 60 Z" fill="url(#ribbonGrad)" stroke="#faeedd" strokeWidth="1.5" />
                  <circle cx="100" cy="60" r="9" fill="#faeedd" />
                </svg>

                {/* Shimmer sparkle */}
                <Sparkles size={24} className="text-gold-300 absolute top-4 right-4 animate-spin-slow" />
              </motion.div>

              <button
                onClick={handleOpenGift}
                disabled={isShaking}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-gold-500 via-amber-400 to-gold-600 text-plum-950 font-bold text-lg shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3"
              >
                <Sparkles size={20} className="text-plum-950" />
                <span>{isShaking ? "Opening your surprise..." : content.surprise.buttonText}</span>
                <Heart size={20} className="fill-plum-950 text-plum-950 animate-pulse" />
              </button>
            </motion.div>
          ) : (
            /* REVEALED LETTER & TRIBUTE CARD */
            <motion.div
              key="letter-revealed"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="glass-festive p-8 sm:p-14 rounded-3xl border-2 border-gold-400/80 shadow-[0_20px_70px_rgba(212,175,55,0.35)] relative text-left"
            >
              {/* Corner Festive Mandalas */}
              <div className="text-center mb-8">
                <span className="font-cursive text-5xl sm:text-7xl rose-gold-gradient block mb-2">
                  {content.surprise.heading}
                </span>
                <div className="w-28 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto" />
              </div>

              {/* Heartfelt Letter Paragraphs */}
              <div className="flex flex-col gap-5 text-amber-100/90 font-serif text-base sm:text-lg leading-relaxed mb-10">
                {content.surprise.letter.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Final Sister/Family Photo Tribute */}
              <div className="my-10">
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-gold-400/50 group">
                  <img
                    src={content.surprise.finalPhoto}
                    alt={content.surprise.finalPhotoCaption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-950/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-center">
                    <p className="font-cursive text-3xl sm:text-4xl text-gold-200 drop-shadow-lg">
                      {content.surprise.finalPhotoCaption}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline & Signoff */}
              <div className="text-center pt-6 border-t border-gold-500/20">
                <p className="font-cursive text-4xl sm:text-5xl text-gold-300 mb-3">
                  {content.surprise.finalTagline}
                </p>
                <span className="text-xs text-amber-200/60 font-mono tracking-widest uppercase">
                  {content.surprise.credits}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
