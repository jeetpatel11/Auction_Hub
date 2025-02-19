import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"; // Import useNavigate at the top

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Call the hook here, outside the function

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const result = await response.json();

      if (result.success && response.ok) {

        localStorage.setItem('token', result.token);


        alert('Login successful!');
        navigate("/profile"); // Use navigate here
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
      console.error(error);  // Log the error for debugging
    }
  };

  return (
    <>
      <div style={{ paddingLeft: '320px' }}>
        <div style={{ maxHeight: '600px', maxWidth: '390px', border: '1px solid', margin: '50px auto', '--clr-oran': '#d6482b', borderRadius: '20px' }}>
          <form method='POST' onSubmit={handleLogin}>
            <h1 style={{ paddingLeft: '150px', fontFamily: 'cursive', color: 'var(--clr-oran)' }}>Login</h1>

            <label style={{ fontFamily: 'cursive', color: 'var(--clr-grey)', marginLeft: '20px' }}>Email</label>
            <input type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ fontFamily: 'cursive', width: '350px', marginLeft: '20px', marginBottom: '20px', fontWeight: '600', height: '30px', border: 'none', outline: 'none', borderBottom: '1px solid' }} />

            <label style={{ fontFamily: 'cursive', color: 'var(--clr-grey)', marginLeft: '20px' }}>Password</label>

            <input type="password"
              name='password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ fontFamily: 'cursive', width: '350px', marginLeft: '20px', fontWeight: '600', height: '30px', border: 'none', outline: 'none', borderBottom: '1px solid' }} />
            <button
              style={{ fontFamily: 'cursive', margin: '20px', borderRadius: '10px', fontSize: '20px', fontFamily: 'sans-serif', width: '350px', height: '40px', fontFamily: 'sans-serif', background: 'var(--clr-oran)', color: 'white', fontWeight: '600', border: 'none' }}>Submit</button>

            <p style={{ display: 'flex', justifyContent: 'center', fontFamily: 'cursive' }}>Don't have an account? <Link to="/signup">Register</Link></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
