const integrantes = [
  { nombre: 'Maximo Ariel Pereira', github: 'PereiraMax', ia: 'Modelo no informado' },
  { nombre: 'Julian Piedrabuena', github: 'juliganSW', ia: 'Modelo no informado' },
  { nombre: 'Martin Savia', github: 'martin-2t', ia: 'Modelo no informado' },
  { nombre: 'Emmanuel Valdez', github: 'Emmanuel-Valdez', ia: 'opencode / DeepSeek 4.1 + Beam free' },
  { nombre: 'Matias Mazzitelli', github: 'mdev-repos', ia: 'Modelo no informado' },
]

function Equipo() {
  return (
    <>
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

      <section id="ia" className="section-dark">
        <div className="equipo-inner">
          <h2 className="section-heading">Aplicaciones y modelos de IA</h2>
          <table className="ia-table">
            <thead>
              <tr>
                <th>Integrante</th>
                <th>Aplicación / Modelo</th>
              </tr>
            </thead>
            <tbody>
              {integrantes.map((i) => (
                <tr key={i.github}>
                  <td>@{i.github}</td>
                  <td>{i.ia}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Equipo
