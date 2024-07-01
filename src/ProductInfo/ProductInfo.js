import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ProductInfo.css';
import datalist from '../DataList/datalist';

export default function ProductInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const productId = parseInt(id, 10); // Ensure id is correctly parsed
    const fetchedProduct = datalist.find((item) => item.id === productId);
    setProduct(fetchedProduct);
  }, [id]);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, { ...product, quantity }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    navigate('/cart');
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="product-info-container">
        <div className="product-info">
          <img src={product.img} alt={product.title} className="product-img" />
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-price">${product.newPrice}</div>
            <div className="quantity-controls">
              <button className="btn btn-secondary" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="btn btn-secondary" onClick={handleIncrement}>+</button>
            </div>
            <button className="btn btn-dark" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
