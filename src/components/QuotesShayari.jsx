import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Sparkles, Heart, Copy, Check, Filter, Share2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { content } from '../data/content';

export default function QuotesShayari() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [likedQuotes, setLikedQuotes] = useState({});

  const categories = [
    { id: 'all', label: '🌟 All Quotes & Shayaris' },
    { id: 'shayari', label: '📜 दिल से हिंदी शायरी' },
    { id: 'hinglish', label: '💬 बिंदास Hinglish' },
    { id: 'rakhi', label: '🧵 राखी स्पेशल' },
    { id: 'masti', label: '😂 सिबलिंग मस्ती' },
  ];

  const filteredQuotes = activeCategory === 'all'
    ? content.quotesShayari
    : content.quotesShayari.filter((q) => q.category === activeCategory);

  const handleCopy = (quote, id) => {
    const textToCopy = `${quote.quoteHindi}\n\n"${quote.quoteHinglish}"\n\n— Happy Raksha Bandhan ❤️`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleLike = (id) => {
    setLikedQuotes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#e11d48', '#f472b6', '#d4af37'],
    });
  };

  return (
    <section id="quotes" className="py-24 px-4 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold mb-3">
            <Quote size={14} />
            <span>दिल की बातें • Hindi & Hinglish Sibling Quotes</span>
          </div>
          <h2 className="font-hindi text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            Shayaris & Sibling Quotes 📜✨
          </h2>
          <p className="text-amber-100/80 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            A handpicked collection of emotional Hindi shayaris and relatable Hinglish quotes dedicated to our bond. Tap copy or react with love!
          </p>
        </motion.div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-gold-500 to-amber-400 text-plum-950 font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105'
                  : 'bg-plum-900/60 border border-gold-500/20 text-amber-200/80 hover:bg-gold-500/10 hover:border-gold-500/40 hover:text-gold-200'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Quotes Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredQuotes.map((item, index) => {
              const isLiked = !!likedQuotes[item.id];
              const isCopied = copiedId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-festive glass-festive-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between border border-gold-500/25 bg-gradient-to-br from-plum-950/90 via-plum-900/70 to-burgundy-950/80 shadow-xl"
                >
                  {/* Background Watermark Quote Icon */}
                  <Quote
                    size={110}
                    className="absolute -top-4 -right-4 text-gold-500/5 group-hover:text-gold-500/10 transition-colors pointer-events-none"
                  />

                  {/* Top Bar: Tag & Actions */}
                  <div className="flex items-center justify-between gap-3 mb-5 relative z-10">
                    <span className="text-[11px] uppercase font-mono font-bold tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {item.tag}
                    </span>

                    <div className="flex items-center gap-2">
                      {/* Copy Button */}
                      <button
                        onClick={() => handleCopy(item, item.id)}
                        className={`p-2 rounded-full border transition-all ${
                          isCopied
                            ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 scale-110'
                            : 'bg-plum-900/80 border-gold-500/30 text-gold-300 hover:bg-gold-500/20'
                        }`}
                        title="Copy Quote"
                      >
                        {isCopied ? <Check size={16} /> : <Copy size={16} />}
                      </button>

                      {/* Like Heart Button */}
                      <button
                        onClick={() => handleLike(item.id)}
                        className={`p-2 rounded-full border transition-all ${
                          isLiked
                            ? 'bg-rose-500/20 border-rose-400 text-rose-400 scale-110'
                            : 'bg-plum-900/80 border-gold-500/30 text-rose-300 hover:bg-rose-500/20'
                        }`}
                        title="Like Quote"
                      >
                        <Heart size={16} className={isLiked ? 'fill-rose-400' : ''} />
                      </button>
                    </div>
                  </div>

                  {/* Middle Content: Photo & Quotes */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10 mb-5">
                    {/* Matching Photo Thumbnail */}
                    {item.image && (
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-gold-400/40 shadow-lg relative group/img">
                        <img
                          src={item.image}
                          alt={item.tag}
                          className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gold-400/10 pointer-events-none" />
                      </div>
                    )}

                    {/* Hindi Quote */}
                    <div className="flex-1">
                      <p className="font-hindi text-base sm:text-lg text-gold-100 font-medium leading-relaxed mb-3 whitespace-pre-line drop-shadow-sm">
                        {item.quoteHindi}
                      </p>

                      {/* Hinglish Subtitle */}
                      <p className="text-xs sm:text-sm text-amber-200/80 italic font-sans leading-snug border-l-2 border-rose-400/60 pl-3">
                        "{item.quoteHinglish}"
                      </p>
                    </div>
                  </div>

                  {/* Bottom Footer Info */}
                  <div className="pt-4 border-t border-gold-500/15 flex items-center justify-between text-xs text-gold-400/70 relative z-10 font-mono">
                    <span className="flex items-center gap-1">
                      <Sparkles size={12} className="text-gold-400" />
                      <span>{item.categoryLabel}</span>
                    </span>
                    <span className="text-[11px] text-amber-200/60">
                      {isLiked ? (item.likes || 100) + 1 : (item.likes || 100)} ❤️
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
