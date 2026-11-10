const R3 = `Si la invitación es para un jugador nuevo, el bot que lo propuso debe cumplir 4 condiciones antes de poder enviar la invitación:
1) El jugador nuevo debe estar en la lista de amigos del bot,
2) El bot debe tener un lugar disponible en el equipo,
3) El jugador nuevo no debe tener otra invitación pendiente, y
4) El bot debe estar en línea.`

const R4 = `Cuando un jugador quiere invitar a alguien a un equipo, primero debe verificar que esa persona haya dado su permiso explícito. Si no consta ese permiso, el sistema debe informar que la invitación no puede enviarse hasta que el destinatario lo autorice.`

function Sentencias() {
  return (
    <section id="sentencias" className="sentencias">
      <div className="sentencias-inner">
        <h2 className="section-heading">Sentencias originales</h2>
        <div className="sentencia">
          <h3>R3 — Condiciones para invitar</h3>
          <p>{R3}</p>
        </div>
        <div className="sentencia-divider" />
        <div className="sentencia">
          <h3>R4 — Permiso para invitar</h3>
          <p>{R4}</p>
        </div>
      </div>
    </section>
  )
}

export default Sentencias
