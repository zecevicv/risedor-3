/* #Projects Slider
  ======================================================= */
if (document.querySelector('.projects .swiper')) {
  new Swiper(".projects .swiper", {
    breakpoints: {
      0: {
        allowTouchMove: true,
        centeredSlides: true,
        slidesPerView: 1.35,
        loop: true
      },
      1024: {
        allowTouchMove: false,
        loop: false,
        slidesPerView: 3
      }
    }
  });
}

/* #Popup Contact
  ======================================================= */
const popupContactTogglers = document.querySelectorAll('.popup-contact-toggler');
const popupContact = document.querySelector('.popup-contact');
const popupContactClose = document.querySelector('.popup-contact .popup-close');

popupContactTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.add('no-scroll');
    popupContact.classList.add('show');
  });
});

/* #Popup Thanks
  ======================================================= */
const popupThanksTogglers = document.querySelectorAll('.popup-thanks-toggler');
const popupThanks = document.querySelector('.popup-thanks');
const popupThanksClose = document.querySelector('.popup-thanks .popup-close');

popupThanksTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.add('no-scroll');
    popupThanks.classList.add('show');
    popupContact.classList.remove('show');
  });
});