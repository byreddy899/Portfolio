import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './OpenTo.css';

export const OpenTo: React.FC = () => {
  const { careerRoles } = portfolioData;

  return (
    <section id="opento" className="sec" aria-label="Career Opportunities">
      <Container>
        <h2 className="big rv">Open to</h2>

        <div className="open-to-list" id="roles">
          {careerRoles.map((role) => (
            <div
              key={role.title}
              className="row open-to-row rv"
              data-peek={role.peekLabel}
            >
              <button
                type="button"
                className="open-to-btn"
                tabIndex={0}
                aria-label={`${role.title}: ${role.subtitle}`}
              >
                <h3>{role.title}</h3>
                <small>{role.subtitle}</small>
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
