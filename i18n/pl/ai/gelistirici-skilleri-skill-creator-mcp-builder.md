---
title: "Skille dla programistów: skill-creator, mcp-builder i nie tylko"
excerpt: "Skill, który pisze skille, skill budujący serwery MCP, pakiety wnoszące dyscyplinę testów i debugowania. Sprawdzone wybory dla programistów."
hook: "Istnieje skill, który pisze skille"
fact: "20 ZAPYTAŃ"
factLabel: "Zalecana próbka do testu uruchamiania"
category: "Sztuczna inteligencja"
---

Dla osoby, która tworzy oprogramowanie, skille są ciekawe z dwóch powodów. Po pierwsze, istnieją skille „twórcy", które pomagają pisać własne skille szybciej i w mierzalny sposób. Po drugie, są pakiety, które wnoszą do pracy agenta dyscyplinę inżynierską (testy, planowanie, debugowanie). W tym wpisie omawiamy jedno i drugie, wyłącznie na przykładach, których istnienie sprawdziliśmy.

## skill-creator: skill, który pisze skille

skill-creator z oficjalnego repozytorium Anthropic anthropics/skills służy do tworzenia nowych skilli, edytowania i ulepszania istniejących oraz mierzenia ich skuteczności. Według opisu zajmuje się też uruchamianiem ewaluacji (eval), porównywaniem wyników z analizą wariancji i optymalizacją opisu skilla tak, aby uruchamiał się trafniej.

Przebieg pracy opisano bardzo po ludzku: zdecyduj, czego chcesz, napisz szkic, przygotuj kilka testowych wiadomości, uruchom Claude'a ze skillem na tych wiadomościach, oceńcie razem wyniki, przepisz, powtórz. W folderze są osobne skrypty uruchamiające ewaluację, generujące raport porównawczy i poprawiające opis, a także „eval-viewer" do wizualnego przeglądania wyników.

Poradnik agentskills.io o optymalizacji opisów również wskazuje ten skill jako przykład. Według poradnika skill-creator automatyzuje całą tę pętlę od początku do końca: dzieli zestaw testowy, równolegle mierzy współczynniki uruchamiania, proponuje z pomocą Claude'a ulepszenia opisu i tworzy na żywo raport HTML.

> **Czy wiesz?** W teście uruchamiania zalecanym przez agentskills.io używa się około 20 przykładowych wiadomości, a każdą uruchamia się 3 razy. Wypróbowanie jednego opisu to więc 60 uruchomień. Aby uniknąć przeuczenia (overfitting), około 60 procent wiadomości przeznacza się do ulepszania, a 40 procent wyłącznie do weryfikacji. Poradnik mówi, że najczęściej wystarcza pięć rund.

## mcp-builder i claude-api: dla budujących integracje

- **mcp-builder (oficjalny):** przewodnik po tworzeniu serwerów MCP, dzięki którym duże modele językowe rozmawiają z zewnętrznymi usługami za pomocą dobrze zaprojektowanych narzędzi. Działa z Pythonem (FastMCP) lub Node/TypeScript (MCP SDK). Skill dzieli proces na cztery etapy: badania i planowanie, implementacja, przegląd i testy, tworzenie ewaluacji. W folderze są dokumenty referencyjne dla poszczególnych języków i skrypty do ewaluacji.
- **claude-api (oficjalny):** skill referencyjny do Claude API i SDK Anthropic. Obejmuje identyfikatory modeli, parametry, strumieniowanie (streaming), użycie narzędzi, buforowanie i inne tematy, a także zawiera osobne foldery dla wielu języków programowania. Według dokumentacji Claude'a ten skill open source jest dostarczany razem z Claude Code.
- **webapp-testing (oficjalny):** zestaw narzędzi do testowania lokalnych aplikacji webowych za pomocą Playwrighta. To praktyczny pomocnik dla osób piszących front-end, o którym wspominamy także we wpisie o projektowaniu.

## Ze społeczności: Superpowers i dyscyplina inżynierska

Poza oficjalnym repozytorium jednym z najczęściej omawianych wśród programistów pakietów jest repozytorium obra/superpowers Jessego Vincenta na licencji MIT. Opisuje siebie jako „kompletną metodologię tworzenia oprogramowania" dla agentów programujących. Według stanu na październik 2026 w repozytorium są między innymi następujące skille (wybór):

| Skill | Kiedy się włącza? |
|---|---|
| brainstorming | Przed rozpoczęciem nowej funkcji lub pracy twórczej |
| writing-plans | Przy pisaniu planu do wieloetapowego zadania, zanim dotkniesz kodu |
| test-driven-development | Podczas implementacji: najpierw test, który nie przechodzi, potem minimum kodu |
| systematic-debugging | Gdy napotkasz błąd lub nieprzechodzący test, zanim zaproponujesz poprawkę |
| verification-before-completion | Do uruchomienia poleceń weryfikujących, zanim powiesz „gotowe" |

README repozytorium podaje instrukcje instalacji dla wielu agentów, takich jak Codex, Cursor, Gemini CLI i GitHub Copilot CLI, a po stronie Claude Code zaznacza, że pakiet jest w oficjalnym marketplace wtyczek Anthropic. To praktyczny skutek tego, że Agent Skills są otwartym standardem: ten sam skill może działać w różnych narzędziach.

## Ten sam pomysł na innych platformach

Dokumentacja OpenAI dla ChatGPT i Codexa również opisuje skille jako oparte na „otwartym standardzie agent skills". Według stanu na październik 2026 w dokumentacji wyróżniają się dwaj wbudowani pomocnicy: skill-creator, który tworzy skill na podstawie opisanego zadania (w Codexie wywołuje się go przez $skill-creator), oraz skill-installer, który instaluje gotowe skille z repozytorium openai/skills lub z innych repozytoriów. Codex czyta lokalne skille z folderów .agents/skills na poziomie projektu i użytkownika.

Dla programisty najcenniejszym nawykiem może być to: każde długie wyjaśnienie, które powtarzasz, listę kontrolną code review czy kroki wdrożenia zamień na skill i wrzuć do repozytorium projektu. Skille umieszczone w folderze .claude/skills w Claude Code trafiają do zespołu razem z repozytorium. Pamiętaj jednak, aby czytać skrypty każdego instalowanego skilla ze społeczności, bo takie skille mogą uruchamiać kod na twoim komputerze z twoimi uprawnieniami.

Który krok w twoim procesie programowania najczęściej sprawia, że myślisz „szkoda, że nie ma na to skilla": testy, code review czy wdrożenie?
