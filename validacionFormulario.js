const userNameFiled = document.querySelector("[name=nombre]");
const userEmailFiled = document.querySelector("[name=correo]");
const userPhoneFiled = document.querySelector("[name=teléfono]");
const userMessageFiled = document.querySelector("[name=mensaje]");

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

const valiteEmailFormat = (event) => {
    const field = event.target;
    const fieldValue = event.target.value;

    const regex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    console.log(regex.test(field.value));//Devuelve turue or false

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
    console.log(regex.test(field.value));//Devuelve turue or false

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