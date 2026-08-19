import { useState } from 'react';
import { profile } from '../data/cv.js';
import Reveal from './Reveal.jsx';

const LINKS = [
  { k: 'email', v: profile.email, copy: profile.email },
  { k: 'phone', v: profile.phone, copy: profile.phone.replace(/\s/g, '') },
  { k: 'github', v: 'github.com/distru3', href: profile.github },
  { k: 'linkedin', v: 'linkedin.com/in/al-hussein-raed', href: profile.linkedin },
];

export default function Contact() {
  const [copied, setCopied] = useState(null);

  const copy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 2200);
    } catch {
      window.location.href = `mailto:${value}`;
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">05 · contact</p>
              <h2 className="section-title">Contact</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="contact__title">
            Let's build something <span className="accent">great</span> together.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact__grid">
            {LINKS.map((l) => (
              <div className="contact__item" key={l.k}>
                <span className="k">{l.k}</span>
                <span className="v">
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noreferrer">
                      {l.v} ↗
                    </a>
                  ) : (
                    <button type="button" className="contact__copy" onClick={() => copy(l.k, l.copy)}>
                      {copied === l.k ? `${l.v} — copied ✓` : `${l.v} · copy`}
                    </button>
                  )}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}