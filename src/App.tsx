import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/foundation/Navbar';
import { FullscreenMenu } from './components/foundation/FullscreenMenu';
import { ScrollProgressBar } from './components/foundation/ScrollProgressBar';
import { ParticleCanvas } from './components/foundation/ParticleCanvas';
import { CursorPeek } from './components/foundation/CursorPeek';
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

      {/* 3. Section 1: The Leap (Hero Section) */}
      <TheLeap />

      {/* 4. Section 2: The Noise (Skills Section) */}
      <TheNoise />

      {/* 5. Section 3: Selected Work (Projects Section) */}
      <SelectedWork />

      {/* 6. Section 4: Open To (Career Opportunities Section) */}
      <OpenTo />

      {/* 7. Section 5: Rise (Scroll-driven Ascent Scene) */}
      <Rise />

      {/* 8. Section 6: About (Personal Profile Section) */}
      <About />

      {/* 9. Section 7: The Portal (Architectural Gate & Credentials) */}
      <ThePortal />

      {/* 10. Section 8: Contact (Vibrant Yellow Climax & Editorial Footer) */}
      <Contact />
    </>
  );
};

export default App;
