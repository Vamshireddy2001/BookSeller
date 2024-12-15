import './Cart.css';
import Header from '../../Components/Header/Header.js';
import Footer from '../../Components/Footer/Footer.js';
import React, { useEffect,useState } from 'react';
import deleteButton from '../../Assets/deletebutton.png';

function Cart()
{
  const [cartItems,setCartItems]=useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const deleteItem=(data)=>{
    const updatedCartItems = cartItems.filter((item) => {
      return !(item.text1 === data.text1 && item.price === data.price);
    });
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems",JSON.stringify(updatedCartItems));
    // window.location.reload();
  }
    return (
        <div class="CartContainer">
        <Header prop={{"searchRequired":false}}/>
          <div className='CartItems'>
            <div className='Titles'>
              <div className='Section'><h2>Product</h2></div>
              <div className='Section'><h2>Description</h2></div>
              <div className='Section'><h2>price</h2></div>
              <div className='Section'><h2>Action</h2></div>
            </div>
            
            {cartItems.map((item, index) => (
          <div className='Items' key={index}>
            <div className='Section'><img src={item.img} alt={item.description} width="60" height="60"/></div>
            <div className='Section'><h2>{item.description}</h2></div>
            <div className='Section'><h2>{item.price}</h2></div>
            <div className='Section'><h2><img src={deleteButton} width="30" height="30" onClick={()=>deleteItem({text1:item.text1,price:item.price})}/></h2></div>
          </div>
           ))}
        
            <button onClick={()=>window.location.href="/"}>Continue Shopping</button>
          </div>
        <Footer/>
        </div>
    )
}

export default Cart;