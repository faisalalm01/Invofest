import React from 'react'
import {
    Container,
    Row,
    Col,
   } from 'react-bootstrap';
   import ReactTypingEffect from 'react-typing-effect';
   import '../LandingComponents/index.css'

export default function CardsAcara() {
  return (
    <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
        <img src="favicon.png" className='logo-lp my-3' alt="" />
         <h1 className="first-line">
            INVOFEST 2022
         </h1>
         <h3>
         <ReactTypingEffect
           text="Peran Aktif Generasi Muda Di Era Society 5.0 Melalui Pendidikan Vokasi" //text=["Hello.", "World!"]
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
         </Col>
     </Row>
   </Container>
  )
}
