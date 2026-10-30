---
title: "Czym jest skill? Nowe „foldery umiejętności" agentów AI"
excerpt: "Agent Skill to folder z plikiem SKILL.md i opcjonalnymi skryptami. Agent wczytuje go tylko wtedy, gdy jest potrzebny. Czym różni się od promptu, MCP i wtyczki?"
hook: "Naucz agenta nowej umiejętności za pomocą folderu"
fact: "3 WARSTWY"
factLabel: "Stopniowe wczytywanie zawartości skilla"
category: "Sztuczna inteligencja"
---

Asystenci AI wiedzą po trochu o wszystkim, ale nie znają szablonu raportu w twojej firmie, kolorów twojej marki ani sztuczek potrzebnych do poprawnej obsługi danego typu pliku. A gdyby zamiast tłumaczyć to długo w każdej rozmowie, dało się to raz spakować i powiedzieć agentowi: „użyj tego, kiedy będzie trzeba"? Dokładnie na tym polega idea „skilla" (umiejętności).

## W skrócie: folder i plik SKILL.md

Według definicji Anthropic Agent Skills to modułowe pakiety, które rozszerzają możliwości Claude'a. Każdy skill zawiera w jednym miejscu instrukcje, metadane i opcjonalne zasoby (skrypty, szablony), a Claude używa ich samodzielnie, gdy są istotne. Blog inżynieryjny Anthropic ujmuje to jeszcze prościej: skille to „uporządkowane foldery instrukcji, skryptów i zasobów", które agent wczytuje w razie potrzeby, aby lepiej radzić sobie z konkretnymi zadaniami.

Technicznie skill to folder, w którym znajduje się przynajmniej plik o nazwie SKILL.md. Na początku tego pliku, w formacie YAML, są dwa obowiązkowe pola: name (nazwa) i description (opis). Poniżej leżą instrukcje napisane zwykłym Markdownem. Do folderu możesz dodać podfoldery, takie jak scripts/ (kod wykonywalny), references/ (dodatkowe dokumenty) i assets/ (szablony, obrazy, dane).

Anthropic porównuje tę strukturę do przewodnika wdrożeniowego przygotowanego dla nowego pracownika. Kładziesz przewodnik na biurku, a pracownik otwiera go, kiedy potrzebuje.

## Sekret: nie wszystko wczytuje się naraz

To, co odróżnia skille od zwykłego długiego promptu, to rozwiązanie zwane „stopniowym ujawnianiem" (progressive disclosure). Według dokumentacji Claude'a zawartość wczytuje się w trzech warstwach:

| Warstwa | Kiedy się wczytuje? |
|---|---|
| 1. Metadane (nazwa + opis) | Zawsze, na starcie (ok. 100 tokenów na skill) |
| 2. Treść SKILL.md | Gdy skill zostanie uruchomiony (zalecane poniżej 5 000 tokenów) |
| 3. Dodatkowe pliki i skrypty | Tylko w razie potrzeby; do kontekstu trafia wyłącznie wynik działania skryptów |

Dzięki temu możesz załadować agentowi dziesiątki skilli, a one nie zapełnią okna kontekstowego. Dopóki skill nie zostanie uruchomiony, „na stole" leżą tylko jego nazwa i opis. W przykładzie z dokumentacji skill do PDF trzyma instrukcje wypełniania formularzy w osobnym pliku forms.md, a Claude czyta go wyłącznie wtedy, gdy naprawdę wypełnia formularz.

> **Czy wiesz?** Anthropic ogłosił Agent Skills 16 października 2025 roku, a 18 grudnia 2025 roku opublikował ten format jako otwarty standard pod adresem agentskills.io? Dlatego według stanu na październik 2026 tę samą strukturę SKILL.md widzisz też w dokumentacji innych narzędzi, takich jak GitHub Copilot i OpenAI Codex. Dokumentacja Copilota odsyła wprost do specyfikacji agentskills.io, gdy mowa o sprawdzaniu skilli.

## Prompt, MCP, wtyczka: czym się różnią?

Te pojęcia łatwo pomylić, bo wszystkie dotyczą „ulepszania agenta". Podział z Centrum pomocy Claude'a można streścić tak:

- **Prompt lub instrukcje niestandardowe:** ogólne wskazówki obowiązujące w jednej rozmowie albo we wszystkich. Skill jest natomiast przypisany do zadania i włącza się tylko wtedy, gdy jest istotny.
- **Projekty:** stała wiedza w tle, zawsze załadowana w rozmowach wewnątrz projektu. Skill to procedura otwierana w razie potrzeby.
- **Konektory MCP (Model Context Protocol):** łączą Claude'a z zewnętrznymi usługami i źródłami danych. Zapewniają więc „dostęp". Skill to „wiedza, jak się tym posłużyć". Centrum pomocy zaznacza, że oba rozwiązania często używa się razem.
- **Wtyczki (plugin):** w Claude Code i Cowork wtyczka to paczka do wspólnej dystrybucji wielu elementów (skilli, konektorów, poleceń, podagentów). Dokumentacja OpenAI robi podobne rozróżnienie: skill to format zapisu, a wtyczka to forma dystrybucji.

Krótko mówiąc: MCP daje agentowi rękę, skill uczy tę rękę umiejętności, a wtyczka dostarcza to wszystko w jednym pudełku.

## Gdzie to działa?

Według dokumentacji Claude'a, stan na październik 2026, skille można używać w aplikacjach Claude (claude.ai), w Claude Code oraz w Claude API wraz z narzędziem do wykonywania kodu. Centrum pomocy podaje, że skille są dostępne w planach Free, Pro, Max, Team i Enterprise i wymagają włączonej funkcji wykonywania kodu.

Ważny szczegół: skille niestandardowe nie synchronizują się między powierzchniami. Skill wgrany do claude.ai jest prywatny dla twojego konta. Skill wgrany do API jest współdzielony z całą przestrzenią roboczą. W Claude Code przechowuje się go osobiście (~/.claude/skills/) albo w folderze projektu (.claude/skills/).

Jest też wątek bezpieczeństwa. Ponieważ skille mogą wykonywać kod, dokumentacja zaleca traktować je „jak instalację oprogramowania" i używać wyłącznie z zaufanych źródeł. Omawiamy to osobno w ostatnim wpisie serii.

W kolejnych wpisach tej części krok po kroku napiszemy własny skill i przejrzymy kategoriami skille, które naprawdę istnieją i się sprawdzają.

Jakie zadanie, które co dzień tłumaczysz AI od nowa, chciałbyś nauczyć ją tylko raz?
