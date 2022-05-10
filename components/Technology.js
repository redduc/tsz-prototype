import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Technology.module.css'

export default function Technology() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <p className="red">&gt; Technik</p>
            <h1>Dank neuster Technik nie ungewünscht a cappella.</h1>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
        <Row>
          <Col xs={0} xxl={1}></Col>
          <Col xs={12} xxl={10}>
            <p>Wir investieren laufend in hochwertiges Equipment. Damit sorgen wir für einfache und schnelle Arbeitsabläufe und unterstützen den kreativen Prozess.</p>
            <p>&nbsp;</p>
            <Row>
              <Col xs={12} md={6}>
                <ul>
                  <li>Pro Tools und digitale Grossmischkonsolen - MC5 / S6.</li>
                  <li>Dolby zertifiziertes Kinoatelier</li>
                  <li>Taker für Synchronaufnahmen.</li>
                </ul>
              </Col>
              <Col xs={12} md={6}>
                <ul>
                  <li>Sprachaufnahmen via IP. Mayah SIP, Source Connect und SessionLinkPro.</li>
                  <li>Kunden Dial-In via Telefon, Skype, oder Videokonferenz.</li>
                  <li>Audiorestauration mit Cedar, Cube-Tec u.a.</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={0} xxl={1}></Col>
        </Row>
      </Container>
    </div>
  )
}