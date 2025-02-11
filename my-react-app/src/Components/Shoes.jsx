import React from "react";
import "./shoes.css";

const Shoes = () => {
  return (
    <div className="checkout-container">
      <div className="summary-order">
        <h2>Summary Order</h2>
        <p>Check your item and select your shipping for a better experience.</p>
        <div className="order-items">
          <div className="item">
            <img src="/images/shoe1.jpg" alt="Mindful Grey" />
            <div>
              <p>New Balance 57/40 Men's Sneakers - Mindful Grey</p>
              <p>$129.00</p>
            </div>
          </div>
          <div className="item">
            <img src="/images/shoe2.jpg" alt="Grey" />
            <div>
              <p>New Balance 997H Men's Sneakers - Grey</p>
              <p>$119.00</p>
            </div>
          </div>
          <div className="item">
            <img src="/images/shoe3.jpg" alt="Oyster Pink" />
            <div>
              <p>New Balance 57/40 Women's - Oyster Pink</p>
              <p>$149.00</p>
            </div>
          </div>
        </div>
        <div className="shipping-method">
          <h3>Available Shipping Method</h3>
          <label>
            <input type="radio" name="shipping" checked /> FedEx Delivery (Free)
          </label>
          <label>
            <input type="radio" name="shipping" /> DHL Delivery ($12.00)
          </label>
        </div>
      </div>
      <div className="payment-details">
        <h2>Payment Details</h2>
        <label>Email Address</label>
        <input type="email" value="barlyvallendito@gmail.com" readOnly />
        <label>Card Detail</label>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="MM/YY" />
        <input type="text" placeholder="CVC" />
        <label>Card Holder</label>
        <input type="text" value="Barly Vallendi" readOnly />
        <label>Billing Address</label>
        <input type="text" value="7851 Garfield Ave, Huntington Beach" readOnly />
        <input type="text" value="California (CA)" readOnly />
        <input type="text" value="92648" readOnly />
        <div className="total">
          <p>Subtotal: $397.00</p>
          <p>VAT (20%): $2.89</p>
          <p><strong>Total: $399.89</strong></p>
        </div>
        <button className="pay-button">Pay $399.89</button>
      </div>
    </div>
  );
};

export default Shoes;
