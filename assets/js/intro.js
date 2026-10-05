/**
 * Porta Pic — Studio Clim Style Preloader Controller
 * Inspired by studioclim.com preloader mechanism
 * 1. Centered logo text appears immediately
 * 2. Signature vertical brand color columns cascade down (scaleY: 0)
 * 3. Logo text gives a subtle punchy pop
 * 4. Entire preloader slides up into the ceiling (translateY: -100%)
 */
(function () {
  "use strict";

  var ldr = document.getElementById("csg-preloader");
  if (!ldr) return;

  var bkBars = ldr.querySelectorAll(".ldr_bk .ldr_cl");
  var img = ldr.querySelector(".ldr_img");
  var tagline = ldr.querySelector(".ldr_tagline");
  var skipBtn = ldr.querySelector(".ldr_skip");

  var total = bkBars.length;
  var stepDur = 160; // Snappy cascade per column
  var isDismissed = false;
  var timeouts = [];

  // Lock scroll on page load
  document.body.classList.add("splash-active");

  // Reduced motion preference
  var prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clearTimeouts() {
    timeouts.forEach(function (id) {
      clearTimeout(id);
    });
    timeouts = [];
  }

  function dismissImmediately() {
    if (isDismissed) return;
    isDismissed = true;
    clearTimeouts();

    ldr.classList.add("done");
    document.body.classList.remove("splash-active");

    setTimeout(function () {
      ldr.classList.add("is-hidden");
      ldr.setAttribute("aria-hidden", "true");
    }, 820);
  }

  // Fast path for reduced motion
  if (prefersReducedMotion) {
    if (img) img.classList.add("show");
    setTimeout(dismissImmediately, 300);
    return;
  }

  // Step 1: Show logo text immediately
  if (img) {
    img.classList.add("show");
  }

  // Step 2: Reveal vertical color bars sequentially
  function revealBars() {
    if (isDismissed) return;

    bkBars.forEach(function (bar, i) {
      var tId = setTimeout(function () {
        bar.style.transition = "transform 0.5s cubic-bezier(.55, 0, .1, 1)";
        bar.style.transform = "scaleY(0)";
      }, i * stepDur);
      timeouts.push(tId);
    });

    var totalBarsTime = total * stepDur + 450;

    // Pop the logo & show tagline once color columns finish
    var popId = setTimeout(function () {
      if (img) img.classList.add("pop");
      if (tagline) tagline.classList.add("show");
    }, totalBarsTime - 150);
    timeouts.push(popId);

    // Step 3: Curtain slide up into the ceiling
    var doneId = setTimeout(function () {
      dismissImmediately();
    }, totalBarsTime + 380);
    timeouts.push(doneId);
  }

  // Delay before bars start dropping
  var startDelay = 350;
  var initId = setTimeout(revealBars, startDelay);
  timeouts.push(initId);

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      dismissImmediately();
    });
  }

  // Pressing Escape or clicking anywhere dismisses
  document.addEventListener("keydown", function (e) {
    if (!isDismissed && e.key === "Escape") {
      dismissImmediately();
    }
  });

  ldr.addEventListener("click", function (e) {
    if (e.target.closest("button") || e.target.closest("a")) return;
    dismissImmediately();
  });

  // Replay helper
  window.replayPortaPicIntro = function () {
    isDismissed = false;
    clearTimeouts();

    ldr.classList.remove("is-hidden", "done");
    ldr.setAttribute("aria-hidden", "false");
    document.body.classList.add("splash-active");

    bkBars.forEach(function (bar) {
      bar.style.transition = "none";
      bar.style.transform = "scaleY(1)";
    });

    if (img) {
      img.classList.remove("pop");
      img.classList.add("show");
    }
    if (tagline) tagline.classList.remove("show");

    // Force reflow
    void ldr.offsetWidth;

    timeouts.push(setTimeout(revealBars, 250));
  };

  // Replay on nav brand click when at top
  document.addEventListener("DOMContentLoaded", function () {
    var brandLinks = document.querySelectorAll(".nav__brand, .footer__brand-link");
    brandLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        if (window.scrollY < 40 && !ldr.classList.contains("done")) {
          e.preventDefault();
          window.replayPortaPicIntro();
        }
      });
    });
  });
})();
