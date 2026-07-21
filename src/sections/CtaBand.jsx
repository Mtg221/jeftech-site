import useReveal from '../hooks/useReveal.js'

export default function CtaBand() {
  useReveal()
  return (
    <section className="cta-band">
      <div className="container cta-band__inner reveal">
        <h2 className="cta-band__title">Vous avez une idée. On a les compétences.</h2>
        <p className="cta-band__sub">
          Pas de portfolio client encore — mais une équipe technique sérieuse, motivée,
          et prête à tout donner sur votre projet.
        </p>
        <a className="btn cta-band__btn" href="#booking">Réserver un appel gratuit</a>
      </div>
    </section>
  )
}
