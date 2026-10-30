---
title: "Keselamatan skill: semua yang perlu anda baca sebelum memasang"
excerpt: "Skill boleh menjalankan kod dan menarik arahan daripada sumber luar. Panduan tentang sumber yang dipercayai, semakan SKILL.md dan skrip, kuasa minimum dan kunci rahsia."
hook: "Memasang skill ialah memasang perisian"
fact: "13.4%"
factLabel: "Kadar skill dengan kelemahan kritikal (Snyk, 2026)"
category: "Kecerdasan Buatan"
---

Apa yang menjadikan skill begitu berkuasa juga menjadikannya berisiko: skill bukan sahaja membawa teks, tetapi juga boleh membawa kod yang boleh dijalankan. Apabila ejen memuatkan skill itu, ia mengikuti arahan di dalamnya seperti arahannya sendiri dan boleh menjalankan skripnya. Oleh sebab itu cadangan dokumentasi Claude boleh diringkaskan dalam satu ayat: anggaplah memasang skill seperti memasang perisian.

## Apa kata sumber rasmi?

Bahagian keselamatan dalam dokumentasi Claude agak terus terang. Ia mencadangkan anda menggunakan skill hanya daripada sumber yang dipercayai, iaitu yang anda tulis sendiri atau yang anda dapat daripada Anthropic. Jika anda terpaksa menggunakan skill daripada sumber yang tidak diketahui, ia meminta anda "sangat berhati-hati" dan mengauditnya dari awal hingga akhir sebelum menggunakannya.

Tulisan kejuruteraan Anthropic sejajar: untuk skill daripada sumber yang kurang dipercayai, ia mencadangkan memeriksa fail yang dibungkus, terutamanya kebergantungan kod dan skrip, serta menyemak arahan yang meminta sambungan ke rangkaian luar. Dokumen itu juga menekankan satu risiko: skill yang menarik data daripada alamat luar adalah berbahaya kerana kandungan yang ditarik boleh mengandungi arahan berniat jahat.

## Apa yang berlaku di lapangan?

Amaran ini bukan teori. Syarikat keselamatan Snyk, dalam kajian "ToxicSkills" yang diterbitkan pada 5 Februari 2026, mengimbas 3,984 skill daripada ClawHub dan skills.sh. Keputusannya:

| Penemuan | Bilangan |
|---|---|
| Skill yang diimbas | 3,984 |
| Mempunyai sekurang-kurangnya satu masalah keselamatan | 1,467 (36.82 peratus) |
| Mengandungi sekurang-kurangnya satu masalah kritikal | 534 (13.4 peratus) |
| Muatan berniat jahat yang disahkan | 76 |

Menurut laporan, data skills.sh hanya meliputi 100 skill pilihan teratas laman itu, manakala angka pasaran penuh adalah untuk ClawHub. Antara jenis serangan yang dilihat ialah arahan pemasangan yang mengarahkan pengguna memuat turun dan menjalankan perisian yang tidak dipercayai, arahan tersembunyi (disamarkan dengan Base64 atau Unicode) yang menghantar kelayakan kepada penyerang, serta percubaan mematikan semakan keselamatan dan memasang pintu belakang. Dalam 91 peratus skill berniat jahat yang disahkan, suntikan gesaan (prompt injection) digunakan.

> **Tahukah anda?** Menurut Pusat Bantuan Claude, organisasi Enterprise boleh menghidupkan imbasan skill yang memeriksa skill dan pemalam yang dimuat naik untuk kandungan berniat jahat. Tetapi ini jaring keselamatan, bukan pengganti membaca. Cara terbaik untuk memahami apa yang dilakukan skill ialah membuka dan membaca SKILL.md serta skripnya sendiri sebelum memasangnya.

## Senarai semak sebelum memasang

Senarai praktikal yang kami simpulkan daripada cadangan dokumentasi dan penemuan di lapangan:

1. **Sahkan sumber.** Repositori ini milik siapa? Syarikat rasmi atau pembangun yang dikenali, atau salinan yang sangat menyerupai pakej yang terkenal (typosquatting)?
2. **Baca SKILL.md dari awal hingga akhir.** Ungkapan seperti "muat turun dan jalankan ini dahulu", "matikan tetapan keselamatan", "hantar ke alamat ini" ialah tanda amaran.
3. **Periksa folder scripts/.** Jika ada baris yang tidak dapat anda baca, tersembunyi atau dikodkan dengan Base64, jangan pasang.
4. **Semak pautan luar.** Jika skill menarik arahan atau data daripada alamat web, ingat bahawa kandungan itu boleh berubah pada bila-bila masa.
5. **Pasang yang anda perlukan.** Memilih skill satu persatu dan bukannya "pasang semua" mengecilkan konteks dan permukaan serangan.

## Kuasa minimum dan kunci rahsia

Di mana skill berjalan juga penting. Menurut dokumentasi Claude, dalam persekitaran Claude API skill tiada akses rangkaian dan tidak boleh memasang pakej semasa berjalan. Di claude.ai, akses rangkaian boleh penuh, separa atau dimatikan mengikut tetapan pengguna dan pentadbir. Dalam Claude Code pula, skill mempunyai akses rangkaian sebanyak mana-mana atur cara pada komputer anda. Maksudnya, skill yang anda pasang pada ejen tempatan berjalan dengan kuasa anda.

Oleh sebab itu prinsip kuasa minimum adalah kritikal. Dalam Claude Code, medan allowed-tools dalam frontmatter skill membolehkan alat tertentu digunakan tanpa meminta kebenaran apabila skill itu dipanggil. Menurut dokumentasi, kebenaran ini ditetapkan semula pada mesej anda yang seterusnya. Walaupun begitu, jika anda melihat kebenaran yang luas dalam skill yang ditulis orang lain, tabiat yang baik ialah tidak memasangnya tanpa meluluskannya dengan sedar.

Peraturan untuk kunci rahsia mudah: jangan sekali-kali menulis kunci API, kata laluan dan token akses dalam SKILL.md atau folder skill. Apabila anda berkongsi skill atau menghantarnya ke repositori, semua yang ada dalam folder itu turut pergi. Simpan kunci dalam pemboleh ubah persekitaran atau kaedah penyimpanan kelayakan selamat alat yang anda gunakan, dan hanya terangkan kepada skill cara mengaksesnya.

Setakat Oktober 2026, ekosistem skill berkembang dengan sangat pantas dan pertumbuhan ini mengingatkan kita kepada masalah keselamatan pada tahun-tahun awal kedai aplikasi. Berita baiknya: membaca skill jauh lebih mudah daripada membaca kod sumber sesebuah aplikasi kerana sebahagian besarnya teks biasa.

Adakah anda membuka dan membaca isi skill sebelum memasangnya, atau anda mempercayai bilangan bintang dan angka muat turun?
