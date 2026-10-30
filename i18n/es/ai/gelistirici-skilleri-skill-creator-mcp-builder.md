---
title: "Skills para desarrolladores: skill-creator, mcp-builder y más"
excerpt: "Una skill que escribe skills, una skill que monta servidores MCP, paquetes de skills que aportan disciplina de pruebas y depuración. Selecciones verificadas para desarrolladores."
hook: "Existe una skill que escribe skills"
fact: "20 CONSULTAS"
factLabel: "Ejemplos recomendados para probar la activación"
category: "Inteligencia artificial"
---

Para quien desarrolla software, las skills resultan interesantes por dos motivos. El primero: hay skills "creadoras" que te ayudan a escribir las tuyas de forma más rápida y medible. El segundo: hay paquetes que dan al agente disciplina de ingeniería (pruebas, planificación, depuración). En este artículo tratamos ambas cosas, solo con ejemplos cuya existencia hemos comprobado.

## skill-creator: la skill que escribe skills

skill-creator, del repositorio oficial de Anthropic anthropics/skills, está pensada para crear skills nuevas, editar y mejorar las existentes y medir su rendimiento. Según su descripción, también se encarga de ejecutar evaluaciones (eval), comparar los resultados con análisis de varianza y optimizar la descripción de la skill para que se active mejor.

El flujo de trabajo se describe de forma muy humana: decide qué quieres, escribe un borrador, prepara unos mensajes de prueba, ejecuta Claude con la skill sobre esos mensajes, evalúa los resultados en conjunto, reescribe y repite. En la carpeta hay scripts independientes que ejecutan evaluaciones, generan un informe comparativo y mejoran la descripción, además de un "eval-viewer" para examinar los resultados de forma visual.

La guía de optimización de descripciones de agentskills.io también pone esta skill como ejemplo. Según la guía, skill-creator automatiza este ciclo de principio a fin: divide el conjunto de pruebas, mide las tasas de activación en paralelo, propone mejoras de la descripción con Claude y genera un informe HTML en vivo.

> **¿Lo sabías?** La prueba de activación que recomienda agentskills.io usa unos 20 mensajes de ejemplo y ejecuta cada uno 3 veces. Es decir, probar una sola descripción significa 60 ejecuciones. Para evitar el sobreajuste (overfitting), alrededor del 60 % de los mensajes se reserva para mejorar y el 40 % solo para validar. La guía dice que en la mayoría de los casos bastan cinco rondas.

## mcp-builder y claude-api: para quienes montan integraciones

- **mcp-builder (oficial):** una guía para desarrollar servidores MCP que permiten a los grandes modelos de lenguaje hablar con servicios externos mediante herramientas bien diseñadas. Funciona con Python (FastMCP) o con Node/TypeScript (MCP SDK). La skill divide el proceso en cuatro fases: investigación y planificación, implementación, revisión y pruebas, y creación de evaluaciones. En la carpeta hay documentos de referencia por lenguaje y scripts de evaluación.
- **claude-api (oficial):** una skill de referencia para la API de Claude y los SDK de Anthropic. Cubre temas como identificadores de modelo, parámetros, streaming, uso de herramientas y caché, e incluye carpetas separadas para varios lenguajes de programación. Según la documentación de Claude, esta skill de código abierto viene incluida con Claude Code.
- **webapp-testing (oficial):** un conjunto de herramientas para probar aplicaciones web locales con Playwright. Es una ayuda práctica que también mencionamos en el artículo de diseño, pensada para quienes desarrollan interfaces.

## De la comunidad: disciplina de ingeniería con Superpowers

Fuera del repositorio oficial, uno de los paquetes más comentados entre desarrolladores es obra/superpowers, de Jesse Vincent, con licencia MIT. Se presenta como "una metodología completa de desarrollo de software" para agentes de programación. A octubre de 2026, el repositorio contiene estas skills (una selección):

| Skill | ¿Cuándo entra en juego? |
|---|---|
| brainstorming | Antes de empezar una función nueva o un trabajo creativo |
| writing-plans | Al escribir un plan para un trabajo de varios pasos, antes de tocar el código |
| test-driven-development | Durante la implementación: primero una prueba que falla, luego el mínimo código |
| systematic-debugging | Ante un error o una prueba fallida, antes de proponer una corrección |
| verification-before-completion | Para ejecutar los comandos de verificación antes de decir "terminado" |

El README del repositorio da instrucciones de instalación para muchos agentes, como Codex, Cursor, Gemini CLI y GitHub Copilot CLI además de Claude Code, e indica que en Claude Code figura en el mercado oficial de plugins de Anthropic. Esta es la consecuencia práctica de que Agent Skills sea un estándar abierto: la misma skill puede funcionar en distintas herramientas.

## La misma idea en otras plataformas

La documentación de ChatGPT y Codex de OpenAI también define las skills como basadas en el "estándar abierto de agent skills". A octubre de 2026, en la documentación destacan dos ayudantes integrados: skill-creator, que crea una skill a partir del trabajo que describes (en Codex se invoca con $skill-creator), y skill-installer, que instala skills ya hechas desde el repositorio openai/skills o desde otros. Codex lee las skills locales de las carpetas .agents/skills, a nivel de proyecto y de usuario.

Para un desarrollador, el hábito más valioso puede ser este: convertir en una skill cada explicación larga que repites, tu lista de comprobación de revisión de código o tus pasos de despliegue, y meterla en el repositorio del proyecto. En Claude Code, las skills que pones en la carpeta .claude/skills llegan al equipo junto con el repositorio. Pero no olvides leer los scripts de cada skill de la comunidad que instales, porque esas skills pueden ejecutar código en tu ordenador con tus permisos.

En tu proceso de desarrollo, ¿qué paso te hace pensar más a menudo "ojalá hubiera una skill para esto": las pruebas, la revisión de código o el despliegue?
