---
title: "Çinli Zhipu, katmanlarını iki kez çalıştıran GLM-5.4 modelini çıkardı"
slug: "2026-11-24-glm-5-4-dongulu-transformer"
date: "2026-11-24"
rank: 3
topic: "yapay-zeka"
category: "Haber"
excerpt: "Zhipu'nun GLM-5.4'ü, 28 katmanı iki tur çalıştıran Loop Transformer mimarisini büyük bir modele taşıyor; 1 milyon token bağlam ve görsel girdi de var."
hook: "Aynı katmanlardan iki kez geçen model"
fact: "750 milyar"
factLabel: "temel modelin parametre sayısı"
year: 2026
yearLabel: "2026"
cover: "/img/kapak/gen-2026-11-24-glm-5-4-dongulu-transformer.webp"
readMin: 2
sources:
  - title: "GLM-5.4: Toward Generalized Coding with Our First Loop Transformer (Z.ai)"
    url: "https://z.ai/blog/glm-5.4"
  - title: "Zhipu rolls out GLM-5.4 with vision and million-token context (TechNode)"
    url: "https://technode.com/2026/11/23/zhipu-rolls-out-glm-5-4-with-vision-and-million-token-context/"
  - title: "Zhipu's New GLM-5.4 AI Model Adds Image Input (WinBuzzer)"
    url: "https://winbuzzer.com/2026/11/23/zhipus-glm-5-4-adds-image-input-for-coding-xcxwbn/"
---
Çinli yapay zekâ şirketi Zhipu (Z.ai), 23 Kasım'da GLM-5.4 modelini kullanıma açtı. Modelin asıl yeniliği mimarisinde: şirketin ilk "Loop Transformer" amiral gemisi.

## Döngü ne işe yarıyor?

Klasik bir dil modelinde her katman bir kez çalışır. GLM-5.4 ise yaklaşık 750 milyar parametrelik GLM-5 temel modelinin 28 katmanını iki tur çalıştırıyor; ikinci tur, ilk turun ürettiği ara sonuçları yeniden işleyip iyileştiriyor. Böylece model, yeni ağırlık eklemeden daha "derin" düşünebiliyor. Zhipu, bu sayede 2 ile 3 trilyon parametrelik modellerle kıyaslanabilir bir zekâ seviyesine ulaştığını söylüyor. Şirkete göre model ayrıca GPQA-Diamond ve MMLU-Pro gibi testlerde yüzde 10 ile 14 daha kısa yanıtlarla aynı işi görüyor.

Model 1 milyon tokenlık bağlam penceresi sunuyor ve artık görsel de okuyabiliyor: geliştiriciler bozuk bir arayüzün ekran görüntüsünü kodla birlikte verebiliyor.

## Nereden kullanılıyor?

GLM-5.4 şimdilik GLM Coding Plan aboneliği, ZCode kodlama aracı ve Z.ai sohbet sitesinde. WinBuzzer'a göre abonelerin kotası yüzde 50 arttı ve 10 bin girdi tokenının maliyeti 6,9 krediden 4,6 krediye indi. Genel API ve açık ağırlıklar ise güvenlik değerlendirmesinden sonra gelecek.

Bağımsız ölçümler daha temkinli: WinBuzzer'ın aktardığı KingBench 4 kodlama testinde model 19 model arasında yedinci oldu ve puanların yüzde 55,3'ünü aldı. Şirket henüz ayrıntılı test sonuçlarını yayımlamadı.

## Neden önemli?

Katmanları döngüye sokmak, modelleri büyütmeden güçlendirmenin yeni yolu olarak öne çıkıyor ve bunu ilk büyük ölçekte deneyenlerden biri Çinli bir şirket oldu. 1 milyon tokenlık bağlamın ne kadar büyük olduğunu görmek için [80 KB'lık ilk diskete](/yazi/ilk-disket-ibm-1971-80-kb/) bakmak yeterli.
