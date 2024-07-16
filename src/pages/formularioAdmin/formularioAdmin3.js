
// vamos a desplegar el json para que Admin pueda ver sus productos.

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
                    <button class="btn btn-dark ">Editar</button>
                    <button class="btn btn-danger edit-btn">Eliminar</button>
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

