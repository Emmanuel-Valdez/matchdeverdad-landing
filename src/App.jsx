import Layout from './components/Layout'
import Hero from './components/Hero'
import Sentencias from './components/Sentencias'
import Propuestas from './components/Propuestas'
import Flujos from './components/Flujos'
import Detalles from './components/Detalles'

function App() {
  return (
    <Layout>
      <Hero />
      <Sentencias />
      <Propuestas />
      <Flujos />
      <Detalles />
      <section id="equipo" className="section-light">
        <div className="section-inner">
          <h2 className="section-heading">Equipo</h2>
          <p>Pendiente</p>
        </div>
      </section>
      <section id="ia" className="section-dark">
        <div className="section-inner">
          <h2 className="section-heading">IA</h2>
          <p>Pendiente</p>
        </div>
      </section>
    </Layout>
  )
}

export default App
