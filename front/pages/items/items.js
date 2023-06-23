import funkoData from "/back/data/funkoData.js";
import tools from "./front/js/tools.js";

// Obtengo los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const funkoID = parseInt(params.get("id"));

// Busco el item por el id
const currentFunko = funkoData.getFunkoById(funkoID);
// Obtengo una referencia al título actual de la página
const pageTitle = document.title;
// Defino el nuevo título
const newTitle = `FunkoShop - ${currentFunko.name}`;
// Cambio el título de la página
document.title = newTitle;

// Cargo el CSS
tools.loadCSS("./front/pages/items/items.css");
// Obtengo una referencia a la sección donde insertar el contenido
const mainItem = document.querySelector(".main-item");
let contenidoHTML = `<article class="card-item-landscape">
  <div class="card-item-landscape__content">
    <p class="card-item-lanscape__franchise text--upper">${
      currentFunko.collection
    }</p>
    <h2 class="card-item-landscape__title text--upper">${currentFunko.name}</h2>
    <p class="card-item-landscape__description">
      ${currentFunko.description}
    </p>
    <p class="card-item-landscape__price">$ ${currentFunko.price}.-</p>
    <div class="card-item-landscape__amount">
      <div class="amount__count">
        <button class="amount__btn-subtract">-</button>
        <input type="number" name="" id="amount__input" />
        <button class="amount__btn-add">+</button>
      </div>
      <button class="add-to-cart">Agregar al carrito</button>
    </div>
    <div class="payment-methods">
      <a class="payment-methods__view" href="#">Ver métodos de pago</a> -
      <span class="payment-methods__selected">${currentFunko.promotion}</span>
    </div>
  </div>
  <figure class="card-item-landscape__image">
    <img
      src="./front/img/shop/${currentFunko.imgPath}/${currentFunko.img1}"
      alt="${tools.capitalizeFirstLetters(currentFunko.name)} Image"
    />
  </figure>
</article>`;

// Inserto el contenido HTML dentro de la sección
mainItem.innerHTML = contenidoHTML;
