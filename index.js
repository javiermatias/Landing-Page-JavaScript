let slides = ["presentacion", "presentacion1", "presentacion2", "presentacion3"];
let slidesActual = 0;
// When the page content is ready...
document.addEventListener("DOMContentLoaded", async () => {
  document.getElementById("loading").style.display = "none";
  const initialLocale = supportedOrDefault(browserLocales(true));
  await setLocale(initialLocale, "index");
  bindLocaleSwitcher(initialLocale);
});

const carousel = document.querySelector('.carousel');
const gifos = document.querySelector('.gifos');

let flechaDer = document.getElementById("flecha-derecha");
let flechaIzq = document.getElementById("flecha-izquierda")

flechaDer.addEventListener('click', () => {
  sliders(true);
})
flechaIzq.addEventListener('click', () => {
  sliders(false);
})


function sliders(rigth) {
  if (rigth) {
    slidesActual++;
  } else {
    slidesActual--;
  }
  document.getElementById("flecha-izquierda").style.display = "block";
  document.getElementById("flecha-derecha").style.display = "block";

  if (slidesActual == 0) {
    document.getElementById("flecha-izquierda").style.display = "none";
  }

  if (slidesActual == 3) {
    document.getElementById("flecha-derecha").style.display = "none";
  }

  document.querySelectorAll('[id*="presentacion"]').forEach(node => node.style.display = "none");
  document.getElementById(slides[slidesActual]).style.display = "flex";

}

