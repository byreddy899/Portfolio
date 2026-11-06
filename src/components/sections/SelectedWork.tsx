import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './SelectedWork.css';

export const SelectedWork: React.FC = () => {
  const { projects } = portfolioData;

  // Manage open state for each project row (can toggle multiple)
  const [openProjects, setOpenProjects] = useState<Record<string, boolean>>({
    'career-bridge-ai': false,
    'recruit-ai': false
  });

  const toggleProject = (id: string) => {
    setOpenProjects((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="work" className="sec" aria-label="Selected Work">
      <Container>
        {/* Oversized Section Heading */}
        <h2 className="big rv">Selected work</h2>

        {/* Project List with Thin Separators & Smooth Accordions */}
        <div id="plist" className="plist rv">
          {projects.map((p) => {
            const isOpen = !!openProjects[p.id];
            const panelId = `panel-${p.id}`;

            return (
              <div
                key={p.id}
                className={`row ${isOpen ? 'open' : ''}`}
                data-peek={isOpen ? 'Close' : 'Open'}
              >
                {/* Accordion Row Header Button */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(p.id)}
                  className="row-toggle-btn"
                >
                  <div className="row-header-content">
                    <h3 className="project-title">{p.title}</h3>
                    <div className="project-category sm">{p.subtitle}</div>
                  </div>
                  <span
                    className={`pl ${isOpen ? 'active' : ''}`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Accordion Expandable Panel */}
                <div
                  className="bd"
                  id={panelId}
                  role="region"
                  aria-label={`${p.title} Details`}
                >
                  <div>
                    <div className="in">
                      {/* Left Column: Description, Features & Collaborative Attribution */}
                      <div className="project-main-info">
                        <p className="desc">{p.description}</p>
                        <ul className="project-features">
                          {p.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        {p.note && <p className="note">{p.note}</p>}
                      </div>

                      {/* Right Column: Technology Tags & View Repository Button */}
                      <div className="project-meta-info">
                        <div className="tags-wrap" aria-label="Technologies Used">
                          {p.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="repo-link-wrap">
                          <a
                            className="btn"
                            href={p.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${p.title} repository on GitHub (opens in new tab)`}
                          >
                            View repository
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subnote */}
        <p className="ser rv" style={{ marginTop: '40px', color: 'var(--mute)' }}>
          More projects are on the way. This space stays honest until they ship.
        </p>
      </Container>
    </section>
  );
};
