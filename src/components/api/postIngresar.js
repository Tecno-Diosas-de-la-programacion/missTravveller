import { domainName } from "../../components/api/domainName.js"

const postIngresar = async ( userLogin ) => {
    const url = `${domainName()}/api/v1/login`;
  
    const options = {
      method: "POST", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userLogin),
    };
  
    const response = await fetch(url, options);
  
    if( response.status !== 200){
      const serverError = await response.json();
      throw serverError.message;
    }
  
    const loginResult = await response.json();
    console.log(loginResult);
  
    return loginResult;
  };
  
  export { postIngresar };