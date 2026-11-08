---
title: "DeepMind'ın yapay zekâ ajanları eski 1024 bit RSA şifrelemede iki zayıflık buldu"
slug: "2026-11-08-deepmind-rsa-1024-zayiflik"
date: "2026-11-08"
rank: 1
topic: "yapay-zeka"
category: "Haber"
excerpt: "Google DeepMind, insan gözetimindeki yapay zekâ ajanlarının eski 1024 bit RSA'da iki zayıflık bulduğunu açıkladı; 2048 bit ve üstü anahtarlar etkilenmiyor."
hook: "Haftalar içinde iki kriptanaliz adımı"
fact: "~1.600 kat"
factLabel: "Teorik iyileşme, 32 baytlık senaryoda"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-08-deepmind-rsa-1024-zayiflik.webp"
readMin: 2
sources:
  - title: "Google DeepMind finds 1,600x faster way to expose encryption flaws (Interesting Engineering)"
    url: "https://interestingengineering.com/ai-robotics/google-deepmind-agents-expose-older-encryption-flaws"
  - title: "Google DeepMind Says It Has Used AI Agents To Break Legacy RSA-1024 Encryption Faster Than Anyone Thought Possible (OfficeChai)"
    url: "https://officechai.com/ai/google-deepmind-says-it-has-used-ai-agents-to-break-legacy-rsa-1024-encryption-faster-than-anyone-thought-possible/"
---
Google DeepMind, 6 Kasım'da yapay zekâ ajanlarının eski 1024 bit RSA şifreleme sistemlerinde iki önemli zayıflık bulduğunu duyurdu. Ajanlar insan gözetiminde çalıştı. Çalışmayı DeepMind'dan Dj Dvijotham ve Abhradeep Thakurta yönetti; kriptanaliz uzmanları Nadia Heninger (UC San Diego ve Inria) ile Emmanuel Thomé (Inria) da ekipteydi.

## Birinci zayıflık: imzalardaki dolgu

Dijital imzalarda mesaja "dolgu" denen sabit bir veri bloğu eklenir. Araştırmaya göre saldırgan imzalanan bloğun yaklaşık yarısını ya da daha fazlasını kontrol edebiliyorsa, dolgu neredeyse hiç ek koruma sağlamıyor. Ajanlar bunu, daha önce akademik bir çalışmada çözülmüş 1024 bitlik bir test anahtarına karşı korumalı bir ortamda denedi. Sonuç, 3,5 kat daha az işlemci süresiyle ve anahtarı doğrudan kırmak için gereken gücün binde birinden azıyla yeniden üretildi.

Saldırganın yalnızca 32 baytlık bir parmak izini kontrol ettiği zor senaryoda ise ajanlar yeni bir algoritma buldu. Bunun en iyi bilinen yönteme göre yaklaşık 1.600 kat iyileşme sağladığı tahmin ediliyor; bu rakam ölçülmüş bir hız değil, teorik bir hesap.

## İkinci zayıflık: toplu çarpanlara ayırma

RSA anahtarları çoğunlukla aynı boyutta olduğu için, büyük bir ön hesaplama birçok anahtara yayılabiliyor. Ajanların bulduğu algoritmayla her ek 1024 bitlik anahtarı çarpanlarına ayırmanın ortalama maliyeti, önceki toplu yöntemlere göre yaklaşık 30 kat düşüyor.

DeepMind, bulguların bugünün şifrelemesini etkilemediğini vurguluyor. Bankacılık, mesajlaşma ve yazılım güncellemeleri neredeyse her yerde 2048 bit ya da daha büyük anahtarlar kullanıyor. Şirketin bilimden sorumlu başkan yardımcısı Pushmeet Kohli, yapay zekâ destekli kriptanalizin gelecekteki sistemleri sınamaya yardım edebileceğini söyledi.

## Neden önemli?

Kriptanalizde ilerleme genellikle yıllar alır. Yapay zekâ ajanlarının bunu haftalara indirmesi, eski anahtarları hâlâ kullanan sistemlerin geçişi hızlandırması gerektiğini gösteriyor. Şifrelerin kısa tarihini [ilk bilgisayar şifresi](/yazi/ilk-bilgisayar-sifresi-ctss/) yazımızda anlatıyoruz.
