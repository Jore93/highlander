import React from 'react';
import {Container, Col, Row} from 'react-grid-system';
import {FaHome, FaGlobe} from 'react-icons/fa';

import Card from '../components/common/Card';
import logo from '../logo.svg';
import '../App.css';
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';

const Home = () => {
  return (
    <Container className="App-container" style={styles.containerStyle}>
      <Row align="center" justify="around">
        <Col sm={12} md={4} lg={4} style={styles.colStyle}>
          <Card content="Hello" icon={<FaHome size={'100%'} style={styles.iconStyle}/>}/>
        </Col>
        <Col sm={12} md={4} lg={4} style={styles.colStyle}>
          <Card content="World" icon={<FaGlobe size={'100%'} style={styles.iconStyle}/>}/>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#282c34'
  },
  colStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    maxWidth: 450,
    minWidth: 450,
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'blue',
    borderWidth: 1,
  },
  iconStyle: {
    color: TEXT_COLOR,
    backgroundColor: 'invisible',
    flex: 1,
  }
}

/*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing my new app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
*/
