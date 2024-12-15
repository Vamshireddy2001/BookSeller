import axios from "axios";
import url from "../Utils/Utils";

async function NotesAPI(data)
{

    try
    {
        const response=await axios.post(`${url}/cart/addreminder`,JSON.stringify(data),{headers:{'Content-Type':'application/json'},withCredentials:true});
        console.log(response.data);
      
        if(response.data.login)
          return response.data;
        else
          return response.data;
    }
     catch(err)
     {
        return err;
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

async function DeleteNote(id)
{
  console.log("id",id);
    try
    {
        const response=await axios.post(`${url}/cart/deletereminder`,JSON.stringify({"id":id}),{headers:{'Content-Type':'application/json'},withCredentials:true});
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


export {NotesAPI,FetchNotes,DeleteNote}