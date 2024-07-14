/*
document.getElementById('addProductBtn').addEventListener('click', function() {
    let isValid = true;
    let alertContainer = document.getElementById('alert-container');
    alertContainer.innerHTML = '';

    // Validate Nombre destino
    let nombreDestino = document.getElementById('nombre-destino').value;
    if (nombreDestino === '') {
        isValid = false;
        showAlert('Nombre destino es obligatorio.');
    }

    // Validate Fecha
    let fecha = document.getElementById('fecha').value;
    if (fecha === '') {
        isValid = false;
        showAlert('Fecha es obligatoria.');
    }

    // Validate Precio
    let precio = document.getElementById('precio').value;
    if (precio === '') {
        isValid = false;
        showAlert('Precio es obligatorio.');
    }

    // Validate Archivo
    let fileUpload = document.getElementById('file-upload').value;
    if (fileUpload === '') {
        isValid = false;
        showAlert('Archivo es obligatorio.');
    }

    // Validate Descripción
    let descripcion = document.getElementById('descripcion').value;
    if (descripcion === '') {
        isValid = false;
        showAlert('Descripción es obligatoria.');
    }

    if (isValid) {
        alert('Formulario válido. Puedes enviar los datos.');
        // Aquí puedes agregar el código para enviar el formulario o procesar los datos.
    }
});
function showAlert(message) {
    let alertContainer = document.getElementById('alert-container');
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger';
    alertDiv.role = 'alert';
    alertDiv.innerText = message;
    alertContainer.appendChild(alertDiv);
}
*/
//Comente la funcion de validacion para esta pagina porque solo vamos a desplegar el json 

const insertarEnTabla = (products) => {
    const table = products.map(product => `
            <tr>
                <td>${product.id}</td>
                <td>${product.nombreDestino}</td>
                <td>${product.fechaViaje} </td>
                <td>$ ${product.precio}</td>
                <td>¿Archivo 35?</td>
                <td><button class="btn btn-primary">Detalles</button></td>
                <td>
                    <button class="btn btn-dark">Editar</button>
                    <button class="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        ` );
    return table.join("");
}

const buttonSection = document.getElementById("arreglo-tabla");

const getProducts = (pathfile) => {
    fetch(pathfile)
        .then((resolve) => resolve.json())
        .then((data) => {
            console.log(data);
            buttonSection.innerHTML = insertarEnTabla(data);
        })
        .catch((error) => {
            console.log(error);
        });
};

getProducts("/public/db.json");

