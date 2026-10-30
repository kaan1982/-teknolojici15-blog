# Kapak çevirisi (translator brief)

Covers are HTML files in tools/covers/src/. Their Turkish text units are listed in tools/covers/strings.tr.json:
`{ "<src>": ["<turkish innerHTML>", ...] }`. You translate them for ONE OR MORE language codes.

## Output
`i18n/<code>/covers.json`, valid JSON, UTF-8:
```
{ "<src>": { "<turkish string exactly as in strings.tr.json>": "<translation>", ... }, ... }
```
Every src and every string from strings.tr.json must appear as a key (copy keys byte-for-byte; easiest: load strings.tr.json in a small python script and fill a dict you write by hand in that script, then json.dump with ensure_ascii=False). Do not call any translation API or website: you translate yourself.

## Rules
- Keep inline markup: if the Turkish has `<br>` / `<em>` / `<b>` / `<span ...>`, keep the same tags in the translation, with the same number of `<br>` line breaks where possible (titles are drawn on 2 to 4 lines). Put the emphasised (em) words around the equivalent meaning.
- Covers are short, punchy, uppercase where the Turkish is uppercase (write uppercase yourself; for scripts without case just write normally). Keep it as SHORT as the Turkish or shorter: the text must fit the same box. Prefer short words.
- Keep unchanged (value = key): numbers-only strings, code, file names, product/model names, English quotes that are historical (e.g. "First actual case of bug", "Merry Christmas", "Me at the zoo"), URLs, and anything already English that is a proper name. If a string mixes Turkish with such parts, translate only the Turkish part.
- Keep numbers/units/dates, but translate month names and number formatting naturally (9 EYLÜL 1947 → 9 SEPTEMBER 1947 in en).
- The red top tag: "TEKNOLOJİ TARİHİ" = tech history, "YAPAY ZEKÂ" = AI, "GÜNÜN HABERİ" = today's news, "İCAT HİKÂYESİ" = invention story etc. Keep it under ~18 characters.
- Stamps (ŞAKA DEĞİL!, YANLIŞ!, TAHMİN ET!, NASIL YANİ?…): use the natural punchy equivalent.
- Keep emojis. No em dash (—) or en dash (–).
- Never invent facts; meaning must match the Turkish.

## Render and check
For each code: `cd /home/claude/-teknolojici15-blog && NODE_PATH=$(npm root -g) node tools/covers/render-i18n.cjs --lang <code>`
It writes public/img/kapak/<code>/*.webp and prints `MISSING ...` for any untranslated key (fix those and re-run).
Then make a contact sheet: `python3 tools/covers/sheet.py <code>` → /tmp/sheet-<code>.png and Read it. If a cover has text cut off, overlapping art badly, or unreadable, shorten that translation and re-render only that src (`... --lang <code> <src>`). One fix round is enough.
Do not edit anything except i18n/<code>/covers.json for your codes (and the generated images). Do not commit or push.
