import {Container, Nav, Navbar} from "react-bootstrap";
import styles from "../styles/Home.module.css";
import React from "react";


export default function TSZNavigation() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/" > { /*onClick={() => setTitleWord("Events")}>*/ }
          <img src="tszlogo.png" className={styles.tszLogo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/Projects">PROJEKTE</Nav.Link>
            <Nav.Link href="/Studios">STUDIOS</Nav.Link>
            <Nav.Link href="/Team">TEAM</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
