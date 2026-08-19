import { skills } from '../data/cv.js';
import Reveal from './Reveal.jsx';

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">04 · skills</p>
              <h2 className="section-title">Skills</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="lead">
            Comfortable across the stack — from database schema to deployed interface.
          </p>
        </Reveal>

        <div style={{ marginTop: 'var(--space-8)' }}>
          {Object.entries(skills).map(([cat, list]) => (
            <div className="skill__row" key={cat}>
              <span className="cat">{cat}</span>
              <div className="chips">
                {list.map((s) => (
                  <span className="chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}