import useReveal from '../hooks/useReveal.js'
import { IconStar } from '../components/Icons.jsx'

const QUOTES = [
  { q: 'Équipe réactive et à l\'écoute. Notre site a doublé nos demandes de devis en deux mois.', name: 'Awa Ndiaye', role: 'Fondatrice, Boutique Sira' },
  { q: 'Ils ont livré notre application mobile dans les délais, propre et bien pensée. Un vrai plaisir.', name: 'Karim Sow', role: 'CEO, DeliveryGo' },
  { q: 'Du design au déploiement, tout était carré. Je recommande Jëftech les yeux fermés.', name: 'Fatou Ba', role: 'Directrice, Agence Lumen' },
]

export default function Testimonials() {
  useReveal()
  return (
    <section className="section-pad testi">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="section-title">Ce que disent nos clients</h2>
        </div>
        <div className="testi__grid">
          {QUOTES.map((t, i) => (
            <figure className="testi-card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={t.name}>
              <div className="testi-card__stars">
                {Array.from({ length: 5 }).map((_, k) => <IconStar key={k} />)}
              </div>
              <blockquote>“{t.q}”</blockquote>
              <figcaption>
                <span className="testi-card__avatar">{t.name.charAt(0)}</span>
                <span><strong>{t.name}</strong><em>{t.role}</em></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
