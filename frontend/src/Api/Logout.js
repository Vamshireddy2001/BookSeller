import axios from 'axios';
import url from '../Utils/Utils.js';
import Cookies from 'js-cookie';
const endPoint="removecookies";

async function logoutButton()
{
    try
    {
        const response=await axios.get(`${url}/${endPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.cookie)
         { 
               Cookies.remove("id")
               Cookies.remove("token")
         }
    }
     catch(err)
     {
        throw  err;
     }
}

export default logoutButton;