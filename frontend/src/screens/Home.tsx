import React from 'react';
import {Container, Row} from 'react-grid-system';
import {FaGlobe, FaCodeBranch, FaCode, FaUserSecret} from 'react-icons/fa';

import Card from '../components/common/Card';
import '../App.css';
import {TEXT_COLOR, BACKGROUND_COLOR} from '../assets/constants';
import Button from '../components/common/Button';

const Home = () => {
  return (
    <Container className="App-container" style={styles.containerStyle}>
      <Row align="center" justify="around">
        <Button
          component={<Card content="Projects" icon={<FaCodeBranch size={'100%'} style={styles.iconStyle} />} />}
          link='/projects'
        />
        <Button
          component={<Card content="Tech stack" icon={<FaCode size={'100%'} style={styles.iconStyle} />} />}
          link='/techstack'
        />
        <Button
          component={<Card content="CV" icon={<FaCode size={'100%'} style={styles.iconStyle} />} />}
          link='/cv'
        />
        <Button
          component={<Card content="About" icon={<FaUserSecret size={'100%'} style={styles.iconStyle}/>}/>}
          link='/about'
        />
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
