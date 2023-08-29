const swiper = document.querySelector('.swiper');
if (swiper != null) {
  new Swiper(swiper, {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    // breakpoints: {
    //   1024: {
    //     slidesPerView: 5,
    //     spaceBetween: 75,
    //   },
    //   1366: {
    //     slidesPerView: 6,
    //     spaceBetween: 100,
    //   },
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
