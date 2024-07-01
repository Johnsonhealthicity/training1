import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  return (
    <div className="tab">
  
      <ul>
            <li>
                <NavLink to="home">Home</NavLink>
            </li>
            <li>
                <NavLink to="product">Product</NavLink>
            </li>
            <li>
                <NavLink to="cart">Cart</NavLink>
            </li>
            <li>
          <NavLink to="/profile">
            <FontAwesomeIcon icon={faUser} /> {/* Profile Icon */}
          </NavLink>
          </li>
        
            <li className="logout">
                <NavLink to="/">Logout</NavLink>
            </li>
            </ul>

      </div>
    
  );
}

export default Dashboard;