import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { Container } from '../foundation/Container';
import './Contact.css';

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 1400);
    } catch {
      // Fallback if clipboard API is unavailable
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopiedKey(key);
      setTimeout(() => {
        setCopiedKey(null);
      }, 1400);
    }
  };

  return (
    <section id="contact" className="sec" aria-label="Contact Information">
      <Container>
        {/* Poetic Opening Callout */}
        <p className="ser contact-lead rv">
          {contact.heading}
        </p>

        {/* Oversized Email Display */}
        <a
          className="contact-email-link"
          href={`mailto:${contact.email}`}
          aria-label={`Send email to ${contact.email}`}
        >
          <div className="big contact-big rv">
            {contact.email}
          </div>
        </a>

        {/* Contact Channels Grid */}
        <div className="contact-channels" id="cr">
          {contact.channels.map((channel) => {
            const isCopied = copiedKey === channel.label;
            const isExternal = channel.href.startsWith('http');

            return (
              <div key={channel.label} className="contact-row rv">
                <span className="sm">{channel.label}</span>

                <a
                  className="contact-link"
                  href={channel.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  {channel.value}
                </a>

                {channel.copyable ? (
                  <button
                    type="button"
                    className={`contact-copy-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(channel.value, channel.label)}
                    aria-label={`Copy ${channel.label} ${channel.value}`}
                  >
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                ) : (
                  <span />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

