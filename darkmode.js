document.addEventListener("DOMContentLoaded", function () {
  const toggleThemeBtn = document.querySelectorAll(".toggleThemeBtn");

  toggleThemeBtn.forEach((btn) => {
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



var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);