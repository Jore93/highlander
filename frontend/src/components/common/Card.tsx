import React from 'react'
import {Col, Row} from 'react-grid-system';
import {IconBaseProps} from 'react-icons/';

import "../../App.css";
import {TEXT_COLOR} from '../../assets/constants';

interface CardInterface {
  content: string,
  icon: IconBaseProps,
}

class Card extends React.Component<CardInterface, {}> {
  render() {
    return (
      <Col style={styles.colStyle} xs={12} sm={12} md={12} lg={12} xl={12}>
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
    marginTop: 15,
    marginBottom: 15,
  },
  iconRowStyle: {
    height: 75,
  },
  contentRowStyle: {
    color: TEXT_COLOR,
  }
}
