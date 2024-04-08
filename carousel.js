



document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        // slidesPerGroup: 3,
        loop: true,
        centerSlide: true, 
        fade: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            520:{
                slidesPerView: 2,
            },
           950:{
                slidesPerView: 3,
            },
        },


    });
});




var swiper = new Swiper('.swiper-container', {
    // Opties voor de carrousel
    loop: true, // Oneindige loop
    slidesPerView: 'auto', // Pas aantal zichtbare slides aan op basis van schermgrootte
    spaceBetween: 20, // Afstand tussen slides
    autoplay: {
      delay: 5000, // Interval tussen slides in milliseconden (hier 5 seconden)
    },
    pagination: {
      el: '.swiper-pagination', // Element voor de paginatie
      clickable: true, // Klikbaarheid van paginatie
    },
  });