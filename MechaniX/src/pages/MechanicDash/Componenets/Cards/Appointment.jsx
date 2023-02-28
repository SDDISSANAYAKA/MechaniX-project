import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CenterPane/CenterPane.css";

function Appointment() {
  return (
    <div id="small2">
      <h1 style={{textAlign:"left" ,paddingLeft:"30px"}}> Appointment </h1>
      <br/>
      <Card bg="primary" text="white" style={{ width: "28rem" , height:"20rem" ,margin:"2rem", textAlign:"left" , padding:"1rem" }}>
        <Card.Header  style={{textAlign:"center"}} >Upcoming Appointments</Card.Header>
        <Card.Body style={{}}>
          <Card.Title> Loding Bay 01 </Card.Title>
          <Card.Text>
            
            Vehicle Number:
            <br/>
            Appointment type: 
            <br/>
            Owner name: 
            <br/>
            Date
            <br/>
            Time
            <br/>

          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      {/* <Card bg="secondary" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Secondary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="success" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Success Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="danger" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Danger Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="warning" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Warning Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="info" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Info Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="dark" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Dark Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />

      <Card bg="light" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Light Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />*/}
      
    </div> 
  );
}

export default Appointment;
