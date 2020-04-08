import React, {CSSProperties} from 'react';
import {Col, Row} from 'react-grid-system';

import '../App.css';
import {MIN_WIDTH} from '../assets/constants';

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
        <Col className={`${name}NavBarButton`} xs={1} sm={1} md={1} lg={1} style={styles.navButtonStyle}>
          <a href={path}>{name}</a>
        </Col>
      );
    }
    return (
      <Row className={`${name}NavBarButton`}>
        <a href={path}>{name}</a>
      </Row>
    )
  }
}

export default NavbarButton;

const styles = {
  navButtonStyle: {
    underline: 'none',
    flex: 1,
  },
}
