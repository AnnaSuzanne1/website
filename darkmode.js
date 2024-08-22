document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeBtn = document.querySelectorAll(".toggleThemeBtn");

    toggleThemeBtn.forEach(btn => {
        btn.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            // Optioneel: opslaan van de voorkeur in localStorage
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.removeItem("theme");
            }
        });
    });

    // Optioneel: controleer de opgeslagen voorkeur bij het laden van de pagina
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});