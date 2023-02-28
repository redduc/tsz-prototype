import Head from 'next/head'
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import TSZNavigation from "../components/Navigation";
import TeamIntro from "../components/TeamIntro";
import TeamMember from "../components/TeamMember";
import StudioAbout from "../components/StudioAbout";

export default function Studios() {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      {/* <TSZNavigation /> */}
      <TeamIntro />
      <TeamMember />
      <StudioAbout />
    </>
  )
}
