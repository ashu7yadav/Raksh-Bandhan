import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles, ZoomIn, Quote } from 'lucide-react';
import { content } from '../data/content';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const openLightbox = (index) => {
    setSelectedIdx(index);
  };

  const closeLightbox = () => {
    setSelectedIdx(null);
  };

  const prevImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + content.gallery.length) % content.gallery.length);
    }
  };

  const nextImage = () => {
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % content.gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-3">
            <ImageIcon size={14} />
            <span>Captured In Time • यादों का गुलदस्ता</span>
          </div>
          <h2 className="font-hindi text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            Our Photo Memories & Quotes ✨
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            A tapestry of unfiltered joy and sweet brother-sister moments. Tap any photo to zoom in and view its dedicated Hindi & Hinglish quote!
          </p>
        </motion.div>

        {/* Masonry / Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {content.gallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => openLightbox(index)}
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-lg border border-gold-500/20 bg-plum-950/80 aspect-[4/5] sm:aspect-auto sm:h-72"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Overlay with Photo-Specific Quotes */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/95 via-plum-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-wider font-mono bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-full inline-block">
                    {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-plum-900/80 border border-gold-400/40 text-gold-300 flex items-center justify-center shadow-lg">
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  {/* Hindi Quote Preview */}
                  {item.quoteHindi && (
                    <p className="font-hindi text-xs sm:text-sm text-gold-200 font-medium leading-snug line-clamp-2 drop-shadow">
                      {item.quoteHindi}
                    </p>
                  )}
                  {/* Hinglish Quote Preview */}
                  {item.quoteHinglish && (
                    <p className="text-[11px] text-amber-100/90 italic font-sans line-clamp-1 border-l border-rose-400/50 pl-1.5">
                      "{item.quoteHinglish}"
                    </p>
                  )}
                  <div className="text-[10px] text-gold-400/70 font-mono mt-1 flex items-center gap-1">
                    <Quote size={10} />
                    <span>Tap to view full quote</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={selectedIdx !== null}
        activeImage={selectedIdx !== null ? content.gallery[selectedIdx] : null}
        onClose={closeLightbox}
        onPrev={prevImage}
        onNext={nextImage}
        currentIndex={selectedIdx || 0}
        totalImages={content.gallery.length}
      />
    </section>
  );
}
