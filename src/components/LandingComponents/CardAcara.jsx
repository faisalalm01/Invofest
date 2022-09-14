import React from "react";
import { Card, Row, Button, Container } from "react-bootstrap";
import '../LandingComponents/index.css'

export default function CardAcara() {
  return (
    <div>
      <Container className="text-center">
        <h3 style={{color:"white"}}>Susunan Acara</h3>
        <Row className="text-center pt-5">
        <div className="col-md-3 col-sm-6  mb-2">
        <Button href="/Talkshow" className="border shadow-lg bg-dark mb-3"
        style={{height:'100%', width:"100%"}}>
            <Card.Body >
            <img src="./Assets/icons/microphone.png" alt="talkshow" className="icons-acara" />
              <Card.Title className="gold-text">TALKSHOW</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
          <div className="col-md-3 col-sm-6 mb-2" >
            <Button href="/Seminar" className="border shadow-lg bg-dark" style={{height:'100%', width:"100%"}}>
            <Card.Body >
            <img src="./Assets/icons/presentation.png" alt="seminar" className="icons-acara" />
            <Card.Title className="gold-text">SEMINAR</Card.Title>
              <Card.Text>
              Seminar nasional dengan tema Artificial Intelegence dalam Transformasi Teknologi Industri Masa Depan
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
            <Button href="/Competition" className="border shadow-lg bg-dark mb-3" style={{height:'100%', width:"100%"}}>
            <Card.Body >
            <img src="./Assets/icons/trophy.png" alt="it competition" className="icons-acara" />
              <Card.Title className="gold-text">IT COMPETITION</Card.Title>
              <Card.Text>
               E-Sport, Web Design,
              </Card.Text>
            </Card.Body>
            </Button>
          </div>
          <div className="col-md-3 col-sm-6 mb-2">
           <Button href="/Workshop" className="border shadow-lg bg-dark" style={{height:'100%', width:"100%"}}>
            <Card.Body >
            <img src="./Assets/icons/student.png" alt="workshop" className="icons-acara" />
              <Card.Title className="gold-text">WORKSHOP</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
            </Card.Body>
            </Button> 
          </div>
          
        </Row>
      </Container>
    </div>
  );
}
