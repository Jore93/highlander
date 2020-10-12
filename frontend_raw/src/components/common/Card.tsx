import React from 'react'
import {IconBaseProps} from 'react-icons/';

import "../../App.css";
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../../assets/constants';

interface CardInterface {
  content: JSX.Element,
  icon: IconBaseProps,
}

class Card extends React.Component<CardInterface, {}> {
  state = {hover: false};

  enableHover = () => {
    this.setState({hover: true});
  }
  disableHover = () => {
    this.setState({hover: false});
  }

  render() {
    return (
      <div
        onMouseEnter={this.enableHover}
        onMouseLeave={this.disableHover}
        style={styles.cardStyle}
      >
        <div style={styles.cardRowStyle}>
          {this.props.icon}
        </div>

        <div style={styles.contentRowStyle}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card;

const styles: Record<string, React.CSSProperties> = {
  cardStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: DARK_HIGHLIGHT,
    width: '20rem',
    height: '20rem',
    margin: 15,
    justifyContent: 'center',
  },
  cardRowStyle: {
    height: 100,
  },
  contentRowStyle: {
    //height: 100,
    color: TEXT_COLOR,
  },
}
