


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



// Dark theme 
function toggleTheme() {
    console.log("Toggle Theme function is called");
    var body = document.body;
    if (body.getAttribute('data-bs-theme') === 'dark') {
        body.removeAttribute('data-bs-theme');
    } else {
        body.setAttribute('data-bs-theme', 'dark');
    }
}

var toggleThemeBtns = document.getElementsByClassName('toggleThemeBtn');

for (var i = 0; i < toggleThemeBtns.length; i++) {
    toggleThemeBtns[i].addEventListener('click', function() {
        console.log("Button is clicked");
        toggleTheme();
    });
}






// Contactformulier
// Initialization for ES Users

// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });