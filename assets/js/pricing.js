/* Porta Pic — Pricing & Service Section.
 *
 * Dua tanggung jawab:
 *   1. Membangun deep-link WhatsApp (URL-encoded) dari paket yang dipilih.
 *   2. Mengisi href setiap CTA bertanda [data-wa] di halaman.
 *
 * Perpindahan tab (B2C/B2B dan Unlimited/Kuota) tidak diurus di sini — handler
 * generik [data-tabs] di main.js yang menangani ARIA, keyboard, dan panel.
 * Nomor WhatsApp hanya boleh hidup di satu tempat: PortaPicWA.number di bawah.
 */

(function () {
  "use strict";

  var NUMBER = "6287881332331";

  var TEMPLATES = {
    b2c: function (pack) {
      return (
        "Halo Porta Pic, saya tertarik untuk booking paket *" +
        pack.name +
        "* (Rp " +
        formatRupiah(pack.price) +
        "). Mau tanya ketersediaan tanggal untuk acara saya. Boleh minta info detailnya?"
      );
    },
    b2b: function () {
      return (
        "Halo Porta Pic, saya ingin mendiskusikan peluang kerja sama kemitraan / sharing profit untuk " +
        "venue/event kami. Boleh minta info detail teknis dan MoU-nya?"
      );
    }
  };

  /**
   * 1200000 -> "1.200.000" (pemisah ribuan gaya Indonesia).
   * Nilai yang bukan angka dikembalikan apa adanya supaya tidak menampilkan "NaN".
   */
  function formatRupiah(value) {
    var angka = Number(String(value === null || value === undefined ? "" : value).replace(/[^\d]/g, ""));
    if (!isFinite(angka) || angka <= 0) return String(value || "");
    return angka.toLocaleString("id-ID");
  }

  /**
   * Membangun URL wa.me yang siap dipakai di href.
   *
   * @param {Object} options
   * @param {"b2c"|"b2b"} options.funnel  Pilih template pesan.
   * @param {string} [options.name]       Nama paket, wajib untuk funnel "b2c".
   * @param {number|string} [options.price] Harga paket, wajib untuk funnel "b2c".
   * @param {string} [options.number]     Override nomor tujuan (opsional).
   * @returns {string} URL lengkap dengan pesan ter-encode, atau link dasar bila data kurang.
   */
  function buildWhatsAppUrl(options) {
    var opsi = options || {};
    var template = TEMPLATES[opsi.funnel] || TEMPLATES.b2c;

    if (opsi.funnel === "b2c" && !opsi.name) {
      return "https://wa.me/" + (opsi.number || NUMBER);
    }

    var pesan = template({ name: opsi.name, price: opsi.price });
    return "https://wa.me/" + (opsi.number || NUMBER) + "?text=" + encodeURIComponent(pesan);
  }

  /**
   * Menulis ulang href setiap CTA [data-wa] berdasarkan atribut data-nya.
   * HTML hanya perlu memuat nomor tujuan polos, sehingga pesan punya satu sumber
   * kebenaran (template di atas) dan tautan tetap berfungsi bila JS gagal dimuat.
   *
   * @param {ParentNode} [root] Batasi pencarian ke subtree tertentu.
   */
  function hydrate(root) {
    var scope = root || document;
    Array.prototype.slice.call(scope.querySelectorAll("[data-wa]")).forEach(function (link) {
      link.setAttribute(
        "href",
        buildWhatsAppUrl({
          funnel: link.getAttribute("data-wa"),
          name: link.getAttribute("data-package"),
          price: link.getAttribute("data-price")
        })
      );
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
    });
  }

  window.PortaPicWA = {
    number: NUMBER,
    templates: TEMPLATES,
    formatRupiah: formatRupiah,
    buildWhatsAppUrl: buildWhatsAppUrl,
    hydrate: hydrate
  };

  hydrate();

  /* ---- Deep-link ke panel B2B ---------------------------------------- *
   * Isi section kerja sama kini hidup di dalam panel B2B. Tautan lama
   * (#partnership di nav, hero, kartu layanan, footer) harus membuka tab B2B
   * lebih dulu — tanpa itu browser menggulir ke elemen yang masih hidden. */

  var TAB_BY_HASH = { "#partnership": "tab-b2b", "#calc": "tab-b2b" };

  function activateTab(tabId) {
    var tab = document.getElementById(tabId);
    if (!tab || tab.getAttribute("aria-selected") === "true") return false;
    tab.click(); // lewat tombolnya supaya handler [data-tabs] tetap sinkron dengan ARIA
    return true;
  }

  function revealHashTarget(hash, moveFocus) {
    var tabId = TAB_BY_HASH[hash];
    if (!tabId) return false;

    var target = document.getElementById(hash.slice(1));
    if (!target) return false;

    activateTab(tabId);

    var panel = document.getElementById("panel-b2b");
    if (moveFocus && panel) panel.focus({ preventScroll: true });

    target.scrollIntoView({ block: "start" });
    return true;
  }

  document.addEventListener("click", function (event) {
    var link = event.target.closest ? event.target.closest('a[href="#partnership"]') : null;
    if (!link) return;
    event.preventDefault();
    revealHashTarget("#partnership", true);
    if (window.history && history.replaceState) history.replaceState(null, "", "#partnership");
  });

  window.addEventListener("hashchange", function () {
    revealHashTarget(window.location.hash, true);
  });

  if (window.location.hash === "#partnership" || window.location.hash === "#calc") {
    window.addEventListener("load", function () {
      revealHashTarget(window.location.hash, false);
    });
  }
})();
