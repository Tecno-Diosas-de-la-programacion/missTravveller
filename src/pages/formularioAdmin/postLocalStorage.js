export {localStorage}

const localStorage =  async (newProduct) =>{
    let productoString = JSON.stringify(newProduct);
    let productoLS = localStorage.setItem("newProduct", productoString);
    let productoJSON = JSON.parse(productoLS);
    console.log(productoJSON);
    // localStorage.getItem("newProduct"); Nos ayuda a obtener el string para colocar en la tabla
}

localStorage(newProduct);


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


