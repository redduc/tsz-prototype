import Head from 'next/head'
import React from "react";
import {Col, Container, Nav, Navbar, NavDropdown, Row} from 'react-bootstrap'
import styles from '../styles/Projects.module.css'
import TSZNavigation from "../components/Navigation";

const activeCategory = 1
const categories = [
  {
    id: 1,
    title: 'Werbung',
    image: 'services-werbung.png'
  },
  {
    id: 2,
    title: 'TV-Sendungen',
    image: 'services-tv-sendungen.png'
  },
  {
    id: 3,
    title: 'Spielfilm / DOK / ADR',
    image: 'services-spiel-dokfilme.png'
  },
  {
    id: 4,
    title: 'Corporates / Imagefilme',
    image: 'services-corporate.png'
  },
  {
    id: 5,
    title: 'Diverses',
    image: 'services-events.png'
  },
  {
    id: 6,
    title: 'Audiorestauration',
    image: 'services-restauration.png'
  },
  {
    id: 7,
    title: 'Telefonie / Ansage',
    image: 'services-telefonie.png'
  },
  {
    id: 8,
    title: 'Musik/Sound Design',
    image: 'services-musik-sounddesign.png'
  },
  {
    id: 9,
    title: 'Sprecher',
    image: 'services-sprecher.png'
  },
]
const productions = [
  {
    id: 1,
    title: 'Opel Corsa-e',
    image: 'OpelCorsaE.jpg',
    infos: [
      {
        caption: 'Agentur',
        text: 'FCB Zürich'
      },
      {
        caption: 'Tonstudios Z',
        text: 'Cast, Sprachaufnahmen in Deutsch, Französisch und Italienisch und Tonmischung.'
      },
    ],
  },
  {
    id: 2,
    title: 'Swisscom \"Gemeinsam bereit\"',
    image: 'SwisscomGemeinsamBereit.jpg',
    infos: [
      {
        caption: 'Film',
        text: 'Stories AG'
      },
      {
        caption: 'Regie',
        text: 'Michael Fueter'
      },
      {
        caption: 'Tonproduktion',
        text: 'Tonstudios Z'
      },
    ],
  },
]

function CategoryMenuItem({category}) {
  let itemClass = (category.id === activeCategory  ? [styles.category, styles.active].join(' ') : styles.category)

  return (    
    <a href="#" className={itemClass}>
      <img src={'services/' + category.image}  />
      <span>{category.title}</span>
    </a>
  )
}

function Production({production}) {
  return (
    <div className={styles.production}>
      <Row>
        <Col xs={12} md={6} lg={5}>
          <img src={'productions/' + production.image}  />
        </Col>
        <Col xs={12} md={6} lg={7}>
          <h2>{production.title}</h2>
          <p>            
            { production.infos.map(info =>
              <>
                {info.caption != null && <span className={styles.caption}>{info.caption}</span>}
                {info.text != null && <span>{info.text}</span>}
              </>
            )}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default function Projects() {

  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <div className={styles.wrapper}>
        <TSZNavigation />
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Unsere Projekte</h1>
            </Col>
          </Row>          
          <Row>
            <Col xs={12} lg={10} xl={12} xxl={10}>
              <div className={styles.categoryMenu}>
                { categories.map(cat =>
                  <CategoryMenuItem key={cat.id} category={cat} />
                )}
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              { productions.map(p =>
                <Production key={p.id} production={p} />
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
