import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/Werbung.module.css'


export default function StudioAbout() {
  return (
    <>
      <div className={styles.projectwrapper}>
        <div className={styles.menubar2}>
          <div className={styles.link}>Werbung</div>
          <div className={styles.link}>TV</div>
          <div className={styles.link}>Film</div>
          <div className={styles.link}>ADR</div>
          <div className={styles.link}>Ansagen</div>
          <div className={styles.link}>Diverses</div>
        </div>
        <Row className={styles.projects}>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung1.jpg" />
              <div className={styles.textwrapper}><p>Appenzeller Werbekampagne</p></div>
            </div>              
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung2.jpg" />
              <div className={styles.textwrapper}><p>Swisscom &quot;Gemeinsam bereit&quot;</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung3.jpg" />
              <div className={styles.textwrapper}><p>SWISSCOM &quot;BLUE&quot;</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung4.jpg" />
              <div className={styles.textwrapper}><p>Opel Grandland X</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung5.jpg" />
              <div className={styles.textwrapper}><p>Opel Corsa-e</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung6.jpg" />
              <div className={styles.textwrapper}><p>Zurich Hockey WM</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung7.jpg" />
              <div className={styles.textwrapper}><p>Rush Hour - TV-Spot</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung8.jpg" />
              <div className={styles.textwrapper}><p>Carlit & Ravensburger</p></div>
            </div>  
          </Col>
          <Col md={4} xs={12}>
            <div className={styles.entry}>
              <img src="./werbung/werbung9.jpg" />
              <div className={styles.textwrapper}><p>SUVA Gold-Edi</p></div>
            </div>  
          </Col>
        </Row>
      </div>
    </>
  )
}
