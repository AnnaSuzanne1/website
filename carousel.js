


// Swiper 
document.addEventListener('DOMContentLoaded', function() {
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

// Dark theme
function applyDarkTheme() {
    var body = document.body;
    body.setAttribute('data-bs-theme', 'dark');
}

function removeDarkTheme() {
    var body = document.body;
    body.removeAttribute('data-bs-theme');
}

// Check het voorkeursthema van de gebruiker
function checkUserColorScheme() {
    var darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (darkThemeQuery.matches) {
        applyDarkTheme();
    } else {
        removeDarkTheme();
    }

    // Luister naar veranderingen in het voorkeursthema van de gebruiker
    darkThemeQuery.addListener(function(e) {
        if (e.matches) {
            applyDarkTheme();
        } else {
            removeDarkTheme();
        }
    });
}

// Voer de check uit bij het laden van de pagina
document.addEventListener('DOMContentLoaded', function() {
    checkUserColorScheme();
});





// Contactformulier
// Initialization for ES Users

// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });

document.getElementById("go-back").addEventListener("click", function(event) {
    event.preventDefault(); // Zorgt ervoor dat de standaard actie van de link niet wordt uitgevoerd
    window.history.back(); // Gaat naar de vorige pagina
});
