import React from 'react'
import Header from './Componenets/LeftPane/Header'
import CenterPane from './Componenets/CenterPane/CenterPane'
import RightPane from './Componenets/RightPane/RightPane'
import './mechanicdash.css' 
import Home from './Pages/Home/Home'

function MechanicDash() {
  return (
    <div className='dashboard'> <Home/> </div> 
  )
}

export default MechanicDash