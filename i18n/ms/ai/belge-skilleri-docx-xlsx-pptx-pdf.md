---
title: "Skill dokumen: mengajar ejen Word, Excel, PowerPoint dan PDF"
excerpt: "Apa yang dilakukan skill docx, xlsx, pptx dan pdf Anthropic, dan di mana ia berfungsi? Skill rasmi dan pembantu yang benar-benar berguna untuk penghasilan dokumen."
hook: "Laporan, jadual, pembentangan: semuanya satu skill"
fact: "4 DOKUMEN"
factLabel: "Bilangan skill dokumen siap pakai"
category: "Kecerdasan Buatan"
---

Mudah untuk berkata kepada kecerdasan buatan "sediakan laporan untuk saya". Yang sukar ialah laporan itu tiba sebagai fail Word atau Excel yang benar-benar boleh dibuka, formatnya tidak rosak dan formulanya berfungsi. Kategori skill yang pertama dan mungkin paling banyak digunakan ialah tepat ini: dokumen pejabat. Dalam artikel ini kami hanya membincangkan skill yang telah kami sahkan kewujudannya.

## Empat batu asas: docx, xlsx, pptx, pdf

Menurut dokumentasi Claude, Anthropic menawarkan empat skill dokumen siap pakai (pre-built). Ia berfungsi di belakang ciri penciptaan fail Claude dan Anthropic menerbitkan kod sumbernya dalam repositori GitHub anthropics/skills.

| Skill | Apa yang dilakukannya? (daripada huraian rasmi) |
|---|---|
| docx | Mencipta, membaca dan menyunting dokumen Word. Termasuk pemformatan dan templat |
| xlsx | Membuka dan menyunting hamparan, menambah formula dan carta, membersihkan data yang bersepah |
| pptx | Mencipta pembentangan, menyunting slaid, membaca dan menghurai kandungan .pptx |
| pdf | Mengekstrak teks dan jadual, menggabung dan memisahkan PDF, mengisi borang, menambah tera air |

Huraian dalam repositori ditulis dengan agak "gigih". Contohnya, huraian skill pptx menyatakan ia hendaklah digunakan jika fail .pptx terlibat "dalam apa jua cara" sebagai input atau output. Ini contoh rasmi bagi peraturan "huraian mencetuskan" yang kami terangkan dalam artikel sebelum ini.

## Di mana anda boleh menggunakannya?

Setakat Oktober 2026, menurut dokumentasi Claude, keempat-empat skill ini aktif dengan sendirinya semasa mencipta dokumen di claude.ai dan boleh dipanggil sebagai skill siap pakai dalam Claude API. Dalam Claude Code pula, skill dokumen siap pakai tidak datang terbina dalam. Tetapi repositori anthropics/skills boleh ditambah sebagai pasar pemalam untuk Claude Code dan pakej document-skills boleh dipasang. Menurut arahan dalam repositori, pasar ditambah dahulu dengan arahan /plugin marketplace add anthropics/skills, kemudian document-skills@anthropic-agent-skills dipasang.

Ada satu perbezaan mengenai lesen. Kebanyakan skill dalam repositori ialah sumber terbuka berlesen Apache 2.0. Tetapi empat skill dokumen dikongsi sebagai "bukan sumber terbuka, kod sumber boleh diakses" (source-available). Maksudnya, anda boleh mengkaji kod dan belajar daripadanya, tetapi sebelum mengedarkannya semula dengan bebas dalam produk anda sendiri, anda perlu membaca fail lesen.

> **Tahukah anda?** Skill pdf ialah contoh buku teks bagi pemuatan berperingkat. Menurut tulisan kejuruteraan Anthropic, arahan mengisi borang dikeluarkan daripada SKILL.md utama dan dialihkan ke fail forms.md yang berasingan. Claude hanya membaca fail ini apabila benar-benar mengisi borang. Dalam repositori, folder pdf hari ini mengandungi forms.md, reference.md dan folder scripts.

## Pembantu di sisi dokumen

Penghasilan dokumen tidak berakhir dengan format fail. Dalam repositori anthropics/skills terdapat contoh rasmi lain yang berfokus pada sisi kandungan:

- **doc-coauthoring:** Menawarkan aliran kerja langkah demi langkah untuk menulis teks berstruktur seperti spesifikasi teknikal, cadangan dan dokumen keputusan bersama-sama. Ia melalui peringkat pemindahan konteks, pembetulan berulang dan pengesahan.
- **internal-comms:** Mengumpulkan sumber untuk membantu menulis teks komunikasi dalaman seperti laporan status, kemas kini pengurusan, buletin syarikat dan Soalan Lazim dalam format yang dipilih syarikat. Terdapat juga teks contoh dalam folder.
- **brand-guidelines:** Menggunakan warna dan tipografi jenama rasmi Anthropic pada sesuatu output. Nilai sebenarnya ialah menunjukkan bagaimana anda boleh membina yang serupa untuk jenama anda sendiri.
- **theme-factory:** Mengandungi 10 tema warna dan fon siap pakai yang boleh digunakan pada slaid, dokumen, laporan atau halaman HTML, dan menghasilkan tema baharu serta-merta jika anda mahu.

Pusat Bantuan juga menyebut skill yang disediakan oleh rakan kongsi seperti Notion, Figma dan Atlassian untuk berfungsi bersama penyambung MCP mereka sendiri. Ini berguna apabila bekerja dengan alat tempat dokumen dihasilkan (cth. halaman Notion).

## Bagaimana menggunakannya dalam kehidupan sebenar?

Penggunaan yang paling cekap ialah menggabungkan skill dokumen siap pakai dengan skill kecil anda sendiri. Contohnya, skill xlsx tahu cara menghasilkan Excel dengan betul, tetapi tidak tahu lajur apa yang patut ada dalam jadual jualan bulanan syarikat anda. Jika anda menulis skill pendek yang menerangkannya, kedua-dua skill bekerja bersama dan menghasilkan fail yang berformat betul dan menepati piawaian anda.

Ada dua nota yang tidak boleh anda lupakan. Pertama, repositori anthropics/skills menyatakan dengan jelas bahawa skill ini adalah "untuk tujuan demonstrasi dan pendidikan" dan tingkah laku Claude sendiri mungkin berbeza daripada pelaksanaan di sini. Kedua, skill dokumen memerlukan persekitaran pelaksanaan kod. Menurut Pusat Bantuan, ciri pelaksanaan kod mesti dihidupkan supaya skill berfungsi.

Dalam artikel seterusnya kita beralih ke bahagian skrin: skill yang menghasilkan output reka bentuk, hadapan dan web.

Anda paling banyak membazir masa menyediakan jenis dokumen yang mana: jadual, pembentangan atau laporan?
