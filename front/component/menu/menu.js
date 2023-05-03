/**
 * FunkoShop Main Menu
 * Menu principal proyecto curso Codo a Codo 2023
 */

let mainMenu = document.querySelector("#main-menu");
mainMenu.addEventListener("click", () => menu());
let dropdown = document.querySelector(".main-nav__dropdown");
let button = document.querySelector(".main-nav__btn");
let nav = document.querySelector(".main-nav");

/**
 * Funcion principal para el manejo del menu
 */
function menu() {
  if (dropdown.style.display === "grid") {
    dropdown.style.display = "none";
    button.innerHTML = "menu";
  } else {
    dropdown.style.display = "grid";
    button.innerHTML = "close";
  }
}

/**
 * Cerrar el menú desplegable (si está abierto) al cambiar el tamaño de la ventana.
 */
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    dropdown.style.display = "none";
    button.innerHTML = "menu";
  }
});

/**
 * Si el menú desplegable está abierto y se detecta un clic fuera de él, el menú se cerrará.
 */
document.addEventListener("click", function (event) {
  let isClickInside = nav.contains(event.target);
  if (!isClickInside) {
    if (dropdown.style.display === "grid") {
      dropdown.style.display = "none";
      button.innerHTML = "menu";
    }
  }
});
