import React from "react";
import { Carousel, Col, Container, Row } from 'react-bootstrap'
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
    title: 'Swisscom \"Gemeinsam bereit\"',
    ourJob: '!!!Film: Stories AG Regie: Michael Fueter Tonproduktion: Tonstudios Z',
    image: 'SwisscomGemeinsamBereit.jpg',
  },
]

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
            <Carousel>
              {productions.map(p =>

                  <Carousel.Item key={p.id} interval={10000}>
                    <div className={styles.card}>
                      <img src={'productions/' + p.image} />
                      <Carousel.Caption className={styles.myCaption}>
                        <h2>{p.title}</h2>
                        <p>
                          {p.agency != null &&
                            <>
                              <span className={styles.agencyCaption}>Agentur: </span>
                              <span>{p.agency}</span>
                            </>
                          }                      
                          {p.ourJob != null && <span className={styles.ourJobCaption}>Tonstudios Z: </span>}
                          {p.ourJob != null && <span>{p.ourJob}</span>}
                        </p>
                      </Carousel.Caption>                    
                    </div>
                  </Carousel.Item> 
                )}
            </Carousel>
          
          </Col>
          <Col xs={0} md={2}></Col>
        </Row>
      </Container>
    </div>
  )
}

