import { journey, certifications } from '../data/cv.js';
import Reveal from './Reveal.jsx';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">03 · experience</p>
              <h2 className="section-title">Experience</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="lead">
            From an intensive React program to shipping with NASA — newest first.
          </p>
        </Reveal>

        <div style={{ marginTop: 'var(--space-8)' }}>
          {journey.map((r, i) => (
            <Reveal key={r.title} delay={0.04 * i}>
              <div className="xp">
                <div className="xp__meta">
                  <span className="xp__when">{r.when}</span>
                  {r.current && <span className="xp__tag">current</span>}
                </div>
                <div>
                  <h3 className="xp__title">{r.title}</h3>
                  <p className="xp__org">
                    {r.org}
                    {r.link && (
                      <>
                        {' '}
                        ·{' '}
                        <a className="link-arrow" href={r.link} target="_blank" rel="noreferrer">
                          verify ↗
                        </a>
                      </>
                    )}
                  </p>
                  <ul className="xp__bullets">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div>
            <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              certifications
            </p>
            <div className="certs">
              {certifications.map((c) => (
                <span className="cert" key={c.what}>
                  <strong>{c.what}</strong> <span className="sep">·</span> {c.who} <span className="sep">·</span> {c.yr}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}