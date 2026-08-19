import { profile } from '../data/cv.js';
import { scrollToHash } from '../lib/lenisStore.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {new Date().getFullYear()} {profile.name} · Cairo, Egypt</span>
        <span>built with React & Framer Motion</span>
        <div className="links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            github
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>
          <button type="button" onClick={() => scrollToHash('#top')}>
            back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}