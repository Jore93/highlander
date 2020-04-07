import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import {Container, Col, Row} from 'react-grid-system';
import {FaBars} from 'react-icons/fa';

import NavbarButton from './NavbarButton';
import Home from '../screens/Home';
import CV from '../screens/CV';
import Me from '../screens/Me';


const minWidth = 560;

class Navbar extends React.Component {
  state = {toggle: false, width: window.innerWidth-15};

  routes = [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/cv",
      name: "CV",
      component: CV,
    },
    {
      path: "/me",
      name: "Me",
      component: Me,
    },
  ];

  toggleMenu = () => {
    this.setState({toggle: !this.state.toggle});
  }

  onResize = (w: number, h: number) => {
    this.setState({width: w});
  }

  renderHamburgerButton = () => {
    if (this.state.width <= minWidth) {
      return (
        <Col className='HamburgerMenuButton' xs={1} sm={1} md={1} lg={1} style={styles.hamburgerColumnStyle}>
          <button className='HamburgerButton' onClick={this.toggleMenu}>
            <FaBars style={styles.hamburgerStyle} size={25}/>
          </button>
        </Col>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="Navbar">
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} >
          <Container fluid style={styles.containerStyle}>
            <Row justify="end" align="center" style={styles.rowStyle}>
              {this.renderHamburgerButton()}
              {this.state.toggle || this.state.width > minWidth?
                this.routes.map((route, i) => {
                  return (
                    <NavbarButton
                      key={i}
                      path={route.path}
                      name={route.name}
                    />
                  );
                }) : null
              }
            </Row>
          </Container>
        </ReactResizeDetector>
      </div>
    );
  }
}

export default Navbar;

const styles = {
  containerStyle: {
    backgroundColor: '#282c34',
  },
  rowStyle: {
    height: 50,
  },
  hamburgerColumnStyle: {
    backgroundColor: 'invisible',
    marginRight: 25,
  },
  hamburgerStyle: {
    color: '#61dafb',
  },
}
