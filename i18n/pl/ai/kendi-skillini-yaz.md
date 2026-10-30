---
title: "Napisz własny skill: pierwsza umiejętność z SKILL.md krok po kroku"
excerpt: "Jeden folder, jeden plik SKILL.md i dobrze napisany opis. Kroki pisania własnego Agent Skilla, znaczenie pola description i sposób testowania."
hook: "O uruchomieniu skilla decyduje jego opis"
fact: "1024"
factLabel: "Maksymalna liczba znaków w polu description"
category: "Sztuczna inteligencja"
---

Aby napisać skill, nie musisz być programistą. W najprostszej postaci wystarczy folder i jeden plik tekstowy w środku. Ale różnica między skillem, który działa dobrze, a takim, który nigdy się nie uruchamia, często kryje się w jednym zdaniu: opisie. W tym wpisie piszemy od zera mały, ale prawdziwy skill.

## Krok 1: Utwórz folder i plik SKILL.md

Według specyfikacji Agent Skills skill to folder zawierający co najmniej plik SKILL.md. Na samym początku pliku znajdują się metadane YAML (frontmatter) z dwoma obowiązkowymi polami:

- **name:** maksymalnie 64 znaki. Tylko małe litery, cyfry i myślniki. Nie może zaczynać się ani kończyć myślnikiem, nie może zawierać dwóch myślników pod rząd i musi być taka sama jak nazwa folderu. Dokumentacja Claude'a dodaje, że w nazwie nie wolno używać słów „anthropic" i „claude".
- **description:** nie może być pusty, maksymalnie 1024 znaki. Powinien opisywać, co skill robi i kiedy ma być używany.

Są też pola opcjonalne (license, compatibility, metadata i eksperymentalne allowed-tools), ale w większości skilli nie są potrzebne.

## Krok 2: Napisz opis starannie

Dlaczego opis jest tak ważny? Bo na starcie agent czyta z każdego skilla wyłącznie nazwę i opis. Słowami agentskills.io, „cały ciężar" uruchamiania spoczywa na opisie. Jeśli opis nie mówi, kiedy skill się przyda, agent po niego nie sięgnie.

Zalecenia ze źródeł można streścić tak:

- Napisz zarówno **co skill robi**, jak i **kiedy go używać**.
- Dokumentacja Claude'a zaleca pisać opis w **trzeciej osobie**, bo trafia do promptu systemowego („Przetwarza pliki Excela", a nie „Mogę ci pomóc").
- agentskills.io radzi wprost wymienić także sytuacje, w których użytkownik nie nazywa danej dziedziny po imieniu.
- Pisz krótko: kilka zdań, co najwyżej krótki akapit. Claude Code w liście ucina opis na 1536 znakach, więc najważniejszy przypadek użycia powinien być na początku.

## Krok 3: Treść krótka, skrypt sprytny

Weźmy za przykład skill zgodny z zasadami pisania tego bloga: w tekście nie ma zostać ani długi myślnik (em dash), ani półpauza (en dash). Struktura folderu niech wygląda tak:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

A plik SKILL.md jest tak krótki:

```markdown
---
name: tire-denetimi
description: Türkçe blog yazılarında uzun tire (U+2014) ve orta tire (U+2013) kullanımını bulur ve düzeltme önerir. Kullanıcı bir Markdown yazısını yayına hazırlarken, "tireleri kontrol et", "yazım kurallarına uyuyor mu" dediğinde ya da adını anmasa da yayın öncesi son kontrol istediğinde kullanılır.
---

# Tire denetimi

1. `python scripts/tire_bul.py <dosya.md>` komutunu çalıştır.
2. Çıktıdaki her satır için tireyi nokta, virgül, iki nokta veya parantezle değiştirmeyi öner.
3. Anlamı değiştirme. Emin olmadığın satırları kullanıcıya sor.
4. Sonunda kaç satır düzelttiğini tek cümleyle bildir.
```

Dokumentacja Claude'a traktuje okno kontekstowe jak „wspólny zasób" i zaleca dodawać wyłącznie wiedzę, której model jeszcze nie ma. Treść powinna zajmować mniej niż 500 linii. Długie teksty referencyjne warto przenieść do osobnych plików i linkować do nich z SKILL.md na jednym poziomie.

Zasada dla skryptów jest jasna: „rozwiąż, nie zrzucaj problemu". Skrypt powinien sam obsłużyć sytuacje błędne, a nie być pisany w stylu „niech się wywali, Claude coś wymyśli". Gdy skrypt działa, do kontekstu trafia nie kod, lecz tylko jego wynik. Dzięki temu skrypt jest bardziej niezawodny niż instrukcja tekstowa przy zadaniach powtarzalnych i niewybaczających błędów.

> **Czy wiesz?** W Claude Code dawne „własne polecenia ze ukośnikiem" połączyły się ze skillami. Plik .claude/commands/deploy.md i plik .claude/skills/deploy/SKILL.md tworzą to samo polecenie /deploy. Jeśli nie chcesz, aby skill uruchamiał się automatycznie, dodaj do frontmattera disable-model-invocation: true, a wywołasz go tylko ręcznie.

## Krok 4: Testuj, a potem testuj jeszcze raz

Poradnik najlepszych praktyk Claude'a zaleca przygotować scenariusze ewaluacyjne, zanim napiszesz długi dokument, a lista kontrolna przed publikacją obejmuje co najmniej trzy ewaluacje i osobne testy na modelach Haiku, Sonnet i Opus. Uzasadnienie jest proste: instrukcja, która działa bezbłędnie na Opusie, może wymagać więcej szczegółów dla Haiku.

Do testowania uruchamiania skilla agentskills.io proponuje coś konkretnego: przygotuj około 20 przykładowych wiadomości użytkownika. Od 8 do 10 z nich powinno uruchamiać skill, a od 8 do 10 nie. Najcenniejsze przykłady negatywne to te, które „o włos pudłują", czyli wiadomości używające tych samych słów, ale prosące o coś innego. Ponieważ zachowanie modelu nie jest za każdym razem takie samo, zaleca się uruchomić każdą wiadomość kilka razy (na początek 3) i sprawdzić współczynnik uruchamiania.

| Zły opis | Dobry opis |
|---|---|
| „Pomaga z plikami PDF." | Mówi, co robi i kiedy ma być używany |
| Same szczegóły techniczne | Opisuje intencję użytkownika |
| Obejmuje wszystko | Zaznacza też, czego nie robi |

Instalacja jest równie prosta: w Claude Code wystarczy umieścić folder w ~/.claude/skills/ (osobiście) lub w folderze .claude/skills/ projektu. Claude Code obserwuje te foldery i wykrywa zmiany w tej samej sesji, bez ponownego uruchamiania. W claude.ai skill można wgrać w ustawieniach jako plik zip.

Jakie powtarzalne zadanie zautomatyzowałby twój pierwszy skill?
