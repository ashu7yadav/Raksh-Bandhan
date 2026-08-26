import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Crown } from 'lucide-react';
import { content } from '../data/content';

export default function SisterIntro() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (centerY - y) / 12;
    const rotateY = (x - centerX) / 12;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <section id="intro" className="py-24 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2 block">
            Dedicated With All My Heart
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold gold-gradient-text mb-4">
            {content.sisterIntro.title}
          </h2>
          <p className="text-amber-100/70 max-w-lg mx-auto text-sm sm:text-base font-light">
            {content.sisterIntro.subtitle}
          </p>
        </motion.div>

        {/* 3D Tilt Card & Quote */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Sister Photo with 3D Tilt Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 flex justify-center perspective-1000"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                transition: 'transform 0.15s ease-out',
              }}
              className="relative group rounded-3xl p-3 bg-gradient-to-b from-gold-400/40 via-plum-700/60 to-gold-600/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-gold-400/30 transform-style-3d max-w-sm w-full"
            >
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-plum-950">
                <img
                  src={content.sisterIntro.image}
                  alt={content.sisterName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Gradient Inner Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-plum-950/90 via-transparent to-transparent opacity-60" />

                {/* Floating Affection Badges */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-cursive text-3xl text-gold-200 block drop-shadow-md">
                    {content.sisterName}
                  </span>
                  <span className="text-xs text-amber-200/80 font-mono tracking-wider">
                    {content.sisterNickname}
                  </span>
                </div>
              </div>

              {/* Floating Crown Badge */}
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 p-2.5 shadow-xl flex items-center justify-center text-plum-950 animate-float-slow">
                <Crown size={24} className="fill-plum-950" />
              </div>
            </div>
          </motion.div>

          {/* Sibling Quote & Fun Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6 flex flex-col gap-6"
          >
            <div className="glass-festive p-8 rounded-3xl relative overflow-hidden">
              <div className="text-5xl text-gold-400/30 font-serif absolute -top-2 left-4">
                “
              </div>
              <p className="font-serif text-xl sm:text-2xl text-amber-100 font-medium leading-relaxed italic relative z-10 pt-4 mb-4">
                {content.sisterIntro.quote}
              </p>
              <div className="flex items-center gap-2 text-rose-300 font-cursive text-2xl">
                <Heart size={20} className="fill-rose-400 text-rose-400" />
                <span>Always my favorite person</span>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2.5">
              {content.sisterIntro.badges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border backdrop-blur-md shadow-md ${badge.color}`}
                >
                  {badge.text}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
