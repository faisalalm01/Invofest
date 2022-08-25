import React from 'react'
import '../LandingPage/index.css'
import Animate from 'react-smooth/lib/Animate'
// import Banner from '../../components/Banner'
import Navbars from '../../components/Navbars'
import {Row, Container, Col} from 'react-bootstrap'
import Particle from '../../components/LandingComponents/Particle'
import CardBaner from '../../components/LandingComponents/CardsBanner'
import SocialIconst from '../../components/LandingComponents/SocialIconst'
import Peta from '../../components/LandingComponents/Peta'

export default function LandingPage() {
  return (
    <div>
        {/* header */}
        <Animate to="1" from="0" attributeName="opacity">
        <Particle/>
        <Navbars/>
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-center mt-5">
                <CardBaner/>
              </Col>
                <SocialIconst/>
            </Row>
        </Container>
        </Animate>
        {/* end header */}
        <div className='bg-primary p-5'>
           <CardBaner className="container"/>
        </div>
        <Container>
          <Row className="my-5">
            <Col xl={6} className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eaque, possimus magni exercitationem a, corporis tenetur voluptatem quae porro commodi voluptatibus. Eius odit aperiam ab corrupti quam unde quibusdam. Voluptatibus.
            </Col>
            <Col xl={6}>
            <Peta/>
            </Col>
          </Row>
        </Container>
        
    </div>
  )
}
