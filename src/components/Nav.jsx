import { useEffect, useState } from 'react'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
]

function Nav() {
  const [activeSection, setActiveSection] = useState('home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [])

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  const toggleClassName = isMenuOpen ? 'nav-toggle is-open' : 'nav-toggle'
  const menuClassName = isMenuOpen ? 'nav-links is-open' : 'nav-links'
  const toggleLabel = isMenuOpen ? 'Close menu' : 'Open menu'

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#home" className="nav-brand">Diojeh Mer Villaluna</a>

        <button
          type="button"
          className={toggleClassName}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
          aria-label={toggleLabel}
          onClick={toggleMenu}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <ul id="nav-menu" className={menuClassName}>
          {navLinks.map((link) => {
            const isActive = link.id === activeSection

            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={isActive ? 'nav-link is-active' : 'nav-link'}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
