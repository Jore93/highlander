import React from 'react'
import {Col, Row} from 'react-grid-system';
import {IconBaseProps} from 'react-icons/';

import "../../App.css";
import {TEXT_COLOR, DARK_HIGHLIGHT} from '../../assets/constants';

interface CardInterface {
  content: string,
  icon: IconBaseProps,
}

class Card extends React.Component<CardInterface, {}> {
  render() {
    return (
      <Col style={styles.colStyle} sm={12} md={4} lg={4}>
        <Row className="cardRow" justify="center" align="center" style={styles.iconRowStyle}>
          {this.props.icon}
        </Row>

        <Row className="cardRow" justify="center" align="center" style={styles.contentRowStyle}>
          <h2>
            {this.props.content}
          </h2>
        </Row>
      </Col>
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
    marginTop: 15,
    marginBottom: 15,
    borderColor: 'blue',
    borderWidth: 1,
  },
  iconRowStyle: {
    height: 75,
  },
  contentRowStyle: {
    color: TEXT_COLOR,
  }
}
