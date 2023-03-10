const carousel = document.querySelector("#title-carousel .carousel-inner");

// Creo una copia degli elementi originali
const items = Array.from(carousel.querySelectorAll(".carousel-item")).map((item) => item.cloneNode(true));

// Aggiungo la copia alla fine del carosello
items.forEach((item) => {
  carousel.appendChild(item);
});

// Aggiungo un event listener per la pressione dei bottoni
document.querySelectorAll("#title-carousel .carousel-control-prev, #title-carousel .carousel-control-next").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("carousel-control-prev")) {
      carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild);
    } else {
      carousel.appendChild(carousel.firstElementChild);
    }
  });
});