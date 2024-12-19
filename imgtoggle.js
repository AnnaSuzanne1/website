const imageElement = document.getElementById('toggleImage');

// Definieer de twee afbeeldingen
const image1 = "Willem-Hoogendoorn-Fotografie205_vierkant.jpg";
const image2 = "DAM05426-bewerkt-min (1).jpg";

// Eventlistener voor klikken
imageElement.addEventListener('click', () => {
  // Controleer welke afbeelding momenteel wordt getoond
  if (imageElement.src.includes(image1)) {
    imageElement.src = "./images/contact-img/" + image2;
  } else {
    imageElement.src = "./images/contact-img/" + image1;
  }
});