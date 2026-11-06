import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/foundation/Navbar';
import { FullscreenMenu } from './components/foundation/FullscreenMenu';
import { ScrollProgressBar } from './components/foundation/ScrollProgressBar';
import { ParticleCanvas } from './components/foundation/ParticleCanvas';
import { CursorPeek } from './components/foundation/CursorPeek';
import { Container } from './components/foundation/Container';
import { TheLeap } from './components/sections/TheLeap';
import { TheNoise } from './components/sections/TheNoise';
import { SelectedWork } from './components/sections/SelectedWork';
import { OpenTo } from './components/sections/OpenTo';
import { Rise } from './components/sections/Rise';
import { About } from './components/sections/About';
import { ThePortal } from './components/sections/ThePortal';
import { Contact } from './components/sections/Contact';
import { useIntersectionReveal } from './hooks/useIntersectionReveal';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { identity, navigation } = portfolioData;

  // Initialize intersection observer for scroll-reveal (.rv) animations
  useIntersectionReveal('.rv');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 1. Global Interactive Foundation Layers */}
      <ScrollProgressBar />
      <ParticleCanvas />
      <CursorPeek />

      {/* 2. Fixed Top Navigation & Fullscreen Animated Menu */}
      <Navbar
        authorName={identity.shortName}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      />
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        items={navigation}
      />

      {/* 3. Section 1: The Leap (Scroll-controlled Opening Sequence) */}
      <TheLeap />

      {/* 4. Main Portfolio Narrative Flow */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* Section 2: The Noise (Technology Marquees & Solar Orb) */}
        <TheNoise />

        {/* Section 3: Selected Work (Expandable Project Accordions) */}
        <SelectedWork />

        {/* Section 4: Open To (Career Roles & Interests) */}
        <OpenTo />

        {/* Section 5: Rise (Scroll-driven Ascent Scene) */}
        <Rise />

        {/* Section 6: About (Academic Highlights & Narrative) */}
        <About />

        {/* Section 7: The Portal (Architectural Gate & Credentials) */}
        <ThePortal />

        {/* Section 8: Contact (High-Contrast Electric Callout & Channels) */}
        <Contact />
      </main>

      {/* 5. Semantic Footer */}
      <footer
        style={{
          background: '#0a0a0a',
          padding: '30px 0 50px',
          color: 'var(--mute)',
          fontSize: '13px',
          position: 'relative',
          zIndex: 2,
          borderTop: '1px solid var(--line-light)'
        }}
      >
        <Container>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <span>© 2026 Basireddy Yashwanth Reddy · Hyderabad, Telangana</span>
            <a
              href="#leap"
              style={{
                color: 'var(--gold)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              Back to Top ↑
            </a>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default App;
