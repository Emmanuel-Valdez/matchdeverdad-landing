function Flujos() {
  return (
    <section id="flujos" className="section-light">
      <div className="flujos-inner">
        <h2 className="section-heading">Diagramas de flujo</h2>
        
        <div className="diagramas-grid">
          <div className="diagrama-card">
            <h3>R3 — Condiciones para invitar</h3>
            <div className="flow-diagram">
              <div className="flow-node flow-start">Inicio</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node flow-action">Consulta 4 condiciones</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node flow-decision">¿Cumple todas?</div>
              <div className="flow-branches">
                <div className="flow-branch">
                  <div className="flow-label">SÍ</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-action">Solicita enviar invitación</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-end">Fin</div>
                </div>
                <div className="flow-branch">
                  <div className="flow-label">NO</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-human">
                    Informa condición fallida
                    <span className="flow-tag">⚙ diseño</span>
                  </div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-end">Fin</div>
                </div>
              </div>
            </div>
          </div>

          <div className="diagrama-card">
            <h3>R4 — Permiso para invitar</h3>
            <div className="flow-diagram">
              <div className="flow-node flow-start">Inicio</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node flow-action">Consulta 3 condiciones</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-node flow-decision">¿Consta permiso?</div>
              <div className="flow-branches">
                <div className="flow-branch">
                  <div className="flow-label">SÍ</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-action">Solicita permiso</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-decision">¿Autoriza?</div>
                  <div className="flow-sub-branches">
                    <div className="flow-sub-branch">
                      <div className="flow-label">Sí</div>
                      <div className="flow-arrow">↓</div>
                      <div className="flow-node flow-action">Registra autorización</div>
                      <div className="flow-arrow">↓</div>
                      <div className="flow-node flow-end">Fin</div>
                    </div>
                    <div className="flow-sub-branch">
                      <div className="flow-label">No</div>
                      <div className="flow-arrow">↓</div>
                      <div className="flow-node flow-action">Registra rechazo</div>
                      <div className="flow-arrow">↓</div>
                      <div className="flow-node flow-end">Fin</div>
                    </div>
                  </div>
                </div>
                <div className="flow-branch">
                  <div className="flow-label">NO</div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-human">
                    Informa condición fallida
                    <span className="flow-tag">⚙ diseño</span>
                  </div>
                  <div className="flow-arrow">↓</div>
                  <div className="flow-node flow-end">Fin</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="diagrama-pipeline">
          <h3>Pipeline R4 → R3</h3>
          <div className="flow-diagram">
            <div className="flow-node flow-start">Candidato propuesto</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node flow-action">R4: ¿Consta autorización?</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node flow-decision">Sí → Autorización registrada</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node flow-action">R3: ¿Cumple 4 condiciones?</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node flow-decision">Sí → Solicita enviar invitación</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-node flow-end">Fin</div>
          </div>
        </div>

        <div className="diagrama-leyenda">
          <h4>Leyenda</h4>
          <div className="leyenda-grid">
            <div className="leyenda-item">
              <div className="leyenda-node leyenda-start-end"></div>
              <span>Inicio / Fin</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-node leyenda-action"></div>
              <span>Acción</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-node leyenda-decision"></div>
              <span>Decisión</span>
            </div>
            <div className="leyenda-item">
              <div className="leyenda-node leyenda-human"></div>
              <span>Intervención humana</span>
            </div>
            <div className="leyenda-item">
              <span className="flow-tag">⚙ diseño</span>
              <span>Decisión del grupo, no derivada de la sentencia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Flujos
