import React from 'react';
import {Container, Row} from 'react-grid-system';

import '../App.css';

import Card from '../components/common/Card';
import {frontendTechs, backendTechs, platforms, toolStack, testTechs, embeddedTechs} from '../techs';
import {IconBaseProps} from 'react-icons';
import TechModal from '../components/common/TechModal';


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
  openModal: Function = () => {
    console.log('open modal');
  }

  render() {
    return (
      <Container className="App-container" >
        {
          techSections.map((section, i) => {
            return (
              <div id='tech-section'>
                <h2>{section.title}</h2>
                <Row key={i} className='reactButton' align='center' justify='center'>
                  {
                    section.stack.map((tech, j) => {
                      return (
                        <div key={j} onClick={this.openModal.bind(this)} >
                          <TechModal title={tech.title} content={tech.content} icon={tech.icon} />
                          <Card content={tech.title} icon={tech.icon} />
                        </div>
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
