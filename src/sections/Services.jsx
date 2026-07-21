import useReveal from '../hooks/useReveal.js'
import { IconWeb, IconMobile, IconPay, IconHost, IconCustom, IconDesign } from '../components/Icons.jsx'

const SERVICES = [
  { icon: <IconWeb />, title: 'Développement Web', desc: 'Sites vitrine, e-commerce et plateformes SaaS sur mesure.' },
  { icon: <IconMobile />, title: 'Applications Mobiles', desc: 'Apps natives et cross-platform iOS & Android.' },
  { icon: <IconDesign />, title: 'Design UI/UX', desc: 'Interfaces claires, modernes et pensées pour convertir.' },
  { icon: <IconPay />, title: 'Intégration de Paiement', desc: 'Paiements sécurisés : carte, mobile money, Stripe & co.' },
  { icon: <IconHost />, title: 'Maintenance & Hébergement', desc: 'Mise en ligne, surveillance et mises à jour continues.' },
  { icon: <IconCustom />, title: 'Solutions sur Mesure', desc: 'Automatisations et outils adaptés à votre métier.' },
]

export default function Services() {
  useReveal()
  return (
    <section id="services" className="section-pad services">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nos expertises</span>
          <h2 className="section-title">Ce qu'on fait</h2>
          <p className="section-sub">Une équipe polyvalente qui couvre tout le cycle de votre produit digital — de l'idée à la mise en ligne.</p>
        </div>

        <div className="services__grid">
          {SERVICES.map((s, i) => (
            <article className="svc-card reveal" style={{ transitionDelay: `${i * 60}ms` }} key={s.title}>
              <div className="svc-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="svc-card__glow" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
