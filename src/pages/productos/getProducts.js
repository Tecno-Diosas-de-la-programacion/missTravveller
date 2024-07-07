fetch("/db.json")
    .then(response => response.json())
    .then(data => {
        const destinos = data.map(destino => {
            return `
        <div class=" col-lg-3 col-md-4 col-sm-5">
          <div id = "card-products" class="card m-2 rounded shadow-sm">
            <div class="card-body"><strong>${destino.nombreDestino}</strong></div>
            <img id = "img-product" src="../../../public/img/Logo_MissTravveller.png" class="card-img-top" alt="${destino.nombreDestino}">
            <div class="card-body">Itinerario</div>
            <ul class="list-group list-group-flush">
                ${destino.itinerario.map(actividad => `
                <li id = "products" class="list-group-item"><strong>Destino: </strong>${actividad.puntoReunion} <br> <strong>Hora de salida:</strong> ${actividad.horaSalida} <br> <strong>Actividad:</strong> <br>${actividad.actividad}</li>`).join('')}
            </ul>
            <div class="card-body">Precio: ${destino.precio}</div>
            
            <button type="button" class="btn btn-primary"> 
              <a href="/src/pages/contacto/paginaContacto.html" target="_blank"> ¡Reserva ahora! </a>
            </button>
          </div>
        </div>
      `;
        });

        document.querySelector("#list-container").innerHTML = destinos.join("");
    })
    .catch(error => console.error("Error al obtener datos:", error));
