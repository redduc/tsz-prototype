//import Image from "next/image";
import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Employees.module.css'

const activeEmployee = 1;
const employees = [
  {
    id: 1,
    name: 'Renzo D‘Alberto',
    role: 'Producer & Sound Engineer',
    image: 'renzo-dalberto.jpg'
  },
  {
    id: 2,
    name: 'Tom Wenger',
    role: 'Technischer Leiter & Sound Engineer',
    image: ''
  },
  {
    id: 3,
    name: 'Debora Reust',
    role: 'Officemanagerin & Produktionsplanung',
    image: ''
  },
  {
    id: 4,
    name: 'Laura Herold',
    role: 'Officemanagerin & Produktionsplanung',
    image: ''
  },
  {
    id: 5,
    name: 'Martin Scheuter',
    role: 'Sound Engineer',
    image: ''
  },
  {
    id: 6,
    name: 'Martin Reich',
    role: 'Sound Engineer',
    image: ''
  },
]

function Employee({employee, employees}) {
  let wrapperClass = (employee.id === activeEmployee  ? [styles.employee, styles.active].join(' ') : styles.employee)

  return (
    <div className={wrapperClass}>
      { /*<Image src={'/Employees/'  + employee.image} className="img-fluid" width={1920} height={1080} /> */ }
      <div className={styles.select}>
        { employees.map(e =>            
          <a href="javascript:void(0);" className={(e.id === employee.id ? styles.active : '')} key={e.id}>
            <span className={styles.name}>{e.name}</span>
            <span className={styles.role}>{e.role}</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default function Employees() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <p className="red">&gt; Mitarbeiter</p>
            <h1>Wir sorgen für die Musik.</h1>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
        <Row>
          <Col xs={0} xxl={1}></Col>
          <Col xs={12} xxl={10}>
            <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.</p>
            <div className={styles.employees}>
              { employees.map(e =>
                <Employee key={e.id} employee={e} employees={employees} />
              )}
            </div>
          </Col>
          <Col xs={0} xxl={1}></Col>
        </Row>
      </Container>
    </div>
  )
}