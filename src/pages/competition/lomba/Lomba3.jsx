import React from 'react'
import Navbars from '../../../components/Navbars'
import { Row, Container, Col } from 'react-bootstrap'
import CardBaner from '../../../components/LandingComponents/CardsBanner'
import SocialIconst from '../../../components/LandingComponents/SocialIconst'
import Deslomba2 from '../../../components/com/Deslomba3'
import CardJuara3 from '../../../components/com/CardJuara3'
import Reg3 from '../../../components/com/Reg3'
import Footer from '../../../components/Footer'

export default function Lomba3() {
  return (
      <div>
          <Navbars />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-center mt-5">
                <CardBaner/>
              </Col>
                <SocialIconst/>
            </Row>
        </Container>
          <Deslomba2 />
          <CardJuara3 />
          <Reg3 />
          <Footer/>
          
          
    </div>
  )
}
