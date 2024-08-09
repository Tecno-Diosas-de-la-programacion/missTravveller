// Función para agregar productos al carrito
function addToCart(productId) {
    // Busca el producto en el contenedor de destinos
    const productElement = document.querySelector(`.add-to-cart[data-product-id='${productId}']`);
    if (!productElement) return;

    const productName = productElement.dataset.productName;
    const productPrice = parseFloat(productElement.dataset.productPrice);

    const cartContainer = document.getElementById("cart-container");
    cartContainer.style.display = 'block'; // Mostrar el carrito de compras

    const cartItems = document.getElementById("cart-items");

    // Crear un nuevo elemento para el producto y añadirlo al carrito
    const productElementInCart = document.createElement("div");
    productElementInCart.classList.add("product-item");
    productElementInCart.textContent = `${productName} - $${productPrice}`;
    cartItems.appendChild(productElementInCart);

    // Actualizar el total del carrito
    updateTotal();
}

// Función para actualizar el total y el enlace de pago
function updateTotal() {
    const total = calculateTotal();
    const numPeople = parseInt(document.getElementById('num-people').value) || 1;
    const totalWithPeople = total * numPeople;

    document.getElementById('cart-total').innerText = `Total: $${totalWithPeople.toFixed(2)}`;
    updatePaymentLink(totalWithPeople);
}

// Función para calcular el total de los productos en el carrito
function calculateTotal() {
    const cartItems = document.querySelectorAll('#cart-items .product-item');
    let total = 0;
    cartItems.forEach(item => {
        const itemText = item.textContent;
        const price = parseFloat(itemText.split(' - $')[1]);
        total += price;
    });
    return total;
}

// Función para actualizar el enlace de pago
function updatePaymentLink(total) {
    const payButton = document.getElementById('pay-btn');
    const paymentLink = `https://example.com/pay?total=${total.toFixed(2)}`;
    payButton.setAttribute('href', paymentLink);
}

// Evento para el botón Cancelar
document.getElementById('cancel-btn').addEventListener('click', function() {
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart-total').innerText = 'Total: $0.00';
    document.getElementById('num-people').value = 1; // Restablecer el número de personas
    updatePaymentLink(0); // Restablecer el enlace de pago
    document.getElementById('cart-container').style.display = 'none'; // Ocultar el carrito de compras
});

// Evento para el número de personas
document.getElementById('num-people').addEventListener('input', function() {
    updateTotal();
});

// Evento para el botón Pagar
document.getElementById('pay-btn').addEventListener('click', function() {
    let total = calculateTotal() * (parseInt(document.getElementById('num-people').value) || 1);
    let paymentLink = `https://link.mercadopago.com.mx/tourvalledebravo?total=${total.toFixed(2)}`;
    window.open(paymentLink, '_blank'); // Redirigir al enlace de pago en una nueva pestaña
});


// Obtener productos desde el archivo JSON y mostrar en la página
fetch("/db.json")
    .then(response => response.json())
    .then(data => {
        const destinos = data.map(destino => {
            return `
                <div class="col-lg-5">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-6 col-md-5">
                                <img class="card-img card-fluid rounded-star" src="${destino.img}" alt="${destino.nombreDestino}">
                            </div>
                            <div class="col-6 col-md-7">
                                <div class="card-body d-flex flex-column">
                                    <div class="h-100">
                                        <h3 class="card-title">${destino.nombreDestino}</h3>
                                        <p class="card-text">${destino.descripcion}</p>
                                        <h4 class="card-title mb-3">$ <strong>${destino.precio}</strong> MXN </h4>
                                        <div>
                                            <button type="button" class="btn btn-info">
                                                <i class="bi bi-handbag me-1"></i>
                                                <a id="button-booking" href="/src/pages/contacto/paginaContacto.html" target="_blank">¡Más Información!</a>
                                            </button>
                                            <br><br>
                                            <button type="button" class="btn btn-info add-to-cart" data-product-id="${destino.id}" data-product-name="${destino.nombreDestino}" data-product-price="${destino.precio}">
                                                <i class="bi bi-handbag me-1"></i>
                                                ¡Reserva ahora!
                                            </button>
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

        // Agregar eventos a los botones de agregar al carrito
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", (event) => {
                const productId = event.target.dataset.productId;
                addToCart(productId);
            });
        });
    })
    .catch(error => console.error("Error al obtener datos:", error));

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