import React from 'react'
import './RightPane.css'
import Box from '@mui/material/Box';
import ChatbotApp from '../Chatbot/Chatbot';
import NavBar from '../NavBar/NavBar';




export default function RightPane() {
  return (
    <div className = "RightPaneBox">

      <NavBar/>
      
                  <Box
                     sx={{
                  
                   width: 350,
                   height: 300,
                   border :'solid',
                   borderWidth:10,
                   backgroundColor: 'primary.dark',
                    '&:hover': {
                    backgroundColor: 'success.main',
                    opacity: [0.9, 0.8, 0.7],
                     },
                              }} >
                          <h1> Test</h1>
                </Box>

      </div>
  )
}