---
title: "Tulis skill sendiri: keterampilan pertamamu langkah demi langkah dengan SKILL.md"
excerpt: "Satu folder, satu SKILL.md, dan deskripsi yang ditulis dengan baik. Langkah menulis Agent Skill sendiri, pentingnya kolom description, dan cara mengujinya."
hook: "Deskripsilah yang memicu skill"
fact: "1.024"
factLabel: "Karakter maksimum untuk kolom description"
category: "Kecerdasan Buatan"
---
Untuk menulis skill kamu tidak perlu jadi pemrogram. Dalam bentuk paling sederhana, cukup satu folder dan satu berkas teks di dalamnya. Tetapi perbedaan antara skill yang bekerja baik dan skill yang tak pernah terpicu sering kali tersembunyi dalam satu kalimat: deskripsi. Dalam artikel ini kita menulis skill kecil tapi nyata dari nol.

## Langkah 1: Buat folder dan SKILL.md

Menurut spesifikasi Agent Skills, skill adalah folder yang berisi setidaknya satu berkas SKILL.md. Di awal berkas ada informasi awal YAML (frontmatter) dan dua kolom wajib:

- **name:** Maksimum 64 karakter. Hanya huruf kecil, angka, dan tanda hubung. Tidak boleh diawali atau diakhiri tanda hubung, tidak boleh memuat dua tanda hubung berturut-turut, dan harus sama dengan nama folder. Dokumentasi Claude juga menyatakan bahwa kata "anthropic" dan "claude" tidak boleh dipakai dalam nama.
- **description:** Tidak boleh kosong, maksimum 1.024 karakter. Harus menjelaskan apa yang dilakukan skill dan kapan dipakai.

Ada juga kolom opsional (license, compatibility, metadata, dan allowed-tools yang eksperimental), tetapi tidak diperlukan untuk kebanyakan skill.

## Langkah 2: Tulis deskripsi dengan cermat

Mengapa deskripsi begitu penting? Karena pada awal, agen hanya membaca nama dan deskripsi setiap skill. Dalam ungkapan agentskills.io, "seluruh beban" pemicuan berada di pundak deskripsi. Jika deskripsi tidak menjelaskan kapan pekerjaan itu berguna, agen tidak akan menjangkau skill tersebut.

Saran sumber-sumber dapat diringkas begini:

- Tulis **apa yang dilakukan** sekaligus **kapan dipakai**.
- Dokumentasi Claude menyarankan agar deskripsi ditulis dengan **sudut pandang orang ketiga** karena ia ditambahkan ke prompt sistem ("Memproses berkas Excel", bukan "Saya dapat membantu Anda").
- agentskills.io menyarankan agar juga menyebut secara eksplisit situasi saat pengguna tidak menyebut bidang itu dengan namanya.
- Singkat saja: beberapa kalimat, paling banyak satu paragraf pendek. Claude Code memotong deskripsi di daftar pada 1.536 karakter, jadi kasus penggunaan terpenting harus berada di awal.

## Langkah 3: Jaga isi tetap pendek, skrip tetap cerdas

Sebagai contoh, bayangkan skill yang sesuai dengan aturan penulisan blog ini sendiri: tidak boleh ada tanda pisah panjang (em dash) dan tanda pisah menengah (en dash) di dalam teks. Struktur foldernya begini:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Dan berkas SKILL.md hanya sepanjang ini:

```markdown
---
name: tire-denetimi
description: Menemukan penggunaan tanda pisah panjang (U+2014) dan tanda pisah menengah (U+2013) di artikel blog dan mengusulkan perbaikan. Dipakai ketika pengguna menyiapkan artikel Markdown untuk terbit, ketika berkata "periksa tanda pisahnya", "apakah sesuai aturan penulisan", atau ketika, tanpa menyebut namanya, meminta pemeriksaan akhir sebelum terbit.
---

# Audit tanda pisah

1. Jalankan perintah `python scripts/tire_bul.py <berkas.md>`.
2. Untuk setiap baris dalam keluaran, usulkan mengganti tanda pisah dengan titik, koma, titik dua, atau tanda kurung.
3. Jangan mengubah makna. Tanyakan kepada pengguna baris yang tidak kamu yakini.
4. Di akhir, laporkan dalam satu kalimat berapa baris yang diperbaiki.
```

Dokumentasi Claude memandang jendela konteks sebagai "sumber daya bersama" dan menyarankan hanya menambahkan informasi yang belum diketahui model. Isinya harus kurang dari 500 baris. Teks rujukan panjang harus dipindahkan ke berkas terpisah dan berkas-berkas ini ditautkan dari SKILL.md dengan satu tingkat saja.

Aturan untuk skrip juga jelas: "selesaikan, jangan lempar bola". Artinya skrip harus menangani kondisi galat sendiri, tidak ditulis dengan logika "biar meledak, Claude pasti menemukan caranya". Ketika skrip dijalankan, yang masuk ke konteks bukan kodenya, melainkan hanya keluarannya. Ini membuat skrip lebih andal daripada instruksi untuk pekerjaan berulang yang tidak boleh meleset.

> **Tahukah kamu?** Di Claude Code, "perintah garis miring khusus" yang lama telah bergabung dengan skill. Berkas .claude/commands/deploy.md dan .claude/skills/deploy/SKILL.md menghasilkan perintah /deploy yang sama. Jika kamu tidak ingin sebuah skill terpicu otomatis, tambahkan disable-model-invocation: true ke frontmatter dan kamu bisa memanggilnya hanya secara manual.

## Langkah 4: Uji, lalu uji lagi

Panduan praktik terbaik Claude menyarankan menyiapkan skenario evaluasi sebelum menulis dokumen panjang, dan daftar periksa sebelum terbit memuat setidaknya tiga evaluasi dan pengujian terpisah pada model Haiku, Sonnet, dan Opus. Alasannya sederhana: instruksi yang bekerja sempurna di Opus bisa membutuhkan lebih banyak rincian untuk Haiku.

Untuk menguji pemicuan, saran agentskills.io konkret: siapkan sekitar 20 contoh pesan pengguna. 8 sampai 10 di antaranya harus memicu skill, 8 sampai 10 tidak boleh. Contoh negatif yang paling berharga adalah yang "nyaris meleset", yaitu pesan yang memakai kata-kata sama tetapi meminta pekerjaan lain. Karena perilaku model tidak selalu sama, disarankan menjalankan setiap pesan beberapa kali (3 untuk permulaan) dan melihat laju pemicuan.

| Deskripsi buruk | Deskripsi baik |
|---|---|
| "Membantu dengan PDF." | Menyebut apa yang dilakukan dan kapan dipakai |
| Hanya rincian teknis | Menjelaskan niat pengguna |
| Mencakup segalanya | Juga menyebut apa yang tidak dilakukannya |

Pemasangan pun mudah: di Claude Code cukup taruh folder di bawah ~/.claude/skills/ (pribadi) atau folder .claude/skills/ proyek. Claude Code memantau folder ini dan mendeteksi perubahan dalam sesi yang sama tanpa perlu memulai ulang. Di claude.ai, kamu bisa mengunggah skill dalam bentuk zip dari pengaturan.

Pekerjaan berulang apa yang akan diotomatiskan oleh skill pertamamu?
