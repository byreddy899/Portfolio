import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './ThePortal.css';

export const ThePortal: React.FC = () => {
  const { internship, certifications } = portfolioData;

  return (
    <section id="portal" className="sec" aria-label="The Portal — Experience & Credentials">
      <Container>
        {/* Section Heading */}
        <h2 className="big rv">The portal</h2>

        <div className="portal-grid">
          {/* Left Column: Architectural Glowing Arch Gate with YR Monogram */}
          <div className="gate rv" aria-label="Portrait Portal">
            <div className="gate-content">
              <em className="gate-monogram">YR</em>
              <span className="gate-label">Profile photograph goes here</span>
            </div>
          </div>

          {/* Right Column: Featured Internship Card & Certifications */}
          <div className="rv">
            {/* Featured Internship Card */}
            <div className="card portal-card">
              <div className="sm" style={{ color: 'var(--gold)', letterSpacing: '0.12em' }}>
                {internship.period}
              </div>
              <h3>{internship.role}</h3>
              <div className="portal-card-desc">
                <strong>{internship.company}</strong> · {internship.details}
              </div>
            </div>

            {/* Certifications & Simulations List */}
            <div className="cert-list" id="clist">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-item">
                  <div>
                    <b>{cert.title}</b>
                    {cert.issuer && <small>{cert.issuer}</small>}
                  </div>
                  <i>{cert.date || ''}</i>
                </div>
              ))}
            </div>

            {/* Credential Progression Note */}
            <p className="note" style={{ marginTop: '22px' }}>
              {internship.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

