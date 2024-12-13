import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import './Register.css';
import url from '../../Utils/Utils.js';
import { registerUser } from '../../Api/Login.js';



function Register()
{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [confirmPassword, setConfirmPassword]= useState("");
     

    const dataSubmittted=()=>{
        fetch(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log("Data submitted!", data.message);
            // Add any further logic here
        })
        .catch(err => {
            console.log("There was an error:", err);
            // Handle error gracefully, display message to the user, etc.
        });}


    return (
        <div className='LoginContainer'>
           <Header/>
           <div className='LoginForm'>
              <h4>REGISTER</h4>
              <hr style={{marginTop:"30px"}}/>
              <div className='Form' style={{height:"250px"}}>
                 <h3>FILL IN THE DETAILS</h3>
                 <div className='textBoxes'>
                    <input type='name' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                    <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                 </div>
                 <div className='textBoxes'>
                    <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <input type='text' placeholder='Confirm Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
                 </div>
                 <div className='buttons'>
                 <button type='button' onClick={()=>dataSubmittted()}>Register</button>
                 <button type='button' onClick={()=>window.location.href="/Login"}>Login</button>
                 </div>
              </div>
           </div>
           <Footer/>
        </div>
    );
}

export default Register;