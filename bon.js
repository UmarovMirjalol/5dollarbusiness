/**
 * BON! — Premium Café Landing Page
 * JavaScript Animation & Interaction System
 */

'use strict';

/* ─────────────────────────────────────────────
   Utility: Check reduced motion preference
   ─────────────────────────────────────────── */
const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─────────────────────────────────────────────
   Page Load Sequence
   ─────────────────────────────────────────── */
function initHeroEntrance() {
  if (prefersReducedMotion()) {
    document.querySelectorAll([
      '#hero-img', '#hero-eyebrow', '.hero-line',
      '#hero-subline', '#hero-body', '#hero-buttons',
      '.hero-scroll-indicator', '.navbar'
    ].join(',')).forEach(el => {
      el.classList.add('visible', 'loaded');
      el.style.opacity = '1';
    });
    document.querySelector('.navbar').classList.add('loaded');
    return;
  }

  const heroImg = document.getElementById('hero-img');
  const eyebrow  = document.getElementById('hero-eyebrow');
  const lines    = document.querySelectorAll('.hero-line');
  const subline  = document.getElementById('hero-subline');
  const body     = document.getElementById('hero-body');
  const buttons  = document.getElementById('hero-buttons');
  const scrollInd = document.querySelector('.hero-scroll-indicator');
  const navbar   = document.getElementById('navbar');

  // Step 1 — Image scale reveal (immediate)
  requestAnimationFrame(() => {
    heroImg.classList.add('loaded');
  });

  // Step 2 — Navbar appears
  setTimeout(() => navbar.classList.add('loaded'), 200);

  // Step 3 — Eyebrow
  setTimeout(() => eyebrow.classList.add('visible'), 500);

  // Step 4 — Headline lines (staggered)
  lines.forEach((line, i) => {
    setTimeout(() => line.classList.add('visible'), 700 + i * 200);
  });

  // Step 5 — Subline
  setTimeout(() => subline.classList.add('visible'), 1150);

  // Step 6 — Body text
  setTimeout(() => body.classList.add('visible'), 1300);

  // Step 7 — Buttons
  setTimeout(() => buttons.classList.add('visible'), 1550);

  // Step 8 — Scroll indicator
  setTimeout(() => scrollInd && scrollInd.classList.add('visible'), 2000);
}

/* ─────────────────────────────────────────────
   Navbar Scroll Behavior
   ─────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  let lastScroll = 0;
  const threshold = 80;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > threshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Init on load
}

/* ─────────────────────────────────────────────
   Mobile Navigation
   ─────────────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn  = document.getElementById('mobile-nav-close');
  const links     = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden', 'false');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', openNav);
  closeBtn && closeBtn.addEventListener('click', closeNav);

  links.forEach(link => {
    link.addEventListener('click', closeNav);
  });

  // Close on backdrop click
  mobileNav.addEventListener('click', (e) => {
    if (e.target === mobileNav) closeNav();
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) closeNav();
  });
}

/* ─────────────────────────────────────────────
   Scroll Reveal (IntersectionObserver)
   ─────────────────────────────────────────── */
function initScrollReveal() {
  if (prefersReducedMotion()) {
    document.querySelectorAll(
      '.reveal-up, .reveal-left, .reveal-right, .reveal-clip, .reveal-clip-dark'
    ).forEach(el => {
      el.classList.add('visible');
      el.style.opacity = '1';
      el.style.transform = 'none';
      el.style.clipPath = 'none';
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12,
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right, .reveal-clip, .reveal-clip-dark'
  ).forEach(el => revealObserver.observe(el));
}

/* ─────────────────────────────────────────────
   Parallax Effect
   ─────────────────────────────────────────── */
function initParallax() {
  if (prefersReducedMotion()) return;

  const parallaxImg = document.getElementById('parallax-img');
  const parallaxWrap = document.getElementById('parallax-wrap');
  if (!parallaxImg || !parallaxWrap) return;

  let ticking = false;

  const updateParallax = () => {
    const section = document.getElementById('visual-break');
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const viewH = window.innerHeight;

    if (rect.bottom < 0 || rect.top > viewH) return;

    const progress = (viewH - rect.top) / (viewH + rect.height);
    const offset = (progress - 0.5) * 80;
    parallaxImg.style.transform = `translateY(${offset}px)`;

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  updateParallax();
}

/* ─────────────────────────────────────────────
   Menu Tabs
   ─────────────────────────────────────────── */
function initMenuTabs() {
  const tabs   = document.querySelectorAll('.menu-tab');
  const panels = document.querySelectorAll('.menu-panel');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      // Update tabs
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      panels.forEach(panel => {
        panel.classList.remove('active');
      });
      const targetPanel = document.querySelector(`[data-panel="${target}"]`);
      if (targetPanel) targetPanel.classList.add('active');
    });

    // Keyboard navigation
    tab.addEventListener('keydown', (e) => {
      const tabsArr = Array.from(tabs);
      const idx = tabsArr.indexOf(tab);
      if (e.key === 'ArrowRight' && idx < tabsArr.length - 1) {
        tabsArr[idx + 1].click();
        tabsArr[idx + 1].focus();
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        tabsArr[idx - 1].click();
        tabsArr[idx - 1].focus();
      }
    });
  });
}

