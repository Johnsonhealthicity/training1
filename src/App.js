import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneNumberInput from './PhoneNumberInput';
import OTPInput from './OTPInput';
import CreatePassword from './CreatePassword';
import './App.css'; // Ensure this file is present for global styles
import Profile from './Profile/profile';
import Order from './Order/Order';
import Navbar from './Navbar/Navbar';
import Wishlist from './Wishlist/Wishlist';
import Product from './Product/Product';
import datalist from './DataList/datalist';
import Home from './HomePage/Home';
import Cart from './Cart/Cart';
import ProductInfo from './ProductInfo/ProductInfo';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<PhoneNumberInput setPhoneNumber={setPhoneNumber} setGeneratedOtp={setGeneratedOtp} />} 
        />
        <Route 
          path="/otp" 
          element={<OTPInput phoneNumber={phoneNumber} generatedOtp={generatedOtp} setOtp={setOtp} />} 
        />
       <Route path="CreatePassword" element={<CreatePassword/>}/>
        <Route path="profile" element={<Profile />} /> 
        <Route path="Order" element={<Order/>}/>
        <Route path="Navbar" element={<Navbar/>}/>
        <Route path="Wishlist" element={<Wishlist/>}/>
        <Route path ="Product" element={<Product/>}/>
        <Route path="datalist"element={<datalist/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="Cart" element={<Cart/>}/>
        <Route path="/Product-Info/:id" element={<ProductInfo />} />


      </Routes>
    </Router>
  );
}

export default App;
