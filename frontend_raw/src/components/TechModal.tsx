import React from 'react';
import {IconBaseProps} from 'react-icons';
import Modal from 'react-modal';
import styled, {css, Keyframes, keyframes} from 'styled-components';

import {BACKGROUND_COLOR, DARK_HIGHLIGHT, TEXT_COLOR} from '../assets/constants';

interface ModalInterface {
  title: React.ReactNode,
  content: string,
  icon: IconBaseProps,
  isOpen: boolean,
}

Modal.setAppElement('#root');

class TechModal extends React.Component<ModalInterface, {}> {
  animation = (modal: Keyframes) => {
    return css`${modal} 0.5s ease`;
  };

  render() {
    const {title, content, icon, isOpen} = this.props;
    const modalStyle = {
      content: styles.techModalStyle,
      overlay: styles.overlayTechModalStyle,
    };
    return (
      <Modal
        className={isOpen ? 'grow-modal' : 'shrink-modal'}
        //overlayClassName='overlay-tech-modal'
        style={modalStyle}
        isOpen={isOpen}
        closeTimeoutMS={200}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
      >
        <div style={styles.modalIcon}>
          {icon}
        </div>
        <div style={styles.contentStyle}>
          <h2 style={styles.headerTextStyle}>{title}</h2>
          <p style={styles.paragraphTextStyle}>{content}</p>
        </div>
      </Modal>
    );
  }
}

export default TechModal;

const growModal = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const shrinkModal = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0);
  }
`;

const styles: Record<string, React.CSSProperties> = {
  modalIcon: {
    marginTop: 30,
    height: 100,
  },
  contentStyle: {
    textAlign: 'center',
  },
  overlayTechModalStyle: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: BACKGROUND_COLOR,
  },
  techModalStyle: {
    backgroundColor: DARK_HIGHLIGHT,
    position: 'fixed',
    top: 100,
    right: 50,
    left: 50,
    bottom: 50,
    color: TEXT_COLOR,
    border: `1px solid ${TEXT_COLOR}`,
  },
  headerTextStyle: {
    color: TEXT_COLOR,
    fontSize: 36,
    fontWeight: 'lighter',
    fontFamily: 'saucer',
  },
  paragraphTextStyle: {
    color: TEXT_COLOR,
    fontFamily: 'typewriter',
    fontSize: 18,
  }
};
