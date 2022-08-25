import React from 'react'
import Banner from '../../components/Banner'
import Desseminar from '../../components/Desseminar'

import Footer from '../../components/Footer'
import Navbars from '../../components/Navbars'

export default function Seminar() {
  return (
      <div>
          <Navbars />
          <Banner />
          <Desseminar /> 
          <Footer />
    </div>
  )
}
