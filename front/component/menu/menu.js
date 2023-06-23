import tools from "/front/js/tools.js";

/**
 * FunkoShop Main Menu
 * Menu principal proyecto curso Codo a Codo 2023
 */
// Cargo el CSS
tools.loadCSS("/front/component/menu/menu.css");

// Obtengo una referencia a la sección donde insertar el contenido
let mainHeader = document.querySelector(".main-header");
let mainMenuContent = `<div class="main-nav">
      <div class="main-nav__content">
        <a href="/index.html" class="main-nav__brand">
          <img src="/front/img/branding/logo_light_horizontal.svg" alt="Logo FunkoShop" />
        </a>
        <ul class="main-nav__items">
          <li>
            <a class="main-nav__link" href="/front/pages/shop/shop.html">Shop</a>
          </li>
          <li><a class="main-nav__link" href="#">Contacto</a></li>
          <li><a class="main-nav__link" href="#">Login</a></li>
          <li>
            <a class="main-nav__link" href="#"><i class="material-icons">shopping_cart</i></a>
          </li>
        </ul>
        <i id="main-menu" class="material-icons main-nav__btn">menu</i>
      </div>
      <ul class="main-nav__dropdown" id="main-nav__dropdown">
        <li class="main-nav-dropdown__item">
          <a class="main-nav-dropdown__link" href="/front/pages/shop/shop.html">Shop</a>
        </li>
        <li class="main-nav-dropdown__item">
          <a class="main-nav-dropdown__link" href="#">Contacto</a>
        </li>
        <li class="main-nav-dropdown__item">
          <a class="main-nav-dropdown__link" href="#">Login</a>
        </li>
        <li class="main-nav-dropdown__item">
          <a class="main-nav-dropdown__link" href="#"><i class="material-icons">shopping_cart</i></a>
        </li>
      </ul>
    </div>`;
// Inserto el contenido HTML dentro de la sección
mainHeader.innerHTML = mainMenuContent;

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
