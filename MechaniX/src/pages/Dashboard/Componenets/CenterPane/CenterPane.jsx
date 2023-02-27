import React, { useContext, useEffect } from 'react'
import './CenterPane.css'
import Box from '@mui/material/Box';
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import { UserContext } from '../../../../helper/context';




export default function CenterPaneBox() {
  const {user,setUser} = useContext(UserContext);
  useEffect(()=>{
    console.log(user,"######");
  },[user])
    return (
    <div className = "CenterPaneBox">

      <div className="CardPanel">
      <div className="CardTest">
      <br />
      <hr />
      <br />
      <br />
      
          <div className="cardrow">
        
            <Box>
               <Card1 name={user.user.name} email={user.user.email} phone={user.user.phone} address={user.user.address} />
                 <br />
                 <hr />
                 <br />
            </Box>
        
           </div>

           <div className="cardrow">
           <Box>
               <Card2 Vehicletype={user.vehicle.Vehicletype} VehicleModel={user.vehicle.VehicleModel} VehicleMade={user.vehicle.VehicleMade} Madeyear={user.vehicle. Madeyear} fueltype={user.vehicle.fueltype} />
                <br />
                <hr />
                <br />
              </Box>
            </div>
            
            
      
       </div>
     </div>
      
    </div>
        
    
  )
}
/*
<div className="CenterBox">
                <Box
                     sx={{
                  
                  width: 400,
                  height: 300,
                   backgroundColor: 'primary.dark',
                    '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                     },
                              }} >
                          <h1> Test</h1>
                </Box>
              </div>
              
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';


      <div className="cardrow">
        <Box>
          
         <Card2 />
           <br />
           <hr />
            <br />
           <br />
      </Box>
      </div>
      
      
      <Card3 />
          <br />
          <hr />
          <br />
          <br />*/
      
      
      


