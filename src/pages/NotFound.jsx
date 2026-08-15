import { Link } from 'react-router-dom'
import { ArrowLeft, Home, Search } from 'lucide-react'
import useReveal from '../hooks/useReveal.js'

export default function NotFound() {
  useReveal()
  return (
    <section className="section-pad not-found" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container reveal">
        <div style={{ fontSize: 'clamp(120px, 20vw, 200px)', fontWeight: 800, color: 'var(--blue)', lineHeight: 1, fontFamily: 'var(--display)', marginBottom: '16px' }}>
          404
        </div>
        <h1 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px, 4vw, 42px)', color: 'var(--navy)', marginBottom: '16px' }}>
          Page introuvable
        </h1>
        <p style={{ color: 'var(--gray)', fontSize: '18px', maxWidth: '500px', margin: '0 auto 32px' }}>
          Cette page n'existe pas ou a été déplacée. Pas de souci, ça arrive aux meilleurs.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Home size={18} strokeWidth={2} /> Retour à l'accueil
          </Link>
          <Link to="/blog" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Search size={18} strokeWidth={2} /> Voir le blog
          </Link>
        </div>
        <p style={{ color: 'var(--gray-dim)', fontSize: '14px', marginTop: '24px' }}>
          Besoin d'aide ? <a href="mailto:contact@jeftech.dev" style={{ color: 'var(--blue)', textDecoration: 'underline' }}>Écrivez-nous</a>
        </p>
      </div>
    </section>
  )
}