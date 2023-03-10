window.addEventListener("scroll", function () {
  // codice per gestire lo scrolling
});

const navbar = document.getElementById("navbar");
const navbarPosition = navbar.offsetTop;

function updateNavbar() {
  if (window.pageYOffset >= navbarPosition) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", updateNavbar);