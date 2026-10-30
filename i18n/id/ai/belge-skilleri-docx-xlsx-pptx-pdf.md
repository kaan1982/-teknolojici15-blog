---
title: "Skill dokumen: mengajarkan Word, Excel, PowerPoint, dan PDF kepada agen"
excerpt: "Apa yang dilakukan skill docx, xlsx, pptx, dan pdf dari Anthropic, dan di mana mereka bekerja? Skill resmi dan pendamping yang benar-benar berguna untuk membuat dokumen."
hook: "Laporan, tabel, presentasi: semuanya satu skill"
fact: "4 DOKUMEN"
factLabel: "Jumlah skill dokumen siap pakai"
category: "Kecerdasan Buatan"
---
Mudah saja mengatakan kepada kecerdasan buatan "buatkan laporan". Yang sulit adalah agar laporan itu datang sebagai berkas Word atau Excel yang benar-benar bisa dibuka, formatnya tidak rusak, dan rumusnya berfungsi. Kategori skill yang pertama dan mungkin paling banyak dipakai persis seperti ini: dokumen kantor. Dalam artikel ini kami hanya membahas skill yang keberadaannya telah kami verifikasi.

## Empat fondasi: docx, xlsx, pptx, pdf

Menurut dokumentasi Claude, Anthropic menyediakan empat skill dokumen siap pakai (pre-built). Skill-skill ini bekerja di balik fitur pembuatan berkas Claude, dan Anthropic menerbitkan kode sumbernya di repositori GitHub anthropics/skills.

| Skill | Apa yang dilakukan? (dari deskripsi resmi) |
|---|---|
| docx | Membuat, membaca, dan menyunting dokumen Word. Termasuk pemformatan dan templat |
| xlsx | Membuka dan menyunting lembar kerja, menambah rumus dan grafik, membersihkan data yang berantakan |
| pptx | Membuat presentasi, menyunting slide, membaca dan mengurai isi .pptx |
| pdf | Mengekstrak teks dan tabel, menggabungkan dan memecah PDF, mengisi formulir, menambah tanda air |

Deskripsi di repositori ditulis dengan cukup "bersikeras". Misalnya deskripsi skill pptx menyatakan agar skill itu dipakai jika berkas .pptx terlibat "dengan cara apa pun" sebagai masukan atau keluaran. Ini contoh resmi aturan "deskripsi yang memicu" yang kami jelaskan di artikel sebelumnya.

## Di mana bisa dipakai?

Per Oktober 2026, menurut dokumentasi Claude, keempat skill ini aktif dengan sendirinya saat membuat dokumen di claude.ai dan juga bisa dipanggil sebagai skill siap pakai di Claude API. Di Claude Code, skill dokumen siap pakai tidak datang bawaan. Tetapi repositori anthropics/skills dapat ditambahkan sebagai pasar plugin untuk Claude Code, dan paket document-skills dapat dipasang. Menurut petunjuk di repositori, pasar ditambahkan dahulu dengan perintah /plugin marketplace add anthropics/skills lalu document-skills@anthropic-agent-skills dipasang.

Ada pembedaan soal lisensi. Banyak skill di repositori berlisensi sumber terbuka Apache 2.0. Namun keempat skill dokumen dibagikan sebagai "bukan sumber terbuka, melainkan sumber tersedia" (source-available). Artinya kamu bisa memeriksa kodenya dan belajar darinya, tetapi sebelum mendistribusikannya ulang secara bebas dalam produkmu, kamu perlu membaca berkas lisensinya.

> **Tahukah kamu?** Skill pdf adalah contoh buku pelajaran untuk pemuatan bertahap. Menurut artikel rekayasa Anthropic, petunjuk pengisian formulir dikeluarkan dari SKILL.md utama dan dipindahkan ke berkas forms.md terpisah. Claude hanya membaca berkas ini ketika benar-benar mengisi formulir. Di repositori, folder pdf hari ini berisi forms.md, reference.md, dan folder scripts.

## Pendamping di samping dokumen

Pembuatan dokumen tidak berhenti pada format berkas. Di repositori anthropics/skills ada contoh resmi lain yang berfokus pada sisi konten:

- **doc-coauthoring:** Menawarkan alur kerja langkah demi langkah untuk menulis bersama teks terstruktur seperti spesifikasi teknis, usulan, dan dokumen keputusan. Melewati tahap pemindahan konteks, perbaikan berulang, dan verifikasi.
- **internal-comms:** Mengumpulkan sumber daya yang membantu menulis teks komunikasi internal seperti laporan status, pembaruan manajemen, buletin perusahaan, dan FAQ dalam format yang disukai perusahaan. Di dalam folder juga ada contoh teks.
- **brand-guidelines:** Menerapkan warna dan tipografi merek resmi Anthropic pada sebuah keluaran. Nilai utamanya adalah menunjukkan bagaimana kamu bisa membangun yang serupa untuk mereknya sendiri.
- **theme-factory:** Memuat 10 tema warna dan huruf siap pakai yang bisa diterapkan pada slide, dokumen, laporan, atau halaman HTML, dan juga membuat tema baru seketika jika diminta.

Pusat Bantuan juga menyebut skill yang disiapkan mitra seperti Notion, Figma, dan Atlassian agar bekerja bersama konektor MCP mereka sendiri. Skill-skill ini berguna saat bekerja dengan alat tempat dokumen dibuat (misalnya halaman Notion).

## Bagaimana memakainya dalam kehidupan nyata?

Pemakaian paling efisien adalah menggabungkan skill dokumen siap pakai dengan skill kecilmu sendiri. Misalnya skill xlsx tahu cara membuat Excel dengan benar, tetapi tidak tahu kolom apa yang harus ada di tabel penjualan bulanan perusahaanmu. Jika kamu menulis skill pendek yang menjelaskannya, kedua skill bekerja bersama dan menghasilkan berkas yang formatnya benar sekaligus sesuai standarmu.

Ada dua catatan yang tak boleh kamu lupakan. Pertama, repositori anthropics/skills menyatakan terang-terangan bahwa skill ini "untuk tujuan demonstrasi dan edukasi" dan bahwa perilaku Claude sendiri bisa berbeda dari penerapan di sini. Kedua, skill dokumen membutuhkan lingkungan eksekusi kode. Menurut Pusat Bantuan, agar skill bekerja, fitur eksekusi kode harus aktif.

Di artikel berikutnya kita beralih ke sisi layar: skill yang menghasilkan desain, antarmuka depan, dan keluaran web.

Jenis dokumen apa yang paling membuatmu kehilangan waktu saat menyiapkannya: tabel, presentasi, atau laporan?
