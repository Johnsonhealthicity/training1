import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

 function CreatePassword(){

const [password, setPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return passwordRegex.test(password);
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (validatePassword(password)) {
    // Implement password save logic here
    console.log('Password Created:', password);
    navigate('/Home'); // Redirect to the dashboard
  } else {
    alert('Password must be at least 8 characters long and include both uppercase and lowercase letters.');
  }
};

return (
  <div className="centered-form">
    <div className="form-container">
      <h2>Create Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Password:
          <input className="radio"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
            required
          />
        </label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className="sbtn"type="submit">Sign-in</button>
      </form>
    </div>
  </div>
);
}

export default CreatePassword;