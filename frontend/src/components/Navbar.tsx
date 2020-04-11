import React from 'react';
import {Container, Col, Row} from 'react-grid-system';
import {FaBars, FaHome} from 'react-icons/fa';

import NavbarButton from './NavbarButton';
import {links} from '../links';
import {MIN_WIDTH, BACKGROUND_COLOR, TEXT_COLOR, BLACK} from '../assets/constants';


class Navbar extends React.Component {
  state = {
    toggle: false,
    width: window.innerWidth - 15,
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  routes = [
    {
      path: "/",
      title: "Home",
      icon: <FaHome size={'100%'} className='icon' />,
    },
  ].concat(links);

  toggleMenu = () => {
    this.setState({toggle: !this.state.toggle});
  }

  updateWidth = () => {
    this.setState({width: window.innerWidth});
  }

  renderMenuElements = () => {
    if (this.state.width <= MIN_WIDTH) {
      return (
        <Col sm={12} md={12} lg={12} style={styles.columnStyle}>
          <Row justify="center" align="center" className='HamburgerMenuButton' style={styles.hamburgerColumnStyle}>
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
                  name={route.title}
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
            name={route.title}
            width={this.state.width}
          />
        );
      })
    );
  }

  render() {
    return (
      <div className="Navbar">
        <Container fluid style={styles.containerStyle}>
          <Row justify={this.state.width < MIN_WIDTH ? "center" : "end"} align="center" style={styles.rowStyle}>
            {this.renderMenuElements()}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Navbar;

const styles = {
  containerStyle: {
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
  },
  columnStyle: {
    flex: 1,
  },
  rowStyle: {
    height: 50,
    backgroundColor: BLACK,
  },
  hamburgerColumnStyle: {
    backgroundColor: 'invisible',
    flex: 1,
    height: 50,
  },
  hamburgerStyle: {
    color: TEXT_COLOR,
  },
}
