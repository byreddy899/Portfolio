import React, { useEffect, useRef } from 'react';
import { NavItem } from '../../types';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavItem[];
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose, items }) => {
  const navRef = useRef<HTMLElement | null>(null);

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <nav
      id="menu"
      ref={navRef}
      className={isOpen ? 'open' : ''}
      aria-label="Portfolio Sections"
      aria-hidden={!isOpen}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 55,
        backgroundColor: '#0b0b0f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 clamp(20px, 6vw, 90px)',
        clipPath: isOpen
          ? 'circle(150% at calc(100% - 60px) 40px)'
          : 'circle(0 at calc(100% - 60px) 40px)',
        transition: 'clip-path 0.8s cubic-bezier(0.7, 0, 0.2, 1)',
        visibility: isOpen ? 'visible' : 'hidden'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(8px, 1.5vh, 20px)' }}>
        {items.map((item) => (
          <a
            key={item.id}
            href={item.href}
            onClick={onClose}
            className="menu-link"
            style={{
              fontFamily: 'var(--sans)',
              fontWeight: 900,
              fontSize: 'clamp(28px, 6.2vw, 72px)',
              lineHeight: 1.08,
              fontStretch: '125%',
              textTransform: 'uppercase',
              textDecoration: 'none',
              color: 'var(--ink)',
              transition: 'transform 0.35s ease, color 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              width: 'fit-content'
            }}
          >
            <span className="dot" aria-hidden="true">•&nbsp;</span>
            {item.label}
          </a>
        ))}
      </div>
      <style>{`
        .menu-link .dot {
          color: var(--fire);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: inline-block;
          margin-right: 4px;
        }
        .menu-link:hover {
          transform: translateX(18px);
          color: var(--gold) !important;
        }
        .menu-link:hover .dot {
          opacity: 1;
        }
      `}</style>
    </nav>
  );
};
