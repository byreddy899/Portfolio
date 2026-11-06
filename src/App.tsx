import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/foundation/Navbar';
import { FullscreenMenu } from './components/foundation/FullscreenMenu';
import { ScrollProgressBar } from './components/foundation/ScrollProgressBar';
import { ParticleCanvas } from './components/foundation/ParticleCanvas';
import { CursorPeek } from './components/foundation/CursorPeek';
import { Container } from './components/foundation/Container';
import { TheLeap } from './components/sections/TheLeap';
import { useIntersectionReveal } from './hooks/useIntersectionReveal';

export const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { identity, navigation } = portfolioData;

  // Initialize intersection observer for reveal classes
  useIntersectionReveal('.rv');

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 1. Global Interactive Foundation Layer */}
      <ScrollProgressBar />
      <ParticleCanvas />
      <CursorPeek />

      {/* 2. Top Navigation & Fullscreen Menu */}
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

      {/* 3. Section 1: The Leap (Full-screen Cinematic Hero Experience) */}
      <TheLeap />

      {/* 4. Section 1 Completion Anchor & Boundary */}
      <main style={{ position: 'relative', zIndex: 2, background: 'var(--bg)' }}>
        <section
          style={{
            padding: '80px 0 100px',
            borderTop: '1px solid var(--line-light)'
          }}
        >
          <Container>
            <div className="rv on" style={{ maxWidth: '800px' }}>
              <div
                className="sm"
                style={{
                  color: 'var(--gold)',
                  marginBottom: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--fire)',
                    boxShadow: '0 0 10px var(--fire)'
                  }}
                />
                Section 1 Verified · "The Leap"
              </div>

              <h2
                className="big"
                style={{
                  margin: '0 0 16px',
                  fontSize: 'clamp(32px, 6vw, 72px)'
                }}
              >
                The Fall Concludes
              </h2>

              <p
                style={{
                  fontSize: 'clamp(16px, 1.8vw, 19px)',
                  lineHeight: 1.6,
                  color: '#cfc8ba',
                  marginBottom: '28px'
                }}
              >
                The opening scroll-controlled descent of "The Leap" is complete. As you scroll down from the top,
                the figure tumbles through the golden light beam, typography dissolves, and the radiant warm climax
                lights the threshold.
              </p>

              <div className="note" style={{ maxWidth: '620px' }}>
                Awaiting your evaluation of Section 1 before proceeding to Section 2 ("The Noise").
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 5. Semantic Footer */}
      <footer
        style={{
          background: '#0a0a0a',
          padding: '28px 0 44px',
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
            <span className="sm" style={{ color: 'var(--mute)', textTransform: 'none' }}>
              Section 1: The Leap
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default App;
