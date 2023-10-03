import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {reveal} from '/components/utils';


export default function TSZNavigation({addReveal}) {
  useEffect(() => {
    if(addReveal === true) {
      window.addEventListener("scroll", () => reveal("reveal", "active", 100));
    }
  }, [])
  const cssClass = (addReveal === true ? "reveal" : "")

  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className={cssClass}>
      <Container fluid>
        <Navbar.Brand href="/" >
          {/* <img src="tszlogo.png" className='tszLogo'/> */}
          <img src="logo.jpg" className='tszLogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="./#servicearea">Service</Nav.Link>
            <Nav.Link href="./AboutUs">About</Nav.Link>
            <Nav.Link href="./Studios">Studios</Nav.Link>
            <Nav.Link href="./Werbung">Werbung</Nav.Link>
            {/* <Nav.Link href="./Work">Work (alt)</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
