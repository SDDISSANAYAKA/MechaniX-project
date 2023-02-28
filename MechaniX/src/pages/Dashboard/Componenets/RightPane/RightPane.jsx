import React from "react";
import "./RightPane.css";
import Box from "@mui/material/Box";
import ChatbotApp from "../Chatbot/Chatbot";
import NavBar from "../NavBar/NavBar";

export default function RightPane(props) {
  return (
    <div className="RightPaneBox">
      <NavBar />
      <button className="sa">
        saadadsadsad <br />
        dsda
      </button>
      <Box
        onClick={() => {
          props.onClickShow()
        }}
        sx={{
          width: 350,
          height: 300,
          border: "solid",
          borderWidth: 3,
          backgroundColor: "cyan",
          "&:hover": {
            backgroundColor: "success.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        <h1
          style={{ padding: "4rem", fontSize: "35px" }}
        >
          {" "}
          Click here to Make an Appointment with MechanicX{" "}
        </h1>
      </Box>

      <Box>
        <ChatbotApp />
      </Box>
    </div>
  );
}
