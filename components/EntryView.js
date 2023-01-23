import React, {useEffect, useState} from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/EntryView.module.css'
import TSZNavigation from '../components/Navigation';
import {reveal} from '/components/utils';

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
        <video id="background-video" className="background-video" playsInline autoPlay loop muted>
          <source src="tsz-movie.mp4" type="video/mp4"/>
        </video>
        <TSZNavigation />
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

        <div className={styles.myFooter + ' ' + styles.reveal}>
              <div className={styles.footerArrow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ee2222" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
                <img src="tszlogo.png" className={styles.logoSmall} />
              </div>
          <Container>
            <Row style={{padding: 20}}>
            </Row>
            {/* <Row style={{padding: 20}}>
              <Col align="center"><img src="clientlogos/logo-kaegi.png" style={{height: 30}} /></Col>
              <Col align="center"><img src="clientlogos/logo-cailler.png" style={{height: 40}} /></Col>
              <Col align="center"><img src="clientlogos/logo-arte.png" style={{height: 25}} /></Col>
              <Col align="center"><img src="clientlogos/logo-fifa.png" style={{height: 30}} /></Col>
              <Col align="center"><img src="clientlogos/logo-diepost.png" style={{height: 45}} /></Col>
              <Col align="center"><img src="clientlogos/logo-opel.png" style={{height: 40}} /></Col>
              <Col xs={12} align="center">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="16" height="16" fill="#ee2222"
                    className="bi bi-chevron-compact-down"
                    viewBox="0 0 16 16"
                    style={{width: 600}}>
                  <path fillRule="evenodd"
                        d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>
              </Col>
            </Row> */}
          </Container>
        </div>
      </div>
    </>
  )
}
