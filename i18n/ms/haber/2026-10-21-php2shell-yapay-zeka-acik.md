---
title: "Kecerdasan buatan menemui kelemahan kritikal dalam PHP, asas 70 peratus laman web"
excerpt: "Dua kelemahan bernama PHP2Shell membenarkan kod dijalankan pada pelayan tanpa log masuk. Model seperti GPT-5.6 Sol dan Gemini 4 Argon digunakan dalam penemuan itu."
hook: "KB menemui kelemahan besar dalam PHP"
fact: "CVSS 9.2"
factLabel: "Skor tertinggi kelemahan PHP2Shell"
category: "Kecerdasan Buatan"
---
Pada 21 Oktober, pembangun PHP menerbitkan tampalan segera untuk dua kelemahan keselamatan kritikal dalam enjin teras bahasa itu. Kelemahan yang dinamakan "PHP2Shell" dan menerima nombor CVE-2026-109618 dan CVE-2026-109619 itu ditemui dengan bantuan alat kecerdasan buatan.

## Apa yang berlaku?

Menurut Fortune, firma ujian keselamatan kecerdasan buatan Calif menemui bahagian pertama rantaian itu pada 1 Ogos dengan GPT-5.6 Sol; Wiz pula mengenal pasti kelemahan pertama secara bebas pada 19 Ogos dan melaporkannya kepada pasukan keselamatan PHP pada 24 Ogos. Dalam penemuan itu digunakan alat Wiz sendiri, Wiz Atlas, serta model GPT-5.6 Sol milik OpenAI dan Gemini 4 Argon milik Google.

Kelemahan ini membenarkan penyerang menjalankan kod dari jauh pada pelayan tanpa log masuk dan membocorkan data dalam memori. Menurut Wiz, hampir setiap keluaran PHP dalam sepuluh tahun terakhir, sejauh versi 5.4, terjejas. Skor keterukan tertinggi ialah 9.2 pada skala CVSS. PHP berjalan di belakang kira-kira 70 peratus laman web di dunia; WordPress sahaja mengurus kira-kira 40 peratus laman. Menurut berita Fortune yang dikemas kini, kelemahan itu mula dieksploitasi secara meluas selepas tampalan dikeluarkan.

## Mengapa ini penting?

Ini salah satu contoh paling nyata bahawa kecerdasan buatan dalam penyelidikan keselamatan kini bukan sekadar pembantu, tetapi boleh menjadi pihak yang membuat penemuan. Tetapi alat yang sama berada di tangan penyerang, dan jarak antara tampalan dikeluarkan dan eksploitasi bermula semakin pendek. Setiap pemilik laman yang menggunakan PHP perlu mengemas kini pelayannya serta-merta. Dalam gambaran yang lebih luas, pepijat tersembunyi dalam kod lama internet yang berjalan berdekad-dekad boleh terdedah dengan jauh lebih pantas. Kisah atur cara pertama yang berkeliaran sendiri dalam rangkaian telah kami ceritakan dalam [artikel Creeper](/yazi/creeper-ilk-virus-zararsizdi/).
