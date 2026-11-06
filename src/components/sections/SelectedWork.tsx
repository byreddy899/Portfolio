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
        <h2 className="big rv">Selected work</h2>

        <div id="plist" className="plist">
          {projects.map((p) => {
            const isOpen = !!openProjects[p.id];
            const panelId = `panel-${p.id}`;

            return (
              <div
                key={p.id}
                className={`row rv ${isOpen ? 'open' : ''}`}
                data-peek={isOpen ? 'Close' : 'Open'}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleProject(p.id)}
                >
                  <div>
                    <h3>{p.title}</h3>
                    <div className="sm" style={{ marginTop: '10px' }}>
                      {p.subtitle}
                    </div>
                  </div>
                  <span className="pl" aria-hidden="true">
                    +
                  </span>
                </button>

                <div
                  className="bd"
                  id={panelId}
                  role="region"
                  aria-label={`${p.title} Details`}
                >
                  <div>
                    <div className="in">
                      {/* Left Column: Description & Highlights */}
                      <div>
                        <p className="desc">{p.description}</p>
                        <ul>
                          {p.highlights.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                        {p.note && <p className="note">{p.note}</p>}
                      </div>

                      {/* Right Column: Tags & Repo Link */}
                      <div>
                        <div className="tags-wrap">
                          {p.tags.map((tag) => (
                            <span key={tag} className="tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p style={{ margin: '14px 0 0' }}>
                          <a
                            className="btn"
                            href={p.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View repository
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Subnote */}
        <p className="ser rv" style={{ marginTop: '36px', color: 'var(--mute)' }}>
          More projects are on the way. This space stays honest until they ship.
        </p>
      </Container>
    </section>
  );
};
