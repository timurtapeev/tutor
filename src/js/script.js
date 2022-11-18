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

next.addEventListener('click', () => {
    if (offset == 260 * (slides.length - 3)) {
        offset = 0;
    } else {
        offset += 260; 
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
        offset = 260 * (slides.length - 3);
    } else {
        offset -= 260;
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }
});

