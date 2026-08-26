import React from 'react';
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Navigation from './components/Navigation';
import FloatingMusicButton from './components/FloatingMusicButton';
import Hero from './components/Hero';
import SisterIntro from './components/SisterIntro';
import Timeline from './components/Timeline';
import UnsaidWords from './components/UnsaidWords';
import FunSister from './components/FunSister';
import SpotifySoundtrack from './components/SpotifySoundtrack';
import Gallery from './components/Gallery';
import InteractiveRakhi from './components/InteractiveRakhi';
import SurpriseGift from './components/SurpriseGift';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0e020d] text-[#faeedd] overflow-hidden">
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Floating Sparkles & Hearts Background */}
      <ParticleBackground />

      {/* Floating Music Action Button */}
      <FloatingMusicButton />

      {/* Floating Top Navigation */}
      <Navigation />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <SisterIntro />
        <Timeline />
        <UnsaidWords />
        <FunSister />
        <SpotifySoundtrack />
        <Gallery />
        <InteractiveRakhi />
        <SurpriseGift />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
