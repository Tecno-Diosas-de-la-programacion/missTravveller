const formularioContacto = document.getElementById("validacionFormulario");
const nombreUsuario = document.getElementById("validacionNombre");
const correoUsuario = document.getElementById("validacionCorreo");
const telefonoUsuario = document.getElementById("validacionTelefono");
const mensajeUsuario = document.getElementById("validacionMensaje");
const serviceID = "service_3np4zfy";
const templateID = "template_ofvcspn";

formularioContacto.addEventListener("submit", e => {
    e.preventDefault();

    const isValid = validarInputs();

    if (isValid === true) {
        enviarEmail();
        formularioContacto.reset();
        alert("Su mensaje a sido enviado con exito");
    } else {
        alert("Hubo un error al enviar su mensaje");
    }
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validarCorreo = email => {
    //La expresion regular funciona para revisar si el texto esta en un formato especifico (Saber si un patron se encuentra en una cadena)
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
}

const validarInputs = () => {
    const nombreUsuarioValor = nombreUsuario.value.trim();
    const correoUsuarioValor = correoUsuario.value.trim();
    const telefonoUsuarioValor = telefonoUsuario.value.trim();
    const mensajeUsuarioValor = mensajeUsuario.value.trim();
    let isValid = true;

    if(nombreUsuarioValor === '') {
        setError(nombreUsuario, 'Favor de escribir nombre completo');
        isValid = false;
    } else {
        setSuccess(nombreUsuario);
    }

    if(correoUsuarioValor === '') {
        setError(correoUsuario, 'Favor de ingresar un correo');
        isValid = false;
    } else if (!validarCorreo(correoUsuarioValor)) {
        setError(correoUsuario, 'El correo no es válido');
        isValid = false;
    } else {
        setSuccess(correoUsuario);
    }

    if(telefonoUsuarioValor === '') {
        setError(telefonoUsuario, 'Favor de ingresar un teléfono');
        isValid = false;
    } else if (telefonoUsuarioValor.length > 10  ) {
        setError(telefonoUsuario, 'Número de teléfono debe de contar sólo con 10 dígitos');
        isValid = false;
    } else {
        setSuccess(telefonoUsuario);
    }

    if(mensajeUsuarioValor === '') {
        setError(mensajeUsuario, 'Favor de ingresar algún comentario o duda');
        isValid = false;
    } else if (mensajeUsuarioValor.lenght > 300) {
        setError(mensajeUsuario, "Máximo de letras 300 para escribir mensaje");
        isValid = false;
    } else {
        setSuccess(mensajeUsuario);
    }

    return isValid;
};

function enviarEmail(){
    const parametros={
        name: nombreUsuario.value,
        correo: correoUsuario.value,
        telefono: telefonoUsuario.value,
        mensaje: mensajeUsuario.value
    }
    emailjs.send(serviceID, templateID, parametros);
}

