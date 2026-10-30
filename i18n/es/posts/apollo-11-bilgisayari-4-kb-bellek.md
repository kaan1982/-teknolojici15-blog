---
title: "El ordenador del Apolo 11: ¿qué significa de verdad \"4 KB de memoria\"?"
excerpt: "El ordenador que llevó al Apolo 11 a la Luna tenía unos 4 KB de RAM. Los programas estaban en una ROM de unos 72 KB tejida a mano."
hook: "Aterrizaron en la Luna con 4 KB de RAM"
fact: "4 KB"
factLabel: "Memoria borrable (RAM) del AGC"
category: "Informática"
---
Seguro que has oído la frase "la memoria del ordenador que fue a la Luna era menor que una fotografía". En el vídeo nosotros también dijimos "4 KB". Esa cifra es correcta, pero por sí sola se queda corta. Porque el Ordenador de Guiado del Apolo (Apollo Guidance Computer, AGC para abreviar) tenía en realidad dos memorias distintas, y "4 KB" describe solo la más pequeña.

Vamos a abrir juntos esta famosa cifra.

## ¿Qué significa exactamente "4 KB"?

La memoria de trabajo del AGC, es decir, la memoria borrable que hoy llamaríamos RAM, constaba de 2.048 "palabras". Cada palabra tenía 16 bits de longitud: 15 bits de datos y 1 bit de paridad para control de errores. Si contamos una palabra como 2 bytes, 2.048 palabras son unos 4 KB. Es decir, "4 KB" es el tamaño del papel de borrador que el ordenador usaba para sus cálculos durante el vuelo.

Los programas no estaban dentro de esa memoria. Allí se guardaban la posición instantánea, la velocidad, los contadores y los resultados intermedios que pasaban de una tarea a otra. La memoria estaba hecha de minúsculos anillos llamados núcleos magnéticos (core) y conservaba su contenido incluso si se cortaba la electricidad.

Los programas estaban en otro lugar muy distinto: en una memoria fija de 36.864 palabras, es decir, en la ROM. Con el mismo cálculo, son unos 72 KB. En resumen, la frase más correcta es esta: el Apolo 11 aterrizó en la Luna con unos 4 KB de RAM y unos 72 KB de ROM.

## Los programas estaban tejidos

La ROM del AGC era una memoria de "cuerda de núcleos" (core rope) y se tejía literalmente a mano. Si un hilo pasaba por el interior de un núcleo magnético, ese bit era 1; si rodeaba el núcleo por fuera, era 0. Es decir, el software se convertía en hardware tejiéndolo como una tela.

Este trabajo lo hicieron empleados de Raytheon en Waltham, Massachusetts. Según el detallado estudio de Ken Shirriff, una parte importante de los contratados eran mujeres del sector textil local, elegidas por su habilidad con la costura. Tejer un solo módulo llevaba unas 8 semanas y costaba 15.000 dólares. Cada módulo guardaba 6 mil palabras y seis módulos sumaban las 36.864 palabras en total.

Esto tenía un efecto secundario importante: el software debía congelarse meses antes del vuelo. No existían los parches de última hora, porque corregir un error significaba volver a tejer.

> **¿Lo sabías?** En el Apolo 11 no había un AGC, sino dos: uno en el Módulo de Mando y otro en el Módulo Lunar. Cada uno pesaba unos 32 kg y funcionaba con un reloj de cristal de 2,048 MHz.

## La alarma que sonó minutos antes del alunizaje

Durante el descenso del 20 de julio de 1969, el ordenador del Módulo Lunar mostró en pantalla primero la alarma 1202 y después la 1201. Ambas significaban "desbordamiento del ejecutivo": se le estaba cargando al ordenador más trabajo del que podía soportar. Según el detallado relato de Wikipedia, la causa fue que las señales falsas del radar de encuentro, que se había dejado en espera, mantenían ocupado al procesador. El problema no fue un error de programación, ni un error del piloto, ni una avería del hardware. En el fondo nació de un defecto en el documento de interfaz entre dos sistemas.

Lo realmente interesante es lo que hizo el software en esa situación. El AGC funcionaba con un planificador basado en prioridades. Ante la sobrecarga, se reinició rápidamente, abandonó las tareas de baja prioridad y siguió con las críticas, como la gestión del descenso. Es decir, aquella famosa memoria pequeña bastó porque se gestionó con inteligencia.

Hubo un detalle más que complicó las cosas. El comando 1668 que Buzz Aldrin introdujo en el ordenador durante el descenso añadió carga extra a un procesador que ya estaba en apuros y provocó otra alarma 1202. El software superó también eso de la misma forma y el Águila (Eagle) alunizó.

El software se desarrolló en el Laboratorio de Instrumentación del MIT. El software del Módulo de Mando (COLOSSUS) y el del Módulo Lunar (LUMINARY) estuvieron a cargo de equipos distintos. La puesta en práctica de los detalles correspondió al equipo dirigido por Margaret Hamilton.

## Entonces / ahora

| Ordenador de Guiado del Apolo (1969) | El teléfono móvil de hoy |
|---|---|
| Unos 4 KB de memoria borrable (RAM) | Gigabytes de RAM |
| Unos 72 KB de ROM tejida a mano | Cientos de gigabytes de almacenamiento |
| Meses de tejido para una actualización de software | Actualizaciones que se instalan solas por la noche |
| Unos 32 kg | Cabe en la palma de la mano |

## La verdadera lección de la cifra

La cifra de "4 KB" suele contarse como "mira qué primitivo era". Pero la esencia de la historia es justo la contraria: la memoria limitada obligó a los ingenieros a rendir cuentas de cada bit. Por eso nació un software que daba prioridad a las tareas y se recomponía solo ante una sobrecarga.

Los dispositivos que llevamos hoy en el bolsillo tienen una cantidad de memoria incomparablemente mayor, pero la mayoría de las aplicaciones no se escriben con tanto cuidado. Incluso una sola actualización de una aplicación de mensajería puede ser muchas veces más grande que todo el software del Apolo.

¿Crees que los límites forman mejores ingenieros, o que lo hace la abundancia?
