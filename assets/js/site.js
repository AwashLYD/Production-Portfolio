document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if (themeIcon) {
      themeIcon.className = 'bi bi-sun';
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');

      const isDark = document.body.classList.contains('dark-theme');

      if (isDark) {
        localStorage.setItem('theme', 'dark');
        if (themeIcon) themeIcon.className = 'bi bi-sun';
      } else {
        localStorage.setItem('theme', 'light');
        if (themeIcon) themeIcon.className = 'bi bi-moon-stars';
      }
    });
  }

  // Typed effect
  const typedElement = document.querySelector('.typed');
  if (typedElement && typeof Typed !== 'undefined') {
    const typedItems = typedElement.getAttribute('data-typed-items');
    if (typedItems) {
      new Typed('.typed', {
        strings: typedItems.split(',').map(item => item.trim()),
        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1600,
        loop: true,
        smartBackspace: true
      });
    }
  }

  // Mobile navbar toggle fix
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav && typeof bootstrap !== 'undefined') {
    const navCollapse = new bootstrap.Collapse(mainNav, { toggle: false });

    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.contains('show');

      if (isOpen) {
        navCollapse.hide();
      } else {
        navCollapse.show();
      }
    });

    mainNav.addEventListener('shown.bs.collapse', () => {
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('nav-open');
    });

    mainNav.addEventListener('hidden.bs.collapse', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });

    // Close menu when clicking a nav link on mobile
    const navLinks = mainNav.querySelectorAll('.nav-link, .btn');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 992 && mainNav.classList.contains('show')) {
          navCollapse.hide();
        }
      });
    });

    // Optional: close when tapping outside menu on mobile
    document.addEventListener('click', (event) => {
      const clickedInsideNav = mainNav.contains(event.target);
      const clickedToggle = navToggle.contains(event.target);

      if (
        window.innerWidth < 992 &&
        mainNav.classList.contains('show') &&
        !clickedInsideNav &&
        !clickedToggle
      ) {
        navCollapse.hide();
      }
    });
  }
});

  // Vanta background for contact CTA
  if (document.getElementById('contact-vanta') && typeof VANTA !== 'undefined') {
    VANTA.NET({
      el: "#contact-vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 220.00,
      minWidth: 220.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3b82f6,
      backgroundColor: 0x09111f,
      points: 10.0,
      maxDistance: 20.0,
      spacing: 16.0,
      showDots: true
    });
  }


  // Testimonials slider
  if (document.querySelector('.testimonial-swiper') && typeof Swiper !== 'undefined') {
    new Swiper('.testimonial-swiper', {
      loop: true,
      speed: 600,
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.testimonial-pagination',
        clickable: true
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }
      }
    });
  }
