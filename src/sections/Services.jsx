import useReveal from '../hooks/useReveal.js'
import { Globe, Smartphone, Palette, CreditCard, Server, Settings2 } from 'lucide-react'

const SERVICES = [
  { icon: Globe, title: 'Développement Web', desc: 'Sites vitrine, e-commerce et plateformes SaaS sur mesure.' },
  { icon: Smartphone, title: 'Applications Mobiles', desc: 'Apps natives et cross-platform iOS & Android.' },
  { icon: Palette, title: 'Design UI/UX', desc: 'Interfaces claires, modernes et pensées pour convertir.' },
  { icon: CreditCard, title: 'Intégration de Paiement', desc: 'Paiements sécurisés : carte, mobile money, Stripe & co.' },
  { icon: Server, title: 'Maintenance & Hébergement', desc: 'Mise en ligne, surveillance et mises à jour continues.' },
  { icon: Settings2, title: 'Solutions sur Mesure', desc: 'Automatisations et outils adaptés à votre métier.' },
]

export default function Services() {
  useReveal()
  return (
    <section id="services" className="section-pad services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nos expertises</span>
          <h2 className="section-title">Ce qu'on fait</h2>
          <p className="section-sub">Une équipe polyvalente qui couvre tout le cycle de votre produit digital de l'idée à la mise en ligne.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon
            return (
              <article className="svc-card reveal" style={{ transitionDelay: `${i * 60}ms` }} key={s.title}>
                <div className="svc-card__icon"><Icon size={24} strokeWidth={1.5} style={{ color: '#1A56FF' }} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="svc-card__glow" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}