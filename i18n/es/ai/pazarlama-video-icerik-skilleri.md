---
title: "Skills de marketing, vídeo y contenido: la caja de herramientas del creador"
excerpt: "El repositorio marketingskills de Corey Haines, el plugin de marketing de Anthropic y las skills de Remotion y HeyGen HyperFrames. Selecciones reales para contenido y vídeo."
hook: "El vídeo con código, el texto con una skill"
fact: "52 SKILLS"
factLabel: "Skills en el repositorio marketingskills"
category: "Inteligencia artificial"
---

Detrás de este blog también se producen cada día vídeos cortos, portadas y textos. Por eso esta categoría nos resulta un poco personal: skills que producen marketing, contenido y vídeo. Es además el terreno donde más rápido se multiplican las skills de la comunidad. Nosotros solo hemos listado ejemplos cuyos repositorios hemos abierto y revisado. Todas las cifras son de finales de octubre de 2026.

## marketingskills: una biblioteca de marketing de 52 skills

El repositorio coreyhaines31/marketingskills, con licencia MIT, de Corey Haines (la persona detrás de la agencia de optimización de conversión Conversion Factory), es una de las colecciones de la comunidad más completas en este campo. Según el README, está preparado para especialistas en marketing técnico y fundadores, y se centra en tareas como la optimización de conversión, la redacción publicitaria, el SEO, la analítica y la ingeniería de crecimiento. Indica que funciona con Claude Code, OpenAI Codex, Cursor y otros agentes compatibles con el estándar Agent Skills.

En la carpeta skills del repositorio hay 52 skills. Algunos ejemplos:

- **copywriting:** para escribir o mejorar el texto de cualquier página de marketing, como la página de inicio, una página de aterrizaje o la de precios.
- **seo-audit:** para auditar y diagnosticar los problemas de SEO de un sitio.
- **ai-seo:** para optimizar el contenido para los buscadores de inteligencia artificial, es decir, para que te citen como fuente en las respuestas de los grandes modelos de lenguaje.
- **emails y cold-email:** para secuencias de correo, flujos automáticos y campañas de correo en frío B2B.
- **social:** para crear y planificar contenido para LinkedIn, X, Instagram, TikTok y Facebook.

Para instalar, el README recomienda el comando npx skills add coreyhaines31/marketingskills. También se puede elegir una skill concreta.

## El plugin de marketing de Anthropic

El repositorio anthropics/knowledge-work-plugins de Anthropic reúne plugins preparados por grupos profesionales. Están hechos para Claude Cowork y también son compatibles con Claude Code. Cada plugin empaqueta juntos las skills, los conectores, los comandos con barra y los subagentes para ese oficio.

Las skills del plugin marketing son estas: brand-review (revisa un borrador según la voz de marca y la guía de estilo y propone correcciones de antes y después), campaign-plan (elabora un resumen de campaña con objetivo, público, mensaje, estrategia de canales y calendario de contenidos), content-creation, draft-content, email-sequence, competitive-brief, performance-report y seo-audit. El README enumera que este plugin puede conectarse a herramientas como Slack, Canva, Figma, HubSpot y Ahrefs. Es decir, aquí la skill aporta el "método" y el conector aporta el "acceso".

> **¿Lo sabías?** Los vídeos ya no solo se hacen arrastrando y soltando en una línea de tiempo, también pueden producirse con código, y es justo ahí donde entran las skills. El equipo de Remotion publica su propio conjunto oficial de skills para su framework de vídeo basado en React. HeyGen, por su parte, ofrece HyperFrames, basado en la idea de "escribe HTML, renderiza vídeo", junto con skills para agentes.

## Para vídeo: Remotion y HyperFrames

| Paquete | Fuente | ¿Qué ofrece? |
|---|---|---|
| remotion-dev/skills | Equipo de Remotion (oficial) | 12 skills: creación de vídeo, reglas de animación, subtítulos, renderizado, vista previa |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skills y bloques listos para el framework que convierte HTML en vídeo |

**Remotion:** según el README, Remotion mantiene una lista de Agent Skills que define las mejores prácticas para trabajar en proyectos de Remotion. El conjunto incluye skills como remotion-create, que crea vídeos nuevos; remotion-markup, que aporta conocimiento de animación y composición; remotion-captions, para transcribir subtítulos y animarlos; remotion-render, para exportar; y remotion-best-practices, que dirige a todas las demás. La instalación se hace con npx skills add remotion-dev/skills.

**HyperFrames:** el repositorio de HeyGen se presenta como "escribe HTML, renderiza vídeo, hecho para agentes". Según el README, el conjunto básico lo forman las skills hyperframes (crear y editar vídeo), hyperframes-cli (estructura del proyecto, vista previa, renderizado), hyperframes-registry (unos 450 bloques listos de transiciones, títulos, subtítulos y gráficos) y media-use (tareas de medios como música, efectos de sonido, imágenes y locución). En total hay 7 skills publicadas.

Un detalle curioso: la descripción de la skill de vídeo del repositorio de Corey Haines también enumera nombres como Remotion, HyperFrames y HeyGen como palabras de activación. Es decir, la skill de marketing está escrita para funcionar como un puente hacia las skills de vídeo.

## ¿En qué fijarse al elegir?

La mayoría de las skills de este campo son de la comunidad o de empresas y se actualizan muy rápido. Antes de instalar un paquete, te vendrán bien estas tres preguntas: ¿de quién es el repositorio y se actualiza activamente? ¿Hay en el SKILL.md alguna instrucción que se conecte a direcciones externas o pida credenciales? ¿Puedes elegir e instalar solo las pocas skills que de verdad necesitas? La mayoría de las herramientas de instalación permiten elegir una skill concreta en lugar de "instalarlo todo", y eso reduce tanto el contexto como el riesgo.

En la producción de contenido, ¿qué es lo que más tiempo te roba: escribir los textos, preparar las imágenes o montar el vídeo?
