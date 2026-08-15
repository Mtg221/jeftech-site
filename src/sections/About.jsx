import useReveal from '../hooks/useReveal.js'
import { Zap, Code2, Headphones, Users, Target, ShieldCheck } from 'lucide-react'
import { IconIn, IconIg, IconWa, IconFb, IconX } from '../components/Icons.jsx'
import { SOCIALS } from '../config.js'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.jsx'

const VALUES = [
  {
    icon: Zap,
    title: 'Livraison rapide',
    desc: "On travaille vite et sans sacrifier la qualité. Vos délais sont les nôtres.",
  },
  {
    icon: Code2,
    title: 'Code propre, produit solide',
    desc: "Chaque projet est construit pour durer, pas juste pour impressionner à la démo.",
  },
  {
    icon: Headphones,
    title: 'Suivi humain',
    desc: "On reste disponibles après livraison. Un bug, une question, on répond.",
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité par défaut',
    desc: "Authentification robuste, données chiffrées, conformité RGPD, audits réguliers.",
  },
  {
    icon: Users,
    title: 'Équipe polyvalente',
    desc: "4 associés qui touchent à tout : code, design, produit, relation client.",
  },
  {
    icon: Target,
    title: 'Résultats mesurables',
    desc: "On vise l'impact business : plus de leads, plus de ventes, moins de tâches manuelles.",
  },
]

const BLOCKS = [
  {
    tag: '01',
    title: 'Notre Mission',
    paras: [
      "Trop d'entreprises au Sénégal se contentent d'un site qui « fait le job » sans jamais leur rapporter un seul client. Chez Jëftech, on part de l'inverse : à quoi doit servir votre projet, et comment le rendre vraiment utile au quotidien.",
      "On conçoit des sites et des applications pensés pour vos utilisateurs réels, pas pour cocher des cases. Rapides, clairs, agréables à utiliser, et surtout capables de générer des résultats concrets : plus de contacts, plus de ventes, moins de tâches manuelles.",
    ],
  },
  {
    tag: '02',
    title: 'Notre Histoire',
    paras: [
      "Jëftech est née d'un constat partagé par quatre amis développeurs à Dakar : beaucoup de porteurs de projets ont d'excellentes idées mais peinent à trouver une équipe technique fiable, qui écoute vraiment et livre ce qui était promis.",
      "On a décidé de devenir cette équipe. Chacun de nous touche à tout — code, design, gestion de projet — ce qui nous rend rapides et polyvalents. Aujourd'hui, on accompagne aussi bien des particuliers avec une première idée que des entreprises qui veulent passer à l'échelle.",
    ],
  },
  {
    tag: '03',
    title: 'Notre Expertise Technique',
    paras: [
      "On construit des sites vitrines, des boutiques en ligne, des plateformes SaaS sur mesure et des applications mobiles iOS et Android. On intègre aussi les paiements (carte, mobile money Orange Money, Wave) et on assure l'hébergement, la maintenance et la surveillance, pour que vous ayez un seul interlocuteur du début à la fin.",
      "Notre différence, c'est le soin du détail : un code propre que d'autres développeurs pourront reprendre, des interfaces testées sur de vrais appareils, et une attention constante à la vitesse, la sécurité et l'accessibilité. Ce sont ces détails qui font qu'un produit dure.",
    ],
  },
  {
    tag: '04',
    title: 'Notre Approche Client',
    paras: [
      "Pas de commercial qui vend du rêve, pas de chef de projet qui fait de la relay. Vous parlez directement aux gens qui construisent. Un échange gratuit de 30 minutes pour comprendre votre besoin, un devis clair sans surprise, des points d'étape hebdomadaires, une démo à chaque sprint.",
      "Après la mise en ligne, on reste là : maintenance corrective, évolutions, monitoring, formation de vos équipes. Notre objectif, c'est que vous soyez autonome et serein avec votre outil digital.",
    ],
  },
]

