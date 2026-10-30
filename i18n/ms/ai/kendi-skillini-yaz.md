---
title: "Tulis skill anda sendiri: kemahiran pertama langkah demi langkah dengan SKILL.md"
excerpt: "Satu folder, satu SKILL.md dan huraian yang ditulis dengan baik. Langkah menulis Agent Skill anda sendiri, kepentingan medan description dan kaedah ujian."
hook: "Huraian yang mencetuskan skill"
fact: "1,024"
factLabel: "Aksara maksimum untuk medan description"
category: "Kecerdasan Buatan"
---

Anda tidak perlu menjadi pengatur cara untuk menulis skill. Dalam bentuk paling ringkas, sebuah folder dan satu fail teks di dalamnya sudah memadai. Tetapi perbezaan antara skill yang berfungsi dengan baik dan skill yang tidak pernah tercetus selalunya tersembunyi dalam satu ayat: huraian. Dalam artikel ini kami menulis skill kecil tetapi sebenar dari kosong.

## Langkah 1: Cipta folder dan SKILL.md

Menurut spesifikasi Agent Skills, skill ialah folder yang mengandungi sekurang-kurangnya satu fail SKILL.md. Di bahagian paling atas fail terdapat maklumat awal YAML (frontmatter) dan dua medan adalah wajib:

- **name:** Paling banyak 64 aksara. Hanya huruf kecil, nombor dan sengkang. Tidak boleh bermula atau berakhir dengan sengkang, tidak boleh mengandungi dua sengkang berturut-turut dan mesti sama dengan nama folder. Dokumentasi Claude juga menyatakan perkataan "anthropic" dan "claude" tidak boleh digunakan dalam nama.
- **description:** Tidak boleh kosong, paling banyak 1,024 aksara. Ia mesti menerangkan apa yang dilakukan skill dan bila ia digunakan.

Ada juga medan pilihan (license, compatibility, metadata dan allowed-tools yang eksperimen), tetapi kebanyakan skill tidak memerlukannya.

## Langkah 2: Tulis huraian dengan teliti

Mengapa huraian sangat penting? Kerana semasa permulaan, ejen hanya membaca nama dan huraian setiap skill. Dalam ungkapan agentskills.io, "seluruh beban" pencetusan terletak pada huraian. Jika huraian tidak menerangkan bila kerja itu berguna, ejen tidak akan mencapai skill tersebut.

Cadangan sumber boleh diringkaskan begini:

- Tulis **apa yang dilakukannya** dan **bila ia digunakan**.
- Dokumentasi Claude mencadangkan huraian ditulis dalam **orang ketiga** kerana ia ditambah pada gesaan sistem ("Memproses fail Excel", bukan "Saya boleh membantu anda").
- agentskills.io mencadangkan menyenaraikan secara jelas juga situasi apabila pengguna tidak menyebut bidang itu dengan namanya.
- Pendekkan: beberapa ayat, paling banyak satu perenggan pendek. Claude Code memotong huraian dalam senarai pada 1,536 aksara, jadi kes penggunaan yang paling penting mesti berada di awal.

## Langkah 3: Pastikan isi pendek, skrip bijak

Sebagai contoh, bayangkan skill yang mematuhi peraturan penulisan blog ini sendiri: tiada sengkang panjang (em dash) dan sengkang sederhana (en dash) dalam teks. Biarlah struktur folder begini:

```
tire-denetimi/
├── SKILL.md
└── scripts/
    └── tire_bul.py
```

Fail SKILL.md pula sebegini sahaja:

```markdown
---
name: tire-denetimi
description: Mencari penggunaan sengkang panjang (U+2014) dan sengkang sederhana (U+2013) dalam artikel blog dan mencadangkan pembetulan. Digunakan apabila pengguna menyediakan artikel Markdown untuk diterbitkan, berkata "semak sengkang", "adakah ia mematuhi peraturan penulisan", atau meminta semakan terakhir sebelum penerbitan walaupun tanpa menyebut namanya.
---

# Semakan sengkang

1. Jalankan arahan `python scripts/tire_bul.py <fail.md>`.
2. Untuk setiap baris dalam output, cadangkan menggantikan sengkang dengan noktah, koma, titik bertindih atau kurungan.
3. Jangan ubah maksud. Tanya pengguna tentang baris yang anda tidak pasti.
4. Pada akhirnya, laporkan dalam satu ayat berapa baris yang dibetulkan.
```

Dokumentasi Claude menganggap tetingkap konteks sebagai "sumber bersama" dan mencadangkan menambah hanya maklumat yang belum diketahui model. Isi mesti kekal di bawah 500 baris. Teks rujukan yang panjang perlu dialihkan ke fail berasingan dan fail itu dipaut dari SKILL.md pada satu peringkat sahaja.

Peraturan untuk skrip juga jelas: "selesaikan, jangan lemparkan bola". Maksudnya, skrip mesti mengendalikan keadaan ralat sendiri, bukan ditulis dengan logik "biar ia ranap, Claude akan cari jalan". Apabila skrip berjalan, yang masuk ke dalam konteks bukan kodnya sendiri, tetapi hanya outputnya. Ini menjadikan skrip lebih boleh dipercayai daripada arahan untuk kerja yang berulang dan tidak bertolak ansur dengan ralat.

> **Tahukah anda?** Dalam Claude Code, "arahan garis condong khas" yang lama telah bergabung dengan skill. Fail .claude/commands/deploy.md dan .claude/skills/deploy/SKILL.md mencipta arahan /deploy yang sama. Jika anda tidak mahu sesuatu skill tercetus secara automatik, anda boleh menambah disable-model-invocation: true pada frontmatter dan memanggilnya secara manual sahaja.

## Langkah 4: Uji, kemudian uji lagi

Panduan amalan terbaik Claude mencadangkan menyediakan senario penilaian sebelum menulis dokumen panjang, dan dalam senarai semak sebelum penerbitan terdapat sekurang-kurangnya tiga penilaian serta ujian berasingan pada model Haiku, Sonnet dan Opus. Sebabnya mudah: arahan yang berfungsi sempurna pada Opus mungkin memerlukan lebih banyak butiran untuk Haiku.

Untuk menguji pencetusan, cadangan agentskills.io adalah konkrit: sediakan kira-kira 20 mesej pengguna contoh. Antaranya 8 hingga 10 patut mencetuskan skill dan 8 hingga 10 tidak patut. Contoh negatif yang paling bernilai ialah yang "hampir terlepas", iaitu mesej yang berkongsi perkataan yang sama tetapi meminta kerja lain. Memandangkan tingkah laku model tidak sentiasa sama, disyorkan menjalankan setiap mesej beberapa kali (3 untuk permulaan) dan melihat kadar pencetusan.

| Huraian yang buruk | Huraian yang baik |
|---|---|
| "Membantu dengan PDF." | Menyatakan apa yang dilakukan dan bila digunakan |
| Hanya butiran teknikal | Menerangkan niat pengguna |
| Merangkumi segala-galanya | Menyatakan juga apa yang tidak dilakukan |

Pemasangan pun mudah: dalam Claude Code, cukup letakkan folder di bawah ~/.claude/skills/ (peribadi) atau dalam folder .claude/skills/ projek. Claude Code memantau folder ini dan mengesan perubahan dalam sesi yang sama tanpa perlu dimulakan semula. Di claude.ai pula, anda boleh memuat naik skill sebagai zip daripada tetapan.

Kerja berulang yang manakah akan diautomasikan oleh skill pertama anda?
