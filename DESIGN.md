---
name: Porta Pic
description: Everywhere is a Studio — landing page photobooth Solo Raya
colors:
  ink: "#191c20"
  ink-soft: "#3b3a35"
  paper: "#ffffff"
  cream: "#fff1c1"
  periwinkle: "#d4e3ff"
  orange: "#e87f00"
  orange-deep: "#b85800"
  slate: "#4e80c2"
  blue: "#4673af"
  amber: "#e59d2c"
  amber-deep: "#cf8a1c"
  maroon: "#8a242e"
  peach: "#ffddb5"
  pale-blue: "#a9cee7"
  khaki: "#c9c7a8"
  khaki-deep: "#8c8b76"
typography:
  display:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(2.75rem, 11.5vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1.75rem, 5vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1.125rem, 2.2vw, 1.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  accordion:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1rem, 1.9vw, 1.25rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  price:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1.25rem, 2.4vw, 1.625rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  value:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  result:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.5rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.02em"
  step:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "2rem"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  ticker:
    fontFamily: "Anybody, 'Arial Black', sans-serif"
    fontSize: "clamp(0.8125rem, 1.5vw, 1.0625rem)"
    fontWeight: 900
    lineHeight: 1.2
    letterSpacing: "0.02em"
  body:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-lg:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Schibsted Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  wordmark:
    fontFamily: "Yellowtail, cursive"
    fontSize: "1.4rem"
    fontWeight: 400
    lineHeight: 0.9
    letterSpacing: "normal"
rounded:
  xs: "3px"
  sm: "8px"
  md: "12px"
  pill: "999px"
spacing:
  xxs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.paper}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  button-cta:
    backgroundColor: "{colors.amber}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 20px"
  button-ghost:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "14px 24px"
  chip-label:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "6px 12px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  price-card:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "24px"
  input-field:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Design System: Porta Pic

## Overview

**Creative North Star: "Studio foto keliling yang dicetak jadi poster zine"**

Dunia visualnya datar, blok, dan berani: bidang warna padat yang saling menumpuk seperti lembar cetak yang baru keluar dari printer foto, ditempel di papan biru. Tidak ada gradasi dekoratif, tidak ada kaca, tidak ada bayangan mengambang. Kedalaman datang dari tumpukan bidang dan garis tinta, bukan dari shadow. Warna diambil langsung dari `referensi.png`: krem `#fff1c1` sebagai kartu, periwinkle `#d4e3ff` sebagai kartu kedua, oranye `#e87f00` sebagai kepala blok B2B, biru `#4673af` sebagai papan galeri, amber `#e59d2c` sebagai panel hasil, maroon `#8a242e` sebagai tinta gambar dan wordmark.

Tipografinya dua suara: headline **grotesque ultra-lebar uppercase** yang mencolok untuk semua judul section, dan **Schibsted Grotesk** yang tenang untuk semua teks baca. Wordmark ditulis dengan script kuas (Yellowtail) meniru logo asli. Tidak ada suara ketiga.

Halaman ini hidup dari satu momen: headline hero muncul dari balik topengnya seperti gambar yang sedang di-develop. Selebihnya tenang dan langsung — halaman ini alat konversi, bukan pameran.

**Key Characteristics:**
- Bidang warna padat, garis tinta 2px, tanpa gradasi dekoratif dan tanpa shadow mengambang.
- Judul section adalah chip/slab berwarna, bukan label kecil di atas judul.
- Galeri disajikan sebagai papan biru berisi contoh cetak berbingkai (2R strip & 4R print).
- Aksen oranye hanya untuk harga dan aturan pemisah di blok B2B; biru hanya untuk aksi utama.
- Semua isi yang belum tersedia ditandai jujur sebagai placeholder, bukan dikarang.

## Colors

Paletnya berasal dari materi cetak Porta Pic: krem hangat, periwinkle, oranye tinta, biru papan, dan maroon.

