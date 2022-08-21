import React from 'react'
import Navbars from '../components/Navbars'
import Particle from '../components/Particle'
// import Cards from "../components/Cards"
import Animate from 'react-smooth/lib/Animate'
// import { Row, Container, Col } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div>
      <Navbars/>
      <Particle/>
      <Animate to="1" from="0" attributeName="opacity">
      </Animate>
        <h1>TEST</h1>
      <div>
      </div>
    </div>
  )
}

export default LandingPage;