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
      "Chez Jëftech, nous croyons profondément que la technologie n'est pas simplement un outil, mais un moteur de transformation qui peut améliorer et simplifier la vie de chacun. Notre mission est de concevoir des solutions numériques innovantes et accessibles, qui répondent aux besoins spécifiques de chaque client — qu'il s'agisse de particuliers, d'entreprises ou d'organisations.",
      "Nous nous engageons à développer des outils technologiques qui fluidifient le quotidien, tout en stimulant la productivité et en ouvrant la voie à de nouvelles opportunités. Notre approche est centrée sur la création de solutions sur mesure qui s'adaptent aux exigences d'un monde en constante évolution, en veillant à ce que la technologie soit non seulement efficace, mais aussi intuitive et accessible à tous.",
      "Chaque projet que nous entreprenons est une opportunité de réinventer l'interaction avec la technologie, en apportant des réponses concrètes aux défis modernes. À travers nos services, nous aspirons à rendre la technologie plus humaine, plus intuitive et plus puissante, tout en anticipant les besoins futurs de nos clients.",
    ],
  },
  {
    tag: '02',
    title: 'Notre Histoire',
    paras: [
      "Jëftech est le fruit de la collaboration de quatre associés visionnaires, unis par une passion commune pour la technologie. Polyvalents et complémentaires, nous partageons depuis toujours la conviction que la technologie peut transformer le quotidien et ouvrir de nouvelles perspectives.",
      "Après avoir acquis une solide expérience à travers divers projets techniques, nous avons décidé de mettre nos compétences et notre créativité au service d'une ambition commune : créer une entreprise capable de fournir des solutions numériques innovantes, adaptées aux besoins du monde moderne. C'est ainsi qu'est née Jëftech.",
    ],
  },
  {
    tag: '03',
    title: 'Notre Expertise',
    paras: [
      "Chez Jëftech, nous combinons une expertise technique pointue avec une vision créative et innovante pour offrir des solutions numériques adaptées aux besoins de nos clients. Notre savoir-faire repose sur l'expérience acquise dans le développement d'applications mobiles, la création de plateformes web et la gestion de projets numériques complexes.",
      "Grâce à notre capacité à anticiper les tendances technologiques et à comprendre les besoins spécifiques de chaque client, nous transformons des idées en solutions performantes et évolutives. Nous mettons l'accent sur la qualité, la sécurité et l'innovation dans chaque projet que nous entreprenons.",
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
