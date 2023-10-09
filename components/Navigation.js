import React, {useEffect, useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {showNavOnScroll} from '/components/utils';
import { useRouter } from 'next/router';

export default function TSZNavigation({addReveal}) {
  const [appPath, setAppPath] = useState("")
  useEffect(() => {
    if(addReveal === true) {
      window.addEventListener("scroll", () => showNavOnScroll());
    }

    //const { asPath } = useRouter();
    const origin =
        typeof window !== 'undefined' && window.location.origin
            ? window.location.origin
            : '';
    console.log("origin:", origin)
    if (origin && origin.includes("redduc")) {
      console.log(1)
      setAppPath(origin+"/tsz-prototype")
    } else if (origin && !origin.includes("undefined")) {
      console.log(2)
      setAppPath(origin)
    } else {
      console.log(3)
      setAppPath("")
    }
  }, [])
  const cssClass = (addReveal === true ? "navhide" : "")
  return (
    <Navbar expand="lg" bg="white" variant="light" fixed="top" className={cssClass}>
      <Container fluid>
        <Navbar.Brand href={appPath}>
          <img src="logo.jpg" className='tszLogo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href={appPath + "/home2"}>HOME2</Nav.Link>
            <Nav.Link href={appPath + "/#servicearea"}>SERVICE</Nav.Link>
            <Nav.Link href={appPath + "/AboutUs"}>ABOUT</Nav.Link>
            <Nav.Link href={appPath + "/Studios"}>STUDIOS</Nav.Link>
            <Nav.Link href={appPath + "/Werbung"}>WERBUNG</Nav.Link>
            <Nav.Link href={appPath + "/Productions"}>Work (alt)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