const TEAM = [
  { name: 'Jean', role: 'Lead Developer & Co-fondateur', expertise: 'Architecture, Backend, DevOps', initials: 'JD' },
  { name: 'Fatou', role: 'Lead Designer & Co-fondatrice', expertise: 'UX/UI, Design System, Research', initials: 'FB' },
  { name: 'Moussa', role: 'Fullstack Developer & Co-fondateur', expertise: 'React, React Native, Mobile', initials: 'MD' },
  { name: 'Aïcha', role: 'Product Manager & Co-fondatrice', expertise: 'Produit, Strategy, Client Success', initials: 'AD' },
]

export default function About() {
  useReveal()
  const { navigateToAnchor } = useAnchorNavigation()
  return (
    <section id="about" className="section-pad about" aria-labelledby="about-title">
      <div className="pixel-grid" />
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Qui sommes-nous ?</span>
          <h2 id="about-title" className="section-title">Jëftech — Solutions numériques au Sénégal</h2>
          <p className="section-sub">Découvrez notre mission, notre histoire, notre équipe et notre expertise technique basée à Dakar.</p>
        </div>

        <div className="values-head reveal">
          <h3 className="values-head__title">Pourquoi choisir Jëftech ?</h3>
          <p style={{ color: 'var(--gray)', marginTop: '8px', maxWidth: '600px', margin: '8px auto 0' }}>
            6 piliers qui guident chaque projet que nous livrons pour nos clients au Sénégal et en Afrique de l'Ouest.
          </p>
        </div>
        <div className="values-grid reveal">
          {VALUES.map((v) => {
            const Icon = v.icon
            return (
              <article className="value-card" key={v.title}>
                <span className="value-card__icon"><Icon size={24} strokeWidth={1.8} /></span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </article>
            )
          })}
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

        <div className="team-section reveal" style={{ marginTop: '80px' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, color: 'var(--navy)', textAlign: 'center', marginBottom: '8px' }}>
            L'équipe Jëftech
          </h3>
          <p style={{ color: 'var(--gray)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 40px' }}>
            4 associés basés à Dakar, polyvalents et passionnés. Vous parlez directement à ceux qui construisent.
          </p>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {TEAM.map((member, i) => (
              <article key={member.name} className="team-card" style={{
                background: '#fff',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius)',
                padding: '30px',
                textAlign: 'center',
                boxShadow: '0 14px 40px -30px rgba(10,15,44,.4)',
                transition: 'transform .3s ease, border-color .3s ease, box-shadow .3s ease',
                opacity: 0,
                transform: 'translateY(30px)',
                transitionDelay: `${i * 100}ms`
              }} onAnimationEnd={(e) => { e.target.style.opacity = 1; e.target.style.transform = 'none'; }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--blue), var(--blue-bright))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: 700, fontSize: '24px', margin: '0 auto 16px'
                }}>
                  {member.initials}
                </div>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--navy)', marginBottom: '4px' }}>
                  {member.name}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--blue)', fontWeight: 500, marginBottom: '12px' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '14px', color: 'var(--gray)' }}>{member.expertise}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-section reveal" style={{ marginTop: '80px', padding: '48px', background: 'linear-gradient(135deg, var(--navy) 0%, #14205a 100%)', borderRadius: '24px', textAlign: 'center', color: '#fff' }}>
          <h3 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 700, marginBottom: '16px' }}>
            Prêt à démarrer votre projet ?
          </h3>
          <p style={{ color: '#c3ccec', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Échangeons gratuitement sur vos besoins. 30 minutes, sans engagement, conseils concrets.
          </p>
          <a
            href="#booking"
            className="btn btn-primary"
            style={{ fontSize: '16px', padding: '16px 32px' }}
            onClick={(e) => {
              e.preventDefault()
              navigateToAnchor('#booking')
            }}
          >
            Réserver un appel gratuit
          </a>
        </div>
      </div>
    </section>
  )
}