import axios from 'axios';
import url from '../Utils/Utils.js';

const endPoint="removecookies";

async function logoutButton()
{
    try
    {
        const response=await axios.get(`${url}/${endPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.cookie)
         { 
            localStorage.setItem("login","false");
            console.log("if",response.data.cookie);
         }
        else
          {
            localStorage.setItem("login","false");
            console.log(response.data.cookie);
          }
    }
     catch(err)
     {
        throw  err;
     }
}

export default logoutButton;