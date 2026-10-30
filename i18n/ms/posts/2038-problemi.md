---
title: "Masalah 2038: mengapa sesetengah komputer akan kembali ke tahun 1901?"
excerpt: "Masa Unix 32 bit akan tamat pada 19 Januari 2038 pukul 03:14:07 UTC dan sistem lama mungkin menyangka tarikhnya 13 Disember 1901. Apakah masalah 2038 dan bagaimana ia diselesaikan?"
hook: "Komputer akan kembali ke 1901!"
fact: "03:14:07"
factLabel: "19 Januari 2038, UTC: had 32 bit"
category: "Komputer"
---
Menjelang tahun 2000, dunia riuh membincangkan pepijat komputer bernama "Y2K". Kini giliran satu lagi tarikh: 19 Januari 2038. Pada hari itu, sebaik sahaja jam melepasi pukul 03:14:07 (UTC) sebanyak satu saat, sesetengah komputer lama boleh tiba-tiba memutar kalendarnya ke tahun 1901. Ini bukan senario fiksyen sains, tetapi masalah matematik yang mudah.

## Bagaimana komputer mengira masa?

Unix dan banyak sistem yang diwarisi daripadanya menyimpan masa bukan sebagai jam atau kalendar, tetapi sebagai satu nombor. Nombor ini ialah bilangan saat yang telah berlalu sejak tengah malam 1 Januari 1970 (UTC). Ini dipanggil "masa Unix".

Masalahnya, dalam banyak sistem lama nombor ini disimpan sebagai integer 32 bit bertanda. Nilai terbesar yang boleh dimuatkan oleh nombor 32 bit bertanda ialah 2,147,483,647, iaitu 2 kuasa 31 tolak 1. Jumlah saat ini bersamaan lebih kurang 68 tahun. "Bertanda" bermaksud satu bit diketepikan untuk menunjukkan sama ada nombor itu positif atau negatif. Oleh sebab itu, bukan kesemua 32 bit digunakan untuk magnitud, tetapi hanya 31.

Apabila 68 tahun ditambah kepada 1970, kita sampai ke 2038. Pengiraan itu tepat menunjuk kepada 19 Januari 2038, 03:14:07 UTC.

## Apa yang berlaku satu saat kemudian?

Satu saat selepas pembilang mencapai nilai maksimum, ia melimpah. Fikirkan odometer mekanikal lama pada kereta: selepas 999,999 ia berpusing kembali ke 000,000. Perkara yang sama berlaku di sini, tetapi memandangkan nombor itu bertanda, nilainya bertukar menjadi nombor negatif yang sangat besar.

Sistem yang terjejas akan mentafsirkan nombor negatif ini sebagai saat yang dikira ke belakang dari 1970. Hasilnya: tarikh dipaparkan sebagai 13 Disember 1901, pukul 20:45:52 (UTC). Komputer yang tiba-tiba terundur 136 tahun; sijil, pemasa, rekod dan perbandingan tarikh boleh mula berfungsi dengan salah.

> **Tahukah anda?** Masalah ini malah sudah muncul dalam sesetengah perisian tanpa menunggu 2038. Menurut Wikipedia, pada 2006 perisian AOLserver melepasi had 2038 dan terhenti kerana menetapkan nilai tamat masa sejuta saat ke hadapan. Jadi mana-mana atur cara yang mengira "tarikh pada masa depan" boleh terlanggar had ini sekarang juga. Had 32 bit yang serupa turut menimbulkan masalah pada Microsoft Exchange pada 2022: nombor versi sesuatu kemas kini dibaca sebagai cap masa dan apabila melepasi had, fungsi imbasan perisian hasad berhenti.

## Siapa yang berisiko?

Sebahagian besar telefon dan komputer moden yang anda gunakan setiap hari kini menggunakan nilai masa 64 bit. Risiko sebenar terletak pada sistem yang beroperasi bertahun-tahun tanpa dikemas kini. Wikipedia menonjolkan sistem lama (legacy) dan sistem terbenam: mesin yang dipasang sekali lalu dilupakan, seperti peranti kawalan industri, sesetengah peranti rangkaian dan sistem dalam kenderaan.

Memandangkan peranti sebegini jarang dikemas kini, apabila 2038 tiba, mungkin masih ada komponen di dalamnya yang mengira masa dalam 32 bit.

| Masa bertanda 32 bit | Masa bertanda 64 bit |
|---|---|
| Nilai terbesar 2,147,483,647 | Julat yang jauh lebih besar |
| Had: 19 Januari 2038 | Had: kira-kira 292 bilion tahun lagi |
| Sistem lama dan terbenam | Sistem pengendalian moden |

## Penyelesaian: pembilang yang lebih besar

Cabaran di sini bukan bersifat teknikal, tetapi lebih praktikal. Menukar saiz nombor yang menyimpan masa boleh menjejaskan setiap atur cara, setiap format fail dan setiap medan pangkalan data yang menggunakan nombor itu. Membetulkan satu baris mudah; mencari dan mengemas kini semua perisian dalam sesebuah peranti pula boleh mengambil masa bertahun-tahun.

Penyelesaiannya mudah dari segi idea: menyimpan masa dengan nombor bertanda 64 bit. Menurut Wikipedia, ini menolak saat limpahan sehingga kira-kira 292 bilion tahun lagi. Maksudnya, jauh melangkaui usia alam semesta sekarang.

Peralihan ini sudah berlangsung bertahun-tahun. Menurut berita Phoronix pada Januari 2020, Linux 5.6 sedang disediakan sebagai keluaran kernel utama pertama yang boleh menjadi asas supaya sistem 32 bit dapat berfungsi selepas 2038. Wikipedia menyatakan bahawa Linux 5.6, yang dikeluarkan pada 2020, menambah sokongan masa 64 bit pada seni bina 32 bit. Supaya ini berkesan, aplikasi juga perlu dikompil semula dengan masa 64 bit.

Satu lagi cadangan penyelesaian ialah menjadikan nombor itu tidak bertanda (unsigned). Namun ini hanya menolak had ke 2106 dan merosakkan penggunaan tarikh sebelum 1970. Oleh itu, jalan sebenar dianggap sebagai beralih ke 64 bit.

Y2K tidak menjadi malapetaka besar kerana orang bekerja lebih awal; adakah anda fikir kepahlawanan senyap yang sama akan berulang dalam tahun-tahun yang tinggal menuju 2038?
