import React from "react";
import {Col, Container, Row} from 'react-bootstrap'
import styles from '/components/TeamMember.module.css'

export default function TeamMember() {
  return (
    <>
      <div id="teamintro" className={styles.wrapperTwoColumn + ' ' + styles.redbg}>
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
    </>
  )
}
