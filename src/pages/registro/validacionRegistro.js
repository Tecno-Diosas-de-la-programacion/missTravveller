import { postRegisterForm } from "../../components/api/postRegistro.js"

document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("registerForm");

    const setError = (field, message) => {
        const errorSpan = field.nextElementSibling;
        field.classList.add("is-invalid");
        errorSpan.textContent = message;
    };

    const clearError = (field) => {
        const errorSpan = field.nextElementSibling;
        field.classList.remove("is-invalid");
        errorSpan.textContent = "";
    };

    const validateField = (field) => {
        const value = field.value.trim();
        if (value === "") {
            setError(field, `El campo ${field.name} es requerido.`);
            return false;
        } else {
            clearError(field);
            return true;
        }
    };

    const validateEmailField = (field) => {
        const value = field.value.trim();
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (value === "") {
            setError(field, `El campo ${field.name} es requerido.`);
            return false;
        } else if (!regex.test(value)) {
            setError(field, `Por favor ingresa un correo electrónico válido.`);
            return false;
        } else {
            clearError(field);
            return true;
        }
    };

    const validatePasswordField = (field) => {
        const value = field.value.trim();
        const minLength = 8;
        const regexUpperCase = /[A-Z]/;
        const regexLowerCase = /[a-z]/;
        const regexNumber = /[0-9]/;
        const regexSpecialChar = /[\W_]/;

        if (value.length < minLength) {
            setError(field, `La contraseña debe tener al menos ${minLength} caracteres.`);
            return false;
        } else if (!regexUpperCase.test(value)) {
            setError(field, `La contraseña debe tener al menos una letra mayúscula.`);
            return false;
        } else if (!regexLowerCase.test(value)) {
            setError(field, `La contraseña debe tener al menos una letra minúscula.`);
            return false;
        } else if (!regexNumber.test(value)) {
            setError(field, `La contraseña debe tener al menos un número.`);
            return false;
        } else if (!regexSpecialChar.test(value)) {
            setError(field, `La contraseña debe tener al menos un carácter especial.`);
            return false;
        } else {
            clearError(field);
            return true;
        }
    };
                                   //Aqui el ASYNC
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        let valid = true;

        const fields = form.querySelectorAll("input");
        fields.forEach((field) => {
            if (field.name === "correo") {
                if (!validateEmailField(field)) valid = false;
            } else if (field.name === "password") {
                if (!validatePasswordField(field)) valid = false;
            } else {
                if (!validateField(field)) valid = false;
            }
        });

        if (valid) {
            //******Local Storage******//
            const newUserData = {
                "nombre": "",
                "apeMaterno" : "",
                "apePaterno" : "",
                "correo" : "",
                "contraseña" : "",
            };
            // Fill variable newUserData (JSON) with data from html input
            fields.forEach((field) => {
                if (field.name === "correo") {
                    newUserData["correo"] = field.value.trim();
                } else if (field.name === "password") {
                    newUserData["contraseña"] = field.value.trim();
                } else if (field.name === "nombre") {
                    newUserData["nombre"] = field.value.trim();
                } else if (field.name === "apellido-paterno") {
                    newUserData["apePaterno"] = field.value.trim();
                } else if (field.name === "apellido-materno") {
                    newUserData["apeMaterno"] = field.value.trim();
                }
            });
            //Guardar en localStorage
            // Get array with all registered users
            let userArray = JSON.parse(localStorage.getItem("userData"));
            if (userArray === null) {
                // Check, if user array exists. If not, create a new array
                userArray = [];
            }
            // Add new User to user array
            userArray.push(newUserData);
            // Put user array with new user into local storage
            // This 0saves all users, and does not overwrite the last user
            localStorage.setItem("userData" , JSON.stringify(userArray));
            
            //FETCH
            try {
                await postRegisterForm(newUserData);
              } catch (error) {
                console.log("Hubo un error al concectar con database");
                alert("Hubo un error al concectar con database");
              }

            //redireccionar a login
            swal("Formulario enviado correctamente.").then(function () {window.location.href = "../ingresar/ingresar.html"});
                
        } else {
            swal("Por favor, corrige los errores en el formulario.");
        }
    });

    form.querySelectorAll("input").forEach((field) => {
        field.addEventListener("blur", () => {
            if (field.name === "correo") {
                validateEmailField(field);
            } else if (field.name === "password") {
                validatePasswordField(field);
            } else {
                validateField(field);
            }
        });
    });

});
