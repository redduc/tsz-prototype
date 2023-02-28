import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/TeamMember.module.css'

export default function TeamMember() {
  return (
    <>
      <Container fluid={true}>
        <Row className={styles.redbg}>
          <Col xs={12} md={6} className={styles.textCol}>
            <div className={styles.textWrapper}>
              <div>
                <div className={styles.qrCodeWrapper}>
                  <img src={'about/teammember-renzo-qrcode.jpg'} />
                </div>
                <div className={styles.contact}>
                  <p>D‘Alberto Renzo, Inhouse Producer & GL</p>
                  <p>+41 79 353 36 64</p>
                </div>
              </div>
            </div>
            <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
          </Col>
          <Col xs={12} md={6} className={styles.imgCol} style={{backgroundImage: "url('about/teammember-renzo.jpg')"}}>
            <div className={styles.imageWrapper}>
              {/* <img src={'about/teammember-renzo.jpg'} className={styles.imgLeft}  /> */}
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className={styles.TeamMember_blackbg}>
          <Col xs={12} md={6} className="order-md-2">
            <div className={styles.textWrapper}>
              <div>
                <div className={styles.contact}>
                  <p className={styles.name}>RENZO D&apos;ALBERTO</p>
                  <p className={styles.position}>INHOUSE PRODUCER / GL</p>
                  <p>Schon als Kind war Renzo fasziniert von
                    Klängen, Tönen, Tasten und Knöpfen. Als
                    Jugendlicher komponierte er auf seinen
                    Synthesizern anstaN Musik seine eigenen
                    Soundwelten und bastelte an Frequenzen und
                    Schwingungen. Nach einer soliden Ausbildung
                    im Bereich WirtschaUFinanzen zog es ihn
                    definiWv in die Welt der Töne. Seit nunmehr drei
                    Jahrzehnten leitet Renzo erfolgreich die
                    Tonstudios Z AG.Renzos Stärke ist die
                    FunkWonalität des Klanges. «Beim Kochen ist
                    das richWge Dosieren von auserlesenen Zutaten
                    und das Timing der Schüssel für ein perfektes
                    Gericht. Genau so sind perfekt abgesWmmte
                    Klänge, Geräusche und SWmmen zum richWgen
                    Zeitpunkt das Geheimnis für eine effekWve
                    Wirkung des Klanges.»
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className={"order-md-1 " + styles.imgCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.qrCodeWrapper}>
                <img src={'about/teammember-renzo-qrcode.jpg'} />
              </div>
              <img src={'about/teammember-renzo.jpg'} className={styles.imgLeft} />
            </div>
            <img src="tszlogo.png" className={styles.logo + ' ' + styles.right} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className={styles.TeamMember_blackbg}>
          <Col xs={12} md={6}>
            <div className={styles.textWrapper}>
              <div>
                <div className={styles.contact}>
                  <p className={styles.name}>Tom Wenger</p>
                  <p className={styles.position}>Technischer Leiter & Sound Engineer</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className={styles.imgCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.qrCodeWrapper}>
                <img src={'about/teammember-renzo-qrcode.jpg'} />
              </div>
              <img src={'about/teammember-tom.jpg'} className={styles.imgLeft} />
            </div>
            <img src="tszlogo.png" className={styles.logo} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
      <Container fluid={true}>
        <Row className={styles.TeamMember_blackbg}>
          <Col xs={12} md={6} className="order-md-2">
            <div className={styles.textWrapper}>
              <div>
                <div className={styles.contact}>
                  <p className={styles.name}>Laura Herold</p>
                  <p className={styles.position}>Officemanagerin & Produktionsplanung</p>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className={"order-md-1 " + styles.imgCol}>
            <div className={styles.imageWrapper}>
              <img src={'about/teammember-laura.jpg'} className={styles.imgLeft} />
            </div>
            <img src="tszlogo.png" className={styles.logo + ' ' + styles.right} alt="Z Logo" />
          </Col>
        </Row>
      </Container>
    </>
  )
}
