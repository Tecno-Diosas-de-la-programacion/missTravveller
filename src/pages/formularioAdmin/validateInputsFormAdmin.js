export {validateInputsForm}

const validateInputsForm =(formData) =>{
    const results ={
        isValid : true,
        error : ""
    };
    const checkFullName = validateFullName(formData.fullName)
    if( checkFullName.isValid== false){
        results.isValid = false;
        results.error = checkFullName.error;
    }
    return results;
}