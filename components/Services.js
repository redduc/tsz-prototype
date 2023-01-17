
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import styles from '/components/Services.module.css'

const services = [
  {
    id: 1,
    title: 'Werbung',
    subtitle: 'Wir lassen Ihre Zielgruppe aufhorchen',
    text: 'Ob für TV oder Kino, für Radio, Web oder Social Media – wir produzieren auffallenden Sound für Ihren Werbespot in allen möglichen Tonformaten.',
    linkText: 'mehr...',
    image: 'services-werbung.png'
  },
  {
    id: 2,
    title: 'TV-Sendungen',
    subtitle: 'So hört es sich fern',
    text: 'Mit langjähriger Erfahrung in der Fernsehproduktion bringen wir Bilder und Gerschichten auf regionalen, nationalen und internationalen Sendern zum klingen.',
    linkText: 'mehr...',
    image: 'services-tv-sendungen.png'
  },
  {
    id: 3,
    title: 'Film',
    subtitle: 'Töne für grosses Kino',
    text: 'In unserer riesigen Dolby zertifizierten Cinema-Suite bringen wir grosse Töne auf die Leinwand. Leidenschaftlich verpassen wir Dokumentar- und Spielfilmen den akustischen Fein- und Endschliff.',
    image: 'services-spiel-dokfilme.png'
  },
  {
    id: 4,
    title: 'ADR',
    subtitle: 'Töne für grosses Kino',
    text: 'Unser ADR-Studio bietet perfekte Akustik für Synchronaufnahmen. So harmonieren die Studioaufnahmen mit Ihren originalen Aussen- und Innenaufnahmen? Langjährige Erfahrung und Zusammenarbeit mit International führenden Produktionsstudios machen uns zur Markführerin in der Schweiz.',
    image: 'services-spiel-dokfilme.png'
  },
  {
    id: 5,
    title: 'Corporates',
    subtitle: 'Der Soundtrack für Ihr Unternehmen',
    text: 'Wir geben Ihrem Unternehmen eine Klangfarbe. Mit Atemberaubendem Sound verleihen wir Ihnen eine starken Auftritt.',
    image: 'services-corporate.png'
  },
  {
    id: 6,
    title: 'Adaptionen',
    subtitle: '',
    text: 'Sie brauchen Ihre Videos oder Filme in anderen Sprachen? Dank internationalem Netzwerk kümmern wir uns um die Adaption, alles aus einer Hand.',
    image: 'services-restauration.png'
  },
  {
    id: 7,
    title: 'Voices',
    subtitle: 'Auf den richtigen Ton kommt es an',
    text: 'Japanisch, Mexikanisch oder breitestes Berndeutsch - wir geben Ihrem Produkt eine Stimme. Dank unserem Netzwerk holen wir in Echtzeit Stimmen aus aller Welt in unsere Studios.',
    image: 'services-sprecher.png'
  },
  {
    id: 8,
    title: 'Telefonie / Ansage',
    subtitle: 'Das müssen Sie hören!',
    text: 'Professionelle Durchsagen an Bahnhöfen, am Flughafen, im Stadion oder am Telefon. Mit der richtigen Stimme geben wir Ihnen die passende Identität.',
    image: 'services-telefonie.png'
  },
  {
    id: 9,
    title: 'Musik',
    subtitle: '',
    text: 'Wir sind Spezialisten in Sachen Urheberrechte!\n\nMit einem Pool an spezialisierten Komponisten kreieren wir für Ihr Werk die passende Musik. Oder suchen Ihnen geeignete Tracks aus unseren Musik-Libraries.',
    image: 'services-musik-sounddesign.png'
  },
  {
    id: 10,
    title: 'Sounddesign',
    subtitle: 'Klänge, die unter die Haut gehen',
    text: 'Das Sounddesign verstärkt Realität und Handlung, untermalt Szenen und spricht die emotionale Ebene der Zuschauer an. So schafft es einen besseren visuellen Wahrnehmungsraum mit akustischen Elementen, die das Visuelle unterstützen und zu einer Gesamteinheit von Bild und Ton beitragen.',
    image: 'services-musik-sounddesign.png'
  },
  {
    id: 11,
    title: 'Restaurationen',
    subtitle: 'Keinen Riss mehr im Film',
    text: 'Mit den modernsten technischen Möglichkeiten restaurieren wir Filmton, bringen unvollständige Aufnahmen auf Vordermann, eliminieren störende Geräusche und rekonstruieren Klangeindrücke.',
    image: 'services-restauration.png'
  },
  {
    id: 12,
    title: 'Diverses',
    subtitle: 'Für jedes Projekt den richtigen Ton',
    text: 'Sie haben ein ganz spezielles Projekt? Hören wir uns gerne an! Wir machen Ihren Event zum Ereignis oder verwandeln Ihre Geschichte zu einem packenden Hörspiel.',
    image: 'services-events.png'
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
    <div id="servicearea" className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        {/* <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <p className="red">&gt; Services</p>
            <h1>Hörprobe gefällig?</h1>
            <p>Als Full Service-Unternehme bieten wir sämtliche Leistungen rund um Audioproduktion.</p>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row> */}
        <Row>
          <Col xs={12}>
            <h2>Als Full Service-Unternehme bieten wir sämtliche Leistungen rund um Audioproduktion.</h2>
          </Col>
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

