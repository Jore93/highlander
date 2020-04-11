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
        <Row align='start' justify='center'>
          <Col sm={9} md={3} lg={3} className='education' style={styles.colStyle}>
          <h2>Education</h2>
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
            <h2>Language skills</h2>
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
          <Col sm={9} md={4} lg={3} className='positions' style={styles.colStyle}>
            <h2>Positions</h2>
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
          <Col sm={9} md={4} lg={3} className='workhistory' style={styles.colStyle}>
            <h2>Workhistory</h2>
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
        <Row align='start' justify='center'>
          <Col sm={9} md={5} lg={5} className='first' style={styles.colStyle}>
            <h2>My areas of expertise</h2>
          </Col>
          <Col sm={9} md={5} lg={5} className='second' style={styles.colStyle}>
            <h2>My future plans</h2>
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
  headerStyle: {
    textAlign: 'start',
  },
};
