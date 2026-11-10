import { useState, useEffect } from 'react'

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <nav className="header-nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
    </>
  )
}

export default Layout
