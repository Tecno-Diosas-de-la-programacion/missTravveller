const navbarApp = () => {

    return `
    <nav class="navbar navbar-expand-lg py-0">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/public/img/Logo_MissTravveller.png" alt="Logo" width="75" height="75"
            class="d-inline-block align-text-center">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img id="hamburguesa" src="/public/img/hamburguesa.png" alt="Imagen patito despliega menú">
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/index.html">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="/src/pages/nosotros/paginaNosotros.html">Nosotros</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/src/pages/productos/productos.html" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">

                Productos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Huatulco</a></li>
                <li><a class="dropdown-item" href="#">Valle de Bravo</a></li>
                <li><a class="dropdown-item" href="#">Taxco</a></li>
                <li>
                  <hr class="dropdown-divider">
                </li>
                <li><a class="dropdown-item" href="#">Ver todo</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/pages/contacto/paginaContacto.html">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/pages/formulario/formulario.html">Formulario</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/src/pages/ingresar/ingresar.html">Ingresar</a>
            </li>
            <!-- <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> -->
          </ul>
        </div>

      </div>
    </nav>
    
    `;
    };
    
    export{navbarApp};