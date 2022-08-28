import React from 'react'
import '../LandingComponents/index.css'
import {
    Col,
   } from 'react-bootstrap';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
   

export default function SocialIconst() {
  return (
    <Col xl={12} className="social-icons">
    {/* &nbsp; &nbsp; &nbsp; &nbsp; */}
    <a href="https://fb.com/okrittim" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="fb" icon={faFacebook} />
    </a>
    <a href="https://youtube.com/motasimfoad" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="git" icon={faYoutube} />
    </a>
    <a data-toggle='tooltip-bottom' title='instagram' href="https://www.instagram.com/motasimfoad/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon className="insta" icon={faInstagram} />
    </a>
   </Col>   
  )
}
