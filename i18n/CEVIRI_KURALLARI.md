# Teknolojici15: site içi çeviri (translator brief)

The blog is written in Turkish. Every language is a full, hand-quality translation stored in this repo and built into the site at `/<code>/...` (no Google Translate). You translate ONE language: everything listed below.

## What to produce (for language code `<code>`)
1. `i18n/<code>/ui.json`: translate every VALUE of `i18n/ui.tr.json` (keep keys identical, keep `{n}` placeholders, `monthsShort` = 12 short UPPERCASE month abbreviations in that language; keep "TEKNO-TEKST", "Teknolojici15", "@teknolojici15", "RSS", "SP", "REC" unchanged; `langName` = the language's own name). Short labels stay short (they sit in buttons and on a TV screen): ttHead ≤ 18 chars, ttShelf/ttAI/ttNews/ttAll like "101 Shelf", vcrSign ≤ 14 chars, uppercase where the Turkish is uppercase.
2. For EVERY file in `content/posts/*.md`, `content/ai/*.md` (including `_hub.md`) and `content/haber/*.md`: write `i18n/<code>/<posts|ai|haber>/<same file name>` containing:
   ```
   ---
   title: "..."
   excerpt: "..."
   hook: "..."
   fact: "..."        # only if the original has fact
   factLabel: "..."   # only if the original has factLabel
   category: "..."    # translate the category word (e.g. Mobil → Mobile)
   ---
   <translated markdown body>
   ```
   For `_hub.md` use only `title`, `excerpt` (if present) and the body. Do NOT copy slug, date, year, cover, sources, video or other fields; the build takes them from the Turkish file.
   Use YAML double quotes and escape inner double quotes as `\"`.

## Translation rules
- Translate meaning, not word by word; natural, journalistic, readable for a general audience. Keep the same paragraphs, headings (`##`), lists, tables, bold and links in the same order.
- Keep every number, date, unit, currency amount, proper name, product name and quoted original English phrase exactly (e.g. "Merry Christmas", "First actual case of bug being found", code, file names like SKILL.md). Convert the decimal/thousand separators to the target language's convention only if natural (1,05 → 1.05 in English).
- Turkish-specific explanations (e.g. "Türkçede ... diye geçer") → adapt to the target language or drop if meaningless; never invent new facts.
- Internal links like `(/yazi/slug/)` stay exactly as they are (the build localises them). External URLs unchanged.
- A blockquote that starts with `**Biliyor muydun?**` → translate the bold lead as the equivalent of "Did you know?" and keep it bold, ending with a question mark.
- No em dash (—) or en dash (–); use commas, colons or parentheses.
- Brand name stays "Teknolojici15" / "@teknolojici15".
- Right-to-left languages (ar, fa, ur, he): just write the text; layout is handled by the site.

## Process
- List the source files first (`ls content/posts content/ai content/haber`): 32 posts + 7 AI chapters + `_hub.md` + daily news files. Translate ALL of them.
- Write each file with the Write tool directly (no scripts that call external translators; no network translation services).
- When done, run `LOCALES=tr,<code> node build.mjs` from the repo root: it must finish without errors and report `<code>:N/N` with N equal to the total. Then `ls i18n/<code>/posts | wc -l` must be 32, `ai` 8, `haber` = number of news files.
- Do not edit anything outside `i18n/<code>/`. Do not commit or push.
