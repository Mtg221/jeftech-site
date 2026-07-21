import useReveal from '../hooks/useReveal.js'
import { CONTACT_EMAIL } from '../config.js'

const PROJECTS = [
  { name: 'Boutique en ligne — Mode', tags: ['Web', 'E-commerce'], g: 'linear-gradient(135deg,#1A56FF,#0A0F2C)', emoji: '🛍️' },
  { name: 'App de livraison', tags: ['Mobile', 'iOS · Android'], g: 'linear-gradient(135deg,#4d82ff,#111a45)', emoji: '🛵' },
  { name: 'Dashboard SaaS', tags: ['Web', 'SaaS'], g: 'linear-gradient(135deg,#0d1436,#2f6bff)', emoji: '📊' },
  { name: 'Site vitrine — Agence', tags: ['Web', 'Design'], g: 'linear-gradient(135deg,#1A56FF,#4d82ff)', emoji: '✨' },
]

export default function Portfolio() {
  useReveal()
  return (
    <section id="portfolio" className="section-pad portfolio">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">Nos réalisations</h2>
          <p className="section-sub">Un aperçu des produits qu'on a conçus et mis en ligne pour nos clients.</p>
        </div>

        <div className="portfolio__grid">
          {PROJECTS.map((p, i) => (
            <article className="proj reveal" style={{ transitionDelay: `${i * 70}ms` }} key={p.name}>
              <div className="proj__thumb" style={{ background: p.g }}>
                <span className="proj__emoji">{p.emoji}</span>
                <div className="proj__mock"><i /><i /><i /></div>
              </div>
              <div className="proj__body">
                <h3>{p.name}</h3>
                <div className="proj__tags">
                  {p.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="portfolio__cta reveal">
          <a className="btn btn-outline" href={`mailto:${CONTACT_EMAIL}`}>Voir plus de projets</a>
        </div>
      </div>
    </section>
  )
}
