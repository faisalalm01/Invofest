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
import CardAcara from '../../components/LandingComponents/CardAcara'

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
        <div className='bg-lg my-5'>
           <CardAcara />
        <Container>
          <Row className="my-5">
            <Col xl={6} className="text">
            Jl. Mataram No.9, Kel. pesurungan lor, Kel. Pesurungan Lor, Pesurungan Lor, Margadana, Kota Tegal, Jawa Tengah 52147
            </Col>
            <Col xl={6}>
            <Peta/>
            </Col>
          </Row>
        </Container>
        </div>
        
    </div>
  )
}
