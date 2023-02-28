import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CenterPane/CenterPane.css";


function Card1(props) {


  return (
    <div id="small2">
      <h1 style={{alignContent:"center"}}>Welcome {props.name} ! </h1>
      <Card bg="primary" text="white" style={{ width: "100rem" ,fontSize:"16px" }}>
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          <Card.Title>User Details </Card.Title>
          <Card.Text>
            <ul>
              <li>{props.email}</li>
              <li>{props.phone}</li>
              <li>{props.address}</li>
              
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      
</div>
  )
};

export default Card1;


    /*<div id="small2">
      <h1>List Group</h1>
      <Card style={{ width: "18rem" }}>
      <Card.Header>Featured</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}

export default Card1;*/


