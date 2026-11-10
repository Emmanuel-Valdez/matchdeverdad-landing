import Layout from './components/Layout'
import Hero from './components/Hero'
import Sentencias from './components/Sentencias'
import Propuestas from './components/Propuestas'

function App() {
  return (
    <Layout>
      <Hero />
      <Sentencias />
      <Propuestas />
      <section id="flujos" className="section-light">
        <div className="section-inner">
          <h2 className="section-heading">Flujos</h2>
          <p>Pendiente</p>
        </div>
      </section>
      <section id="detalles" className="section-dark">
        <div className="section-inner">
          <h2 className="section-heading">Detalles</h2>
          <p>Pendiente</p>
        </div>
      </section>
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
