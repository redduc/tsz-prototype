import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/StudioAbout.module.css'


export default function StudioAbout() {
  return (
    <>
      <div className={styles.studioa} style={{backgroundImage: "url('about/studioa.jpg')"}}>
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
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <div className={styles.commonText}>
              <h1>Studios</h1>
              <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.</p>
            </div>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
      </Container>
      <Container fluid className={styles.studiosContainer}>
        <Row className={styles.studios + " gx-0"}>
          <Col lg={6} className={styles.studioColumn}>
            <div className={styles.studioWrapper}>
              <div className={styles.studio}>
                <img src={'studios/Studio3.jpg'} className="img-fluid" />
                <div className={styles.text}>                  
                    <h2>Stuido 3</h2>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className={styles.studioColumn}>
            <div className={styles.studioWrapper}>
              <div className={styles.studio}>
                <img src={'about/studioentrance.jpg'} className="img-fluid" />
                <div className={styles.text}>
                    <h2>Eingang</h2>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


      {/* <div className={styles.studios + ' ' + styles.studioentrance} style={{backgroundImage: "url('about/studioentrance.jpg')"}}>
        <div className={styles.text}>
          <h2>3 Generationen</h2>
          <p>
            Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.
          </p>
        </div>
        <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
      </div> */}
    </>
  )
}
