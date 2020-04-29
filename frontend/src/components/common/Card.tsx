import React from 'react'
import {IconBaseProps} from 'react-icons/';

import "../../App.css";
import {TEXT_COLOR} from '../../assets/constants';

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
        className="card"
        onMouseEnter={this.enableHover}
        onMouseLeave={this.disableHover}
      >
        <div className="cardRow">
          {this.props.icon}
        </div>

        <div className="cardRow" style={styles.contentRowStyle}>
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Card;

const styles = {
  contentRowStyle: {
    color: TEXT_COLOR,
  },
}
