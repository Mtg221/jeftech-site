import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { Calendar, Tag, Clock, ArrowRight, ExternalLink } from 'lucide-react'

export const BLOG_POSTS = [
  {
    slug: 'cout-site-web-senegal',
    title: "Combien coûte la création d'un site web au Sénégal en 2026 ?",
    description: "Guide complet des tarifs pour créer un site web au Sénégal : site vitrine, e-commerce, SaaS. Facteurs de prix, pièges à éviter et retour sur investissement.",
    date: '2026-01-15',
    author: 'Jëftech',
    category: 'Développement Web',
    tags: ['site web', 'tarifs', 'Sénégal', 'budget', 'e-commerce', 'ROI'],
    readTime: '12 min',
    featured: true,
    image: '/blog/images/cout-site-web-senegal.jpg'
  },
  {
    slug: 'choisir-agence-web-senegal',
    title: 'Comment choisir une agence de développement web au Sénégal ?',
    description: '7 critères essentiels pour sélectionner la bonne agence web à Dakar : portfolio, expertise technique, processus, transparence, maintenance, avis clients, feeling.',
    date: '2026-01-22',
    author: 'Jëftech',
    category: 'Conseil',
    tags: ['agence web', 'choix', 'Sénégal', 'Dakar', 'critères', 'portfolio'],
    readTime: '10 min',
    featured: true,
    image: '/blog/images/choisir-agence-web-senegal.jpg'
  },
  {
    slug: 'cout-application-mobile-senegal',
    title: "Combien coûte le développement d'une application mobile au Sénégal ?",
    description: 'Tarifs 2026 pour créer une app mobile au Sénégal : native vs cross-platform, fonctionnalités, backend, stores. Guide complet avec exemples réels.',
    date: '2026-02-01',
    author: 'Jëftech',
    category: 'Applications Mobiles',
    tags: ['application mobile', 'tarifs', 'Sénégal', 'React Native', 'iOS', 'Android', 'budget'],
    readTime: '11 min',
    featured: false,
    image: '/blog/images/cout-application-mobile-senegal.jpg'
  },
  {
    slug: 'digitaliser-pme-senegal',
    title: 'Comment digitaliser une PME sénégalaise en 2026 ?',
    description: 'Guide pratique pour la transformation digitale des PME au Sénégal : audit, priorités, outils, budget, erreurs à éviter. Méthode étape par étape.',
    date: '2026-02-10',
    author: 'Jëftech',
    category: 'Transformation Digitale',
    tags: ['transformation digitale', 'PME', 'Sénégal', 'digitalisation', 'stratégie', 'outils'],
    readTime: '14 min',
    featured: true,
    image: '/blog/images/digitaliser-pme-senegal.jpg'
  },
  {
    slug: 'logiciel-sur-mesure-entreprise',
    title: 'Pourquoi utiliser un logiciel sur mesure pour son entreprise ?',
    description: "Avantages du logiciel sur mesure vs SaaS standard : adaptation métier, propriété, scalabilité, intégration, ROI long terme. Quand choisir le sur-mesure.",
    date: '2026-02-18',
    author: 'Jëftech',
    category: 'Logiciels sur Mesure',
    tags: ['logiciel sur mesure', 'SaaS', 'entreprise', 'ROI', 'développement', 'automatisation'],
    readTime: '10 min',
    featured: false,
    image: '/blog/images/logiciel-sur-mesure-entreprise.jpg'
  },
  {
    slug: 'application-web-vs-mobile',
    title: 'Application web ou application mobile : laquelle choisir ?',
    description: 'Différences entre web app, PWA, app native, hybride. Critères de choix : budget, fonctionnalités, audience, maintenance. Guide de décision avec matrice.',
    date: '2026-02-25',
    author: 'Jëftech',
    category: 'Conseil Technique',
    tags: ['application web', 'application mobile', 'PWA', 'React Native', 'choix', 'architecture'],
    readTime: '12 min',
    featured: false,
    image: '/blog/images/web-vs-mobile-app.jpg'
  }
]

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function BlogCard({ post }) {
  return (
    <article className="blog-card reveal" itemScope itemType="https://schema.org/BlogPosting">
      <Link to={`/blog/${post.slug}`} className="blog-card__link" itemProp="url">
        <div className="blog-card__image-wrapper">
          <div
            className="blog-card__image"
            style={{
              backgroundImage: `url(${post.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            itemProp="image"
            itemscope
            itemtype="https://schema.org/ImageObject"
          >
            <meta itemProp="url" content={post.image} />
            <meta itemProp="caption" content={post.title} />
          </div>
          {post.featured && <span className="blog-badge">À la une</span>}
        </div>
        <div className="blog-card__content">
          <div className="blog-card__meta">
            <span className="blog-card__category" itemProp="articleSection">{post.category}</span>
            <time dateTime={post.date} itemProp="datePublished">
              <Calendar size={14} strokeWidth={1.5} /> {formatDate(post.date)}
            </time>
            <span itemProp="author" itemscope itemtype="https://schema.org/Person" style={{ display: 'none' }}>
              <meta itemProp="name" content={post.author} />
            </span>
          </div>
          <h3 className="blog-card__title" itemProp="headline">{post.title}</h3>
          <p className="blog-card__excerpt" itemProp="description">{post.description}</p>
          <div className="blog-card__footer">
            <span className="blog-card__read-time">
              <Clock size={14} strokeWidth={1.5} /> {post.readTime}
            </span>
            <span className="blog-card__cta">
              Lire la suite <ArrowRight size={14} strokeWidth={2} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default function Blog() {
  useReveal()
  return (
    <section id="blog" className="section-pad blog-page" aria-labelledby="blog-title">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Notre expertise</span>
          <h2 id="blog-title" className="section-title">Blog & Ressources</h2>
          <p className="section-sub">Guides pratiques, analyses de coûts, retours d'expérience et conseils techniques pour vos projets digitaux au Sénégal.</p>
        </div>

        <div className="blog__grid" itemScope itemType="https://schema.org/Blog">
          <meta itemProp="name" content="Blog Jëftech" />
          <meta itemProp="description" content="Guides pratiques et conseils techniques pour le développement web, mobile et la transformation digitale au Sénégal." />
          <meta itemProp="url" content="https://jeftech.dev/blog" />
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        <div className="blog__cta reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
          <p style={{ color: 'var(--gray)', marginBottom: '16px' }}>
            Vous voulez être notifié des prochains articles ?
          </p>
          <a href="#contact" className="btn btn-outline">S'inscrire à la newsletter</a>
        </div>
      </div>
    </section>
  )
}