---
title: "Creeper, el primer \"virus\" informático, no borró nada"
excerpt: "Creeper, que circulaba por ARPANET en 1971, no tocó ningún dato, solo escribió un desafío en pantalla. Para atraparlo se escribió el primer antivirus, Reaper."
hook: "¡El primer virus no borró nada!"
fact: "1971"
factLabel: "Creeper se escribió en BBN"
category: "Informática"
---

Cuando se dice "virus informático", pensamos en algo que borra archivos, secuestra datos o bloquea la pantalla. Sin embargo, el programa que la mayoría de las fuentes cita como el "primer virus" no hizo nada de eso. Lo único que hacía era escribir un pequeño desafío en pantalla y pasar al siguiente ordenador.

Se llamaba Creeper, es decir, "enredadera" o "reptante".

## 1971, BBN y ARPANET

Creeper lo escribió en 1971 Bob Thomas, como programa experimental, en la empresa BBN (Bolt Beranek and Newman) de Massachusetts. BBN era una empresa clave en la creación de ARPANET, considerada la antecesora de internet.

El programa circulaba entre los ordenadores centrales DEC PDP-10 conectados a ARPANET que ejecutaban el sistema operativo TENEX. Según Wikipedia, en aquella época el número de sistemas con TENEX en ARPANET era 28, es decir, ese era el máximo de ordenadores a los que podía llegar Creeper.

La verdadera preocupación de Bob Thomas no era la maldad, sino responder a una pregunta: ¿puede un programa trasladarse por sí solo de una máquina a otra por la red?

## La única frase en pantalla

Cuando Creeper llegaba a una máquina, imprimía en el teletipo (terminal con impresora) este mensaje:

"I'M THE CREEPER : CATCH ME IF YOU CAN"

En español: "Soy el Creeper: atrápame si puedes." Eso fue todo. No borró ningún archivo ni corrompió ningún dato. Wikipedia señala que los operadores colaboraron en este experimento y que no se informó de ningún efecto no deseado.

La primera versión ni siquiera se copiaba a sí misma: al pasar de una máquina a otra se trasladaba sin dejar una copia detrás. Más tarde, Ray Tomlinson, conocido después como el inventor del correo electrónico, modificó el programa para que se copiara en las demás máquinas. Esta versión que se replicaba está considerada el primer gusano informático (worm) generalmente aceptado.

## ¿Virus o gusano?

Aquí hace falta una corrección pequeña pero importante. Técnicamente, Creeper no era un virus, sino un gusano. Un virus se propaga adhiriéndose a otro programa o archivo; un gusano, en cambio, se mueve por sí solo por la red. Creeper pertenece al segundo grupo. Aun así, muchas publicaciones lo citan como "el primer virus informático del mundo"; una cita de The Guardian que recoge Wikipedia usa exactamente esa expresión. Esa es la versión popular del concepto, pero técnicamente la etiqueta correcta es "el primer gusano".

El propio término "virus informático" nació 12 años después de Creeper. Según el artículo de WeLiveSecurity de ESET, Fred Cohen, estudiante de la Universidad del Sur de California, escribió el 3 de noviembre de 1983 un programa que se propagaba solo; su profesor Len Adleman comparó esa propagación parecida a una "infección" con los virus de la biología y sugirió el término. Cohen preparó el programa en un VAX 11/750 con Unix, con un trabajo de unas ocho horas.

> **¿Lo sabías?** Ray Tomlinson, que inventó el correo electrónico y llevó el signo @ a las direcciones, es también el creador del programa que se considera el primer antivirus. Es decir, la misma persona escribió la herramienta más querida de internet y también su primer "limpiador".

## Reaper: el primer antivirus

Una vez que existía un programa que se copiaba solo por la red, también hacía falta algo que lo detuviera. Ray Tomlinson escribió en 1972 un programa llamado Reaper ("Segador"). Reaper también circulaba por ARPANET y borraba a Creeper allí donde lo encontraba. Wikipedia lo describe como el primer software antivirus.

Esta historia tiene una bonita ironía: el primer antivirus del mundo era en realidad un programa que circulaba por la red por sí solo. Es decir, para atrapar a un "gusano" se había escrito otro "gusano".

| Entonces | Ahora |
|---|---|
| 1971: como máximo 28 máquinas TENEX | Miles de millones de dispositivos conectados |
| Una sola frase de broma en pantalla | Ransomware, robo de datos |
| Reaper: un limpiador con un solo objetivo | Software de seguridad actualizado de forma continua |

## La larga sombra de un experimento inocente

Creeper era inofensivo, pero entreabrió una puerta: si un programa podía propagarse solo por la red, alguien podría usar ese poder con malas intenciones. Eso fue exactamente lo que pasó en las décadas siguientes, y las palabras "virus", "gusano" y "antivirus" entraron en nuestro lenguaje cotidiano.

Hoy, si un investigador de seguridad soltara en internet un experimento parecido sin permiso, probablemente se metería en serios problemas. El ARPANET de 1971, en cambio, era una pequeña comunidad de investigadores que se conocían entre sí y el experimento, como recoge Wikipedia, se llevó a cabo con la colaboración de los operadores.

Aun así, el punto de partida no fue un ataque, sino la curiosidad. Un ingeniero preguntó "¿se podrá hacer?" y dio la respuesta con una sola frase en pantalla.

Si Creeper se escribiera hoy, ¿se consideraría un experimento inofensivo o una violación de seguridad?
