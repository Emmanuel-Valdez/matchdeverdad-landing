const integrantes = [
  { nombre: 'Maximo Ariel Pereira', github: 'PereiraMax' },
  { nombre: 'Julian Piedrabuena', github: 'juliganSW' },
  { nombre: 'Martin Savia', github: 'martin-2t' },
  { nombre: 'Emmanuel Valdez', github: 'Emmanuel-Valdez' },
  { nombre: 'Matias Mazzitelli', github: 'mdev-repos' },
]

function Equipo() {
  return (
    <section id="equipo" className="section-light">
      <div className="equipo-inner">
        <h2 className="section-heading">Equipo</h2>
        <ul className="equipo-list">
          {integrantes.map((i) => (
            <li key={i.github} className="equipo-item">
              <span className="equipo-nombre">{i.nombre}</span>
              <a
                href={`https://github.com/${i.github}`}
                className="equipo-github"
                target="_blank"
                rel="noopener noreferrer"
              >
                @{i.github}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Equipo
