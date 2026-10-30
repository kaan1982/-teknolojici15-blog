---
title: "Skill untuk pembangun: skill-creator, mcp-builder dan lain-lain"
excerpt: "Skill yang menulis skill, skill yang membina pelayan MCP, pakej skill yang membawa disiplin ujian dan penyahpepijatan. Pilihan yang disahkan untuk pembangun."
hook: "Ada skill yang menulis skill"
fact: "20 KUERI"
factLabel: "Contoh yang disyorkan untuk ujian pencetusan"
category: "Kecerdasan Buatan"
---

Bagi sesiapa yang membangunkan perisian, skill menarik dari dua sudut. Pertama, ada skill "penjana" yang membantu anda menulis skill sendiri dengan lebih pantas dan boleh diukur. Kedua, ada pakej yang membawa disiplin kejuruteraan (ujian, perancangan, penyahpepijatan) kepada ejen. Dalam artikel ini kami membincangkan kedua-duanya, hanya dengan contoh yang telah kami sahkan kewujudannya.

## skill-creator: skill yang menulis skill

skill-creator dalam repositori rasmi Anthropic anthropics/skills direka untuk mencipta skill baharu, menyunting dan menambah baik skill sedia ada, dan mengukur prestasinya. Menurut huraiannya, ia juga mengendalikan menjalankan penilaian (eval), membandingkan keputusan dengan analisis varians dan mengoptimumkan huraian skill supaya tercetus dengan lebih baik.

Aliran kerjanya diterangkan dengan cara yang sangat manusiawi: tentukan apa yang anda mahu, tulis draf, sediakan beberapa mesej ujian, jalankan Claude dengan skill menggunakan mesej ini, nilai keputusan bersama-sama, tulis semula, ulang. Dalam folder terdapat skrip berasingan yang menjalankan penilaian, menghasilkan laporan perbandingan dan menambah baik huraian, serta "eval-viewer" untuk memeriksa keputusan secara visual.

Panduan pengoptimuman huraian agentskills.io juga menunjukkan skill ini sebagai contoh. Menurut panduan itu, skill-creator mengautomasikan kitaran ini dari awal hingga akhir: ia membahagikan set ujian, mengukur kadar pencetusan secara selari, mencadangkan penambahbaikan huraian dengan Claude dan menghasilkan laporan HTML langsung.

> **Tahukah anda?** Dalam ujian pencetusan yang disyorkan agentskills.io, kira-kira 20 mesej contoh digunakan dan setiap satu dijalankan 3 kali. Maksudnya, mencuba satu huraian sahaja bermakna 60 larian. Untuk mengelakkan penyesuaian berlebihan (overfitting), kira-kira 60 peratus mesej diperuntukkan untuk penambahbaikan dan 40 peratus hanya untuk pengesahan. Panduan itu menyatakan lima pusingan selalunya mencukupi.

## mcp-builder dan claude-api: untuk yang membina integrasi

- **mcp-builder (rasmi):** Panduan untuk membangunkan pelayan MCP yang membolehkan model bahasa besar berinteraksi dengan perkhidmatan luar melalui alat yang direka dengan baik. Ia berfungsi dengan Python (FastMCP) atau Node/TypeScript (MCP SDK). Skill ini membahagikan proses kepada empat peringkat: penyelidikan dan perancangan, pelaksanaan, semakan dan ujian, penciptaan penilaian. Dalam folder terdapat dokumen rujukan mengikut bahasa dan skrip penilaian.
- **claude-api (rasmi):** Skill rujukan untuk Claude API dan SDK Anthropic. Ia meliputi topik seperti ID model, parameter, penstriman (streaming), penggunaan alat dan pengcacheran, dan mengandungi folder berasingan untuk banyak bahasa pengaturcaraan. Menurut dokumentasi Claude, skill sumber terbuka ini datang bersama Claude Code.
- **webapp-testing (rasmi):** Set alat untuk menguji aplikasi web setempat dengan Playwright. Pembantu praktikal yang turut kami sebut dalam artikel reka bentuk bagi pembangun hadapan.

## Daripada komuniti: disiplin kejuruteraan dengan Superpowers

Di luar repositori rasmi, salah satu pakej yang paling banyak dibincangkan dalam kalangan pembangun ialah repositori obra/superpowers berlesen MIT milik Jesse Vincent. Ia menggambarkan dirinya sebagai "metodologi pembangunan perisian yang lengkap" untuk ejen pengekodan. Setakat Oktober 2026, repositori itu mengandungi skill berikut (pilihan):

| Skill | Bilakah ia aktif? |
|---|---|
| brainstorming | Sebelum memulakan ciri baharu atau kerja kreatif |
| writing-plans | Semasa menulis rancangan sebelum menyentuh kod untuk kerja berbilang langkah |
| test-driven-development | Semasa pelaksanaan: ujian gagal dahulu, kemudian kod paling minimum |
| systematic-debugging | Apabila menemui pepijat atau ujian yang gagal, sebelum mencadangkan pembetulan |
| verification-before-completion | Untuk menjalankan arahan pengesahan sebelum berkata "siap" |

README repositori memberi arahan pemasangan untuk banyak ejen seperti Codex, Cursor, Gemini CLI dan GitHub Copilot CLI selain Claude Code, dan menyatakan ia berada dalam pasar pemalam rasmi Anthropic di sisi Claude Code. Ini akibat praktikal Agent Skills sebagai piawaian terbuka: skill yang sama boleh berfungsi dalam alat berbeza.

## Idea yang sama pada platform lain

Dokumentasi ChatGPT dan Codex OpenAI juga menghuraikan skill sebagai dibina atas "piawaian agent skills terbuka". Setakat Oktober 2026, dua pembantu terbina dalam menonjol dalam dokumentasi: skill-creator yang mencipta skill daripada kerja yang anda terangkan (dipanggil dengan $skill-creator dalam Codex) dan skill-installer yang memasang skill siap pakai daripada repositori openai/skills atau repositori lain. Codex membaca skill tempatan daripada folder .agents/skills pada peringkat projek dan pengguna.

Tabiat paling bernilai bagi seorang pembangun mungkin ini: menukar setiap penerangan panjang yang anda ulang, senarai semak semakan kod atau langkah penggunaan anda kepada skill dan meletakkannya dalam repositori projek. Dalam Claude Code, skill yang diletakkan dalam folder .claude/skills turut pergi kepada pasukan bersama repositori. Tetapi jangan lupa membaca skrip setiap skill komuniti yang anda pasang, kerana skill ini boleh menjalankan kod pada komputer anda dengan kuasa anda.

Dalam proses pembangunan anda, langkah manakah yang paling membuat anda berkata "alangkah baiknya jika ada skill": ujian, semakan kod atau penggunaan?
