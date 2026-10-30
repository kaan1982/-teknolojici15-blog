---
title: "\"Virus\" Komputer Pertama, Creeper, Tidak Menghapus Apa Pun"
excerpt: "Creeper yang berkeliaran di ARPANET pada 1971 tidak menyentuh data apa pun, hanya menulis tantangan di layar. Untuk menangkapnya, antivirus pertama, Reaper, ditulis."
hook: "Virus pertama tidak menghapus apa pun!"
fact: "1971"
factLabel: "Creeper ditulis di BBN"
category: "Komputer"
---
Mendengar "virus komputer", yang terlintas adalah sesuatu yang menghapus berkas, menyandera data, atau mengunci layar. Padahal program yang di banyak sumber disebut "virus pertama" tidak melakukan satu pun dari itu. Yang ia lakukan hanyalah menulis tantangan kecil di layar lalu berpindah ke komputer berikutnya.

Namanya Creeper, yang berarti "perayap".

## 1971, BBN, dan ARPANET

Creeper ditulis pada 1971 oleh Bob Thomas sebagai program percobaan di perusahaan BBN (Bolt Beranek and Newman) di Massachusetts. BBN adalah perusahaan yang berperan kunci dalam membangun ARPANET, yang dianggap leluhur internet.

Program ini berkeliaran di antara komputer induk DEC PDP-10 yang terhubung ke ARPANET dan menjalankan sistem operasi TENEX. Menurut Wikipedia, jumlah sistem yang menjalankan TENEX di ARPANET saat itu adalah 28, artinya itulah jumlah maksimum komputer yang dapat dijangkau Creeper.

Kepentingan Bob Thomas yang sebenarnya bukan kejahatan, melainkan menjawab satu pertanyaan: dapatkah sebuah program berpindah sendiri dari satu mesin ke mesin lain di jaringan?

## Satu kalimat di layar

Ketika Creeper tiba di sebuah mesin, ia mencetak pesan berikut di teletype (terminal bercetak):

"I'M THE CREEPER : CATCH ME IF YOU CAN"

Artinya: "Akulah Creeper: tangkap aku kalau bisa." Hanya itu. Ia tidak menghapus berkas apa pun dan tidak merusak data apa pun. Wikipedia menyebutkan bahwa para operator bekerja sama dalam percobaan ini dan tidak ada dampak tak diinginkan yang dilaporkan.

Versi pertamanya bahkan belum menggandakan diri: saat berpindah dari satu mesin ke mesin lain, ia berpindah tanpa meninggalkan salinan. Kemudian Ray Tomlinson, yang dikenal sebagai penemu email, mengubah program itu sehingga menggandakan dirinya ke mesin lain. Versi yang memperbanyak diri ini dianggap sebagai cacing (worm) komputer pertama yang diakui secara umum.

## Virus atau cacing?

Di sini perlu koreksi kecil tetapi penting. Secara teknis Creeper bukan virus, melainkan cacing. Virus menyebar dengan menempel pada program atau berkas lain; cacing bergerak sendiri melalui jaringan. Creeper masuk golongan kedua. Meski begitu, banyak publikasi menyebutnya "virus komputer pertama di dunia"; kutipan Guardian yang dimuat Wikipedia pun memakai ungkapan persis seperti itu. Versi populer dari konsep ini memang begitu, tetapi label teknis yang benar adalah "cacing pertama".

Istilah "virus komputer" sendiri baru lahir 12 tahun setelah Creeper. Menurut tulisan WeLiveSecurity dari ESET, Fred Cohen, mahasiswa di University of Southern California, pada 3 November 1983 menulis program yang menyebarkan dirinya; dosennya, Len Adleman, mengusulkan istilah itu dengan menganalogikan penyebaran mirip "infeksi" tersebut dengan virus dalam biologi. Cohen menyiapkan program itu di VAX 11/750 yang menjalankan Unix, dengan pengerjaan sekitar delapan jam.

> **Tahukah kamu?** Ray Tomlinson, penemu email yang membawa tanda @ ke dalam alamat, juga pencipta program yang dianggap antivirus pertama. Jadi alat favorit internet dan "petugas kebersihan" pertamanya ditulis oleh orang yang sama.

## Reaper: antivirus pertama

Begitu ada program yang menggandakan diri di jaringan, muncul pula kebutuhan akan sesuatu yang menghentikannya. Pada 1972 Ray Tomlinson menulis program bernama Reaper ("Pemanen"). Reaper juga berkeliaran di ARPANET dan menghapus Creeper di tempat mana pun ia menemukannya. Wikipedia mendeskripsikannya sebagai perangkat lunak antivirus pertama.

Ada ironi yang manis dalam kisah ini: antivirus pertama di dunia sebenarnya juga program yang berkeliaran sendiri di jaringan. Artinya, untuk menangkap sebuah "cacing", ditulislah "cacing" yang lain.

| Dulu | Sekarang |
|---|---|
| 1971: paling banyak 28 mesin TENEX | Miliaran perangkat terhubung |
| Satu kalimat bercanda di layar | Ransomware, pencurian data |
| Reaper: petugas kebersihan dengan satu sasaran | Perangkat lunak keamanan yang terus diperbarui |

## Bayangan panjang sebuah percobaan polos

Creeper tidak berbahaya, tetapi ia membuka satu pintu: jika sebuah program dapat menyebar sendiri lewat jaringan, orang lain bisa memakai kekuatan itu untuk tujuan jahat. Dalam dekade-dekade berikutnya, persis itulah yang terjadi, dan kata "virus", "cacing", dan "antivirus" masuk ke bahasa sehari-hari kita.

Hari ini, jika seorang peneliti keamanan melepas percobaan serupa ke internet tanpa izin, kemungkinan besar ia akan berada dalam masalah serius. ARPANET tahun 1971 adalah komunitas kecil peneliti yang saling kenal, dan percobaan itu dijalankan dengan kerja sama para operator, seperti dicatat Wikipedia.

Namun titik awalnya bukan serangan, melainkan rasa ingin tahu. Seorang insinyur bertanya "kira-kira bisa tidak, ya?" dan menjawabnya dengan satu kalimat di layar.

Menurutmu, seandainya Creeper ditulis hari ini, apakah ia dianggap percobaan yang tidak berbahaya atau pelanggaran keamanan?
