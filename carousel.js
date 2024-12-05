console.log("carousel.js is loaded");

// Swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 25,
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

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});

// // Dark theme
// function toggleTheme() {
//     console.log("Toggle Theme function is called");
//     var body = document.body;
//     if (body.getAttribute('data-bs-theme') === 'dark') {
//         body.removeAttribute('data-bs-theme');
//     } else {
//         body.setAttribute('data-bs-theme', 'dark');
//     }
// }

// var toggleThemeBtns = document.getElementsByClassName('toggleThemeBtn');

// for (var i = 0; i < toggleThemeBtns.length; i++) {
//     toggleThemeBtns[i].addEventListener('click', function() {
//         console.log("Button is clicked");
//         toggleTheme();
//     });
// }

// // Dark theme
// function applyDarkTheme() {
//     var body = document.body;
//     body.setAttribute('data-bs-theme', 'dark');
// }

// function removeDarkTheme() {
//     var body = document.body;
//     body.removeAttribute('data-bs-theme');
// }

// // Check het voorkeursthema van de gebruiker
// function checkUserColorScheme() {
//     var darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
//     if (darkThemeQuery.matches) {
//         applyDarkTheme();
//     } else {
//         removeDarkTheme();
//     }

//     // Luister naar veranderingen in het voorkeursthema van de gebruiker
//     darkThemeQuery.addListener(function(e) {
//         if (e.matches) {
//             applyDarkTheme();
//         } else {
//             removeDarkTheme();
//         }
//     });
// }

// // Voer de check uit bij het laden van de pagina
// document.addEventListener('DOMContentLoaded', function() {
//     checkUserColorScheme();
// });

// cards informatieblok
// const infoData = {
//     info1: "Dit is de gedetailleerde informatie voor item 1.",
//     info2: "Dit is de gedetailleerde informatie voor item 2.",
//     info3: "Dit is de gedetailleerde informatie voor item 3.",
//     info4: "Dit is de gedetailleerde informatie voor item 4."
// };

// $(document).ready(function() {
//     console.log("Document is ready");
//     $('.card').click(function() {
//         console.log("Card clicked");
//         const infoKey = $(this).data('info');
//         console.log('Card clicked:', infoKey);
//         const infoText = infoData[infoKey];
//         console.log('Info text:', infoText);
//         $('#infoBlock .card-text').text(infoText);
//     });
// });
