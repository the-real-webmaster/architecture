const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
} );


const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,

  breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1440: {
          slidesPerView: 3.2,
        },
      },

  navigation: {
    nextEl: '.projects__arrow-next',
    prevEl: '.projects__arrow-prev',
  },
});

