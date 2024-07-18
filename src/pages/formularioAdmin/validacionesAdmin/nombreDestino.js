export {validateFullName}

const validateFullName = (nombreDestino) => {
    const result = { isValid: true, error: "" };
    if (nombreDestino.trim() === "") {
        result.isValid = false;
        result.error = "Este campo es requerido";
    } else if (nombreDestino.length < 3) {
        result.isValid = false;
        result.error = "El nombre del destino debe ser mayor o igual a 3 caracteres";
    } else if (nombreDestino.length > 50) {
        result.isValid = false;
        result.error = "El nombre del destino debe ser menos o igual a 50 caracteres";
    }
    return result;
};