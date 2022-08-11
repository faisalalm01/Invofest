import React from 'react'
import Particles from 'react-tsparticles'
import particles from '../components/Particles'
import Navbars from '../components/Navbars'

export default function LandingPage() {
  return (
    <div>
        <Navbars/>
        <Particles
        params={particles}
        className="particles"
        />
    </div>
  )
}
