import { ArrowRight, Zap, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="pixel-grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />

      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="hero__title">
            Votre idée mérite une vraie <span className="gradient-text">présence digitale.</span>
          </h1>
          <p className="hero__sub">
            Jëftech conçoit des sites web et applications mobiles qui convertissent,
            performent et impressionnent.
          </p>
          <div className="hero__cta">
            <a className="btn btn-primary" href="#booking">
              Réserver un appel gratuit <ArrowRight size={18} strokeWidth={2} />
            </a>
            <a className="btn btn-outline" href="#services">Voir nos services</a>
          </div>
          <div className="hero__trust">
            <div><strong>4</strong><span>Experts polyvalents</span></div>
            <div><strong>24 h</strong><span>Délai de réponse</span></div>
            <div><strong>Gratuit</strong><span>Premier échange</span></div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="device device--laptop">
            <div className="device__bar"><i /><i /><i /></div>
            <div className="device__screen">
              <div className="ui-row"><span className="ui-avatar" /><span className="ui-line w40" /></div>
              <div className="ui-hero" />
              <div className="ui-grid">
                <div className="ui-card" /><div className="ui-card" /><div className="ui-card" />
              </div>
              <div className="ui-line w70" /><div className="ui-line w50" />
            </div>
          </div>
          <div className="device device--phone">
            <div className="device__notch" />
            <div className="device__screen">
              <div className="ui-line w60" />
              <div className="ui-hero sm" />
              <div className="ui-line w80" /><div className="ui-line w40" />
              <div className="ui-pill" />
            </div>
          </div>
          <div className="hero__chip chip--1"><Zap size={15} strokeWidth={2} /> Performant</div>
          <div className="hero__chip chip--2"><ShieldCheck size={15} strokeWidth={2} /> Sécurisé</div>
        </div>
      </div>
    </section>
  )
}
