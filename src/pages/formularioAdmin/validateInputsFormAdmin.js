export { validateInputsForm }
import {}

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

const validateInputsForm = (formData) => {

    const errors = {};
    const results = {
        isValid: true,
        error: ""
    }

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

    errors.nombreDestino = validateFullName(formData.nombreDestino);
    errors.fecha = validateDate(formData.fecha);
    errors.precio = validatePrice(formData.precio);
    errors.descripcion = validateFieldNotEmpty(formData.descripcion, "Descripción");
    errors.puntoReunion = validateFieldNotEmpty(formData.puntoReunion, "Punto de reunión");
    errors.horaSalida = validateFieldNotEmpty(formData.horaSalida, "Hora de salida");
    errors.horaEstadia = validateFieldNotEmpty(formData.horaEstadia, "Hora de estadia");
    errors.horaRegreso = validateFieldNotEmpty(formData.horaRegreso, "Hora de regreso");
    errors.cupo = validateFieldNotEmpty(formData.cupo, "Cupo");
    errors.descripcionActividad = validateFieldNotEmpty(formData.descripcionActividad, "Descripción de la actividad");

    return errors;
};

const validateForm = () => {
    const formData = {
        nombreDestino: document.getElementById('nombreDestino').value,
        fecha: document.getElementById('fecha').value,
        precio: document.getElementById('precio').value,
        descripcion: document.getElementById('descripcion').value,
        puntoReunion: document.getElementById('puntoReunion').value,
        horaSalida: document.getElementById('horasalida').value,
        horaEstadia: document.getElementById('horaReunion').value,
        horaRegreso: document.getElementById('horaRegreso').value,
        cupo: document.getElementById('cupo').value,
        descripcionActividad: document.getElementById('descripcionActividad').value,
    };

    const errors = validateInputsForm(formData);

    let formIsValid = true;
    for (const key in errors) {
        const errorField = document.getElementById(`error${key.charAt(0).toUpperCase() + key.slice(1)}`);
        if (errors[key].isValid) {
            errorField.textContent = "";
        } else {
            errorField.textContent = errors[key].error;
            formIsValid = false;
        }
    }

    if (formIsValid) {
        alert("Formulario enviado correctamente");
    }
};