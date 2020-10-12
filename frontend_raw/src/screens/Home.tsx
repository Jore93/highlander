import React from 'react';
import {Container, Row} from 'react-grid-system';
import {Link} from 'react-router-dom';

import Card from '../components/common/Card';
import {links} from '../links';

import {TEXT_COLOR} from '../assets/constants';

interface HomeInterface {
  isAdmin: boolean;
};
interface HomeState {};

class Home extends React.Component<HomeInterface, HomeState> {
  render() {
    return (
      <Container style={styles.appContainerStyle}>
          <Row align="center" justify="around" style={styles.homeRowStyle}>
            {
              links
                .filter(link => {
                  return link.path === '/admin' ? this.props.isAdmin : true
                })
                .map((link, i) => {
                  return (
                    <Link key={i} to={link.path} style={styles.navLinkStyle} >
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

const styles: Record<string, React.CSSProperties> = {
  appContainerStyle: {
    textAlign: 'center',
    fontFamily: 'saucer',
    fontWeight: 'lighter',
  },
  navLinkStyle: {
    display: 'flex',
    textDecoration: 'none',
    color: TEXT_COLOR,
    fontSize: 20,
    fontFamily: 'saucer',
    fontWeight: 'lighter',
    justifyContent: 'center',
  },
  homeRowStyle: {
    marginTop: 15,
  },
};

export default Home;
