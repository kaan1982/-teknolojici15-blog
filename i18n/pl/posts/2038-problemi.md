---
title: "Problem roku 2038: dlaczego niektóre komputery cofną się do 1901?"
excerpt: "32-bitowy czas Uniksa skończy się 19 stycznia 2038 o 03:14:07 UTC, a stare systemy mogą uznać, że jest 13 grudnia 1901. Na czym polega problem 2038 i jak się go rozwiązuje?"
hook: "Komputery cofną się do 1901!"
fact: "03:14:07"
factLabel: "19 stycznia 2038, UTC: granica 32 bitów"
category: "Komputery"
---
Wchodząc w rok 2000, świat rozprawiał o błędzie komputerowym zwanym „Y2K". Teraz przed nami kolejna data: 19 stycznia 2038. Gdy tego dnia zegar przekroczy o sekundę godzinę 03:14:07 (UTC), niektóre stare komputery mogą nagle przestawić kalendarz na rok 1901. To nie scenariusz science fiction, tylko prosty problem matematyczny.

## Jak komputery liczą czas?

Unix i wiele systemów od niego wywiedzionych przechowuje czas nie jako zegar czy kalendarz, lecz jako jedną liczbę. Jest to liczba sekund, które upłynęły od północy 1 stycznia 1970 roku (UTC). Nazywa się ją „czasem uniksowym".

Kłopot w tym, że w wielu starszych systemach ta liczba jest zapisywana jako 32-bitowa liczba całkowita ze znakiem. Największa wartość, jaką może przyjąć 32-bitowa liczba ze znakiem, to 2 147 483 647, czyli 2 do potęgi 31 minus 1. Tyle sekund to około 68 lat. „Ze znakiem" oznacza, że jeden bit jest zarezerwowany na informację, czy liczba jest dodatnia, czy ujemna. Dlatego na wielkość liczby przeznaczone jest nie wszystkie 32 bity, lecz 31.

Dodając 68 lat do 1970 roku, docieramy do 2038. Rachunek wskazuje dokładnie 19 stycznia 2038, 03:14:07 UTC.

## Co stanie się sekundę później?

Sekundę po osiągnięciu największej wartości licznik się przepełnia. Pomyśl o starych mechanicznych licznikach kilometrów w samochodach: po 999 999 wracają do 000 000. Tu dzieje się coś podobnego, ale ponieważ liczba jest ze znakiem, wartość przeskakuje na bardzo dużą liczbę ujemną.

Dotknięty system odczyta tę liczbę ujemną jako sekundy liczone wstecz od 1970 roku. Efekt: data wyświetli się jako 13 grudnia 1901, godzina 20:45:52 (UTC). Komputer, który nagle cofnął się o 136 lat, może zacząć błędnie obsługiwać certyfikaty, timery, rejestry i porównania dat.

> **Czy wiesz?** Ten problem ujawnił się w niektórych programach, nie czekając na rok 2038. Według Wikipedii w 2006 roku oprogramowanie AOLserver przekroczyło granicę 2038 i uległo awarii, bo ustawiło wartość limitu czasu na miliard sekund w przód. Każdy program, który oblicza „datę w przyszłości", może więc uderzyć w tę granicę już teraz. Podobna 32-bitowa granica w 2022 roku napsuła krwi także w Microsoft Exchange: numer wersji aktualizacji został odczytany jak znacznik czasu i po przekroczeniu granicy przestały działać funkcje skanowania w poszukiwaniu złośliwego oprogramowania.

## Kto jest zagrożony?

Zdecydowana większość nowoczesnych telefonów i komputerów, których używasz na co dzień, korzysta już z 64-bitowych wartości czasu. Prawdziwe ryzyko dotyczy systemów, które przez wiele lat działają bez aktualizacji. Wikipedia wyróżnia przede wszystkim systemy starsze (legacy) i wbudowane: przemysłowe sterowniki, niektóre urządzenia sieciowe, systemy w pojazdach, czyli maszyny zainstalowane raz i zapomniane.

Ponieważ takie urządzenia nie są często aktualizowane, gdy nadejdzie rok 2038, w środku może jeszcze tkwić element liczący czas na 32 bitach.

| 32-bitowy czas ze znakiem | 64-bitowy czas ze znakiem |
|---|---|
| Największa wartość 2 147 483 647 | Znacznie większy zakres |
| Granica: 19 stycznia 2038 | Granica: za około 292 miliardy lat |
| Stare i wbudowane systemy | Nowoczesne systemy operacyjne |

## Rozwiązanie: większy licznik

Trudność jest tu bardziej praktyczna niż techniczna. Zmiana rozmiaru liczby przechowującej czas może wpłynąć na każdy program, każdy format pliku i każde pole bazy danych, które jej używają. Poprawienie jednej linijki jest łatwe, ale odnalezienie i zaktualizowanie całego oprogramowania wewnątrz urządzenia może zająć lata.

Pomysł rozwiązania jest prosty: przechowywać czas w 64-bitowej liczbie ze znakiem. Według Wikipedii przesuwa to moment przepełnienia o około 292 miliardy lat. Czyli daleko poza obecny wiek wszechświata.

Ta zmiana trwa od lat. Według doniesień Phoronix ze stycznia 2020 roku Linux 5.6 przygotowywano jako pierwszą główną wersję jądra, która mogła stworzyć podstawę do działania systemów 32-bitowych po roku 2038. Wikipedia podaje, że Linux 5.6, wydany w 2020 roku, dodał obsługę 64-bitowego czasu w architekturach 32-bitowych. Aby to działało, aplikacje też muszą zostać ponownie skompilowane z 64-bitowym czasem.

Inna propozycja to zamiana liczby na bez znaku (unsigned). Przesuwa to jednak granicę tylko do roku 2106 i psuje obsługę dat sprzed 1970 roku. Dlatego za właściwą drogę uważa się przejście na 64 bity.

Y2K nie zamieniło się w wielką katastrofę, bo ludzie pracowali z wyprzedzeniem; jak sądzisz, czy w latach, które zostały do 2038, powtórzy się to ciche bohaterstwo?
