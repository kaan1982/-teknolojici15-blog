---
title: "Komputer Apollo 11: apakah sebenarnya maksud \"4 KB memori\"?"
excerpt: "Komputer yang mendaratkan Apollo 11 di Bulan mempunyai kira-kira 4 KB RAM. Atur caranya pula tersimpan dalam ROM kira-kira 72 KB yang ditenun dengan tali."
hook: "Mereka mendarat di Bulan dengan 4 KB RAM"
fact: "4 KB"
factLabel: "Memori boleh padam (RAM) AGC"
category: "Komputer"
---
Anda pasti pernah mendengar ayat "memori komputer yang pergi ke Bulan lebih kecil daripada sekeping gambar". Dalam video pun kami menyebut "4 KB". Angka ini betul, tetapi kurang lengkap jika berdiri sendiri. Sebabnya, Komputer Panduan Apollo (Apollo Guidance Computer, ringkasnya AGC) sebenarnya mempunyai dua memori berasingan, dan "4 KB" hanya menerangkan yang lebih kecil antara keduanya.

Marilah kita bongkar angka yang terkenal ini bersama-sama.

## Apakah sebenarnya yang diterangkan oleh "4 KB"?

Memori kerja AGC, iaitu memori boleh padam yang hari ini kita panggil RAM, terdiri daripada 2,048 "perkataan". Setiap perkataan panjangnya 16 bit: 15 bit data dan 1 bit pariti untuk semakan ralat. Jika satu perkataan dikira 2 bait, 2,048 perkataan bersamaan kira-kira 4 KB. Maksudnya, "4 KB" ialah saiz kertas conteng yang digunakan komputer itu untuk membuat pengiraan semasa penerbangan.

Atur cara tidak tersimpan dalam memori ini. Di situ disimpan kedudukan dan kelajuan semasa, pembilang, dan hasil perantaraan yang dipindahkan antara tugas. Memori ini dibuat daripada gelung kecil yang dipanggil teras magnetik (core) dan mengekalkan kandungannya walaupun bekalan elektrik terputus.

Atur cara pula berada di tempat yang sama sekali berbeza: dalam memori tetap sebanyak 36,864 perkataan, iaitu ROM. Dengan pengiraan yang sama, ini kira-kira 72 KB. Ringkasnya, ayat yang lebih tepat ialah: Apollo 11 mendarat di Bulan dengan kira-kira 4 KB RAM dan kira-kira 72 KB ROM.

## Atur cara ditenun dengan tali

ROM AGC ialah memori "core rope" (tali teras) dan ia benar-benar ditenun dengan tangan. Jika seutas wayar melalui dalam sebuah teras magnetik, bit itu bernilai 1; jika wayar melencong melepasi teras, bit itu bernilai 0. Dengan kata lain, perisian diterjemahkan menjadi perkakasan dengan ditenun seperti kain.

Kerja ini dilakukan oleh pekerja Raytheon di Waltham, Massachusetts. Menurut kajian terperinci Ken Shirriff, sebahagian besar mereka yang diambil bekerja ialah wanita dari sektor tekstil tempatan kerana kemahiran menjahit mereka. Menenun satu modul memakan masa kira-kira 8 minggu dan berharga 15,000 dolar. Setiap modul memuatkan 6 ribu perkataan dan enam modul membentuk jumlah 36,864 perkataan.

Kesan sampingannya penting: perisian terpaksa dibekukan beberapa bulan sebelum penerbangan. Tiada perkara seperti tampalan saat akhir, kerana membetulkan satu pepijat bermakna menenun semula.

> **Tahukah anda?** Apollo 11 bukan membawa satu tetapi dua AGC: satu dalam Modul Perintah dan satu lagi dalam Modul Bulan. Setiap satu seberat kira-kira 32 kg dan berjalan dengan jam kristal 2.048 MHz.

## Penggera yang berbunyi beberapa minit sebelum pendaratan

Semasa pendaratan pada 20 Julai 1969, komputer Modul Bulan memaparkan penggera 1202 dahulu, kemudian 1201. Kedua-duanya bermaksud "limpahan pelaksana": komputer diberi kerja lebih daripada yang mampu ditanggungnya. Menurut huraian terperinci dalam Wikipedia, puncanya ialah isyarat palsu daripada radar pertemuan yang dibiarkan dalam keadaan menunggu, yang menyibukkan pemproses. Masalah itu bukan ralat pengaturcaraan, bukan kesilapan juruterbang dan bukan kerosakan perkakasan. Pada asasnya ia berpunca daripada kecacatan dalam dokumen antara muka antara dua sistem.

Yang paling menarik ialah apa yang dilakukan perisian dalam keadaan ini. AGC berjalan dengan penjadual berasaskan keutamaan. Apabila beban berlebihan tiba, ia memulakan semula dirinya dengan pantas, meninggalkan kerja berkeutamaan rendah dan meneruskan tugas kritikal seperti mengawal pendaratan. Maksudnya, memori kecil yang terkenal itu mencukupi kerana diurus dengan bijak.

Ada satu lagi butiran yang menyukarkan keadaan. Arahan 1668 yang dimasukkan Buzz Aldrin ke dalam komputer semasa pendaratan menambah beban pada pemproses yang sudah tertekan dan mencetuskan satu lagi penggera 1202. Perisian mengatasinya dengan cara yang sama dan Eagle mendarat di permukaan Bulan.

Perisian itu dibangunkan di Makmal Instrumentasi MIT. Perisian Modul Perintah (COLOSSUS) dan perisian Modul Bulan (LUMINARY) diterajui oleh pasukan yang berbeza. Pelaksanaan butirannya pula berada di tangan pasukan yang diketuai oleh Margaret Hamilton.

## Dahulu / sekarang

| Komputer Panduan Apollo (1969) | Telefon bimbit hari ini |
|---|---|
| Kira-kira 4 KB memori boleh padam (RAM) | RAM berbilang gigabait |
| Kira-kira 72 KB ROM yang ditenun dengan tangan | Storan beratus gigabait |
| Berbulan-bulan menenun untuk kemas kini perisian | Kemas kini yang turun sendiri pada waktu malam |
| Kira-kira 32 kg | Muat dalam tapak tangan |

## Pengajaran sebenar angka itu

Angka "4 KB" selalunya diceritakan sebagai "lihat betapa primitifnya". Hakikatnya, intipati kisah ini bertentangan: memori yang terhad memaksa jurutera memperhitungkan setiap bit. Itulah sebabnya lahirnya perisian yang mengutamakan tugas dan memulihkan diri apabila terbeban.

Hari ini peranti dalam poket kita mempunyai memori yang tidak dapat dibandingkan banyaknya, tetapi kebanyakan aplikasi tidak ditulis dengan teliti sebegitu. Satu kemas kini aplikasi pemesejan pun boleh jadi berkali ganda lebih besar daripada keseluruhan perisian Apollo.

Pada pendapat anda, adakah had melahirkan jurutera yang lebih baik, atau kelimpahan?
