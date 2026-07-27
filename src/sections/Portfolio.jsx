import useReveal from '../hooks/useReveal.js'
import { ExternalLink } from 'lucide-react'

const DEMO_PROJECTS = [
  {
    id: 1,
    title: 'SmartStock AI',
    category: 'SaaS & Dashboard',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AI', 'Vercel'],
    description: 'Gestion de stock intelligente avec IA — prévisions de demande, alertes automatiques, analytics avancés.',
    image: '/projects/smartstock.jpg',
    links: {
      live: 'https://smartstock-ai-topaz.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Foot Vert',
    category: 'Application Web',
    tech: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
    description: 'Plateforme de gestion de terrains de foot — réservation en ligne, paiement, planning temps réel.',
    image: '/projects/foot-vert.jpg',
    links: {
      live: 'https://foot-vert.vercel.app/',
    },
  },
  {
    id: 3,
    title: 'Senegal Food App',
    category: 'Application Mobile',
    tech: ['React Native', 'Expo', 'Firebase', 'Vercel'],
    description: 'App de commande food au Sénégal — restaurants locaux, paiement mobile money, livraison express.',
    image: '/projects/senegal-food.jpg',
    links: {
      live: 'https://senegal-food-app.vercel.app/',
    },
  },
]

const DELIVERED_PROJECTS = [
  {
    id: 3,
    title: 'Ebenora',
    category: 'Site Vitrine',
    tech: ['React', 'Vite', 'Tailwind', 'Vercel'],
    description: 'Site vitrine moderne pour Ebenora — design épuré, performance optimale, déploiement Vercel.',
    image: '/projects/ebenora.jpg',
    links: {
      live: 'https://ebenora.vercel.app/',
    },
    featured: true,
  },
  {
    id: 4,
    title: 'Maddelice',
    category: 'E-commerce',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Vercel'],
    description: 'Boutique en ligne Maddelice — paiement sécurisé, gestion commandes, expérience client fluide.',
    image: '/projects/maddelice.jpg',
    links: {
      live: 'https://maddelice.com/',
    },
    featured: true,
  },
  {
    id: 5,
    title: 'Jëftech',
    category: 'Site Vitrine',
    tech: ['React', 'Vite', 'Tailwind', 'Vercel'],
    description: 'Site vitrine moderne pour l\'agence Jëftech — design épuré, animations fluides, performance mobile-first.',
    image: '/projects/jeftech.jpg',
    links: {
      live: 'https://jeftech.dev/',
    },
    featured: true,
  },
]

function ProjectCard({ project, index }) {
  const initials = project.title
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <article
      key={project.id}
      className={`project-card reveal ${project.featured ? 'featured' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-category={project.category}
    >
      <div className="project-card__image">
        <div className="project-initials">{initials}</div>
        {project.featured && <span className="project-badge">Projet phare</span>}
      </div>
      <div className="project-card__content">
        <span className="project-card__category">{project.category}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>
        <div className="project-card__links">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={16} strokeWidth={2} /> Visiter
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ProjectSection({ title, subtitle, projects, id, eyebrow }) {
  useReveal()
  return (
    <section id={id} className="section-pad portfolio">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </div>

        <div className="portfolio__grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Portfolio() {
  return (
    <>
      <ProjectSection
        id="portfolio-demo"
        eyebrow="Projets Démo"
        title="Projets Démo"
        subtitle="Concepts et prototypes réalisés pour explorer de nouvelles technologies et valider des idées."
        projects={DEMO_PROJECTS}
      />
      <ProjectSection
        id="portfolio-delivered"
        eyebrow="Projets Livrés"
        title="Projets Livrés"
        subtitle="Solutions complètes déployées en production pour nos clients — du site vitrine au SaaS complexe."
        projects={DELIVERED_PROJECTS}
      />
    </>
  )
}