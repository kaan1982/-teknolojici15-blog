---
title: "Java4Shell: OpenJDK'da kimlik doğrulamasız uzaktan kod çalıştırma açığı"
slug: "2026-11-19-java4shell-openjdk-acigi"
date: "2026-11-19"
rank: 2
category: "Haber"
excerpt: "Java'nın Base64 çözücüsündeki bellek taşması, AVX-512 destekli x86 sunucularda Jira, Jenkins ve Keycloak gibi yazılımları uzaktan ele geçirmeye kapı açabiliyor."
hook: "Tek bir bozuk Base64 metni yetebilir"
fact: "9,2 / 10"
factLabel: "Calif'in verdiği CVSS 4.0 önem puanı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-19-java4shell-openjdk-acigi.webp"
readMin: 2
sources:
  - title: "Java4Shell: A Critical Java Vulnerability Hiding in Plain Sight (Semgrep)"
    url: "https://semgrep.dev/blog/2026/java4shell-openjdk-base64-vulnerability/"
  - title: "Java4Shell: unauthenticated RCE reported in OpenJDK 17 (Endor Labs)"
    url: "https://www.endorlabs.com/learn/java4shell-unauthenticated-rce-reported-in-openjdk-17-cve-2026-114938"
---
Güvenlik şirketi Calif, 17 Kasım'da Java dünyasını alarma geçiren bir açığın ayrıntılarını yayımladı. "Java4Shell" adı verilen ve CVE-2026-114938 olarak izlenen hata, OpenJDK'nın Base64 çözücüsünde bulunuyor. Calif, açığa CVSS 4.0 ölçeğinde 9,2 puan veriyor; bu, kritik seviye demek.

## Sorun nerede?

Hata, HotSpot sanal makinesinin AVX-512 komutlarıyla hızlandırılmış Base64 çözme yolunda. Özel olarak bozulmuş bir Base64 girdisi, Java girdiyi reddetmeden önce bir dizinin sonundan 62 ya da 63 bayt öteye yazılmasına yol açıyor. Bu tek başına çoğu zaman programı çökertiyor; ancak Calif, hedef uygulamanın bellek davranışıyla birleştiğinde giriş yapmadan uzaktan kod çalıştırmanın mümkün olduğunu söylüyor.

## Kimler etkileniyor?

Etkilenenler OpenJDK 17.0.6 ve sonrası ile 18'den itibaren tüm sürümler (21, 25 ve 27 dahil), ama yalnızca AVX-512 VBMI destekli x86-64 işlemcilerde. Bu, yeni Intel sunucu çiplerini ve AMD Zen 4 ile sonrasını kapsıyor. Java 8 ve 11, ARM64 sistemler (AWS Graviton, Apple silikon) ve bu komut setini desteklemeyen işlemciler etkilenmiyor.

Calif; Jira, Confluence, Jenkins, Keycloak, Artifactory ve PingFederate'in varsayılan kurulumlarında girişsiz saldırı gösterdiğini söylüyor. Endor Labs bu iddiaların henüz bağımsız olarak doğrulanmadığını ve 17 Kasım itibarıyla gerçek bir saldırı tespit edilmediğini not ediyor.

## Yama durumu

Düzeltme OpenJDK 27.0.1.1'de yer alıyor; Oracle 17.0.21.1 ve 21.0.13.1 sürümlerini düzeltilmiş derlemeler olarak gösteriyor. Diğer dağıtımlar kendi takvimleriyle yama çıkarıyor. Yama gelene kadar, JVM'yi `-XX:UseAVX=2` gibi bayraklarla başlatıp savunmasız hızlandırmayı kapatmak geçici çözüm olarak öneriliyor.

## Neden önemli?

Java, bankalardan kamu kurumlarına kadar sayısız sunucunun arka planında çalışıyor. Adındaki benzerlik bilinçli: 2021'deki Log4Shell gibi, gündelik bir kütüphane fonksiyonu milyonlarca sistemi riske atabiliyor. İlk bilgisayar virüsünün aslında zararsız olduğunu [Creeper yazımızda](/yazi/creeper-ilk-virus-zararsizdi/) anlatmıştık.
