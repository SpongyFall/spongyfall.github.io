/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*=============== HIDE MENU ===============*/
if (navClose && navMenu) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu?.classList.remove('show-menu');
  });
});

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById('header');

  if (window.scrollY >= 50) {
    header?.classList.add('blur-header');
  } else {
    header?.classList.remove('blur-header');
  }
};

window.addEventListener('scroll', blurHeader);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUpButton = document.getElementById('scroll-up');

  if (window.scrollY >= 350) {
    scrollUpButton?.classList.add('show-scroll');
  } else {
    scrollUpButton?.classList.remove('show-scroll');
  }
};

window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector(`.nav__menu a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active-link');
    } else {
      navLink?.classList.remove('active-link');
    }
  });
};

window.addEventListener('scroll', scrollActive);
blurHeader();
scrollUp();
scrollActive();

/*=============== SCROLL REVEAL ANIMATION ===============*/
if (typeof ScrollReveal !== 'undefined') {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 900,
    delay: 100
  });

  scrollReveal.reveal('.home__content, .project-hero__content, .section__subtitle, .section__title');
  scrollReveal.reveal('.home__image, .project-hero__media, .about__content, .skills__content, .contact__links', { delay: 200 });
  scrollReveal.reveal('.services__card, .projects__card, .project-role__card, .project-gallery__item, .project-link', { interval: 100 });
}
