---
title: "OpenAI'ın ajanları Linux çekirdeğinde 948 root açığı buldu ve sömürdü"
slug: "2026-11-05-openai-948-linux-root-acigi"
date: "2026-11-05"
rank: 1
topic: "yapay-zeka"
category: "Haber"
excerpt: "OpenAI, henüz yayımlanmamış siber modeliyle Linux çekirdeğinde 948 benzersiz yetki yükseltme açığı için çalışan istismar kodu ürettiğini açıkladı."
hook: "Açık başına 1.279 dolar"
fact: "948"
factLabel: "Çalışan root istismarı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-05-openai-948-linux-root-acigi.webp"
readMin: 2
sources:
  - title: "OpenAI AI Pipeline Generates 948 Linux Root Escalation Exploits in 30-Hour Run (The Hacker News)"
    url: "https://thehackernews.com/2026/11/openai-ai-pipeline-generates-948-linux.html"
  - title: "OpenAI Pipeline Finds 948 Linux Kernel Privilege Escalation Flaws (Unite.AI)"
    url: "https://www.unite.ai/openai-pipeline-finds-948-linux-kernel-privilege-escalation-flaws/"
---
OpenAI, 4 Kasım'da yayımladığı bir araştırmada yapay zekâ ajanlarının Linux çekirdeğinde 948 benzersiz yerel yetki yükseltme (LPE) açığı bulduğunu ve her biri için çalışan bir istismar kodu yazdığını açıkladı. Bu tür bir açık, sisteme sıradan bir kullanıcı olarak giren birinin "root" yani tam yönetici yetkisi almasını sağlıyor.

## Nasıl yapıldı?

Unite.AI'ın aktardığına göre deney Ekim ortasında, yaygın kullanılan bir masaüstü Linux dağıtımında ve standart güvenlik önlemleri açık sanal makinelerde yapıldı. Henüz yayımlanmamış bir siber güvenlik modeliyle çalışan ajanlar, çekirdeğin yaklaşık yüzde 7'sini oluşturan 2,8 milyon satır kodu taradı. 12 saat içinde 2.308 aday bulgu çıktı; 30 saat içinde bunların 1.724'ü sanal ortamda yeniden üretildi. Sonunda 948 benzersiz root açığı için çalışan kod elde edildi.

The Hacker News'e göre toplam maliyet yaklaşık 1,21 milyon dolarlık API kredisi, yani açık başına 1.279 dolar civarında. OpenAI, ajanların en az 10 yeni istismar tekniği bulduğunu düşünüyor ama ayrıntıları güvenlik nedeniyle paylaşmadı. Haziranda yaptığı benzer bir denemede yalnızca 24 açık bulunmuştu.

## Yamalar ne durumda?

Ajanlar her açık için bir yama taslağı da yazdı; ancak bunlar henüz Linux geliştiricilerinin onayından geçmiş değil. Her istismar ve yama önce insan araştırmacılarca inceleniyor. Unite.AI'a göre tarama bittiğinde 61 açık zaten yamalanmıştı; OpenAI yüzlerce kritik açığı bildirdi, kalanını kademeli olarak paylaşacak. Model yayımlanmadığı için sonuçları bağımsız olarak doğrulamak şimdilik mümkün değil.

## Neden önemli?

Bir root açığı bulmak eskiden haftalar süren uzman işiydi; şimdi birkaç bin dolara indi. Bu, savunmacılar için büyük bir fırsat ama aynı araç kötü niyetli ellerde de işe yarar. OpenAI'ın kendi uyarısı da bu yönde: güncellenmemiş bir sistemde sıradan bir hesap, yakın gelecekte fiilen yönetici hesabı gibi düşünülmeli. Bilgisayar virüslerinin ne kadar masum başladığını merak ediyorsanız [ilk virüs Creeper aslında zararsızdı](/yazi/creeper-ilk-virus-zararsizdi/) yazımıza bakın.
