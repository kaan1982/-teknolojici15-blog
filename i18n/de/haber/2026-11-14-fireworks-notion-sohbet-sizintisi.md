---
title: "KI-Anbieter Fireworks gehackt; Notion-AI-Chats offengelegt"
excerpt: "Angreifer drangen in die Speichersysteme von Fireworks AI ein; betroffen waren KI-Chats aus weniger als 1 Prozent der Notion-Workspaces."
hook: "Eine Kopie des Chats lag woanders"
fact: "UNTER 1 %"
factLabel: "Betroffene Notion-Workspaces"
category: "News"
---
Die Notiz- und Workspace-App Notion hat einige Kunden darüber informiert, dass ihre KI-Chatprotokolle bei einem Datenleck offengelegt wurden. Das Leck entstand nicht in Notions eigenen Systemen, sondern bei Fireworks AI, dem Infrastrukturanbieter, den Notion für den Betrieb von Open-Weight-KI-Modellen nutzt.

## Wie lief der Angriff ab?

Fireworks wurde im Oktober zweimal zum Ziel: einmal mit gestohlenen internen Zugangsdaten und einmal über einen externen Cloud-Anbieter, der die Forschungs- und Entwicklungsrechner des Unternehmens hostet. Am 24. Oktober führten die Angreifer auf diesem Weg eine unbefugte Arbeitslast aus und gelangten an einige Speichersysteme. Fireworks sagt, es habe den Vorfall noch am selben Tag eingedämmt; die Spuren deuteten auf eine finanziell motivierte Gruppe hin, die unrechtmäßig erlangten Modellzugang verkauft. Anfang November teilte Fireworks Notion mit, dass sich Chatprotokolle unter diesen Daten befanden.

## Welche Daten waren betroffen?

Bei den offengelegten Datensätzen handelte es sich um Notion-AI-Chats, die für die Funktion Insights klassifiziert worden waren, mit der Notion seinen Kunden ihre KI-Nutzung zeigt. Notion erklärte, weniger als 1 Prozent der Workspaces seien betroffen, und die meisten Datensätze enthielten keine Informationen, die sich einem Nutzer oder Unternehmen zuordnen ließen. Das Unternehmen kappte die Verbindung zu Fireworks, schaltete Insights ab und forderte Kunden, die geheime Informationen wie Passwörter oder API-Schlüssel in Chats eingefügt hatten, auf, diese sofort zu ändern. Fireworks wiederum gibt an, bei seinem Echtzeit-Inferenzdienst, der standardmäßig mit "Zero Data Retention" läuft, keine Auswirkungen festgestellt zu haben; das Problem habe Batch-Jobs mit Datenspeicherung und die Speichersysteme betroffen.

## Warum ist das wichtig?

Wer eine KI-Funktion nutzt, schickt seine Daten oft über die Server anderer Firmen, die er nie zu sehen bekommt. Der Vorfall zeigt: Ein in ein Chatfenster eingefügtes Passwort ist nur so sicher wie das schwächste Glied der Lieferkette. Wie alt Passwortdiebstahl tatsächlich ist, erzählen wir in unserem Artikel über [das erste Computerpasswort](/yazi/ilk-bilgisayar-sifresi-ctss/).
