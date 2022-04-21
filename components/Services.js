
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import styles from '/components/Services.module.css'

const services = [
  {
    id: 1,
    title: 'Werbung',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'In Dolby-Digital Surround und im allen gängigen Tonformaten.',
    image: 'services-werbung.png'
  },
  {
    id: 2,
    title: 'TV-Sendungen',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-tv-sendungen.png'
  },
  {
    id: 3,
    title: 'Spiel- und Dokfilme',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-spiel-dokfilme.png'
  },
  {
    id: 4,
    title: 'Corporate',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-corporate.png'
  },
  {
    id: 5,
    title: 'Events/Specials',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-events.png'
  },
  {
    id: 6,
    title: 'Audiorestauration',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-restauration.png'
  },
  {
    id: 7,
    title: 'Telefonie',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-telefonie.png'
  },
  {
    id: 8,
    title: 'Musik/Sound Design',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Posuere erat a ante venenatis dapibus posuere velit aliquet.',
    image: 'services-musik-sounddesign.png'
  },
  {
    id: 9,
    title: 'Sprecher',
    subtitle: 'Auf den richtigen Ton kommt es an',
    text: 'Japanisch, Russisch oder breitestes Bern-Deutsch – wir treffen immer den richtigen Ton und geben Ihrem Produkt eine Stimme.\n' +
      'Dank unserem Netzwerk finden wir die richtige Stimme und holen sie via IP in Echtzeit aus aller Welt in unsere Studios. Schnell und ohne (teure) Anreisekosten.',
    image: 'services-sprecher.png'
  },
]



function Service({service}) {
  return (
    <Col xs={6} md={3}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={'services/' + service.image}  />
        </div>
        <h2>{service.title}</h2>
        <h3>{service.subtitle}</h3>
        <p>{service.text}</p>
      </div>
    </Col>
  )
}


export default function Services() {
  return (
    <Container>
      <Row>
        <Col xs={0} md={2}></Col>
        <Col xs={12} md={8}>
          <h1>Hörprobe gefällig</h1>
          <br/>
          <p>Als Full Service-Unternehmen bieten wir sämtliche Leistungen rund um Audioproduktion.</p>
        </Col>
        <Col xs={0} md={2}></Col>
      </Row>
      <Row>
        { services.map(service =>
          <Service key={service.id} service={service} />
        )}
      </Row>
    </Container>
  )
}

