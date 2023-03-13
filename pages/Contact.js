import Head from 'next/head'
import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '../styles/Contact.module.css'
import { FaLinkedin, FaInstagram, FaPhone, FaAt } from "react-icons/fa";

export default function Contact() {
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
            <Col xs={11} md={6} lg={5}>
              <div className={styles.textArea}>
                <h1>Contact us</h1>
                <p>Du hast eine Frage zu Sprecher, Urheberrecht oder zu einer möglichen Produktion? Schreib uns eine Email, ruf an oder komm einfach zu einem Kaffe vorbei.</p>
              </div>
            </Col>
            <Col xs={0} md={1} lg={2}>
            </Col>
            <Col md={5} lg={5}>
              <div className={styles.address}>
                <p>Tonstudios Z AG</p>
                <p>Wallisellenstrasse 301</p>
                <p>8050 Zürich</p>
                <p>Schweiz</p>
                <p className={styles.phone}><FaPhone /><a href="tel:0041443253388">+41 44 325 33 88</a></p>
                <p className={styles.email}><FaAt /><a href="mailto:admin@tonstudiosz.com">admin@tonstudiosz.com</a></p>                
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.logoIcons}>
                <img src={'logo.jpg'} className={styles.logo} />
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
