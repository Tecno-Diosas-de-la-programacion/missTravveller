import { addToLocalStorage } from "./postLocalStorage.js";
import { validateInputsForm } from "./validateInputsFormAdmin.js";

const productForm = document.forms["productForm"];
const addProductButton = document.getElementById("addProductBtn")

/**
 *  AddEventListener permite agregar funciones que se ejecutarán
 *  en respuesta a un evento específico que ocurre aun elemento del DOM.
 * 
 *  register.addEventListener( type  , fncCallback );
 * 
 *  addEvenListener podemos manejar interacciones del usuario como clics,
 * cambios de teclado, movimientos del mouse, entre otros.
 */
// contactForm.addEventListener( "click"  , ()=>{} );
addProductButton.addEventListener( "click"  , async ( event )=>{
    event.preventDefault();
    console.log("Estoy en el evento click del botón");

// Referencia de inputs TERMINAR ARANTXA Y ABI
const nombreDestinoRef = productForm.elements["nombre-destino"];
const fechaRef = productForm.elements["fecha"];
const precioRef = productForm.elements["precio"];
//const archivoRef = productForm.elements["file-upload"]; SERVIDOR
const descripcionRef = productForm.elements["descripcion"];
const cupoRef = productForm.elements["cupo"]; 
//ESTOS SOON DEL ITINERARIO
const puntoReunionRef = productForm.elements["punto-reunion"];
const horaSalidaRef = productForm.elements["hora-salida"];
const descripcionActRef = productForm.elements["descripcion-actividad"];
const horasEstRef = productForm.elements["hora-estadia"];
const horaRegresoRef = productForm.elements["hora-regreso"]; 


// Sanitizar los datos ¿como podemos limpiar los elementosya recibidos? ARANTXA Y ABI
/*emailRef.value = emailRef.value.toLowerCase();
fullNameRef.value = fullNameRef.value.trim();
*/


const formData = {
    id : 0, 
    nombreDestino : nombreDestinoRef.value,
    fechaViaje : fechaRef.value, 
    precio: precioRef.value,
    //img : archivoRef.value, SERVIDOR
    descripcion : descripcionRef.value,
     
    itinerario : [{
        puntoReunion : puntoReunionRef.value, 
        horaSalida : horaSalidaRef.value,
        actividad : descripcionActRef.value, //descripcion de la actividad
        horasEstadia : horasEstRef.value,
        horaRegreso : horaRegresoRef.value ,
        cupo : cupoRef.value
    }
    ], 
    
 }
 console.table( formData );


 const validateInputsForm = (formData) => {
    const results = {
      isValid: true,
      error: "",
    };

  
    return results;
  };
  

 const results = validateInputsForm(formData);

 if( results.isValid ){
    try{
        await addToLocalStorage(formData); 
    }
    catch(error){
    const errorMessage = document.getElementById("post-error-message");
   errorMessage.innerHTML = error;
   errorMessage.style.display = "block";
   setTimeout( ()=> errorMessage.style.display = "none", 5000  );
    }
 }else{
   const errorMessage = document.getElementById("error-message");
   errorMessage.innerHTML = results.error;
   errorMessage.style.display = "block";
   setTimeout( ()=> errorMessage.style.display = "none", 5000  );
 };



/*Pasos para realizar

1. Obetenr datos del formulario cada uno corresponde a una variable
2. con esas variables crear un objeto 
3. convertir el objeto en string 
4.  GUardar clavevalor en local storage SET ITEM 
5. Obtener con getitem con la clave 
6. convertir a JSON.Parse 

*/
})