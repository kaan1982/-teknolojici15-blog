---
title: "Keamanan skill: semua yang perlu kamu baca sebelum memasang"
excerpt: "Skill dapat menjalankan kode dan menarik instruksi dari sumber luar. Panduan tentang sumber tepercaya, pemeriksaan SKILL.md dan skrip, hak akses minimum, dan kunci rahasia."
hook: "Memasang skill berarti memasang perangkat lunak"
fact: "13,4%"
factLabel: "Persentase skill dengan celah kritis (Snyk, 2026)"
category: "Kecerdasan Buatan"
---
Hal yang membuat skill begitu kuat juga yang membuatnya berisiko: sebuah skill bisa membawa bukan hanya teks, tetapi juga kode yang dapat dijalankan. Ketika agen memuat skill itu, ia mengikuti instruksi di dalamnya seperti instruksinya sendiri dan dapat menjalankan skripnya. Karena itu saran dokumentasi Claude dapat diringkas dalam satu kalimat: perlakukan pemasangan skill seperti memasang perangkat lunak.

## Apa kata sumber resmi?

Bagian keamanan di dokumentasi Claude cukup lugas. Ia menyarankan memakai skill hanya dari sumber tepercaya, yaitu yang kamu tulis sendiri atau yang berasal dari Anthropic. Jika kamu terpaksa memakai skill dari sumber yang tidak dikenal, ia meminta kamu "sangat berhati-hati" dan mengauditnya dari awal sampai akhir sebelum dipakai.

Artikel rekayasa Anthropic sejalan: untuk skill dari sumber yang kurang tepercaya, ia menyarankan memeriksa berkas yang dikemas, terutama dependensi kode dan skrip, serta memeriksa instruksi yang menyuruh terhubung ke jaringan luar. Dokumentasi juga secara khusus menekankan satu risiko: skill yang menarik data dari alamat eksternal berbahaya, karena konten yang ditarik dapat memuat instruksi berniat jahat.

## Apa yang terjadi di lapangan?

Peringatan ini bukan teori. Perusahaan keamanan Snyk, dalam penelitian "ToxicSkills" yang terbit pada 5 Februari 2026, memindai 3.984 skill dari ClawHub dan skills.sh. Hasilnya:

| Temuan | Jumlah |
|---|---|
| Skill yang dipindai | 3.984 |
| Dengan setidaknya satu masalah keamanan | 1.467 (36,82 persen) |
| Dengan setidaknya satu masalah kritis | 534 (13,4 persen) |
| Muatan berbahaya yang terverifikasi | 76 |

Menurut laporan, data skills.sh hanya mencakup 100 skill terpilih teratas situs itu, sedangkan angka pasar penuhnya untuk ClawHub. Jenis serangan yang terlihat meliputi instruksi pemasangan yang mengarahkan pengguna mengunduh dan menjalankan perangkat lunak tak tepercaya, perintah tersamar (disamarkan dengan Base64 atau Unicode) yang mengirim kredensial kepada penyerang, serta upaya mematikan pemeriksaan keamanan dan memasang pintu belakang. Pada 91 persen skill berbahaya yang terverifikasi, injeksi prompt (prompt injection) digunakan.

> **Tahukah kamu?** Menurut Pusat Bantuan Claude, organisasi Enterprise dapat mengaktifkan pemindaian skill yang memeriksa skill dan plugin yang diunggah dari sisi konten berbahaya. Tetapi ini jaring pengaman, bukan pengganti membaca. Cara terbaik memahami apa yang dilakukan sebuah skill adalah membuka dan membaca sendiri SKILL.md dan skripnya sebelum memasang.

## Daftar periksa sebelum memasang

Daftar praktis yang kami simpulkan dari saran di dokumentasi dan temuan di lapangan:

1. **Verifikasi sumber.** Siapa pemilik repositori? Perusahaan resmi atau pengembang terkenal, atau tiruan (typosquatting) yang sangat mirip paket yang dikenal?
2. **Baca SKILL.md dari awal sampai akhir.** Ungkapan seperti "unduh dan jalankan ini dulu", "matikan pengaturan keamanan", "kirim ke alamat ini" adalah tanda bahaya.
3. **Periksa folder scripts/.** Jika ada baris yang tak bisa kamu baca, tersamar, atau dikodekan dengan Base64, jangan pasang.
4. **Periksa tautan eksternal.** Jika skill menarik instruksi atau data dari alamat web, ingat bahwa konten itu bisa berubah kapan saja.
5. **Pasang yang kamu butuhkan.** Memilih skill satu per satu alih-alih "pasang semua" mengecilkan konteks sekaligus permukaan serangan.

## Hak akses minimum dan kunci rahasia

Tempat skill berjalan juga penting. Menurut dokumentasi Claude, di lingkungan Claude API skill tidak punya akses jaringan dan tidak bisa memasang paket saat berjalan. Di claude.ai, akses jaringan bisa penuh, sebagian, atau mati menurut pengaturan pengguna dan administrator. Di Claude Code, skill punya akses jaringan sebanyak program mana pun di komputermu. Artinya skill yang kamu pasang di agen lokal bekerja dengan wewenangmu.

Karena itu prinsip hak akses minimum sangat penting. Di Claude Code, kolom allowed-tools pada frontmatter sebuah skill memungkinkan alat tertentu dipakai tanpa meminta izin ketika skill itu dipanggil. Menurut dokumentasi, izin ini direset pada pesan berikutnya. Meski begitu, jika kamu melihat izin yang luas pada skill buatan orang lain, kebiasaan yang baik adalah tidak memasangnya tanpa menyetujuinya dengan sadar.

Untuk kunci rahasia, aturannya sederhana: jangan pernah menulis kunci API, kata sandi, dan token akses ke SKILL.md atau folder skill. Ketika kamu membagikan skill atau mengirimnya ke repositori, semua yang ada di folder itu ikut. Simpan kunci di variabel lingkungan atau di metode penyimpanan kredensial aman milik alat yang kamu pakai, dan cukup jelaskan kepada skill cara mengaksesnya.

Per Oktober 2026, ekosistem skill tumbuh sangat cepat, dan pertumbuhan ini mengingatkan pada masalah keamanan di tahun-tahun awal toko aplikasi. Kabar baiknya: membaca sebuah skill jauh lebih mudah daripada membaca kode sumber sebuah aplikasi, karena sebagian besarnya teks biasa.

Apakah kamu membuka dan membaca isi sebuah skill sebelum memasangnya, atau kamu mempercayai jumlah bintang dan angka unduhan?
