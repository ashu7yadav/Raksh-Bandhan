import React from 'react';
import { motion } from 'framer-motion';
import { Music, Disc, Heart, Sparkles, Radio } from 'lucide-react';
import { content } from '../data/content';

export default function SpotifySoundtrack() {
  return (
    <section id="soundtrack" className="py-24 px-4 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-950/20 via-gold-500/10 to-plum-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#1db954]/10 border border-[#1db954]/30 text-[#1ed760] text-xs font-semibold mb-3">
            <Radio size={14} className="animate-pulse" />
            <span>Official Spotify Soundtrack</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            {content.spotify.title}
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            {content.spotify.subtitle}
          </p>
        </motion.div>

        {/* Music Player Container with Equalizer and Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="glass-festive p-6 sm:p-10 rounded-3xl border border-gold-400/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative"
        >
          {/* Header Bar with Animated Equalizer */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-gold-500/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1db954]/20 border border-[#1db954]/40 flex items-center justify-center text-[#1ed760]">
                <Disc size={22} className="animate-spin-slow" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-amber-100">
                  Raksha Bandhan Vibes ✨
                </h3>
                <span className="text-xs text-amber-200/60 font-mono">
                  Curated Playlist • Spotify
                </span>
              </div>
            </div>

            {/* Visual Animated Audio Equalizer Bars */}
            <div className="flex items-end gap-1 h-6">
              <span className="w-1 bg-[#1db954] rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-3" />
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_1.2s_ease-in-out_infinite_0.2s] h-6" />
              <span className="w-1 bg-rose-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.4s] h-4" />
              <span className="w-1 bg-[#1db954] rounded-full animate-[pulse_1.1s_ease-in-out_infinite_0.1s] h-5" />
              <span className="w-1 bg-gold-400 rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.3s] h-3" />
            </div>
          </div>

          {/* Official Spotify Embed Iframe */}
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-plum-950/80 border border-gold-500/20">
            <iframe
              src={`https://open.spotify.com/embed/playlist/${content.spotify.playlistId}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Raksha Bandhan Spotify Playlist"
              className="rounded-2xl"
            />
          </div>

          {/* Footer Caption */}
          <div className="mt-6 text-center">
            <p className="font-cursive text-2xl text-gold-300">
              {content.spotify.caption}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
