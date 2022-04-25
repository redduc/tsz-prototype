import Head from 'next/head'
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import {useEffect, useState} from "react";
import Services from "../components/Services";
import TSZNavigation from '../components/Navigation';

export default function Home() {
  const titleWords = ["Spielfilme", "Dokfilme", "Werbung", "Events"]
  const [titleWord, setTitleWord] = useState(titleWords[0])

  useEffect(() => {
    let timerId;
      console.log("useEffect init")
      timerId = setInterval(() => {
        setTitleWord((tw) => {
          let lastTitleIdx = titleWords.indexOf(tw)
          lastTitleIdx = (lastTitleIdx+1) % titleWords.length
          return titleWords[lastTitleIdx]
        })
      },5000)
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <div className={styles.mainrowwrapper}>
        <video id="background-video" autoPlay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
        </video>
        <TSZNavigation />
        <Container>
          <Row>
            <Col className={styles.mainTitleWrapper}>
              <p className={styles.mainTitle}>Grosse Töne</p>
              <p className={styles.mainTitle}>für <span>{titleWord}</span></p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={7}>
            </Col>
            <Col xs={6} md={3}>
              <img src="soundmeter.png" style={{height:120}} className="soundwave" />
            </Col>
          </Row>
        </Container>
        <div className={styles.myFooter}>
          <Container>
            <Row style={{padding: 20}}>
              <Col align="center"><img src="clientlogos/logo-kaegi.png" style={{height: 30}} /></Col>
              <Col align="center"><img src="clientlogos/logo-cailler.png" style={{height: 40}} /></Col>
              <Col align="center"><img src="clientlogos/logo-arte.png" style={{height: 25}} /></Col>
              <Col align="center"><img src="clientlogos/logo-fifa.png" style={{height: 30}} /></Col>
              <Col align="center"><img src="clientlogos/logo-diepost.png" style={{height: 45}} /></Col>
              <Col align="center"><img src="clientlogos/logo-opel.png" style={{height: 40}} /></Col>
              <Col xs={12} align="center">
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="16" height="16" fill="#ee2222"
                     className="bi bi-chevron-compact-down"
                     viewBox="0 0 16 16"
                     style={{width: 600}}>
                  <path fillRule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Services />
    </>
  )
}
