import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/ProductionList.module.css'

const productions = [
  { id: 1, text: 'Werbung', image: 'werbung01.jpg', url: './Werbung' },
  { id: 2, text: 'TV-Sendungen', image: 'tvsendungen01.jpg', url: '' },
  { id: 3, text: 'Film', image: 'spielfilm01.jpg', url: '' },
  { id: 4, text: 'ADR', image: 'diverses01.jpg', url: '' },
  { id: 5, text: 'Telefonie / Ansage', image: 'telefonie01.jpg', url: '' },
  { id: 6, text: 'Corporates', image: 'corporate01.jpg', url: '' },
  { id: 7, text: 'Musik', image: 'musik01.jpg', url: '' },
  { id: 8, text: 'Sounddesign', image: 'sounddesign01.jpg', url: '' },
  { id: 9, text: 'Restaurationen', image: 'audiorestauration01.jpg', url: '' },
]

function Production({ production }) {
  return (
    <Col lg={4} className={styles.advertisementColumn}>
      <a href={(production.url.length > 0 ? production.url : "#")}>
        <div className={styles.advertisementWrapper}>
          <div className={styles.advertisement}>
            <img src={'productions/' + production.image} className="img-fluid" />
            <div className={styles.textWrapper}>
              <p className={styles.name}>{production.text}</p>
            </div>
          </div>
        </div>
      </a>
    </Col>
  )
}

export default function ProductionList() {
  return (
    <>
      <Container fluid className={styles.advertisementsContainer}>
        <Row className={styles.advertisements + " gx-0"}>
          {productions.slice(0, 3).map(e =>
            <Production key={e.id} production={e} />
          )}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <div className={styles.commonText}>
              <h1>Full Service</h1>
              <p>Als Full Service-Unternehmen bieten wir sämtliche Leistungen rund um Audioproduktion.</p>
            </div>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
      </Container>
      <Container fluid className={styles.advertisementsContainer}>
        <Row className={styles.advertisements + " gx-0"}>
          {productions.slice(3).map(e =>
            <Production key={e.id} production={e} />
          )}
        </Row>
      </Container>
    </>
  )
}
