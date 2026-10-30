---
title: "El problema de 2038: ¿por qué algunos ordenadores volverán a 1901?"
excerpt: "El tiempo Unix de 32 bits se agotará el 19 de enero de 2038 a las 03:14:07 UTC y los sistemas antiguos podrían creer que es el 13 de diciembre de 1901. ¿Qué es el problema de 2038 y cómo se resuelve?"
hook: "¡Los ordenadores volverán a 1901!"
fact: "03:14:07"
factLabel: "19 de enero de 2038, UTC: el límite de 32 bits"
category: "Informática"
---
Al entrar en el año 2000, el mundo hablaba de un error informático llamado "Y2K". Ahora toca otra fecha: el 19 de enero de 2038. Ese día, un segundo después de las 03:14:07 (UTC), algunos ordenadores antiguos podrían cambiar de golpe su calendario a 1901. No es un guion de ciencia ficción, es un simple problema de matemáticas.

## ¿Cómo cuentan el tiempo los ordenadores?

Unix y muchos sistemas derivados de él no guardan el tiempo como un reloj o un calendario, sino como un único número. Ese número son los segundos transcurridos desde la medianoche (UTC) del 1 de enero de 1970. Se llama "tiempo Unix".

El problema es que en muchos sistemas antiguos ese número se almacena como un entero de 32 bits con signo. El valor máximo que puede tomar un número de 32 bits con signo es 2.147.483.647, es decir, 2 elevado a 31 menos 1. Esa cantidad de segundos equivale a unos 68 años. Que sea "con signo" significa que se reserva un bit para indicar si el número es positivo o negativo. Por eso no se usan los 32 bits completos, sino 31 para la magnitud.

Si sumamos 68 años a 1970, llegamos a 2038. El cálculo señala exactamente el 19 de enero de 2038, 03:14:07 UTC.

## ¿Qué pasará un segundo después?

Un segundo después de que el contador alcance el valor máximo, se desborda. Piensa en los antiguos cuentakilómetros mecánicos de los coches: después de 999.999 vuelven a 000.000. Aquí ocurre algo parecido, pero como el número tiene signo, el valor pasa a ser un número negativo enorme.

Un sistema afectado interpreta ese número negativo como segundos contados hacia atrás desde 1970. El resultado: la fecha aparece como el 13 de diciembre de 1901, a las 20:45:52 (UTC). Un ordenador que de golpe retrocede 136 años; los certificados, los temporizadores, los registros y las comparaciones de fechas pueden empezar a fallar.

> **¿Lo sabías?** Este problema ya ha aparecido en algunos programas sin esperar a 2038. Según Wikipedia, en 2006 el software AOLserver se bloqueó al superar el límite de 2038 porque fijó un valor de tiempo de espera mil millones de segundos en el futuro. Es decir, cualquier programa que calcule una "fecha futura" puede chocar con el límite ya hoy. Un límite similar de 32 bits también causó problemas en Microsoft Exchange en 2022: el número de versión de una actualización se leyó como una marca de tiempo y, al superar el límite, dejaron de funcionar las funciones de análisis de malware.

## ¿Quién corre riesgo?

La gran mayoría de los teléfonos y ordenadores modernos que usas a diario ya emplean valores de tiempo de 64 bits. El verdadero riesgo está en los sistemas que funcionan durante muchos años sin actualizarse. Wikipedia destaca sobre todo los sistemas heredados (legacy) y los sistemas embebidos: máquinas que se instalan una vez y se olvidan, como controladores industriales, algunos dispositivos de red y sistemas de vehículos.

Como estos dispositivos no se actualizan con frecuencia, cuando llegue 2038 puede que aún quede dentro de ellos alguna pieza que cuente el tiempo con 32 bits.

| Tiempo con signo de 32 bits | Tiempo con signo de 64 bits |
|---|---|
| Valor máximo 2.147.483.647 | Un rango mucho mayor |
| Límite: 19 de enero de 2038 | Límite: dentro de unos 292.000 millones de años |
| Sistemas antiguos y embebidos | Sistemas operativos modernos |

## La solución: un contador más grande

La dificultad aquí es más práctica que técnica. Cambiar el tamaño del número que guarda el tiempo puede afectar a todos los programas, formatos de archivo y campos de bases de datos que lo usan. Corregir una sola línea es fácil; encontrar y actualizar todo el software dentro de un dispositivo puede llevar años.


La solución es sencilla como idea: guardar el tiempo con un número con signo de 64 bits. Según Wikipedia, esto aplaza el momento del desbordamiento unos 292.000 millones de años. Es decir, mucho más allá de la edad actual del universo.

Esta transición lleva años en marcha. Según la noticia de Phoronix de enero de 2020, Linux 5.6 se preparaba como la primera versión principal del kernel que podía sentar las bases para que los sistemas de 32 bits funcionaran después de 2038. Wikipedia indica que Linux 5.6, publicado en 2020, añadió soporte de tiempo de 64 bits en arquitecturas de 32 bits. Para que funcione, las aplicaciones también deben recompilarse con tiempo de 64 bits.

Otra propuesta de solución es hacer el número sin signo (unsigned). Pero eso solo traslada el límite a 2106 y rompe el uso de fechas anteriores a 1970. Por eso se considera que el camino principal es pasar a 64 bits.

El Y2K no se convirtió en una gran catástrofe porque la gente trabajó con antelación; ¿crees que en los años que quedan hasta 2038 se repetirá el mismo heroísmo silencioso?
