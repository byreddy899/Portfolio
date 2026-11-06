import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './About.css';

export const About: React.FC = () => {
  const { aboutData } = portfolioData;

  return (
    <section id="about" className="sec" aria-label="About Basireddy Yashwanth Reddy">
      <Container>
        {/* Section Heading & Author Identity */}
        <h2 className="big rv">
          {aboutData.heading}
        </h2>

        <div className="about-name rv">
          {aboutData.name}
        </div>

        {/* Main Introduction Paragraphs */}
        <div className="about-intro-grid rv">
          {aboutData.introParagraphs.map((paragraph, idx) => (
            <p key={idx} className="about-intro-p">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Education Timeline / Editorial Layout */}
        <div className="about-edu-section rv">
          <div className="about-section-label">
            Education &amp; Academic Background
          </div>

          <div className="about-edu-grid">
            {aboutData.education.map((item, idx) => (
              <div key={idx} className="about-edu-card">
                <div className="about-edu-metric">{item.metric}</div>
                <h3 className="about-edu-degree">{item.degree}</h3>
                <p className="about-edu-inst">{item.institution}</p>
                <div className="about-edu-meta">
                  {item.period} · {item.score}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expressive Typography Interests */}
        <div className="about-interests-section rv">
          <div className="about-section-label">
            Core Areas of Interest &amp; Exploration
          </div>

          <div className="about-interests-cloud" aria-label="Interests Cloud">
            {aboutData.interests.map((interest, idx) => (
              <React.Fragment key={interest}>
                <span className="interest-item" data-peek={interest.split(' ')[0]}>
                  {interest}
                </span>
                {idx < aboutData.interests.length - 1 && (
                  <span className="interest-sep" aria-hidden="true">
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Personal Details & Mindset */}
        <div className="about-personal-grid rv">
          <div className="about-personal-block">
            <b>Location &amp; Languages</b>
            <span>
              {aboutData.personal.location} · {aboutData.personal.languages}
            </span>
          </div>

          <div className="about-personal-block">
            <b>Perspective &amp; Mindset</b>
            <p className="about-philosophy">
              "{aboutData.personal.philosophy}"
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
