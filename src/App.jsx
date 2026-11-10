import Layout from './components/Layout'
import Hero from './components/Hero'
import Sentencias from './components/Sentencias'
import Propuestas from './components/Propuestas'
import Flujos from './components/Flujos'
import Detalles from './components/Detalles'
import Equipo from './components/Equipo'
import UsoIA from './components/UsoIA'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Hero />
      <Sentencias />
      <Propuestas />
      <Flujos />
      <Detalles />
      <Equipo />
      <UsoIA />
      <Footer />
    </Layout>
  )
}

export default App
