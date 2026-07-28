import useReveal from '../hooks/useReveal.js'
import { MessageSquare, Search, Rocket, ArrowRight } from 'lucide-react'

const STEPS = [
  { n: '01', icon: MessageSquare, title: 'Vous nous contactez', desc: 'Un échange gratuit pour comprendre votre besoin et vos objectifs.' },
  { n: '02', icon: Search, title: 'On analyse votre projet', desc: "Cadrage, maquettes et devis clair vous validez avant qu'on démarre." },
  { n: '03', icon: Rocket, title: 'On livre & on assure le suivi', desc: 'Mise en ligne, formation et maintenance dans la durée.' },
]

export default function Process() {
  useReveal()
  return (
    <section id="process" className="section-pad process">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Notre méthode</span>
          <h2 className="section-title">Comment ça marche ?</h2>
          <p className="section-sub" style={{ margin: '16px auto 0' }}>Un processus simple et transparent, du premier contact à la livraison.</p>
        </div>

        <div className="process__flow">
          {STEPS.map((s, i) => {
            const Icon = s.icon
            return (
              <div className="process__item reveal" style={{ transitionDelay: `${i * 90}ms` }} key={s.n}>
                <div className="step">
                  <div className="step__icon"><Icon size={24} strokeWidth={1.5} style={{ color: '#fff' }} /><span className="step__num">{s.n}</span></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < STEPS.length - 1 && <div className="process__arrow"><ArrowRight size={26} strokeWidth={2} /></div>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}