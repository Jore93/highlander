import React from 'react';
import {FaReact, FaNodeJs} from 'react-icons/fa';
import {Container, Row} from 'react-grid-system';

import '../App.css';

import Button from '../components/common/Button';
import Card from '../components/common/Card';


class TechStack extends React.Component {
  changePage: Function = (page: string) => {
    console.log(page);
  }

  render() {
    return (
      <Container>
        <h2>Frontend</h2>
        <Row>
          <Button
            component={
              <Card content='React' icon={<FaReact size={'100%'} className="icon" />}/>
            }
            onClick={this.changePage.bind(this, 'react')}
          />
        </Row>
        <h2>Backend</h2>
        <Row>
          <Button component={<Card content='Node.js' icon={<FaNodeJs size={'100%'} className="icon" />}/>} onClick={this.changePage.bind(this, 'node')} />
        </Row>
      </Container>
    );
  }
}

export default TechStack;

// const styles = {
//   iconStyle: {
//     color: TEXT_COLOR,
//     backgroundColor: 'invisible',
//     flex: 1,
//   },
// }
