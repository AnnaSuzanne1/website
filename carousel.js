



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


function toggleTheme() {
    console.log("Toggle Theme function is called");
    var body = document.body;
    // Controleer of het 'data-bs-theme' attribuut al is ingesteld op 'dark'
    if (body.getAttribute('data-bs-theme') === 'dark') {
        // Verwijder het 'data-bs-theme' attribuut als het al 'dark' is
        body.removeAttribute('data-bs-theme');
    } else {
        // Voeg het 'data-bs-theme' attribuut toe met de waarde 'dark'
        body.setAttribute('data-bs-theme', 'dark');
    }
}

// Selecteer alle elementen met de klasse "toggleThemeBtn"
var toggleThemeBtns = document.getElementsByClassName('toggleThemeBtn');
console.log("Number of toggleThemeBtns:", toggleThemeBtns.length);

// Itereer door alle gevonden knoppen en voeg een klikgebeurtenis toe aan elk van hen
for (var i = 0; i < toggleThemeBtns.length; i++) {
    toggleThemeBtns[i].addEventListener('click', function() {
        console.log("Button is clicked");
        toggleTheme();
    });
}

