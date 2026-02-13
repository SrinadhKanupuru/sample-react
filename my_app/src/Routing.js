import React from 'react'

import './Style.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Hari from './Hari';
import Subbu from './Subbu';
import Srinadh from './Srinadh';
import Logo from './Logo';

const Routing = () => {
  return (
    <div>
      <Header/>
      <Routes>
        
        <Route path='hari' element={<Hari/>}/>
        <Route path='subbu' element={<Subbu/>}/>
        <Route path='srinadh' element={<Srinadh/>}/>
        <Route path='logo' element={<Logo/>}/>
        
      </Routes>
    </div>
  )
}

export default Routing
