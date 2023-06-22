import tools from '/front/js/tools.js'
//Cargo el CSS
tools.loadCSS('/front/component/footer/footer.css')

const footer = document.querySelector('footer.footer');
let contenidoHTML = `<div class="footer__content">
  <nav class="footer__menu text--upper">
    <ul class="footer-menu__items">
      <li class="footer-menu__item">
        <a href="/front/pages/shop/shop.html" class="footer-menu__link">shop</a>
      </li>
      <li class="footer-menu__item">
        <a href="/front/admin/register.html" class="footer-menu__link">registrese</a>
      </li>
      <li class="footer-menu__item">
        <a href="/front/admin/login.html" class="footer-menu__link">ingresar</a>
      </li>
      <li class="footer-menu__item">
        <a href="#" class="footer-menu__link">contacto</a>
      </li>
    </ul>
  </nav>
  <picture class="footer__image">
    <img src="/front/img/branding/isotype.svg" alt="FunkoShop logo" />
  </picture>
</div>
<div class="footer__copyright">
  All rights reserved 2022 - FunkoShop &copy;
</div>`
footer.innerHTML = contenidoHTML;
