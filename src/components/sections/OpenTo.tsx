import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './OpenTo.css';

export const OpenTo: React.FC = () => {
  const { openToData } = portfolioData;

  return (
    <section id="opento" className="sec" aria-label="Open To Career Opportunities">
      <Container>
        {/* Bold Section Heading */}
        <h2 className="big rv">OPEN TO</h2>

        {/* Short Introductory Statement */}
        <p className="ser open-to-intro rv">
          {openToData.intro}
        </p>

        {/* Career Roles Separator List */}
        <div className="open-to-list" id="roles">
          {openToData.roles.map((role) => (
            <div
              key={role.id}
              className="row open-to-row rv"
              data-peek={role.peekLabel}
            >
              <button
                type="button"
                className="open-to-btn"
                aria-label={`${role.id} — ${role.title}`}
              >
                <div className="open-to-left">
                  <span className="open-to-num">{role.id} —</span>
                  <h3>{role.title}</h3>
                </div>
                <span className="open-to-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Supporting Content: Areas of Interest & Closing Line */}
        <div className="open-to-supporting rv">
          <div
            className="sm"
            style={{
              color: 'var(--mute)',
              marginBottom: '18px',
              letterSpacing: '0.14em'
            }}
          >
            INTERESTED IN
          </div>

          <div className="open-to-tags" aria-label="Areas of Interest">
            {openToData.interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>

          <p className="ser open-to-closing">
            "{openToData.closing}"
          </p>
        </div>
      </Container>
    </section>
  );
};
