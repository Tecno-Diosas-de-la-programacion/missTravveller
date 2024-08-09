import {postContactForm} from "../../components/api/postContactForm.js";

document.addEventListener('DOMContentLoaded', function () {
    const userNameFiled = document.querySelector("[name=fullName]");
    const userEmailFiled = document.querySelector("[name=email]");
    const userPhoneFiled = document.querySelector("[name=phone]");
    const userMessageFiled = document.querySelector("[name=comments]");
    

    if (!userNameFiled || !userEmailFiled || !userPhoneFiled || !userMessageFiled) {
        console.error("Uno o más elementos no se encontraron en el DOM.");
        return;
    }

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
    }

    const validateEmptyField = (event) => {
        const field = event.target;
        const fieldValue = event.target.value;
        if (fieldValue.trim().length === 0) {
            setError(field);
        } else {
            setError(field, false);
        }
    };

    const validateEmailFormat = (event) => {
        const field = event.target;
        const fieldValue = event.target.value;

        const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);

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

    const validatePhoneFormat = (event) => {
        const field = event.target;
        const fieldValue = event.target.value;

        const regex = new RegExp(/^\d{10}$/);

        if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {//!false = true
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

    userEmailFiled.addEventListener("input", validateEmailFormat);//input se ejecuta un evento
    userPhoneFiled.addEventListener("input", validatePhoneFormat);


    const form = document.getElementById("contactForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Verificar que no haya campos con la clase invalid
        const invalidFields = document.querySelectorAll(".invalid");
        if (invalidFields.length > 0) {
            alert("Por favor, corrige los errores en el formulario.");
            return;
        }

        // Recopilar datos del formulario
        const formData = {
            fullName: userNameFiled.value,
            email: userEmailFiled.value,
            phone: userPhoneFiled.value,
            comments: userMessageFiled.value
        };

        try {
            await postContactForm(formData);
            alert("Gracias por tu mensaje");
            document.reset();
          } catch (error) {
            alert(`Hubo un error al subir a base de datos.`);
          }

    });

});

