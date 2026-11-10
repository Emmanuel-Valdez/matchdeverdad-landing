function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <img src="/brand/S07.svg" alt="Matchdeverdad — Fútbol 5" className="hero-logo" />
        <h1 className="hero-title">Matchdeverdad</h1>
        <p className="hero-desc">
          Completá tu partido de fútbol 5. Conectamos jugadores con equipos
          para que nadie quede afuera de la cancha.
        </p>
        <div className="hero-permiso">
          <p>Permiso para invitar</p>
        </div>
        <p className="hero-tag">Grupo 26 · IFTS 29 · 2026</p>
        <a href="#propuestas" className="hero-cta">Ver propuestas</a>
      </div>
    </section>
  )
}

export default Hero
