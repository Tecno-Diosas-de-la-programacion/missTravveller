import { domainName } from "./domainName";

const postContactForm = async ( formData ) => {
    const url = `${domainName()}/api/v1/contact_forms`;
  
    const options = {
      method: "POST", // DELETE, PUT, POST, GET
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    };
  
    const response = await fetch(url, options);
  
    if( response.status !== 201){
      const serverError = await response.json();
      throw serverError.message;
    }
  
    const registerResult = await response.json();
    console.log(registerResult);
  
    return registerResult;
  };
  
  export { postRegisterForm };