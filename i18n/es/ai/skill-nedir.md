---
title: "¿Qué es una skill? Las nuevas \"carpetas de habilidades\" de los agentes de IA"
excerpt: "Una Agent Skill es una carpeta con un archivo SKILL.md y scripts opcionales. El agente solo la carga cuando la necesita. ¿En qué se diferencia de un prompt, de MCP o de un plugin?"
hook: "Enseña una habilidad nueva al agente con una carpeta"
fact: "3 NIVELES"
factLabel: "Carga progresiva del contenido de una skill"
category: "Inteligencia artificial"
---

Los asistentes de inteligencia artificial saben un poco de todo, pero no conocen la plantilla de informes de tu empresa, los colores de tu marca ni los trucos para manejar bien un tipo de archivo. ¿Y si, en lugar de explicarlo largo y tendido en cada conversación, pudieras empaquetarlo una sola vez y decirle al agente "úsalo cuando haga falta"? Eso es exactamente una "skill" (habilidad).

## En resumen: una carpeta y un SKILL.md

Según la definición de Anthropic, las Agent Skills son paquetes modulares que amplían las capacidades de Claude. Cada skill reúne instrucciones, metadatos y recursos opcionales (scripts, plantillas), y Claude los usa por sí mismo cuando son relevantes. El blog de ingeniería de Anthropic lo dice de forma aún más sencilla: las skills son "carpetas organizadas de instrucciones, scripts y recursos" que el agente carga cuando las necesita para rendir mejor en tareas concretas.

Técnicamente, una skill es una carpeta que contiene, como mínimo, un archivo llamado SKILL.md. Al principio de ese archivo hay dos campos obligatorios en formato YAML: name (nombre) y description (descripción). Debajo van las instrucciones, escritas en Markdown sencillo. Si quieres, puedes añadir a la carpeta subcarpetas como scripts/ (código ejecutable), references/ (documentos adicionales) y assets/ (plantillas, imágenes, datos).

Anthropic compara esta estructura con la guía de incorporación que se prepara para un empleado nuevo. Dejas la guía sobre la mesa y el empleado la abre cuando la necesita.

## El secreto: no se carga todo de golpe

Lo que distingue a las skills de un simple prompt largo es un diseño llamado "carga progresiva" (progressive disclosure). Según la documentación de Claude, el contenido se carga en tres niveles:

| Nivel | ¿Cuándo se carga? |
|---|---|
| 1. Metadatos (nombre + descripción) | Siempre, al arrancar (unos 100 tokens por skill) |
| 2. Cuerpo del SKILL.md | Cuando se activa la skill (se recomienda menos de 5.000 tokens) |
| 3. Archivos adicionales y scripts | Solo cuando hacen falta; de los scripts solo entra en el contexto su salida |

Así puedes instalar decenas de skills en el agente sin que todas llenen la ventana de contexto. Hasta que se activa, de cada skill solo están "sobre la mesa" su nombre y su descripción. En el ejemplo de la documentación, la skill de PDF guarda las instrucciones para rellenar formularios en un archivo aparte, forms.md, y Claude solo lo lee cuando de verdad rellena un formulario.

> **¿Lo sabías?** Anthropic anunció las Agent Skills el 16 de octubre de 2025 y el 18 de diciembre de 2025 publicó el formato como estándar abierto en agentskills.io. Por eso, a octubre de 2026, la misma estructura SKILL.md aparece también en la documentación de otras herramientas, como GitHub Copilot y OpenAI Codex. La documentación de Copilot remite directamente a la especificación de agentskills.io para validar las skills.

## Prompt, MCP, plugin: ¿en qué se diferencian?

Estos conceptos se confunden a menudo, porque todos tienen que ver con "mejorar al agente". La distinción del Centro de Ayuda de Claude puede resumirse así:

- **Prompt o instrucciones personalizadas:** orientaciones generales que valen para una conversación o para todas. Una skill, en cambio, es específica de una tarea y solo entra en juego cuando es relevante.
- **Proyectos:** conocimiento de fondo fijo que siempre está cargado en las conversaciones de un proyecto. Una skill es un procedimiento que se abre cuando hace falta.
- **Conectores MCP (Model Context Protocol):** conectan a Claude con servicios y fuentes de datos externos. Es decir, dan "acceso". La skill es el "saber hacer" que explica cómo usar ese acceso. El Centro de Ayuda señala que ambos se usan con frecuencia juntos.
- **Plugins:** en Claude Code y Cowork, un plugin es el paquete para distribuir varias piezas a la vez (skills, conectores, comandos, subagentes). La documentación de OpenAI hace una distinción parecida: la skill es el formato de escritura y el plugin es la forma de distribución.

En pocas palabras: MCP le da manos al agente, la skill enseña a esas manos una habilidad y el plugin entrega todo en una caja.

## ¿Dónde funciona?

A octubre de 2026, según la documentación de Claude, las skills pueden usarse en las aplicaciones de Claude (claude.ai), en Claude Code y en la API de Claude junto con la herramienta de ejecución de código. El Centro de Ayuda indica que las skills están disponibles en los planes Free, Pro, Max, Team y Enterprise, y que requieren tener activada la función de ejecución de código.

Un detalle importante: las skills personalizadas no se sincronizan entre superficies. Una skill que subes a claude.ai es solo de tu cuenta. Una skill subida a la API se comparte con todo el espacio de trabajo. En Claude Code se guarda como personal (~/.claude/skills/) o en la carpeta del proyecto (.claude/skills/).

También hay una dimensión de seguridad. Como las skills pueden ejecutar código, la documentación recomienda tratarlas "como si instalaras software" y usar solo las de fuentes de confianza. Lo tratamos aparte en el último artículo de la serie.

En los próximos artículos de esta sección escribiremos paso a paso tu propia skill y repasaremos, categoría por categoría, las skills que existen de verdad y son útiles.

¿Qué tarea le explicas a la IA una y otra vez cada día y piensas "ojalá pudiera enseñárselo una sola vez"?
