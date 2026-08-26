import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { content } from '../data/content';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-gold-500/20 bg-plum-950/90 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        
        {/* Rakhi & Heart Center Icon */}
        <div className="flex items-center gap-3 text-3xl">
          <span>✨</span>
          <span className="text-4xl filter drop-shadow-[0_0_12px_rgba(212,175,55,0.7)] animate-pulse">
            🧵
          </span>
          <Heart size={28} className="fill-rose-500 text-rose-500 animate-bounce" />
          <span>✨</span>
        </div>

        {/* Heading */}
        <h3 className="font-cursive text-4xl sm:text-5xl text-gold-300">
          Made specially for {content.sisterName} ❤️
        </h3>

        {/* Subtitle */}
        <p className="font-serif text-amber-100/80 text-base sm:text-lg italic font-light">
          “Some bonds are forged in heaven, polished with childhood memories, and treasured forever.”
        </p>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="mt-6 px-6 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold hover:bg-gold-500/20 transition-all cursor-pointer"
        >
          Back to Top ⬆️
        </button>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gold-500/10 w-full text-xs text-amber-200/50 font-mono">
          Built with code • Filled with memories • Made for my sister ❤️
        </div>
      </div>
    </footer>
  );
}
