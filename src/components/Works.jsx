import { astroos, projects } from '../data/cv.js';
import Reveal from './Reveal.jsx';

function Dep({ children }) {
  return <span className="dep">{children}</span>;
}

function Card({ index, name, subtitle, tag, year, desc, deps, badges, links, full }) {
  return (
    <Reveal delay={0.05 * index}>
      <article className={`card ${full ? 'card--full' : ''}`}>
        <div className="card__top">
          <span className="card__idx">{String(index).padStart(2, '0')}</span>
          {badges && badges.length > 0 && (
            <span className="card__badges">
              {badges.map((b) => (
                <span className="card__badge" key={b}>
                  ✦ {b}
                </span>
              ))}
            </span>
          )}
          <span className="tag-line">{tag}</span>
        </div>
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        <h3 className="card__name">{name}</h3>
        <p className="card__desc">{desc}</p>
        <div className="card__deps">
          {deps.map((d) => (
            <Dep key={d}>{d}</Dep>
          ))}
        </div>
        <div className="card__foot">
          <span className="card__idx">{year}</span>
          <div className="card__links">
            {links.length > 0 ? (
              links.map((l) => (
                <a className="link-arrow" key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label} ↗
                </a>
              ))
            ) : (
              <span className="tag-line">details on request</span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Works() {
  const featured = {
    index: 1,
    name: astroos.name,
    subtitle: astroos.subtitle,
    tag: 'NASA Space Apps',
    year: astroos.year,
    desc: astroos.desc,
    deps: astroos.deps,
    badges: [astroos.badge, astroos.badge2].filter(Boolean),
    links: astroos.links,
  };

  return (
    <section id="work">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <div>
              <p className="eyebrow">02 · selected work</p>
              <h2 className="section-title">Selected Work</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="lead">
            A few projects I've designed, built, and shipped — from AI audiobook engines to satellite
            story platforms.
          </p>
        </Reveal>

        <div className="works__grid" style={{ marginTop: 'var(--space-8)' }}>
          <Card {...featured} />
          {projects.map((p, i) => (
            <Card
              key={p.name}
              index={i + 2}
              name={p.name}
              tag={p.tag}
              year={p.year}
              desc={p.desc}
              deps={p.deps}
              badges={null}
              links={p.links}
              full={p.full}
            />
          ))}
        </div>
      </div>
    </section>
  );
}