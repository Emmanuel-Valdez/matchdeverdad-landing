function Propuestas() {
  return (
    <section id="propuestas" className="propuestas">
      <div className="propuestas-inner">
        <h2 className="section-heading">Propuestas</h2>
        <div className="propuestas-grid">
          <div className="propuesta-card">
            <h3>Asistente de invitaciones</h3>
            <p className="propuesta-agente">
              Agente que verifica las 4 condiciones de R3 antes de enviar
              una invitación a un jugador nuevo.
            </p>
            <h4>Herramientas</h4>
            <ul>
              <li>Consulta lista de amigos del bot</li>
              <li>Verifica disponibilidad del equipo</li>
              <li>Consulta invitaciones pendientes</li>
              <li>Verifica estado en línea del bot</li>
            </ul>
            <h4>Beneficio</h4>
            <p>
              Garantiza que cada invitación cumple todas las condiciones
              antes de enviarse, reduciendo errores y confusiones.
            </p>
            <h4>Intervención humana</h4>
            <p>
              Si una condición no se cumple, el asistente informa cuál
              falla y no envía la invitación.
            </p>
          </div>
          <div className="propuesta-card">
            <h3>Asistente de autorizaciones</h3>
            <p className="propuesta-agente">
              Agente que verifica el permiso explícito de R4 antes de
              permitir una invitación.
            </p>
            <h4>Herramientas</h4>
            <ul>
              <li>Consulta registro de permisos</li>
              <li>Solicita autorización al destinatario</li>
              <li>Registra respuesta (acepta/rechaza)</li>
            </ul>
            <h4>Beneficio</h4>
            <p>
              Asegura que nadie reciba invitaciones sin haber dado su
              consentimiento previo.
            </p>
            <h4>Intervención humana</h4>
            <p>
              Si no consta permiso, el asistente informa y espera la
              autorización del destinatario antes de continuar.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Propuestas
