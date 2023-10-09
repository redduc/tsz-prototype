import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/ContactUs.module.css'
import { FaLinkedin, FaInstagram, FaPhone, FaAt, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={12}>            
            <h1 className={styles.title}>Contact us</h1>
          </Col>
        </Row>
      </Container>
      <div className={styles.wrapper}>
        <video id="background-video" className="background-video" playsInline autoPlay loop muted>
          <source src="tsz-movie.mp4" type="video/mp4"/>
        </video>
        <div className={styles.contentGrid}>
          <div></div> {/* spacer row */}
          <Container>
            <Row>
              <Col xs={12} md={6} lg={5}>
                <div className={styles.textArea}>
                  <p>Du hast eine Frage zu einem Sprecher, Urheberrecht oder zu einer möglichen Produktion? Schreib uns eine Email, ruf an oder komm einfach zu einem Kaffee vorbei.</p>
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
          </Container>
          <Container>
            <Row>
              <Col xs={12} md={6} lg={5}>
                <div className={styles.logoIcons}>
                  <div className={styles.icons}>
                      <a href="#"><FaLinkedin /></a>
                      <a href="#"><FaInstagram /></a>
                      <a href="#"><FaMapMarkerAlt /></a>
                    </div>
                </div>
              </Col>
              <Col xs={0} md={1} lg={2}>
              </Col>
              <Col md={5} lg={5}>
                <div className={styles.privacyLinks}>
                  <a href="#">Datenschutzerklärung</a><br></br>
                  <a href="#">Impressumg</a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  )
}
