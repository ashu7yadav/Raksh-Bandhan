import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles, Quote, Copy, Check, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LightboxModal({
  isOpen,
  activeImage,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalImages,
}) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('both'); // 'both', 'hindi', 'hinglish'

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !activeImage) return null;

  const handleCopyQuote = () => {
    const textToCopy = `${activeImage.quoteHindi || ''}\n\n"${activeImage.quoteHinglish || ''}"\n\n— Happy Raksha Bandhan ❤️`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#d4af37', '#e11d48', '#f472b6'],
    });

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-plum-950/95 backdrop-blur-2xl overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 w-11 h-11 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Close Lightbox"
        >
          <X size={22} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Modal Container */}
        <motion.div
          key={activeImage.id}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl w-full flex flex-col items-center justify-center my-auto py-6"
        >
          {/* Main Photo Frame */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-2 border-gold-400/50 bg-plum-950 max-h-[55vh] sm:max-h-[60vh] flex items-center justify-center group">
            <img
              src={activeImage.image}
              alt={activeImage.caption}
              className="max-h-[55vh] sm:max-h-[60vh] w-auto object-contain"
            />
            {/* Tag Badge on Image */}
            <div className="absolute top-3 left-3 bg-plum-950/80 backdrop-blur-md border border-gold-400/30 px-3 py-1 rounded-full text-xs text-gold-300 font-mono">
              {activeImage.tag || 'Memory'}
            </div>
          </div>

          {/* Dedicated Image-Based Hindi & Hinglish Quotes Card */}
          <div className="w-full mt-4 glass-festive p-5 sm:p-6 rounded-2xl border border-gold-400/40 shadow-xl relative text-center">
            
            {/* Hindi Quote */}
            {activeImage.quoteHindi && (
              <div className="mb-3">
                <div className="flex items-center justify-center gap-1.5 text-xs text-gold-400 font-mono uppercase tracking-widest mb-1.5">
                  <Sparkles size={13} />
                  <span>दिल से हिंदी विचार</span>
                </div>
                <p className="font-hindi text-base sm:text-xl text-gold-100 font-semibold leading-relaxed drop-shadow">
                  "{activeImage.quoteHindi}"
                </p>
              </div>
            )}

            {/* Hinglish Quote */}
            {activeImage.quoteHinglish && (
              <div className="mt-2 pt-2 border-t border-gold-500/20">
                <p className="font-sans text-xs sm:text-sm text-amber-200/90 italic">
                  "{activeImage.quoteHinglish}"
                </p>
              </div>
            )}

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between gap-3 mt-4 pt-3 border-t border-gold-500/15">
              {/* Photo Counter */}
              <span className="text-xs text-gold-300/80 font-mono">
                {currentIndex + 1} of {totalImages}
              </span>

              {/* Copy Quote Button */}
              <button
                onClick={handleCopyQuote}
                className={`px-4 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 transition-all duration-300 ${
                  copied
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                    : 'bg-gold-500/10 border-gold-500/30 text-gold-300 hover:bg-gold-500/20'
                }`}
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                <span>{copied ? 'Quote Copied! ✨' : 'Copy Quote 📋'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
