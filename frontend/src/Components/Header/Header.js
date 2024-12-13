import './Header.css';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search.png';
import homeIcon from '../../Assets/homeicon.png';
import cart from '../../Assets/cart.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoutButton from '../../Api/Logout';
function Header({prop})
{
    const navigate=useNavigate();
    const [loginButton,setLoginButton]=useState("Login");
    
    const [searchValue,setSearchValue]=useState();

    useEffect(()=>{
       setLoginButton(localStorage.getItem("login")==="false"?"Login":"Logout");
       console.log(localStorage.getItem("username"));
    },[loginButton]);

    
    const loginCheck=()=>{
        if(localStorage.getItem("login")==="false")
           {
            setLoginButton(localStorage.getItem("login")==="false"?"Login":"Logout");
            navigate("/Login");
           }
           else
           {
            setLoginButton(localStorage.getItem("login")==="false"?"Login":"Logout");
            logoutButton().then(e=>{alert("Logout Successfull!")
            window.location.reload();
            })
            .catch(err=>alert(err));
           }
    }
    return (
        <div class="HeaderContainer"> 
             <div class="SearchNavHeader">
               <img src={logo} width="90" height="90"/>
               {prop.searcRequired?(
                 <div class="SearchBar">
                 <input type="text" name="SearchText" placeholder='Search By Author, title'onChange={(e)=>setSearchValue(e.target.value)}/>
                 <img src ={search} width="35" height="35" onClick={()=>navigate(`/Search?value=${searchValue}`)}/>
                </div>
            
               ):(<h1>
                  Welcome to super seller book store
               </h1>)}
               <section className='loginbtns'>
                <button type='button' onClick={()=>loginCheck()}>{loginButton}</button>
                    {localStorage.getItem("login")==="true"?
                    ( <button type='button' onClick={()=>(navigate("/notes"))}>Add Notes</button>):
                    ("")
                    }
               </section>
               </div>
             <div class="NavigationHeader">
                {/* <img src={menu} width="30" height="30" className='menuHeader'/> */}
                <div className='NavSubHeader'>
                <img src={homeIcon} width='30' height='30'onClick={()=>window.location.href="/"}/>
                <div className='hoverButton' onClick={()=>window.location.href="/BestSeller"}><h5>BestSellers</h5></div>
                <div className='hoverButton' onClick={()=>window.location.href="/NewArrivals"}><h5 >New Arrivals</h5></div>
                <div className='hoverButton' onClick={()=>window.location.href="/GoogleBooks"}><h5>Google Books</h5></div>
                <div className='hoverButton' onClick={()=>window.location.href="/BookRecommendation"}><h5>Book Recommendation</h5></div> 
                <div className='hoverButton'><h5>Fiction & Non Fiction</h5></div>
                </div>
                <div className='NavSubHeaderTwo'>
                <div className='hoverButton'><h5>School Education</h5></div>
                <div className='hoverButton'><h5>Higher Education</h5></div>
                <div className='hoverButton' onClick={()=>window.location.href="/GoogleBooksGame"}><h5>Games & Puzzles</h5></div>
                <img src={cart} width='30' height='30' onClick={()=>window.location.href="/Cart"}/>
                </div>
              
            </div>
        </div>
    );
}

export default Header;