import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap'
import Cards from '../../components/com/Cards';
import Particle from '../../components/LandingComponents/Particle';
import SocialIconst from '../../components/LandingComponents/SocialIconst';
import Navbars from '../../components/Navbars';
import CardBaner from '../../components/LandingComponents/CardsBanner'


class Competition extends Component {
    render() {
        return (
            <div>
                <Navbars />
                <Particle />
                <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={12}  className="App-center mt-5">
                <CardBaner/>
              </Col>
                <SocialIconst/>
            </Row>
        </Container>
                <Cards/>
                </div>
        );
    }

}

export default Competition;
