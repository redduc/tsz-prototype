
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import styles from '/components/Services.module.css'

const services = [
  {
    id: 1,
    title: 'Werbung',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Ob für TV oder Kino, für Radio, Web oder Social Media - wir produzieren auffallenden Sound für Ihren Werbespot in allen möglichen Tonformaten.',
    linkText: 'Hörprobe gefällig?',
    image: 'services-werbung.png'
  },
  {
    id: 2,
    title: 'TV-Sendungen',
    subtitle: 'So hört es sich fern',
    text: 'Mit unserer langjährigen Erfahrung in der Fernsehproduktion bringen wir Bilder auf regionalen und nationalen TVSendern zum Tönen.',
    linkText: 'Hörprobe gefällig?',
    image: 'services-tv-sendungen.png'
  },
  {
    id: 3,
    title: 'Spielfilm / DOK / ADR',
    subtitle: 'Töne für grosses Kino',
    text: 'In unserer Dolby zertifizierten Cinema-Suite bringen wir grosse Töne auf die Leinwand. Leidenschaftlich verpassen wir Ihrem Film den akustischen Feinschliff. Das ADR Studio bietet die perfekte Akustik für Ihre Synchronaufnahme.',
    image: 'services-spiel-dokfilme.png'
  },
  {
    id: 4,
    title: 'Corporates / Imagefilme',
    subtitle: 'Der Soundtrack für Ihr Unternehmen',
    text: 'Wir verleihen Ihrem Unternehmen Klang. Mit atemberaubendem Sound verleihen wir Ihnen eine klanglich starke Identität.',
    image: 'services-corporate.png'
  },
  {
    id: 5,
    title: 'Diverses',
    subtitle: 'Für jedes Projekt den richtigen Ton',
    text: 'Sie haben ein ganz spezielles Projekt? Hören wir uns gerne an! Wir machen Ihren Event zum Ereignis oder verwandeln Ihre Geschichte zu einem packenden Hörspiel.',
    image: 'services-events.png'
  },
  {
    id: 6,
    title: 'Audiorestauration',
    subtitle: 'Keinen Riss mehr im Film',
    text: 'Mit den neuesten technischen Möglichkeiten restaurieren wir Filmton, bringen unvollständige Aufnahmen auf Vordermann, eliminieren störende Geräusche und rekonstruieren Klangeindrücke.',
    image: 'services-restauration.png'
  },
  {
    id: 7,
    title: 'Telefonie / Ansage',
    subtitle: 'Das müssen Sie hören!',
    text: 'Professionelle Durchsagen an Bahnhöfen, im Stadion oder am Flughafen müssen vor allem eins sein: klar und deutlich. Dafür finden wir die richtige Stimme und geben auch Ihrer Telefonansage eine Identität.',
    image: 'services-telefonie.png'
  },
  {
    id: 8,
    title: 'Musik/Sound Design',
    subtitle: 'Klänge, die unter die Haut gehen',
    text: 'Mit den passenden Sounds lässt sich in neue Sphären eintauchen. Wir erzeugen Stimmung für TV, Kino, Web oder Handy mit Toncollagen ab unserem eigenen Sound-Archiv oder Library und schaffen authentische Geräusch- Kulissen.',
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
    <Col xs={12} md={6} lg={4} xl={3} className={styles.cardCol}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <img src={'services/' + service.image}  />
        </div>
        <h2>{service.title}</h2>
        <h3>{service.subtitle}</h3>
        <p>{service.text}</p>
        {service.linkText != null &&
          <a href="#">{service.linkText}</a>
        }
      </div>
    </Col>
  )
}


export default function Services() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <p className="red">&gt; Produktionen</p>
            <h1>Hörprobe gefällig?</h1>
            <p>Als Full Service-Unternehme bieten wir sämtliche Leistungen rund um Audioproduktion.</p>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
        <Row>
          { services.map(service =>
            <Service key={service.id} service={service} />
          )}
        </Row>
      </Container>
    </div>
  )
}

