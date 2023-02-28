import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/TeamMember.module.css'

export default function TeamMember() {
  return (
    <>
      <div id="teammemberrenzoredbg" className={styles.wrapperTwoColumn + ' ' + styles.redbg}>
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
        <div className={styles.imageWrapper}>
          <img src={'about/teammember-renzo.jpg'} className={styles.imgLeft}  />
        </div>
      </div>      
      <div id="teammemberrenzoblackbgright" className={styles.wrapperTwoColumn + ' ' + styles.TeamMember_blackbg}>
        <div className={styles.textWrapper}>
          <div>
            <div className={styles.contact}>
              <p className={styles.name}>RENZO D’ALBERTO</p>
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
                Wirkung des Klanges.»</p>
            </div>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <div className={styles.qrCodeWrapper}>
            <img src={'about/teammember-renzo-qrcode.jpg'} />
          </div>
          <img src={'about/teammember-renzo.jpg'} className={styles.imgLeft} />
        </div>
      </div>
      <div id="teammemberrenzoblackbgleft" className={styles.wrapperTwoColumn + ' ' + styles.TeamMember_blackbg}>
        <div className={styles.imageWrapper}>
          <div className={styles.qrCodeWrapper}>
            <img src={'about/teammember-renzo-qrcode.jpg'} />
          </div>
          <img src={'about/teammember-renzo.jpg'} className={styles.imgLeft} />
        </div>      
        <div className={styles.textWrapper}>
          <div>
            <div className={styles.contact}>
              <p className={styles.name}>RENZO D’ALBERTO</p>
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
                Wirkung des Klanges.»</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
