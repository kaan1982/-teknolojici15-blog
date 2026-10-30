---
title: "Tasarım ve web skill'leri: şablon kokmayan arayüzler için"
slug: "tasarim-ve-web-skilleri"
date: "2026-10-30"
year: 2026
yearLabel: "2026"
category: "Yapay Zekâ"
excerpt: "frontend-design, web-artifacts-builder, canvas-design ve Vercel'in web-design-guidelines skill'i. Ajanın ürettiği arayüzü iyileştiren gerçek skill'ler."
hook: "Yapay zekâ tasarımı neden hep aynı?"
fact: "10 TEMA"
factLabel: "theme-factory'deki hazır tema sayısı"
cover: "/img/kapak/gen-tasarim-ve-web-skilleri.webp"
video: false
readMin: 5
sources:
  - title: "anthropics/skills (GitHub)"
    url: "https://github.com/anthropics/skills"
  - title: "vercel-labs/agent-skills (GitHub)"
    url: "https://github.com/vercel-labs/agent-skills"
  - title: "Agent Skills: Overview (Claude Platform Docs)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview"
---

Yapay zekâya bir web sayfası yaptırdıysan muhtemelen şunu fark etmişsindir: sonuç çalışıyor ama bir yerden tanıdık geliyor. Aynı mor geçişler, aynı ortalanmış başlık, aynı kart dizilimi. Tasarım skill'lerinin büyük bölümü tam bu sorunla uğraşıyor: modele "varsayılanı" değil, bilinçli bir tasarım kararı aldırmak.

Bu yazıdaki her skill'in kaynağını belirttik. Anthropic'in resmî deposu anthropics/skills, topluluk ya da şirket depoları ise ayrıca işaretli.

## frontend-design: varsayılandan kaçmak

Resmî depodaki frontend-design skill'inin açıklaması net: yeni bir arayüz kurarken ya da mevcut birini yeniden şekillendirirken "bilinçli, ayırt edici görsel tasarım" için rehberlik. Estetik yön, tipografi ve "şablon gibi okunmayan" seçimler yapma konusunda yardım ediyor.

Skill'in gövdesi modeli bir tasarım stüdyosunun tasarım lideri rolüne sokuyor ve müşterinin klişe önerileri zaten reddettiğini varsayarak işe başlatıyor. Bu, iyi bir skill yazım tekniğinin de örneği: bilgi yığmak yerine modele net bir bakış açısı vermek.

## Web çıktıları: web-artifacts-builder ve webapp-testing

- **web-artifacts-builder (resmî):** claude.ai'de React, Tailwind CSS ve shadcn/ui gibi modern ön yüz teknolojileriyle çok bileşenli, durum yönetimi ya da yönlendirme gerektiren karmaşık HTML çıktıları üretmek için araç seti. Açıklaması, basit tek dosyalık HTML işleri için kullanılmaması gerektiğini de söylüyor. Klasörde projeyi başlatan ve tek dosyaya paketleyen betikler var.
- **webapp-testing (resmî):** Yerel web uygulamalarını Playwright ile test etmek için araç seti. Ön yüz işlevlerini doğrulamaya, arayüz hatalarını ayıklamaya, ekran görüntüsü almaya ve tarayıcı günlüklerini okumaya yarıyor. Tasarımı yaptıktan sonra "gerçekten çalışıyor mu?" sorusunun cevabı.

> **Biliyor muydun?** Resmî depodaki theme-factory skill'i, slayttan HTML açılış sayfasına kadar her çıktıya uygulanabilecek 10 hazır tema ile geliyor. Klasördeki tema dosyalarının adları bile ilham verici: "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation" gibi. İstersen skill anında yeni bir tema da üretebiliyor.

## Görsel sanat: canvas-design, algorithmic-art, slack-gif-creator

Anthropic'in deposunda "yaratıcı" tarafı temsil eden üç skill daha var:

- **canvas-design:** Poster, sanat eseri ya da durağan tasarımları .png ve .pdf olarak üretmek için bir "tasarım felsefesi" yaklaşımı kullanıyor. Klasörde 80'i aşkın yazı tipi dosyası bulunuyor. Açıklaması, var olan sanatçıların işlerini kopyalamamayı açıkça şart koşuyor.
- **algorithmic-art:** p5.js ile, tohumlu rastgelelik (seeded randomness) ve etkileşimli parametrelerle üretken sanat yapıyor. Akış alanları, parçacık sistemleri gibi istekler için tasarlanmış.
- **slack-gif-creator:** Slack için optimize edilmiş animasyonlu GIF'ler üretmeye yönelik kısıtlar, doğrulama araçları ve animasyon fikirleri sunuyor. "Bana X'in Y yaptığı bir Slack GIF'i yap" tarzı istekler için.

## Topluluktan: Vercel'in arayüz ve React skill'leri

Resmî depo dışında en çok bilinen tasarım odaklı paketlerden biri, Vercel'in vercel-labs/agent-skills deposu. Ekim 2026 itibarıyla depoda şunlar var:

| Skill | Ne yapar? |
|---|---|
| web-design-guidelines | Arayüz kodunu erişilebilirlik, performans ve kullanıcı deneyimini kapsayan 100'den fazla kurala göre denetler |
| vercel-react-best-practices | Vercel mühendisliğinin React ve Next.js performans kuralları (8 kategoride 40'tan fazla) |
| vercel-composition-patterns | Ölçeklenebilir React bileşen kompozisyonu kalıpları |
| vercel-react-view-transitions | React'in View Transition API'si ile akıcı geçiş animasyonları |
| vercel-react-native-skills | React Native ve Expo için performans ve mimari kuralları |

Bu skill'ler tek bir araca bağlı değil. Vercel'in deposu npx skills add vercel-labs/agent-skills komutuyla kurulumu öneriyor ve skill'ler Agent Skills standardını destekleyen farklı ajanlarda kullanılabiliyor.

## Hangisini ne zaman kullanmalı?

Pratik bir sıralama şöyle olabilir: tasarım yönünü frontend-design ile belirle, renk ve yazı tipini theme-factory ya da kendi marka skill'inle sabitle, çıktıyı web-artifacts-builder ile üret, sonra web-design-guidelines ile denetleyip webapp-testing ile tarayıcıda dene. Her biri ayrı bir uzmanlık, ve aşamalı yükleme sayesinde hepsini aynı anda kurulu tutmak bağlamı şişirmiyor.

Bir uyarı: bu skill'lerin bazıları (ör. web-artifacts-builder) betik çalıştırıyor. Claude belgeleri skill'leri yazılım kurar gibi ele almayı ve yalnızca güvendiğin kaynaklardan kurmayı öneriyor. Resmî depo dışından gelen her paketi kurmadan önce SKILL.md ve betiklerine göz atman iyi bir alışkanlık.

Sence yapay zekâ ile yapılan tasarımlar zamanla daha mı çeşitlenecek, yoksa herkes aynı skill'leri kullandıkça yeni bir "tek tip" mi doğacak?
