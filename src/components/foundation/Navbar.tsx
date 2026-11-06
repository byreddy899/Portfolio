import React from 'react';

interface NavbarProps {
  authorName: string;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ authorName, isMenuOpen, onToggleMenu }) => {
  return (
    <>
      {/* Background protector for iOS safe area */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: '0 0 auto',
          height: 'env(safe-area-inset-top, 0px)',
          backgroundColor: 'var(--bg)',
          zIndex: 59
        }}
      />
      <header
        id="top"
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          top: 'env(safe-area-inset-top, 0px)',
          zIndex: 60,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '18px clamp(20px, 4vw, 48px)',
          mixBlendMode: 'difference',
          color: '#ffffff',
          pointerEvents: 'auto'
        }}
      >
        <b
          style={{
            fontFamily: 'var(--sans)',
            fontWeight: 800,
            fontSize: '14px',
            letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}
        >
          {authorName}
        </b>
        <button
          id="mb"
          type="button"
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="menu"
          style={{
            all: 'unset',
            cursor: 'pointer',
            fontFamily: 'var(--sans)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            border: '1px solid #ffffff',
            padding: '9px 20px',
            borderRadius: '99px',
            transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease'
          }}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </header>
    </>
  );
};