### Primary
- **Papan Blue** (`#4673af`): papan galeri full-bleed dan tombol aksi utama dengan teks putih. Dipilih di atas `#4e80c2` karena rasio kontrasnya dengan putih 4.8:1 (lolos AA), sedangkan `#4e80c2` hanya 4.0:1.
- **Maroon Tinta** (`#8a242e`): wordmark, ilustrasi bidang pada contoh cetak, panel hasil alternatif. Teks putih di atasnya 8.8:1.

### Secondary
- **Cream Kartu** (`#fff1c1`): kartu harga pertama, input kalkulator, chip judul section.
- **Periwinkle** (`#d4e3ff`): kartu harga kedua dan kartu layanan partnership; selalu berpasangan dengan teks tinta.
- **Orange Tinta** (`#e87f00`): hanya untuk bidang — kepala blok B2B, aturan horizontal, aksen dekoratif. Tidak pernah untuk teks kecil.
- **Orange Deep** (`#b85800`): teks harga dan label oranye. Dipakai karena `#e87f00` hanya 2.8:1 di atas kertas (gagal AA).
- **Amber** (`#e59d2c`): panel hasil kalkulator dan kartu testimoni ketiga. **Hanya dengan teks tinta**, tidak pernah dengan teks putih (putih di atas amber 2.3:1).
- **Amber Deep** (`#cf8a1c`): state hover tombol CTA amber, supaya hover tetap memakai teks tinta.
- **Warm Ink** (`#3a2606`): teks sekunder di atas bidang oranye dan amber; menggantikan `--ink-soft` supaya kontrasnya tetap ≥5:1.
- **Peach Footer** (`#ffddb5`): badan footer, dengan teks cokelat-gelap `#2a1800`.
- **Pale Blue** (`#a9cee7`): garis band dekoratif di atas footer. Tidak pernah memuat teks.

### Neutral
- **Ink** (`#191c20`): semua teks utama, garis aturan 2px, garis tepi kartu.
- **Ink Soft** (`#3b3a35`): teks sekunder. Ditint dari arah hangat, bukan abu-abu netral, supaya tetap terasa bagian dari palet kertas.
- **Paper** (`#ffffff`): latar halaman dan bidang kosong di antara blok.
- **Khaki Wash** (`#c9c7a8` → `#8c8b76`): latar hero, dua bidang datar bertumpuk yang meniru wash foto yang belum dibaca; ini slot tempat foto event asli masuk.

### Named Rules

**The Two Blues Rule.** `#4673af` membawa teks putih; `#4e80c2` hanya untuk bidang dekoratif atau teks besar. Jangan pernah menaruh teks kecil putih di atas `#4e80c2`.

**The Amber Is Ink Rule.** Amber selalu berpasangan dengan tinta `#191c20`. Putih di atas amber adalah kesalahan kontras yang paling mudah terjadi di halaman ini.

**The No Grey Rule.** Tidak ada abu-abu netral. Teks sekunder di atas bidang berwarna ditint dari warna bidang itu sendiri (hangat di krem, biru di papan).

## Typography

**Display Font:** Anybody (variable, `wdth` 150, `wght` 900) dengan fallback `Arial Black`
**Body Font:** Schibsted Grotesk (variable 400–900) dengan fallback `system-ui`
**Label/Mono Font:** Schibsted Grotesk uppercase dengan letter-spacing `0.12em`

**Character:** Kontrasnya sengaja kasar — headline selebar mungkin dan setinggi mungkin, lalu teks baca yang benar-benar biasa. Ini meniru referensi: huruf yang dicetak besar di poster, dan kalimat yang dicetak kecil di bawahnya. Schibsted Grotesk dipilih di atas grotesque yang jadi default industri (Inter, Roboto, Plus Jakarta Sans) karena bentuknya lebih editorial dan punya karakter huruf yang khas, sehingga suara keduanya tidak jatuh jadi netral generik. Wordmark script hanya muncul dua kali (navigasi dan footer) sebagai tanda tangan, bukan sebagai suara ketiga.

