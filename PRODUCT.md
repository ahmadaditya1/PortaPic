# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML + CSS + JS, no build step (user's answer to the stack question, chosen for hosting-anywhere deployment and easy handoff). Fonts self-hosted in `assets/fonts/`. No runtime dependencies, no bundler, no framework.

## Users

- **B2C — penyelenggara acara personal & komunitas.** Mahasiswa/panitia wisuda, tuan rumah ulang tahun, komunitas event, panitia festival/CFD di Solo Raya. Situation: butuh dokumentasi instan yang datang ke lokasi, tanpa repot sewa alat atau ke studio. Job: memilih paket, memastikan tanggal tersedia, lalu booking cepat lewat WhatsApp.
- **B2B — venue, EO, dan penyelenggara event.** Situation: punya event ramai dan space kosong, tetapi tidak mau menanggung biaya operasional alat/operator. Job: memahami skema sharing profit, menghitung estimasi pemasukan, lalu menghubungi Porta Pic untuk MoU.

## Product Purpose

Landing page satu halaman untuk Porta Pic: memperkenalkan layanan photobooth "Everywhere is a Studio" dan mengonversi dua audiens sekaligus — booking sewa (B2C) dan pengajuan kerja sama sharing profit (B2B) — melalui WhatsApp. Sukses berarti pesan WhatsApp masuk dengan konteks yang sudah terbaca (paket atau skema yang diminati), bukan sekadar kunjungan halaman.

## Positioning

Photobooth yang datang ke lokasi di Solo Raya dengan dokumentasi instan berbiaya rendah — mulai dari Rp 8.750/strip — plus skema kerja sama B2B tanpa biaya operasional bagi pihak event: venue hanya menerima bagian profit (15% mulai 20 sesi, 20% mulai 50 sesi).

## Operating Context

- Booking dan negosiasi berjalan di WhatsApp; Instagram dan TikTok (@porta.pic) sebagai kanal pendukung; email `portapicture@gmail.com`.
- Titik awal perhitungan transportasi: Solo Balapan. Gratis 10 km pertama, Rp 5.000/km setelahnya.
- Layanan berjalan di lokasi klien, sehingga klien menyiapkan 1 meja, 3 kursi, pasokan listrik, dan area minimal 3×3 m.
- Alur B2B berakhir pada MoU: kontak → penjelasan syarat & ketentuan → kesepakatan → event → pembagian keuntungan.
- Materi sumber internal: *Porta Pic – Package PriceList* dan *Porta Pic – Partnership & Sharing Profit*.

## Capabilities and Constraints

- Satu halaman statis (`index.html`) dengan navigasi anchor, tanpa backend dan tanpa pembayaran online.
- Paket B2C: Unlimited 2/3/4 jam (Rp 1.200.000 / Rp 1.500.000 / Rp 1.750.000), tambahan waktu Rp 350.000/jam; Quota 100/200/300 (Rp 1.750.000 / Rp 2.250.000 / Rp 2.750.000, maksimal 4 jam operasional).
- Satu sesi foto maksimal 2× print / 4 strip; tambahan print dilayani dengan sistem antrian.
- 1 lembar keras cetak = 1 strip 4R **atau** 2 strip 2R.
- Skema sharing profit: minimum 20 sesi → 15%; minimum 50 sesi → 20%; di bawah 20 sesi belum ada pembagian.
- Simulasi kalkulator profit bersifat estimasi; skema final mengikuti MoU.
- **Belum diputuskan / belum tersedia:** daftar nama klien yang boleh ditampilkan, testimoni asli, angka pencapaian, foto portofolio asli, dan file logo resmi (PNG/SVG). Halaman tidak boleh mengarang isi keempat hal tersebut.

## Brand Commitments

- Nama: **Porta Pic** (Portable Picture). Tagline dan hashtag: **"Everywhere is a Studio"** / **#EverywhereisaStudio**.
- Berbasis di Surakarta, melayani Solo Raya; copyright "© 2026 Porta Pic".
- Voice hibrida (keputusan pengguna): santai/gaul untuk audiens B2C, profesional dan berorientasi profit untuk audiens B2B.
- Referensi visual yang dipakai pengguna sebagai otoritas: `referensi.png` (screenshot landing page) dan `spesifikasi-landing-page-portapic (1).md` (isi, harga, kontak). Keduanya binding; spesifikasi menang pada fakta (harga, kontak, syarat), referensi menang pada dunia visual.
- Struktur halaman mengikuti `lensalokastudio.com` sebagai inspirasi struktur.

## Evidence on Hand

- `spesifikasi-landing-page-portapic (1).md` — 16 section, harga, kontak resmi, syarat & ketentuan, dan enam item yang masih perlu konfirmasi.
- `referensi.png` (1280×3936) — komposisi, palet, dan gaya komponen yang disetujui pengguna.
- Tidak ada foto event, strip cetak, logo vector, atau testimoni di repositori. Yang tidak ada wajib ditandai sebagai placeholder, bukan dikarang.

## Product Principles

1. WhatsApp adalah satu-satunya konversi; setiap CTA membawa konteks (nama paket atau skema) di dalam pesannya.
2. Harga dan syarat tampil apa adanya — angka yang tidak ada di materi internal tidak boleh muncul.
3. Satu halaman harus melayani dua audiens berbeda tanpa saling mengganggu; blok B2B dipisahkan secara visual dari blok B2C.
4. Kecepatan dan kejelasan: keputusan booking harus mungkin dalam satu kali scroll penuh di ponsel.
5. Setiap ketidakpastian data (klien, testimoni, foto) ditandai secara eksplisit, tidak diisi dengan tebakan.
