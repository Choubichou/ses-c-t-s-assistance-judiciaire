/* ============================================
   À SES CÔTÉS — Plain JavaScript
   Interactivity via data-* attributes
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Mobile menu toggle ---- */
  var toggleBtn = document.querySelector("[data-action='toggle-menu']");
  var mobileMenu = document.querySelector("[data-menu='mobile']");
  var iconOpen = document.querySelector("[data-icon='menu-open']");
  var iconClose = document.querySelector("[data-icon='menu-close']");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", function () {
      var isVisible = mobileMenu.classList.contains("navbar-mobile-visible");
      if (isVisible) {
        mobileMenu.classList.remove("navbar-mobile-visible");
        if (iconOpen) iconOpen.style.display = "block";
        if (iconClose) iconClose.style.display = "none";
      } else {
        mobileMenu.classList.add("navbar-mobile-visible");
        if (iconOpen) iconOpen.style.display = "none";
        if (iconClose) iconClose.style.display = "block";
      }
    });
  }

  /* ---- Photo carousel ---- */
  var carousel = document.querySelector("[data-carousel='intro']");
  if (carousel) {
    var images = carousel.querySelectorAll("[data-carousel-item]");
    var dots = carousel.querySelectorAll("[data-dot]");
    var currentIndex = 0;
    var total = images.length;

    function showSlide(index) {
      for (var i = 0; i < total; i++) {
        images[i].classList.remove("intro-carousel-img-active");
        if (dots[i]) dots[i].classList.remove("intro-dot-active");
      }
      images[index].classList.add("intro-carousel-img-active");
      if (dots[index]) dots[index].classList.add("intro-dot-active");
      currentIndex = index;
    }

    for (var d = 0; d < dots.length; d++) {
      (function (idx) {
        dots[idx].addEventListener("click", function () {
          showSlide(idx);
        });
      })(d);
    }

    setInterval(function () {
      showSlide((currentIndex + 1) % total);
    }, 4000);
  }

  /* ---- Scroll down button ---- */
  var scrollBtn = document.querySelector("[data-action='scroll-down']");
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      var target = document.getElementById("intro-section");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  /* ---- Watch documentary button ---- */
  var docBtn = document.querySelector("[data-action='watch-documentary']");
  if (docBtn) {
    docBtn.addEventListener("click", function () {
      window.open("https://www.youtube.com/watch?v=XhtFr-XmHSE", "_blank");
    });
  }

  /* ---- Active nav link highlight ---- */
  var currentPath = window.location.pathname.replace(/\/$/, "") || "/";
  var fileName = currentPath.split("/").pop();
  if (!fileName || fileName === "") fileName = "index.html";

  var navLinks = document.querySelectorAll("[data-nav-link]");
  for (var n = 0; n < navLinks.length; n++) {
    var href = navLinks[n].getAttribute("href");
    if (href === fileName || (fileName === "index.html" && (href === "/" || href === "index.html"))) {
      navLinks[n].classList.add("navbar-link-active");
    }
  }

  var mobileNavLinks = document.querySelectorAll("[data-nav-mobile-link]");
  for (var m = 0; m < mobileNavLinks.length; m++) {
    var mhref = mobileNavLinks[m].getAttribute("href");
    if (mhref === fileName || (fileName === "index.html" && (mhref === "/" || mhref === "index.html"))) {
      mobileNavLinks[m].classList.add("navbar-mobile-link-active");
    }
  }

});
