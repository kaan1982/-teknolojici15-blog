---
title: "Seguridad de las skills: todo lo que debes leer antes de instalar"
excerpt: "Las skills pueden ejecutar código y traer instrucciones de fuentes externas. Guía sobre fuentes de confianza, revisión del SKILL.md y de los scripts, mínimo privilegio y claves secretas."
hook: "Instalar una skill es instalar software"
fact: "13,4 %"
factLabel: "Skills con fallos críticos (Snyk, 2026)"
category: "Inteligencia artificial"
---

Lo que hace tan potentes a las skills es también lo que las hace arriesgadas: una skill no lleva solo texto, también puede llevar código ejecutable. Cuando el agente carga esa skill, sigue las instrucciones que contiene como si fueran suyas y puede ejecutar sus scripts. Por eso la recomendación de la documentación de Claude se resume en una frase: piensa en instalar una skill como en instalar software.

## ¿Qué dicen las fuentes oficiales?

La sección de seguridad de la documentación de Claude es bastante directa. Recomienda usar las skills solo de fuentes de confianza, es decir, las que has escrito tú o las que vienen de Anthropic. Si tienes que usar una skill de una fuente desconocida, pide "extremo cuidado" y que la audites de principio a fin antes de usarla.

El artículo de ingeniería de Anthropic va en la misma línea: para las skills que vienen de fuentes menos fiables, recomienda revisar los archivos incluidos, en especial las dependencias de código y los scripts, y comprobar las instrucciones que mandan conectarse a redes externas. La documentación subraya además un riesgo concreto: las skills que obtienen datos de direcciones externas son peligrosas, porque el contenido obtenido puede contener instrucciones maliciosas.

## ¿Qué pasa en la práctica?

Estas advertencias no son teóricas. En su investigación "ToxicSkills", publicada el 5 de febrero de 2026, la empresa de seguridad Snyk analizó 3.984 skills procedentes de ClawHub y skills.sh. Los resultados:

| Hallazgo | Cifra |
|---|---|
| Skills analizadas | 3.984 |
| Con al menos un problema de seguridad | 1.467 (36,82 %) |
| Con al menos un problema crítico | 534 (13,4 %) |
| Carga maliciosa confirmada | 76 |

Según el informe, los datos de skills.sh solo abarcan las 100 primeras skills seleccionadas de ese sitio, mientras que las cifras del mercado completo corresponden a ClawHub. Entre los tipos de ataque observados hay instrucciones de instalación que llevan al usuario a descargar y ejecutar software no fiable, comandos ocultos (camuflados con Base64 o Unicode) que envían credenciales al atacante, y también intentos de desactivar controles de seguridad e instalar puertas traseras. En el 91 % de las skills maliciosas confirmadas se usó inyección de prompts (prompt injection).

> **¿Lo sabías?** Según el Centro de Ayuda de Claude, las organizaciones Enterprise pueden activar el análisis de skills, que revisa las skills y los plugins subidos en busca de contenido malicioso. Pero es una red de seguridad, no sustituye a la lectura. La mejor manera de entender lo que hace una skill es abrir y leer tú mismo su SKILL.md y sus scripts antes de instalarla.

## Lista de comprobación antes de instalar

Una lista práctica que sacamos de las recomendaciones de la documentación y de los hallazgos sobre el terreno:

1. **Verifica la fuente.** ¿De quién es el repositorio? ¿De una empresa oficial o de un desarrollador reconocido, o es una copia que se parece mucho al nombre de un paquete conocido (typosquatting)?
2. **Lee el SKILL.md de principio a fin.** Expresiones como "primero descarga y ejecuta esto", "desactiva la configuración de seguridad" o "envíalo a esta dirección" son señales de alarma.
3. **Examina la carpeta scripts/.** Si hay líneas que no puedes leer, que están ocultas o codificadas en Base64, no la instales.
4. **Revisa los enlaces externos.** Si la skill obtiene instrucciones o datos de una dirección web, recuerda que ese contenido puede cambiar en cualquier momento.
5. **Instala lo que necesitas.** Elegir las skills una a una en lugar de "instalarlo todo" reduce tanto el contexto como la superficie de ataque.

## Mínimo privilegio y claves secretas

También importa dónde se ejecuta la skill. Según la documentación de Claude, en el entorno de la API de Claude las skills no tienen acceso a la red y no pueden instalar paquetes en tiempo de ejecución. En claude.ai, el acceso a la red puede ser total, parcial o inexistente según los ajustes del usuario y del administrador. En Claude Code, en cambio, las skills tienen tanto acceso a la red como cualquier programa de tu ordenador. Es decir, una skill que instalas en un agente local funciona con tus permisos.

Por eso el principio de mínimo privilegio es crítico. En Claude Code, el campo allowed-tools del frontmatter de una skill permite que ciertas herramientas se usen sin pedir permiso mientras esa skill está invocada. Según la documentación, ese permiso se restablece con tu siguiente mensaje. Aun así, si ves permisos amplios en una skill escrita por otra persona, es buena costumbre no instalarla sin aprobarlos de forma consciente.

Para las claves secretas la regla es sencilla: nunca escribas claves de API, contraseñas ni tokens de acceso en el SKILL.md ni en la carpeta de la skill. Cuando compartes la skill o la subes a un repositorio, todo lo que hay en esa carpeta se va con ella. Guarda las claves en variables de entorno o en el método seguro de almacenamiento de credenciales de la herramienta que uses, y a la skill cuéntale solo cómo acceder a ellas.

A octubre de 2026, el ecosistema de skills crece muy deprisa, y ese crecimiento recuerda a los problemas de seguridad de los primeros años de las tiendas de aplicaciones. La buena noticia: leer una skill es mucho más fácil que leer el código fuente de una aplicación, porque en su mayor parte es texto plano.

Antes de instalar una skill, ¿abres y lees su contenido, o confías en el número de estrellas y de descargas?
