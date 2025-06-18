const swiperHome = new Swiper('.home__swiper', {
  loop: true,
  slidesPerView: 'auto',
  
  pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
      },



  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  }
});

console.log('Swiper version:', Swiper?.version);