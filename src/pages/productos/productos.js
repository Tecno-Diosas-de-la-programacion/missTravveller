fetch("/db.json")
    .then(response => response.json())
    .then(data => {
        const destinos = data.map(destino => {
            return `
                <div class="col-lg-5">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-6 col-md-5">
                                <img class="card-img card-fluid rounded-star" src="${destino.img}" alt="">
                            </div>
                            <div class="col-6 col-md-7">
                                <div class="card-body d-flex flex-colum">
                                    <div class="h-100">
                                        <h3 class="card-title">${destino.nombreDestino}</h3>
                                        <p class="card-text">${destino.descripcion}</p>
                                        <h4 class="card-title mb-3">$ <strong>${destino.precio}</strong> MXN </h4>
                                        <div>
                                            <div>
                                                <button type="button" class="btn btn-info">
                                                    <i class="bi bi-handbag me-1"></i>
                                                    <a id ="button-booking" href="/src/pages/contacto/paginaContacto.html" target="_blank">¡Reserva ahora! </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
      `;
        });

        document.querySelector("#list-container").innerHTML = destinos.join("");
    })
    .catch(error => console.error("Error al obtener datos:", error));