import React, { useEffect, useState } from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Home2Top.module.css'
import TSZNavigation from '../components/Navigation';
import { reveal } from '/components/utils';
import { FaLinkedin, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function EntryView() {
  const titleWords = ["Spielfilme", "Werbung", "Events", "ADR", "Dokfilme"]
  const [titleWord, setTitleWord] = useState(titleWords[0])

  useEffect(() => {
    let timerId;
    timerId = setInterval(() => {
      setTitleWord((tw) => {
        let lastTitleIdx = titleWords.indexOf(tw)
        lastTitleIdx = (lastTitleIdx + 1) % titleWords.length
        return titleWords[lastTitleIdx]
      })
    }, 3000)

    window.addEventListener("scroll", () => reveal(styles.reveal, styles.active, 50));
  }, [])

  function TitleSpan({ titleWord }) {
    return (<>für <span>{titleWord}</span></>)
  }
  return (
    <>
      <TSZNavigation addReveal={true} />
      <Container fluid className={styles.homeGrid + " gx-0"}>
        <Row className={"gx-0"}>
          <Col sm={12} md={4}>
            <Row className={"gx-0"}>
              <Col sm={6} md={12}>
                <div className={styles.element}>
                  <div className={styles.elementContent + " " + styles.borderMDright}>
                    <img src="./home2/studio01.jpg" alt="" />
                  </div>
                </div>
              </Col>
              <Col sm={6} md={12}>
                <div className={styles.element}>
                  <div className={styles.elementContent + " " + styles.borderMDright}>
                    <img src="./Logo_Tonstudiosz_CMYK.svg" alt="" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={8}>
            <div className={styles.element}>
              <div className={styles.elementContent}>
                <div className={styles.mainVideo}>
                  <video id="background-video" className={styles.video} playsInline autoPlay loop muted >
                    <source src="tsz-movie.mp4" type="video/mp4" />
                  </video>
                  <div className={styles.titlewrapper}>
                    <p className={styles.title}>Grosse Töne</p>
                    <p className={styles.title}><TitleSpan titleWord={titleWord} /></p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className={styles.element}>
              <div className={styles.elementContent + " " + styles.borderMDright}>
                <img src="./home2/studio02.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className={styles.element}>
              <div className={styles.elementContent + " " + styles.borderMDright}>
                <img src="./home2/studio03.jpg" alt="" />
              </div>
            </div>
          </Col>
          <Col sm={6} md={4}>
            <div className={styles.element}>
              <div className={styles.elementContent}>
                <img src="./home2/werbung01.jpg" alt="" />
              </div>
            </div>
          </Col>
        </Row>

        <div className={styles.socialIcons}>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaMapMarkerAlt /></a>
        </div>
      </Container>
    </>
  )
}
