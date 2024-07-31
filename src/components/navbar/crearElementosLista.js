import { getHtmlPageName } from "./obtenerNombrePaginaHtml.js";

const createListItems = (pages, currentHtml) => {
    const userSesion = {
        role: "customer",
        isAdmin: false,
        expiration: 0
    }

    const loadUserSesion = JSON.parse(localStorage.getItem("userSesion"));
    if (loadUserSesion !== null) {
        userSesion.role = loadUserSesion.role;
        userSesion.isAdmin = loadUserSesion.isAdmin;
        userSesion.expiration = loadUserSesion.expiration;
        if (userSesion.isAdmin) {
            userSesion.isAdmin = true;
        }
    }


    pages.forEach(page => {
        const htmlName = getHtmlPageName(page.url);

        if (htmlName === currentHtml) {
            page.active = true
        }

        if (userSesion.isAdmin) {
            page.visible = true;
        }

    });

    const listItemsArray = pages.map((page) => `
        <li class="nav-item" style="visibility: ${page.visible ? 'visible' : 'hidden'}"> 
          <a class="nav-link ${page.active ? 'active' : ''}" href="${page.url}"> ${page.name} </a>            
        </li>
    `);

    return listItemsArray.join("");
}

export { createListItems }; 