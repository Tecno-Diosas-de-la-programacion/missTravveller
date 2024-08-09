/* import './style.css' */

import './styles.scss'
import './src/pages/nosotros/paginaNosotros.css'
import './src/pages/contacto/paginaContacto.js'
import './src/pages/avisoPrivacidad/avisoPrivacidad.css'
import './src/components/navbar/navbar-app'
import { navbarApp } from './src/components/navbar/navbar-app.js'
import { footerApp } from './src/components/footer/footer.js' 

document.querySelector("#navbar-app").innerHTML= navbarApp();
document.querySelector("#footer-app").innerHTML= footerApp();

// preloader 

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const contenido = document.getElementById('contenido');
    
    // Simula un tiempo de carga antes de mostrar el contenido
    setTimeout(() => {
        preloader.style.display = 'none';
        contenido.style.display = 'block';
    }, 3000); // Cambia 3000 por el tiempo que desees en milisegundos
});
