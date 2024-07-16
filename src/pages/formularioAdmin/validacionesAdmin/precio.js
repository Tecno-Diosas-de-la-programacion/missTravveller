export {validatePrice}

const validatePrice = (precio) => {
    const result = { isValid: true, error: "" };
    if (price.trim() === "") {
        result.isValid = false;
        result.error = "Este campo es requerido";
    } else if (isNaN(precio) || precio <= 0) {
        result.isValid = false;
        result.error = "El precio debe ser un número mayor que 0";
    }
    return result;
};