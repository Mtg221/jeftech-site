import useReveal from '../hooks/useReveal.js'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.jsx'

const PROJECT_IMAGES = {
  'Ebenora': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279244/Screenshot_2026-07-28_at_22.53.16_jpcpqu.png',
  'Maddelice': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279335/Screenshot_2026-07-28_at_22.54.52_gza81r.png',
  'Jëftech': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279420/Screenshot_2026-07-28_at_22.56.08_ob5f1x.png',
  'Couture': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279512/Screenshot_2026-07-28_at_22.57.33_mvhn2t.png',
  'SmartStock AI': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  'Foot Vert': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785278883/Screenshot_2026-07-28_at_22.46.42_g7unvh.png',
  'Senegal Food App': 'https://res.cloudinary.com/dm9iz5eqf/image/upload/v1785279162/Screenshot_2026-07-28_at_22.51.55_urcwir.png',
}

const DELIVERED_PROJECTS = [
  {
    id: 1,
    title: 'Maddelice',
    category: 'E-commerce',
    client: 'Maddelice',
    clientType: 'Marque de cosmétiques naturels',
    problem: 'Besoin d\'une boutique en ligne performante pour vendre des produits cosmétiques au Sénégal avec paiement mobile money et gestion des commandes.',
    solution: 'Site e-commerce Next.js avec intégration Stripe, CinetPay (Orange Money, Wave), espace client, gestion stocks, emails transactionnels, SEO optimisé.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'CinetPay', 'PostgreSQL', 'Prisma', 'Vercel', 'Resend'],
    features: [
      'Paiement carte + Orange Money + Wave',
      'Espace client avec historique commandes',
      'Gestion stocks temps réel & alertes',
      'Emails transactionnels (confirmation, expédition)',
      'SEO technique : sitemap, schema.org Product, meta optimisées',
      'Performance : Lighthouse 95+, Core Web Vitals verts'
    ],
    results: [
      'Lancement en 6 semaines',
      'Taux de conversion mobile +40%',
      'Zéro incident paiement depuis mise en ligne',
      'Autonomie cliente pour gestion produits'
    ],
    image: PROJECT_IMAGES['Maddelice'],
    links: {
      live: 'https://maddelice.com/',
      caseStudy: null
    },
    featured: true,
    year: 2025,
    service: 'developpement-web'
  },
  {
    id: 4,
    title: 'Ebenora',
    category: 'Site Vitrine',
    client: 'Ebenora',
    clientType: 'Cabinet conseil & formation',
    problem: 'Refonte site vitrine pour présenter l\'expertise, publier des articles, capturer des leads qualifiés, améliorer le référencement naturel.',
    solution: 'Site React + Vite + Tailwind : design épuré, blog intégré (MDX), formulaires leads Web3Forms, SEO complet, performance optimale, déploiement Vercel.',
    tech: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'MDX', 'Web3Forms', 'Vercel'],
    features: [
      'Design responsive mobile-first',
      'Blog SEO-ready avec MDX',
      'Formulaires leads intégrés email',
      'Schema.org Article, Organization, FAQ',
      'Lighthouse 100/100 performance',
      'Déploiement continu Git → Vercel'
    ],
    results: [
      'Trafic organique x3 en 3 mois',
      'Leads qualifiés +150%',
      'Temps de chargement < 1s',
      'Autonomie éditoriale cliente'
    ],
    image: PROJECT_IMAGES['Ebenora'],
    links: {
      live: 'https://ebenora.vercel.app/',
      caseStudy: null
    },
    featured: true,
    year: 2024,
    service: 'developpement-web'
  },
  {
    id: 5,
    title: 'Couture',
    category: 'E-commerce',
    client: 'Couture',
    clientType: 'Mode & confection sur mesure',
    problem: 'Boutique en ligne pour vendre créations mode : configurateur produit, paiement sécurisé, gestion tailles/mesures, suivi commande.',
    solution: 'E-commerce Next.js : fiches produits variants (tailles, tissus), configurateur mesures, paiement Stripe/CinetPay, espace client, emails auto, dashboard admin.',
    tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Stripe', 'CinetPay', 'PostgreSQL', 'Prisma', 'Vercel'],
    features: [
      'Configurateur mesures client (guide + formulaire)',
      'Variants produits : tissus, tailles, options',
      'Paiement sécurisé multi-moyens',
      'Espace client : commandes, mesures, factures',
      'Dashboard admin : production, stocks, CA',
      'SEO fiches produits + schema.org Product'
    ],
    results: [
      'Lancement collection 2024',
      'Panier moyen +25% vs ancien site',
      'Réduction retours grâce guide mesures',
      'Processus production digitalisé'
    ],
    image: PROJECT_IMAGES['Couture'],
    links: {
      live: 'https://couture1.vercel.app/',
      caseStudy: null
    },
    featured: true,
    year: 2024,
    service: 'developpement-web'
  },
  {
    id: 6,
    title: 'Jëftech',
    category: 'Site Vitrine',
    client: 'Jëftech',
    clientType: 'Agence digitale (projet interne)',
    problem: 'Créer le site vitrine de l\'agence : présenter services, portfolio, expertise, convertir visiteurs en leads, démontrer notre savoir-faire technique.',
    solution: 'Site React + Vite + Tailwind : animations fluides, performance mobile-first, SEO technique complet, structured data, formulaires RDV/contact, design system cohérent.',
    tech: ['React 18', 'Vite', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Web3Forms', 'Vercel'],
    features: [
      'Animations CSS/JS performantes (60fps)',
      'SEO technique : meta, canonical, sitemap, robots, schema.org',
      'Core Web Vitals verts (LCP < 1.2s, CLS < 0.1)',
      'Accessibilité : skip links, focus visible, ARIA',
      'Formulaires RDV + contact avec honeypot',
      'Design system : tokens, composants réutilisables'
    ],
    results: [
      'Lighthouse 100/100/100/100',
      'Premiers leads organiques semaine 1',
      'Référence technique pour prospects',
      'Base pour blog & pages services dédiées'
    ],
    image: PROJECT_IMAGES['Jëftech'],
    links: {
      live: 'https://jeftech.dev/',
      caseStudy: null
    },
    featured: false,
    year: 2025,
    service: 'developpement-web'
  },
]

