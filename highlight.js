// Wacht totdat de pagina geladen is
window.addEventListener("load", function () {
  // Controleer of de URL een hash heeft (#verwijzing-servicedesk)
  const elementId = window.location.hash.substring(1);
  if (elementId) {
    // Zoek het element met de bijbehorende id
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      // Voeg de highlight-klasse toe
      targetElement.classList.add("highlight");

      // Verwijder de highlight-klasse na 2 seconden
      setTimeout(() => {
        targetElement.classList.remove("highlight");
      }, 2000); // Duur van het highlight-effect
    }
  }
});
