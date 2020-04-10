import React from 'react';
import {Col, Row} from 'react-grid-system';

import '../App.css';
import {MIN_WIDTH, TEXT_COLOR, DARK_HIGHLIGHT} from '../assets/constants';

interface NavbarButtonProps {
  path: string,
  name: string,
  width: number,
}

class NavbarButton extends React.Component<NavbarButtonProps, {}> {
  render() {
    const {path, name, width} = this.props;
    if (width > MIN_WIDTH) {
      return (
        <Col className={`${name}NavBarButton`} xs={1} sm={1} md={1} lg={1} xl={1} style={styles.navButtonStyle}>
          <a href={path}>{name}</a>
        </Col>
      );
    }
    return (
      <div className="navBarRow">
        <Row justify="center" align="center" className={`${name}NavBarButton`} style={styles.rowStyle}>
          <a href={path}>{name}</a>
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
