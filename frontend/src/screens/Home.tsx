import React from 'react';
import {Container, Row} from 'react-grid-system';
import {FaHome, FaGlobe} from 'react-icons/fa';

import Card from '../components/common/Card';
import '../App.css';
import {TEXT_COLOR, BACKGROUND_COLOR} from '../assets/constants';

const Home = () => {
  return (
    <Container className="App-container" style={styles.containerStyle}>
      <Row align="center" justify="around">
        <Card content="Hello" icon={<FaHome size={'100%'} style={styles.iconStyle}/>}/>
        <Card content="World" icon={<FaGlobe size={'100%'} style={styles.iconStyle}/>}/>
      </Row>
    </Container>
  );
}

export default Home;

const styles = {
  containerStyle: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR
  },
  iconStyle: {
    color: TEXT_COLOR,
    backgroundColor: 'invisible',
    flex: 1,
  },
}
