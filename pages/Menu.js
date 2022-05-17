import Head from 'next/head'
import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '../styles/Menu.module.css'
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function Menu() {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>TSZ examples</title>
      </Head>
      <div className={styles.wrapper}>
        <Container>
          <Row>
            <Col xs={12}>
              <div className={styles.close}><IoClose /></div>
              <p className={styles.menuText}><FaChevronRight /> Menu</p>              
            </Col>
          </Row>
          <Row>
            <Col xs={7} md={7} lg={6}>
              <div className={styles.menuEntries}>
                <Link href="/">
                  <a>Home</a>
                </Link>
                <Link href="/Projects">
                  <a className={styles.active}>Projekte</a>
                </Link>
                <Link href="/Studios">
                  <a>Studios</a>
                </Link>
                <Link href="/Team">
                  <a>Team</a>
                </Link>
              </div>
            </Col>
            <Col md={5} lg={6}>
              <div className={styles.address}>
                <img src={'logo.jpg'} className={styles.logo} />
                <p className={styles.name}>tonstudiosz</p>
                <p>Wallisellenstrasse 301</p>
                <p>CH-8050 Zürich</p>
                <p>- Parkplätze vorhanden</p>
                <p className={styles.phone}><span>Telefon</span> <a href="tel:0041443253388">+41 44 325 33 88</a></p>
                <p className={styles.email}><a href="mailto:admin@tonstudiosz.com">admin@tonstudiosz.com</a></p>
                <div className={styles.icons}>
                  <FaLinkedin />
                  <FaInstagram />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}
