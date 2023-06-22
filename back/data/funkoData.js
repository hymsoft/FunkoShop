const collection = [
  {
    id: 1,
    name: "movies",
    description:
      "Completa tu colección con los Funko Pops de películas. ¡Iconos del cine en miniatura!",
    imgPath: "peliculas",
  },
  {
    id: 2,
    name: "star wars",
    description:
      "¡Viaja a una galaxia muy, muy lejana con la colección épica de Funko Pops de Star Wars!",
    imgPath: "star_wars",
  },
  {
    id: 3,
    name: "marvel",
    description:
      "¡Descubre el increíble universo Marvel con la colección de Funko Pops que reúne a tus héroes y villanos favoritos!",
    imgPath: "marvel",
  },
  {
    id: 4,
    name: "music",
    description:
      "¡Revive la magia de la música con la colección Funko Pop de tus artistas y bandas favoritas!",
    imgPath: "musica",
  },
  {
    id: 5,
    name: "animation",
    description:
      "¡Sumérgete en un mundo de aventuras y humor con la amplia colección Funko Pop de tus personajes favoritos de animación!",
    imgPath: "animacion",
  },
];

const promotions = [
  {
    id: 1,
    description: "3 cuotas sin interés",
  },
  {
    id: 2,
    description: "12 cuotas sin interés",
  },
];

const dues = [
  {
    id: 1,
    description: "1 cuota",
    interest: 0,
  },
  {
    id: 2,
    description: "2 cuotas",
    interest: 2,
  },
];

const funkos = [
  {
    id: 1,
    collectionID: 1,
    name: "CANDYMAN 1157",
    description:
      "¡Llévate a casa el terror con el Funko Pop de Candyman! Esta figura coleccionable captura la esencia oscura y aterradora del icónico personaje. Con su diseño detallado y su mirada intimidante, es el complemento perfecto para cualquier fan de las películas de terror. ¡Atrévete a tener a Candyman en tu colección y despierta el terror en tu estantería!",
    price: "15,490.00",
    stock: 10,
    promotionID: 2,
    duesID: 1,
    img1: "candyman1157.jpg",
    img2: "candyman1157-box.jpg",
    new: true,
  },
  {
    id: 2,
    collectionID: 2,
    name: "BOBA FETT 08",
    description:
      "Captura la esencia del cazarrecompensas galáctico con el icónico Funko Pop de la figura número 08.",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "bobafeet08.jpg",
    img2: "bobafeet08-box.jpg",
    new: true,
  },
  {
    id: 3,
    collectionID: 1,
    name: "Van Helsing 1075 Dracula",
    description:
      "El siniestro vampiro inmortal cobra vida en esta figura coleccionable que no puedes dejar escapar.",
    price: "15,490.00",
    stock: 10,
    promotionID: 2,
    duesID: 1,
    img1: "VanHelsing1075Dracula.jpg",
    img2: "VanHelsing1075Dracula-box.jpg",
    new: false,
  },
  {
    id: 4,
    collectionID: 3,
    name: "Carnage 367 Venom",
    description:
      "Un ser de pura oscuridad y caos se materializa en esta figura coleccionable llena de poder sobrenatural",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "Carnage367Venom.jpg",
    img2: "Carnage367Venom-box.jpg",
    new: false,
  },
  {
    id: 5,
    collectionID: 3,
    name: "Poison Spiderman 966 Venom",
    description:
      "Una oscura y letal transformación se desata en esta figura coleccionable que desafía a la araña",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "PoisonSpiderman966Venom.jpg",
    img2: "PoisonSpiderman966Venom-box.jpg",
    new: false,
  },
  {
    id: 6,
    collectionID: 4,
    name: "The Police Sting 118",
    description:
      "Captura la esencia del icónico músico en esta figura coleccionable inspirada en su inolvidable legado.",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "ThePoliceSting118.jpg",
    img2: "ThePoliceSting118-box.jpg",
    new: true,
  },
  {
    id: 7,
    collectionID: 5,
    name: "Scary Terry 300",
    description:
      "¡Tráete el terror y la diversión interdimensional a tu colección con el Funko Pop de Scary Terry de Rick and Morty!",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "ScaryTerry300.jpg",
    img2: "ScaryTerry300-box.jpg",
    new: false,
  },
  {
    id: 8,
    collectionID: 2,
    name: "Zorii Bliss 311",
    description:
      "Una misteriosa figura emerge de las sombras, lista para unirse a tu colección en una galaxia lejana.",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "ZoriiBliss311.jpg",
    img2: "ZoriiBliss311-box.jpg",
    new: false,
  },
  {
    id: 9,
    collectionID: 2,
    name: "Obi-Wan Kenobi 538",
    description:
      "El legendario maestro Jedi se une a tu colección con esta figura que irradia sabiduría y poder.",
    price: "15,490.00",
    stock: 10,
    promotionID: 1,
    duesID: 1,
    img1: "Obi-WanKenobi538.jpg",
    img2: "Obi-WanKenobi538-box.jpg",
    new: true,
  },
];


/** Collections */

/**
 * Get all the collections.
 * @returns {Array} The array of collections.
 */
function getCollections() {
  return collection;
}

/**
 * Get a collection by its ID.
 * @param {number} id - The ID of the collection to retrieve.
 * @returns {Object|undefined} The collection object with the specified ID, or undefined if not found.
 */
function getCollectionById(id) {
  return collection.find((item) => item.id === id);
}

/**
 * Get the count of elements in the collection array.
 * @returns {number} The count of elements.
 */
function getCollectionCount() {
  return collection.length;
}

/**
 * Get a collection element by its index.
 * @param {number} index - The index of the collection element to retrieve.
 * @returns {Object|undefined} The collection object at the specified index, or undefined if not found.
 */
function getCollectionByIndex(index) {
  return collection[index];
}

/** Funkos */

/**
 * Retrieves funkos from the 'funkos' array that match the given collection ID.
 * @param {number} collectionID - The ID of the collection to search for.
 * @returns {Array} - An array of funkos matching the collection ID.
 */
function getFunkosByCollectionID(collectionID) {
  const funkosFound = funkos.filter((funko) => funko.collectionID === collectionID);
  return funkosFound;
}

/**
 * Get the count of elements in the funkos array.
 * @returns {number} The count of elements.
 */
function getFunkosCount() {
  return funkos.length;
}

/**
 * Get a funko by its ID.
 * @param {number} id - The ID of the funko to retrieve.
 * @returns {Object|undefined} The funko object with the specified ID, or undefined if not found.
 */
function getFunkoById(id) {
  const currentFunko = funkos.find((item) => item.id === id);
  const currentCollection = getCollectionById(currentFunko.collectionID)
  currentFunko.imgPath = currentCollection.imgPath
  currentFunko.collection = currentCollection.name
  currentFunko.promotion = getPromotionById(currentFunko.promotionID).description
  return currentFunko
}

/** promotions */
function getPromotionById(id) {
  return promotions.find((item) => item.id === id);
}


export default {
  getCollections,
  getCollectionById,
  getCollectionCount,
  getCollectionByIndex,
  getFunkosByCollectionID,
  getFunkosCount,
  getFunkoById,
  getPromotionById
}

