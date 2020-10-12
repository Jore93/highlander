import React from 'react';
import {Link} from 'react-router-dom';
import {Row} from 'react-grid-system';

import '../App.css';
import {MIN_WIDTH, TEXT_COLOR, DARK_HIGHLIGHT} from '../assets/constants';

interface NavbarButtonProps {
  path: string,
  nameElement: JSX.Element,
  width: number,
  toggleMenu: Function,
}

class NavbarButton extends React.Component<NavbarButtonProps, {}> {
  render() {
    const {path, nameElement, width} = this.props;
    const name = nameElement.props.children;

    if (width > MIN_WIDTH) {
      return (
        <div className={`${name}NavBarButton`} style={styles.navButtonStyle}>
          <Link style={styles.navLinkStyle} to={path}>{name}</Link>
        </div>
      );
    }
    return (
      <Row justify="center" align="center" className={`${name}NavBarButton`} style={styles.rowStyle}>
        <Link style={styles.navLinkStyle} to={path} onClick={() => this.props.toggleMenu()}>
          {name}
        </Link>
      </Row>
    )
  }
}

export default NavbarButton;

const styles: Record<string, React.CSSProperties> = {
  navButtonStyle: {
    //underline: 'none',
    margin: 15,
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
  rowStyle: {
    height: 40,
    backgroundColor: DARK_HIGHLIGHT,
    borderBottom: `1px solid ${TEXT_COLOR}`,
  },
  borderStyle: {
    height: 1,
    backgroundColor: TEXT_COLOR,
  },
}
