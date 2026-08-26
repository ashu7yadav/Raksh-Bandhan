import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Sparkles, ZoomIn } from 'lucide-react';
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
            <span>Captured In Time</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            Our Memories ✨
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            A tapestry of unfiltered joy, candid laughter, and moments that become warmer with time. Tap any photo to zoom in.
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

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-plum-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-plum-900/80 border border-gold-400/40 text-gold-300 flex items-center justify-center shadow-lg">
                    <ZoomIn size={18} />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider font-mono bg-gold-500/20 text-gold-300 border border-gold-500/30 px-2 py-0.5 rounded-full inline-block mb-1.5">
                    {item.tag}
                  </span>
                  <p className="font-serif text-sm text-amber-100 font-medium leading-snug line-clamp-2">
                    {item.caption}
                  </p>
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
