import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback } from 'react'

export function useAnchorNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToAnchor = useCallback((anchor) => {
    const hash = anchor.startsWith('#') ? anchor : `#${anchor}`

    if (location.pathname === '/') {
      const element = document.getElementById(anchor.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.hash = hash
      }
    } else {
      navigate(`/${hash}`)
    }
  }, [navigate, location.pathname])

  return { navigateToAnchor }
}

export function AnchorLink({ href, children, className, onClick, ...props }) {
  const { navigateToAnchor } = useAnchorNavigation()

  const handleClick = (e) => {
    if (onClick) onClick(e)
    if (!e.defaultPrevented) {
      e.preventDefault()
      navigateToAnchor(href)
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  )
}