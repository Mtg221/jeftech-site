import useReveal from '../hooks/useReveal.js'

const REASONS = [
  {
    k: 'Un seul interlocuteur, zéro sous-traitance',
    d: "Vous parlez directement aux personnes qui codent votre projet. Pas d'intermédiaire, pas de téléphone arabe — juste des réponses claires et rapides.",
  },
  {
    k: 'Du code que vos futurs développeurs comprendront',
    d: "On livre un travail propre, documenté et maintenable. Votre produit vous appartient vraiment, sans dépendance imposée.",
  },
  {
    k: 'Des délais tenus, un budget annoncé',
    d: "Un devis clair avant de démarrer, des points d'avancement réguliers, et pas de mauvaise surprise à la facturation.",
  },
  {
    k: 'On reste après la mise en ligne',
    d: "Hébergement, correctifs, évolutions : on assure le suivi dans la durée pour que votre outil reste rapide et sécurisé.",
  },
]

export default function WhyUs() {
  useReveal()
  return (
    <section id="why" className="section-pad why">
      <div className="container why__inner">
        <aside className="why__lead reveal">
          <span className="eyebrow">Pourquoi Jëftech</span>
          <h2 className="section-title">
            La différence tient <br />dans les détails.
          </h2>
          <p className="section-sub">
            Beaucoup savent livrer un site. Peu prennent le temps de comprendre votre métier
            avant d'écrire la première ligne. C'est là que tout se joue.
          </p>
          <a className="btn btn-primary why__cta" href="#booking">
            Discutons de votre projet
          </a>
        </aside>

        <ul className="why__list">
          {REASONS.map((r, i) => (
            <li className="why-item reveal" style={{ transitionDelay: `${i * 80}ms` }} key={r.k}>
              <span className="why-item__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{r.k}</h3>
                <p>{r.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
