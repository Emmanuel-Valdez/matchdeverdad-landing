# Matchdeverdad — Landing Page

Landing page para Matchdeverdad, una plataforma que conecta jugadores con equipos de fútbol 5.

**Grupo 26 · IFTS 29 · 2026**

## Integrantes

- **Maximo Ariel Pereira** — [@PereiraMax](https://github.com/PereiraMax)
- **Julian Piedrabuena** — [@juliganSW](https://github.com/juliganSW)
- **Martin Savia** — [@martin-2t](https://github.com/martin-2t)
- **Emmanuel Valdez** — [@Emmanuel-Valdez](https://github.com/Emmanuel-Valdez)
- **Matias Mazzitelli** — [@mdev-repos](https://github.com/mdev-repos)

## Aporte concreto de cada integrante

Cada integrante completa su fila con lo que hizo realmente (por ejemplo: coordinó las instrucciones al agente, revisó sentencias y flujos, probó la página, preparó la publicación). Pueden rotar tareas.

 Aporte concreto 
 @PereiraMax 1. Fuentes (index.html, src/index.css) Cabinet Grotesk ahora se carga desde Fontshare, con los pesos 300, 400, 500 y 700.
                Manrope sigue en Google Fonts, en un enlace aparte, con los pesos 400, 500 y 600. Así, si falla una fuente, la otra se carga igual.
                Agregué fuentes de respaldo del sistema en el CSS. El CSS usa peso 600 en varios títulos. Cabinet Grotesk no tiene 600, así que el navegador lo muestra con 700 y se ven                  apenas más pesados.

            2. README (README.md)Agregué la sección «Aporte concreto de cada integrante», con una fila por persona.
               Dejé cada fila como «A completar» a propósito. No sé qué hizo cada uno y no quiero inventarlo; la consigna pide que lo registren ustedes.
               Corregí también la mención a las tipografías, que decía «Google Fonts» para las dos.

            4. Footer (src/components/Footer.jsx) Sumé el enlace «Landing publicada» a https://matchdeverdad.netlify.app/, junto al del repositorio. Usa los mismos estilos y foco por                   teclado que el otro. 
 @juliganSW  _A completar_
 
 @martin-2t  _A completar_ 
 
 @Emmanuel-Valdez  _A completar_ 
 
 @mdev-repos  _A completar_ 

## Aplicaciones y modelos de IA utilizados

| Integrante | Aplicación / Modelo |
|------------|---------------------|
| @PereiraMax | Claude Code con Sonnet 5.5 y Haiku 5.5 |
| @juliganSW | Claude Code con Sonnet 5.5 y Haiku 5.5 |
| @martin-2t | Claude Code con Sonnet 5.5 y Haiku 5.5 |
| @Emmanuel-Valdez | OpenCode Go con modelos Qwen3.7 y DeepSeek 4.1 |
| @mdev-repos | Claude Code con Sonnet 5.5 y Haiku 5.5 |

## Tecnologías

- **React 19** + **Vite 8**
- **Tipografías**: Cabinet Grotesk (títulos, vía Fontshare) + Manrope (texto, vía Google Fonts)
- **CSS**: Custom properties, grid, flexbox
- **Accesibilidad**: WCAG 2.1 AA, skip links, focus-visible, keyboard navigation

## Desarrollo

### Instalación

```bash
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para producción

```bash
npm run build
```

Genera los archivos optimizados en `dist/`.

### Preview del build

```bash
npm run preview
```

## Deploy

Este proyecto está configurado para deploy estático en Netlify.

- **Build command**: `npm run build`
- **Publish directory**: `dist`

## Enlaces

- **Repositorio**: [GitHub](https://github.com/Emmanuel-Valdez/matchdeverdad-landing)
- **Landing publicada**: [matchdeverdad.netlify.app](https://matchdeverdad.netlify.app/)

## Entrega

**Fecha**: 26/11/2026
