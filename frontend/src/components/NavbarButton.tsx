import React from 'react';
import {Link} from 'react-router-dom';
import {Col, Row} from 'react-grid-system';

import '../App.css';
import {MIN_WIDTH, TEXT_COLOR, DARK_HIGHLIGHT} from '../assets/constants';

interface NavbarButtonProps {
  path: string,
  name: string,
  width: number,
  toggleMenu: Function,
}

class NavbarButton extends React.Component<NavbarButtonProps, {}> {
  render() {
    const {path, name, width} = this.props;
    if (width > MIN_WIDTH) {
      return (
        <Col className={`${name}NavBarButton`} sm={1} md={1} lg={1} style={styles.navButtonStyle}>
          <Link to={path}>{name}</Link>
        </Col>
      );
    }
    return (
      <div className="navBarRow">
        <Row justify="center" align="center" className={`${name}NavBarButton`} style={styles.rowStyle}>
          <Link to={path} onClick={() => this.props.toggleMenu()}>{name}</Link>
        </Row>
        <Row style={styles.borderStyle}/>
      </div>
    )
  }
}

export default NavbarButton;

const styles = {
  navButtonStyle: {
    flex: 1,
    underline: 'none',
    margin: 5,
  },
  rowStyle: {
    flex: 1,
    height: 40,
    backgroundColor: DARK_HIGHLIGHT,
  },
  borderStyle: {
    height: 1,
    backgroundColor: TEXT_COLOR,
  }
}
