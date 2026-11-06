import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/foundation/Navbar';
import { FullscreenMenu } from './components/foundation/FullscreenMenu';
import { ScrollProgressBar } from './components/foundation/ScrollProgressBar';
import { ParticleCanvas } from './components/foundation/ParticleCanvas';
import { CursorPeek } from './components/foundation/CursorPeek';
import { Container } from './components/foundation/Container';
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

      {/* 3. Foundation Stage (Placeholder ready for Section-by-Section build) */}
      <main style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <section
          style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: 'calc(var(--header-height) + 40px)',
            paddingBottom: '60px'
          }}
        >
          <Container>
            <div className="rv on" style={{ maxWidth: '900px' }}>
              <div
                className="sm"
                style={{
                  color: 'var(--gold)',
                  marginBottom: '16px',
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
                Phase 1 Foundation Initialized · Ready For Section Build
              </div>

              <h1 className="big" style={{ margin: '0 0 24px' }}>
                {identity.shortName}
              </h1>

              <div
                className="ser"
                style={{
                  color: 'var(--gold)',
                  marginBottom: '20px',
                  fontSize: 'clamp(24px, 3.5vw, 42px)'
                }}
              >
                {identity.name}
              </div>

              <p
                style={{
                  fontSize: 'clamp(17px, 2vw, 22px)',
                  lineHeight: 1.5,
                  color: '#cfc8ba',
                  maxWidth: '720px',
                  marginBottom: '40px'
                }}
              >
                {identity.bioStatement}
              </p>

              {/* Foundation Token Verification Palette */}
              <div
                style={{
                  padding: '28px',
                  border: '1px solid var(--line)',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  backdropFilter: 'blur(8px)',
                  marginBottom: '36px'
                }}
              >
                <div className="sm" style={{ marginBottom: '16px', color: 'var(--mute)' }}>
                  Active Design Tokens & Foundations
                </div>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '12px',
                    marginBottom: '20px'
                  }}
                >
                  <div
                    data-peek="Fire"
                    style={{
                      padding: '12px',
                      background: 'var(--fire)',
                      color: '#fff',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'default'
                    }}
                  >
                    --fire (#ff5a0a)
                  </div>
                  <div
                    data-peek="Gold"
                    style={{
                      padding: '12px',
                      background: 'var(--gold)',
                      color: '#000',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'default'
                    }}
                  >
                    --gold (#ffb52e)
                  </div>
                  <div
                    data-peek="Yellow"
                    style={{
                      padding: '12px',
                      background: 'var(--yel)',
                      color: '#000',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'default'
                    }}
                  >
                    --yel (#f5e642)
                  </div>
                  <div
                    data-peek="Blue"
                    style={{
                      padding: '12px',
                      background: 'var(--blue)',
                      color: '#fff',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'default'
                    }}
                  >
                    --blue (#4c6fff)
                  </div>
                  <div
                    data-peek="Ink"
                    style={{
                      padding: '12px',
                      background: 'var(--ink)',
                      color: '#07070a',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'default'
                    }}
                  >
                    --ink (#f3efe6)
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '10px',
                    alignItems: 'center'
                  }}
                >
                  <span className="tag">Archivo (Display & Sans)</span>
                  <span className="tag">Instrument Serif (Italic)</span>
                  <span className="tag">60 FPS Particle Canvas</span>
                  <span className="tag">Interactive Cursor Peek</span>
                  <span className="tag">Smooth Scroll Engine</span>
                  <span className="tag">Safe-Area Responsive</span>
                </div>
              </div>

              <div className="note" style={{ maxWidth: '640px' }}>
                Architecture, global styling system, design tokens, typography, and interactive foundation components are primed. Awaiting instruction to begin Section 1: "The Leap" opening sequence.
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* 4. Semantic Footer */}
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
            <span className="sm" style={{ color: 'var(--mute)', textTransform: 'none' }}>
              Phase 1 · Foundation Ready
            </span>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default App;
