---
title: "AI znalazła krytyczne luki w PHP, na którym stoi 70 procent stron internetowych"
excerpt: "Dwie luki o nazwie PHP2Shell pozwalają uruchomić kod na serwerze bez logowania. Przy ich odkryciu użyto m.in. modeli GPT-5.6 Sol i Gemini 4 Argon."
hook: "Ogromną lukę w PHP znalazła AI"
fact: "CVSS 9,2"
factLabel: "Najwyższa ocena luk PHP2Shell"
category: "Sztuczna inteligencja"
---

Twórcy PHP 21 października wydali pilną łatkę na dwie krytyczne luki w zabezpieczeniach głównego silnika języka. Luki nazwane „PHP2Shell", oznaczone jako CVE-2026-109618 i CVE-2026-109619, odkryto z pomocą narzędzi sztucznej inteligencji.

## Co się stało?

Według Fortune firma testująca bezpieczeństwo AI Calif znalazła pierwszy element łańcucha 1 sierpnia za pomocą GPT-5.6 Sol; Wiz wykrył pierwszą lukę niezależnie 19 sierpnia i zgłosił ją zespołowi bezpieczeństwa PHP 24 sierpnia. Do odkrycia użyto własnego narzędzia Wiz, Wiz Atlas, oraz modeli GPT-5.6 Sol od OpenAI i Gemini 4 Argon od Google.

Luki pozwalają atakującemu zdalnie uruchomić kod na serwerze bez logowania oraz wykradać dane z pamięci. Wiz podaje, że dotyczy to niemal każdej wersji PHP wydanej w ostatniej dekadzie, aż do 5.4. Najwyższa ocena w skali CVSS to 9,2. PHP działa za około 70 procentami stron internetowych na świecie, a samo WordPress obsługuje mniej więcej 40 procent witryn. Według zaktualizowanego tekstu Fortune luki zaczęto szeroko wykorzystywać już po wydaniu łatki.

## Dlaczego to ważne?

To jeden z najbardziej konkretnych przykładów tego, że sztuczna inteligencja w badaniach nad bezpieczeństwem nie tylko pomaga, ale może sama dokonywać odkryć. Te same narzędzia są jednak w rękach atakujących, a czas między wydaniem łatki a początkiem jej wykorzystywania się skraca. Każdy właściciel strony na PHP powinien natychmiast zaktualizować serwer. W szerszym obrazie ukryte błędy w starym kodzie internetu, działającym od dziesięcioleci, mogą teraz wychodzić na jaw znacznie szybciej. Historię pierwszego programu, który sam wędrował po sieci, opisaliśmy we [wpisie o Creeperze](/yazi/creeper-ilk-virus-zararsizdi/).
