import { useLocation } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS, SOCIALS } from '../config.js'
import { IconIn, IconIg, IconWa, IconFb, IconX } from './Icons.jsx'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.jsx'

export default function Footer() {
  const location = useLocation()
  const { navigateToAnchor } = useAnchorNavigation()

  const handleNavClick = (href) => {
    navigateToAnchor(href)
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="footer__logo" onClick={(e) => {
            e.preventDefault()
            navigateToAnchor('#top')
          }}>
            <img src="/logo.png" alt="Jëftech" />
            <Wordmark size={22} />
          </a>
        </div>

        <nav className="footer__links" aria-label="Liens de navigation">
          <a href="#top" onClick={(e) => {
            e.preventDefault()
            navigateToAnchor('#top')
          }}>Accueil</a>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(l.href)
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="footer__social">
          <a href={SOCIALS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><IconFb /></a>
          <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><IconIg /></a>
          <a href={SOCIALS.x} target="_blank" rel="noreferrer" aria-label="X"><IconX /></a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><IconIn /></a>
          <a href={SOCIALS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><IconWa /></a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">© 2026 Jëftech. Tous droits réservés.</div>
      </div>
    </footer>
  )
}
