import React from 'react'
import todoIcon from '../../assets/todoIcon.png'; 
import './Header.css'
function Header({setCategory}) {
  return (
    <div className='wrap-head'>
      <div className='icon-label'>
       <div className='icon'> <img src={todoIcon} /></div>
        <label>To Do App</label>
      </div>
      
    </div>
  )
}

export default Header


