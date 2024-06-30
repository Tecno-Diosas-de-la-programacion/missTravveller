const contactForm = document.getElementById("contactForm");
const userNameFiled = document.querySelector("[name=nombre]");
const userEmailFiled = document.querySelector("[name=correo]");
const userPhoneFiled = document.querySelector("[name=teléfono]");
const userMessageFiled = document.querySelector("[name=mensaje]");

//================Submit del formulario
/*
contactForm.addEventListener("submit", e => {
    e.preventDefault();

    if (isValid === true) {
        enviarEmail();
        contactForm.reset();
        alert("Su mensaje a sido enviado con exito");
    } else {
        alert("Hubo un error al enviar su mensaje");
    }
});
*/

//============================= Exito o Error de Inputs

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const setError = (field, isError = true) => {
    if (isError) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerHTML = `El campo ${field.name} es requerido.`;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerHTML = "";
    }
};

//=======================Validación de inputs
const validateEmptyField = (event) => {
    const field = event.target;
    const fieldValue = event.target.value; //Aqui se obtiene el valor
    if (fieldValue.trim().length === 0) {
        setError(field);
    } else {
        setError(field, false);
    }
};

const valiteEmailFormat = (event) => {
    const field = event.target;
    const fieldValue = event.target.value;

    const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    console.log(regex.test(field.value));//Devuelve true or false

    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerHTML = `Porfavor ingresa un correo electrónico válido.`;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerHTML = "";
    }
};

const valitePhoneFormat = (event) => {
    const field = event.target;
    const fieldValue = event.target.value;

    const regex = new RegExp(/^\d{9}$/);
    console.log(regex.test(field.value));//Devuelve true or false

    if (fieldValue.trim().length > 3 && !regex.test(fieldValue)) {//!false = true
        field.classList.add("invalid");
        field.nextElementSibling.classList.add("error");
        field.nextElementSibling.innerHTML = `Porfavor ingresa un número telefónico válido.`;
    } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerHTML = "";
    }
};


userNameFiled.addEventListener("blur", validateEmptyField);
userEmailFiled.addEventListener("blur", validateEmptyField);
userPhoneFiled.addEventListener("blur", validateEmptyField);
userMessageFiled.addEventListener("blur", validateEmptyField);

userEmailFiled.addEventListener("input", valiteEmailFormat);//input se ejecuta un evento
userPhoneFiled.addEventListener("input", valitePhoneFormat);




//============VALIDACION ACEPTADA => ENVIAR CORREO

function enviarEmail(){
    const parametros={
        name: nombreUsuario.value,
        correo: correoUsuario.value,
        telefono: telefonoUsuario.value,
        mensaje: mensajeUsuario.value
    }
    emailjs.send(serviceID, templateID, parametros);
}



