---
title: "La IA encontró un fallo crítico en PHP, del que depende el 70 % de los sitios web"
excerpt: "Dos fallos llamados PHP2Shell permiten ejecutar código en el servidor sin iniciar sesión. En el hallazgo se usaron modelos como GPT-5.6 Sol y Gemini 4 Argon."
hook: "La IA halló el gran fallo de PHP"
fact: "CVSS 9,2"
factLabel: "Puntuación más alta de los fallos de PHP2Shell"
category: "Inteligencia artificial"
---
El 21 de octubre, los desarrolladores de PHP publicaron un parche urgente para dos vulnerabilidades críticas en el motor central del lenguaje. Las fallas, bautizadas "PHP2Shell" y registradas como CVE-2026-109618 y CVE-2026-109619, se descubrieron con ayuda de herramientas de inteligencia artificial.

## ¿Qué ocurrió?

Según Fortune, la firma de pruebas de seguridad con IA Calif encontró la primera pieza de la cadena el 1 de agosto con GPT-5.6 Sol; Wiz identificó de forma independiente el primer fallo el 19 de agosto y lo notificó al equipo de seguridad de PHP el 24 de agosto. En el hallazgo se usaron la herramienta propia de Wiz, Wiz Atlas, y los modelos GPT-5.6 Sol de OpenAI y Gemini 4 Argon de Google.

Las vulnerabilidades permiten a un atacante ejecutar código de forma remota en el servidor sin iniciar sesión y filtrar datos de la memoria. Según Wiz, casi todas las versiones de PHP publicadas en la última década, hasta la 5.4, están afectadas. La puntuación de gravedad más alta es 9,2 en la escala CVSS. PHP funciona detrás de aproximadamente el 70 % de los sitios web del mundo; solo WordPress gestiona más o menos el 40 % de ellos. Según la noticia actualizada de Fortune, tras el parche los fallos empezaron a explotarse de forma generalizada.

## ¿Por qué importa?

Es uno de los ejemplos más concretos de que la inteligencia artificial, en la investigación de seguridad, ya no es solo una ayudante, sino que puede ser quien hace el descubrimiento. Pero las mismas herramientas están en manos de los atacantes, y el tiempo entre la publicación del parche y el inicio de la explotación se acorta. Todo propietario de un sitio con PHP debe actualizar su servidor de inmediato. En un panorama más amplio, los errores ocultos en el código antiguo que lleva décadas funcionando en internet pueden salir a la luz mucho más rápido. La historia del primer programa que se desplazaba solo por la red la contamos en el [artículo sobre Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
