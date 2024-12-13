import './ImageGallery.css';
import background from '../../Assets/background.png';
import discountTag from '../../Assets/corner.png';
import { useEffect, useState } from 'react';

function ImageGalleryHome({prop})
{
   const [cartItems,setCartItems]=useState([]);

   useEffect(()=>{
      console.log(localStorage.getItem("cartItems"));
   },[cartItems]);

   const addToCart=(data)=>{
      setCartItems([...cartItems,data]);
      localStorage.setItem("cartItems",JSON.stringify(cartItems));
   }
    return(
        <div className='GalleryContainer'>
            <img src={background} className='background'/>
           <div className='ImageContainer' style={{backgroundColor:"white"}}>
             <div className='ImageWithText'style={{backgroundColor:"white"}} id='img1'>
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={prop.element.img} width="130" height="160"/>
                <h6>{prop.element.heading}</h6>
                <h5>{prop.element.price}</h5>
             </div>
           </div>
        </div>
    );
}

export default ImageGalleryHome;