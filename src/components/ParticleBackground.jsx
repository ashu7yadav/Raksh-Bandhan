import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle types: Gold Sparkles, Tiny Hearts, Petals
    const particles = [];
    const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3 + 1.5;
        this.speedY = Math.random() * -0.6 - 0.2; // Float upwards
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.type = Math.random() > 0.65 ? 'heart' : 'sparkle';
        this.alpha = Math.random() * 0.6 + 0.2;
        this.color = Math.random() > 0.4 ? '#d4af37' : '#f472b6'; // Gold or Soft Rose
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(this.y * 0.01) * 0.2;
        this.rotation += this.rotSpeed;

        if (this.y < -20) {
          this.y = height + 20;
          this.x = Math.random() * width;
        }
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.alpha;

        if (this.type === 'heart') {
          ctx.fillStyle = this.color;
          const s = this.size * 1.5;
          ctx.beginPath();
          ctx.moveTo(0, s / 4);
          ctx.quadraticCurveTo(0, 0, s / 4, 0);
          ctx.quadraticCurveTo(s / 2, 0, s / 2, s / 4);
          ctx.quadraticCurveTo(s / 2, 0, (3 * s) / 4, 0);
          ctx.quadraticCurveTo(s, 0, s, s / 4);
          ctx.quadraticCurveTo(s, s / 2, (3 * s) / 4, (3 * s) / 4);
          ctx.lineTo(s / 2, s);
          ctx.lineTo(s / 4, (3 * s) / 4);
          ctx.quadraticCurveTo(0, s / 2, 0, s / 4);
          ctx.fill();
        } else {
          // Sparkling Golden Star / Circle
          ctx.fillStyle = this.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#d4af37';
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
}
