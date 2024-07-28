
import { pages } from "./configuracionPaginas.js";
import { getCurrentHtmlPage } from "./capturarContenidoHtml.js";
import { createListItems } from "./crearElementosLista.js";


const navbarApp = () => {

  const currentHTML = getCurrentHtmlPage();
  const menuOptions = createListItems(pages, currentHTML);

  return `
  <nav class="navbar navbar-expand-md fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">
        <img id="logo-missTravveller" src="/img/Logo_MissTravveller.png" alt="Logo" class="d-inline-block align-text-center">
      </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation">
          <span>
            <img id="hamburguesa" src="/img/hamburguesa.png" alt="Imagen patito despliega menú">
          </span>
        </button>
      <div class="navbar-collapse collapse show" id="navbarCollapse" style="">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          ${menuOptions}
        </ul>
      </div>
    </div>
  </nav>
  `;
};

export { navbarApp };