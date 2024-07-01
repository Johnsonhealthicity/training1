import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleDeleteItem = (indexToDelete) => {
    const updatedCartItems = cartItems.filter((item, index) => index !== indexToDelete);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-container">
          <h2>Your Cart is Empty</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.newPrice}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDeleteItem(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
