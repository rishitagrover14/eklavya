import { useTheme } from "@mui/material";
import { useState} from "react";
import logo from './Mask group1.png'
import "./logo.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const menu=["+91-6237615438"];
  const[open,setopen]=useState(false);
  return (
    <div className='nav' >
      <div >
      <img src={logo} alt="Logo" className='logo' />
      </div>
      <div className="subnav">
      <Link to='/home' className="links">Home</Link>
      <Link to='/about' className="links">About Us</Link>
        <div className="links"  onClick={()=>setopen(!open)}>Contact Us</div>
        {open &&(
                <div className='click'>
                    
                            {menu.map((item) => (<div  className='listitem' onClick={()=>setopen(false)} key={item}>{item}</div>)
                        )}
                    
                </div>)}
    
      <Link to='/login' className="links">Login</Link>      
      </div>
    </div>
  );
};

export default Topbar;
