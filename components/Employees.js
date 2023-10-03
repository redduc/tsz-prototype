import React from "react";
import { Col, Container, Row } from 'react-bootstrap'
import styles from '/components/Employees.module.css'

const employees = [
  {
    id: 1,
    name: 'Renzo D‘Alberto',
    role: 'Producer & Sound Engineer',
    image: 'Renzo.jpg'
  },
  {
    id: 2,
    name: 'Tom Wenger',
    role: 'Technischer Leiter & Sound Engineer',
    image: 'Tom.jpg'
  },
  {
    id: 4,
    name: 'Laura Herold',
    role: 'Officemanagerin & Produktionsplanung',
    image: 'Laura.jpg'
  },
  {
    id: 6,
    name: 'Ramon',
    role: 'Works in the Studio',
    image: 'Ramon.jpg'
  },,
  {
    id: 7,
    name: 'Andy',
    role: 'Works in the Studio',
    image: 'Andy.jpg'
  },,
  {
    id: 8,
    name: 'Gabriel',
    role: 'Works in the Studio',
    image: 'Gabriel.jpg'
  },
]

function Employee({employee}) {
  return (
    <Col lg={4} className={styles.employeeColumn}>
      <div className={styles.employeeWrapper}>
        <div className={styles.employee}>

          <img src={'employees/' + employee.image} className="img-fluid" />
          <div className={styles.text}>
              <span className={styles.name}>{employee.name}</span>
              <span className={styles.role}>{employee.role}</span>          
          </div>
        </div>
      </div>
    </Col>
  )
}

export default function Employees() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage}></div>
      <Container fluid className={styles.employeesContainer}>
        <Row className={styles.employees + " gx-0"}>
            { employees.slice(0, 3).map(e =>
              <Employee key={e.id} employee={e} />
            )}
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={0} lg={1} xxl={2}></Col>
          <Col xs={12} lg={10} xxl={8}>
            <div className={styles.commonText}>
              <h1>Wir sorgen für die Musik.</h1>
              <p>Seit 30 Jahren erarbeiten wir hochwertige Tonprodukte für sämtliche Medien. Damit Sie bei uns die erste Geige spielen können, unterstützen wir Sie bei Ihrem Projekt mit unserer langjährigen Erfahrung, hoher Qualität und einer erstklassigen Dienstleistungspalette.</p>
            </div>
          </Col>
          <Col xs={0} lg={1} xxl={2}></Col>
        </Row>
      </Container>
      <Container fluid className={styles.employeesContainer}>
        <Row className={styles.employees + " gx-0"}>
            { employees.slice(3, employees.length).map(e =>
              <Employee key={e.id} employee={e} />
            )}
        </Row>
      </Container>
    </div>
  )
}