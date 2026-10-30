---
title: "La primera contraseña de ordenador fue robada en su primer año"
excerpt: "El sistema CTSS del MIT llevó la contraseña al ordenador. Poco después, un doctorando imprimió todas las contraseñas. La historia de la primera contraseña y su primer hackeo."
hook: "La primera contraseña fue también la primera hackeada"
fact: "1962"
factLabel: "El primer robo de contraseñas conocido"
category: "Primeras veces"
---

La contraseña que escribes decenas de veces al día tiene un lugar de nacimiento: un único ordenador gigante del MIT a principios de los años sesenta. Y lo que es más interesante, las primeras contraseñas de ordenador conocidas en el mundo fueron robadas en bloque poco después de empezar a usarse. Y no por una banda de hackers, sino por un estudiante de doctorado que quería más horas de ordenador.

## Un ordenador, decenas de usuarios

A principios de los años sesenta, los ordenadores eran máquinas que llenaban salas y hacían un solo trabajo cada vez. Perforabas tu programa en tarjetas, lo ponías en la cola y recogías el resultado horas más tarde. En el MIT, el equipo de Fernando Corbató quiso cambiar eso: un sistema en el que muchas personas pudieran usar la misma máquina al mismo tiempo desde terminales, es decir, el "tiempo compartido".

Ese sistema se llamó CTSS (Compatible Time-Sharing System). Se mostró por primera vez en noviembre de 1961 en un IBM 709 modificado del MIT y en los años siguientes funcionó en IBM 7094. Como también recoge Wikipedia, el CTSS se considera el primer sistema informático que implementó el inicio de sesión con contraseña.

## ¿Para qué hacía falta una contraseña?

El problema era simple: en la misma máquina había archivos de decenas de personas y tiempo de ordenador asignado a cada una. Hacía falta una forma de distinguir quién era quién. Años después, Corbató se lo contó así a Wired: poner a cada usuario una contraseña como cerradura había parecido "una solución muy simple".

Corbató fue además prudente al declararse "el primero". Dijo que probablemente el sistema de reservas Sabre de IBM, de 1960, también usaba contraseñas, pero que como no queda constancia no se sabe nada con certeza. Las fuentes también difieren sobre el año exacto en que se añadieron las contraseñas al CTSS. Lo que sabemos es esto: en la primavera de 1962 el sistema de contraseñas funcionaba, porque esa primavera fue robado.

## El plan del viernes por la noche de Allan Scherr

Allan Scherr era un investigador que hacía su doctorado en el MIT y ejecutaba simulaciones complejas. Según recoge Wired, en el CTSS solo le asignaban cuatro horas a la semana (algunas fuentes dicen cuatro horas al día). Ese tiempo no le bastaba.

Su solución fue ingeniosa y también traviesa. Aprovechando la función del sistema de imprimir archivos sin conexión, preparó una tarjeta perforada que pedía la impresión del archivo de contraseñas. Puso la tarjeta en la cola tarde un viernes por la noche y volvió temprano el sábado por la mañana para recoger el resultado. Ahora tenía en la mano las contraseñas de todos los del sistema.

Para borrar su rastro, compartió las contraseñas con otros usuarios. Según Wired, uno de ellos, J.C.R. Licklider, entró en la cuenta del director del laboratorio, Robert Fano, y dejó mensajes burlones. Scherr nunca fue descubierto y, aproximadamente un cuarto de siglo después del suceso, se lo confesó personalmente a Fano. Fano le aseguró que no le retirarían el título de doctor.

> **¿Lo sabías?** Aquella no fue la única crisis de contraseñas del CTSS. En 1966, por un error de un administrador, el archivo de contraseñas y el archivo del "mensaje del día" se intercambiaron y todos los que iniciaban sesión veían en pantalla todas las contraseñas a la vista. Según el desarrollador del sistema, Tom Van Vleck, este suceso fue el punto de partida de la idea de guardar las contraseñas cifradas de forma unidireccional. Eso sí, el incidente ocurrió un viernes por la tarde, a las cinco, y Van Vleck tuvo que pasarse horas cambiando contraseñas.

## Entonces y ahora

| Entonces (años sesenta) | Ahora |
|---|---|
| Contraseñas en texto plano en un solo archivo | Contraseñas con hash unidireccional |
| Bastaba una tarjeta perforada para imprimirlas | Registros de acceso, capas de autorización |
| Objetivo: repartir el tiempo de ordenador | Objetivo: proteger la identidad, el dinero y los datos personales |
| Una máquina, un campus | Decenas de cuentas por persona |

Esta historia sigue siendo instructiva hoy por esto: la contraseña, desde el día en que se inventó, se pone a prueba con el comportamiento humano. Scherr no hizo un ataque complejo para romper el sistema; simplemente usó de forma inesperada una función que el sistema ya ofrecía. Una parte importante de las filtraciones de hoy también nace de errores sencillos como ese.

Corbató recibió el Premio Turing en 1990 por su trabajo en tiempo compartido. La cerradura que su equipo añadió como "solución simple" está hoy en todas las puertas, de tu correo a tu banco, y el eslabón más débil sigue siendo, muchas veces, la persona que usa esa cerradura.

¿Crees que hoy estamos preparados para dejar de usar contraseñas por completo y pasar solo a la biometría o a las llaves de acceso (passkey)?
