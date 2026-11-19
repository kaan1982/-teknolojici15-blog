---
title: "Java4Shell: in OpenJDK una falla di esecuzione remota di codice senza autenticazione"
excerpt: "Un overflow di memoria nel decodificatore Base64 di Java può aprire la strada al controllo remoto di software come Jira, Jenkins e Keycloak sui server x86 con supporto AVX-512."
hook: "Basta un solo testo Base64 corrotto"
fact: "9,2 / 10"
factLabel: "Punteggio CVSS 4.0 assegnato da Calif"
category: "Notizie"
---
Il 17 novembre la società di sicurezza Calif ha pubblicato i dettagli di una falla che ha messo in allarme il mondo Java. L'errore, chiamato "Java4Shell" e tracciato come CVE-2026-114938, si trova nel decodificatore Base64 di OpenJDK. Calif gli assegna 9,2 punti sulla scala CVSS 4.0, cioè un livello critico.

## Dov'è il problema?

L'errore si trova nel percorso di decodifica Base64 della macchina virtuale HotSpot accelerato con le istruzioni AVX-512. Un input Base64 appositamente manipolato fa sì che, prima che Java rifiuti l'input, vengano scritti 62 o 63 byte oltre la fine di un array. Di per sé questo spesso fa solo andare in crash il programma; Calif sostiene però che, combinato con il comportamento della memoria dell'applicazione presa di mira, permette di eseguire codice da remoto senza effettuare l'accesso.

## Chi è colpito?

Sono colpite OpenJDK 17.0.6 e successive e tutte le versioni dalla 18 in poi (comprese 21, 25 e 27), ma solo su processori x86-64 con supporto AVX-512 VBMI. Questo comprende i nuovi chip Intel per server e AMD Zen 4 e successivi. Non sono colpiti Java 8 e 11, i sistemi ARM64 (AWS Graviton, Apple silicon) e i processori che non supportano questo set di istruzioni.

Calif dichiara di aver dimostrato attacchi senza accesso sulle installazioni predefinite di Jira, Confluence, Jenkins, Keycloak, Artifactory e PingFederate. Endor Labs fa notare che queste affermazioni non sono ancora state verificate in modo indipendente e che al 17 novembre non è stato rilevato alcun attacco reale.

## Stato delle patch

La correzione è inclusa in OpenJDK 27.0.1.1; Oracle indica le versioni 17.0.21.1 e 21.0.13.1 come build corrette. Le altre distribuzioni rilasciano le patch secondo i propri tempi. In attesa della patch, come soluzione temporanea si consiglia di avviare la JVM con flag come `-XX:UseAVX=2` per disattivare l'accelerazione vulnerabile.

## Perché è importante?

Java gira dietro le quinte di innumerevoli server, dalle banche agli enti pubblici. La somiglianza nel nome è voluta: come Log4Shell nel 2021, una funzione di libreria di tutti i giorni può mettere a rischio milioni di sistemi. Nel nostro [articolo su Creeper](/yazi/creeper-ilk-virus-zararsizdi/) abbiamo raccontato che il primo virus informatico era in realtà innocuo.
