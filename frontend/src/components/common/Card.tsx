import React from 'react'
import {IconBaseProps} from 'react-icons/';

import "../../App.css";
import {TEXT_COLOR, DARK_HIGHLIGHT, HOVER} from '../../assets/constants';

interface CardInterface {
  content: string,
  icon: IconBaseProps,
}

class Card extends React.Component<CardInterface, {}> {
  state = {hover: false};

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    return (
      <div style={this.state.hover ? styles.colStyleHover : styles.colStyle} className="card" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <div className="cardRow" style={styles.iconRowStyle}>
          {this.props.icon}
        </div>

        <div className="cardRow" style={styles.contentRowStyle}>
          <h2 style={{textAlign: 'center'}}>
            {this.props.content}
          </h2>
        </div>
      </div>
    );
  }
}

export default Card;

const styles = {
  colStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    maxWidth: 400,
    minWidth: 400,
    paddingTop: 20,
    margin: 15,
  },
  colStyleHover: {
    backgroundColor: HOVER,
    maxWidth: 400,
    minWidth: 400,
    paddingTop: 20,
    margin: 15,
  },
  iconRowStyle: {
    height: 75,
  },
  contentRowStyle: {
    color: TEXT_COLOR,
  },
}
