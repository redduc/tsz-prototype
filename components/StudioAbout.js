import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/StudioAbout.module.css'


export default function StudioAbout() {
  return (
    <>
      <Container fluid={true} className={styles.studioIntroText}>
        <Row>
          <Col xs={12} md={6} className="order-md-2">
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
                  <h1>Studios</h1>
                </Col>
                <Col xs={12}>
                  <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste
                    Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher
                    Qualität und einer erstklassigen Dienstleistungspalette.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} md={6} className={"order-md-1 " +styles.imgColBg} style={{backgroundImage: "url('about/studios-intro.jpg')"}}>
            <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
      <div className={styles.studios + ' ' + styles.studioa} style={{backgroundImage: "url('about/studioa.jpg')"}}>
        <div className={styles.text}>
          <h2>STUDIO A - CINEMA</h2>
          <p>
            Unsere Studios liegen in Zürich an verkehrsgünstiger Lage - nähe Zentrum, Bahnhof und Flughafen. Mit akustisch perfekt ausgebauten Aufnahme- und Regieräumen.
          </p>
          <p>
            Die Dolby Lizensierte Produktions-Suite für Spielfilme bietet Platz für bombastische Präsentationen. Das grosse Aufnahmestudio ist für die Simulation von Aussenaufnahmen und für Synchronproduktionen konzipiert.
          </p>
        </div>
        <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
      </div>
      <div className={styles.studios + ' ' + styles.studioentrance} style={{backgroundImage: "url('about/studioentrance.jpg')"}}>
        <div className={styles.text}>
          <h2>3 Generationen</h2>
          <p>
            Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.
          </p>
        </div>
        <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
      </div>
    </>
  )
}
