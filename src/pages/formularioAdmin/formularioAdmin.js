
document.getElementById("addProductBtn").addEventListener('click', () => {
      
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
        const newProduct = {
            "id": 0,
            "nombreDestino": nombreDestino,
            "descripcion": descripcion,
            "itinerario": [],
            "img": fileUpload,
            "autor": "",
            "precio": precio,
            "fechaViaje": fecha,
            "cupo": 99,
            "fechaCreacion": ""
        };

        postProduct(newProduct);

    }
});

//Aqui empieza la adicion de productos con la funcion postProduct
function postProduct (newProduct){
    fetch("/public/db.json")
        .then((resolve) => resolve.json())
        .then((data) => {
            console.log(data);
            //Variable temporal para guardar el producto nuevo, para no modificar el original
            const tempProducts = data;
            //Aqui incrementamos el id y obtenemos el ultimo elemento
            const lastId = tempProducts[tempProducts.length-1].id;
            newProduct.id = lastId + 1;
            //aqui colocamos el ultimo objeto al json
            tempProducts.push(newProduct);

            //Local storage
            localStorage.setItem("newProduct", JSON.stringify(newProduct));
            
            if(localStorage.getItem("newProduct")){
                const nombreDestino = localStorage.getItem("newProduct");
                const objectProduct = JSON.parse(localStorage.getItem("newProduct"));
                console.log("Data from local storage " + objectProduct);
            }else{
                console.log("No hay datos en el local storage");
            };
            
            

            
            //Vamos a guardar el nuevo producto en el db2.json temporal, el writeFile no funciona
            //writeFile("/public/db2.json", JSON.stringify(tempProducts, null, 4));
        })
        .catch((error) => {
            console.log(error);
        });

}

function showAlert(message) {
    let alertContainer = document.getElementById('alert-container');
    let alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-danger';
    alertDiv.role = 'alert';
    alertDiv.innerText = message;
    alertContainer.appendChild(alertDiv);
}
