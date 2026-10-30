---
title: "Masalah 2038: Mengapa Sebagian Komputer Akan Kembali ke Tahun 1901?"
excerpt: "Waktu Unix 32 bit akan habis pada 19 Januari 2038 pukul 03:14:07 UTC, dan sistem lama bisa mengira tanggalnya 13 Desember 1901. Apa itu masalah 2038 dan bagaimana mengatasinya?"
hook: "Komputer akan kembali ke 1901!"
fact: "03:14:07"
factLabel: "19 Januari 2038, UTC: batas 32 bit"
category: "Komputer"
---
Menjelang tahun 2000, dunia ramai membicarakan bug komputer bernama "Y2K". Sekarang giliran tanggal lain: 19 Januari 2038. Pada hari itu, begitu jam melewati pukul 03:14:07 (UTC) satu detik, sebagian komputer lama bisa tiba-tiba memundurkan kalendernya ke tahun 1901. Ini bukan skenario fiksi ilmiah, melainkan masalah matematika sederhana.

## Bagaimana komputer menghitung waktu?

Unix dan banyak sistem turunannya tidak menyimpan waktu sebagai jam atau kalender, melainkan sebagai satu angka saja. Angka itu adalah jumlah detik yang telah berlalu sejak tengah malam 1 Januari 1970 (UTC). Inilah yang disebut "waktu Unix".

Masalahnya, di banyak sistem lama angka ini disimpan sebagai bilangan bulat 32 bit bertanda. Nilai terbesar yang bisa ditampung bilangan 32 bit bertanda adalah 2.147.483.647, yaitu 2 pangkat 31 dikurangi 1. Sebanyak itu detik setara dengan sekitar 68 tahun. "Bertanda" berarti satu bit disisihkan untuk menunjukkan apakah angkanya positif atau negatif. Karena itu bukan seluruh 32 bit, melainkan hanya 31 bit yang dipakai untuk besaran angka.

Tambahkan 68 tahun ke 1970 dan kita sampai di 2038. Hitungannya tepat menunjuk 19 Januari 2038, pukul 03:14:07 UTC.

## Apa yang terjadi satu detik kemudian?

Satu detik setelah penghitung mencapai nilai maksimum, ia meluap. Bayangkan odometer mekanis lama di mobil: setelah 999.999 ia kembali ke 000.000. Di sini terjadi hal serupa, tetapi karena angkanya bertanda, nilainya berbalik menjadi bilangan negatif yang sangat besar.

Sistem yang terdampak membaca angka negatif itu sebagai detik yang dihitung mundur dari 1970. Hasilnya: tanggal tampil sebagai 13 Desember 1901, pukul 20:45:52 (UTC). Komputer yang tiba-tiba mundur 136 tahun bisa mulai bekerja dengan salah: sertifikat, pengatur waktu, catatan log, dan perbandingan tanggal semuanya bisa kacau.

> **Tahukah kamu?** Masalah ini sudah muncul di beberapa perangkat lunak tanpa menunggu 2038. Menurut Wikipedia, pada 2006 perangkat lunak AOLserver mogok karena nilai batas waktu (timeout) diatur satu miliar detik ke depan sehingga melewati batas 2038. Artinya, setiap program yang menghitung "tanggal di masa depan" bisa menabrak batas itu sekarang juga. Batas 32 bit serupa juga menimbulkan masalah di Microsoft Exchange pada 2022: nomor versi sebuah pembaruan terbaca seperti stempel waktu dan melampaui batas, sehingga fungsi pemindaian malware berhenti bekerja.

## Siapa yang berisiko?

Sebagian besar ponsel dan komputer modern yang kamu pakai sehari-hari kini menggunakan nilai waktu 64 bit. Risiko sebenarnya ada pada sistem yang bertahun-tahun berjalan tanpa pembaruan. Wikipedia secara khusus menyoroti sistem lama (legacy) dan sistem tertanam: pengendali industri, sebagian perangkat jaringan, sistem di dalam kendaraan, dan mesin-mesin lain yang dipasang sekali lalu dilupakan.

Karena perangkat semacam ini jarang diperbarui, saat 2038 tiba mungkin masih ada komponen di dalamnya yang menghitung waktu dengan 32 bit.

| Waktu 32 bit bertanda | Waktu 64 bit bertanda |
|---|---|
| Nilai maksimum 2.147.483.647 | Rentang yang jauh lebih besar |
| Batas: 19 Januari 2038 | Batas: sekitar 292 miliar tahun lagi |
| Sistem lama dan sistem tertanam | Sistem operasi modern |

## Solusinya: penghitung yang lebih besar

Kesulitannya di sini lebih bersifat praktis ketimbang teknis. Mengubah ukuran angka penyimpan waktu bisa memengaruhi setiap program yang memakainya, setiap format berkas, dan setiap kolom basis data. Memperbaiki satu baris itu mudah; menemukan dan memperbarui seluruh perangkat lunak di dalam sebuah perangkat bisa memakan waktu bertahun-tahun.


Solusinya sederhana secara konsep: menyimpan waktu sebagai bilangan 64 bit bertanda. Menurut Wikipedia, ini menggeser momen peluapan sekitar 292 miliar tahun ke depan. Artinya jauh melampaui usia alam semesta saat ini.

Peralihan ini sudah berlangsung bertahun-tahun. Menurut berita Phoronix pada Januari 2020, Linux 5.6 disiapkan sebagai rilis kernel utama pertama yang bisa meletakkan dasar agar sistem 32 bit tetap berjalan setelah 2038. Wikipedia mencatat bahwa Linux 5.6, yang dirilis pada 2020, menambahkan dukungan waktu 64 bit pada arsitektur 32 bit. Agar ini berfungsi, aplikasi juga perlu dikompilasi ulang dengan waktu 64 bit.

Usulan solusi lain adalah membuat angkanya tidak bertanda (unsigned). Namun itu hanya menggeser batasnya ke 2106 dan merusak penanganan tanggal sebelum 1970. Karena itu jalan yang sebenarnya dianggap adalah beralih ke 64 bit.

Y2K tidak berubah menjadi bencana besar karena orang-orang bekerja jauh-jauh hari. Menurutmu, apakah kepahlawanan senyap yang sama akan terulang di tahun-tahun yang tersisa menuju 2038?
