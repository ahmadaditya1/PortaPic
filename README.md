# Porta Pic — Landing Page

Landing page satu halaman untuk **Porta Pic** ("Everywhere is a Studio"): sewa photobooth (B2C) dan kerja sama sharing profit (B2B) di Surakarta & Solo Raya. Semua konversi lewat WhatsApp.

- **Stack:** HTML + CSS + JS murni. Tanpa build step, tanpa dependency, tanpa framework.
- **Isi & harga:** [spesifikasi-landing-page-portapic (1).md](<./spesifikasi-landing-page-portapic (1).md>)
- **Dunia visual:** [referensi.png](./referensi.png) → direkam di [DESIGN.md](./DESIGN.md)
- **Konteks produk:** [PRODUCT.md](./PRODUCT.md)

---

## Menjalankan secara lokal

Buka lewat server lokal (jangan klik dua kali `index.html`) — font self-hosted tidak dimuat lewat `file://` karena kebijakan CORS browser.

```powershell
cd "E:\Side Project\PortaPic"
python -m http.server 8123 --bind 127.0.0.1
# lalu buka http://127.0.0.1:8123/index.html
```

## Struktur file

```
index.html                     seluruh halaman (16 section, urut dari atas ke bawah)
assets/css/tokens.css          variabel desain: warna, ukuran huruf, spasi, radius, motion
assets/css/base.css            font-face, reset, elemen dasar, permukaan bawaan browser
assets/css/layout.css          shell, band warna, section, grid + breakpoint
assets/css/components.css      nav, tombol, chip, kartu harga, kalkulator, galeri, footer
assets/css/pricing.css         varian Neo-Brutalism untuk section #pricing (.pricing-nb)
assets/js/pricing.js           builder deep-link WhatsApp (PortaPicWA) + pengisian href CTA
assets/js/main.js              nav mobile, scrollspy, tab bertingkat, kalkulator, filter galeri, lightbox
assets/fonts/                  Anybody (display), Schibsted Grotesk (teks), Yellowtail (wordmark)
assets/img/gallery/            contoh cetak (placeholder) untuk galeri & section frame
assets/img/hero-wash.svg       latar hero (placeholder dua bidang khaki)
assets/img/og-portapic.png     gambar preview saat link dibagikan (1200×630)
PRODUCT.md / DESIGN.md         catatan produk & sistem desain
```

---

## Cara mengubah isi

### Harga & paket
Section `#pricing` memakai sistem **dual-funnel** (`assets/js/pricing.js` + `assets/css/pricing.css`):

| Tingkat | Tombol | Panel |
|---|---|---|
| Level 1 | `Sewa Acara (B2C)` / `Mitra Venue & Event (B2B)` | `#panel-b2c` / `#panel-b2b` |
| Level 2 (di dalam B2C) | `Paket Unlimited` / `Paket Kuota` | `#panel-unlimited` / `#panel-quota` |

**Menambah atau mengubah paket:** setiap paket adalah satu `<article class="tag-card nb-card">` di dalam panelnya. Yang perlu diubah: nama (`<h3>`), baris spesifikasi (`.nb-card__spec`), teks harga (`.tag-card__price`), checklist, dan tiga atribut pada tombolnya:

```html
<a class="btn btn--primary btn--block nb-btn"
   data-wa="b2c" data-package="Unlimited 3 Jam" data-price="1500000"
   href="https://wa.me/6287881332331">Booking Sekarang</a>
```

`data-package` dan `data-price` adalah sumber kebenaran pesan WhatsApp — harga di HTML tetap ditulis manual untuk pembaca tanpa JS, jadi ubah keduanya bersamaan.

### Nomor & pesan WhatsApp
- **Nomor tujuan ada satu tempat:** `NUMBER` di [assets/js/pricing.js](assets/js/pricing.js), dipublikasikan sebagai `window.PortaPicWA.number`. `main.js` memakai nilai itu dengan cadangan literal, supaya kalkulator tetap jalan kalau `pricing.js` gagal dimuat.
- **Template pesan** ada di `TEMPLATES` (kunci `b2c` dan `b2b`) di file yang sama.
- **Builder yang bisa dipakai ulang** dari section lain:

```js
PortaPicWA.buildWhatsAppUrl({ funnel: "b2c", name: "Kuota 200", price: 2250000 });
// -> https://wa.me/6287881332331?text=Halo%20Porta%20Pic%2C%20...
```

- Tautan yang ditulis manual (nav, hero, section kontak, tombol mengapung) tetap punya pesannya sendiri di `index.html`; itu bagian dari tugas sebelumnya dan bukan sumber kebenaran paket.

### Skema sharing profit & kalkulator
Semuanya hidup di dalam panel B2B (tab "Mitra Venue & Event"), bukan di section terpisah lagi:

- Skema bagi hasil tampil sebagai baris `.nb-share__row` (`20–49 sesi → 15%`, `≥ 50 sesi → 20%`).
- Kalkulator `#calc` ada di sebelah skema (dua kolom di desktop, menumpuk di bawah 1080px). Ambang batasnya di `main.js`: `MIN_TIER = 20` (15%) dan `MID_TIER = 50` (20%). Rumus: `total = sesi × harga per sesi`, `profit = total × persen`.
- Tautan ke `#partnership` dan `#calc` otomatis membuka tab B2B lebih dulu, lalu menggulir. Petaannya di `TAB_BY_HASH` pada `assets/js/pricing.js` — **setiap anchor baru yang berada di dalam panel tersembunyi wajib didaftarkan di sana**, kalau tidak browser akan menggulir ke elemen yang belum tampil.
- Nav "Kerja Sama" memakai `data-spy="#pricing"` supaya penanda section aktif tetap benar meski isinya ada di dalam tab.

