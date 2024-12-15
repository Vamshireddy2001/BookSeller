import './ImageGallery.css';
import background from '../../Assets/background.png';
import discountTag from '../../Assets/corner.png';
import { useEffect, useState } from 'react';

function ImageGallery({prop,showAlertBox,responseToAlertBox})
{
   const [cartItems,setCartItems]=useState([]);

   useEffect(() => {
      const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      // console.log(savedCartItems);
      setCartItems(savedCartItems);
     
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
   console.log('working');
   if (responseToAlertBox) { // Only add to cart if responseToAlertBox is true
     addToCart({
       img: prop.element.img,
       description: prop.element.heading,
       price: prop.element.price,
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
                <img src={prop.element.img} width="130" height="160"/>
                <div className='cartFeature'>
                  <h4 onClick={handleAddToCartClick} className='pointer'>Add to cart</h4>
                </div>
                <h6>{prop.element.heading}</h6>
                <h5>{prop.element.price}</h5>
             </div>
           </div>
        </div>
    );
}

export default ImageGallery;