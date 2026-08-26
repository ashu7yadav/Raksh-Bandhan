import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  activeImage,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalImages,
}) {
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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-plum-950/90 backdrop-blur-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Previous Image"
        >
          <ChevronLeft size={26} />
        </button>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-plum-900/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500/20 hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xl"
          aria-label="Next Image"
        >
          <ChevronRight size={26} />
        </button>

        {/* Image Display Card */}
        <motion.div
          key={activeImage.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-gold-400/40 bg-plum-900 max-h-[70vh] flex items-center justify-center">
            <img
              src={activeImage.image}
              alt={activeImage.caption}
              className="max-h-[70vh] w-auto object-contain"
            />
          </div>

          {/* Caption & Counter Bar */}
          <div className="mt-4 text-center">
            <p className="font-serif text-lg sm:text-xl text-amber-100 font-medium drop-shadow-md">
              {activeImage.caption}
            </p>
            <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-gold-300/80 font-mono">
              <span className="bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/20">
                {activeImage.tag || 'Memory'}
              </span>
              <span>•</span>
              <span>
                {currentIndex + 1} / {totalImages}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
