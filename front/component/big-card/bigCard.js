import funkoData from '/back/data/funkoData.js';
import tools from '/front/js/tools.js'

const collectionsCount = funkoData.getCollectionCount()
const collectionsIndex = tools.generateArrayRandomNumbers(collectionsCount - 1, 3)


//Agrego el CSS
tools.loadCSS('front/component/big-card/bigCard.css')
// Obtengo una referencia a la sección donde insertar el contenido
const section = document.querySelector('section.collections');
let contenidoHTML = '';

for (let index = 0; index < collectionsIndex.length; index++) {
  // Selecciono la coleccion actual por el indice
  const currentCollection = funkoData.getCollectionByIndex(collectionsIndex[index]);
  // Selecciono los funkos con el mismo indice
  const funkos = funkoData.getFunkosByCollectionID(currentCollection.id);

  const funkoByRandom = tools.generateRandomNumber(0, funkos.length - 1);
  currentCollection.img = funkos[funkoByRandom].img1;
  currentCollection.nameFunkoImg = tools.capitalizeFirstLetters(funkos[funkoByRandom].name);

  // Creo una variable con el contenido HTML que voy a insertar
  contenidoHTML += `
    <article class="card-collection" data-collection-id="${currentCollection.id}">
      <div class="card-collection__content">
        <h2 class="card-collection__title text--upper">
          ${currentCollection.name}
        </h2>
        <p class="card-collection__description">
          ${currentCollection.description}
        </p>
        <hr class="card-collection__line" />
        <button class="btn-large card-collection__button text--upper">ver coleccion</button>
      </div>
      <figure class="card-collection__image">
        <img src="/front/img/shop/${currentCollection.imgPath}/${currentCollection.img}" alt="${currentCollection.nameFunkoImg} image"/>
      </figure>
    </article>
  `;
}

// Inserto el contenido HTML dentro de la sección
section.innerHTML = contenidoHTML;

// obtengo una referencia a todos los botones de las tarjetas
const botones = document.querySelectorAll('.card-collection__button');

// Agrego el evento a cada botón
botones.forEach((boton, index) => {
  boton.addEventListener('click', () => {
    const currentCollection = funkoData.getCollectionByIndex(collectionsIndex[index]);
    const collectionID = currentCollection.id;

    // Genero la URL con los datos de la colección
    const url = `/front/pages/collection/collection.html?id=${encodeURIComponent(collectionID)}`;

    // Redirijo a la página de la colección
    window.location.href = url;
  });
});


// <a href="./front/pages/collection/star_wars/star_wars_collection.html" class="btn-large card-collection__button text--upper">ver coleccion</a>
