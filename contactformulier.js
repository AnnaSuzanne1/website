// Contactformulier
// Initialization for ES Users

// import { Input, Ripple, initMDB } from "mdb-ui-kit";

// initMDB({ Input, Ripple });

document.getElementById("go-back").addEventListener("click", function (event) {
  event.preventDefault(); // Zorgt ervoor dat de standaard actie van de link niet wordt uitgevoerd
  window.history.back(); // Gaat naar de vorige pagina
});

// Selecteer de checkbox, submit button en het formulier
const toggleCheckbox = document.getElementById("toggleCheckbox");
const submitButton = document.getElementById("submitButton");
const contactForm = document.getElementById("contact-form");

// Functie om de validatie van het formulier te controleren
function checkFormValidation() {
  // Controleer of de checkbox is aangevinkt
  const isCheckboxChecked = toggleCheckbox.checked;

  // Controleer of het formulier geldig is
  const isFormValid = contactForm.checkValidity();

  // Schakel de knop in of uit afhankelijk van de validatie
  submitButton.disabled = !(isCheckboxChecked && isFormValid);

  // Wijzig de cursor op basis van de status van de knop
  if (submitButton.disabled) {
    submitButton.style.cursor = "not-allowed";
  } else {
    submitButton.style.cursor = "pointer";
  }
}

// Voeg event listeners toe aan de checkbox en de invoervelden
toggleCheckbox.addEventListener("change", checkFormValidation);

// Voeg event listeners toe aan alle invoervelden
const inputFields = contactForm.querySelectorAll("input, select, textarea");
inputFields.forEach((field) => {
  field.addEventListener("input", checkFormValidation);
});

// Zorg ervoor dat de juiste cursor wordt ingesteld bij het laden van de pagina
if (submitButton.disabled) {
  submitButton.style.cursor = "not-allowed";
}
