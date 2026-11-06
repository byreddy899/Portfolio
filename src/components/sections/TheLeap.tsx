import React, { useEffect, useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './TheLeap.css';

const clamp = (val: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, val));

export const TheLeap: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const beamRef = useRef<HTMLDivElement | null>(null);
  const fallRef = useRef<HTMLDivElement | null>(null);
  const goRef = useRef<HTMLDivElement | null>(null);
  const figRef = useRef<SVGSVGElement | null>(null);
  const flashRef = useRef<HTMLDivElement | null>(null);
  const hintRef = useRef<HTMLDivElement | null>(null);

  const prefersReducedMotion = useReducedMotion();
  const { identity } = portfolioData;

  useEffect(() => {
    if (prefersReducedMotion) return;

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

      // 1. Stick Figure: Falls vertically and tumbles along the golden light beam
      if (figRef.current) {
        const translateY = progress * 72;
        const rotate = -30 + progress * 620;
        figRef.current.style.transform = `translate3d(0, ${translateY}vh, 0) rotate(${rotate}deg)`;
      }

      // 2. Outlined "FALL": Moves left out of view gradually
      if (fallRef.current) {
        const fallOpacity = Math.max(0, 1 - progress * 1.8);
        const fallTranslateX = -progress * 35;
        fallRef.current.style.opacity = `${fallOpacity}`;
        fallRef.current.style.transform = `translate3d(${fallTranslateX}vw, -50%, 0)`;
      }

      // 3. Solid "LET GO": Moves towards the right and fades gradually
      if (goRef.current) {
        const goOpacity = Math.max(0, 1 - progress * 1.8);
        const goTranslateX = progress * 35;
        goRef.current.style.opacity = `${goOpacity}`;
        goRef.current.style.transform = `translate3d(${goTranslateX}vw, 0, 0)`;
      }

      // 4. Golden Light Beam: Intensifies brightness as you descend
      if (beamRef.current) {
        const beamOpacity = 0.55 + progress * 0.45;
        beamRef.current.style.opacity = `${beamOpacity}`;
      }

      // 5. Climax Radial Flash: Triggers near the end of the section (progress > 0.84)
      if (flashRef.current) {
        const flashOpacity = clamp((progress - 0.84) / 0.16, 0, 1);
        flashRef.current.style.opacity = `${flashOpacity}`;
      }

      // 6. Scroll Indicator: Fades out promptly when user initiates scroll
      if (hintRef.current) {
        const hintOpacity = clamp(1 - progress * 5, 0, 1);
        hintRef.current.style.opacity = `${hintOpacity}`;
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
    <header id="leap" ref={containerRef} aria-label="The Leap Opening Sequence">
      <div className="leap-stick">
        {/* Conic & Radial Golden Light Beam */}
        <div ref={beamRef} className="leap-beam" id="beam" aria-hidden="true" />

        {/* Oversized Outlined "FALL" */}
        <div ref={fallRef} className="leap-fall big" id="fall" aria-hidden="true">
          FALL
        </div>

        {/* Oversized Solid Ivory "LET GO" */}
        <div ref={goRef} className="leap-go big" id="go" aria-hidden="true">
          LET GO
        </div>

        {/* Tumbling Stick Figure SVG */}
        <svg
          ref={figRef}
          id="fig"
          className="leap-fig"
          viewBox="0 0 100 130"
          fill="none"
          stroke="#140900"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="50" cy="16" r="9" fill="#140900" />
          <path d="M50 28 L48 70 M50 36 L22 20 M50 36 L80 52 M48 70 L28 108 M48 70 L74 100" />
        </svg>

        {/* Bottom-left Introduction */}
        <div className="leap-intro">
          <div className="sm" style={{ color: '#ffd58a', letterSpacing: '0.14em' }}>
            {identity.location.toUpperCase()}
          </div>
          <div
            className="ser"
            style={{
              marginTop: '8px',
              color: 'var(--ink)',
              fontSize: 'clamp(24px, 3.2vw, 40px)'
            }}
          >
            {identity.name}
          </div>
          <p>{identity.bioStatement}</p>
        </div>

        {/* Bottom-center Scroll Indicator */}
        <div ref={hintRef} className="sm leap-hint" aria-hidden="true">
          SCROLL TO FALL
        </div>

        {/* Climax Light Flash */}
        <div ref={flashRef} className="leap-flash" id="flash" aria-hidden="true" />
      </div>
    </header>
  );
};
