/* import './style.css' */

import './styles.scss'
import './src/pages/nosotros/paginaNosotros.css'
import './src/pages/contacto/paginaContacto.js'
import './src/pages/avisoPrivacidad/avisoPrivacidad.css'
import './src/components/navbar/navbar-app'
import { navbarApp } from './src/components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();

