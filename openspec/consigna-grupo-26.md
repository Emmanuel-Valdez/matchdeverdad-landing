# TP3 · Dos sentencias, dos soluciones · IFTS 29

Desarrollo de Sistemas Web · Front End · 2026 · 2do Cuatrimestre

**Fuente:** <https://ifts29-portada.vercel.app/trayecto/tp3/>

**Entrega:** 26/11/2026
**Modalidad:** grupal, como TP1 y TP2
**Producto:** una landing · dos flujos
**Evaluación:** sin nota numérica · rúbrica · Aprobado / Desaprobado
**Tecnología:** HTML, CSS y JS o framework a elección

---

## EL DESAFÍO · CONSTRUCCIÓN 100% AGÉNTICA

### Ustedes dirigen. El agente construye.

El desafío es **no tocar el código: hacerlo 100% agéntico**. Pidan al agente que genere y modifique todos los archivos; dirijan el trabajo mediante instrucciones y revisiones, sin editar código manualmente. Usen agentes de programación como **Cursor, Antigravity, Codex u OpenCode**. Pueden usar una herramienta o alternar entre varias según sus cupos gratuitos disponibles; no se requiere contratar un plan pago.

**Usan IA para construir la página.** La landing presenta dos propuestas de automatización; no tiene que incorporar IA ni ejecutar esos agentes.

---

## PASO A PASO

1. **Organicen el trabajo del grupo.** Todos deben participar. Dejen en el README los integrantes y el aporte concreto de cada uno.
2. **Recuperen la startup y el bloque asignado.** Nombre, logo original (completo y legible), descripción del servicio. Conserven la redacción original de las sentencias.
3. **Desarmen cada sentencia antes de proponer.** Para cada una: qué información hace falta, cuál es la condición, qué consecuencia establece. Mantengan el sentido de "y", "o" o la negación.
4. **Definan una propuesta por sentencia.** Expliquen qué haría el futuro agente, para qué serviría, qué resultado produciría. Indiquen si necesita consultar una herramienta o pedir intervención humana.
5. **Representen gráficamente los dos recorridos.** Diagrama para cada propuesta: inicio, datos de entrada, decisión, acciones y resultado. Flechas y rotulación. Si hacen falta aprobaciones humanas, inclúyanlas como pasos.
6. **Encargo completo al agente para la landing.** Presentación de la startup, las dos sentencias, las dos propuestas, los diagramas y los desplegables con detalles.
7. **Prueben y pidan correcciones.** Desktop. Logo completo, diagramas legibles, desplegables con clic y teclado. Recorran un caso que cumple y otro que no, para cada flujo.
8. **Documenten en el README.** Grupo, integrantes y aportes; startup y bloque; aplicaciones y modelos de IA (distinguir aplicación de modelo). Si alternaron herramientas, registren cada una.
9. **Publiquen repo y landing.** Enlaces accesibles desde ventana sin sesión.
10. **Revisen la rúbrica.**

---

## QUÉ DEBE MOSTRAR LA LANDING

### La startup y su necesidad
- Nombre, logo completo y legible, servicio, breve descripción del problema.
- Identificar al equipo y el bloque asignado.
- **Reconocer el origen de la startup en el IFTS 16.**

### Una solución para cada sentencia
- Mostrar la sentencia original.
- Título para la solución.
- Explicación breve del beneficio.

### El recorrido, a simple vista
- Dos flujos gráficos dentro de la página.
- Pueden construirlos con HTML/CSS, SVG o imágenes legibles acompañadas de explicación textual.

### Los detalles de cada solución
- Desplegables que muestren: datos de entrada, qué se decide, qué acción se propone, resultado esperado.
- Explicar excepciones e intervención humana cuando corresponda.

### (Opcional) Identidad del grupo
Pueden presentarse como startup con logo propio, pero **sin reemplazar** al logo de la startup asignada.

---

## ANTES DE DARLA POR TERMINADA

