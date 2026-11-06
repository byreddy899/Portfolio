import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './TheNoise.css';

interface MarqueeRowConfig {
  id: string;
  category: string;
  words: string[];
  direction: 'left' | 'right';
}

export const TheNoise: React.FC = () => {
  const { technologies } = portfolioData;

  const rowConfigs: MarqueeRowConfig[] = [
    {
      id: 'row-languages',
      category: 'Programming Languages',
      words: technologies.marqueeRows[0], // Python, Java, C, JavaScript, SQL
      direction: 'left'
    },
    {
      id: 'row-web',
      category: 'Web Development',
      words: technologies.marqueeRows[1], // Spring Boot, HTML, CSS, MySQL
      direction: 'right'
    },
    {
      id: 'row-aiml',
      category: 'AI, ML & Data Science',
      words: technologies.marqueeRows[2], // Machine Learning, NumPy, Pandas, Scikit-learn, Matplotlib
      direction: 'left'
    }
  ];

  return (
    <section id="noise" aria-label="Skills & Technologies">
      {/* Editorial Section Introduction */}
      <Container>
        <p className="ser noise-intro rv" style={{ fontSize: 'clamp(24px, 3.4vw, 40px)' }}>
          Everything I’ve learned, all at once.
        </p>
      </Container>

      {/* Horizontally moving marquee rows */}
      <div className="mq-wrapper" aria-label="Technology Marquees">
        {rowConfigs.map((row) => {
          // Create two identical halves for a mathematically seamless 50% keyframe loop
          const halfUnit = Array(4).fill(row.words).flat();
          const fullLoop = [...halfUnit, ...halfUnit];

          const trackClass =
            row.direction === 'left' ? 'mq-track-left' : 'mq-track-right';

          return (
            <div
              key={row.id}
              className="mq-row"
              aria-label={row.category}
              data-peek={row.category.split(' ')[0]}
            >
              <div className={`mq-track ${trackClass}`}>
                {fullLoop.map((word, index) => (
                  <span key={`${row.id}-${index}`} className="mq-item">
                    {word}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Central Glowing Orb & Circular Rotating Text */}
      <div className="orbwrap rv">
        <div className="orb" aria-hidden="true" />
        <svg
          className="ring"
          viewBox="0 0 300 300"
          aria-label="Core Engineering Fundamentals"
        >
          <defs>
            <path
              id="orbitPath"
              d="M150 150 m-122 0 a122 122 0 1 1 244 0 a122 122 0 1 1 -244 0"
            />
          </defs>
          <text>
            <textPath href="#orbitPath">
              {technologies.orbitRingText}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Tools and Additional Exposure Subline */}
      <Container>
        <p className="sm noise-subline rv">
          Also: {technologies.additionalSkills.join(' · ')}
        </p>
      </Container>
    </section>
  );
};
