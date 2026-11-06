---
title: "Moonshot rende pubblici i pesi di Kimi K3.1 Pro da 2.800 miliardi di parametri"
excerpt: "La cinese Moonshot AI ha pubblicato i pesi del modello Kimi K3.1 Pro su Hugging Face; l'azienda dice di averne ridotto di proposito le capacità di attacco informatico."
hook: "Capacità d'attacco tagliata apposta"
fact: "2.800 miliardi"
factLabel: "Numero totale di parametri"
category: "Notizie"
---
L'azienda cinese di intelligenza artificiale Moonshot AI ha pubblicato su Hugging Face i pesi del suo modello di punta, Kimi K3.1 Pro. Secondo un articolo di TechNode del 5 novembre, il modello non è quindi più accessibile solo tramite le app Kimi e l'API: chiunque può ora farlo girare sui propri server. L'azienda aveva presentato il modello a fine ottobre annunciando che avrebbe aperto i pesi entro il 4 novembre.

## Enorme ma selettivo

Secondo TechNode, K3.1 Pro è un modello "mixture of experts" (MoE). Ha in tutto circa 2.800 miliardi di parametri, ma per ogni risposta se ne attivano solo circa 104 miliardi. La finestra di contesto è di circa 1 milione di token e il modello elabora anche immagini oltre al testo. L'addestramento si è concentrato su programmazione, progettazione 3D, ricerca finanziaria e compiti di agente di lunga durata. Huawei ha inoltre annunciato il supporto per far funzionare il modello sui propri chip Ascend.

Secondo le misurazioni della stessa Moonshot, riportate da The Next Web, il modello ha ottenuto il 65,7% su Terminal-Bench 4.0, che mette alla prova gli agenti di programmazione. Un risultato molto vicino al 66,4% di Claude Opus 5.5 e superiore al 58,2% di GPT-6 Astra. L'azienda sostiene anche che la frequenza di affermazioni false del modello è scesa dal 23,4% all'8,3%. Questi dati non sono ancora stati verificati in modo indipendente.

## Una capacità indebolita di proposito

La parte più interessante della notizia riguarda la sicurezza. Moonshot ha spiegato di aver rimosso, prima del rilascio aperto, il materiale di addestramento legato agli attacchi informatici. Nel test interno dell'azienda, la versione senza tagli risolveva il 90,5% dei compiti di sfruttamento di vere vulnerabilità software, mentre il modello pubblicato si è fermato all'81%. Gli esperti ricordano però che i pesi aperti, una volta scaricati, non possono più essere ritirati.

## Perché è importante

Il divario tra i modelli a pesi aperti e i modelli chiusi statunitensi si sta riducendo sempre di più. Per gli sviluppatori significa un'opzione economica e flessibile; per i regolatori, uno strumento potente sempre più difficile da controllare. Spieghiamo come usare in sicurezza gli strumenti di IA nel nostro capitolo sulla [sicurezza delle skill](/yapay-zeka/skill-guvenligi/).
