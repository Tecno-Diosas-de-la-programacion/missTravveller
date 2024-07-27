
import { pages } from "./configuracionPaginas.js";
import { getCurrentHtmlPage } from "./capturarContenidoHtml.js";
import { createListItems } from "./crearElementosLista.js";


const navbarApp = () => {

  const currentHTML = getCurrentHtmlPage();
  const menuOptions = createListItems(pages, currentHTML);

  return `

  <nav class="navbar navbar-expand-lg py-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="/index.html">
        <img src="/img/Logo_MissTravveller.png" alt="Logo" width="75" height="75" class="d-inline-block align-text-center">
      </a>
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <img id="hamburguesa" src="/img/hamburguesa.png" alt="Imagen patito despliega menú">
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            ${menuOptions}
          </ul>
        </ul>
      </div>

    </div>
  </nav> 
`;
};

export { navbarApp };