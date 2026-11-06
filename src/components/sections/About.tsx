import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './About.css';

export const About: React.FC = () => {
  const { identity, stats } = portfolioData;

  return (
    <section id="about" className="sec" aria-label="About Basireddy Yashwanth Reddy">
      <Container>
        {/* Section Heading */}
        <h2 className="big rv">About</h2>

        {/* Academic Highlights & Metrics Grid */}
        <div className="about-stats rv">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-item">
              <b>{stat.value}</b>
              <span className="sm">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="about-narrative">
          <p className="about-editorial rv">
            {identity.aboutSummary}
          </p>
          <p className="about-bio rv">
            {identity.educationSummary}
          </p>
        </div>
      </Container>
    </section>
  );
};
