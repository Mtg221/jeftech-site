import { useState, useRef, useEffect } from 'react'
import useReveal from '../hooks/useReveal.js'
import { ExternalLink, GitBranch } from 'lucide-react'

const PROJECTS = [
  {
    id: 1,
    title: 'Jëftech — Site Vitrine',
    category: 'Site Vitrine',
    tech: ['React', 'Vite', 'Tailwind', 'Vercel'],
    description: 'Site vitrine moderne pour l\'agence Jëftech — design épuré, animations fluides, performance mobile-first.',
    image: '/projects/jeftech.jpg',
    links: {
      live: 'https://jeftech.dev',
      github: 'https://github.com/jeftech/site-web',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'E-commerce Fashion SN',
    category: 'E-commerce',
    tech: ['React', 'Node.js', 'Stripe', 'Orange Money', 'MongoDB'],
    description: 'Boutique en ligne mode sénégalaise — paiement carte + Orange Money, gestion stock, dashboard admin.',
    image: '/projects/fashion-sn.jpg',
    links: {
      live: 'https://fashion-sn.demo',
      github: 'https://github.com/jeftech/fashion-sn',
    },
    featured: true,
  },
  {
    id: 3,
    title: 'SaaS Dashboard Analytics',
    category: 'SaaS & Dashboard',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker'],
    description: 'Dashboard SaaS multi-tenant pour analytics e-commerce — multi-tenant, RBAC, exports CSV/PDF, temps réel.',
    image: '/projects/saas-dashboard.jpg',
    links: {
      live: 'https://analytics.demo',
      github: 'https://github.com/jeftech/saas-analytics',
    },
    featured: false,
  },
  {
    id: 4,
    title: 'App Mobile Livraison Express',
    category: 'Application Mobile',
    tech: ['React Native', 'Expo', 'Firebase', 'Google Maps', 'Stripe'],
    description: 'App de livraison express (Uber-style) — géolocalisation temps réel, paiement in-app, chat client/livreur.',
    image: '/projects/livraison-app.jpg',
    links: {
      live: 'https://expo.dev/@jeftech/livraison',
      github: 'https://github.com/jeftech/livraison-app',
    },
    featured: true,
  },
  {
    id: 5,
    title: 'Plateforme Formation Pro',
    category: 'SaaS & Dashboard',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth'],
    description: 'Plateforme LMS B2B — gestion formations, certifications, facturation automatique, espace entreprise.',
    image: '/projects/formation-pro.jpg',
    links: {
      live: 'https://formation-pro.demo',
      github: null,
    },
    featured: false,
  },
  {
    id: 6,
    title: 'Marketplace Artisanat Local',
    category: 'E-commerce',
    tech: ['Next.js', 'Tailwind', 'Prisma', 'PostgreSQL', 'PayPal'],
    description: 'Marketplace artisans sénégalais — multi-vendeurs, commission auto, paiement mobile money, géolocalisation.',
    image: '/projects/artisanat.jpg',
    links: {
      live: 'https://artisanat.demo',
      github: 'https://github.com/jeftech/marketplace-artisanat',
    },
    featured: false,
  },
]

const CATEGORIES = ['Tous', 'Site Vitrine', 'E-commerce', 'SaaS & Dashboard', 'Application Mobile']

export default function Portfolio() {
  useReveal()
  const [activeFilter, setActiveFilter] = useState('Tous')
  const gridRef = useRef(null)

  const filteredProjects = PROJECTS.filter(p => activeFilter === 'Tous' || p.category === activeFilter)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = grid.querySelectorAll('.project-card')
    cards.forEach((card, i) => {
      card.style.opacity = '0'
      card.style.transform = 'translateY(20px)'
      setTimeout(() => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease'
        card.style.opacity = '1'
        card.style.transform = 'translateY(0)'
      }, i * 60)
    })
  }, [activeFilter])

  return (
    <section id="portfolio" className="section-pad portfolio">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Réalisations</span>
          <h2 className="section-title">Nos réalisations</h2>
          <p className="section-sub">Projets livrés — du site vitrine au SaaS complexe, en passant par le mobile et l'e-commerce.</p>
        </div>

        <div className="portfolio__filter reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="portfolio__grid" ref={gridRef} id="portfolio-grid">
          {filteredProjects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card reveal ${project.featured ? 'featured' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
              data-category={project.category}
            >
              <div className="project-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
                {project.featured && <span className="project-badge">Projet phare</span>}
              </div>
              <div className="project-card__content">
                <span className="project-card__category">{project.category}</span>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>
                <div className="project-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-card__links">
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={16} strokeWidth={2} /> Visiter
                    </a>
                  )}
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                      <GitBranch size={16} strokeWidth={2} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="portfolio__cta reveal">
          Vous avez un projet en tête ? <a href="#booking" className="btn btn--primary">En parlons</a>
        </p>
      </div>
    </section>
  )
}