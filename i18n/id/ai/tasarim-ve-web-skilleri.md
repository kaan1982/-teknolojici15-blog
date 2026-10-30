---
title: "Skill desain dan web: untuk antarmuka yang tidak berbau templat"
excerpt: "frontend-design, web-artifacts-builder, canvas-design, dan skill web-design-guidelines dari Vercel. Skill nyata yang memperbaiki antarmuka yang dihasilkan agen."
hook: "Mengapa desain kecerdasan buatan selalu sama?"
fact: "10 TEMA"
factLabel: "Jumlah tema siap pakai di theme-factory"
category: "Kecerdasan Buatan"
---
Jika kamu pernah meminta kecerdasan buatan membuat halaman web, kemungkinan kamu menyadari ini: hasilnya berfungsi tetapi terasa familier dari suatu tempat. Gradasi ungu yang sama, judul tengah yang sama, susunan kartu yang sama. Sebagian besar skill desain mengerjakan persis masalah ini: membuat model mengambil keputusan desain yang disengaja, bukan "bawaan".

Kami mencantumkan sumber setiap skill dalam artikel ini. Repositori resmi Anthropic adalah anthropics/skills, sedangkan repositori komunitas atau perusahaan ditandai terpisah.

## frontend-design: menghindari bawaan

Deskripsi skill frontend-design di repositori resmi jelas: panduan untuk "desain visual yang disengaja dan khas" saat membangun antarmuka baru atau membentuk ulang yang sudah ada. Ia membantu dalam arah estetika, tipografi, dan membuat pilihan yang "tidak terbaca seperti templat".

Isi skill menempatkan model pada peran pemimpin desain di sebuah studio desain dan memulai pekerjaan dengan asumsi bahwa klien sudah menolak usulan klise. Ini juga contoh teknik penulisan skill yang baik: alih-alih menumpuk informasi, memberi model sudut pandang yang jelas.

## Keluaran web: web-artifacts-builder dan webapp-testing

- **web-artifacts-builder (resmi):** Perangkat untuk menghasilkan keluaran HTML kompleks dan multikomponen di claude.ai yang membutuhkan pengelolaan status atau perutean, dengan teknologi antarmuka depan modern seperti React, Tailwind CSS, dan shadcn/ui. Deskripsinya juga menyatakan bahwa ia tidak untuk pekerjaan HTML satu berkas yang sederhana. Di folder ada skrip yang memulai proyek dan mengemasnya ke satu berkas.
- **webapp-testing (resmi):** Perangkat untuk menguji aplikasi web lokal dengan Playwright. Berguna untuk memverifikasi fungsi antarmuka depan, men-debug galat antarmuka, mengambil tangkapan layar, dan membaca log peramban. Jawaban atas pertanyaan "apakah ini benar-benar berfungsi?" setelah desain dibuat.

> **Tahukah kamu?** Skill theme-factory di repositori resmi datang dengan 10 tema siap pakai yang dapat diterapkan pada keluaran apa pun, dari slide hingga halaman arahan HTML. Bahkan nama berkas tema di folder itu menginspirasi: "arctic-frost", "midnight-galaxy", "golden-hour", "tech-innovation". Jika mau, skill juga dapat membuat tema baru seketika.

## Seni visual: canvas-design, algorithmic-art, slack-gif-creator

Di repositori Anthropic ada tiga skill lagi yang mewakili sisi "kreatif":

- **canvas-design:** Memakai pendekatan "filosofi desain" untuk membuat poster, karya seni, atau desain statis dalam bentuk .png dan .pdf. Di folder ada lebih dari 80 berkas huruf. Deskripsinya secara tegas mensyaratkan untuk tidak menyalin karya seniman yang sudah ada.
- **algorithmic-art:** Membuat seni generatif dengan p5.js, memakai keacakan berbenih (seeded randomness) dan parameter interaktif. Dirancang untuk permintaan seperti medan aliran dan sistem partikel.
- **slack-gif-creator:** Menawarkan batasan, alat validasi, dan gagasan animasi untuk membuat GIF animasi yang dioptimalkan untuk Slack. Untuk permintaan bergaya "buatkan GIF Slack di mana X melakukan Y".

## Dari komunitas: skill antarmuka dan React dari Vercel

Di luar repositori resmi, salah satu paket berfokus desain yang paling dikenal adalah repositori vercel-labs/agent-skills milik Vercel. Per Oktober 2026, ini isi repositori:

| Skill | Apa yang dilakukan? |
|---|---|
| web-design-guidelines | Mengaudit kode antarmuka menurut lebih dari 100 aturan yang mencakup aksesibilitas, kinerja, dan pengalaman pengguna |
| vercel-react-best-practices | Aturan kinerja React dan Next.js dari rekayasa Vercel (lebih dari 40 dalam 8 kategori) |
| vercel-composition-patterns | Pola komposisi komponen React yang dapat diskalakan |
| vercel-react-view-transitions | Animasi transisi yang mulus dengan View Transition API milik React |
| vercel-react-native-skills | Aturan kinerja dan arsitektur untuk React Native dan Expo |

Skill-skill ini tidak terikat pada satu alat. Repositori Vercel menyarankan pemasangan dengan perintah npx skills add vercel-labs/agent-skills dan skill dapat dipakai di berbagai agen yang mendukung standar Agent Skills.

## Kapan memakai yang mana?

Urutan praktisnya bisa begini: tentukan arah desain dengan frontend-design, kunci warna dan huruf dengan theme-factory atau skill mereknya sendiri, hasilkan keluaran dengan web-artifacts-builder, lalu audit dengan web-design-guidelines dan coba di peramban dengan webapp-testing. Masing-masing keahlian terpisah, dan berkat pemuatan bertahap, memasang semuanya sekaligus tidak membengkakkan konteks.

Satu peringatan: sebagian skill ini (misalnya web-artifacts-builder) menjalankan skrip. Dokumentasi Claude menyarankan memperlakukan skill seperti memasang perangkat lunak dan hanya memasang dari sumber yang kamu percayai. Melirik SKILL.md dan skrip setiap paket dari luar repositori resmi sebelum memasang adalah kebiasaan yang baik.

Menurutmu, apakah desain buatan kecerdasan buatan seiring waktu akan makin beragam, atau akan lahir "keseragaman" baru karena semua orang memakai skill yang sama?