/* ─────────────────────────────────────────────
   Smooth Anchor Scrolling
   ─────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '#!') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.getElementById('navbar')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─────────────────────────────────────────────
   Gallery Hover (subtle cursor parallax)
   ─────────────────────────────────────────── */
function initGalleryInteractions() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.gallery-item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      img.style.transform = `scale(1.07) translate(${x * -8}px, ${y * -8}px)`;
    });

    item.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────────
   Product Item Interactions
   ─────────────────────────────────────────── */
function initProductInteractions() {
  if (prefersReducedMotion()) return;

  document.querySelectorAll('.product-item').forEach(item => {
    const img = item.querySelector('img');
    if (!img) return;

    item.addEventListener('mousemove', (e) => {
      const rect = item.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      img.style.transform = `scale(1.06) translate(${x * -6}px, ${y * -6}px)`;
    });

    item.addEventListener('mouseleave', () => {
      img.style.transform = '';
    });
  });
}

/* ─────────────────────────────────────────────
   Button Micro-interactions
   ─────────────────────────────────────────── */
function initButtonInteractions() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
      const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
      btn.style.setProperty('--origin-x', `${x}%`);
      btn.style.setProperty('--origin-y', `${y}%`);
    });
  });
}

/* ─────────────────────────────────────────────
   Lazy Load Images
   ─────────────────────────────────────────── */
function initLazyLoad() {
  if ('loading' in HTMLImageElement.prototype) return; // native support

  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        lazyObserver.unobserve(img);
      }
    });
  }, { rootMargin: '200px' });

  lazyImages.forEach(img => lazyObserver.observe(img));
}

/* ─────────────────────────────────────────────
   Copy image paths to the page (local serving)
   ─────────────────────────────────────────── */
function resolveLocalImages() {
  // Map generated image filenames to the ones used in HTML
  const imageMap = {
    'hero_cafe.jpg':         'hero_cafe_1787676113861.jpg',
    'intro_editorial.jpg':   'intro_editorial_1787676145538.jpg',
    'product_croissant.jpg': 'product_croissant_1787676163973.jpg',
    'product_coffee.jpg':    'product_coffee_1787676179379.jpg',
    'product_desserts.jpg':  'product_desserts_1787676191197.jpg',
    'product_breakfast.jpg': 'product_breakfast_1787676206680.jpg',
  };

  document.querySelectorAll('img').forEach(img => {
    const src = img.getAttribute('src');
    if (imageMap[src]) {
      // First try loading the alias, fall back to the generated name
      img.onerror = function() {
        // If alias not found, try from the artifacts directory
        const artifactBase = 'C:/Users/user/.gemini/antigravity-ide/brain/a297cead-9c22-44aa-8f47-cd912947547e/';
        this.src = artifactBase + imageMap[src];
        this.onerror = null;
      };
    }
  });
}

/* ─────────────────────────────────────────────
   Filmstrip Drag Interaction
   ─────────────────────────────────────────── */
function initFilmstrip() {
  const outer = document.querySelector('.filmstrip-outer');
  const track = document.getElementById('filmstrip-track');
  if (!outer || !track) return;

  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let manualOffset = 0;

  outer.addEventListener('mousedown', (e) => {
    isDown = true;
    outer.classList.add('active');
    startX = e.pageX - outer.offsetLeft;
    scrollLeft = outer.scrollLeft;
  });

  outer.addEventListener('mouseleave', () => { isDown = false; });
  outer.addEventListener('mouseup', () => { isDown = false; });

  outer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - outer.offsetLeft;
    const walk = (x - startX) * 1.5;
    outer.scrollLeft = scrollLeft - walk;
  });

  // Pause on touch
  outer.addEventListener('touchstart', () => {
    track.style.animationPlayState = 'paused';
  }, { passive: true });
  outer.addEventListener('touchend', () => {
    track.style.animationPlayState = 'running';
  }, { passive: true });

  // Reduced motion: stop animation
  if (prefersReducedMotion()) {
    track.style.animation = 'none';
  }
}

/* ─────────────────────────────────────────────
   Stagger animation for section children
   ─────────────────────────────────────────── */
function initSectionStagger() {
  document.querySelectorAll('.menu-item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });
}


/* ─────────────────────────────────────────────
   Initialize everything
   ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeroEntrance();
  initNavbar();
  initMobileNav();
  initScrollReveal();
  initParallax();
  initMenuTabs();
  initSmoothScroll();
  initProductInteractions();
  initButtonInteractions();
  initLazyLoad();
  initSectionStagger();
  initFilmstrip();
});


// Also handle window load for images
window.addEventListener('load', () => {
  const heroImg = document.getElementById('hero-img');
  if (heroImg && !heroImg.classList.contains('loaded')) {
    heroImg.classList.add('loaded');
  }
});
