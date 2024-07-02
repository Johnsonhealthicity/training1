import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Product.css';
import { useNavigate } from 'react-router-dom';
import datalist from '../DataList/datalist';

export default function Product() {
  const [alertMessages, setAlertMessages] = useState({});
  const navigate = useNavigate();

  const handleBuyNow = (item) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    cart[item.id] = cart[item.id]
        ? { ...cart[item.id], quantity: cart[item.id].quantity + 1 }
        : { ...item, quantity: 1 };
    localStorage.setItem('cart', JSON.stringify(cart));
    navigate('/cart');
  };

  return (
      <>
        <Navbar />
        <div className='store'>
          <div className='products-store'>
            {datalist.map((item, index) => (
                <div key={index} className='items-N'>
                  <img src={item.img} alt={item.title} className='products-img' />
                  <span className='product-title'>{item.title}</span>
                  <div className='star'>
                    <div className='stars'>
                      {[...Array(4)].map((_, idx) => (
                          <span key={idx} className='rating'>{item.star}</span>
                      ))}
                    </div>
                    <div>
                      <span className='review'>{item.reviews}</span>
                    </div>
                  </div>
                  <div className='price'>
                    <span className='previews-price'>{item.prevPrice}</span>
                    <span className='new-price'>${item.newPrice}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', alignItems: 'center' }}>
                    <button
                        type='button'
                        className='btn btn-dark buy-btn'
                        onClick={() => handleBuyNow(item)}
                    >
                      Buy Now
                    </button>
                  </div>
                  {alertMessages[item.id] && (
                      <div style={{ textAlign: 'center', marginTop: '5px', fontSize: 'smaller' }}>
                        {alertMessages[item.id]}
                      </div>
                  )}
                </div>
            ))}
          </div>
        </div>
      </>
  );
}
