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

/* #Sticky Btn
  ======================================================= */
const stickyBtn = document.querySelector('.sticky-btn');
const bannerContact = document.querySelector('.banner-contact');
const popupClose = document.querySelector('.popup-close');

stickyBtn.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.add('no-scroll');
  bannerContact.classList.add('show');
});

popupClose.addEventListener('click', (e) => {
  e.preventDefault();
  body.classList.remove('no-scroll');
  bannerContact.classList.remove('show');
});