import React from 'react';
import {Container, Row} from 'react-grid-system';

import '../App.css';

import {frontendTechs, backendTechs, platforms, toolStack, testTechs, embeddedTechs} from '../techs';
import TechItem from '../components/TechItem';
import {TEXT_COLOR} from '../assets/constants';


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
      <Container style={styles.appContainerStyle}>
        {
          techSections.map((section, i) => {
            return (
              <div key={i} style={styles.techSectionStyle}>
                <h2 style={styles.headerTextStyle}>{section.title}</h2>
                <Row style={styles.reactButtonStyle} align='center' justify='center'>
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

const styles: Record<string, React.CSSProperties> = {
  appContainerStyle: {
    textAlign: 'center',
    fontFamily: 'saucer',
    fontWeight: 'lighter',
  },
  reactButtonStyle: {
    color: TEXT_COLOR,
    fontSize: 22,
    fontFamily: 'saucer',
    fontWeight: 'lighter',
  },
  techSectionStyle: {
    marginTop: 50,
  },
  headerTextStyle: {
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  },
};

export default TechStack;
