import { motion, useReducedMotion } from 'framer-motion';
import { profile } from '../data/cv.js';
import { scrollToHash } from '../lib/lenisStore.js';
import photo from '../assets/me.jpg';

export default function Hero() {
  const reduced = useReducedMotion();

  const item = (delay) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 18 },
    animate: reduced ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section className="hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
        <motion.p className="eyebrow" {...item(0.05)}>
          full-stack developer
        </motion.p>

        <motion.h1 className="hero__title" {...item(0.12)}>
          Hi, I'm <span className="accent">Al-Hussein Raed</span>.
        </motion.h1>

        <motion.div className="hero__role" {...item(0.22)}>
          <span>{profile.location}</span>
          <span className="sep">·</span>
          <span>React</span>
          <span className="sep">·</span>
          <span>Node.js & PHP</span>
          <span className="sep">·</span>
          <span>MySQL & MongoDB</span>
        </motion.div>

        <motion.p className="hero__tagline" {...item(0.3)}>
          {profile.tagline}
        </motion.p>

        <motion.div className="hero__cta" {...item(0.38)}>
          <a
            className="btn btn--accent"
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash('#work');
            }}
          >
            view my work
          </a>
          <a
            className="btn btn--ghost"
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToHash('#contact');
            }}
          >
            get in touch
          </a>
        </motion.div>

        <motion.div className="hero__status" {...item(0.46)}>
          <span className="dot" aria-hidden="true" />
          open to frontend, backend & full-stack roles
        </motion.div>
          </div>

          <motion.div className="hero__photo-wrap" {...item(0.3)}>
            <img className="hero__photo" src={photo} alt="Portrait of Al-Hussein Raed" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}