import useReveal from '../hooks/useReveal.js'

const PROJECT_IMAGES = {
  'Ebenora': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279244/Screenshot_2026-07-28_at_22.53.16_jpcpqu.png',
  'Maddelice': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279335/Screenshot_2026-07-28_at_22.54.52_gza81r.png',
  'Jëftech': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279420/Screenshot_2026-07-28_at_22.56.08_ob5f1x.png',
  'Couture': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279512/Screenshot_2026-07-28_at_22.57.33_mvhn2t.png',
  'SmartStock AI': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'Foot Vert': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785278883/Screenshot_2026-07-28_at_22.46.42_g7unvh.png',
  'Senegal Food App': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279162/Screenshot_2026-07-28_at_22.51.55_urcwir.png',
}

const DEMO_PROJECTS = [
  {
    id: 1,
    title: 'SmartStock AI',
    category: 'SaaS & Dashboard',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AI', 'Vercel'],
    description: 'Gestion de stock intelligente avec IA: prévisions de demande, alertes automatiques, analytics avancés.',
    image: PROJECT_IMAGES['SmartStock AI'],
    links: {
      live: 'https://smartstock-ai-topaz.vercel.app/',
    },
  },
  {
    id: 2,
    title: 'Foot Vert',
    category: 'Application Web',
    tech: ['Next.js', 'Tailwind', 'Firebase', 'Vercel'],
    description: 'Plateforme de gestion de terrains de foot: réservation en ligne, paiement, planning temps réel.',
    image: PROJECT_IMAGES['Foot Vert'],
    links: {
      live: 'https://foot-vert.vercel.app/',
    },
  },
  {
    id: 3,
    title: 'Senegal Food App',
    category: 'Application Mobile',
    tech: ['React Native', 'Expo', 'Firebase', 'Vercel'],
    description: 'App de commande food au Sénégal: restaurants locaux, paiement mobile money, livraison express.',
    image: PROJECT_IMAGES['Senegal Food App'],
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
    description: 'Site vitrine moderne pour Ebenora: design épuré, performance optimale, déploiement Vercel.',
    image: PROJECT_IMAGES['Ebenora'],
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
    description: 'Boutique en ligne Maddelice: paiement sécurisé, gestion commandes, expérience client fluide.',
    image: PROJECT_IMAGES['Maddelice'],
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
    description: 'Site vitrine moderne pour l\'agence Jëftech : design épuré, animations fluides, performance mobile-first.',
    image: PROJECT_IMAGES['Jëftech'],
    links: {
      live: 'https://jeftech.dev/',
    },
    featured: true,
  },
  {
    id: 6,
    title: 'Couture',
    category: 'Application Web',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'Vercel'],
    description: 'Boutique en ligne Couture: mode et confection, paiement sécurisé, gestion commandes, expérience client fluide.',
    image: PROJECT_IMAGES['Couture'],
    links: {
      live: 'https://couture1.vercel.app/',
    },
    featured: true,
  },
]

function ProjectCard({ project, index }) {
  const liveUrl = project.links?.live || '#'
  return (
    <article
      key={project.id}
      className={`project-card reveal ${project.featured ? 'featured' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-category={project.category}
    >
      <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="project-card__link">
        <div className="project-card__image-wrapper">
          <div
            className="project-card__image"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <div className="project-card__overlay">
            <span className="project-card__overlay-text">Voir le projet →</span>
          </div>
          {project.featured && <span className="project-badge">Projet phare</span>}
        </div>
        <div className="project-card__content">
          <span className="project-card__category">{project.category}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__desc">{project.description}</p>
        </div>
      </a>
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