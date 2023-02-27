import React from "react";
//import { render } from "react-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CenterPane/CenterPane.css";
import { CardHeader } from "@mui/material";

function Card2() {
  return (
    <div id="small2">
      <h1>Vehicle Process</h1>
      <Card>
        <Card.Body>
          <Card.Title >Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card2;
