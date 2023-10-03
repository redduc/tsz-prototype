import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/WerbungNew.module.css'
import { FaPlayCircle } from "react-icons/fa";

const werbungen = [
  { id: 1, text: 'Appenzeller Werbekampagne', image: 'werbung1.jpg' },
  { id: 2, text: 'Swisscom "Gemeinsam bereit"', image: 'werbung2.jpg' },
  { id: 3, text: 'SWISSCOM "BLUE"', image: 'werbung3.jpg' },
  { id: 4, text: 'Opel Grandland X', image: 'werbung4.jpg' },
  { id: 5, text: 'Opel Corsa-e', image: 'werbung5.jpg' },
  { id: 6, text: 'Zurich Hockey WM', image: 'werbung6.jpg' },
  { id: 7, text: 'Rush Hour - TV-Spot', image: 'werbung7.jpg' },
  { id: 8, text: 'Carlit & Ravensburger', image: 'werbung8.jpg' },
  { id: 9, text: 'SUVA Gold-Edi', image: 'werbung9.jpg' },
]

function Werbung({werbung}) {
  return (
    <Col lg={4} className={styles.advertisementColumn}>
      <div className={styles.advertisementWrapper}>
        <div className={styles.advertisement}>
          <img src={'werbung/' + werbung.image} className="img-fluid" />
          <div className={styles.textWrapper}>
              <p className={styles.name}>{werbung.text}</p>
          </div>
          <div className={styles.vlinkWrapper}>
            <a href="#"><FaPlayCircle /> Play (de)</a>
            <a href="#"><FaPlayCircle /> Play (fr)</a>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default function StudioAbout() {
  return (
    <>
      <Container fluid className={styles.advertisementsContainer}>
        <Row className={styles.advertisements + " gx-0"}>
          <Col lg={12} className={styles.advertisementColumn}>
            <div className={styles.advertisementWrapper + ' ' + styles.bigAdvertWrapper}>
              <div className={styles.advertisement}>
                <img src={'werbung/werbung12.jpg'} className="img-fluid" />
                <div className={styles.textWrapper}>
                    <p className={styles.name}>Ricola</p>
                </div>
                <div className={styles.vlinkWrapper}>
                  <a href="#"><FaPlayCircle /> Play (de)</a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <div className={styles.commonText}>
              <h1>Werbung</h1>
              <p>Wir lassen Ihre Zielgruppe aufhorchen</p>
              <p>Ob für TV oder Kino, für Radio, Web oder Social Media – wir produzieren auffallenden Sound für Ihren Werbespot in allen möglichen Tonformaten.</p>
              <p><a href="#">Weitere Services</a></p>
            </div>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
      </Container>
      <Container fluid className={styles.advertisementsContainer}>
        <Row className={styles.advertisements + " gx-0"}>
            { werbungen.map(e =>
              <Werbung key={e.id} werbung={e} />
            )}
        </Row>
      </Container>
    </>
  )
}