- ✓ Identificamos la startup y el bloque del equipo.
- ✓ Incluimos las dos sentencias y una propuesta para cada una.
- ✓ Los dos flujos respetan las condiciones originales.
- ✓ Se entienden las decisiones, acciones y resultados.
- ✓ El logo y los diagramas se ven completos y legibles.
- ✓ Los desplegables se abren con clic y teclado.
- ✓ La página se puede leer y recorrer en desktop sin desbordes.
- ✓ Otra persona puede explicar la propuesta después de recorrerla.

**Revisión en desktop.** La identidad y logo del grupo son opcionales.

---

## RÚBRICA

Sin nota numérica. Resultado Aprobado / Desaprobado. Niveles: No cumple, Cumple, Propone.

| Criterio | No cumple | Cumple | Propone |
|----------|-----------|--------|---------|
| **01 · Participación** | No se identifica participación de todos o el grupo no puede explicar la propuesta | Todos participan, pueden explicar, registran aportes en README | Además documentan revisión entre integrantes y una mejora concreta |
| **02 · Repo y landing publicados** | Falta enlace, no accesible o sitio no muestra la entrega | Repo y sitio accesibles sin sesión; README con enlace correcto | El README permite reproducir el proyecto e incluye comprobación clara de enlaces |
| **03 · Landing acorde** | Faltan contenidos obligatorios, el logo o los desplegables; no se puede recorrer en desktop | Presenta startup con logo original, dos sentencias, propuestas y desplegables; funciona y se lee en desktop | Información con especial claridad y agrega recursos de navegación/explicación |
| **04 · Dos flujos agénticos** | Falta un flujo, no se entiende o contradice las sentencias | Dos diagramas legibles, uno por sentencia, con datos, decisiones, acciones y resultados coherentes; distingue supuestos agregados | Explica un caso límite o excepción en cada flujo con intervención humana cuando corresponda |
| **05 · Herramientas IA** | No declara qué herramientas usó | README identifica aplicaciones, modelos (o "no informado"), usos y aportes; describe construcción agéntica y correcciones pedidas | Presenta evidencia de iteración: instrucción inicial, problema detectado y pedido de mejora |

---

## GRUPO 26 — ASIGNACIÓN

### Matchdeverdad

Deportes y organización de partidos

**Objetivo de la startup:** Organizador de fútbol 5 que ayuda a reunir diez jugadores confirmados.

**Bloque:** Permiso para invitar

**Logo:** S07.webp

### FRASE 1 · R3

> Si un candidato sigue siendo compatible, el organizador autorizó invitarlo, todavía faltan jugadores y no hay una invitación vigente para ese candidato, el sistema solicita enviar la invitación.

### FRASE 2 · R4

> Si hay un candidato propuesto, todavía faltan jugadores y no consta autorización del organizador para invitarlo, el sistema solicita ese permiso y no envía la invitación.

---

### Condiciones a respetar literalmente

**R3 (4 condiciones simultáneas):**
1. El candidato sigue siendo compatible.
2. El organizador autorizó invitarlo.
3. Todavía faltan jugadores.
4. No hay una invitación vigente para ese candidato.

→ Si las 4 se cumplen: **el sistema solicita enviar la invitación.**

**R4 (3 condiciones):**
1. Hay un candidato propuesto.
2. Todavía faltan jugadores.
3. No consta autorización del organizador para invitarlo.

→ Si las 3 se cumplen: **el sistema solicita ese permiso (al organizador) y NO envía la invitación.**

La palabra clave en R4 es **autorización del organizador** — no del destinatario ni de otro actor.

---

## ESTRUCTURA ORIENTATIVA DE LOS DIAGRAMAS

```
Información de entrada
       ↓
¿Se cumple la condición?
       ↓
  SÍ ↓                    NO ↓
Acción y resultado    Alternativa o intervención humana
```

Que una condición no se cumpla **no implica automáticamente lo contrario** de su consecuencia — adaptar cada diagrama a su sentencia.

---

## CONSTRUCCIÓN DE LA LANDING (resumen técnico)

- React opcional. HTML/CSS/JS o framework a elección.
- Logo completo y legible.
- Desplegables con clic y teclado.
- Desktop como viewport de revisión.
- No implementar la automatización: solo explicarla y graficarla.
