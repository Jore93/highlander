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
    const {title, content, icon, isOpen} = this.props;
    const cssClasses = ['tech-modal', isOpen ? 'grow-modal' : 'shrink-modal'];
    return (
      <Modal
        className={cssClasses.join(' ')}
        overlayClassName="overlay-tech-modal"
        isOpen={isOpen}
        closeTimeoutMS={200}
        shouldCloseOnEsc={true}
      >
        <div style={modalIcon}>
          {icon}
        </div>
        <div style={contentStyle}>
          <h2>{title}</h2>
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
