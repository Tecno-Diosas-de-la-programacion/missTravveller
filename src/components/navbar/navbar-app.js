
import { pages } from "./configuracionPaginas.js";
import { getCurrentHtmlPage } from "./capturarContenidoHtml.js";
import { createListItems } from "./crearElementosLista.js";


const navbarApp = () => {

  const currentHTML = getCurrentHtmlPage();
  const menuOptions = createListItems(pages, currentHTML);

  return `
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/index.html">
          <img id="logo-missTravveller" src="/img/Logo_MissTravveller.png" alt="Logo" class="d-inline-block align-text-center">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <img id="hamburguesa" src="/img/hamburguesa.png" alt="Imagen patito despliega menú">
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul id = "navbar-nav" class="navbar-nav me-auto mb-lg-0">
            ${menuOptions}
          </ul>
        </div>
      </div>
    </nav>
  `;
};

export { navbarApp };