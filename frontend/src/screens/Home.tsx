import React from 'react';
import {Container, Row} from 'react-grid-system';
import {Link} from 'react-router-dom';
import {FaCodeBranch, FaCode, FaUserSecret, FaFileAlt} from 'react-icons/fa';

import Card from '../components/common/Card';
import '../App.css';
import {TEXT_COLOR, BACKGROUND_COLOR} from '../assets/constants';


class Home extends React.Component {
  changePage: Function = (newPath: string) => {
    console.log(newPath);
  }

  render() {
    return (
      <Container className="App-container" style={styles.containerStyle}>
        <Row align="center" justify="around">
          <Link to="/projects" className="link">
            <Card
              content="Projects"
              icon={
                <FaCodeBranch
                  size={'100%'}
                  className="icon"
                />
              }
            />
          </Link>
          <Link to="/techstack" className="link">
            <Card
              content="Tech stack"
              icon={
                <FaCode
                  size={'100%'}
                  className="icon"
                />
              }
            />
          </Link>
          <Link to="/cv" className="link">
            <Card
              content="CV"
              icon={
                <FaFileAlt
                  size={'100%'}
                  className="icon"
                />
              }
            />
          </Link>
          <Link to="/about" className="link">
            <Card
              content="About"
              icon={
                <FaUserSecret
                  size={'100%'}
                  className="icon"
                />
              }
            />
          </Link>
        </Row>
      </Container>
    );
  }
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
  rowStyle: {
    marginTop: 15,
    marginBottom: 15,
  }
}
