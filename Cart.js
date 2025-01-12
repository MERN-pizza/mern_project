import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, placeOrder }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div>
                  <p>{item.name}</p>
                  <p>Size: {item.size}</p>
                  <p>Category: {item.category}</p>
                  <p>Price: ₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className="btn btn-success mt-3" onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
