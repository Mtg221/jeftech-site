import { useEffect, useState } from 'react'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS } from '../config.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="Jëftech" className="nav__logo" />
          <Wordmark size={20} />
        </a>

        <nav className={`nav__links ${open ? 'nav__links--open' : ''}`}>
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn-primary nav__cta-mobile" href="#booking" onClick={() => setOpen(false)}>
            Prendre RDV
          </a>
        </nav>

        <a className="btn btn-primary nav__cta" href="#booking">
          Prendre RDV
        </a>

        <button className={`nav__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
