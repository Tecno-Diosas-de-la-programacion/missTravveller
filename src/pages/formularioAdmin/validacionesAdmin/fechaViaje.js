export {validateDate}

const validateDate = (fecha) => {
    const result = { isValid: true, error: "" };
    if (date.trim() === "") {
        result.isValid = false;
        result.error = "Este campo es requerido";
    } else {
        result.isValid = true;
    }
    return result;
};