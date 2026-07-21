import useReveal from '../hooks/useReveal.js'
import { Globe, Smartphone, LayoutDashboard, ShoppingCart } from 'lucide-react'

const CAPS = [
  { icon: Globe, name: 'Sites web', desc: 'Sites vitrines et pages qui convertissent, rapides et pensés pour le mobile.' },
  { icon: Smartphone, name: 'Applications mobiles', desc: 'Apps iOS & Android fluides, natives ou cross-platform, prêtes pour vos utilisateurs.' },
  { icon: LayoutDashboard, name: 'SaaS & Dashboards', desc: 'Plateformes sur mesure et tableaux de bord clairs pour piloter votre activité.' },
  { icon: ShoppingCart, name: 'E-commerce', desc: 'Boutiques en ligne avec paiement sécurisé — carte, mobile money et plus.' },
]

export default function Capabilities() {
  useReveal()
  return (
    <section id="portfolio" className="section-pad capabilities">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nos capacités</span>
          <h2 className="section-title">Ce qu'on peut construire pour vous</h2>
          <p className="section-sub">Des catégories de projets qu'on maîtrise et qu'on livre de bout en bout.</p>
        </div>

        <div className="capabilities__grid">
          {CAPS.map((c, i) => {
            const Icon = c.icon
            return (
              <article className="cap-card reveal" style={{ transitionDelay: `${i * 70}ms` }} key={c.name}>
                <span className="cap-card__icon"><Icon size={26} strokeWidth={1.7} /></span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
              </article>
            )
          })}
        </div>

        <p className="capabilities__note reveal">
          Vous serez parmi nos premiers clients de référence — et on s'en souvient.
        </p>
      </div>
    </section>
  )
}
