import { useEffect, useState } from 'react';
import { profile } from '../data/cv.js';
import { scrollToHash } from '../lib/lenisStore.js';

const CHAPTERS = [
  ['about', 'About'],
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['contact', 'Contact'],
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = CHAPTERS.map(([id]) => id);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToHash(`#${id}`);
  };

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header__inner">
        <a
          href="#about"
          className="header__wordmark"
          onClick={(e) => {
            e.preventDefault();
            go('about');
          }}
        >
          Al-Hussein Raed<span className="dot">.</span>
        </a>

        <nav className="header__nav" aria-label="Sections">
          {CHAPTERS.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className={active === id ? 'is-active' : ''}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="header__right">
          <a
            className="btn btn--accent"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go('contact');
            }}
            style={{ padding: '0.6em 1.1em' }}
          >
            hire me
          </a>
          <button
            type="button"
            className={`header__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="header__mobile container" aria-label="Mobile sections">
          {CHAPTERS.map(([id, label]) => (
            <button key={id} type="button" onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <a href="#contact" onClick={(e) => { e.preventDefault(); go('contact'); }}>
            hire me
          </a>
        </nav>
      )}
    </header>
  );
}