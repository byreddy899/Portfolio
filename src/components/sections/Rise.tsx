import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Rise.css';

const clamp = (val: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, val));

export const Rise: React.FC = () => {
  const { riseStory } = portfolioData;
  const prefersReducedMotion = useReducedMotion();

  const containerRef = useRef<HTMLElement | null>(null);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const figRef = useRef<SVGSVGElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const lineRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      // In reduced motion mode, show the final inspiring statement statically
      lineRefs.current.forEach((el, idx) => {
        if (el) el.classList.toggle('on', idx === 3);
      });
      return;
    }

    let rafId: number;
    let ticking = false;

    const updateScene = () => {
      const container = containerRef.current;
      if (!container) {
        ticking = false;
        return;
      }

      const rect = container.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;
      const progress = scrollableDist > 0 ? clamp(-rect.top / scrollableDist, 0, 1) : 0;

      // 1. Ascending Stick Figure: climbs upward and subtly scales into perspective
      if (figRef.current) {
        const bottomVh = 10 + progress * 62;
        const scale = 1 - progress * 0.22;
        figRef.current.style.bottom = `${bottomVh}vh`;
        figRef.current.style.transform = `scale(${scale})`;
      }

      // 2. Vertical Light Beam: extends upward and intensifies in brightness
      if (pillRef.current) {
        const scaleY = 0.35 + progress * 0.70;
        const glowSpread = Math.floor(40 + progress * 85);
        const glowIntensity = (0.45 + progress * 0.45).toFixed(2);
        pillRef.current.style.transform = `scaleY(${scaleY})`;
        pillRef.current.style.boxShadow = `0 0 ${glowSpread}px 18px rgba(255, 90, 20, ${glowIntensity})`;
      }

      // 3. Four Sequential Storytelling Phrases (revealed at 4 responsive scroll intervals)
      // Phase 0: 0.00 - 0.25 (Opening)
      // Phase 1: 0.25 - 0.50 (Middle)
      // Phase 2: 0.50 - 0.75 (Next)
      // Phase 3: 0.75 - 1.00 (Closing)
      const activeIndex =
        progress < 0.25 ? 0 : progress < 0.5 ? 1 : progress < 0.75 ? 2 : 3;

      lineRefs.current.forEach((el, idx) => {
        if (el) {
          el.classList.toggle('on', idx === activeIndex);
        }
      });

      // 4. Climax Warm Light Transition (responsive threshold progress > 0.80)
      if (flashRef.current) {
        const flashOpacity = clamp((progress - 0.80) / 0.20, 0, 1);
        flashRef.current.style.opacity = `${flashOpacity}`;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(updateScene);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateScene();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <section id="rise" ref={containerRef} aria-label="Rise — The Ascent Sequence">
      <div className="rise-stick">
        {/* Soft Luminous Atmospheric Clouds */}
        <div
          className="rise-cl"
          style={{ width: '60vw', height: '36vh', left: '-10vw', bottom: '-6vh' }}
          aria-hidden="true"
        />
        <div
          className="rise-cl"
          style={{ width: '60vw', height: '40vh', right: '-12vw', bottom: '-8vh' }}
          aria-hidden="true"
        />

        {/* Rising Vertical Beam of Warm Light */}
        <div ref={pillRef} className="rise-pill" id="pill" aria-hidden="true" />

        {/* Ascending Human Stick Figure */}
        <svg
          ref={figRef}
          id="fig2"
          className="rise-fig"
          viewBox="0 0 100 130"
          fill="none"
          stroke="#ffd9c0"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="50" cy="14" r="9" fill="#ffd9c0" />
          <path d="M50 26 L50 74 M50 34 L30 58 M50 34 L70 58 M50 74 L36 118 M50 74 L64 118" />
        </svg>

        {/* Sequential Storytelling Typography with Italic Serif Accent */}
        <div className="rise-lines" id="lines" aria-live="polite">
          {riseStory.map((item, idx) => (
            <p
              key={idx}
              ref={(el) => { lineRefs.current[idx] = el; }}
              className={`rise-line ${idx === 0 ? 'on' : ''}`}
            >
              <span>{item.text}</span>
              <span className="rise-serif-accent">{item.accent}</span>
            </p>
          ))}
        </div>

        {/* Climax Light Transition into Next Section */}
        <div ref={flashRef} className="rise-flash" aria-hidden="true" />
      </div>
    </section>
  );
};
