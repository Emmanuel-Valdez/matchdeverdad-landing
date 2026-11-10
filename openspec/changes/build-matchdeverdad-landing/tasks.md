## 1. Scaffold del proyecto

- [x] 1.1 Inicializar proyecto React + Vite (`npm create vite@latest . -- --template react`) y verificar que `npm run dev` abre la página en localhost:5173
- [x] 1.2 Copiar `S07.webp` a `public/brand/S07.webp` y verificar que el archivo es accesible en `/brand/S07.webp` durante `npm run dev`
- [x] 1.3 Agregar Cabinet Grotesk y Manrope desde Google Fonts en `index.html` (con `preconnect` y `font-display: swap`) y verificar que se cargan sin errores en la consola
- [x] 1.4 Configurar `index.html` con `<html lang="es">` y verificar que el atributo está presente

## 2. Estructura base y navegación

- [x] 2.1 Crear componente `Layout` con header fijo (wordmark "Matchdeverdad" en Cabinet Grotesk + etiqueta "Grupo 26") y main content area; verificar que el header es visible al hacer scroll
- [x] 2.2 Agregar navegación por anclas en el header (`#inicio`, `#sentencias`, `#propuestas`, `#flujos`, `#detalles`, `#equipo`, `#ia`) con scroll suave (`scroll-behavior: smooth` en CSS) y verificar que cada enlace lleva a su sección
- [x] 2.3 Agregar skip link ("Saltar al contenido") que aparece con Tab y lleva al main; verificar que funciona con teclado

## 3. Hero / Presentación de startup

- [x] 3.1 Crear sección `#inicio` (hero) con fondo canvas-dark (`#0b2a6b`), logo completo (`S07.webp`, max-width 450px), nombre "Matchdeverdad", descripción del servicio, bloque "Permiso para invitar" y etiqueta "Grupo 26 · IFTS 29 · 2026"; verificar que todos los elementos son visibles y legibles
- [x] 3.2 Agregar botón CTA pill amarillo ("Ver propuestas") que navega a `#propuestas`; verificar que el botón tiene 48px de alto, fondo `#f5c400`, texto `#0b2a6b`, `rounded-full`, y es clickeable

## 4. Sentencias originales

- [x] 4.1 Crear sección `#sentencias` con fondo canvas-light (`#ffffff`), mostrando R3 y R4 con su redacción literal del `Trabajo práctico — Matchdeverdad.md`; verificar que el texto coincide exactamente con la fuente
- [x] 4.2 Estilizar las sentencias con tipografía Manrope 18px, color `#0b2a6b`, y separar R3/R4 con un divisor sutil (`hairline-light`); verificar legibilidad

## 5. Propuestas

- [x] 5.1 Crear sección `#propuestas` con fondo canvas-dark, dos tarjetas (rounded-md 8px, fondo `#123c8c`, padding 24px): "Asistente de invitaciones" (R3) y "Asistente de autorizaciones" (R4); verificar que ambas tarjetas son visibles con título, explicación del agente, herramientas, beneficio e intervención humana
- [x] 5.2 Copiar el contenido de cada propuesta desde `Trabajo práctico — Matchdeverdad.md` (secciones R3 y R4 corregidas) y verificar que coincide con la fuente actualizada

## 6. Diagramas de flujo

- [ ] 6.1 Crear sección `#flujos` con fondo canvas-light, contenedor para los dos diagramas lado a lado (o apilados si no hay espacio); verificar que el contenedor no genera overflow horizontal
- [ ] 6.2 Construir diagrama R3 en HTML/CSS: nodos (rounded-full para inicio/fin, rounded-md para acciones), flechas amarillas (`#f5c400`) con puntas, tag "⚙ diseño" en el nodo "Informa condición fallida", leyenda al pie; verificar que el flujo es legible: inicio → consulta 4 condiciones → decisión → SÍ: solicita enviar → fin; NO: ⚙ informa condición fallida → fin
- [ ] 6.3 Construir diagrama R4 en HTML/CSS con misma vocabulario de formas; verificar flujo: inicio → consulta 3 condiciones → decisión → SÍ: solicita permiso → autoriza (registra) / rechaza (registra) → fin; NO: ⚙ informa condición fallida → fin
- [ ] 6.4 Construir diagrama pipeline R4→R3 que muestra la relación entre ambas sentencias; verificar que se entiende: candidato propuesto → R4 (si no consta autorización) → autorización registrada → R3 (si 4 condiciones) → solicita enviar invitación
- [ ] 6.5 Agregar leyenda general de diagramas que explique: nodos de inicio/fin, nodos de acción, nodos de decisión, intervención humana (borde dashed), y tag "⚙ diseño" = decisión del grupo no derivada de la sentencia; verificar que la leyenda es visible y clara

## 7. Desplegables de detalles

