import React from 'react'
import Header from './Componenets/LeftPane/Header'
import CenterPane from './Componenets/CenterPane/CenterPane'
import RightPane from './Componenets/RightPane/RightPane'
import './admindash.css' 
import Home from './Pages/Home/Home'

function AdminDash() {
  return (
    <div className='dashboard'> <Home /> </div> 
  )
}

export default AdminDash