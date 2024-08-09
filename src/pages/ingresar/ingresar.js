import {postIngresar} from "../../components/api/postIngresar.js"

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
                            //Aqui ASYNC
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        let valid = true;

        const fields = form.querySelectorAll("input");
        
        fields.forEach((field) => {
            if (field.name === "correo") {
                if (!validateEmailField(field)) valid = false;
            } else if (field.name === "password") {
                if (!validateField(field)) valid = false;
            }
        });

        if (valid) {
            //FETCH
            try {
                await postIngresar(userLogin);
            const userLogin = {
                "correo" : "",
                "contraseña" : "",
            };
            let correoField = null;
            let contraseñaField = null;

            fields.forEach((field) => {
                if (field.name === "correo") {
                    userLogin["correo"] = field.value.trim();
                    correoField = field;
                } else if (field.name === "password") {
                    userLogin["contraseña"] = field.value.trim();
                    contraseñaField = field;
                }
            });

            // Clear all previous errors
            clearError(correoField);
            clearError(contraseñaField);

            // Check user info
            const userArray = JSON.parse(localStorage.getItem("userData")); //this is from the registration form
            let userFound = false;
            let correctPassword = false;

            if (userArray != null) {
                for (let index = 0; index < userArray.length; index++) {
                    if (userLogin.correo == userArray[index].correo) {
                        userFound = true;
                        if (userLogin.contraseña == userArray[index].contraseña) {
                            correctPassword = true;
                        }
                    }
                }
            }

            if (userFound == true && correctPassword == true) {
                swal("¡Bienvenido!").then(function () {window.location.href = "/index.html"});
            } else {
                if (userFound == true) {
                    setError(contraseñaField, "Contraseña incorrecta") ;
                } else {
                    setError(correoField, "Correo no registrado") ;
                    setError(contraseñaField, "Contraseña incorrecta") ;
                }
            }

        } catch (error) {
            console.log("Hubo un error al concectar con database");
            alert("Hubo un error al concectar con database");
        }

        } else {
            swal("Por favor, corrige los errores en el formulario.");
        }
    });

    form.querySelectorAll("input").forEach((field) => {
        field.addEventListener("blur", () => {
            if (field.name === "correo") {
                validateEmailField(field);
            } else if (field.name === "password") {
                validateField(field);
            }
        });
    });

});