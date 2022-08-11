import React from 'react'
import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

export default function Navbars() {
  return (
    <div>
    <Navbar className='h-100' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <div className='container'>
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey={"/"} onSelect={(selectedkey) => selectedkey} className="mr-auto">
          <Nav.Link href="Talkshow">Features</Nav.Link>
          <Nav.Link href="/Workshop">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
        </div>
    </Navbar>
          </div>
  )
}
