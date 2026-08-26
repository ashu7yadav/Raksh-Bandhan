import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-hover') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        className="fixed pointer-events-none z-50 rounded-full transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '48px' : '26px',
          height: isHovered ? '48px' : '26px',
          border: isHovered ? '2px solid #eedf8a' : '1.5px solid rgba(212, 175, 55, 0.6)',
          backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.15)' : 'transparent',
          boxShadow: isHovered ? '0 0 20px rgba(212, 175, 55, 0.6)' : '0 0 10px rgba(212, 175, 55, 0.3)',
        }}
      />
      {/* Inner Sparkle Dot */}
      <div
        className="fixed pointer-events-none z-50 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '6px',
          height: '6px',
          backgroundColor: '#f5ecb8',
          boxShadow: '0 0 8px #d4af37',
        }}
      />
    </>
  );
}
