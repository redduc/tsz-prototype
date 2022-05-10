import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Studios.module.css'

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

export default function Studios() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <p className="red">&gt; Studios</p>
            <h1>Hier spielt die Musik.</h1>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
        <Row>
          <Col xs={0} xxl={1}></Col>
          <Col xs={12} xxl={10}>
            <p>Seit über 30 Jahren geben wir für nationale und internationale Auftraggeber den Ton an.</p>
            <p>Als Full-Service-Unternehmen bieten wir sämtliche Leistungen rund um Audioproduktionen an und treffen mit unserer Erfahrung stets den richtigen Ton.</p>
            <p>Ob Werbung, TV, Film, Web, Sounddesign, Musikkomposition, Sprachadaption oder nationale sowie internationale Sprechervermittlung - bei uns können Sie alle Register ziehen.</p>
            <p>Wir bieten Ihnen akustisch perfekt ausgebaute Aufnahme- und Regieräume an verkehrsgünstiger Lage in Zürich Nord.</p>
            <div className={styles.studios}>
              { studios.map(s =>
                <Studio key={s.id} studio={s} studios={studios} />
              )}
            </div>
          </Col>
          <Col xs={0} xxl={1}></Col>
        </Row>
      </Container>
    </div>
  )
}