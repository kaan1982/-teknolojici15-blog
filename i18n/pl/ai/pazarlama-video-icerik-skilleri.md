---
title: "Skille do marketingu, wideo i treści: skrzynka narzędzi twórcy"
excerpt: "Repozytorium marketingskills Coreya Hainesa, wtyczka marketingowa Anthropic, skille Remotion i HeyGen HyperFrames. Prawdziwe wybory do treści i wideo."
hook: "Wideo piszesz kodem, tekst skillem"
fact: "52 SKILLE"
factLabel: "Liczba skilli w repozytorium marketingskills"
category: "Sztuczna inteligencja"
---

Za tym blogiem też codziennie powstają krótkie filmy, okładki i teksty. Dlatego ta kategoria jest dla nas trochę osobista: skille do marketingu, treści i wideo. To także dziedzina, w której skille społeczności mnożą się najszybciej. Wymieniliśmy więc tylko te przykłady, których repozytoria otworzyliśmy i sprawdziliśmy. Wszystkie liczby według stanu na koniec października 2026.

## marketingskills: biblioteka marketingowa z 52 skillami

Repozytorium coreyhaines31/marketingskills na licencji MIT, dzieło Coreya Hainesa, człowieka stojącego za agencją optymalizacji konwersji Conversion Factory, to jedna z najobszerniejszych kolekcji społeczności w tej dziedzinie. Według README jest przygotowane dla marketerów technicznych i założycieli, a skupia się na takich zadaniach jak optymalizacja konwersji, copywriting, SEO, analityka i inżynieria wzrostu. Autor zaznacza, że działa z Claude Code, OpenAI Codex, Cursorem i innymi agentami wspierającymi standard Agent Skills.

W folderze skills w repozytorium jest 52 skille. Kilka przykładów:

- **copywriting:** do pisania lub poprawiania tekstów na każdą stronę marketingową, od strony głównej przez landing page po stronę z cennikiem.
- **seo-audit:** do audytu i diagnozowania problemów SEO w serwisie.
- **ai-seo:** do optymalizowania treści pod wyszukiwarki AI, czyli aby duże modele językowe wskazywały ją jako źródło w swoich odpowiedziach.
- **emails i cold-email:** do sekwencji e-mailowych, automatycznych przepływów i kampanii cold mailingowych B2B.
- **social:** do tworzenia i planowania treści na LinkedIn, X, Instagram, TikTok i Facebooka.

Do instalacji README poleca polecenie npx skills add coreyhaines31/marketingskills. Można też wybrać pojedyncze skille.

## Wtyczka marketingowa Anthropic

Repozytorium Anthropic anthropics/knowledge-work-plugins zbiera wtyczki przygotowane dla poszczególnych zawodów. Powstały dla Claude Cowork, ale są zgodne także z Claude Code. Każda wtyczka pakuje w jedno skille, konektory, polecenia ze ukośnikiem i podagentów do danego zadania.

W wtyczce marketing znajdują się skille: brand-review (sprawdza szkic pod kątem głosu marki i przewodnika stylu, a następnie proponuje poprawki w układzie przed/po), campaign-plan (przygotowuje brief kampanii z celem, odbiorcami, przekazem, strategią kanałów i kalendarzem treści), content-creation, draft-content, email-sequence, competitive-brief, performance-report i seo-audit. README wylicza, że wtyczka może łączyć się z narzędziami takimi jak Slack, Canva, Figma, HubSpot i Ahrefs. Skill dostarcza więc „metodę", a konektor „dostęp".

> **Czy wiesz?** Wideo można dziś tworzyć nie tylko przeciąganiem na osi czasu, lecz także kodem, i właśnie tu wkraczają skille. Zespół Remotion publikuje własny oficjalny zestaw skilli dla swojego frameworka wideo opartego na Reakcie. HeyGen z kolei oferuje HyperFrames, opartego na pomyśle „napisz HTML, wyrenderuj wideo", razem ze skillami dla agentów.

## Do wideo: Remotion i HyperFrames

| Pakiet | Źródło | Co oferuje? |
|---|---|---|
| remotion-dev/skills | Zespół Remotion (oficjalny) | 12 skilli: tworzenie wideo, zasady animacji, napisy, render, podgląd |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skille do frameworka zamieniającego HTML w wideo oraz gotowe bloki |

**Remotion:** według README Remotion prowadzi listę Agent Skills opisujących najlepsze praktyki pracy w projektach Remotion. W zestawie są między innymi remotion-create, który tworzy nowe wideo, remotion-markup z wiedzą o animacji i układzie, remotion-captions do transkrypcji napisów i ich animacji, remotion-render do eksportu oraz remotion-best-practices, który kieruje do wszystkich pozostałych. Instalacja odbywa się poleceniem npx skills add remotion-dev/skills.

**HyperFrames:** repozytorium HeyGen przedstawia się hasłem „napisz HTML, wyrenderuj wideo, stworzone dla agentów". Według README podstawowy zestaw tworzą skille hyperframes (tworzenie i edycja wideo), hyperframes-cli (szkielet projektu, podgląd, render), hyperframes-registry (około 450 gotowych bloków przejść, tytułów, napisów i grafik) oraz media-use (zadania medialne, takie jak muzyka, efekty dźwiękowe, obrazy i lektor). W sumie opublikowano 7 skilli.

Ciekawy szczegół: opis skilla do wideo w repozytorium Coreya Hainesa wymienia jako słowa uruchamiające także nazwy takie jak Remotion, HyperFrames i HeyGen. Skill marketingowy został więc napisany tak, by działał jak most do skilli wideo.

## Na co zwrócić uwagę przy wyborze?

Większość skilli w tej dziedzinie pochodzi od społeczności lub firm i jest aktualizowana bardzo szybko. Zanim zainstalujesz pakiet, ułatwią ci życie trzy pytania. Czyje jest repozytorium i czy jest aktywnie aktualizowane? Czy w SKILL.md jest instrukcja łącząca się z zewnętrznymi adresami lub prosząca o dane uwierzytelniające? Czy możesz wybrać i zainstalować tylko te kilka skilli, których naprawdę potrzebujesz? Większość narzędzi instalacyjnych pozwala wybrać pojedynczy skill zamiast „zainstaluj wszystko", co zmniejsza zarówno kontekst, jak i ryzyko.

Co w tworzeniu treści kradnie ci najwięcej czasu: pisanie tekstu, przygotowywanie grafik czy montaż wideo?
