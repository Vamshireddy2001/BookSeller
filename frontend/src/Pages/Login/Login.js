import { useState } from 'react';
import { LoginUser } from '../../Api/Login.js';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login()
{
   const navigate=useNavigate();
   const [email, setEmail]= useState("");
   const [password, setPassword]= useState("");

   const submitData=()=>{
           let form={
            "email": email,
            "password":password
           };

           LoginUser(form).then(e=>
            {
               console.log('data',e);
               if(e.login)
                {
                  alert("Login successfull");
                  localStorage.setItem("login","true");
                  navigate('/')
                }
                else
                {

                  alert("Login Unsuccessful");
                  localStorage.setItem("login","false");
                  navigate('/Login')
                }
            }).catch(err=>console.log(err));
   }

    return (
        <div className='LoginContainer'>
           <Header prop={{"searchRequired":false}}/>
           <div className='LoginForm'>
              <h4>LOGIN</h4>
              <hr/>
              <div className='Form'>
                 <h3>FILL IN THE DETAILS</h3>
                 <div className='textBoxes'>
                    <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                 </div>
                 <div className='buttons'>
                 <button type='button' onClick={()=>submitData()}>Login</button>
                 <button type='button' onClick={()=>window.location.href="/Register"}>Register</button>
                 </div>
                
              </div>
           </div>
           <Footer/>
        </div>
    );
}

export default Login;