import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Wordmark from './Wordmark.jsx'
import { NAV_LINKS } from '../config.js'
import { useAnchorNavigation } from '../hooks/useAnchorNavigation.jsx'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { navigateToAnchor } = useAnchorNavigation()
  const navLinksRef = useRef(null)
  const burgerRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        burgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && navLinksRef.current && !navLinksRef.current.contains(e.target) && burgerRef.current && !burgerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  const handleNavClick = (href) => {
    setOpen(false)
    navigateToAnchor(href)
  }

  const toggleMenu = () => {
    setOpen((o) => !o)
  }

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={(e) => {
          e.preventDefault()
          setOpen(false)
          navigateToAnchor('#top')
        }}>
          <img src="/logo.png" alt="Jëftech" className="nav__logo" />
          <Wordmark size={20} />
        </a>

        <nav id="nav-links" ref={navLinksRef} className={`nav__links ${open ? 'nav__links--open' : ''}`} role="navigation" aria-label="Navigation principale">
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
          <a
            className="btn btn-primary nav__cta-mobile"
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#booking')
            }}
          >
            Prendre RDV
          </a>
        </nav>

        <a
          className="btn btn-primary nav__cta"
          href="#booking"
          onClick={(e) => {
            e.preventDefault()
            navigateToAnchor('#booking')
          }}
        >
          Prendre RDV
        </a>

        <button
          ref={burgerRef}
          className={`nav__burger ${open ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="nav-links"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
