import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";


export default function TSZNavigation() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" > { /*onClick={() => setTitleWord("Events")}>*/ }
          {/* <img src="tszlogo.png" className='tszLogo'/> */}
          <img src="logo.jpg" className='tszLogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./#servicearea">Service</Nav.Link>
            <Nav.Link href="./Studios">About</Nav.Link>
            <Nav.Link href="./Work">Work</Nav.Link>
            <Nav.Link href="./Menu">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