### Hierarchy
- **Display** (900, `clamp(1.75rem, 10.5vw, 6rem)`, 0.86): headline hero "EVERYWHERE IS STUDIO" saja, uppercase, tanpa title-case. Batas bawah 10.5vw menjaga satu kata tetap muat dalam satu baris pada layar tersempit.
- **Headline** (900, `clamp(1.75rem, 5vw, 3.25rem)`, 0.95): judul section di dalam chip/slab, uppercase.
- **Title** (800, `clamp(1.125rem, 2.2vw, 1.5rem)`, 1.15): nama paket, judul kartu, judul panel.
- **Accordion** (800, `clamp(1rem, 1.9vw, 1.25rem)`, 1.15): judul item syarat & ketentuan.
- **Price** (900, `clamp(1.25rem, 2.4vw, 1.625rem)`, 1): baris harga di kartu tag.
- **Value** (900, `clamp(1.25rem, 2.5vw, 1.625rem)`, 1.2): nilai persentase kalkulator.
- **Result** (900, `clamp(1.75rem, 4vw, 2.5rem)`, 1): angka total pendapatan dan estimasi profit di panel amber.
- **Step** (900, `2rem`, 0.9): angka langkah di alur kerja sama.
- **Ticker** (900, `clamp(0.8125rem, 1.5vw, 1.0625rem)`, 1.2): teks berjalan di band hitam.
- **Body Large** (400, `clamp(1.0625rem, 1.6vw, 1.25rem)`, 1.55): paragraf pembuka section dan isi callout.
- **Body** (400, `1rem`, 1.6): teks baca, ukuran baris dibatasi 65–75ch.
- **Label** (700, `0.75rem`, letter-spacing `0.12em`, uppercase): label input kalkulator, tanda kategori, caption contoh cetak.
- **Wordmark** (400, `1.4rem`, 0.78): script lockup di navigasi dan footer.

### Named Rules

**The Wide-Is-Loud Rule.** Lebar huruf (`font-stretch: 150%`) hanya untuk judul dan angka besar. Teks baca selalu Schibsted Grotesk — tidak ada body text di dalam Anybody.

**The No Kicker Rule.** Tidak ada label kecil di atas judul section. Judulnya sendiri yang jadi chip berwarna, seperti "SERVICES" di referensi.

## Layout

Grid 12 kolom di dalam shell maksimal 1200px, gutter `clamp(16px, 3vw, 32px)`. Halaman berjalan sebagai rangkaian **band full-bleed**: khaki (hero), hitam tipis (marquee), kertas (layanan, harga, syarat, kontak), krem (keunggulan + frame), oranye (kepala blok B2B), kertas dengan aturan oranye (kalkulator), biru (galeri), kertas (testimoni), pale blue + peach (footer). Pergantian band inilah yang memisahkan section, bukan garis atau shadow.

Dua blok 50/50 dipertahankan dari referensi: blok B2B (kepala oranye + kalkulator) dan blok keunggulan + frame. Galeri memakai empat kolom tetap seperti referensi: dua kolom luar berisi strip 2R yang lebih sempit, dua kolom dalam berisi print 4R yang lebih lebar.

Breakpoint: `1080px` (galeri turun ke 2 kolom, split 50/50 menumpuk), `760px` (semua kolom jadi satu, nav jadi drawer, tabel jadi baris bertumpuk), `480px` (display mengecil ke 2.75rem, padding band 20px).

## Elevation & Depth

Secara default tidak ada shadow. Kedalaman disampaikan dengan tiga hal: tumpukan bidang warna, garis tinta 2px (`border: 2px solid var(--ink)`), dan aturan horizontal penuh di dalam kartu.

Ada dua pengecualian yang dibatasi dengan ketat:

