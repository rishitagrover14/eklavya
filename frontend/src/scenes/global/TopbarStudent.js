import './TopbarStudent.css';
import profile from './user.png';
import arrow from './down-chevron.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './Sidebar';

const TopbarStudent = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const prof = ["home", "Log-out", "Support"];
    const [profileopen, setprofile] = useState(false);
    
  const handleProfile = (item) => {
    if (item === "home") {
      navigate("/home"); // Navigate to /dashboard route
    } 
    //else if (item === "Log-out") {
    //   handleLogout(); // Call handleLogout function for logout
    // }
    setOpen(false); // Close the menu
  };
    return (
        <div className='studentnavbar'>
           {/* <Sidebar/> */}
           <div className='studentdashboard'>Student Dashboard</div>
           <div className='username' onClick={() => setprofile(!profileopen)}><img
              
              className="profile"
              src={profile}
              alt="Profile"
            /><strong >username</strong>
            <img
              className="arrow"
              src={arrow}
              alt="arrow"
            /></div>
            {profileopen && (
              <div className="hiiii">
                {prof.map((item) => (
                  <div
                    className="listitem"
                    onClick={() => handleProfile(item)}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
        </div>
        
    );
}

export default TopbarStudent;
