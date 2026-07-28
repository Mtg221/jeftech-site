import useReveal from '../hooks/useReveal.js'
import { MessageSquare, ShieldCheck, Phone } from 'lucide-react'

const REASONS = [
  {
    icon: MessageSquare,
    label: 'CLARTÉ',
    title: 'On commence par vous écouter.',
    desc: "Avant d'écrire une ligne de code, on comprend votre problème, votre cible, et ce que vous voulez vraiment obtenir.",
  },
  {
    icon: ShieldCheck,
    label: 'RIGUEUR',
    title: 'Ce qu\'on promet, on le livre.',
    desc: 'Délais, budget, fonctionnalités, tout est cadré avant de démarrer. Pas de surprises. Pas de disparitions.',
  },
  {
    icon: Phone,
    label: 'CONTINUITÉ',
    title: 'On reste là après la mise en ligne.',
    desc: 'Un bug, une question, une évolution, vous avez notre contact direct. Pas un ticket support. Nous.',
  },
]

export default function WhyUs() {
  useReveal()
  return (
    <section id="why" className="section-pad why-us">
      <div className="container">
        <div className="section-head reveal section-head--center">
          <span className="eyebrow" style={{ color: '#1A56FF' }}>POURQUOI JËFTECH ?</span>
          <h2 className="section-title">Ce qu'on vous apporte</h2>
        </div>

        <div className="why-us__grid">
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
              <article className="why-us__card reveal" style={{ transitionDelay: `${i * 80}ms` }} key={r.label}>
                <span className="why-us__icon"><Icon size={28} strokeWidth={1.5} style={{ color: '#1A56FF' }} /></span>
                <span className="why-us__label">{r.label}</span>
                <h3 className="why-us__title">{r.title}</h3>
                <p className="why-us__desc">{r.desc}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}