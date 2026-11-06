import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface Particle {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  angle: number;
}

export const ParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    const particleCount = 70;
    let particles: Particle[] = [];

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      // Re-seed particles within boundaries if empty
      if (particles.length === 0) {
        particles = Array.from({ length: particleCount }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 0.5,
          speedY: Math.random() * 0.6 + 0.2,
          angle: Math.random() * Math.PI * 2
        }));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let isDocumentVisible = !document.hidden;
    const handleVisibilityChange = () => {
      isDocumentVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (isDocumentVisible) {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.y -= p.speedY;
          p.angle += 0.02;
          p.x += Math.sin(p.angle) * 0.4;

          // Wrap around bottom
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }

          const greenVal = Math.floor(120 + p.radius * 40);
          const alphaVal = 0.35 + p.radius / 5;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, ${greenVal}, 40, ${alphaVal})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      id="em"
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.6
      }}
    />
  );
};

