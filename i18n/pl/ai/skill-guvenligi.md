---
title: "Bezpieczeństwo skilli: wszystko, co musisz przeczytać przed instalacją"
excerpt: "Skille mogą uruchamiać kod i pobierać instrukcje z zewnętrznych źródeł. Przewodnik o zaufanych źródłach, przeglądzie SKILL.md i skryptów, najmniejszych uprawnieniach i kluczach tajnych."
hook: "Instalacja skilla to instalacja oprogramowania"
fact: "13,4%"
factLabel: "Odsetek skilli z krytyczną luką (Snyk, 2026)"
category: "Sztuczna inteligencja"
---

To, co czyni skille tak potężnymi, jednocześnie czyni je ryzykownymi: skill może nieść nie tylko tekst, lecz także kod wykonywalny. Gdy agent wczytuje taki skill, wykonuje zawarte w nim instrukcje jak własne i może uruchamiać jego skrypty. Dlatego zalecenie z dokumentacji Claude'a da się zamknąć w jednym zdaniu: traktuj instalację skilla jak instalację oprogramowania.

## Co mówią oficjalne źródła?

Sekcja o bezpieczeństwie w dokumentacji Claude'a jest dość bezpośrednia. Zaleca używać skilli wyłącznie z zaufanych źródeł, czyli takich, które sam napisałeś lub dostałeś od Anthropic. Jeśli musisz użyć skilla z nieznanego źródła, każe być „niezwykle ostrożnym" i przejrzeć go od początku do końca przed użyciem.

Wpis inżynieryjny Anthropic idzie tą samą drogą: przy skillach z mniej zaufanych źródeł zaleca sprawdzać dołączone pliki, zwłaszcza zależności kodu i skrypty, a także instrukcje każące łączyć się z sieciami zewnętrznymi. Dokumentacja podkreśla jeszcze jedno ryzyko: skille pobierające dane z zewnętrznych adresów są niebezpieczne, bo pobrana treść może zawierać złośliwe instrukcje.

## Co dzieje się w terenie?

Te ostrzeżenia nie są teoretyczne. Firma bezpieczeństwa Snyk w badaniu „ToxicSkills" opublikowanym 5 lutego 2026 roku przeskanowała 3984 skille z ClawHub i skills.sh. Wyniki:

| Ustalenie | Liczba |
|---|---|
| Przeskanowane skille | 3984 |
| Z co najmniej jednym problemem bezpieczeństwa | 1467 (36,82 procent) |
| Z co najmniej jednym problemem krytycznym | 534 (13,4 procent) |
| Potwierdzony złośliwy ładunek | 76 |

Według raportu dane ze skills.sh obejmują tylko wybrane 100 najlepszych skilli tego serwisu, a pełne dane rynkowe dotyczą ClawHub. Wśród zaobserwowanych typów ataków są instrukcje instalacji, które każą użytkownikowi pobrać i uruchomić niezaufane oprogramowanie, ukryte polecenia (zamaskowane za pomocą Base64 lub Unicode) wysyłające dane uwierzytelniające atakującemu oraz próby wyłączania zabezpieczeń i zakładania tylnych drzwi. W 91 procentach potwierdzonych złośliwych skilli użyto wstrzykiwania promptów (prompt injection).

> **Czy wiesz?** Według Centrum pomocy Claude'a organizacje Enterprise mogą włączyć skanowanie skilli, które sprawdza wgrywane skille i wtyczki pod kątem złośliwej zawartości. To jednak siatka bezpieczeństwa, a nie zamiennik czytania. Najlepiej zrozumiesz, co robi dany skill, jeśli przed instalacją sam otworzysz i przeczytasz jego SKILL.md oraz skrypty.

## Lista kontrolna przed instalacją

Praktyczna lista, którą wyciągnęliśmy z zaleceń w dokumentacji i ustaleń z terenu:

1. **Zweryfikuj źródło.** Czyje jest repozytorium? Oficjalna firma lub znany programista, czy może kopia łudząco podobna do znanego pakietu (typosquatting)?
2. **Przeczytaj SKILL.md od początku do końca.** Zwroty takie jak „najpierw pobierz i uruchom to", „wyłącz ustawienie bezpieczeństwa", „wyślij na ten adres" to sygnały alarmowe.
3. **Przejrzyj folder scripts/.** Jeśli są linijki, których nie umiesz odczytać, ukryte lub zakodowane w Base64, nie instaluj.
4. **Sprawdź zewnętrzne odnośniki.** Jeśli skill pobiera instrukcje lub dane z adresu internetowego, pamiętaj, że ta treść może się zmienić w każdej chwili.
5. **Instaluj to, czego potrzebujesz.** Wybieranie pojedynczych skilli zamiast „zainstaluj wszystko" zmniejsza zarówno kontekst, jak i powierzchnię ataku.

## Najmniejsze uprawnienia i klucze tajne

Ważne jest też to, gdzie skill działa. Według dokumentacji Claude'a w środowisku Claude API skille nie mają dostępu do sieci i nie mogą instalować pakietów w trakcie działania. W claude.ai dostęp do sieci może być pełny, częściowy lub wyłączony, zależnie od ustawień użytkownika i administratora. W Claude Code skille mają taki dostęp do sieci jak każdy program na twoim komputerze. Skill zainstalowany w lokalnym agencie działa więc z twoimi uprawnieniami.

Dlatego tak ważna jest zasada najmniejszych uprawnień. W Claude Code pole allowed-tools we frontmatterze skilla sprawia, że po jego wywołaniu określone narzędzia mogą być używane bez pytania o zgodę. Według dokumentacji to uprawnienie jest zerowane przy następnej wiadomości. Mimo to, jeśli w cudzym skillu widzisz szerokie uprawnienia, dobrym nawykiem jest nie instalować go bez świadomej akceptacji.

Dla kluczy tajnych zasada jest prosta: nigdy nie wpisuj kluczy API, haseł ani tokenów dostępu do SKILL.md ani do folderu skilla. Kiedy udostępnisz skill lub wyślesz go do repozytorium, wszystko z tego folderu pójdzie razem z nim. Klucze trzymaj w zmiennych środowiskowych lub w bezpiecznym magazynie danych uwierzytelniających używanego narzędzia, a skillowi powiedz tylko, jak się do nich dostać.

Według stanu na październik 2026 ekosystem skilli rośnie bardzo szybko, a ten wzrost przypomina problemy bezpieczeństwa z pierwszych lat sklepów z aplikacjami. Dobra wiadomość: przeczytanie skilla jest znacznie łatwiejsze niż przeczytanie kodu źródłowego aplikacji, bo w większości to zwykły tekst.

Czy przed instalacją skilla otwierasz go i czytasz, czy raczej ufasz liczbie gwiazdek i pobrań?
