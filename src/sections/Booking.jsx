import { CALENDLY_URL, CONTACT_EMAIL } from '../config.js'
import useReveal from '../hooks/useReveal.js'

export default function Booking() {
  useReveal()
  return (
    <section id="booking" className="section-pad booking">
      <div className="pixel-grid" />
      <div className="booking__glow" />
      <div className="container booking__inner reveal">
        <h2 className="booking__title">Prêt à lancer <span className="gradient-text">votre projet&nbsp;?</span></h2>
        <p className="booking__sub">Réservez un appel gratuit de 30 minutes avec notre équipe. On analyse votre besoin et on vous conseille — sans engagement.</p>
        <div className="booking__cta">
          <a className="btn btn-primary btn--lg" href={CALENDLY_URL} target="_blank" rel="noreferrer">📅 Réserver un appel</a>
        </div>
        <p className="booking__alt">
          Ou écrivez-nous directement&nbsp;: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </div>
    </section>
  )
}
