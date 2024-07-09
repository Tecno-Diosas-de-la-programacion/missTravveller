const footerApp = () => {

    return `

    <footer class="footer-elementos d-flex flex-wrap justify-content-between align-items-center py-2">
        <a class="nav align-text-left" href="#">
          <img class="float-end" src="/public/img/boton_regreso.png" alt="Botón flecha" width="40" height="40">
        </a>
          
        <ul class="nav col-md-3.5 justify-content-left">
          <li class="foot-item">
            <a class="footer.redes" href="#">
              <img class="iconos-redes" src="/public/img/boton_facebook.png" alt="Botón Facebook">
            </a>
          </li>
          <li class="foot-item">
            <a class="footer.redes" href="https://www.instagram.com/misstraveler.mx?igsh=bnFjbDdsMzkybnVx">
              <img class="iconos-redes" src="/public/img/boton_instagram.png" alt="Botón Instagram">
            </a>
          </li>
          <li class="foot-item">
            <a class="footer.redes" href="#">
              <img class="iconos-redes" src="/public/img/boton_tiktok.png" alt="Botón Tiktok" width="50" height="50">
            </a>
          </li>
        </ul>

        <h4>Miss Travveller</h4>

    </footer>
    `;
};

export { footerApp };