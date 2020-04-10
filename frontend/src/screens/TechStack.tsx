import React from 'react';
import {Container, Col, Row} from 'react-grid-system';

import '../App.css';

import Card from '../components/common/Card';
import {frontendTechs, backendTechs, cloudTechs} from '../techs';


class TechStack extends React.Component {
  openModal: Function = (page: string) => {
    console.log(page);
  }

  render() {
    return (
      <Container className="App-container" style={styles.containerStyle}>
        <h2>Frontend</h2>
        <Row className='reactButton' align="center" justify="center">
          {
            frontendTechs.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>

        <h2>Backend</h2>
        <Row className='reactButton' align="center" justify="center" >
          {
            backendTechs.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>

        <h3>Cloud techs</h3>
        <Row className='reactButton' align="center" justify="center" >
          {
            cloudTechs.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>
      </Container>
    );
  }
}

export default TechStack;

const styles = {
  containerStyle: {
    flex: 1,
  },
}
