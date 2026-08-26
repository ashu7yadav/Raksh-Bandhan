import React, { useState } from 'react';
import { Music, Volume2 } from 'lucide-react';

export default function FloatingMusicButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const scrollToSoundtrack = () => {
    const el = document.getElementById('soundtrack');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 bg-plum-900/90 text-gold-200 text-xs px-3.5 py-1.5 rounded-full border border-gold-500/40 shadow-xl backdrop-blur-md whitespace-nowrap animate-bounce">
          Our Playlist 🎵
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={scrollToSoundtrack}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 p-3.5 rounded-full bg-gradient-to-tr from-burgundy-700 via-plum-700 to-gold-600 text-gold-100 border border-gold-400/50 shadow-2xl shadow-gold-500/20 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        aria-label="Scroll to Spotify Soundtrack"
      >
        <Music size={22} className="group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Ambient Ring Pulse */}
        <span className="absolute inset-0 rounded-full border border-gold-400/60 animate-ping pointer-events-none opacity-40" />
      </button>
    </div>
  );
}
