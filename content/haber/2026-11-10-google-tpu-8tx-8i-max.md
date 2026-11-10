---
title: "Google iki yeni TPU tanıttı: şifreli 8tx ve çift çipli 8i Max"
slug: "2026-11-10-google-tpu-8tx-8i-max"
date: "2026-11-10"
rank: 2
category: "Haber"
excerpt: "Google, sekizinci nesil TPU ailesine veriyi işlem sırasında da koruyan TPU 8tx'i ve iki çipi tek pakette birleştiren TPU 8i Max'i ekledi."
hook: "Bir pakete iki çip"
fact: "2 kat"
factLabel: "8i Max'te bellek bant genişliği artışı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-10-google-tpu-8tx-8i-max.webp"
readMin: 2
sources:
  - title: "Google Adds TPU 8tx, 8i Max for Enterprise AI (Data Center Knowledge)"
    url: "https://www.datacenterknowledge.com/data-center-chips/google-adds-tpu-8tx-8i-max-for-enterprise-ai"
  - title: "Google announces TPU 8tx and TPU 8i Max AI accelerator chips for enterprise workloads (The Back Room Tech)"
    url: "https://thebackroomtech.com/google-tpu-8tx-tpu-8i-max-announcement/"
---
Google, 9 Kasım'da kendi tasarladığı TPU (Tensor İşlem Birimi) hızlandırıcılarının sekizinci nesline iki yeni sistem ekledi: TPU 8tx ve TPU 8i Max. Şirket nisan ayında eğitim için TPU 8t'yi, çıkarım için de TPU 8i'yi tanıtmıştı. Böylece aile aynı yıl içinde dört sisteme ulaştı.

## TPU 8tx: işlem sırasında şifreleme

TPU 8tx, TPU 8t ile aynı silikonu kullanıyor ama donanım düzeyinde "gizli hesaplama" ekliyor. Amaç, veriler ve model ağırlıkları işlenirken bile korunmuş kalsın. Çip, 5. nesil AMD EPYC işlemcili sunucularla eşleştiriliyor. Google, TPU 8t'ye göre 2 kata kadar daha düşük gecikme ve güvenlik katmanından neredeyse hiç performans kaybı olmadığını söylüyor; ancak bu iddialar için bağımsız bir test henüz yok. Hedef kitle, hassas verilerle çalışan düzenlemeye tabi şirketler ve kamu kurumları.

## TPU 8i Max: iki çip, tek paket

TPU 8i Max, iki TPU 8i çipini tek bir pakette birleştiriyor. Google'a göre bu, tek bir TPU 8i'ye kıyasla işlem gücünü, çip üzerindeki SRAM belleği ve HBM bellek bant genişliğini iki katına çıkarıyor. Aynı raf alanına iki kat silikon sığdığı için veri merkezinde metrekare ve watt başına düşen işlem gücü de artıyor. Google Cloud yöneticisi Mark Lohmeyer bu yaklaşımı otoyola yeni şerit eklemeye benzetti.

Google fiyat, genel kullanıma açılış tarihi ya da bölge bilgisi vermedi. Data Center Knowledge'ın aktardığına göre bazı müşteriler TPU 8tx'i kendi veri merkezlerine kurabilecek; Google bunu resmen doğrulamadı.

## Neden önemli?

Çip pazarında Nvidia'nın en güçlü rakiplerinden biri, kendi çipini tasarlayan bulut şirketleri. Google'ın bir yıl içinde dört farklı TPU sistemi çıkarması, özel çiplerin artık tek bir genel amaçlı ürün yerine iş türüne göre ayrıştığını gösteriyor. Google'ın donanım macerasının mütevazı başlangıcı için [Lego sunucu](/yazi/google-lego-sunucu/) yazımıza bakabilirsiniz.
