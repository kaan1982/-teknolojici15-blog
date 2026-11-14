---
title: "Yapay zekâ sağlayıcısı Fireworks hacklendi; Notion AI sohbetleri açığa çıktı"
slug: "2026-11-14-fireworks-notion-sohbet-sizintisi"
date: "2026-11-14"
rank: 3
topic: "yapay-zeka"
category: "Haber"
excerpt: "Saldırganlar Fireworks AI'ın depolama sistemlerine sızdı; Notion çalışma alanlarının yüzde 1'inden azına ait yapay zekâ sohbetleri etkilendi."
hook: "Sohbetin bir kopyası başka yerdeydi"
fact: "%1'DEN AZ"
factLabel: "Etkilenen Notion çalışma alanları"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-14-fireworks-notion-sohbet-sizintisi.webp"
readMin: 2
sources:
  - title: "Notion Customer Data Compromised in Fireworks AI Hack (SecurityWeek)"
    url: "https://www.securityweek.com/notion-customer-data-compromised-in-fireworks-ai-hack/"
  - title: "Attackers breached the Fireworks AI storage where Notion AI chats sat outside zero data retention (VentureBeat)"
    url: "https://venturebeat.com/security/attackers-breached-the-fireworks-ai-storage-where-notion-ai-chats-sat-outside-zero-data-retention"
---
Not ve çalışma alanı uygulaması Notion, bazı müşterilerine yapay zekâ sohbet kayıtlarının bir veri ihlalinde açığa çıktığını bildirdi. Sızıntı Notion'ın kendi sistemlerinde değil, açık ağırlıklı yapay zekâ modellerini çalıştırmak için kullandığı altyapı sağlayıcısı Fireworks AI'da yaşandı.

## Saldırı nasıl gerçekleşti?

Fireworks ekimde iki kez hedef oldu: bir kez ele geçirilen iç kimlik bilgileriyle, bir kez de şirketin araştırma geliştirme makinelerini barındıran üçüncü taraf bir bulut sağlayıcısı üzerinden. Saldırganlar 24 Ekim'de bu yolla yetkisiz bir iş yükü çalıştırdı ve bazı depolama sistemlerine ulaştı. Fireworks olayı aynı gün kontrol altına aldığını, kanıtların yetkisiz yoldan elde ettiği model erişimini satan, para odaklı bir gruba işaret ettiğini söylüyor. Fireworks, kasım başında Notion'a sohbet kayıtlarının bu verilerin arasında olduğunu bildirdi.

## Hangi veriler etkilendi?

Açığa çıkan kayıtlar, Notion'ın müşterilerine yapay zekâ kullanımlarını gösteren Insights özelliği için sınıflandırılan Notion AI sohbetleriydi. Notion, çalışma alanlarının yüzde 1'inden azının etkilendiğini, kayıtların çoğunda kullanıcı ya da şirketle eşleşen bir bilgi bulunmadığını açıkladı. Şirket Fireworks bağlantısını kesti, Insights özelliğini kapattı ve sohbetlere parola, API anahtarı gibi gizli bilgiler yapıştıran müşterilerden bunları hemen değiştirmelerini istedi. Fireworks ise "sıfır veri saklama" varsayılanıyla çalışan anlık çıkarım hizmetinde bir etki görmediğini, sorunun veri saklayan toplu işlerde ve depolama sistemlerinde olduğunu belirtiyor.

## Neden önemli?

Bir yapay zekâ özelliği kullandığınızda verileriniz çoğu zaman görmediğiniz başka şirketlerin sunucularından geçiyor. Bu olay, sohbet kutusuna yapıştırılan bir şifrenin tedarik zincirinin en zayıf halkası kadar güvende olduğunu gösteriyor. Şifre hırsızlığının ne kadar eski olduğunu [ilk bilgisayar şifresi](/yazi/ilk-bilgisayar-sifresi-ctss/) yazımızda anlatıyoruz.
