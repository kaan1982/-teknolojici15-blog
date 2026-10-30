---
title: "Komputer Apollo 11: Apa Sebenarnya Arti \"Memori 4 KB\"?"
excerpt: "Komputer yang mendaratkan Apollo 11 di Bulan hanya punya sekitar 4 KB RAM. Programnya tersimpan di ROM sekitar 72 KB yang ditenun dengan tangan."
hook: "Mereka mendarat di Bulan dengan RAM 4 KB"
fact: "4 KB"
factLabel: "Memori yang dapat dihapus (RAM) milik AGC"
category: "Komputer"
---
Kamu pasti pernah mendengar kalimat "memori komputer yang pergi ke Bulan lebih kecil daripada sebuah foto". Di video, kami juga menyebut "4 KB". Angka itu benar, tetapi kalau berdiri sendiri, ceritanya kurang lengkap. Sebab Apollo Guidance Computer (disingkat AGC) sebenarnya punya dua memori yang terpisah, dan "4 KB" hanya menggambarkan yang lebih kecil di antara keduanya.

Mari kita bongkar angka terkenal ini bersama-sama.

## Apa sebenarnya yang digambarkan "4 KB"?

Memori kerja AGC, yaitu memori yang dapat dihapus yang sekarang kita sebut RAM, terdiri dari 2.048 "word". Setiap word panjangnya 16 bit: 15 bit data dan 1 bit paritas untuk pemeriksaan kesalahan. Kalau satu word dihitung 2 byte, 2.048 word setara dengan sekitar 4 KB. Jadi "4 KB" adalah ukuran kertas corat-coret yang dipakai komputer saat menghitung selama penerbangan.

Program tidak disimpan di memori ini. Di sana tersimpan posisi saat itu, kecepatan, penghitung, dan hasil antara yang dipindahkan di antara berbagai tugas. Memori ini dibuat dari cincin-cincin mungil bernama inti magnetik (core) dan isinya tetap terjaga walaupun listrik padam.

Program berada di tempat yang sama sekali berbeda: di memori tetap berukuran 36.864 word, yaitu ROM. Dengan hitungan yang sama, ini sekitar 72 KB. Singkatnya, kalimat yang lebih tepat adalah: Apollo 11 mendarat di Bulan dengan sekitar 4 KB RAM dan sekitar 72 KB ROM.

## Programnya ditenun

ROM milik AGC adalah memori "core rope" (tali inti) dan secara harfiah ditenun dengan tangan. Jika sebuah kawat melewati bagian dalam inti magnetik, bit itu bernilai 1; jika kawat melingkar di sisi luar inti, bernilai 0. Dengan kata lain, perangkat lunak diubah menjadi perangkat keras dengan cara ditenun seperti kain.

Pekerjaan ini dilakukan para karyawan Raytheon di Waltham, Massachusetts. Menurut kajian rinci Ken Shirriff, sebagian besar pekerja yang direkrut adalah perempuan dari industri tekstil setempat, dipilih karena keterampilan menjahit mereka. Menenun satu modul memakan waktu sekitar 8 minggu dan menelan biaya 15.000 dolar. Setiap modul menampung 6 ribu word, dan enam modul membentuk total 36.864 word.

Efek sampingnya penting: perangkat lunak harus dibekukan berbulan-bulan sebelum penerbangan. Tidak ada yang namanya tambalan menit terakhir, karena memperbaiki satu bug berarti menenun ulang.

> **Tahukah kamu?** Apollo 11 tidak membawa satu, melainkan dua AGC: satu di Modul Komando dan satu di Modul Bulan. Masing-masing beratnya sekitar 32 kg dan bekerja dengan jam kristal 2,048 MHz.

## Alarm beberapa menit sebelum pendaratan

Saat pendaratan pada 20 Juli 1969, komputer Modul Bulan menampilkan alarm 1202 dan kemudian alarm 1201. Keduanya berarti "luapan eksekutif": komputer diberi pekerjaan lebih banyak daripada yang sanggup ditanganinya. Menurut uraian rinci di Wikipedia, penyebabnya adalah sinyal palsu dari radar pertemuan (rendezvous) yang sengaja dibiarkan siaga, yang membuat prosesor sibuk. Masalahnya bukan kesalahan pemrograman, bukan kesalahan pilot, dan bukan kerusakan perangkat keras. Akar masalahnya adalah cacat pada dokumen antarmuka di antara dua sistem.

Yang benar-benar menarik adalah apa yang dilakukan perangkat lunak dalam situasi ini. AGC bekerja dengan penjadwal berbasis prioritas. Ketika kelebihan beban, ia dengan cepat memulai ulang dirinya, membuang pekerjaan berprioritas rendah, dan melanjutkan tugas-tugas krusial seperti mengendalikan pendaratan. Dengan kata lain, memori kecil yang terkenal itu cukup karena dikelola dengan cerdas.

Ada satu rincian lagi yang membuat keadaan makin sulit. Perintah 1668 yang dimasukkan Buzz Aldrin ke komputer saat penurunan menambah beban pada prosesor yang sudah kewalahan dan memicu satu alarm 1202 lagi. Perangkat lunak melewatinya dengan cara yang sama, dan Eagle pun mendarat di permukaan Bulan.

Perangkat lunak itu dikembangkan di MIT Instrumentation Laboratory. Perangkat lunak Modul Komando (COLOSSUS) dan Modul Bulan (LUMINARY) ditangani oleh tim yang berbeda. Penerapan rinciannya menjadi tugas tim yang dipimpin Margaret Hamilton.

## Dulu dan sekarang

| Apollo Guidance Computer (1969) | Ponsel masa kini |
|---|---|
| Sekitar 4 KB memori yang dapat dihapus (RAM) | RAM berukuran gigabyte |
| Sekitar 72 KB ROM tenunan tangan | Penyimpanan ratusan gigabyte |
| Berbulan-bulan menenun untuk satu pembaruan perangkat lunak | Pembaruan yang terpasang sendiri semalaman |
| Sekitar 32 kg | Muat di telapak tangan |

## Pelajaran sebenarnya dari angka itu

Angka "4 KB" sering diceritakan sebagai "lihat betapa primitifnya". Padahal inti ceritanya justru sebaliknya: memori yang terbatas memaksa para insinyur memperhitungkan setiap bit. Begitulah lahir perangkat lunak yang memprioritaskan tugas dan memulihkan dirinya saat kelebihan beban.

Perangkat di saku kita hari ini punya memori yang tak terbandingkan banyaknya, tetapi sebagian besar aplikasi tidak ditulis dengan secermat itu. Satu pembaruan aplikasi pesan saja bisa berkali-kali lipat lebih besar daripada seluruh perangkat lunak Apollo.

Menurutmu, apakah keterbatasan yang melahirkan insinyur lebih baik, atau justru kelimpahan?
