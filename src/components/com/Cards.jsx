import React from "react";
import { Card, Row, Button, Container } from "react-bootstrap";


export default function Cards() {
  return (
    <div className="mt-5">
      <Container className="text-center">
      <h1 className="mt-5 text-center">IT Competition Invofest 2022</h1>
        <Row className="text-center pt-5">
        <div className="col-md-3 col-sm-6">
        <Button href="/Lomba1" className="border shadow-lg bg-dark mb-3"
        style={{height:'100%', width:"100%"}}>
            <Card.Body >
              <Card.Title className="gold-text">LOMBA 1</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
        <div className="col-md-3 col-sm-6">
        <Button href="/Competition/lomba/Lomba2" className="border shadow-lg bg-dark mb-3"
        style={{height:'100%', width:"100%"}}>
            <Card.Body >
              <Card.Title className="gold-text">LOMBA 2</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
        <div className="col-md-3 col-sm-6">
        <Button href="/Lomba3" className="border shadow-lg bg-dark mb-3"
        style={{height:'100%', width:"100%"}}>
            <Card.Body >
              <Card.Title className="gold-text">LOMBA 3</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
        <div className="col-md-3 col-sm-6">
        <Button href="/Lomba4" className="border shadow-lg bg-dark mb-3"
        style={{height:'100%', width:"100%"}}>
            <Card.Body >
              <Card.Title className="gold-text">LOMBA 4</Card.Title>
              <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}
