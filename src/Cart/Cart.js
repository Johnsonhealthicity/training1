import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Cart.css';

export default function Cart() {
    const [cartItems, setCartItems] = useState({});
    const [cartItemCount, setCartItemCount] = useState(0); // State to track cart item count

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || {};
        setCartItems(storedCart);

        // Calculate initial cart item count
        const initialItemCount = Object.values(storedCart).reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(initialItemCount);

        // Listen for changes in localStorage and update cart item count
        const storageListener = () => {
            const updatedCart = JSON.parse(localStorage.getItem('cart')) || {};
            const updatedItemCount = Object.values(updatedCart).reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(updatedItemCount);
        };

        window.addEventListener('storage', storageListener);

        return () => {
            window.removeEventListener('storage', storageListener);
        };
    }, []);

    const updateCart = (itemId, newQuantity) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };

            if (newQuantity <= 0) {
                delete updatedItems[itemId];
            } else {
                updatedItems[itemId].quantity = newQuantity;
            }

            localStorage.setItem('cart', JSON.stringify(updatedItems));

            // Update cart item count after updating cart items
            const updatedItemCount = Object.values(updatedItems).reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(updatedItemCount);

            return updatedItems;
        });
    };

    const handleIncrement = (itemId) => {
        const newQuantity = cartItems[itemId].quantity + 1;
        updateCart(itemId, newQuantity);
    };

    const handleDecrement = (itemId) => {
        const newQuantity = cartItems[itemId].quantity - 1;
        updateCart(itemId, newQuantity);
    };

    const handleDelete = (itemId) => {
        setCartItems((prevItems) => {
            const updatedItems = { ...prevItems };
            delete updatedItems[itemId];
            localStorage.setItem('cart', JSON.stringify(updatedItems));

            // Update cart item count after deleting an item
            const updatedItemCount = Object.values(updatedItems).reduce((total, item) => total + item.quantity, 0);
            setCartItemCount(updatedItemCount);
            window.location.reload();
            return updatedItems;
        });
    };

    return (
        <>
            <Navbar cartItemCount={cartItemCount} />
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='cart'>
                {Object.keys(cartItems).length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    Object.values(cartItems).map((item) => (
                        item && (
                            <div key={item.id} className='cart-item'>
                                <img src={item.img} alt={item.title} className='cart-item-img' />
                                <span className='cart-item-title'>{item.title}</span>
                                <div className='cart-item-quantity'>
                                    <button onClick={() => handleDecrement(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrement(item.id)}>+</button>
                                </div>
                                <span className='cart-item-price'>${item.newPrice * item.quantity}</span>
                                <button className='delete-button' onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        )
                    ))
                )}
            </div>
        </>
    );
}