### Syarat & ketentuan
Section `#terms`: satu `<details class="accordion__item">` per baris. Item pertama punya atribut `open`.

### Menambah section baru
1. Salin pola section yang ada: `<section class="band band--paper section" id="nama">` → `<div class="shell">` → `<div class="headline-row">` (judul pakai `.chip-section`, keterangan pakai `.callout`).
2. Tambahkan tautannya di nav (`<nav id="menu">`) dan di footer kalau perlu. Scrollspy serta menu otomatis mengikutinya.
3. Pilih `band--*` untuk mengganti warna latar; band adalah pemisah antar-section, bukan garis atau shadow (lihat DESIGN.md).

---

## Aset yang masih placeholder

Semua tempat di bawah ini sengaja ditandai, tidak dikarang isinya:

| Aset | Lokasi sekarang | Cara mengganti |
|---|---|---|
| Foto hero | `assets/img/hero-wash.svg` (dua bidang khaki) | Ganti `src` di `<img class="hero__photo">` dengan foto dokumentasi event (JPG/WebP, rasio 16:9, min 1920px). Lihat komentar `SLOT FOTO` di atasnya. |
| 8 foto galeri | `assets/img/gallery/plate-0*.svg` | Ganti `src` tiap `<img>` di `#gallery-grid` dengan foto asli (strip 2R ≈ 3:5, print 4R ≈ 4:5). Caption kategori dibaca dari `data-cat` pada `<figure>`. |
| 2 contoh cetak | `assets/img/gallery/sample-strip.svg`, `sample-print.svg` | Ganti dengan foto strip asli di section "Yang Kamu Dapat". |
| 3 testimoni | Section `#kata-mereka` | Ganti kutipan, nama, jenis acara, dan inisial avatar di ketiga `.quote-card`. Jangan tampilkan testimoni yang belum ada izinnya. |
| Logo resmi | Belum ada file logo | Wordmark untuk sementara ditulis dengan font script (Yellowtail) lewat `<a class="wordmark">` di nav dan footer. Kalau file logo (SVG/PNG) sudah ada: taruh di `assets/img/`, lalu ganti isi `<a class="wordmark">` menjadi `<img src="..." alt="Porta Pic">` di kedua tempat. |
| Daftar klien & angka pencapaian | Section bukti sosial (setelah hero) | Tambahkan chip nama klien **yang sudah memberi izin**, atau hapus section-nya. |
| Gambar preview link | `assets/img/og-portapic.png` (1200×630) | Boleh diganti gambar apa pun berukuran sama. Setelah di-deploy, ubah `og:image` di `<head>` menjadi URL absolut (`https://domain-kamu/assets/img/og-portapic.png`) supaya preview WhatsApp muncul. |

---

## Deploy

Situs ini statis, jadi seluruh folder bisa diunggah apa adanya ke hosting apa pun (Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel).

1. Unggah seluruh folder (kecuali `.dist/`).
2. Pasang `og:image` absolut di `<head>`.
3. Cek satu kali di ponsel: tombol WhatsApp harus membuka chat dengan pesan yang sudah terisi.

## Sistem desain

Jangan menambah warna atau ukuran huruf lepas di `components.css`. Semua nilai hidup sebagai variabel di [assets/css/tokens.css](assets/css/tokens.css) dan aturannya dicatat di [DESIGN.md](./DESIGN.md). Beberapa aturan yang tidak boleh dilanggar:

- Teks putih tidak pernah di atas amber `#e59d2c` atau slate `#4e80c2` pada ukuran kecil (kontras gagal).
- Teks sekunder di atas bidang oranye/amber memakai `--on-warm`, bukan `--ink-soft`.
- Tidak ada shadow (kecuali navigasi lengket dan blok harga `.pricing-nb`), tidak ada gradasi dekoratif, tidak ada emoji sebagai ikon.
- Judul section tidak memakai label kecil di atasnya — judulnya sendiri yang jadi chip.
- Bayangan keras (`--nb-shadow`) hanya untuk `.pricing-nb`; nilai variannya sengaja tidak ditaruh di `tokens.css` supaya tidak bocor ke section lain.

## Verifikasi yang sudah dijalankan

- Rentang lebar 288–1440 px: tidak ada overflow horizontal, tidak ada elemen keluar viewport.
- Kontras teks dihitung dari nilai computed: semua pasangan teks utama ≥4.5:1.
- Kalkulator diuji pada 10 sesi (0%), 30 sesi (15% → Rp 112.500), dan 200 sesi × Rp 25.000 (20% → Rp 1.000.000, sesuai contoh di materi resmi).
- Dual-funnel diuji keempat kombinasinya (B2C-Unlimited, B2C-Kuota, B2B, kembali ke B2C): panel, `aria-selected`, dan posisi tab selalu konsisten; berpindah ke B2B tidak mereset pilihan sub-toggle.
- Deep-link `#partnership` dan `#calc` (dari nav, CTA hero, kartu layanan, footer, maupun ketikan langsung di address bar) diverifikasi membuka tab B2B lalu menggulir ke elemennya, dengan fokus dipindahkan ke panel.
- Kalkulator diuji setelah dipindah ke dalam panel B2B: 60 sesi × Rp 35.000 → total Rp 2.100.000, profit 20% Rp 420.000.
- Tujuh CTA WhatsApp memakai URL `https://wa.me/6287881332331?text=...` dengan pesan ter-encode sesuai paket (diperiksa dengan `decodeURIComponent`).
- Navigasi keyboard (ArrowRight/ArrowLeft/Home/End) berfungsi di kedua tingkat tablist, tanpa saling menimpa.
- Detektor desain Impeccable: bersih (tidak ada temuan).
- Tangkapan layar hasil build ada di `.impeccable/review/` (desktop, mobile, plus ketiga state dual-funnel).
