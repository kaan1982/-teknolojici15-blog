---
title: "OpenAI: GPT-6 proteini kendi başına tasarladı, 322 denemeden 35'i laboratuvarda tuttu"
slug: "2026-11-26-gpt-6-protein-tasarimi"
date: "2026-11-26"
rank: 1
topic: "yapay-zeka"
category: "Haber"
excerpt: "OpenAI, genel amaçlı GPT-6 modellerinin özel biyoloji modeli çağırmadan protein şekli tasarladığını açıkladı; laboratuvarda 322 tasarımdan 35'i hedefine bağlandı."
hook: "Sohbet modeli protein tasarladı"
fact: "35/322"
factLabel: "Laboratuvarda bağlanan tasarım"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-26-gpt-6-protein-tasarimi.webp"
readMin: 2
sources:
  - title: "GPT-6 models demonstrate intrinsic protein-design capabilities (OpenAI)"
    url: "https://openai.com/index/gpt-6-models-demonstrate-intrinsic-protein-design-capabilities/"
  - title: "OpenAI says GPT-6 designed proteins with a 10.9% lab hit rate (Data Studios)"
    url: "https://www.datastudios.org/post/openai-gpt-6-protein-design-10-9-percent-lab-hit-rate-322-minibinders"
  - title: "Everything That Happened in AI Today, November 25, 2026 (The Neuron)"
    url: "https://www.theneuron.ai/digest/everything-that-happened-in-ai-today-november-25-2026/"
---
OpenAI 24 Kasım'da yayımladığı bir ön baskıda, genel amaçlı GPT-6 modellerinin protein tasarlayabildiğini duyurdu. İddianın can alıcı yeri şu: model, bu işe özel üretilmiş biyoloji modellerini çağırmadan, yalnızca metinle düşünüp kendi yazdığı kodu çalıştırarak üç boyutlu protein şekilleri üretiyor.

## Laboratuvarda ne oldu?

Proteinler, amino asit denen yapı taşlarının zincirinden oluşur; zincirin sırası proteinin nasıl katlandığını, katlanma da ne iş yaptığını belirler. OpenAI, araştırma ortağı Onava ile birlikte GPT-6.2'nin tasarladığı küçük proteinleri (minibinder) gerçekten üretip test etti.

Sonuç: beş hedefe karşı denenen 322 tasarımdan 35'i, yani yüzde 10,9'u hedefine bağlandı. Hedefler PD-L1, IL-7Rα, TrkA, VEGF-A ve IL-17A idi; bağlananların 18'i tek başına IL-17A hedefinde çıktı. Mevcut bir yapıya yeni amino asit dizisi yazma gibi daha kolay işlerde oran çok daha yüksekti: antikor ilmeklerinin yeniden tasarımında 182 parçanın 128'i, terapötik antikor parçalarında 272'nin 179'u bağlandı.

## Hangi kısmı abartmamak gerek?

Model, zincirin şeklini üretti ama işin geri kalanı yine eski araçlara kaldı: dizileri SolubleMPNN ve ProteinMPNN önerdi, hangi adayın tezgaha gideceğini Boltz-2, OpenDDE ve ESMFold2 süzdü. OpenAI, modellerinin baştan sona tek başına protein üretebildiğinin kanıtlanmadığını kendisi yazıyor.

Bir diziden tüm proteinin yapısını tahmin etmekte ise model hâlâ zayıf: ortalama TM puanı iç modelde 0,38 iken özel model ESMFold2'de 0,93. En güçlü ölçüm sonuçları da adı açıklanmayan, kimsenin erişemediği bir iç modelden geliyor ve hiçbiri şirket dışında doğrulanmadı.

## Neden önemli?

Bağlanma, ilaç olma yolundaki ilk adım; seçicilik, kararlılık ve güvenlik testleri sonra geliyor. Yine de genel amaçlı bir modelin, yıllardır tek işe eğitilmiş modellerin alanında iş görmesi, laboratuvar yazılımlarının bundan sonra nasıl kurulacağını değiştirebilir. OpenAI aynı yazıda bu yeteneğin kötüye kullanılabileceğini ve biyogüvenlik risklerini kendi çerçevesiyle değerlendirdiğini de söylüyor. Bilgisayarların bilimin hesap makinesi olarak doğduğu günleri merak ediyorsanız [30 tonluk ENIAC'ın hikâyesi](/yazi/eniac-30-ton/) burada.
