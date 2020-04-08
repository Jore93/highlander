import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import {Container, Col, Row} from 'react-grid-system';
import {FaBars} from 'react-icons/fa';

import NavbarButton from './NavbarButton';
import Home from '../screens/Home';
import CV from '../screens/CV';
import Me from '../screens/Me';
import {MIN_WIDTH} from '../assets/constants';


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

  renderMenuElements = () => {
    if (this.state.width <= MIN_WIDTH) {
      return (
        <Col xs= {1} sm={1} md={1} lg={1}>
          <Row className='HamburgerMenuButton' style={styles.hamburgerColumnStyle}>
            <button className='HamburgerButton' onClick={this.toggleMenu}>
              <FaBars style={styles.hamburgerStyle} size={25}/>
            </button>
          </Row>
          { this.state.toggle ?
            this.routes.map((route, i) => {
              return (
                <NavbarButton
                  key={i}
                  path={route.path}
                  name={route.name}
                  width={this.state.width}
                />
              );
            }) : null
          }
        </Col>
      );
    }
    return (
      this.routes.map((route, i) => {
        return (
          <NavbarButton
            key={i}
            path={route.path}
            name={route.name}
            width={this.state.width}
          />
        );
      })
    );
  }

  render() {
    return (
      <div className="Navbar">
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize} >
          <Container fluid style={styles.containerStyle}>
            <Row justify={this.state.width < MIN_WIDTH ? "center" : "end"} align="center" style={styles.rowStyle}>
              {this.renderMenuElements()}
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
    justifyContent: 'center',
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
