---
title: "Komputer Apollo 11: co naprawdę znaczy „4 KB pamięci\"?"
excerpt: "Komputer, który posadził Apollo 11 na Księżycu, miał około 4 KB RAM. Programy leżały w około 72 KB pamięci ROM, wplecionej jak lina."
hook: "Wylądowali na Księżycu z 4 KB RAM"
fact: "4 KB"
factLabel: "Pamięć kasowalna (RAM) komputera AGC"
category: "Komputery"
---
Na pewno słyszałeś zdanie: „pamięć komputera, który poleciał na Księżyc, była mniejsza niż pojedyncze zdjęcie". W filmie my też powiedzieliśmy „4 KB". Ta liczba jest prawdziwa, ale sama w sobie niepełna. Apollo Guidance Computer (w skrócie AGC) miał bowiem dwie osobne pamięci, a „4 KB" opisuje tylko tę mniejszą.

Rozbierzmy razem na części tę słynną liczbę.

## Co dokładnie oznacza „4 KB"?

Pamięć robocza AGC, czyli kasowalna pamięć, którą dziś nazwalibyśmy RAM, składała się z 2048 „słów". Każde słowo miało 16 bitów: 15 bitów danych i 1 bit parzystości do kontroli błędów. Jeśli słowo policzymy jako 2 bajty, 2048 słów daje około 4 KB. „4 KB" to więc rozmiar kartki brudnopisu, na której komputer liczył w trakcie lotu.

Programów w tej pamięci nie było. Trzymano tam bieżące położenie, prędkość, liczniki i wyniki pośrednie przekazywane między zadaniami. Pamięć wykonano z maleńkich pierścieni zwanych rdzeniami magnetycznymi (core) i zachowywała zawartość nawet po odcięciu prądu.

Programy znajdowały się w zupełnie innym miejscu: w pamięci stałej, czyli ROM, o pojemności 36 864 słów. Po tym samym przeliczeniu to około 72 KB. Poprawne zdanie brzmi więc tak: Apollo 11 wylądował na Księżycu z około 4 KB RAM i około 72 KB ROM.

## Programy były wplecione jak lina

ROM komputera AGC był pamięcią typu „core rope" (lina rdzeniowa) i dosłownie plótł się go ręcznie. Jeśli drut przechodził przez rdzeń magnetyczny, ten bit miał wartość 1, a jeśli omijał rdzeń, wartość 0. Oprogramowanie było więc zamieniane w sprzęt przez tkanie, jak materiał.

Pracę tę wykonywali pracownicy Raytheona w Waltham w stanie Massachusetts. Według szczegółowej analizy Kena Shirriffa znaczną część zatrudnionych stanowiły kobiety z miejscowego przemysłu tekstylnego, cenione za umiejętności szycia. Utkanie jednego modułu trwało około 8 tygodni i kosztowało 15 000 dolarów. Każdy moduł mieścił 6 tysięcy słów, a sześć modułów dawało razem 36 864 słowa.

Skutek uboczny był istotny: oprogramowanie trzeba było zamrozić na miesiące przed lotem. Nie istniało coś takiego jak łatka w ostatniej chwili, bo poprawka błędu oznaczała ponowne tkanie.

> **Czy wiesz?** W Apollo 11 były nie jeden, lecz dwa komputery AGC: jeden w module dowodzenia, drugi w module księżycowym. Każdy ważył około 32 kg i pracował z kwarcowym zegarem 2,048 MHz.

## Alarm na kilka minut przed lądowaniem

Podczas lądowania 20 lipca 1969 roku komputer modułu księżycowego wyświetlił najpierw alarm 1202, a potem 1201. Oba oznaczały „przepełnienie wykonawcze": komputerowi zadano więcej pracy, niż mógł udźwignąć. Według szczegółowego opisu w Wikipedii przyczyną były fałszywe sygnały z radaru spotkaniowego, pozostawionego w stanie gotowości, które zajmowały procesor. Nie był to ani błąd programistyczny, ani błąd pilota, ani awaria sprzętu. U podstaw leżała wada w dokumencie opisującym interfejs między dwoma systemami.

Najciekawsze jest to, co oprogramowanie w takiej sytuacji zrobiło. AGC pracował z planistą opartym na priorytetach. Po nadejściu przeciążenia szybko się zrestartował, porzucił zadania o niskim priorytecie i kontynuował zadania krytyczne, takie jak sterowanie lądowaniem. Ta słynna mała pamięć wystarczyła więc dzięki mądremu zarządzaniu nią.

Był jeszcze jeden szczegół, który komplikował sprawę. Polecenie 1668, które Buzz Aldrin wprowadził do komputera podczas lądowania, dołożyło obciążenia i tak już zmagającemu się procesorowi i wywołało kolejny alarm 1202. Oprogramowanie poradziło sobie z tym tak samo, a Orzeł (Eagle) osiadł na powierzchni Księżyca.

Oprogramowanie powstało w Laboratorium Oprzyrządowania MIT. Oprogramowaniem modułu dowodzenia (COLOSSUS) i modułu księżycowego (LUMINARY) zajmowały się różne zespoły. Wdrożenie szczegółów leżało w gestii zespołu kierowanego przez Margaret Hamilton.

## Wtedy i dziś

| Apollo Guidance Computer (1969) | Dzisiejszy telefon |
|---|---|
| Około 4 KB pamięci kasowalnej (RAM) | Gigabajty RAM |
| Około 72 KB ręcznie wplecionej pamięci ROM | Setki gigabajtów miejsca na dane |
| Miesiące tkania przy aktualizacji oprogramowania | Aktualizacje instalujące się nocą same |
| Około 32 kg | Mieści się w dłoni |

## Prawdziwa lekcja z tej liczby

Liczba „4 KB" jest zwykle opowiadana jako „zobacz, jakie to było prymitywne". Tymczasem sedno historii jest odwrotne: ograniczona pamięć zmuszała inżynierów do rozliczania każdego bitu. Właśnie dlatego powstało oprogramowanie, które nadawało zadaniom priorytety i potrafiło się pozbierać po przeciążeniu.

Urządzenia, które nosimy dziś w kieszeni, mają nieporównanie więcej pamięci, ale większość aplikacji nie jest pisana z taką starannością. Pojedyncza aktualizacja komunikatora może być wielokrotnie większa od całego oprogramowania Apollo.

Jak myślisz, czy lepszych inżynierów wychowują ograniczenia, czy obfitość?
