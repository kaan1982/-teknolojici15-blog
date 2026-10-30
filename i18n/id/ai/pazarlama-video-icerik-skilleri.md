---
title: "Skill pemasaran, video, dan konten: kotak perkakas para pembuat"
excerpt: "Repositori marketingskills milik Corey Haines, plugin pemasaran Anthropic, skill Remotion dan HeyGen HyperFrames. Pilihan nyata untuk konten dan video."
hook: "Buat video dengan kode, tulis teks dengan skill"
fact: "52 SKILL"
factLabel: "Jumlah skill di repositori marketingskills"
category: "Kecerdasan Buatan"
---
Di balik blog ini juga setiap hari dibuat video pendek, sampul, dan teks. Karena itu kategori ini agak personal bagi kami: skill yang menghasilkan pemasaran, konten, dan video. Ini juga bidang tempat skill komunitas paling cepat bertambah. Kami hanya mendaftar contoh yang repositorinya sudah kami buka dan periksa isinya. Semua angka per akhir Oktober 2026.

## marketingskills: perpustakaan pemasaran berisi 52 skill

Repositori coreyhaines31/marketingskills milik Corey Haines, sosok di balik agensi optimasi konversi Conversion Factory, berlisensi MIT dan merupakan salah satu koleksi komunitas paling lengkap di bidang ini. Menurut README, repositori ini disiapkan untuk pemasar teknis dan pendiri; berfokus pada pekerjaan seperti optimasi konversi, penulisan naskah iklan, SEO, analitik, dan rekayasa pertumbuhan. Ia menyatakan bekerja dengan Claude Code, OpenAI Codex, Cursor, dan agen lain yang mendukung standar Agent Skills.

Di folder skills pada repositori ada 52 skill. Beberapa contoh:

- **copywriting:** Untuk menulis atau memperbaiki teks setiap jenis halaman pemasaran seperti beranda, halaman arahan, dan halaman harga.
- **seo-audit:** Untuk mengaudit dan mendiagnosis masalah SEO pada sebuah situs.
- **ai-seo:** Untuk mengoptimalkan konten bagi mesin pencari kecerdasan buatan, yaitu agar dijadikan sumber dalam jawaban model bahasa besar.
- **emails dan cold-email:** Untuk rangkaian email, alur otomatis, dan kampanye email dingin B2B.
- **social:** Untuk membuat dan merencanakan konten untuk LinkedIn, X, Instagram, TikTok, dan Facebook.

Untuk pemasangan, README menyarankan perintah npx skills add coreyhaines31/marketingskills. Kamu juga bisa memilih skill satu per satu.

## Plugin pemasaran Anthropic

Repositori anthropics/knowledge-work-plugins milik Anthropic mengumpulkan plugin yang disiapkan menurut kelompok profesi. Plugin ini dibuat untuk Claude Cowork dan juga kompatibel dengan Claude Code. Setiap plugin membungkus skill, konektor, perintah garis miring, dan sub-agen untuk pekerjaan itu dalam satu paket.

Skill di dalam plugin marketing adalah: brand-review (memeriksa draf menurut suara merek dan panduan gaya serta mengusulkan perbaikan sebelum/sesudah), campaign-plan (membuat ringkasan kampanye dengan tujuan, audiens, pesan, strategi kanal, dan kalender konten), content-creation, draft-content, email-sequence, competitive-brief, performance-report, dan seo-audit. README mendaftar bahwa plugin ini dapat terhubung ke alat seperti Slack, Canva, Figma, HubSpot, dan Ahrefs. Jadi di sini skill menyediakan "metode" dan konektor menyediakan "akses".

> **Tahukah kamu?** Video kini bisa dibuat bukan hanya dengan seret dan lepas di lini masa, tetapi juga dengan kode, dan di titik inilah skill berperan. Tim Remotion menerbitkan set skill resmi mereka sendiri untuk kerangka video berbasis React. HeyGen menawarkan HyperFrames, yang berdasar gagasan "tulis HTML, render video", bersama skill untuk agen.

## Untuk video: Remotion dan HyperFrames

| Paket | Sumber | Apa yang ditawarkan? |
|---|---|---|
| remotion-dev/skills | Tim Remotion (resmi) | 12 skill: pembuatan video, aturan animasi, teks terjemahan, render, pratinjau |
| heygen-com/hyperframes | HeyGen (Apache 2.0) | Skill dan blok siap pakai untuk kerangka yang mengubah HTML menjadi video |

**Remotion:** Menurut README, Remotion memelihara daftar Agent Skills yang menjelaskan praktik terbaik bekerja dalam proyek Remotion. Di dalam set ada skill seperti remotion-create yang membuat video baru, remotion-markup yang membawa pengetahuan animasi dan tata letak, remotion-captions untuk mentranskripsi teks dan animasinya, remotion-render untuk ekspor, dan remotion-best-practices yang mengarahkan ke semuanya. Pemasangan dilakukan dengan npx skills add remotion-dev/skills.

**HyperFrames:** Repositori HeyGen memperkenalkan dirinya sebagai "tulis HTML, render video, dibuat untuk agen". Menurut README, set intinya terdiri dari skill hyperframes (membuat dan menyunting video), hyperframes-cli (kerangka proyek, pratinjau, render), hyperframes-registry (sekitar 450 blok transisi, judul, teks, dan grafik siap pakai), dan media-use (pekerjaan media seperti musik, efek suara, gambar, dan sulih suara). Total ada 7 skill yang diterbitkan.

Satu rincian menarik: deskripsi skill video di repositori Corey Haines juga mendaftar nama seperti Remotion, HyperFrames, dan HeyGen sebagai kata pemicu. Artinya skill pemasaran ini ditulis agar berfungsi sebagai jembatan ke skill video.

## Apa yang perlu diperhatikan saat memilih?

Sebagian besar skill di bidang ini berasal dari komunitas atau perusahaan dan diperbarui sangat cepat. Sebelum memasang sebuah paket, tiga pertanyaan ini mempermudah pekerjaanmu: Siapa pemilik repositorinya, apakah aktif diperbarui? Adakah instruksi di dalam SKILL.md yang terhubung ke alamat eksternal atau meminta kredensial? Bisakah kamu memilih dan memasang hanya beberapa skill yang benar-benar kamu butuhkan? Kebanyakan alat pemasangan memungkinkan memilih satu skill alih-alih "pasang semua", dan itu mengecilkan konteks sekaligus risiko.

Dalam produksi konten, apa pencuri waktu terbesarmu: menulis teks, menyiapkan gambar, atau menyunting video?
