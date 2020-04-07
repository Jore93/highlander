import React, {CSSProperties} from 'react';
import {Col} from 'react-grid-system';

import '../App.css';

interface NavbarButtonProps {
  path: string,
  name: string,
}

class NavbarButton extends React.Component<NavbarButtonProps, {}> {
  render() {
    const {path, name} = this.props;
    return (
      <Col className={`${name}NavBarButton`} sm={1} md={1} lg={1} style={styles.navButtonStyle}>
        <a href={path}>{name}</a>
      </Col>
    );
  }
}

export default NavbarButton;

const styles = {
  navButtonStyle: {
    underline: 'none',
    flex: 1,
  },
}
