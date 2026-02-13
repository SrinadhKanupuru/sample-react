import React from 'react'
import {NavLink} from "react-router-dom"



const Header = () => {
  return (
    <div className='header'>
        <div className='header-1'>
          
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUCD8f4VQbqqrBSJ-CXdgQu-yBQbpJfadZw&s' alt='image-2'/>
          
          <div className='nav'>
            
            <NavLink to='hari'>hari</NavLink>
            <NavLink to='subbu'>subbu</NavLink>
            <NavLink to='srinadh'>srinadh</NavLink>
            <NavLink to='logo'>Logo</NavLink>
          </div>
          
          
        </div>
           
            

      </div>
      
    
  )
}

export default Header
