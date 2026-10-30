---
title: "Escribe tu propia skill: tu primera habilidad paso a paso con SKILL.md"
excerpt: "Una carpeta, un SKILL.md y una descripción bien escrita. Los pasos para escribir tu propia Agent Skill, la importancia del campo description y cómo probarla."
hook: "La descripción es lo que activa la skill"
fact: "1.024"
factLabel: "Máximo de caracteres del campo description"
category: "Inteligencia artificial"
---

Para escribir una skill no hace falta ser programador. En su forma más sencilla basta una carpeta con un único archivo de texto. Pero la diferencia entre una skill que funciona bien y otra que nunca se activa suele esconderse en una sola frase: la descripción. En este artículo escribimos desde cero una skill pequeña pero real.

## Paso 1: crea la carpeta y el SKILL.md

Según la especificación de Agent Skills, una skill es una carpeta que contiene al menos un archivo SKILL.md. Al principio del archivo va el frontmatter YAML, con dos campos obligatorios:

- **name:** como máximo 64 caracteres. Solo minúsculas, números y guiones. No puede empezar ni acabar con guion, no puede contener dos guiones seguidos y debe coincidir con el nombre de la carpeta. La documentación de Claude añade que las palabras "anthropic" y "claude" no pueden usarse en el nombre.
- **description:** no puede estar vacío y tiene un máximo de 1.024 caracteres. Debe explicar qué hace la skill y cuándo usarla.

También hay campos opcionales (license, compatibility, metadata y el experimental allowed-tools), pero la mayoría de las skills no los necesitan.

## Paso 2: escribe la descripción con cuidado

¿Por qué es tan importante la descripción? Porque al arrancar el agente lee solo el nombre y la descripción de cada skill. En palabras de agentskills.io, "toda la carga" de la activación recae sobre la descripción. Si la descripción no explica cuándo sirve la skill, el agente no la usa.

Las recomendaciones de las fuentes pueden resumirse así:

- Escribe tanto **qué hace** como **cuándo se usa**.
- La documentación de Claude recomienda escribir la descripción en **tercera persona**, porque se inserta en el prompt del sistema ("Procesa archivos de Excel", no "Puedo ayudarte").
- agentskills.io recomienda enumerar también de forma explícita los casos en que el usuario no nombra el ámbito por su nombre.
- Sé breve: unas pocas frases, como mucho un párrafo corto. Claude Code corta la descripción a 1.536 caracteres en la lista, así que el caso de uso más importante debe ir al principio.

## Paso 3: cuerpo corto, script inteligente

Pensemos, como ejemplo, en una skill que cumple la regla de redacción de este propio blog: que no queden rayas largas (em dash) ni rayas medias (en dash) en el texto. La estructura de carpetas sería así:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Y el archivo SKILL.md es solo esto:

```markdown
---
name: tire-denetimi
description: Busca el uso de la raya larga (U+2014) y la raya media (U+2013) en artículos de blog y propone correcciones. Se usa cuando el usuario prepara un archivo Markdown para publicar, dice "revisa las rayas" o "¿cumple las reglas de redacción?", o pide una última revisión antes de publicar aunque no mencione las rayas.
---

# Revisión de rayas

1. Ejecuta el comando `python scripts/tire_bul.py <archivo.md>`.
2. Para cada línea de la salida, propón sustituir la raya por un punto, una coma, dos puntos o un paréntesis.
3. No cambies el sentido. Pregunta al usuario por las líneas de las que no estés seguro.
4. Al final, indica en una sola frase cuántas líneas has corregido.
```

La documentación de Claude ve la ventana de contexto como un "recurso compartido" y recomienda añadir solo la información que el modelo todavía no conoce. El cuerpo debe quedarse por debajo de las 500 líneas. Los textos de referencia largos deben pasar a archivos aparte, enlazados desde SKILL.md con un solo nivel de profundidad.

La regla para los scripts también es clara: "resuelve, no esquives el problema". Es decir, el script debe gestionar él mismo los casos de error, y no estar escrito con la lógica de "que falle, Claude ya encontrará la manera". Cuando el script se ejecuta, al contexto no entra el código sino solo su salida. Eso hace que un script sea más fiable que una instrucción para tareas repetitivas que no admiten errores.

> **¿Lo sabías?** En Claude Code, los antiguos "comandos personalizados con barra" se han fusionado con las skills. El archivo .claude/commands/deploy.md y el archivo .claude/skills/deploy/SKILL.md crean el mismo comando /deploy. Si no quieres que una skill se active automáticamente, añade disable-model-invocation: true al frontmatter y solo podrás invocarla a mano.

## Paso 4: prueba, y vuelve a probar

La guía de buenas prácticas de Claude recomienda preparar escenarios de evaluación antes de escribir documentación larga, y en su lista de comprobación previa a la publicación figuran al menos tres evaluaciones y pruebas por separado con los modelos Haiku, Sonnet y Opus. La razón es simple: una instrucción que funciona a la perfección en Opus puede necesitar más detalle para Haiku.

Para probar la activación, la propuesta de agentskills.io es concreta: prepara unos 20 mensajes de usuario de ejemplo. De ellos, de 8 a 10 deben activar la skill y de 8 a 10 no. Los ejemplos negativos más valiosos son los que "casi aciertan", es decir, mensajes que comparten palabras pero piden otra tarea. Como el comportamiento del modelo no es idéntico cada vez, se recomienda ejecutar cada mensaje varias veces (3 para empezar) y mirar la tasa de activación.

| Mala descripción | Buena descripción |
|---|---|
| "Ayuda con los PDF." | Dice qué hace y cuándo se usa |
| Solo detalles técnicos | Describe la intención del usuario |
| Lo abarca todo | También señala lo que no hace |

La instalación también es sencilla: en Claude Code basta con poner la carpeta en ~/.claude/skills/ (personal) o en la carpeta .claude/skills/ del proyecto. Claude Code vigila esas carpetas y detecta los cambios en la misma sesión, sin reiniciar. En claude.ai, en cambio, puedes subir la skill como zip desde los ajustes.

¿Qué tarea repetitiva automatizaría tu primera skill?
