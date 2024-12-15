import axios from 'axios';
import url from '../Utils/Utils.js';
import Cookies from 'js-cookie';

async function LoginUser(userData)
{
    try
    {
        const response=await axios.post(`${url}/login`,userData,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.login)
        {  console.log(response.data.id)
          Cookies.set("id",response.data.id)
          Cookies.set("token",response.data.token)
          return response.data;
        }
        else
          return response.data;
    }
     catch(err)
     {
        throw new err;
     }
}

export {LoginUser};