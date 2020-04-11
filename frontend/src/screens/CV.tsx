import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Container, Col, Row} from 'react-grid-system';

import {education} from '../education';
import {positions} from '../positions';
import {languages} from '../languages';
import {workhistory} from '../workhistory';
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';

const CV = () => {
  return (
    <div className="App-container">
      <Container fluid style={styles.containerStyle}>
        <Row justify='center'>
          <Col sm={12} md={3} lg={3} className='sidebar' style={styles.colStyle}>
            <h3>Languages</h3>
            <ul>
              {
                languages.map((item, i) => {
                  return (
                    <li key={i}>
                      {item.language} – {item.level}
                    </li>
                  );
                })
              }
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4} className='content' style={styles.colStyle}>
            <h3>Education</h3>
            <ul>
              {
                education.map((item, i) => {
                  return (
                    <div key={i} className='cv-item'>
                      <li>
                        <li>{item.name}</li>
                        <ul>
                          <li>{item.place}</li>
                          <li>{item.duration}</li>
                        </ul>
                      </li>
                    </div>
                  );
                })
              }
            </ul>
            <h3>Positions</h3>
            <ul>
              {
                positions.map((item, i) => {
                  return (
                    <div key={i} className='cv-item'>
                      <li>
                        <li>{item.position}</li>
                        <ul>
                          <li>{item.organisation}</li>
                          <li>{item.duration}</li>
                        </ul>
                      </li>
                    </div>
                  );
                })
              }
            </ul>
          </Col>
          <Col sm={12} md={4} lg={4} className='content-2' style={styles.colStyle}>
            <h3>Workhistory</h3>
            <ul>
              {
                workhistory.map((item, i) => {
                  return (
                    <div key={i} className='cv-item'>
                      <li>
                        <li>{item.position}</li>
                        <ul>
                          <li>{item.employer}</li>
                          <li>{item.duration}</li>
                        </ul>
                      </li>
                    </div>
                  )
                })
              }
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CV;

const styles = {
  containerStyle: {
    margin: 15,
  },
  colStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    margin: 15,
    color: TEXT_COLOR,
  },
}
