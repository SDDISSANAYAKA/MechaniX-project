import React from 'react'
import CenterPane from '../../Componenets/CenterPane/CenterPane'
import Header from '../../Componenets/LeftPane/Header'
import RightPane from '../../Componenets/RightPane/RightPane'

import './Home.css'


export default function Home() {
  return (
   
    <div className="dashboardContainer"> 
        
          <Header/>
          <CenterPane/>
          <RightPane/>  
         
        
        
    </div>
  )
}
