---
title: "Yapay zekâ, web sitelerinin yüzde 70'inin dayandığı PHP'de kritik açık buldu"
slug: "2026-10-21-php2shell-yapay-zeka-acik"
date: "2026-10-21"
rank: 1
category: "Yapay Zekâ"
excerpt: "PHP2Shell adlı iki açık, oturum açmadan sunucuda kod çalıştırmaya izin veriyor. Keşifte GPT-5.6 Sol ve Gemini 4 Argon gibi modeller kullanıldı."
hook: "PHP'deki dev açığı YZ buldu"
fact: "CVSS 9,2"
factLabel: "PHP2Shell açıklarının en yüksek puanı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-10-21-php2shell-yapay-zeka-acik.webp"
readMin: 2
sources:
  - title: "PHP2Shell: AI uncovers critical RCE vulnerabilities affecting 70% of the Internet (Wiz)"
    url: "https://www.wiz.io/blog/php2shell-php-rce"
  - title: "AI helped discover the PHP vulnerability that could take down 70% of the internet (Fortune)"
    url: "https://fortune.com/2026/10/21/ai-tools-discovered-the-php-vulnerability-that-could-take-down-70-of-the-internet-now-the-race-is-on-to-patch-it-before-ai-powered-hackers-attack/"
---
PHP geliştiricileri 21 Ekim'de dilin çekirdek motorundaki iki kritik güvenlik açığı için acil yama yayımladı. "PHP2Shell" adı verilen ve CVE-2026-109618 ile CVE-2026-109619 numaralarını alan açıklar, yapay zekâ araçlarının yardımıyla bulundu.

## Ne oldu?

Fortune'a göre yapay zekâ güvenlik testi firması Calif zincirin ilk parçasını 1 Ağustos'ta GPT-5.6 Sol ile buldu; Wiz ise ilk açığı bağımsız olarak 19 Ağustos'ta tespit etti ve 24 Ağustos'ta PHP güvenlik ekibine bildirdi. Keşifte Wiz'in kendi aracı Wiz Atlas ile OpenAI'nin GPT-5.6 Sol ve Google'ın Gemini 4 Argon modelleri kullanıldı.

Açıklar, saldırganın oturum açmadan sunucuda uzaktan kod çalıştırmasına ve bellekteki verileri sızdırmasına izin veriyor. Wiz'e göre son on yılda çıkan neredeyse her PHP sürümü, 5.4'e kadar geriye, etkileniyor. En yüksek önem puanı CVSS ölçeğinde 9,2. PHP, dünyadaki web sitelerinin yaklaşık yüzde 70'inin arkasında çalışıyor; tek başına WordPress bile sitelerin kabaca yüzde 40'ını yönetiyor. Fortune'un güncellenen haberine göre açıklar, yamanın ardından geniş çapta istismar edilmeye başlandı.

## Neden önemli?

Bu, yapay zekânın güvenlik araştırmasında artık yalnızca yardımcı değil, keşfi yapan taraf olabildiğinin en somut örneklerinden biri. Ama aynı araçlar saldırganların da elinde ve yamanın çıkmasıyla istismarın başlaması arasındaki süre kısalıyor. PHP kullanan her site sahibinin sunucusunu hemen güncellemesi gerekiyor. Daha geniş tabloda, internetin on yıllardır çalışan eski kodlarındaki gizli hatalar artık çok daha hızlı gün yüzüne çıkabilir. Ağda kendi kendine dolaşan ilk programın hikâyesini [Creeper yazımızda](/yazi/creeper-ilk-virus-zararsizdi/) anlatmıştık.
