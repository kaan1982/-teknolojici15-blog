---
title: "Skill untuk pengembang: skill-creator, mcp-builder, dan lainnya"
excerpt: "Skill yang menulis skill, skill yang membangun server MCP, paket skill yang membawa disiplin pengujian dan debugging. Pilihan terverifikasi untuk pengembang."
hook: "Ada skill yang menulis skill"
fact: "20 KUERI"
factLabel: "Contoh yang disarankan untuk uji pemicuan"
category: "Kecerdasan Buatan"
---
Bagi orang yang mengembangkan perangkat lunak, skill menarik dari dua sisi. Pertama, ada skill "pembuat" yang membantumu menulis skill sendiri dengan lebih cepat dan terukur. Kedua, ada paket yang memberi agen disiplin rekayasa (pengujian, perencanaan, debugging). Dalam artikel ini kami membahas keduanya, hanya dengan contoh yang keberadaannya telah kami verifikasi.

## skill-creator: skill yang menulis skill

skill-creator di repositori resmi Anthropic anthropics/skills dirancang untuk membuat skill baru, menyunting dan memperbaiki skill yang ada, dan mengukur kinerjanya. Menurut deskripsinya, ia juga menangani menjalankan evaluasi (eval), membandingkan hasil dengan analisis varians, dan mengoptimalkan deskripsi skill agar lebih baik terpicu.

Alur kerjanya digambarkan sangat manusiawi: putuskan apa yang diinginkan, tulis draf, siapkan beberapa pesan uji, jalankan Claude dengan skill menggunakan pesan-pesan itu, nilai hasilnya bersama, tulis ulang, ulangi. Di dalam folder ada skrip terpisah yang menjalankan evaluasi, membuat laporan perbandingan, dan memperbaiki deskripsi, serta sebuah "eval-viewer" untuk memeriksa hasil secara visual.

Panduan optimasi deskripsi dari agentskills.io juga menunjukkan skill ini sebagai contoh. Menurut panduan itu, skill-creator mengotomatiskan siklus ini dari awal sampai akhir: membagi himpunan uji, mengukur laju pemicuan secara paralel, mengusulkan perbaikan deskripsi bersama Claude, dan menghasilkan laporan HTML langsung.

> **Tahukah kamu?** Uji pemicuan yang disarankan agentskills.io memakai sekitar 20 pesan contoh dan masing-masing dijalankan 3 kali. Artinya mencoba satu deskripsi saja berarti 60 kali eksekusi. Untuk mencegah overfitting (kesesuaian berlebih), sekitar 60 persen pesan disisihkan untuk perbaikan dan 40 persen hanya untuk validasi. Panduan itu mengatakan lima putaran biasanya cukup.

## mcp-builder dan claude-api: untuk yang membangun integrasi

- **mcp-builder (resmi):** Panduan untuk mengembangkan server MCP yang memungkinkan model bahasa besar berbicara dengan layanan eksternal lewat alat yang dirancang baik. Bekerja dengan Python (FastMCP) atau Node/TypeScript (MCP SDK). Skill membagi proses menjadi empat tahap: riset dan perencanaan, implementasi, tinjauan dan pengujian, membuat evaluasi. Di dalam folder ada dokumen rujukan per bahasa dan skrip evaluasi.
- **claude-api (resmi):** Skill rujukan untuk Claude API dan SDK Anthropic. Mencakup topik seperti ID model, parameter, streaming, penggunaan alat, caching, dan memuat folder terpisah untuk banyak bahasa pemrograman. Menurut dokumentasi Claude, skill sumber terbuka ini datang bersama Claude Code.
- **webapp-testing (resmi):** Perangkat untuk menguji aplikasi web lokal dengan Playwright. Pendamping praktis bagi pengembang antarmuka depan yang juga kami sebut di artikel desain.

## Dari komunitas: disiplin rekayasa dengan Superpowers

Di luar repositori resmi, salah satu paket yang paling banyak dibicarakan di kalangan pengembang adalah repositori obra/superpowers milik Jesse Vincent yang berlisensi MIT. Ia menyebut dirinya "metodologi pengembangan perangkat lunak yang lengkap" untuk agen pengodean. Per Oktober 2026, skill berikut ada di repositori (pilihan):

| Skill | Kapan aktif? |
|---|---|
| brainstorming | Sebelum memulai fitur baru atau pekerjaan kreatif |
| writing-plans | Saat menulis rencana sebelum menyentuh kode untuk pekerjaan multilangkah |
| test-driven-development | Selama implementasi: uji yang gagal dulu, lalu kode seminimal mungkin |
| systematic-debugging | Saat menemui bug atau uji yang gagal, sebelum mengusulkan perbaikan |
| verification-before-completion | Untuk menjalankan perintah verifikasi sebelum menyatakan "selesai" |

README repositori memberi petunjuk pemasangan untuk banyak agen seperti Codex, Cursor, Gemini CLI, dan GitHub Copilot CLI di samping Claude Code, dan menyatakan bahwa di sisi Claude Code ia ada di pasar plugin resmi Anthropic. Ini akibat praktis dari Agent Skills sebagai standar terbuka: skill yang sama dapat bekerja di berbagai alat.

## Gagasan yang sama di platform lain

Dokumentasi ChatGPT dan Codex dari OpenAI juga menggambarkan skill sebagai dibangun di atas "standar agent skills terbuka". Per Oktober 2026, dua pembantu bawaan menonjol di dokumentasi: skill-creator yang membuat skill dari pekerjaan yang kamu gambarkan (dipanggil dengan $skill-creator di Codex) dan skill-installer yang memasang skill siap pakai dari repositori openai/skills atau repositori lain. Codex membaca skill lokal dari folder .agents/skills pada tingkat proyek dan pengguna.

Kebiasaan paling berharga bagi pengembang mungkin ini: ubah setiap penjelasan panjang yang kamu ulangi, daftar periksa tinjauan kode, atau langkah penerapanmu menjadi skill dan taruh di repositori proyek. Di Claude Code, skill yang ditaruh di folder .claude/skills ikut ke tim bersama repositori. Tetapi jangan lupa membaca skrip setiap skill komunitas yang kamu pasang, karena skill-skill ini dapat menjalankan kode di komputermu dengan wewenangmu.

Dalam proses pengembanganmu, langkah mana yang paling membuatmu berkata "andai ada skill-nya": pengujian, tinjauan kode, atau penerapan?
