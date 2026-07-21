import useReveal from '../hooks/useReveal.js'

const STATS = [
  { v: '10+', l: 'Projets livrés' },
  { v: '3', l: 'Pays touchés' },
  { v: '100%', l: 'Clients satisfaits' },
  { v: '4', l: 'Associés polyvalents' },
]

const BLOCKS = [
  {
    tag: '01',
    title: 'Notre Mission',
    paras: [
      "Trop d'entreprises se contentent d'un site qui « fait le job » sans jamais leur rapporter un seul client. Chez Jëftech, on part de l'inverse : à quoi doit servir votre projet, et comment le rendre vraiment utile au quotidien.",
      "On conçoit des sites et des applications pensés pour vos utilisateurs réels — pas pour cocher des cases. Rapides, clairs, agréables à utiliser, et surtout capables de générer des résultats concrets : plus de contacts, plus de ventes, moins de tâches manuelles.",
    ],
  },
  {
    tag: '02',
    title: 'Notre Histoire',
    paras: [
      "Jëftech est née d'un constat partagé par quatre amis développeurs : à Dakar comme ailleurs, beaucoup de porteurs de projets ont d'excellentes idées mais peinent à trouver une équipe technique fiable, qui écoute vraiment et livre ce qui était promis.",
      "On a décidé de devenir cette équipe. Chacun de nous touche à tout — code, design, gestion de projet — ce qui nous rend rapides et polyvalents. Aujourd'hui, on accompagne aussi bien des particuliers avec une première idée que des entreprises qui veulent passer à l'échelle.",
    ],
  },
  {
    tag: '03',
    title: 'Notre Expertise',
    paras: [
      "On construit des sites vitrines, des boutiques en ligne, des plateformes sur mesure et des applications mobiles iOS et Android. On intègre aussi les paiements (carte, mobile money) et on assure l'hébergement, pour que vous ayez un seul interlocuteur du début à la fin.",
      "Notre différence, c'est le soin du détail : un code propre que d'autres développeurs pourront reprendre, des interfaces testées sur de vrais appareils, et une attention constante à la vitesse et à la sécurité. Ce sont ces détails qui font qu'un produit dure.",
    ],
  },
]

export default function About() {
  useReveal()
  return (
    <section id="about" className="section-pad about">
      <div className="pixel-grid" />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Qui sommes-nous ?</span>
          <h2 className="section-title">À Propos</h2>
          <p className="section-sub">Découvrez notre mission, notre histoire et notre expertise.</p>
        </div>

        <div className="about__stats about__stats--top reveal">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <strong>{s.v}</strong>
              <span>{s.l}</span>
            </div>
          ))}
        </div>

        <div className="about__blocks">
          {BLOCKS.map((b) => (
            <article className="about-block reveal" key={b.tag}>
              <div className="about-block__head">
                <span className="about-block__tag">{b.tag}</span>
                <h3>{b.title}</h3>
              </div>
              <div className="about-block__body">
                {b.paras.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </article>
          ))}
        </div>

        <p className="about__tagline reveal">Innover. Créer. Connecter.</p>
      </div>
    </section>
  )
}
