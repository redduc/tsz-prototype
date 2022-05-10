import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Technology.module.css'

const activeStudio = 1;
const studios = [
  {
    id: 1,
    title: 'Studio 1',
    text: 'Crescendo für klangstarke Präsentationen mit der Dolby lizenzierten Produktions-Suite',
    image: 'Studio1.jpg'
  },
  {
    id: 2,
    title: 'Studio 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'Studio2.jpg'
  },
  {
    id: 3,
    title: 'Studio 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: 'Studio3.jpg'
  },
]

function Studio({studio, studios}) {
  let wrapperClass = (studio.id === activeStudio  ? [styles.studio, styles.active].join(' ') : styles.studio)

  return (
    <div className={wrapperClass}>
      <div className={styles.image}>
        <img src={'studios/'  + studio.image} className="img-fluid" />
        <div className={styles.studioSelect}>
          { studios.map(s =>            
            <a href="javascript:void(0);" className={(s.id === studio.id ? styles.active : '')} key={s.id}>{s.title}</a>            
          )}
        </div>
      </div>
      <p>{studio.text}</p>
    </div>
  )
}

export default function Technology() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
        <Container>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
              <p className="red">&gt; Technik</p>
              <h1>Dank neuster Technik nie ungewünscht a cappella.</h1>
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
          <Row>
            <Col xs={0} md={2}></Col>
            <Col xs={12} md={8}>
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
              {/* <div className={styles.studios}>
                { studios.map(s =>
                  <Studio key={s.id} studio={s} studios={studios} />
                )}
              </div> */}
            </Col>
            <Col xs={0} md={2}></Col>
          </Row>
        </Container>
    </div>
  )
}