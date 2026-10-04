(function () {
  "use strict";

  var WA_NUMBER = (window.PortaPicWA && window.PortaPicWA.number) || "6287881332331";

  /* ---- Navigasi ---------------------------------------------------- */

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("menu");

  function setStuck() {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  }

  setStuck();
  window.addEventListener("scroll", setStuck, { passive: true });

  function closeMenu() {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu");
    document.body.style.overflow = "";
  }

  function openMenu() {
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Tutup menu");
    document.body.style.overflow = "hidden";
  }

  toggle.addEventListener("click", function () {
    if (menu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  var desktop = window.matchMedia("(min-width: 901px)");
  var onDesktop = function (event) {
    if (event.matches) closeMenu();
  };
  if (desktop.addEventListener) {
    desktop.addEventListener("change", onDesktop);
  } else {
    desktop.addListener(onDesktop);
  }

  /* ---- Penanda section aktif --------------------------------------- */

  var links = Array.prototype.slice.call(document.querySelectorAll(".nav__link"));
  // data-spy memetakan tautan ke section yang mewakilinya, mis. "Kerja Sama"
  // yang isinya kini hidup di dalam tab B2B pada section #pricing.
  var spyPairs = links
    .map(function (link) {
      var target = document.querySelector(link.getAttribute("data-spy") || link.getAttribute("href"));
      return { link: link, target: target };
    })
    .filter(function (pair) {
      return pair.target;
    });

  if ("IntersectionObserver" in window && spyPairs.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          spyPairs.forEach(function (pair) {
            pair.link.classList.toggle("is-active", pair.target === entry.target);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    spyPairs.forEach(function (pair) {
      spy.observe(pair.target);
    });
  }

  /* ---- Tab paket ---------------------------------------------------- */

  Array.prototype.slice.call(document.querySelectorAll("[data-tabs]")).forEach(function (root) {
    // Ambil tab dari tablist pertama milik root ini saja, supaya tablist
    // bertingkat (B2C/B2B berisi Unlimited/Kuota) tidak saling menimpa.
    var list = root.querySelector('[role="tablist"]');
    var tabs = list
      ? Array.prototype.slice.call(list.children).filter(function (el) {
          return el.getAttribute("role") === "tab";
        })
      : [];
    if (!tabs.length) return;

    function select(index, focus) {
      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.tabIndex = selected ? 0 : -1;
        var panel = document.getElementById(tab.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
      if (focus) tabs[index].focus();
    }

    tabs.forEach(function (tab, index) {
      tab.tabIndex = index === 0 ? 0 : -1;

      tab.addEventListener("click", function () {
        select(index, false);
      });

      tab.addEventListener("keydown", function (event) {
        var next = null;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next === null) return;
        event.preventDefault();
        select(next, true);
      });
    });
  });

  /* ---- Kalkulator sharing profit ------------------------------------ */

  var calc = document.getElementById("calc");

  if (calc) {
    var sessionsRange = document.getElementById("calc-sessions");
    var sessionsNum = document.getElementById("calc-sessions-num");
    var priceRange = document.getElementById("calc-price");
    var priceNum = document.getElementById("calc-price-num");
    var percentOut = document.getElementById("calc-percent");
    var tierOut = document.getElementById("calc-tier");
    var totalOut = document.getElementById("calc-total");
    var profitOut = document.getElementById("calc-profit");
    var calcWa = document.getElementById("calc-wa");

    var MIN_TIER = 20;
    var MID_TIER = 50;

    function clamp(value, min, max) {
      if (!isFinite(value) || value < min) return min;
      if (value > max) return max;
      return value;
    }

    function readValue(input, max) {
      var digits = String(input.value).replace(/[^\d]/g, "");
      return clamp(digits === "" ? 0 : Number(digits), 0, max);
    }

    function rupiah(value) {
      return "Rp " + Math.round(value).toLocaleString("id-ID");
    }

    function render() {
      var sessions = readValue(sessionsNum, 2000);
      var price = readValue(priceNum, 100000000);
      var total = sessions * price;
      var percent = sessions >= MID_TIER ? 20 : sessions >= MIN_TIER ? 15 : 0;
      var profit = (total * percent) / 100;

      percentOut.textContent = percent + "%";

      if (sessions >= MID_TIER) {
        tierOut.textContent = "50 sesi atau lebih → 20% dari total pendapatan";
      } else if (sessions >= MIN_TIER) {
        tierOut.textContent = "20–49 sesi → 15% dari total pendapatan";
      } else {
        tierOut.textContent = "Minimal 20 sesi untuk mulai dapat sharing profit";
      }

      totalOut.textContent = rupiah(total);
      profitOut.textContent = rupiah(profit);

      var message =
        "Halo Porta Pic! Saya mau mengajukan kerja sama sharing profit.\n" +
        "Estimasi: " +
        sessions +
        " sesi x " +
        rupiah(price) +
        " = " +
        rupiah(total) +
        ".\n" +
        "Perkiraan bagian pihak event (" +
        percent +
        "%): " +
        rupiah(profit) +
        ".\n" +
        "Mohon info detail kerja samanya.";

      calcWa.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(message);
    }

    function bind(range, number, max) {
      range.addEventListener("input", function () {
        number.value = range.value;
        render();
      });

      number.addEventListener("input", function () {
        var value = readValue(number, max);
        range.value = String(Math.min(value, Number(range.max)));
        render();
      });

      number.addEventListener("blur", function () {
        var value = readValue(number, max);
        number.value = String(value);
        range.value = String(Math.min(value, Number(range.max)));
        render();
      });
    }

    bind(sessionsRange, sessionsNum, 2000);
    bind(priceRange, priceNum, 100000000);
    render();
  }

  /* ---- Filter galeri ------------------------------------------------ */

  var grid = document.getElementById("gallery-grid");
  var filters = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));

  if (grid && filters.length) {
    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        var active = button.getAttribute("data-filter");

        filters.forEach(function (other) {
          other.setAttribute("aria-pressed", String(other === button));
        });

        Array.prototype.slice.call(grid.querySelectorAll("[data-cat]")).forEach(function (item) {
          item.hidden = active !== "all" && item.getAttribute("data-cat") !== active;
        });
      });
    });
  }

  /* ---- Lightbox galeri ---------------------------------------------- */

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxCaption = document.getElementById("lightbox-caption");
  var lightboxClose = document.getElementById("lightbox-close");
  var lastFocus = null;

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    lightboxImg.alt = "";
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  if (lightbox) {
    Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]")).forEach(function (button) {
      button.addEventListener("click", function () {
        var inner = button.querySelector("img");
        lastFocus = button;
        lightboxImg.src = button.getAttribute("data-lightbox");
        lightboxImg.alt = inner ? inner.alt : "";
        lightboxCaption.textContent = button.getAttribute("data-caption") || "";
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        lightboxClose.focus();
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();

      if (event.key === "Tab" && !lightbox.hidden) {
        event.preventDefault();
        lightboxClose.focus();
      }
    });
  }
})();
