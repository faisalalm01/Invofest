import React from "react";
import { Card, Row, Button, Container } from "react-bootstrap";

export default function CardAcara() {
  return (
    <div>
      <Container>
        <Row className="text-center">
        <div className="col-md-3 col-sm-6">
            <Card.Body className="border">
              <Card.Title>TALKSHOW</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button href="#">Go somewhere</Button>
            </Card.Body>
          </div>
          <div className="col-md-3 col-sm-6">
            <Card.Body className="border">
              <Card.Title>SEMINAR</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button href="#">Go somewhere</Button>
            </Card.Body>
          </div>
          <div className="col-md-3 col-sm-6">
            <Card.Body className="border">
              <Card.Title>IT COMPETITION</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button href="#">Go somewhere</Button>
            </Card.Body>
          </div>
          <div className="col-md-3 col-sm-6">
            <Card.Body className="border">
              <Card.Title>WORKSHOP</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button href="#">Go somewhere</Button>
            </Card.Body>
          </div>
          
        </Row>
      </Container>
    </div>
  );
}
