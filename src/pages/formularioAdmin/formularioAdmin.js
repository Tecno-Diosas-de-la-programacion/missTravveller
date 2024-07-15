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
