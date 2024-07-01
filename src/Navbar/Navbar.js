import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { useMediaQuery } from "@react-hook/media-query";
import "./Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <nav className="nav-bar">
      <div className="left-nav-section">
          <img
           src="https://cdn-icons-png.flaticon.com/512/263/263142.png" // Use a direct URL to the shopping cart logo image here
          alt="Shopping Cart"
          className="mylogo"
          />
      </div>

      <div
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={`bar1 ${isMenuOpen ? "rotate-down" : ""}`}></div>
        <div className={`bar2 ${isMenuOpen ? "hidden" : ""}`}></div>
        <div className={`bar3 ${isMenuOpen ? "rotate-up" : ""}`}></div>
      </div>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="li">
          <Link to="/Home" className="nav-links-rm">
            Home
          </Link>
        </li>
        <li className="li">
          <Link to="/Product" className="nav-links-rm">
            Product
          </Link>
        </li>
        <li className="li">
          <Link to="/Cart" className="nav-links-rm">
            <FaShoppingCart className="icon-cart" />
            Cart
          </Link>
        </li>
        <li className="li">
          <Link to="/Profile" className="nav-links-rm">
            {isSmallScreen ? (
              <>Profile</>
            ) : (
              <FaUserCircle style={{ height: "20px", width: "20px" }} />
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
