import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
          <h1 className="opacity">LOGIN</h1>
          <form>
            <div className="custom-select-container">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="custom-select"
                required
              >
                <option value="">Select the type of user</option>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <Link to='/dash' ><button className="opacity" >SUBMIT</button></Link >
          </form>
          <div className="register-forget opacity">
            <Link to='/signup'><a href=""> New User? <br />REGISTER</a></Link>
            <a href="">FORGOT PASSWORD</a>
          </div>
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  );
}

export default Login;
