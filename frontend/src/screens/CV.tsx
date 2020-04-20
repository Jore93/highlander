import React from 'react';
//import * as Redux from 'redux';
import {Container, Col, Row} from 'react-grid-system';
import {connect} from 'react-redux';

import '../App.css';
import {pastParagraph, futureParagraph} from '../allData';

//import {fetchLanguages} from '../actions';
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';
import {cvReducer} from '../store/cvTypes';
import {StoreState} from '../store/storeTypes';

class CV extends React.Component<cvReducer, {}> {
  render() {
    return (
      <div className="App-container">
        <Container fluid style={styles.containerStyle}>
          <Row align='start' justify='center'>
            <Col sm={9} md={3} lg={3} className='education' style={styles.colStyle}>
              <h2>Education</h2>

              <ul>
                {
                  this.props.education.map((item, i) => {
                    return (
                      <div key={i} className='cv-item'>
                        <li>{item.name}</li>
                        <ul>
                          <li>{item.place}</li>
                          <li>{item.duration}</li>
                        </ul>
                      </div>
                    );
                  })
                }
              </ul>
              <h2>Language skills</h2>
              <ul>
                {
                  this.props.languages.map((item, i) => {
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
                  this.props.positions.map((item, i) => {
                    return (
                      <div key={i} className='cv-item'>
                        <li>{item.position}</li>
                        <ul>
                          <li>{item.organisation}</li>
                          <li>{item.duration}</li>
                        </ul>
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
                  this.props.workhistory.map((item, i) => {
                    return (
                      <div key={i} className='cv-item'>
                        <li>{item.position}</li>
                        <ul>
                          <li>{item.employer}</li>
                          <li>{item.duration}</li>
                        </ul>
                      </div>
                    );
                  })
                }
              </ul>
            </Col>
          </Row>
          <Row align='start' justify='center'>
            <Col sm={9} md={5} lg={5} className='first' style={styles.colStyle}>
              <h2>My areas of expertise</h2>
              <p style={{textAlign: 'start'}}>
                {pastParagraph}
              </p>
            </Col>
            <Col sm={9} md={5} lg={5} className='second' style={styles.colStyle}>
              <h2>My future plans</h2>
              <p>
                {futureParagraph}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    margin: 15,
  },
  colStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    margin: 15,
    color: TEXT_COLOR,
  },
};

const mapStateToProps = (state: StoreState) => {
  const {
    isInitialized,
    education,
    languages,
    positions,
    workhistory,
  } = state.cv;
  return {isInitialized, education, languages, positions, workhistory};
}

export default connect(
  mapStateToProps,
  {
    //fetchLanguages,
  },
)(CV);

