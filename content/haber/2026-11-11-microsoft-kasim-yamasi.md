---
title: "Microsoft kasımda 1.000'den fazla açık kapattı; Outlook açığı saldırılarda kullanılıyordu"
slug: "2026-11-11-microsoft-kasim-yamasi"
date: "2026-11-11"
category: "Haber"
rank: 3
excerpt: "Microsoft'un kasım güvenlik güncellemesi 1.093 açığı kapatıyor; aralarında saldırganların şimdiden kullandığı bir Outlook açığı da var."
hook: "Bir ayda bin açık"
fact: "1.093"
factLabel: "Kasım güncellemesindeki açık sayısı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-11-microsoft-kasim-yamasi.webp"
readMin: 2
sources:
  - title: "November 2026 Microsoft Patch Tuesday addresses 1,093 CVEs (Tenable)"
    url: "https://www.tenable.com/blog/microsoft-november-2026-patch-tuesday-addresses-1093-cves-cve-2026-124194"
  - title: "Microsoft November 2026 Patch Tuesday Fixes 1,093 Vulnerabilities, Including Outlook Zero-Day (Cybersecurity News)"
    url: "https://cybersecuritynews.com/microsoft-november-2026-patch-tuesday/"
  - title: "Microsoft November 2026 Patch Tuesday Fixes 1,235 Vulnerabilities, Including Exploited Outlook Zero-Day (Netizen)"
    url: "https://blog.netizen.net/2026/11/10/microsoft-november-2026-patch-tuesday-fixes-1235-vulnerabilities-including-exploited-outlook-zero-day/"
---
Microsoft, her ayın ikinci salısı yayımladığı güvenlik güncellemesinin kasım paketini 10 Kasım'da çıkardı. Pakette 287 ürün ve bileşende 1.093 güvenlik açığı kapatılıyor. Edge tarayıcısının açıklarını da toplama katan sayımlarda rakam 1.235'e çıkıyor.

## Açıkların dağılımı

Açıkların 63'ü "kritik", 1.029'u "önemli" seviyesinde. Yarıya yakını (535) saldırganın sistemde yetkisini yükseltmesine, 296'sı ise uzaktan kod çalıştırmasına izin veren türden. En çok açık Word, Excel ve SQL Server'da bulundu.

Bu tür dev paketler artık olağan hâle geliyor: ekim güncellemesi 1.411 açıkla daha da büyüktü. Netizen'in değerlendirmesine göre artışın bir kısmı, Microsoft'un açık aramada yapay zekâ destekli araçlar kullanmasından kaynaklanıyor.

## Saldırıda kullanılan Outlook açığı

Paketin en acil maddesi CVE-2026-124194 numaralı Outlook açığı. Microsoft, bu açığın yama çıkmadan önce saldırılarda kullanıldığını doğruladı. Saldırgan, kurbana özel hazırlanmış bir dosya açtırıyor. Outlook, dışarıdan içerik uyarısı göstermeden saldırganın sunucusuna bağlanıyor ve kullanıcının parola özetini (NTLMv2) sızdırıyor. Saldırgan bu bilgiyle kullanıcı kılığına girebiliyor. Önizleme bölmesi saldırı yolu değil; dosyanın açılması gerekiyor.

Açığın puanı 6,5 ve Microsoft onu "orta" olarak sınıflıyor. Etkilenen ürünler Office LTSC 2021, Office LTSC 2024 ve Microsoft 365 Apps. Saldırganların ve kurbanların kim olduğu açıklanmadı. Tenable'a göre açığı bulan araştırmacı, Anthropic'in Claude modelinden yardım almış.

## Neden önemli?

Windows ve Office kullanan herkes, özellikle şirketler, güncellemeyi bir an önce kurmalı. Aynı zamanda yapay zekânın açık bulmayı hızlandırması, yamaların da büyümesi anlamına geliyor. Bilgisayar "böceği" kavramının nereden geldiğini merak ediyorsanız [ilk bilgisayar böceği](/yazi/ilk-bilgisayar-bocegi-1947/) yazımıza bakın.
