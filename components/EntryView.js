import React, {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/EntryView.module.css'
import TSZNavigation from '../components/Navigation';
import {reveal} from '/components/utils';
import { FaLinkedin, FaInstagram, FaPhone, FaAt } from "react-icons/fa";

export default function EntryView() {
  const titleWords = ["Spielfilme", "Werbung", "Events", "ADR", "Dokfilme"]
  const [titleWord, setTitleWord] = useState(titleWords[0])

  useEffect(() => {
    let timerId;
      //console.log("useEffect init")
      timerId = setInterval(() => {
        setTitleWord((tw) => {
          let lastTitleIdx = titleWords.indexOf(tw)
          lastTitleIdx = (lastTitleIdx+1) % titleWords.length
          return titleWords[lastTitleIdx]
        })
      },3000)
      
    window.addEventListener("scroll", () => reveal(styles.reveal, styles.active, 50));
  }, [])

  function TitleSpan({titleWord}) {
    return (<>für <span>{titleWord}</span></>)
  }
  return (
    <>
      <div className={styles.mainrowwrapper}>
        {/* <video id="background-video" className="background-video" playsInline autoPlay loop muted>        
          <source src="tsz-movie.mp4" type="video/mp4"/>
        </video> */}
        <video id="background-video" className="background-video" playsInline autoPlay loop muted>
          <source src="tsz-movie.mp4" type="video/mp4"/>
        </video>
        <TSZNavigation addReveal={true} />
        <div className={styles.mainContentGrid}>
          <Container>
            <Row style={{marginTop: 60}}>
              <Col className={styles.mainTitleWrapper}>
                <p className={styles.mainTitle}>Grosse Töne</p>
                <p className={styles.mainTitle}><TitleSpan titleWord={titleWord}/></p>
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={7}></Col>
              <Col xs={6} md={3}></Col>
            </Row>
          </Container>          
          <Container className={styles.footerContainer}>
            <Row>
              <Col xs={6} md={2}>              
                <div className={styles.socialIcons}>
                  <a href="#"><FaLinkedin /></a>
                  <a href="#"><FaInstagram /></a>
                </div>
              </Col>
              <Col xs={6} md={8}>
                <div className={styles.zlogo}>
                  <img src="tszlogo.png" className={styles.logoSmall} />
                </div>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Container>

        </div>
      </div>
    </>
  )
}
