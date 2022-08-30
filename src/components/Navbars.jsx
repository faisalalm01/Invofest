import React from 'react'
// import {Navbar, NavDropdown, Nav} from 'react-bootstrap'

export default function Navbars() {
  return (
    <div>
      <nav  class="navbar navbar-expand-lg navbar-light fixed-top" onScroll={'bg-dark'}>
        <div class="container">
            {/* <a href="/" class="navbar-brand">Web Zone</a>
            <button type="button" class="navbar-toggler" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
                    
            <div class="collapse navbar-collapse" id="navbarNav">
                <div class="mx-auto">
                    
                <ul class="navbar-nav">
                    <li class="nav-item mx-4">
                        <a href="/" class="nav-link text-white">Home</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a href="/Talkshow" class="nav-link text-white">Talkshow</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a href="/" class="nav-link text-white">Seminar</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a href="/" class="nav-link text-white">IT Competition</a>
                    </li>
                    <li class="nav-item mx-4">
                        <a href="/" class="nav-link text-white">Workshop</a>
                    </li>
                </ul>

                </div>
            </div>
        </div>
    </nav>
          </div>
  )
}
