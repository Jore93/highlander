import React from 'react';
import {Container, Row} from 'react-grid-system';

import '../App.css';

import Card from '../components/common/Card';
import {frontendTechs, backendTechs, platforms, toolStack, testTechs, embeddedTechs} from '../techs';


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

        <h2>Testing and automation technologies</h2>
        <Row className='reactButton' align="center" justify="center" >
          {
            testTechs.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>

        <h2>Platforms</h2>
        <Row className='reactButton' align="center" justify="center" >
          {
            platforms.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>

        <h2>Embedded systems</h2>
        <Row className='reactButton' align="center" justify="center" >
          {
            embeddedTechs.map((tech, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tech.name)}>
                  <Card content={tech.name} icon={tech.icon} />
                </div>
              );
            })
          }
        </Row>

        <h2>Tools</h2>
        <Row className='reactButton' align="center" justify='center' >
          {
            toolStack.map((tool, i) => {
              return (
                <div key={i} onClick={this.openModal.bind(this, tool.name)}>
                  <Card content={tool.name} icon={tool.icon} />
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
