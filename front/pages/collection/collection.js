import funkoData from "/back/data/funkoData.js";
import tools from "/front/js/tools.js";

// Obtengo los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const collectionID = parseInt(params.get("id"));

// Selecciono la coleccion actual por el indice
const currentCollection = funkoData.getCollectionById(collectionID);
// Defino el nuevo título
const newTitle = `FunkoShop - ${tools.capitalizeFirstLetters(
  currentCollection.name
)} Collection`;
// Cambio el título de la página
document.title = newTitle;
// Agrego el CSS
tools.loadCSS("/front/pages/collection/collection.css");

const collectionsCardsContainer = document.querySelector(".main");
const collectionsCardsHTML = `<h1 id="collection-name" class="text--upper">${currentCollection.name}</h1>
<p id="collection-description">${currentCollection.description}</p>
<div class="collections-card__container"</div>`;

collectionsCardsContainer.innerHTML = collectionsCardsHTML;
