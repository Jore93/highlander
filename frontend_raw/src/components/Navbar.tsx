import React from 'react';
import {Container, Col, Row} from 'react-grid-system';
import {FaBars, FaHome} from 'react-icons/fa';

import NavbarButton from './NavbarButton';
import {links} from '../links';
import {MIN_WIDTH, BACKGROUND_COLOR, TEXT_COLOR, BLACK, NAVBAR_HEIGHT} from '../assets/constants';

interface NavbarInterface {
  isAdmin: Boolean;
};
interface NavbarState {
  toggle: boolean;
  width: number;
}

class Navbar extends React.Component<NavbarInterface, NavbarState> {
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
      title: <h2 style={styles.headerTextStyle}>Home</h2>,
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
        <Col sm={12} md={12} lg={12}> {/* Column has maximum height on mobile for some reason*/}
          <Row justify="center" align="center" className='HamburgerMenuButton' style={styles.hamburgerColumnStyle}>
            <button style={styles.hamburgerButtonStyle} onClick={this.toggleMenu}>
              <FaBars style={styles.hamburgerStyle} size={25}/>
            </button>
          </Row>
          { this.state.toggle ?
            this.routes.map((route, i) => {
              return (
                <NavbarButton
                  key={i}
                  path={route.path}
                  nameElement={route.title}
                  width={this.state.width}
                  toggleMenu={this.toggleMenu}
                />
              );
            }) : null
          }
        </Col>
      );
    }
    return (
      this.routes
        .filter((route) => {
          return route.path === '/admin' ? this.props.isAdmin : true;
        })
        .map((route, i) => {
          return (
            <NavbarButton
              key={i}
              path={route.path}
              nameElement={route.title}
              width={this.state.width}
              toggleMenu={this.toggleMenu}
            />
          );
        })
    );
  }

  render() {
    return (
      <div style={styles.navbarStyle}>
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

const styles: Record<string, React.CSSProperties> = {
  navbarStyle: {
    top: 0,
    position: 'sticky',
    zIndex: 10,
  },
  containerStyle: {
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
  },
  rowStyle: {
    height: NAVBAR_HEIGHT,
    backgroundColor: BLACK,
  },
  hamburgerColumnStyle: {
    backgroundColor: 'invisible',
    height: NAVBAR_HEIGHT,
  },
  hamburgerButtonStyle: {
    backgroundColor: BLACK,
    border: 'none',
  },
  hamburgerStyle: {
    color: TEXT_COLOR,
  },
  headerTextStyle: {
    textAlign: 'center',
    wordWrap: 'break-word',
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  }
}
