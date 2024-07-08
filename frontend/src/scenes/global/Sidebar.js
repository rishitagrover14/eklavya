import React from 'react'
import './Sidebar.css'
import profile from './graduation.png';
function Sidebar() {
  return (
    <div className='side'>
        <img src={profile} className='usericon'></img>
        <ul>
            <li className='sideitems'>Home</li>
            <li className='sideitems'>Courses</li>
            <li className='sideitems'>Oppurtunities</li>
            <li className='sideitems'>Dashboard</li>
            <li className='sideitems'>Test/Quizzes</li>
            <li className='sideitems'>Help</li>
        </ul>
    </div>
  )
}

export default Sidebar;