1. **Navigasi lengket** memakai shadow tipis lembut saat halaman digulir agar terpisah dari konten di belakangnya.
2. **Blok harga (`.pricing-nb`)** naik satu tingkat menjadi Neobrutalism: garis 3px dan bayangan offset padat tanpa blur (`6px 6px 0 var(--ink)`), plus efek tekan pada tombol. Ini permintaan eksplisit pengguna untuk komponen tersebut, jadi bayangan keras di sini bukan kostum — blok itu memang dunia yang berbeda, dan batasnya ketat pada section `#pricing`.

### Shadow Vocabulary
- **Sticky nav lift** (`box-shadow: 0 8px 24px -16px rgb(25 28 32 / 0.45)`): hanya muncul setelah halaman digulir melewati hero.
- **Loud block card** (`--nb-shadow: 6px 6px 0 var(--ink)`): kartu paket di dalam `.pricing-nb` saja.
- **Loud block control** (`--nb-shadow-sm: 4px 4px 0 var(--ink)`): toggle dan tombol di dalam `.pricing-nb`.

### Named Rules

**The Ink Border Rule.** Setiap permukaan punya garis tinta, bukan shadow. Kalau sebuah elemen butuh "terlihat mengambang", yang salah adalah komposisinya, bukan elevasinya.

**The Loud Block Rule.** Bayangan keras hanya hidup di dalam `.pricing-nb`. Nilai variannya dideklarasikan pada scope itu di `assets/css/pricing.css`, bukan di `tokens.css`, supaya garis 3px tidak pernah bocor ke dunia zine yang datar. Kalau section lain ingin gaya yang sama, pindahkan variannya dengan sadar — jangan menyalin nilainya.

## Shapes

Bentuknya kotak — hasil potong mesin cetak. Radius: `3px` untuk label kecil, `8px` untuk tombol dan input, `12px` untuk kartu, `999px` hanya untuk chip filter kecil. Motif tanda tangan: **kartu harga berbentuk tag** dengan strip perforasi (garis putus-putus) dan lubang gantung (lingkaran tinta) di tepi atas, plus contoh cetak berbingkai (krem/putih) dengan caption ukuran di dalamnya.

Starburst dan doodle bintang dari referensi dipakai sebagai penanda kecil di sudut blok, digambar sebagai SVG geometris (bukan `feTurbulence`, bukan sketsa tangan), maksimal tiga kali di seluruh halaman.

## Components

### Buttons
- **Primary** (`#4673af` / putih, border tinta 2px): aksi tunggal yang paling penting di tiap layar. Hover menggelap ke `#4e80c2` dan bergeser 2px.
- **CTA** (`#e59d2c` / tinta): dipakai di navigasi ("BOOK NOW"), satu-satunya tombol amber di luar blok B2B.
- **Ghost** (kertas / tinta, border tinta 2px): aksi sekunder di sebelah primary ("Ajukan Kerja Sama").
- Semua tombol memuat ikon SVG yang digambar sendiri, satu ketebalan garis, bila ikonnya membantu.

### Chips (if used)
- **Section chip**: judul section berbentuk slab krem atau oranye, uppercase, Anybody 900. Ini pengganti kicker.
- **Filter chip**: chip pil kecil di atas galeri; state aktif = bidang tinta dengan teks kertas.
- **Size caption**: "UKURAN 4R" / "2R" di dalam contoh cetak, label kecil uppercase.

### Cards / Containers
- **Tag card**: kartu harga krem/periwinkle dengan perforasi, lubang gantung, checklist ikon centang, dan baris harga oranye-deep.
- **Plate**: contoh cetak berbingkai (krem untuk strip 2R, putih untuk print 4R) dengan caption ukuran. Slot foto asli masuk lewat `<img>` di dalam bingkai ini.
- **Panel**: bidang amber (hasil kalkulator) atau biru (callout) berisi teks tinta/putih.

