import React from 'react';
import {Container, Col, Row} from 'react-grid-system';
import {connect} from 'react-redux';

import {pastParagraph, futureParagraph} from '../allData';

import {DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';
import {cvReducer} from '../store/cvTypes';
import {StoreState} from '../store/storeTypes';

class CV extends React.Component<cvReducer, {}> {
  render() {
    return (
      <div style={styles.appContainerStyle}>
        <Container fluid style={styles.containerStyle}>
          <Row justify='center'>
            <Col sm={9} md={3} lg={3} className='education' style={styles.colStyle}>
              <h2 style={styles.headerTextStyle}>Education</h2>
              <ul>
                {
                  this.props.education.reverse().map((item, i) => {
                    return (
                      <div key={i} style={styles.cvItemStyle}>
                        <li style={styles.listItemStyle}>{item.name}</li>
                        <ul>
                          <li style={styles.listItemStyle}>{item.place}</li>
                          <li style={styles.listItemStyle}>{item.duration}</li>
                        </ul>
                      </div>
                    );
                  })
                }
              </ul>

              <h2 style={styles.headerTextStyle}>Language skills</h2>
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
              <h2 style={styles.headerTextStyle}>Positions</h2>
              <ul>
                {
                  this.props.positions.reverse().map((item, i) => {
                    return (
                      <div key={i} style={styles.cvItemStyle}>
                        <li style={styles.listItemStyle}>{item.position}</li>
                        <ul>
                          <li style={styles.listItemStyle}>{item.organisation}</li>
                          <li style={styles.listItemStyle}>{item.duration}</li>
                        </ul>
                      </div>
                    );
                  })
                }
              </ul>
            </Col>
            <Col sm={9} md={4} lg={3} className='workhistory' style={styles.colStyle}>
              <h2 style={styles.headerTextStyle}>Workhistory</h2>
              <ul>
                {
                  this.props.workhistory.reverse().map((item, i) => {
                    return (
                      <div key={i} style={styles.cvItemStyle}>
                        <li style={styles.listItemStyle}>{item.position}</li>
                        <ul>
                          <li style={styles.listItemStyle}>{item.employer}</li>
                          <li style={styles.listItemStyle}>{item.duration}</li>
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
              <h2 style={styles.headerTextStyle}>My areas of expertise</h2>
              <p style={{textAlign: 'start'}}>
                {pastParagraph}
              </p>
            </Col>
            <Col sm={9} md={5} lg={5} className='second' style={styles.colStyle}>
              <h2 style={styles.headerTextStyle}>My future plans</h2>
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

const styles: Record<string, React.CSSProperties> = {
  appContainerStyle: {
    textAlign: 'center',
    fontFamily: 'saucer',
    fontWeight: 'lighter',
  },
  cvItemStyle: {
    marginBottom: 15,
  },
  containerStyle: {
    margin: 15,
  },
  colStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    margin: 15,
    color: TEXT_COLOR,
  },
  listItemStyle: {
    textAlign: 'start',
  },
  headerTextStyle: {
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  }
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
  {},
)(CV);

