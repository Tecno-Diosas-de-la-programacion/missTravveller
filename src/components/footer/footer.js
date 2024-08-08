const footerApp = () => {
    
    return `
    <div class="footer-elementos d-flex flex-wrap justify-content-between align-items-center py-2">
        <a class="nav align-text-left" href="#">
          <img class="float-end" src="/img/boton_regreso.png" alt="Botón flecha" width="40" height="40">
        </a>
    
        <ul class="nav col-md-3.5 justify-content-left">
          <li class="foot-item">
            <a class="footer.redes" href="https://www.facebook.com/profile.php?id=61559062033043" target="_blank">
              <i id="footer-facebook" class="bi bi-facebook"></i>
            </a>
          </li>
          <li class="foot-item">
            <a class="footer.redes" href="https://www.instagram.com/misstraveler.mx?igsh=bnFjbDdsMzkybnVx"target="_blank">
              <i id="footer-instagram" class="bi bi-instagram" width=""></i>
            </a>
          </li>
          <li class="foot-item">
            <a class="footer.redes" href="https://www.tiktok.com/@misstraveler.mx?_t=8oiBgjYc4NJ&_r=1"target="_blank">
              <i id="footer-tiktok" class="bi bi-tiktok"></i>
            </a>
          </li>
        </ul>
        <a href="/src/pages/avisoPrivacidad/avisoPrivacidad.html">
          <h4>Aviso de Privacidad</h4>
        </a>
        
      </div>

  `;
}

export{footerApp};
