import React from 'react';
import {IconBaseProps} from 'react-icons';
import Modal from 'react-modal';
import {BACKGROUND_COLOR} from '../assets/constants';

interface ModalInterface {
  title: string,
  content: string,
  icon: IconBaseProps,
  isOpen: boolean,
}

class TechModal extends React.Component<ModalInterface, {}> {

  render() {
    const {title, content, icon} = this.props;
    return (
      <Modal
        isOpen={this.props.isOpen}
        //style={styles.modalStyle}
      >
        <div id='modal-icon'>
          {icon}
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </Modal>
    );
  }
}

export default TechModal;

const styles = {
  modalStyle: {
    backgroundColor: 'white'
  }
}
