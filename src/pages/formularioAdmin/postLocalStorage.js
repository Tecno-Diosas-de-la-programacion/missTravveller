export {addToLocalStorage}

const addToLocalStorage =  async (formData) =>{
    let productoString = JSON.stringify(formData);
    localStorage.setItem("formData", productoString);
    //JSON.parse(productoString);
    //localStorage.getItem("formData");
    
    const objectProduct = JSON.parse(localStorage.getItem("formData"));
    console.log(objectProduct);
    console.log(typeof(objectProduct));
    
    // localStorage.getItem("newProduct"); Nos ayuda a obtener el string para colocar en la tabla
}

/*
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
*/



