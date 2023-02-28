import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/TeamIntro.module.css'

export default function TeamIntro() {
  return (
    <>
      <Container fluid={true}>
        <Row className={styles.redbg}>        
          <Col xs={12} md={6}>
            <div className={styles.textWrapper}>
              <Row className={styles.menuItems}>
                <Col xs={3} md={6} lg={3}>
                  Service
                </Col>
                <Col xs={3} md={6} lg={3}>
                  About
                </Col>
                <Col xs={3} md={6} lg={3}>
                  Project
                </Col>
                <Col xs={3} md={6} lg={3}>
                  Contact
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h1>Team</h1>
                </Col>
                <Col xs={12}>
                  <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} className={styles.imgColBg} style={{backgroundImage: "url('about/teamintro.jpg')"}}>
            <img src="tszlogo.png" className={styles.logo + ' ' + styles.right} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className={styles.whitebg}>        
          <Col xs={12} md={6}>
            <div className={styles.textWrapper}>
              <Row className={styles.menuItems}>
                <Col xs={3} md={6} lg={3}>
                  Service
                </Col>
                <Col xs={3} md={6} lg={3}>
                  About
                </Col>
                <Col xs={3} md={6} lg={3}>
                  Project
                </Col>
                <Col xs={3} md={6} lg={3}>
                  Contact
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h1>Team</h1>
                </Col>
                <Col xs={12}>
                  <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} className={styles.imgColBg} style={{backgroundImage: "url('about/teamintro.jpg')"}}>
            <img src="tszlogo.png" className={styles.logo + ' ' + styles.right} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
