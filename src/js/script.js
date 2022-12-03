
// slider
let offset = 0;
let slideIndex = 1;

const slides = document.querySelectorAll('.slider__item'),
      prev = document.querySelector('.slider__arrow_prev'),
      next = document.querySelector('.slider__arrow_next'),
      slidesWrapper = document.querySelector('.slider__wrapper'),
      width = window.getComputedStyle(slidesWrapper).width,
      slidesField = document.querySelector('.slider__list');

slidesField.style.width = 100 * slides.length + '%';
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';

const scrollWidth = 255;

next.addEventListener('click', () => {
    if (offset == scrollWidth * (slides.length - 3)) {
        offset = 0;
    } else {
        offset += scrollWidth; 
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }
});

prev.addEventListener('click', () => {
    if (offset == 0) {
        offset = scrollWidth * (slides.length - 3);
    } else {
        offset -= scrollWidth;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
});

//scroll nav
const navigationPanel = document.querySelector('.nav');

function countBlockHeight(selector) {
    let promoBlock = document.querySelector(selector);
    return promoBlock.scrollHeight;
}

document.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if(countBlockHeight('.promo') < scrollTop + 50) {
        navigationPanel.classList.add('nav_scrolled');
    } else {
        navigationPanel.classList.remove('nav_scrolled');
    }
});

//hamburger

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__list');
const body = document.querySelector('body');
const navBackground = document.querySelector('.nav__background');
const navItemList = document.querySelectorAll('.nav__item');

hamburger.addEventListener('click', () => {
    closeNavMenu();
});

navItemList.forEach(elem => {
    elem.addEventListener('click', ()   => {
        if (hamburger.classList.contains('hamburger_active')) {
            closeNavMenu();
        }
    });
});

function closeNavMenu() {
    navMenu.classList.toggle('nav__list_active');
    hamburger.classList.toggle('hamburger_active');
    if (hamburger.classList.contains('hamburger_active')) {
        body.style.overflow = 'hidden';
        navigationPanel.classList.remove('nav_scrolled');
        navBackground.classList.add('nav__background_active');
    } else {
        body.style.overflow = '';
        navBackground.classList.remove('nav__background_active');
    }
}