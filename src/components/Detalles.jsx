function Detalles() {
  return (
    <section id="detalles" className="section-dark">
      <div className="detalles-inner">
        <h2 className="section-heading">Detalles de cada propuesta</h2>

        <details className="detalle-card">
          <summary>Asistente de invitaciones (R3)</summary>
          <div className="detalle-content">
            <div className="detalle-row">
              <h4>Datos de entrada</h4>
              <p>Bot que propone, jugador nuevo a invitar, equipo destino.</p>
            </div>
            <div className="detalle-row">
              <h4>Condición</h4>
              <p>4 condiciones simultáneas: amistad en lista, lugar disponible, sin invitación pendiente, bot en línea.</p>
            </div>
            <div className="detalle-row">
              <h4>Acción propuesta</h4>
              <p>Enviar invitación al jugador nuevo.</p>
            </div>
            <div className="detalle-row">
              <h4>Resultado esperado</h4>
              <p>Invitación enviada, jugador nuevo la recibe para aceptar o rechazar.</p>
            </div>
            <div className="detalle-row">
              <h4>Excepciones</h4>
              <p>Si alguna condición falla, no se envía. El asistente informa cuál condición no se cumple.</p>
            </div>
            <div className="detalle-row">
              <h4>Intervención humana</h4>
              <p>El bot corrige la condición fallida (ej. agrega a lista de amigos, libera un lugar) y reintenta.</p>
            </div>
            <div className="detalle-row">
              <h4>Casos de prueba</h4>
              <ul>
                <li><strong>Cumple:</strong> Las 4 condiciones se cumplen → invitación enviada.</li>
                <li><strong>No cumple:</strong> Jugador ya tiene invitación pendiente → no se envía, se informa.</li>
              </ul>
            </div>
            <div className="detalle-row">
              <h4>Decisiones de diseño</h4>
              <p>El tag "⚙ diseño" marca que el nodo "Informa condición fallida" es una decisión del grupo para mejorar UX, no algo explícito en la sentencia R3.</p>
            </div>
          </div>
        </details>

        <details className="detalle-card">
          <summary>Asistente de autorizaciones (R4)</summary>
          <div className="detalle-content">
            <div className="detalle-row">
              <h4>Datos de entrada</h4>
              <p>Jugador que invita, destinatario, equipo destino.</p>
            </div>
            <div className="detalle-row">
              <h4>Condición</h4>
              <p>Consta en el registro que el destinatario dio permiso explícito para recibir invitaciones.</p>
            </div>
            <div className="detalle-row">
              <h4>Acción propuesta</h4>
              <p>Si no consta permiso: solicitar autorización al destinatario. Si autoriza: registrar. Si rechaza: registrar.</p>
            </div>
            <div className="detalle-row">
              <h4>Resultado esperado</h4>
              <p>Permiso registrado (aceptado o rechazado), queda en el sistema para futuras invitaciones.</p>
            </div>
            <div className="detalle-row">
              <h4>Excepciones</h4>
              <p>Si el destinatario no responde, la invitación no se envía hasta que se registre una respuesta.</p>
            </div>
            <div className="detalle-row">
              <h4>Intervención humana</h4>
              <p>El destinatario debe responder manualmente al pedido de permiso.</p>
            </div>
            <div className="detalle-row">
              <h4>Casos de prueba</h4>
              <ul>
                <li><strong>Cumple:</strong> Permiso ya registrado → se puede invitar.</li>
                <li><strong>No cumple:</strong> Sin permiso → se solicita, no se envía hasta autorización.</li>
              </ul>
            </div>
            <div className="detalle-row">
              <h4>Decisiones de diseño</h4>
              <p>El tag "⚙ diseño" en "Informa condición fallida" es una decisión del grupo: la sentencia R4 dice "informar" pero no especifica cómo, el grupo eligió un nodo dedicado.</p>
            </div>
          </div>
        </details>
      </div>
    </section>
  )
}

export default Detalles
