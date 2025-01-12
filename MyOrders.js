import React from 'react';
import './MyOrders.css';

const MyOrders = ({ orders }) => {
  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no orders.</p>
      ) : (
        <ul className="orders-list">
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h3>Order #{index + 1}</h3>
              <ul className="order-items">
                {order.map((item, idx) => (
                  <li key={idx} className="order-item-detail">
                    <img src={item.image} alt={item.name} className="order-item-img" />
                    <div>
                      <p>{item.name}</p>
                      <p>Size: {item.size}</p>
                      <p>Category: {item.category}</p>
                      <p>Price: ₹{item.price}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyOrders;
