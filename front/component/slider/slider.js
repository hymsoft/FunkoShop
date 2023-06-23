import funkoData from "/back/data/funkoData.js";
import tools from "/front/js/tools.js";

const funkosCount = funkoData.getFunkosCount();
const funkosIndex = tools.generateRandomNumbers(1, funkosCount, 7);

// Cargo el CSS
tools.loadCSS("/front/component/slider/slider.css");
tools.loadCSS("/front/component/item/item.css");
// Obtengo una referencia a la sección donde insertar el contenido
const section = document.querySelector(".slider");
let contenidoHTML = "<ul>";
funkosIndex.forEach((currentIndex) => {
  const currentFunko = funkoData.getFunkoById(currentIndex);

  contenidoHTML += `<li>
  <article class="item" data-id="${currentFunko.id}">
    <div class="item__container">
      <figure class="item__image">
        ${
          currentFunko.new
            ? '<div class="item__new-message item__new">nuevo</div>'
            : ""
        }
        <img src="/front/img/shop/${currentFunko.imgPath}/${
    currentFunko.img1
  }" alt="${tools.capitalizeFirstLetters(currentFunko.name)} Image" />
      </figure>
      <div class="item__info">
        <h4 class="item__saga">${currentFunko.collection}</h4>
        <h3 class="item__name">${currentFunko.name}</h3>
        <div class="item__price">$ ${currentFunko.price}.-</div>
        <div class="item__promotion">${currentFunko.promotion}</div>
      </div>
    </div>
  </article>
</li>`;
});

contenidoHTML += `</ul>`;

// Inserto el contenido HTML dentro de la sección
section.innerHTML = contenidoHTML;

const links = document.querySelectorAll(".item");
links.forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("data-id");
    window.location.href = `/front/pages/items/items.html?id=${id}`;
  });
});
