// document.addEventListener('DOMContentLoaded', function () {
//     let multipleCardCarousel = document.querySelector("#carouselExampleControls");


//     if (window.matchMedia("(min-width: 768px)").matches) {
//       let carousel = new bootstrap.Carousel(multipleCardCarousel, {
//         interval: false, // Disable automatic sliding
//         wrap: false, // Prevent wrapping at the end
//       });


//       let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
//       let cardWidth = document.querySelector(".carousel-item").offsetWidth;
//       let scrollPosition = 0;


//       document.querySelector("#carouselExampleControls .carousel-control-next").addEventListener("click", function () {
//         if (scrollPosition < carouselWidth - cardWidth * 4) {
//           scrollPosition += cardWidth;
//           document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//         }
//       });


//       document.querySelector("#carouselExampleControls .carousel-control-prev").addEventListener("click", function () {
//         if (scrollPosition > 0) {
//           scrollPosition -= cardWidth;
//           document.querySelector("#carouselExampleControls .carousel-inner").scroll({ left: scrollPosition, behavior: 'smooth' });
//         }
//       });
//     } else {
//       multipleCardCarousel.classList.add("slide");
//     }
//   });
  



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });




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