import './styles.scss'
import '../../pages/nosotros/paginaNosotros.css'

import './src/components/navbar/navbar-app'
import { navbarApp } from './src/components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();



document.querySelector('#app').innerHTML = `
  <h1>Estoy en index</h1>
`;
