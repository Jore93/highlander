import React from 'react';
import {Container, Row} from 'react-grid-system';

import '../App.css';

import {frontendTechs, backendTechs, platforms, toolStack, testTechs, embeddedTechs} from '../techs';
import TechItem from '../components/TechItem';


const techSections = [
  {
    title: 'Frontend',
    stack: frontendTechs,
  },
  {
    title: 'Backend',
    stack: backendTechs,
  },
  {
    title: 'Testing and automation technologies',
    stack: testTechs,
  },
  {
    title: 'Platforms',
    stack: platforms,
  },
  {
    title: 'Embedded systems',
    stack: embeddedTechs,
  },
  {
    title: 'Tools',
    stack: toolStack,
  },
]

class TechStack extends React.Component {
  render() {
    return (
      <Container className="App-container" >
        {
          techSections.map((section, i) => {
            return (
              <div key={i} id='tech-section'>
                <h2>{section.title}</h2>
                <Row className='reactButton' align='center' justify='center'>
                  {
                    section.stack.map((tech, j) => {
                      return (
                        <TechItem key={j} title={tech.title} content={tech.content} icon={tech.icon} />
                      );
                    })
                  }
                </Row>
              </div>
            );
          })
        }
      </Container>
    );
  }
}

export default TechStack;
