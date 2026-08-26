import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Heart, Music, Image as ImageIcon, BookOpen, Gift } from 'lucide-react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#hero', icon: Heart },
    { label: 'Story', href: '#story', icon: BookOpen },
    { label: 'Unsaid Words', href: '#unsaid', icon: Sparkles },
    { label: 'Playful', href: '#fun', icon: Sparkles },
    { label: 'Playlist', href: '#soundtrack', icon: Music },
    { label: 'Gallery', href: '#gallery', icon: ImageIcon },
    { label: 'Rakhi', href: '#rakhi', icon: Sparkles },
    { label: 'Surprise', href: '#surprise', icon: Gift },
  ];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-4xl transition-all duration-300 rounded-full ${
          scrolled
            ? 'bg-plum-950/85 backdrop-blur-xl border border-gold-500/40 shadow-2xl shadow-plum-950/80 py-2.5 px-6'
            : 'bg-plum-900/40 backdrop-blur-md border border-gold-500/20 py-3.5 px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo / Title */}
          <a
            href="#hero"
            className="flex items-center gap-2 group cursor-pointer text-decoration-none"
          >
            <span className="text-xl filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]">
              🧵
            </span>
            <span className="font-cursive text-2xl text-gold-300 group-hover:text-gold-200 transition-colors">
              For My Sister ❤️
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-amber-100/80 hover:text-gold-300 hover:bg-gold-500/10 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gold-300 p-1.5 rounded-full hover:bg-gold-500/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-plum-950/95 backdrop-blur-2xl md:hidden pt-24 px-6 flex flex-col justify-between pb-12 animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-4 py-3 px-5 rounded-2xl bg-plum-900/50 border border-gold-500/20 text-gold-200 text-lg font-serif hover:bg-gold-500/20 transition-all"
                >
                  <Icon size={20} className="text-gold-400" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="text-center text-xs text-gold-400/60 font-serif">
            Happy Raksha Bandhan 2026 ❤️
          </div>
        </div>
      )}
    </>
  );
}
