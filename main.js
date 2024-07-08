/* import './style.css' */

import './styles.scss'
import './src/pages/nosotros/paginaNosotros.css'
//import './src/pages/contacto/paginaContacto.js'

import './src/components/navbar/navbar-app'
import { navbarApp } from './src/components/navbar/navbar-app.js'

//import './src/pages/productos/getProducts.js'
//import './src/pages/contacto/validacionFormulario.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();