const DEMO_PROJECTS = [
  {
    id: 7,
    title: 'SmartStock AI',
    category: 'SaaS & Dashboard',
    description: 'Gestion de stock intelligente avec IA: prévisions de demande, alertes automatiques, analytics avancés.',
    image: PROJECT_IMAGES['SmartStock AI'],
    links: { live: 'https://smartstock-ai-topaz.vercel.app/' },
  },
  {
    id: 2,
    title: 'Foot Vert',
    category: 'Application Web',
    description: 'Plateforme web Next.js + Firebase : réservation temps réel de terrains de foot, paiement CinetPay, multi-complexes, notifications push/email, dashboard admin, PWA installable.',
    image: PROJECT_IMAGES['Foot Vert'],
    links: { live: 'https://foot-vert.vercel.app/' },
  },
  {
    id: 3,
    title: 'Senegal Food App',
    category: 'Application Mobile',
    description: 'App React Native (Expo) + Backend Node.js : catalogue restaurants, panier, paiement Orange Money/Wave, géolocalisation livreurs, notifications push, programme fidélité, dashboard restaurant.',
    image: PROJECT_IMAGES['Senegal Food App'],
    links: { live: 'https://senegal-food-app.vercel.app/' },
  },
]

function ProjectCard({ project, index, isDemo = false }) {
  const liveUrl = project.links?.live || '#'

  const handleLiveClick = (e) => {
    if (liveUrl !== '#') {
      return // Allow default behavior for external links
    }
    e.preventDefault()
  }

  return (
    <article
      key={project.id}
      className={`project-card reveal ${project.featured ? 'featured' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-category={project.category}
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="project-card__image-wrapper">
        <div
          className="project-card__image"
          style={{
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          itemProp="image"
          itemscope
          itemtype="https://schema.org/ImageObject"
        >
          <meta itemProp="url" content={project.image} />
          <meta itemProp="caption" content={project.title} />
        </div>
        <div className="project-card__overlay">
          <span className="project-card__overlay-text">Voir le projet →</span>
        </div>
        {project.featured && <span className="project-badge">Projet phare</span>}
      </div>
      <div className="project-card__content">
        <span className="project-card__category" itemProp="genre">{project.category}</span>
        <h3 className="project-card__title" itemProp="name">{project.title}</h3>
        <p className="project-card__desc" itemProp="description">{isDemo ? project.description : project.solution}</p>
        <div style={{ marginTop: '16px' }}>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__cta"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '14px', fontWeight: 600, color: 'var(--blue)' }}
            onClick={handleLiveClick}
            itemProp="url"
          >
            Voir en ligne <ExternalLink size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
      {/* Structured data for each project */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": isDemo ? project.description : project.solution,
            "genre": project.category,
            "creator": {
              "@id": "https://jeftech.dev/#organization"
            },
            "image": project.image,
            "url": liveUrl,
            "about": {
              "@type": "Service",
              "name": project.category,
              "provider": {
                "@id": "https://jeftech.dev/#organization"
              }
            }
          })
        }}
      />
    </article>
  )
}

function ProjectSection({ title, subtitle, projects, id, eyebrow, isDemo = false }) {
  useReveal()
  const { navigateToAnchor } = useAnchorNavigation()
  return (
    <section id={id} className="section-pad portfolio" aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id={`${id}-title`} className="section-title">{title}</h2>
          <p className="section-sub">{subtitle}</p>
        </div>

        <div className="portfolio__grid" itemScope itemType="https://schema.org/ItemList">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isDemo={isDemo} />
          ))}
        </div>

        {!isDemo && (
          <div className="portfolio__cta reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
            <a
              className="btn btn-outline"
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                navigateToAnchor('#booking')
              }}
              style={{ fontSize: '16px', padding: '16px 32px' }}
            >
              Vous avez un projet similaire ? Parlons-en
            </a>
          </div>
        )}
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
        title="Projets Démo & Expérimentations"
        subtitle="Concepts et prototypes réalisés pour explorer de nouvelles technologies et valider des idées avant production."
        projects={DEMO_PROJECTS}
        isDemo={true}
      />
      <ProjectSection
        id="portfolio-delivered"
        eyebrow="Projets Livrés"
        title="Projets Livrés en Production"
        subtitle="Solutions complètes déployées pour nos clients au Sénégal — du site vitrine au SaaS complexe, en passant par l'e-commerce et le mobile."
        projects={DELIVERED_PROJECTS}
        isDemo={false}
      />
    </>
  )
}