import '/styles.scss'
import './paginaContacto.css'
import { navbarApp } from '../../components/navbar/navbar-app.js'

document.querySelector("#navbar-app").innerHTML= navbarApp();

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