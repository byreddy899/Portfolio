import React, { useState } from 'react';
import { Container } from '../foundation/Container';
import './Contact.css';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'byreddy899@gmail.com';

  const handleCopyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }
  };

  const handleScrollToTop = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    });
  };

  return (
    <section id="contact" className="contact-sec" aria-label="Contact and Conclusion">
      <Container>
        {/* 1. Header with Oversized Editorial Typography */}
        <div className="contact-header rv">
          <div className="contact-label-tag sm">
            DROP ME A MESSAGE
          </div>

          <h2 className="contact-title big">
            LET'S BUILD <em className="contact-serif">SOMETHING.</em>
          </h2>

          <p className="contact-subtitle">
            GOOD THINGS START WITH A <em className="contact-serif">CONVERSATION.</em>
          </p>
        </div>

        {/* 2. Prominent Email Display with Direct Mailto & Quick Copy */}
        <div className="contact-email-zone rv">
          <div className="contact-email-wrapper">
            <a
              href={`mailto:${email}`}
              className="contact-email-link"
              aria-label={`Send an email to ${email}`}
              data-peek="Write"
            >
              <span className="contact-email-text">{email}</span>
              <span className="contact-email-arrow" aria-hidden="true">↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`contact-copy-pill ${copied ? 'copied' : ''}`}
              aria-label="Copy email address to clipboard"
            >
              {copied ? 'Copied to Clipboard' : 'Copy Email'}
            </button>
          </div>
        </div>

        {/* 3. Verified Social Channels */}
        <div className="contact-channels-zone rv">
          <div className="contact-channels-header sm">
            <span>Direct Channels</span>
            <span>External Profiles</span>
          </div>

          <div className="contact-channels-list">
            {/* GitHub */}
            <div className="contact-channel-row">
              <span className="channel-index sm">01 / GITHUB</span>
              <a
                href="https://github.com/byreddy899"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
                aria-label="Visit Basireddy Yashwanth Reddy's GitHub profile (opens in new tab)"
                data-peek="GitHub"
              >
                <span className="channel-value">github.com/byreddy899</span>
                <span className="channel-arrow" aria-hidden="true">↗</span>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-channel-row">
              <span className="channel-index sm">02 / LINKEDIN</span>
              <a
                href="https://www.linkedin.com/in/basireddy-yashwanth-reddy-575b1a3a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-link"
                aria-label="Visit Basireddy Yashwanth Reddy's LinkedIn profile (opens in new tab)"
                data-peek="LinkedIn"
              >
                <span className="channel-value">linkedin.com/in/basireddy-yashwanth-reddy</span>
                <span className="channel-arrow" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4. Semantic Editorial Footer */}
        <footer className="contact-footer rv">
          <div className="footer-main">
            <div className="footer-identity">
              <div className="footer-author">Basireddy Yashwanth Reddy</div>
              <div className="footer-role">Computer Science Undergraduate · Hyderabad, India</div>
            </div>

            <button
              type="button"
              onClick={handleScrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll smoothly back to the top of the portfolio"
              data-peek="Top"
            >
              BACK TO TOP ↑
            </button>
          </div>

          <div className="footer-bottom">
            <p className="copyright-text">
              © 2026 Basireddy Yashwanth Reddy. Built with curiosity.
            </p>
          </div>
        </footer>
      </Container>
    </section>
  );
};
