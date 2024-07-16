export {addToLocalStorage}

const addToLocalStorage =  async (newProduct) =>{
    let productoString = JSON.stringify(newProduct);
    let productoLS = localStorage.setItem("newProduct", productoString);
    let productoJSON = JSON.parse(productoLS);
    console.log(productoJSON);
    // localStorage.getItem("newProduct"); Nos ayuda a obtener el string para colocar en la tabla
}


const postContactForm = async () =>{
    const url = "https://reqres.in/api/users"
    const contactFormData = {
        fullName: "arantxa",
        email: "arantxa@gmail.com"
    };
    const options = {
        method: "POST",
        header: {"Content-Type": "application/json"} ,
        // indica al servidor que esta recibiedo que en el cuerpo le estamos enviando datos tipo json
        body: JSON.stringify(contactFormData),
    };

    const response = await fetch( url, options);
    const contactResults =  await response.json();
    console.log(contactResults);

    return contactResults
} 


//Aqui empieza la adicion de productos con la funcion postProduct=============================
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
            //Vamos a guardar el nuevo producto en el db2.json temporal, el writeFile no funciona
            writeFile("/public/db2.json", JSON.stringify(tempProducts, null, 4));
            //writeFile("/public/db2.json", JSON.stringify(tempProducts, null, 4));
            })
        .catch((error) => {
        console.log(error);
});

}

