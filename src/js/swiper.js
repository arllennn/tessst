const swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
        slidesPerView:1,
    },
    889: {
        slidesPerView:1,
    },
    1024: {
        slidesPerView:1,
    },
    1400: {
        slidesPerView:1,
    }
}
});

