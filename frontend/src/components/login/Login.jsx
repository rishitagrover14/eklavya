import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../AuthContext";


function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/student/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error);
        return;
      }

      // Successful login, store JWT token if needed
      login(data?.token);
      // Redirect to dashboard
      navigate("/studentportal");
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed.Incorrect email or password");
    }
  };

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-1"></div>
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form onSubmit={handleLogin}>
          <input
          type="email" 
          placeholder="EMAIL ID"
          value={email}
          onChange={(e) => setemail(e.target.value)} />

            <input type="password" placeholder="PASSWORD" 
            value={password}
            onChange={(e) => setpassword(e.target.value)}/>
            {error && <div className='error'>{error}</div>}
            <button type="submit" className="opacity"> SUBMIT</button>
          </form >
          <div className="register-forget opacity">
            <Link to='/signup'><a href=""> New User? <br />REGISTER</a></Link>
            <a href="">FORGOT PASSWORD</a>
          </div>
        </div>
        <div className="circle circle-2"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
}

export default Login;
