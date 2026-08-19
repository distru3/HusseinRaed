import { about, facts } from '../data/cv.js';
import Reveal from './Reveal.jsx';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">01 · about</p>
              <h2 className="section-title">About</h2>
            </div>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={0.05}>
            <div className="about__bio">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <span className="k">{f.k}</span>
                  <span className="v">{f.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}