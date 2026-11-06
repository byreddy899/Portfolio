import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './ThePortal.css';

export const ThePortal: React.FC = () => {
  const { internship, certifications, identity } = portfolioData;

  const contactLinks = [
    {
      label: 'Email',
      value: 'byreddy899@gmail.com',
      href: 'mailto:byreddy899@gmail.com',
      target: undefined,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      )
    },
    {
      label: 'GitHub',
      value: 'github.com/byreddy899',
      href: 'https://github.com/byreddy899',
      target: '_blank',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      )
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/basireddy-yashwanth-reddy-575b1a3a4/',
      href: 'https://www.linkedin.com/in/basireddy-yashwanth-reddy-575b1a3a4/',
      target: '_blank',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.95 0-1.72.77-1.72 1.72s.77 1.72 1.72 1.72 1.72-.77 1.72-1.72c0-.95-.77-1.72-1.72-1.72z" />
        </svg>
      )
    }
  ];

  return (
    <section id="portal" className="sec" aria-label="The Portal — Professional Profile & Experience">
      <Container>
        {/* Section Heading */}
        <h2 className="big rv">The portal</h2>

        <div className="portal-grid">
          {/* Left Column: Architectural Glowing Arch Gate & Profile Info */}
          <div className="portal-profile-col rv">
            <div className="gate" aria-label="Portrait of Basireddy Yashwanth Reddy">
              <img
                src="/profile.jpg"
                alt="Basireddy Yashwanth Reddy"
                className="gate-img"
                loading="lazy"
              />
              <div className="gate-vignette" />
              <div className="gate-badge">
                <span className="gate-badge-dot" />
                <span>Basireddy Yashwanth Reddy</span>
              </div>
            </div>

            {/* Profile Metadata & Contact Access */}
            <div className="portal-profile-meta">
              <h3 className="portal-profile-name">{identity.name}</h3>
              <p className="portal-profile-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="loc-icon" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Hyderabad, Telangana, India
              </p>

              <div className="portal-links" aria-label="Direct professional channels">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel={link.target ? 'noopener noreferrer' : undefined}
                    className="portal-link-item"
                    data-peek={link.label}
                  >
                    <span className="portal-link-left">
                      <span className="portal-link-icon">{link.icon}</span>
                      <span className="portal-link-label">{link.label}</span>
                    </span>
                    <span className="portal-link-arrow" aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Featured Internship & Certifications List */}
          <div className="portal-credentials-col rv">
            {/* Featured Internship Card */}
            <div className="portal-card" data-peek="Internship">
              <div className="portal-card-header">
                <span className="portal-badge">
                  {internship.program || 'Virtual Internship Program'}
                </span>
                <span className="portal-duration">{internship.period}</span>
              </div>

              <h3 className="portal-role-title">
                {internship.role} <span className="portal-company-sep">–</span> <span className="portal-company">{internship.company}</span>
              </h3>

              <p className="portal-card-desc">
                {internship.details}
              </p>

              <div className="portal-card-meta">
                <div className="meta-item">
                  <span className="meta-label">Issued:</span> {internship.certificateDate || '23 September 2026'}
                </div>
                <div className="meta-item">
                  <span className="meta-label">Domain:</span> Data Science
                </div>
              </div>
            </div>

            {/* Certifications & Simulations Timeline List */}
            <div className="cert-section">
              <div className="cert-header sm">
                <span>Certifications & Job Simulations</span>
                <span>Timeline</span>
              </div>

              <div className="cert-list" id="clist">
                {certifications.map((cert, index) => (
                  <div key={index} className="cert-item" data-peek="Verified">
                    <div className="cert-main">
                      <div className="cert-number">0{index + 1}</div>
                      <div className="cert-text">
                        <b>{cert.title}</b>
                        {cert.issuer && <small>{cert.issuer}</small>}
                      </div>
                    </div>
                    {cert.date && <i className="cert-date">{cert.date}</i>}
                  </div>
                ))}
              </div>
            </div>

            {/* Credential Progression Note */}
            <p className="note portal-note">
              {internship.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
