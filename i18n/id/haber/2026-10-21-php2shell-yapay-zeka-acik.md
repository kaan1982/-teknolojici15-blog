---
title: "AI temukan celah kritis di PHP, yang menopang 70 persen situs web"
excerpt: "Dua celah bernama PHP2Shell memungkinkan eksekusi kode di server tanpa login. Penemuannya memakai model seperti GPT-5.6 Sol dan Gemini 4 Argon."
hook: "AI temukan celah raksasa di PHP"
fact: "CVSS 9,2"
factLabel: "Skor tertinggi celah PHP2Shell"
category: "Kecerdasan Buatan"
---
Pada 21 Oktober, pengembang PHP merilis tambalan darurat untuk dua celah keamanan kritis di mesin inti bahasa itu. Celah yang dijuluki "PHP2Shell" dan bernomor CVE-2026-109618 serta CVE-2026-109619 ini ditemukan dengan bantuan alat kecerdasan buatan.

## Apa yang terjadi?

Menurut Fortune, Calif, perusahaan pengujian keamanan AI, menemukan mata rantai pertama pada 1 Agustus dengan GPT-5.6 Sol; Wiz secara independen mengidentifikasi celah pertama pada 19 Agustus dan melaporkannya ke tim keamanan PHP pada 24 Agustus. Dalam penemuan itu digunakan alat milik Wiz sendiri, Wiz Atlas, serta model GPT-5.6 Sol milik OpenAI dan Gemini 4 Argon milik Google.

Celah ini memungkinkan penyerang menjalankan kode di server dari jarak jauh tanpa login dan membocorkan data di memori. Menurut Wiz, hampir semua versi PHP yang rilis dalam sepuluh tahun terakhir terdampak, mundur hingga 5.4. Skor keparahan tertingginya 9,2 pada skala CVSS. PHP berjalan di balik sekitar 70 persen situs web dunia; WordPress saja menjalankan kira-kira 40 persen situs. Menurut berita Fortune yang diperbarui, celah mulai dieksploitasi secara luas setelah tambalan dirilis.

## Mengapa penting?

Ini salah satu contoh paling nyata bahwa kecerdasan buatan dalam riset keamanan kini bukan lagi sekadar pembantu, melainkan bisa menjadi penemu. Namun alat yang sama juga ada di tangan penyerang, dan jeda antara rilis tambalan dan dimulainya eksploitasi makin pendek. Setiap pemilik situs yang memakai PHP perlu segera memperbarui servernya. Dalam gambaran yang lebih luas, kesalahan tersembunyi dalam kode lama internet yang sudah berjalan puluhan tahun kini bisa terungkap jauh lebih cepat. Kisah program pertama yang berkeliaran sendiri di jaringan kami ceritakan dalam [tulisan tentang Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
