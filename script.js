/* ============================================================
   Warkop Pancong Yeye – script.js
   ============================================================
   Handles:
   1. Navbar scroll effect (glassmorphism shadow)
   2. Mobile hamburger menu toggle
   3. Lightbox modal (open, close, keyboard Esc, focus trap)
   4. Smooth-close mobile menu on nav click
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. NAVBAR SCROLL EFFECT
     ---------------------------------------------------------- */
  var header = document.getElementById('site-header');

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // init on load


  /* ----------------------------------------------------------
     2. MOBILE HAMBURGER MENU
     ---------------------------------------------------------- */
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu   = document.getElementById('mobile-menu');

  function toggleMobileMenu() {
    var isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
    hamburgerBtn.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.setAttribute('aria-hidden', String(isOpen));
  }

  hamburgerBtn.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when a link inside is clicked
  var mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', function () {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
    });
  }


  /* ----------------------------------------------------------
     3. LIGHTBOX
     ---------------------------------------------------------- */
  var lightbox       = document.getElementById('lightbox');
  var lightboxImg    = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var lightboxClose  = document.getElementById('lightbox-close');
  var lightboxBackdrop = document.getElementById('lightbox-backdrop');
  var lastFocusedElement = null;

  /**
   * Open lightbox with the given src, alt, and caption text
   */
  function openLightbox(src, alt, caption) {
    lastFocusedElement = document.activeElement;

    lightboxImg.setAttribute('src', src);
    lightboxImg.setAttribute('alt', alt);
    lightboxCaption.textContent = caption || '';

    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');

    // Focus the close button so keyboard users can close immediately
    lightboxClose.focus();
  }

  /**
   * Close lightbox and restore focus
   */
  function closeLightbox() {
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');

    // Clear src to stop any loading
    lightboxImg.setAttribute('src', '');
    lightboxImg.setAttribute('alt', '');
    lightboxCaption.textContent = '';

    // Restore focus to the element that triggered the lightbox
    if (lastFocusedElement) {
      lastFocusedElement.focus();
      lastFocusedElement = null;
    }
  }

  // Close button click
  lightboxClose.addEventListener('click', closeLightbox);

  // Backdrop click
  lightboxBackdrop.addEventListener('click', closeLightbox);

  // Keyboard: Escape to close, Tab trap inside lightbox
  lightbox.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      e.preventDefault();
      closeLightbox();
    }

    // Simple focus trap: keep focus on close button when Tab is pressed
    if (e.key === 'Tab') {
      e.preventDefault();
      lightboxClose.focus();
    }
  });

  // Bind all lightbox triggers (buttons with data-lightbox-src)
  var triggers = document.querySelectorAll('[data-lightbox-src]');
  for (var j = 0; j < triggers.length; j++) {
    triggers[j].addEventListener('click', function () {
      var src     = this.getAttribute('data-lightbox-src');
      var alt     = this.getAttribute('data-lightbox-alt')     || '';
      var caption = this.getAttribute('data-lightbox-caption') || '';
      openLightbox(src, alt, caption);
    });
  }

})();
