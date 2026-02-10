import React from 'react'
import {NavLink} from "react-router-dom"



const Header = () => {
  return (
    <div className='header'>
        <div className='header-1'>
          <div>
            <NavLink to='hari'>hari</NavLink>
          </div>
          <div>

            <NavLink to='subbu'>subbu</NavLink>
          </div>
           
            

        </div>
      
    </div>
  )
}

export default Header
