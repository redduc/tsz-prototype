import Head from 'next/head'
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import TSZNavigation from "../components/Navigation";

export default function Team() {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <TSZNavigation />
      <Container>
        <Row>
          <Col xs={7}>
            Team
          </Col>
        </Row>
      </Container>
    </>
  )
}
