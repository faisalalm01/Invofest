// import React from 'react'
// import '../components/indexScope.css'
// // import {Navbar, Nav,} from 'react-bootstrap'

// export default function Navbars() {
//   return (
//     <div>
// <Navbar scrolling dark expand="md" fixed="top" >
//   <Navbar.Brand href="#"></Navbar.Brand>
//   <Navbar.Toggle aria-controls="navbarScroll" />
//   <Navbar.Collapse id="navbarScroll">
//     <Nav
//       className="mx-auto my-2 my-lg-3"
//       style={{ maxHeight: '100px' }}
//       navbarScroll
//     >
//       <Nav.Link href="/">Home</Nav.Link>
//       <Nav.Link href="/Talkshow">Talkshow</Nav.Link>
//       <Nav.Link href="#action2">Seminar</Nav.Link>
//       <Nav.Link href="#action2">IT Competition</Nav.Link>
//       <Nav.Link href="#action2">Workshop</Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
//           </div>
//   )
// }

import React, { useState, Fragment } from 'react'
import { FaBars } from 'react-icons/fa';
import {
  Nav,
  NavContainer, 
  // NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './NavbarStyles';
import '../components/indexScope.css'

const Navbars = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Fragment>
    <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
       <NavContainer>
          <MobileIcon>
           <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks href="#">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Sign In</NavLinks>
            </NavItem>
          </NavMenu>
       </NavContainer>
    </Nav>
  </Fragment>
  )
}

export default Navbars