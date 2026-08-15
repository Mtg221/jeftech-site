import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import { Calendar, Tag, Clock, ArrowRight, ExternalLink } from 'lucide-react'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.jsx'
import { BLOG_POSTS } from '../data/blog-posts.js'

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
  const { navigateToAnchor } = useAnchorNavigation()

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
          <a
            href="#booking"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault()
              navigateToAnchor('#booking')
            }}
          >
            Réserver un appel pour en discuter
          </a>
        </div>
      </div>
    </section>
  )
}