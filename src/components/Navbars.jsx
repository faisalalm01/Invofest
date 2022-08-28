import React from 'react'
import '../components/indexScope.css'
import {Navbar, Nav,} from 'react-bootstrap'

export default function Navbars() {
  return (
    <div>
<Navbar expand="lg" fixed='top' >
  <Navbar.Brand href="#"></Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mx-auto my-2 my-lg-3"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/Talkshow">Talkshow</Nav.Link>
      <Nav.Link href="#action2">Seminar</Nav.Link>
      <Nav.Link href="#action2">IT Competition</Nav.Link>
      <Nav.Link href="#action2">Workshop</Nav.Link>
      {/* <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
          </div>
  )
}
