---
title: "Skille do dokumentów: nauczyć agenta Worda, Excela, PowerPointa i PDF-a"
excerpt: "Co robią skille docx, xlsx, pptx i pdf od Anthropic i gdzie działają? Oficjalne i pomocnicze skille, które naprawdę przydają się przy tworzeniu dokumentów."
hook: "Raport, tabela, prezentacja: wszystko jako skill"
fact: "4 DOKUMENTY"
factLabel: "Liczba gotowych skilli do dokumentów"
category: "Sztuczna inteligencja"
---

Powiedzieć AI „przygotuj mi raport" jest łatwo. Trudno sprawić, by raport przyszedł jako plik Worda lub Excela, który da się otworzyć, nie ma rozjechanego formatowania i ma działające formuły. Pierwsza, a może najczęściej używana kategoria skilli to właśnie dokumenty biurowe. W tym wpisie omawiamy wyłącznie skille, których istnienie sprawdziliśmy.

## Cztery filary: docx, xlsx, pptx, pdf

Według dokumentacji Claude'a Anthropic oferuje cztery gotowe (pre-built) skille do dokumentów. Działają one na zapleczu funkcji tworzenia plików w Claude, a Anthropic publikuje ich kod źródłowy w repozytorium anthropics/skills na GitHubie.

| Skill | Co robi? (według oficjalnych opisów) |
|---|---|
| docx | Tworzy, czyta i edytuje dokumenty Worda, w tym formatowanie i szablony |
| xlsx | Otwiera i edytuje arkusze, dodaje formuły i wykresy, porządkuje chaotyczne dane |
| pptx | Tworzy prezentacje, edytuje slajdy, czyta i analizuje zawartość plików .pptx |
| pdf | Wyodrębnia tekst i tabele, łączy i dzieli pliki PDF, wypełnia formularze, dodaje znak wodny |

Opisy w repozytorium są napisane dość „natarczywie". Na przykład opis skilla pptx każe go używać, gdy plik .pptx pojawia się „w jakikolwiek sposób" jako dane wejściowe lub wyjściowe. To oficjalny przykład reguły „opis uruchamia skill", o której pisaliśmy we wcześniejszym wpisie.

## Gdzie możesz z nich korzystać?

Według dokumentacji Claude'a, stan na październik 2026, te cztery skille działają samoczynnie podczas tworzenia dokumentów w claude.ai i można je też wywoływać jako gotowe skille w Claude API. W Claude Code gotowe skille do dokumentów nie są wbudowane. Można jednak dodać repozytorium anthropics/skills jako marketplace wtyczek dla Claude Code i zainstalować pakiet document-skills. Według instrukcji w repozytorium najpierw dodaje się marketplace poleceniem /plugin marketplace add anthropics/skills, a potem instaluje document-skills@anthropic-agent-skills.

Jest tu rozróżnienie licencyjne. Wiele skilli w repozytorium ma otwartą licencję Apache 2.0. Cztery skille do dokumentów udostępniono jednak jako „nie open source, tylko z dostępnym kodem źródłowym" (source-available). Możesz więc przeglądać kod i się z niego uczyć, ale zanim zaczniesz swobodnie redystrybuować go we własnym produkcie, musisz przeczytać plik licencji.

> **Czy wiesz?** Skill pdf to podręcznikowy przykład stopniowego wczytywania. Według wpisu inżynieryjnego Anthropic instrukcje wypełniania formularzy wyciągnięto z głównego pliku SKILL.md i przeniesiono do osobnego pliku forms.md. Claude czyta go tylko wtedy, gdy naprawdę wypełnia formularz. W repozytorium w folderze pdf leżą dziś zarówno forms.md, jak i reference.md oraz folder scripts.

## Pomocnicy obok dokumentu

Tworzenie dokumentów nie kończy się na formacie pliku. W repozytorium anthropics/skills są też inne oficjalne przykłady skupione na treści:

- **doc-coauthoring:** oferuje krok po kroku przebieg wspólnego pisania ustrukturyzowanych tekstów, takich jak specyfikacja techniczna, propozycja czy dokument decyzyjny. Przeprowadza przez etapy przekazania kontekstu, iteracyjnych poprawek i weryfikacji.
- **internal-comms:** zbiera zasoby, które pomagają pisać komunikację wewnętrzną, na przykład raporty statusowe, aktualizacje dla zarządu, newslettery firmowe i FAQ, w formatach preferowanych przez firmę. W folderze są też przykładowe teksty.
- **brand-guidelines:** stosuje do wyniku oficjalne kolory marki i typografię Anthropic. Jego główna wartość to pokazanie, jak zbudować podobny skill dla własnej marki.
- **theme-factory:** zawiera 10 gotowych motywów kolorystyczno-typograficznych, które można zastosować do slajdów, dokumentów, raportów lub stron HTML, a w razie potrzeby od razu wygeneruje nowy motyw.

Centrum pomocy wspomina też o skillach przygotowanych przez partnerów, takich jak Notion, Figma i Atlassian, tak aby współpracowały z ich własnymi konektorami MCP. Przydają się, gdy pracujesz w narzędziach, w których powstają dokumenty (np. na stronach Notion).

## Jak to wygląda w praktyce?

Najskuteczniej jest połączyć gotowe skille do dokumentów z własnym małym skillem. Na przykład skill xlsx wie, jak poprawnie wygenerować Excela, ale nie wie, jakie kolumny powinna mieć miesięczna tabela sprzedaży w twojej firmie. Jeśli napiszesz krótki skill, który to opisuje, oba skille zadziałają razem i powstanie plik zarówno poprawnie sformatowany, jak i zgodny z twoim standardem.

Dwie rzeczy warto zapamiętać. Po pierwsze, repozytorium anthropics/skills wprost zaznacza, że te skille służą celom pokazowym i edukacyjnym, a faktyczne zachowanie Claude'a może się różnić od zawartych tu implementacji. Po drugie, skille do dokumentów potrzebują środowiska do wykonywania kodu. Według Centrum pomocy do działania skilli musi być włączona funkcja wykonywania kodu.

W następnym wpisie przechodzimy na stronę ekranu: skille tworzące projekty, interfejsy i wyniki dla sieci.

Przy jakim typie dokumentu tracisz najwięcej czasu: tabeli, prezentacji czy raportu?
