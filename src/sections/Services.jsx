import useReveal from '../hooks/useReveal.js'
import { Globe, Smartphone, LayoutDashboard, CreditCard, Server, Settings2, Code2, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    id: 'developpement-web',
    icon: Globe,
    title: 'Développement Web',
    slug: 'developpement-web',
    shortDesc: 'Sites vitrine, e-commerce et plateformes SaaS sur mesure.',
    fullDesc: 'Nous concevons et développons des sites web performants, accessibles et optimisés pour le référencement. Du site vitrine pour présenter votre activité à la plateforme SaaS complexe, en passant par le e-commerce intégré aux moyens de paiement locaux (Orange Money, Wave, carte bancaire).',
    features: [
      'Sites vitrine professionnels et responsives',
      'E-commerce avec paiement mobile money (Orange Money, Wave)',
      'Plateformes SaaS et applications web métiers',
      'Refonte et optimisation de sites existants',
      'SEO technique et performance (Core Web Vitals)',
      'Accessibilité RGAA / WCAG 2.1'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Node.js'],
    ctaText: 'Discuter de votre projet web',
    ctaHref: '#booking'
  },
  {
    id: 'applications-mobiles',
    icon: Smartphone,
    title: 'Applications Mobiles',
    slug: 'applications-mobiles',
    shortDesc: 'Apps natives et cross-platform iOS & Android.',
    fullDesc: 'Développement d\'applications mobiles sur mesure pour iOS et Android. Nous utilisons React Native et Expo pour un développement rapide et un code partagé, ou le natif (Swift/Kotlin) quand la performance le nécessite. Intégration des paiements mobiles, notifications push, mode hors-ligne.',
    features: [
      'Applications iOS & Android (React Native / Expo)',
      'Applications natives Swift / Kotlin si besoin',
      'Paiements mobile money intégrés',
      'Mode hors-ligne et synchronisation',
      'Notifications push et temps réel',
      'Publication App Store & Play Store'
    ],
    technologies: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Supabase', 'EAS Build'],
    ctaText: 'Créer votre application mobile',
    ctaHref: '#booking'
  },
  {
    id: 'applications-web',
    icon: LayoutDashboard,
    title: 'Applications Web & SaaS',
    slug: 'applications-web',
    shortDesc: 'Applications métier, dashboards et portails clients sur mesure.',
    fullDesc: 'Nous construisons des applications web complexes : dashboards analytiques, portails clients, outils de gestion internes, plateformes multi-utilisateurs. Architecture modulaire, API robustes, authentification SSO, gestion des droits (RBAC), déploiement cloud scalable.',
    features: [
      'Dashboards et tableaux de bord décisionnels',
      'Portails clients et espaces membres',
      'Outils de gestion interne (CRM, ERP légers)',
      'API REST / GraphQL documentées',
      'Authentification SSO, 2FA, RBAC',
      'Hébergement cloud auto-scalable'
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Docker', 'AWS/Vercel'],
    ctaText: 'Développer votre application web',
    ctaHref: '#booking'
  },
  {
    id: 'logiciels-sur-mesure',
    icon: Code2,
    title: 'Logiciels sur Mesure',
    slug: 'logiciels-sur-mesure',
    shortDesc: 'Logiciels d\'entreprise, automatisations et outils métiers.',
    fullDesc: 'Conception de logiciels sur mesure pour automatiser vos processus métiers uniques. Étude de l\'existant, modélisation, développement itératif, tests, formation des équipes, maintenance évolutive. Code source vous appartient, documentation complète fournie.',
    features: [
      'Analyse et modélisation de vos processus',
      'Développement agile par itérations',
      'Automatisation de tâches répétitives',
      'Intégration avec vos outils existants (API, EDI)',
      'Propriété du code source et documentation',
      'Maintenance et évolutions sur le long terme'
    ],
    technologies: ['Python', 'Node.js', 'Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    ctaText: 'Automatiser vos processus',
    ctaHref: '#booking'
  },
  {
    id: 'transformation-digitale',
    icon: Settings2,
    title: 'Transformation Digitale',
    slug: 'transformation-digitale',
    shortDesc: 'Audit, stratégie et accompagnement de la digitalisation.',
    fullDesc: 'Nous accompagnons les dirigeants dans la transformation digitale de leur entreprise : audit de maturité numérique, définition de la roadmap, choix technologiques, gestion du changement, formation des équipes, mise en place d\'indicateurs de suivi (KPIs). Approche pragmatique et ROI-oriented.',
    features: [
      'Audit de maturité digitale de l\'entreprise',
      'Stratégie et feuille de route numérique',
      'Cadrage et priorisation des projets',
      'Gestion du changement et formation',
      'Suivi KPIs et ROI des initiatives',
      'Accompagnement direction / COMEX'
    ],
    technologies: ['Ateliers', 'Cadrage', 'Roadmap', 'KPIs', 'Formation', 'Coaching'],
    ctaText: 'Lancer votre transformation',
    ctaHref: '#booking'
  },
  {
    id: 'design-ui-ux',
    icon: CreditCard,
    title: 'Design UI/UX & Intégration Paiement',
    slug: 'design-ui-ux-paiement',
    shortDesc: 'Interfaces claires, modernes et paiements sécurisés.',
    fullDesc: 'Conception d\'interfaces utilisateur centrées sur l\'expérience : recherche utilisateur, wireframes, prototypes interactifs, design system, tests d\'utilisabilité. Intégration de solutions de paiement sécurisées : Stripe, PayPal, CinetPay, Orange Money, Wave, virements bancaires.',
    features: [
      'Recherche utilisateur & tests d\'utilisabilité',
      'Wireframes, prototypes, design systems',
      'Accessibilité et design inclusif',
      'Intégration paiements : Stripe, CinetPay, Orange Money, Wave',
      'Conformité PCI-DSS et sécurité',
      'Optimisation taux de conversion (CRO)'
    ],
    technologies: ['Figma', 'Stripe', 'CinetPay', 'Orange Money API', 'Wave API'],
    ctaText: 'Améliorer votre UX & paiements',
    ctaHref: '#booking'
  }
]

function ServiceCard({ service, index }) {
  const Icon = service.icon
  return (
    <article
      className="svc-card reveal"
      style={{ transitionDelay: `${index * 60}ms` }}
      key={service.id}
      itemScope
      itemType="https://schema.org/Service"
      itemRef="organization"
    >
      <div className="svc-card__icon" itemProp="image" itemscope itemtype="https://schema.org/ImageObject">
        <Icon size={24} strokeWidth={1.5} style={{ color: '#1A56FF' }} />
        <meta itemProp="url" content={`https://jeftech.dev/icons/${service.id}.svg`} />
      </div>
      <h3 itemProp="name">{service.title}</h3>
      <p itemProp="description">{service.shortDesc}</p>
      <ul className="svc-card__features" style={{ marginTop: '16px', paddingLeft: '20px', fontSize: '14px', color: 'var(--gray)' }}>
        {service.features.slice(0, 3).map((f, i) => (
          <li key={i} style={{ marginBottom: '6px' }}>✓ {f}</li>
        ))}
      </ul>
      <a
        className="svc-card__link"
        href={service.ctaHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '20px',
          fontWeight: 600,
          fontSize: '14px',
          color: 'var(--blue)',
          textDecoration: 'none'
        }}
        itemProp="url"
      >
        {service.ctaText} <ArrowRight size={16} strokeWidth={2} />
      </a>
      <span className="svc-card__glow" />
    </article>
  )
}

export default function Services() {
  useReveal()
  return (
    <section id="services" className="section-pad services" aria-labelledby="services-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Nos expertises</span>
          <h2 id="services-title" className="section-title">Nos services au Sénégal</h2>
          <p className="section-sub">Une équipe polyvalente basée à Dakar qui couvre tout le cycle de votre produit digital : de l'idée à la mise en production, avec maintenance dans la durée.</p>
        </div>

        <div className="services__grid" itemScope itemType="https://schema.org/ItemList" id="organization">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>

        <div className="services__cta reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <a className="btn btn-outline" href="#booking" style={{ fontSize: '16px', padding: '16px 32px' }}>
            Besoin d'un service sur mesure ? Parlons-en
          </a>
        </div>

        {/* Structured Data for Services - injected via JSON-LD in index.html for SSR compatibility */}
      </div>
    </section>
  )
}