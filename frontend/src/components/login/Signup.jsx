import React, { useState } from 'react';
import './signup.css'
function Signup() {
   
  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>
        <div className="form-container">
          {/* <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" /> */}
          <h1 className="opacity">Sign up</h1>
          <form>
          
          <input type="text" placeholder="FIRSTNAME" />
          <input type="text" placeholder="MIDDLENAME" />
          <input type="text" placeholder="LASTNAME" />
            
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <button className="opacity" >Register</button>
          </form>
          
        </div>
        <div className="circle circle-two"></div>
      </div>
      <div className="theme-btn-container"></div>
    </section>
  )
}

export default Signup
