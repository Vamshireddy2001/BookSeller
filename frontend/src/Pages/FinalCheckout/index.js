import { useState } from 'react';
import Header from '../../Components/Header/Header';
import './index.css';

function FinalCheckout(){

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
      };

return(<>
      <Header prop={{"searchRequired":false}}/>
      <div className="checkout-container">
        <h2>Final Checkout</h2>
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Billing Information</h3>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-section">
            <h3>Payment Details</h3>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Complete Purchase
          </button>
        </form>
      </div>
    </>
  );
}

export default FinalCheckout;