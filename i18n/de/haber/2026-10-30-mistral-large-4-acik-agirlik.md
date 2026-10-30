---
title: "Mistral macht die Gewichte seines Modells Large 4 mit 1 Billion Parametern öffentlich"
excerpt: "Das französische Mistral hat sein Modell Large 4 mit 1,05 Billionen Parametern als herunterladbare offene Gewichte veröffentlicht. Ziel: Cybersicherheit; auch beim Programmieren ehrgeizig."
hook: "Ein offenes Billionen-Modell aus Europa"
fact: "1,05 Billionen"
factLabel: "Gesamtparameter von Mistral Large 4"
category: "Nachrichten"
---
Das französische KI-Unternehmen Mistral hat am Donnerstag, dem 29. Oktober, die Gewichte seines größten Modells Mistral Large 4 über Hugging Face für alle geöffnet. Das Modell, das Anfang Oktober nur als Vorschau über die API verfügbar war, kann nun heruntergeladen und von Unternehmen und Staaten auf ihren eigenen Servern betrieben werden.

## Was ist passiert?

Nach den von VentureBeat berichteten Daten hat das Modell insgesamt 1,05 Billionen Parameter, aber nur 52 Milliarden aktive Parameter: Das Modell führt in jedem Schritt nur einen kleinen Teil der Gesamtheit aus. Das Kontextfenster umfasst 1 Million Token. Es kann Text und Bilder lesen und erzeugt Text. Für das Training wurden etwa 3.800 Nvidia-Grace-Blackwell-GPUs eingesetzt.

Mistral positioniert das Modell besonders für Cybersicherheit und Coding-Agenten: Bedrohungen in Code und IT-Infrastruktur finden, analysieren und darauf reagieren. Im Index der unabhängigen Bewertungsstelle Artificial Analysis erzielte das Modell unter den außerhalb Chinas entwickelten Modellen mit offenen Gewichten die höchste Punktzahl. Es liegt aber weiter hinter chinesischen offenen Modellen wie DeepSeek und GLM. Die Lizenz ist nicht völlig frei: Eine abgewandelte MIT-Lizenz verlangt von Unternehmen, die das Modell als Dienst verkaufen, eine gesonderte kommerzielle Lizenz.

## Warum ist das wichtig?

Heute sind die meisten der stärksten Modelle nur über das Internet nutzbar, in dem Umfang, den das Unternehmen erlaubt. Offene Gewichte bedeuten dagegen, dass der Zugang nachträglich nicht mehr gekappt werden kann. Pierre Stock, Vizepräsident Wissenschaft bei Mistral, sagte gegenüber Reuters, dass es unmöglich sei, den Zugang einzuschränken, sobald das Modell einmal veröffentlicht ist. Für Institutionen, die ihre Daten nicht nach außen geben wollen, ist das ein großer Vorteil; es bedeutet aber auch, dass das Modell in die Hände böswilliger Personen gelangen kann. Zugleich ist es ein konkreter Schritt für die Debatte über „Souveränität bei künstlicher Intelligenz“ in Europa.

## Eine Verbindung zur Geschichte

Die Idee von Programmen, die von selbst durchs Netz wandern, und von Mitteln, sie aufzuhalten, ist nicht neu. Reaper, das 1971 geschrieben wurde, um das im ARPANET wandernde Creeper zu fangen, gilt als der erste Virenschutz. Diese Geschichte haben wir in unserem Beitrag [Der erste Computer-„Virus“ Creeper löschte nichts](/yazi/creeper-ilk-virus-zararsizdi/) erzählt. Heute werden für die Cyberabwehr Modelle mit einer Billion Parametern geschrieben.
