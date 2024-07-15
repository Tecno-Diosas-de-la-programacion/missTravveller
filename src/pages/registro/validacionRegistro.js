document.addEventListener("DOMContentLoaded", function() {
    // Aquí colocas tu código JavaScript que depende de que el DOM esté completamente cargado
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

    form.addEventListener("submit", (event) => {
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
            alert("Formulario enviado correctamente.");
        } else {
            alert("Por favor, corrige los errores en el formulario.");
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
