import { useState, useEffect, useCallback } from 'react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sentencias', label: 'Sentencias' },
  { href: '#propuestas', label: 'Propuestas' },
  { href: '#flujos', label: 'Flujos' },
  { href: '#detalles', label: 'Detalles' },
  { href: '#equipo', label: 'Equipo' },
  { href: '#ia', label: 'IA' },
]

function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => { if (e.key === 'Escape') closeMenu() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [menuOpen, closeMenu])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="header-brand">
            <span className="wordmark">Matchdeverdad</span>
            <span className="header-tag">Grupo 26</span>
          </div>
          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      {menuOpen && <div className="nav-backdrop" onClick={closeMenu} />}
      <main id="main-content">{children}</main>
    </>
  )
}

export default Layout
