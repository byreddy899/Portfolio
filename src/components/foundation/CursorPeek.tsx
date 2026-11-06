import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const CursorPeek: React.FC = () => {
  const peekRef = useRef<HTMLDivElement | null>(null);
  const [activeText, setActiveText] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Only initialize on devices that support hover pointer and no reduced motion
    if (prefersReducedMotion || window.matchMedia('(hover: none)').matches) {
      return;
    }

    const peekEl = peekRef.current;
    if (!peekEl) return;

    let posX = window.innerWidth / 2;
    let posY = window.innerHeight / 2;
    let targetX = posX;
    let targetY = posY;
    let activeState = false;
    let rafId: number;

    const handlePointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = (e.target as HTMLElement | null)?.closest?.('[data-peek]') as HTMLElement | null;
      if (target && target.dataset.peek) {
        activeState = true;
        setIsActive(true);
        setActiveText(target.dataset.peek);
      } else {
        activeState = false;
        setIsActive(false);
      }
    };

    const animate = () => {
      posX += (targetX - posX) * 0.14;
      posY += (targetY - posY) * 0.14;

      if (peekEl) {
        const scale = activeState ? 1 : 0;
        peekEl.style.transform = `translate3d(${posX}px, ${posY}px, 0) scale(${scale})`;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <div
      ref={peekRef}
      id="peek"
      className={isActive ? 'on' : ''}
      aria-hidden="true"
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '150px',
        height: '150px',
        marginTop: '-75px',
        marginLeft: '-75px',
        borderRadius: '50%',
        zIndex: 40,
        pointerEvents: 'none',
        background: 'radial-gradient(circle, #000 0 15%, #ffd35a 16% 27%, #ff6a10 46%, #8a1c00 66%, transparent 69%)',
        display: 'grid',
        placeItems: 'end center',
        font: '700 11px var(--sans)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: '#f3efe6',
        paddingBottom: '20px',
        willChange: 'transform',
        transition: 'opacity 0.25s ease'
      }}
    >
      {activeText}
    </div>
  );
};

