import './ImageGallery.css';
import background from '../../Assets/background.png';
import discountTag from '../../Assets/corner.png';
import { useEffect, useState } from 'react';
import AlertBox from '../AlertComponent';

function ImageGalleryGoogle({prop,showAlertBox,responseToAlertBox})
{
   const [cartItems,setCartItems]=useState([]);

   useEffect(() => {
      const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      // console.log(savedCartItems);
      setCartItems(savedCartItems);
      console.log("response",responseToAlertBox)
  }, []);

   const addToCart = (data) => {
      setCartItems((prevCartItems) => {
          const updatedCart = [...prevCartItems, data];
          localStorage.setItem("cartItems", JSON.stringify(updatedCart));
          return updatedCart;
      });
  };

  const handleAddToCartClick = () => {
   showAlertBox(true); 
   if (responseToAlertBox) { // Only add to cart if responseToAlertBox is true
     addToCart({
       img: prop.img,
       description: prop.title,
       price: prop.price,
     });
   } else {
    // Show the alert box if the condition is not met
   }
 };
    return(
        <div className='GalleryContainer'>
            <img src={background} className='background'/>
           <div className='ImageContainer'>
             <div className='ImageWithText' id='img1'>
                <img src={discountTag} width='40' height='40' className='discount'/>
                <img src={prop.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={handleAddToCartClick} className='pointer'>Add to cart</h4>
                </div>
                <h6>{prop.title}</h6>
                <h5>{prop.price}</h5>
             </div>
           </div>
        </div>
    );
}

export default ImageGalleryGoogle;