import axios from "axios";
import url from "../Utils/Utils";

async function NotesAPI(data)
{

    console.log("api",data);
    try
    {
        const response=await axios.post(`${url}/cart/addreminder`,JSON.stringify(data),{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.login)
          return response.data;
        else
          return false;
    }
     catch(err)
     {
        throw new err;
     }
}
async function FetchNotes(id)
{
    try
    {
        const response=await axios.post(`${url}/cart/fetchreminder`,JSON.stringify({"id":id}),{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response)
          return response.data;
        else
          return 'error:',response.data;
    }
     catch(err)
     {
        return err
     }
}


export {NotesAPI,FetchNotes}