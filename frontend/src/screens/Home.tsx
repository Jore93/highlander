import React from 'react';
import {Container, Row} from 'react-grid-system';
import {Link} from 'react-router-dom';

import Card from '../components/common/Card';
import {links} from '../links';

import '../App.css';

interface HomeInterface {
  isAdmin: boolean;
};
interface HomeState {};

class Home extends React.Component<HomeInterface, HomeState> {
  render() {
    return (
      <Container className="App-container">
          <Row align="center" justify="around" id='home-row'>
            {
              links
                .filter(link => {
                  return link.path === '/admin' ? this.props.isAdmin : true
                })
                .map((link, i) => {
                  return (
                    <Link key={i} to={link.path} className='link'>
                      <Card content={link.title} icon={link.icon} />
                    </Link>
                  );
                })
            }
          </Row>
      </Container>
    );
  }
}

export default Home;
