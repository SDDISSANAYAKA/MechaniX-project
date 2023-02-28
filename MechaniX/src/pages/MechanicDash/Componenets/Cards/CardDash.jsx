import React from "react";
//import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CenterPane/CenterPane.css";
import { CardHeader } from "@mui/material";
import { alignPropType } from "react-bootstrap/esm/types";

function CardDash(props) {
  return (
    <div id="small2">
      <h1> On Going jobs </h1>
      <Card className="card2">
        <Card.Body>
          <Card.Title >  </Card.Title>
          <Card.Text style={{textAlign:"left" , backgroundColor:"lightblue" , padding:"5rem", fontSize:"16px"}} >

            Mechanical history : 
            <br/>
            Vehicle Number: {props.VehicleModel}
            <br/>
            Vehicle Owner: {props.fueltype}
            <br/>
            Repair Date:
            <br/>
            Repair Details:
            <br/>
            Used parts:
            <br/>
            Loading Bay: 

          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardDash;