---
title: "Apakah skill? \"Folder kemahiran\" baharu ejen kecerdasan buatan"
excerpt: "Agent Skill ialah folder yang terdiri daripada fail SKILL.md dan skrip pilihan. Ejen hanya memuatkannya apabila diperlukan. Apakah bezanya dengan prompt, MCP dan pemalam?"
hook: "Ajar kemahiran baharu kepada ejen dengan satu folder"
fact: "3 LAPISAN"
factLabel: "Pemuatan berperingkat kandungan skill"
category: "Kecerdasan Buatan"
---

Pembantu kecerdasan buatan tahu sedikit tentang segala-galanya, tetapi tidak tahu templat laporan syarikat anda, warna jenama anda atau helah memproses sesuatu jenis fail dengan betul. Bagaimana jika, daripada menerangkannya panjang lebar dalam setiap perbualan, anda boleh membungkusnya sekali dan berkata kepada ejen "gunakan apabila perlu"? Itulah idea "skill" (kemahiran).

## Ringkasnya: satu folder dan satu SKILL.md

Menurut takrifan Anthropic, Agent Skills ialah pakej modular yang memperluas keupayaan Claude. Setiap skill menyimpan arahan, metadata dan sumber pilihan (skrip, templat) bersama-sama, dan Claude menggunakannya secara automatik apabila berkaitan. Blog kejuruteraan Anthropic menyatakannya lebih ringkas lagi: skill ialah "folder arahan, skrip dan sumber yang tersusun" yang dimuatkan ejen apabila perlu untuk menjadi lebih baik dalam tugas tertentu.

Secara teknikal, skill ialah folder yang sekurang-kurangnya mengandungi fail bernama SKILL.md. Pada bahagian atas fail ini terdapat dua medan wajib dalam format YAML: name (nama) dan description (huraian). Di bawahnya terdapat arahan yang ditulis dengan Markdown biasa. Dalam folder anda boleh menambah subfolder seperti scripts/ (kod boleh jalan), references/ (dokumen tambahan) dan assets/ (templat, imej, data) jika mahu.

Anthropic menyamakan struktur ini dengan panduan orientasi yang disediakan untuk pekerja baharu. Anda meletakkan panduan di atas meja, pekerja membukanya dan melihat apabila perlu.

## Rahsianya: tidak semuanya dimuatkan serentak

Yang membezakan skill daripada prompt panjang biasa ialah reka bentuk yang dipanggil "pemuatan berperingkat" (progressive disclosure). Menurut dokumentasi Claude, kandungan dimuatkan dalam tiga lapisan:

| Lapisan | Bila dimuatkan? |
|---|---|
| 1. Metadata (nama + huraian) | Sentiasa, semasa permulaan (kira-kira 100 token bagi setiap skill) |
| 2. Isi SKILL.md | Apabila skill dicetuskan (disyorkan di bawah 5,000 token) |
| 3. Fail dan skrip tambahan | Hanya apabila perlu; hanya output skrip yang masuk ke dalam konteks |

Dengan cara ini anda boleh memuatkan berpuluh skill pada ejen tetapi semuanya tidak memenuhi tetingkap konteks. Sehingga dicetuskan, hanya nama dan huraian setiap skill yang berada "di atas meja". Dalam contoh dokumen, skill PDF menyimpan arahan mengisi borang dalam fail forms.md yang berasingan dan Claude hanya membaca fail ini apabila benar-benar mengisi borang.

> **Tahukah anda?** Anthropic mengumumkan Agent Skills pada 16 Oktober 2025 dan menerbitkan format itu sebagai piawaian terbuka di agentskills.io pada 18 Disember 2025. Oleh sebab itu, setakat Oktober 2026, anda melihat struktur SKILL.md yang sama dalam dokumentasi alat lain seperti GitHub Copilot dan OpenAI Codex. Dokumentasi Copilot mengarahkan terus ke spesifikasi agentskills.io untuk menyemak skill.

## Prompt, MCP, pemalam: apa bezanya?

Konsep ini sering dikelirukan kerana semuanya berkaitan "menjadikan ejen lebih baik". Perbezaan menurut Pusat Bantuan Claude boleh diringkaskan begini:

- **Prompt atau arahan khas:** Panduan umum yang sah dalam setiap perbualan atau semua perbualan anda. Skill pula khusus kepada tugas dan hanya aktif apabila berkaitan.
- **Projek:** Maklumat latar yang tetap dimuatkan dalam perbualan di dalam sesuatu projek. Skill ialah prosedur yang dibuka apabila diperlukan.
- **Penyambung MCP (Model Context Protocol):** Menyambungkan Claude kepada perkhidmatan dan sumber data luar. Maksudnya ia menyediakan "akses". Skill pula ialah "pengetahuan kaedah" yang menerangkan cara menggunakan akses itu. Pusat bantuan menyatakan keduanya kerap digunakan bersama.
- **Pemalam (plugin):** Di sisi Claude Code dan Cowork, pemalam ialah pakej untuk mengedarkan beberapa bahagian (skill, penyambung, arahan, sub-ejen) bersama-sama. Dokumentasi OpenAI juga membuat perbezaan yang serupa: skill ialah format penulisan, pemalam ialah cara pengedaran.

Ringkasnya, MCP memberi ejen tangan, skill mengajar tangan itu kemahiran, dan pemalam menghantar semuanya dalam satu kotak.

## Di mana ia berfungsi?

Setakat Oktober 2026, menurut dokumentasi Claude, skill boleh digunakan dalam aplikasi Claude (claude.ai), dalam Claude Code dan dalam Claude API bersama alat pelaksanaan kod. Pusat bantuan menyatakan skill ditawarkan dalam pelan Free, Pro, Max, Team dan Enterprise dan memerlukan ciri pelaksanaan kod dihidupkan.

Satu butiran penting: skill peribadi tidak disegerakkan merentas permukaan. Skill yang anda muat naik ke claude.ai hanya khusus untuk akaun anda. Skill yang dimuat naik ke API dikongsi dengan seluruh ruang kerja. Dalam Claude Code pula, ia disimpan secara peribadi (~/.claude/skills/) atau dalam folder projek (.claude/skills/).

Ada juga dimensi keselamatan. Oleh sebab skill boleh menjalankan kod, dokumentasi mencadangkan menanganinya "seperti memasang perisian" dan menggunakannya hanya daripada sumber yang dipercayai. Kami membincangkan ini secara berasingan dalam artikel terakhir siri ini.

Dalam artikel seterusnya bahagian ini, kita akan menulis skill anda sendiri langkah demi langkah dan menelaah skill yang benar-benar wujud dan berguna, kategori demi kategori.

Kerja manakah yang anda terangkan kepada kecerdasan buatan berulang-ulang setiap hari, yang membuat anda berkata "alangkah baiknya jika saya ajar sekali sahaja"?
