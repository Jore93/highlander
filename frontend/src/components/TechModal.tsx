import React, {CSSProperties} from 'react';
import {IconBaseProps} from 'react-icons';
import Modal from 'react-modal';
import {DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';

interface ModalInterface {
  title: string,
  content: string,
  icon: IconBaseProps,
  isOpen: boolean,
}

Modal.setAppElement('#root');

class TechModal extends React.Component<ModalInterface, {}> {

  render() {
    const {title, content, icon} = this.props;
    return (
      <Modal
        isOpen={this.props.isOpen}
        style={{
          overlay: {
            backgroundColor: 'rgba(40,44,52,0.25)'
          },
          content: {
            backgroundColor: DARK_HIGHLIGHT,
            top: 85,  // 50 for NavBar, 35 to have nice padding on bottom
            left: 60,
            right: 60,
            bottom: 60,
            color: TEXT_COLOR,
            position: 'absolute',
            border: `1px solid ${TEXT_COLOR}`,
          }
        }}
      >
        <div style={modalIcon}>
          {icon}
        </div>
        <div style={contentStyle}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Modal>
    );
  }
}

export default TechModal;

const modalIcon: CSSProperties = {
  height: 100,
};

const contentStyle: CSSProperties = {
  textAlign: 'center',
};
