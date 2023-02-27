import React from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Card, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CenterPane/CenterPane.css";


function Card1() {
  return (
    <div id="small2">
      <h1>Admin Page</h1>
      <Card bg="primary" text="white" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
    
    


<Card bg="success" text="white" style={{ width: "18rem" }}>
<Card.Header>jjjjj</Card.Header>
<Card.Body>
  <Card.Title>Secondary Card Title</Card.Title>
  <Card.Text>
    Some quick example text to build on the card title and make up the
    bulk of the card's content.
  </Card.Text>
</Card.Body>
</Card>
<br />
<br/>
<hr/>
<br/>
<br/>



<Card bg="secondary" text="white" style={{ width: "18rem" }}>
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


