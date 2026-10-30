# Haber masası: günün 2 haberi (her sabah)

Ana sayfadaki TV (TEKNO-TEKST) ve /haber/ sayfası `content/haber/` klasöründen beslenir.
Ana sayfa en yeni tarihli haberlerden `rank` 1 ve 2 olanları gösterir.

## Seçim
- Son ~36 saatte teknoloji / yapay zekâ dünyasından en önemli 2 gelişme. Biri yapay zekâ olsun; ikisi aynı alandan olmasın (iki bilanço haberi yapma).
- Her haber en az 2 bağımsız, açılıp doğrulanmış kaynağa dayansın. Açamadığın kaynağı listeye koyma.
- Rakamlar kaynaklarda farklıysa aralık ver ("482 ile 496 milyar dolar arasında"). Uydurma alıntı yok; söylenen sözü başka sözcüklerle aktar.
- Söylenti, sızıntı, tek kaynaklı iddia haber değildir.

## Dosya: content/haber/YYYY-MM-DD-<kisa-slug>.md
```
---
title: "..."            # ≤ 90 karakter, Türkçe, tıklama tuzağı değil
slug: "YYYY-MM-DD-<kisa-slug>"
date: "YYYY-MM-DD"      # yayın günü (İstanbul)
rank: 1                 # 1 ya da 2
category: "Haber"
excerpt: "..."          # 1 cümle, ≤ 170 karakter
hook: "..."             # ≤ 40 karakter
fact: "..."             # tek büyük rakam/olgu, ≤ 16 karakter
factLabel: "..."        # rakamın açıklaması, ≤ 40 karakter
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-<slug>.webp"
readMin: 2
sources:
  - title: "Başlık (Yayın)"
    url: "https://..."
---
```
Gövde 220–350 kelime, kısa paragraflar, em/en tire yok (— –). Sonda "Neden önemli?" paragrafı.
Mümkünse blogdaki bir tarih yazısına bir iç bağlantı ver (/yazi/<slug>/).

## Kapak
tools/covers/KAPAK_KURALLARI.md'ye uy; etiket "GÜNÜN HABERİ". İki kapak farklı temada olsun. Gerçek logo yok.
Render: `NODE_PATH=$(npm root -g) node tools/covers/render.cjs <slug>` ve PNG'yi açıp kontrol et.

## Yayın
`npm ci && node build.mjs` hatasız bitsin. Commit: "Günün haberleri: YYYY-MM-DD", main'e push. Vercel otomatik yayınlar.
Eski haberler silinmez; /haber/ arşivi gün gün listeler.
