---
title: "Apa itu skill? 'Folder keterampilan' baru bagi agen kecerdasan buatan"
excerpt: "Agent Skill adalah folder yang terdiri dari berkas SKILL.md dan skrip opsional. Agen memuatnya hanya saat dibutuhkan. Apa bedanya dengan prompt, MCP, dan plugin?"
hook: "Ajarkan keterampilan baru kepada agen dengan sebuah folder"
fact: "3 LAPISAN"
factLabel: "Pemuatan bertahap isi skill"
category: "Kecerdasan Buatan"
---
Asisten kecerdasan buatan tahu sedikit tentang segalanya, tetapi tidak tahu templat laporan perusahaanmu, warna merekmu, atau trik menangani suatu jenis berkas dengan benar. Bagaimana jika, alih-alih menjelaskannya panjang lebar di setiap percakapan, kamu bisa mengemasnya sekali dan berkata kepada agen "pakai kalau perlu"? Itulah persisnya gagasan "skill" (keterampilan).

## Singkatnya: sebuah folder dan sebuah SKILL.md

Menurut definisi Anthropic, Agent Skills adalah paket modular yang memperluas kemampuan Claude. Setiap skill menyimpan instruksi, metadata, dan sumber daya opsional (skrip, templat) bersama-sama, dan Claude memakainya dengan sendirinya ketika relevan. Blog rekayasa Anthropic mengatakannya lebih sederhana: skill adalah "folder instruksi, skrip, dan sumber daya yang tertata" yang dimuat agen saat dibutuhkan agar lebih baik dalam pekerjaan tertentu.

Secara teknis, skill adalah folder yang setidaknya berisi satu berkas bernama SKILL.md. Di awal berkas ini ada dua kolom wajib berformat YAML: name (nama) dan description (deskripsi). Di bawahnya ada instruksi yang ditulis dengan Markdown biasa. Ke dalam folder, jika mau, kamu dapat menambahkan subfolder seperti scripts/ (kode yang dapat dijalankan), references/ (dokumen tambahan), dan assets/ (templat, gambar, data).

Anthropic menganalogikan struktur ini dengan panduan orientasi yang disiapkan untuk karyawan baru. Kamu menaruh panduan di meja, dan karyawan membukanya saat butuh.

## Rahasianya: tidak semuanya dimuat sekaligus

Yang membedakan skill dari prompt panjang biasa adalah rancangan bernama "pemuatan bertahap" (progressive disclosure). Menurut dokumentasi Claude, konten dimuat dalam tiga lapisan:

| Lapisan | Kapan dimuat? |
|---|---|
| 1. Metadata (nama + deskripsi) | Selalu, saat awal (sekitar 100 token per skill) |
| 2. Isi SKILL.md | Ketika skill terpicu (disarankan di bawah 5.000 token) |
| 3. Berkas tambahan dan skrip | Hanya bila diperlukan; hanya keluaran skrip yang masuk ke konteks |

Dengan cara ini kamu bisa memasang puluhan skill pada agen tanpa semuanya memenuhi jendela konteks. Sampai terpicu, dari tiap skill hanya nama dan deskripsinya yang "ada di meja". Dalam contoh di dokumentasi, skill PDF menyimpan petunjuk pengisian formulir di berkas forms.md terpisah, dan Claude hanya membaca berkas ini ketika benar-benar mengisi formulir.

> **Tahukah kamu?** Anthropic mengumumkan Agent Skills pada 16 Oktober 2025 dan pada 18 Desember 2025 menerbitkan formatnya sebagai standar terbuka di agentskills.io. Karena itu, per Oktober 2026 kamu melihat struktur SKILL.md yang sama juga di dokumentasi alat lain seperti GitHub Copilot dan OpenAI Codex. Dokumentasi Copilot mengarahkan langsung ke spesifikasi agentskills.io untuk memeriksa skill.

## Prompt, MCP, plugin: apa bedanya?

Konsep-konsep ini sering tertukar karena semuanya tentang "membuat agen lebih baik". Pembedaan Pusat Bantuan Claude dapat diringkas begini:

- **Prompt atau instruksi khusus:** Panduan umum yang berlaku di setiap percakapan atau di semua percakapanmu. Skill, sebaliknya, khusus untuk tugas dan hanya aktif ketika relevan.
- **Proyek:** Pengetahuan latar tetap yang selalu termuat dalam percakapan di dalam sebuah proyek. Skill adalah prosedur yang dibuka bila perlu.
- **Konektor MCP (Model Context Protocol):** Menghubungkan Claude ke layanan dan sumber data eksternal. Artinya menyediakan "akses". Skill adalah "pengetahuan metode" yang menjelaskan cara memakai akses itu. Pusat bantuan mengatakan keduanya sering dipakai bersama.
- **Plugin:** Di sisi Claude Code dan Cowork, plugin adalah paket untuk mendistribusikan beberapa bagian (skill, konektor, perintah, sub-agen) sekaligus. Dokumentasi OpenAI membuat pembedaan serupa: skill adalah format penulisan, plugin adalah cara distribusi.

Singkatnya, MCP memberi tangan kepada agen, skill mengajarkan keterampilan kepada tangan itu, dan plugin mengantarkan semuanya dalam satu kotak.

## Di mana bekerja?

Per Oktober 2026, menurut dokumentasi Claude, skill dapat dipakai di aplikasi Claude (claude.ai), di Claude Code, dan di Claude API bersama alat eksekusi kode. Pusat bantuan menyatakan skill tersedia di paket Free, Pro, Max, Team, dan Enterprise dan membutuhkan fitur eksekusi kode aktif.

Satu rincian penting: skill khusus tidak disinkronkan antar permukaan. Skill yang kamu unggah ke claude.ai hanya milik akunmu. Skill yang diunggah ke API dibagikan ke seluruh ruang kerja. Di Claude Code, ia disimpan secara pribadi (~/.claude/skills/) atau di folder proyek (.claude/skills/).

Ada pula dimensi keamanan. Karena skill dapat menjalankan kode, dokumentasi menyarankan memperlakukannya "seperti memasang perangkat lunak" dan hanya memakai dari sumber tepercaya. Kami membahasnya tersendiri di artikel terakhir seri ini.

Di artikel-artikel berikutnya pada bagian ini, kami akan menulis skill sendiri langkah demi langkah dan mengulas skill yang benar-benar ada dan berguna, kategori demi kategori.

Pekerjaan apa yang setiap hari kamu jelaskan berulang-ulang kepada kecerdasan buatan dan membuatmu berkata "andai aku cukup mengajarkannya sekali"?