- [ ] 7.1 Crear sección `#detalles` con fondo canvas-dark, dos `<details>` nativos (uno por propuesta) con `<summary>` estilizado como botón pill; verificar que cada desplegable se abre/cierra con clic
- [ ] 7.2 Agregar contenido detallado dentro de cada `<details>`: datos de entrada, condición, acción propuesta, resultado esperado, excepciones, intervención humana, casos de prueba (cumple/no cumple), decisiones de diseño del grupo; verificar que el contenido es legible sobre fondo oscuro
- [ ] 7.3 Verificar que los `<details>` son operables con teclado: Tab hasta el `<summary>`, Enter o Space para abrir/cerrar; verificar que funciona sin JavaScript
- [ ] 7.4 Agregar `:focus-visible` con estilo visible (ej. ring amarillo 2px) a los `<summary>`; verificar que el foco es visible al navegar con Tab

## 8. Equipo y registry de IA

- [ ] 8.1 Crear sección `#equipo` con fondo canvas-light, lista de los 5 integrantes con nombre y usuario de GitHub (PereiraMax, juliganSW, martin-2t, Emmanuel-Valdez, mdev-repos); verificar que todos aparecen
- [ ] 8.2 Crear sección `#ia` (puede ser parte de `#equipo` o separada) con tabla o lista de aplicaciones y modelos de IA por integrante; verificar que Emmanuel tiene "opencode / DeepSeek 4.1 + Beam free" y los demás tienen "modelo no informado" hasta que el grupo complete la info

## 9. Footer

- [ ] 9.1 Crear footer con fondo canvas-dark, enlaces al repositorio público y a la landing publicada en Netlify (URLs a completar cuando estén disponibles); verificar que los enlaces son clickeables y tienen `:focus-visible`
- [ ] 9.2 Agregar texto "Entrega 26/11/2026" en el footer; verificar que es visible

## 10. Estilos globales y sistema de diseño

- [ ] 10.1 Definir variables CSS en `:root` para la paleta (canvas-dark, canvas-light, primary, primary-pressed, surface-dark-elevated, ink, body-light, mute-light, on-dark, body-dark, mute-dark, hairline-light, hairline-dark); verificar que los colores se aplican correctamente en cada sección
- [ ] 10.2 Definir tipografía global: Cabinet Grotesk para headings (display-xl 54px/300, heading-lg 28px/300, heading-md 18px/600), Manrope para body (body-md 18px/400/1.5, body-sm 16px/400); verificar que los tamaños y pesos se aplican
- [ ] 10.3 Definir sistema de espaciado: section gap 64px, card padding 24px, gutter 24px; verificar que las secciones tienen el ritmo correcto
- [ ] 10.4 Agregar `@media (prefers-reduced-motion: reduce)` que desactiva animaciones y transiciones; verificar que funciona con la preferencia del sistema activada
- [ ] 10.5 Verificar que no hay desbordes horizontales en viewport ≥1280px; verificar con viewport de 1280px, 1440px y 1920px

## 11. Accesibilidad

- [ ] 11.1 Verificar contraste de texto: amarillo `#f5c400` sobre azul `#0b2a6b` (debe ser ≥4.5:1 para texto normal, ≥3:1 para texto grande); verificar con herramienta de contraste
- [ ] 11.2 Verificar que todos los elementos interactivos (enlaces, botones, `<summary>`) tienen `:focus-visible` con estilo visible (no `outline: none`); verificar navegando con Tab
- [ ] 11.3 Verificar target size mínimo 24x24px para todos los elementos interactivos; verificar que botones y enlaces cumplen
- [ ] 11.4 Verificar que el skip link aparece al presionar Tab al cargar la página y lleva el foco al contenido principal; verificar con teclado
- [ ] 11.5 Verificar que los `<details>` se operan con Enter y Space; verificar con teclado

## 12. Documentación (README)

- [ ] 12.1 Crear `README.md` con: descripción del proyecto, integrantes y aportes (a completar por el grupo), startup y bloque, aplicaciones y modelos de IA utilizados, enlaces al repositorio y landing publicada; verificar que el archivo existe y tiene las secciones requeridas
- [ ] 12.2 Agregar instrucciones de desarrollo: `npm install`, `npm run dev`, `npm run build`; verificar que los comandos funcionan

## 13. Deploy y verificación final

- [ ] 13.1 Configurar Netlify para deploy estático desde carpeta `dist` (build command: `npm run build`); verificar que el deploy inicial funciona
- [ ] 13.2 Verificar la landing en una ventana de incógnito (sin sesión): logo completo visible, sentencias legibles, propuestas claras, diagramas legibles, desplegables funcionan con clic y teclado, sin desbordes horizontales, enlaces del footer abren correctamente; verificar checklist completo
- [ ] 13.3 Verificar que el repositorio es público y el enlace en el README abre correctamente desde una ventana sin sesión; verificar acceso anónimo
