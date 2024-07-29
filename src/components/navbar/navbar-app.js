
import { pages } from "./configuracionPaginas.js";
import { getCurrentHtmlPage } from "./capturarContenidoHtml.js";
import { createListItems } from "./crearElementosLista.js";


const navbarApp = () => {

  const currentHTML = getCurrentHtmlPage();
  const menuOptions = createListItems(pages, currentHTML);

  return `
    <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="/index.html">
          <img id="logo-missTravveller" src="/img/Logo_MissTravveller.png" alt="Logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <img id="hamburguesa" src="/img/hamburguesa.png" alt="Imagen patito despliega menú">
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto me-auto mb-2 mb-md-0">

            ${menuOptions}
          </ul>
        </div>
      </div>
    </nav>
    <div class="spacer"></div>
  `;
};



export { navbarApp };