### Inputs / Fields
- Input angka kalkulator dan slider memakai bidang krem dengan border tinta 2px dan label uppercase kecil di atasnya. Nilai yang bisa diubah memakai slider + input angka yang selalu sinkron.

### Navigation
- Bar kertas lengket, wordmark script kiri, lima tautan uppercase ber-letter-spacing, satu tombol CTA amber kanan. Di bawah 760px menjadi drawer krem penuh dengan urutan yang sama plus tombol WA di bawah.

### Funnel Toggle & Kartu Paket (varian neo-brutalism)
- **Toggle dua tingkat**: level 1 memilih audiens (`Sewa Acara B2C` / `Mitra Venue & Event B2B`), level 2 (hanya di dalam B2C) memilih jenis paket (`Unlimited` / `Kuota`). Aktif level 1 = bidang tinta + teks krem; aktif level 2 = bidang maroon + teks kertas. Dua bidang berbeda supaya tingkatnya tidak tertukar.
- **Kartu paket**: krem / periwinkle / amber dengan perforasi dan lubang gantung yang sama seperti kartu lain, tetapi memakai garis 3px + `--nb-shadow`, dan baris harga dipisahkan aturan tinta 3px.
- **Panel mitra**: bidang krem dengan dua baris skema bagi hasil; baris tier tertinggi memakai amber untuk menandai puncaknya.
- **Pesan WhatsApp**: setiap CTA membawa `data-wa="b2c|b2b"` (+ `data-package` dan `data-price` untuk paket). Pesannya dibangun oleh `PortaPicWA` di `assets/js/pricing.js` — jangan menulis pesan langsung di HTML.
- **Panel B2B memuat seluruh isi kerja sama**: kenapa (3 pilar), skema bagi hasil, dan kalkulator simulasi. Section `#partnership` tidak lagi berdiri sendiri — ia jadi anchor di dalam panel ini, dan tautan ke sana membuka tabnya lebih dulu.

**The Hidden Anchor Rule.** Anchor yang hidup di dalam panel/tab yang tersembunyi wajib terdaftar di peta deep-link (`TAB_BY_HASH` di `assets/js/pricing.js`) dan, kalau ditautkan dari navigasi, punya padanan `data-spy` supaya penanda section aktif tetap benar. Tanpa itu tautan publik mendarat di elemen yang belum ditampilkan.

### Signature Component
- **Kalkulator sharing profit**: tiga baris label uppercase dengan aturan oranye pemisah, dua input yang bisa digeser, satu baris persentase yang dihitung otomatis (15% / 20% / pesan "minimal 20 sesi"), dan panel amber berisi total pendapatan + estimasi profit pihak event.

## Do's and Don'ts

### Do:
- Pertahankan perbedaan kontras: headline raksasa lebar vs teks baca biasa.
- Gunakan band warna untuk memisahkan section, bukan garis tipis atau shadow.
- Tint teks sekunder dari warna bidangnya (krem hangat, papan biru, `--on-warm` untuk oranye/amber).
- Tandai isi placeholder secara eksplisit di HTML dan README.
- Kalau menyentuh blok harga, ikuti varian `--nb-*` di `assets/css/pricing.css` — jangan menulis nilai bayangan baru di tempat lain.

### Don't:
- Jangan menaruh teks putih di atas amber `#e59d2c` atau di atas slate `#4e80c2` pada ukuran kecil.
- Jangan memakai gradasi dekoratif, kaca/blur, atau shadow hard-offset **di luar `.pricing-nb`**.
- Jangan memakai emoji atau glyph unicode sebagai ikon.
- Jangan menambah suara tipografi ketiga, atau memakai script di luar wordmark.
- Jangan mengarang testimoni, nama klien, atau angka pencapaian.
- Jangan menambah tombol WhatsApp baru dengan pesan yang ditulis tangan di HTML; pakai builder `PortaPicWA` (lihat README).
