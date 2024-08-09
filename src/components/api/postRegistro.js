import { domainName } from "./domainName"

const postRegisterForm = async ( newUserData ) => {
    const url = `${domainName()}/api/v1/users`;
  
    const options = { //Aqui se comunica el front con el back
      method: "POST", // DELETE, PUT, POST, GET
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUserData),
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