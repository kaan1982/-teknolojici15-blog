---
title: "Skills de documentos: enseñar al agente Word, Excel, PowerPoint y PDF"
excerpt: "¿Qué hacen las skills docx, xlsx, pptx y pdf de Anthropic y dónde funcionan? Las skills oficiales y de apoyo que sirven de verdad para generar documentos."
hook: "Informe, hoja de cálculo, presentación: todo en una skill"
fact: "4 DOCUMENTOS"
factLabel: "Skills de documentos que vienen listas"
category: "Inteligencia artificial"
---

Es fácil decirle a la inteligencia artificial "prepárame un informe". Lo difícil es que llegue como un archivo de Word o Excel que se abra de verdad, cuyo formato no se rompa y cuyas fórmulas funcionen. La primera categoría de skills, y quizá la más usada, trata justo de eso: los documentos de ofimática. En este artículo tratamos solo las skills cuya existencia hemos comprobado.

## Cuatro piezas básicas: docx, xlsx, pptx, pdf

Según la documentación de Claude, Anthropic ofrece cuatro skills de documentos ya preparadas (pre-built). Funcionan por detrás de la función de creación de archivos de Claude y Anthropic publica su código fuente en el repositorio de GitHub anthropics/skills.

| Skill | ¿Qué hace? (según las descripciones oficiales) |
|---|---|
| docx | Crea, lee y edita documentos de Word, con formato y plantillas incluidos |
| xlsx | Abre y edita hojas de cálculo, añade fórmulas y gráficos, limpia datos desordenados |
| pptx | Crea presentaciones, edita diapositivas, lee y analiza el contenido de un .pptx |
| pdf | Extrae texto y tablas, une y divide PDF, rellena formularios, añade marcas de agua |

Las descripciones del repositorio están escritas de forma bastante "insistente". Por ejemplo, la descripción de la skill pptx dice que debe usarse si un archivo .pptx interviene "de cualquier forma" como entrada o salida. Es un ejemplo oficial de la regla "la descripción es lo que activa" que explicamos en el artículo anterior.

## ¿Dónde puedes usarlas?

A octubre de 2026, según la documentación de Claude, estas cuatro skills se activan solas en claude.ai al crear documentos y también pueden invocarse como skills prediseñadas en la API de Claude. En Claude Code, en cambio, las skills de documentos no vienen integradas. Pero el repositorio anthropics/skills puede añadirse como mercado de plugins para Claude Code e instalarse el paquete document-skills. Según las instrucciones del repositorio, primero se añade el mercado con el comando /plugin marketplace add anthropics/skills y después se instala document-skills@anthropic-agent-skills.

Hay una distinción sobre las licencias. Muchas skills del repositorio son de código abierto con licencia Apache 2.0. Pero las cuatro skills de documentos se comparten como "de código disponible, no abierto" (source-available). Es decir, puedes examinar el código y aprender de él, pero antes de redistribuirlo libremente en tu propio producto debes leer el archivo de licencia.

> **¿Lo sabías?** La skill pdf es el ejemplo de manual de la carga progresiva. Según el artículo de ingeniería de Anthropic, las instrucciones para rellenar formularios se sacaron del SKILL.md principal y se llevaron a un archivo aparte, forms.md. Claude solo lee ese archivo cuando realmente rellena un formulario. Hoy, dentro de la carpeta pdf del repositorio hay tanto forms.md como reference.md y una carpeta scripts.

## Los ayudantes junto al documento

Producir documentos no termina en el formato del archivo. En el repositorio anthropics/skills hay otros ejemplos oficiales centrados en el contenido:

- **doc-coauthoring:** ofrece un flujo de trabajo paso a paso para redactar en colaboración textos estructurados como especificaciones técnicas, propuestas o documentos de decisión. Pasa por las fases de aportar contexto, corregir de forma iterativa y verificar.
- **internal-comms:** reúne recursos para ayudar a escribir comunicaciones internas, como informes de estado, actualizaciones de dirección, boletines de empresa o preguntas frecuentes, en los formatos que prefiere la empresa. La carpeta incluye textos de ejemplo.
- **brand-guidelines:** aplica a un resultado los colores y la tipografía oficiales de la marca Anthropic. Su verdadero valor es mostrar cómo puedes montar algo parecido para tu propia marca.
- **theme-factory:** incluye 10 temas listos de colores y fuentes que pueden aplicarse a diapositivas, documentos, informes o páginas HTML, y si quieres genera un tema nuevo al instante.

El Centro de Ayuda también menciona skills que socios como Notion, Figma y Atlassian han preparado para funcionar junto con sus propios conectores MCP. Resultan útiles cuando trabajas con las herramientas donde se producen los documentos (por ejemplo, páginas de Notion).

## ¿Cómo se usan en la vida real?

El uso más eficaz es combinar las skills de documentos ya preparadas con tu propia skill pequeña. Por ejemplo, la skill xlsx sabe cómo generar un Excel correctamente, pero no sabe qué columnas debe tener la tabla de ventas mensuales de tu empresa. Si escribes una skill corta que lo explique, las dos trabajan juntas y producen un archivo con el formato correcto y que cumple tu estándar.

Hay dos notas que no debes olvidar. La primera: el repositorio anthropics/skills dice claramente que estas skills son "con fines de demostración y educativos" y que el comportamiento real de Claude puede diferir de las implementaciones que aparecen allí. La segunda: las skills de documentos necesitan un entorno de ejecución de código. Según el Centro de Ayuda, para que las skills funcionen debe estar activada la función de ejecución de código.

En el próximo artículo pasamos al lado de la pantalla: las skills que producen diseño, interfaces y resultados web.

¿Qué tipo de documento te hace perder más tiempo al prepararlo: la hoja de cálculo, la presentación o el informe?
