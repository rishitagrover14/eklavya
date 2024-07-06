import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './signup.css'
function Signup() {
  const navigate = useNavigate();
  const [username, setuser] = useState('');
  const [email, setemail] = useState('');
  const [age, setage] = useState('');
  const [number, setnumber] = useState('');
  const [address, setaddress] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState('');
  const handleRegisteration=async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/student/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: username, email, password,address,age,mobile:number }),
      });

      const data = await response.json();

      if (!response.ok) {
          setError(data.error);
          return;
      }

      // Assuming successful signup, you can handle storing JWT token or other logic here
      // For example, redirecting to another page after successful signup
      navigate('/login');
  } catch (err) {
      console.error('Signup failed:', err);
      setError('Signup failed. Please try again.');
  }
   }
  return (
   
       <div className="container">
         <div className="circle circle-one"></div>
         <div className="signupcontainer">
          {/* <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" /> */}
          <h1 className="opacity">Sign up</h1>
          <form onSubmit={handleRegisteration}>
          
          <input 
          type="text" 
          placeholder="USERNAME" 
          value={username}
          onChange={(e) => setuser(e.target.value)}/>

          <input 
          type="email" 
          placeholder="EMAIL ID"
          value={email}
          onChange={(e) => setemail(e.target.value)} />

          <input 
          type="number" 
          placeholder="AGE"
          value={age}
          onChange={(e) => setage(e.target.value)}
          
          /><br/>
            
            <input 
            type="number" 
            placeholder="MOBILE" 
            value={number}
            onChange={(e) => setnumber(e.target.value)}/>

            <input 
            type="text" 
            placeholder="ADDRESS"
            value={address}
            onChange={(e) => setaddress(e.target.value)}/>
            
            <input 
             type="password"
             placeholder="PASSWORD"
             value={password}
          onChange={(e) => setpassword(e.target.value)}/>
          <br/>
          {error && <div className='error'>{error}</div>}
          <button className="opacity" >Register</button>
          </form>
          
        </div>
        <div className="circle circle-two"></div>
       </div>
       
  )
}

export default Signup
