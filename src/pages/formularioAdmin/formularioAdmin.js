import { localStorage } from "./postLocalStorage.js";
import { validateInputsForm } from "./validateInputsFormAdmin.js";

const contactForm = document.forms["productForm"];

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
productForm.addEventListener( "button"  , async ( event )=>{
    event.preventDefault();
    console.log("Estoy en el evento click del botón");

// Referencia de inputs TERMINAR ARANTXA Y ABI
const nombreDestinoRef = productForm.elements["nombre-destino"];
const fechaRef = productForm.elements["fecha"];
const precioRef = productForm.elements["precio"];

hora-salida
descripcion-actividad

// Sanitizar los datos ¿como podemos limpiar los elementosya recibidos? ARANTXA Y ABI
emailRef.value = emailRef.value.toLowerCase();
fullNameRef.value = fullNameRef.value.trim();

const formData = {
    id : 0, //funcion de abi 
    nombreDestino : nombreDestinoRef.value,
    fechaViaje : fechaRef.value, 
    precio: precioRef.value,
    img : fileUploadRef.value,
    descripcion : descripcionRef.value,
    cupo : cupoRef.value,
    itinerario : [{
        puntoReunion : puntoReunionRef.value, //CREAR INPUT FANNY Y DULCE
        horaSalida : horaSalidaRef.value,
        actividad : descripcionActRef.value, //descripcion de la actividad
        horasEstadia : horasEstRef.value, //CREAR INPUT FANNY Y DULCE
        horaRegreso : horaRegresoRef.value //CREAR INPUT FANNY Y DULCE
    }
    ], 
    
 }
 console.table( formData );

 //Insertar nuestras validaciones FANNY Y DULCE
 const results = validateInputsForm(formData);

 if( results.isValid ){
    try{
        await localStorage(); // ARANTXA ABI
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
 }
});



/*Pasos para realizar

1. Obetenr datos del formulario cada uno corresponde a una variable
2. con esas variables crear un objeto 
3. convertir el objeto en string 
4.  GUardar clavevalor en local storage SET ITEM 
5. Obtener con getitem con la clave 
6. convertir a JSON.Parse

*/