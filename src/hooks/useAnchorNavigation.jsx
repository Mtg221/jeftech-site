import { useNavigate, useLocation } from 'react-router-dom'
import { useCallback, useEffect } from 'react'

export function useAnchorNavigation() {
  const navigate = useNavigate()
  const location = useLocation()

  const navigateToAnchor = useCallback((href) => {
    // If it's a route (starts with /), use React Router navigation
    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    // Otherwise it's an anchor link (#services, #booking, etc.)
    const hash = href.startsWith('#') ? href : `#${href}`
    const elementId = hash.replace('#', '')

    if (location.pathname === '/') {
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to homepage, then scroll to element after load
      navigate('/', { replace: true })
      // Store the target element to scroll to after navigation
      sessionStorage.setItem('scrollToAnchor', elementId)
    }
  }, [navigate, location.pathname])

  return { navigateToAnchor }
}

// Hook to handle scrolling to anchor after navigation
export function useScrollToAnchor() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      const anchor = sessionStorage.getItem('scrollToAnchor')
      if (anchor) {
        sessionStorage.removeItem('scrollToAnchor')
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          const element = document.getElementById(anchor)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }, 100)
      }
    }
  }, [location.pathname])
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