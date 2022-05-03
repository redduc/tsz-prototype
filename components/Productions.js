import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Productions.module.css'

const productions = [
  {
    id: 1,
    title: 'Opel Corsa-e',
    agency: 'FCB Zürich',
    ourJob: 'Cast, Sprachaufnahmen in Deutsch, Französisch und Italienisch und Tonmischung.',
    image: 'OpelCorsaE.jpg',
  },
  {
    id: 2,
    title: 'Swisscom "Gemeinsam bereit"',
    ourJob: '!!!Film: Stories AG Regie: Michael Fueter Tonproduktion: Tonstudios Z',
    image: 'SwisscomGemeinsamBereit.jpg',
  },
]



function Production({ production }) {
  return (
    <>
      <div class="carousel-item active">
        <div className={styles.card}>
          <div>
            <img src={'productions/' + production.image}/>
          </div>
          <h2>{production.title}</h2>
          <p>
            {production.agency != null && <span className={styles.agencyCaption}>Agentur: </span>}
            {production.agency != null && <span>{production.agency}</span>}
            
            {production.ourJob != null && <span className={styles.ourJobCaption}>Tonstudios Z: </span>}
            {production.ourJob != null && <span>{production.ourJob}</span>}
          </p>
        </div>
      </div>
    </>
  )
}

export default function Productions() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <p className="red">&gt; Produktionen</p>
            <h1>Und so klingt das.</h1>
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
        <Row>
          <Col xs={0} md={2}></Col>
          <Col xs={12} md={8}>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">                
                {productions.map(production =>
                  <Production key={production.id} production={production} />
                )}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
    </div>
  )
}

