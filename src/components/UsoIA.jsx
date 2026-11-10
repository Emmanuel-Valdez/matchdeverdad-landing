const integrantesIA = [
  {
    nombre: 'Emmanuel Valdez',
    github: 'Emmanuel-Valdez',
    herramientas: 'OpenCode Go con modelos Qwen3.7 y DeepSeek 4.1',
    destacado: 'Cierre y responsive',
    asistio: [
      'Cierre del repositorio y pulido de la landing para entrega',
      'Menú hamburguesa responsive con backdrop y cierre por Escape',
      'Escalado de diagramas de flujo (R3/R4) para viewport mobile',
      'Eliminación de min-width forzado en el pipeline',
      'Sección "Uso de IA" con cards expandibles',
      'Limpieza de archivos de prueba',
    ],
    criterio:
      'Revisé y ajusté a mano cada componente tocado: el hamburger se probó con teclado (Tab, Escape) y en viewport 375px. Los diagramas escalados se verificaron visualmente en mobile y desktop.',
  },
  {
    nombre: 'Matias Mazzitelli',
    github: 'mdev-repos',
    herramientas: 'Claude Code con Sonnet 5.5 y Haiku 5.5',
    destacado: 'Arquitectura y sistema de diseño',
    asistio: [
      'Revisión de la arquitectura del repo: estructura de componentes, separación de concerns',
      'Decisiones sobre el sistema de diseño: paleta, tipografías, variables CSS',
      'Estrategia de deploy en Netlify: build command, carpeta dist',
      'Revisión de accesibilidad: contraste, focus-visible en elementos interactivos',
    ],
    criterio:
      'Definí junto con el equipo la estructura de componentes y el flujo de navegación por anclas. Decidí que los diagramas se construyeran en HTML/CSS puro para mantener el bundle liviano.',
  },
  {
    nombre: 'Martin Savia',
    github: 'martin-2t',
    herramientas: 'Claude Code con Sonnet 5.5 y Haiku 5.5',
    destacado: 'Scaffold y paleta base',
    asistio: [
      'Scaffold inicial del proyecto: Vite + React, estructura de carpetas',
      'Configuración de Google Fonts con preconnect y font-display: swap',
      'Sistema de variables CSS para la paleta',
      'Revisión de la estructura semántica del HTML',
    ],
    criterio:
      'Decidí que el proyecto usara Vite por la velocidad de build y el HMR. Definí la paleta basándome en el práctico original y agregué las variables CSS para mantener consistencia.',
  },
  {
    nombre: 'Maximo Ariel Pereira',
    github: 'PereiraMax',
    herramientas: 'Claude Code con Sonnet 5.5 y Haiku 5.5',
    destacado: 'Diagramas y validación de sentencias',
    asistio: [
      'Decisiones sobre la sección de Diagramas de Flujo: estructura de nodos, flechas, ramas',
      'Revisión de la lógica de presentación de R3, R4 y el pipeline',
      'Aporte sobre la sección de Detalles: estructura de datos de entrada/salida',
      'Validación de que los diagramas reflejen correctamente las sentencias',
    ],
    criterio:
      'Propuse que los diagramas usaran una convención visual consistente: óvalos para inicio/fin, rectángulos para acciones, rombos para decisiones, borde dashed para intervención humana.',
  },
  {
    nombre: 'Julian Piedrabuena',
    github: 'juliganSW',
    herramientas: 'Claude Code con Sonnet 5.5 y Haiku 5.5',
    destacado: 'Análisis inicial',
    asistio: [
      'Elaboración del análisis inicial que sirvió como base para la resolución del trabajo',
      'Redacción del contenido de las secciones Sentencias (R3 y R4)',
      'Redacción del contenido de las secciones Propuestas',
      'Definición de la estructura de datos para los desplegables de Detalles',
    ],
    criterio:
      'Como encargado del análisis inicial, definí qué texto iba en cada sección para mantener fidelidad con la consigna. Decidí que las sentencias se mostraran textuales para que el profesor pueda verificar la correspondencia.',
  },
]

function UsoIA() {
  return (
    <section id="ia" className="section-dark">
      <div className="ia-inner">
        <h2 className="section-heading">Uso de IA</h2>
        <p className="ia-intro">
          Cada integrante documenta qué herramientas de IA usó, qué le asistieron y qué decisiones tomó por cuenta propia.
        </p>

        <div className="ia-grid">
          {integrantesIA.map((i) => (
            <details key={i.github} className="ia-card">
              <summary className="ia-card-header">
                <div className="ia-card-title">
                  <span className="ia-card-name">{i.nombre}</span>
                  <span className="ia-card-badge">{i.destacado}</span>
                </div>
                <div className="ia-card-tool">{i.herramientas}</div>
              </summary>

              <div className="ia-card-body">
                <div className="ia-block">
                  <h4 className="ia-block-title">Qué asistió la IA</h4>
                  <ul className="ia-list">
                    {i.asistio.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="ia-block">
                  <h4 className="ia-block-title">Criterio propio</h4>
                  <p>{i.criterio}</p>
                </div>

                <a
                  href={`https://github.com/${i.github}`}
                  className="ia-github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{i.github} en GitHub
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UsoIA
